/**
 * KEOS HubSpot Proxy (no framework).
 * Run: node hubspot-proxy.js
 */

const http = require("http");
const { URL } = require("url");

const PORT = process.env.PORT || 8787;
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

if (!HUBSPOT_TOKEN) {
  console.warn("[WARN] HUBSPOT_PRIVATE_APP_TOKEN is missing. API calls will fail.");
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  res.end(JSON.stringify(payload));
}

function sanitizeText(value, fallback = "") {
  if (typeof value !== "string") return fallback;
  return value.trim();
}

async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 2_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

async function hubspotRequest(path, method, body) {
  const response = await fetch(`https://api.hubapi.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }

  if (!response.ok) {
    const error = new Error(`HubSpot API ${method} ${path} failed (${response.status})`);
    error.status = response.status;
    error.details = json;
    throw error;
  }
  return json;
}

async function upsertContact(payload) {
  const candidate = payload.candidate || {};
  const quiz = payload.quiz || {};
  const errors = Array.isArray(payload.errors) ? payload.errors : [];

  const email = sanitizeText(candidate.email);
  if (!email) {
    throw new Error("Email is required");
  }

  const properties = {
    email,
    firstname: sanitizeText(candidate.firstName),
    lastname: sanitizeText(candidate.lastName),
    phone: sanitizeText(candidate.phone),
    age: sanitizeText(candidate.age),
    quiz_level: sanitizeText(quiz.levelLabel || quiz.levelKey),
    quiz_score_percent: Number(quiz.scorePercent || 0),
    quiz_note_20: Number(quiz.noteSur20 || 0),
    quiz_performance_level: sanitizeText(quiz.performance),
    quiz_correct_count: Number(quiz.correctCount || 0),
    quiz_total_mcq: Number(quiz.totalMcq || 0),
    quiz_attempted_at: sanitizeText(quiz.attemptedAt),
    quiz_record_percent: Number(quiz.recordPercent || 0),
    quiz_objective: sanitizeText(candidate.objective),
    quiz_source: "keos-quiz-web",
  };

  const search = await hubspotRequest("/crm/v3/objects/contacts/search", "POST", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "email",
            operator: "EQ",
            value: email,
          },
        ],
      },
    ],
    limit: 1,
  });

  let contactId = null;
  if (search.results && search.results.length > 0) {
    contactId = search.results[0].id;
    await hubspotRequest(`/crm/v3/objects/contacts/${contactId}`, "PATCH", { properties });
  } else {
    const created = await hubspotRequest("/crm/v3/objects/contacts", "POST", { properties });
    contactId = created.id;
  }

  // Optional note: store top 10 errors for review.
  if (contactId && errors.length > 0) {
    const lines = errors.slice(0, 10).map(
      (e, i) =>
        `${i + 1}) [${e.section}] ${e.question}\n- Reponse candidat: ${e.selected}\n- Bonne reponse: ${e.correct}`
    );
    const noteBody = `Resultat Quiz KEOS\nNiveau: ${sanitizeText(quiz.levelLabel || quiz.levelKey)}\nScore: ${Number(
      quiz.scorePercent || 0
    )}%\n\nErreurs:\n${lines.join("\n\n")}`;

    const note = await hubspotRequest("/crm/v3/objects/notes", "POST", {
      properties: {
        hs_note_body: noteBody,
        hs_timestamp: new Date().toISOString(),
      },
    });

    await hubspotRequest("/crm/v3/associations/notes/contacts/batch/create", "POST", {
      inputs: [
        {
          from: { id: note.id },
          to: { id: contactId },
          type: "note_to_contact",
        },
      ],
    });
  }

  return { contactId };
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "OPTIONS") {
    return sendJson(res, 200, { ok: true });
  }

  if (req.method === "GET" && url.pathname === "/health") {
    return sendJson(res, 200, { ok: true, service: "hubspot-proxy" });
  }

  if (req.method === "POST" && url.pathname === "/api/quiz-lead") {
    try {
      if (!HUBSPOT_TOKEN) {
        return sendJson(res, 500, {
          ok: false,
          error: "Missing HUBSPOT_PRIVATE_APP_TOKEN",
        });
      }

      const body = await parseBody(req);
      const result = await upsertContact(body);
      return sendJson(res, 200, { ok: true, ...result });
    } catch (error) {
      return sendJson(res, error.status || 400, {
        ok: false,
        error: error.message,
        details: error.details || null,
      });
    }
  }

  return sendJson(res, 404, { ok: false, error: "Not found" });
});

server.listen(PORT, () => {
  console.log(`[hubspot-proxy] running on http://localhost:${PORT}`);
});

