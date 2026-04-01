const QUESTION_TIME = 20;
// Local dev uses the standalone proxy on :8787.
// In Vercel, the proxy must be implemented as a serverless function at `/api/quiz-lead`.
const LEAD_API_URL =
  (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "http://localhost:8787/api/quiz-lead"
    : "/api/quiz-lead";

const q = (id, section, text, options, correct) => ({
  id,
  type: "mcq",
  section,
  text,
  options,
  correct,
});

const openQ = (id, section, text) => ({
  id,
  type: "open",
  section,
  text,
});

const QUIZ_DATA = {
  bac2: {
    label: "Bac+2 NTC / BTS",
    questions: [
      q("b2-1", "Culture Générale", "Quelle institution est responsable de la politique monétaire dans la zone euro et décide notamment des taux d’intérêt ?", ["La Commission européenne", "La Banque Centrale Européenne", "Le FMI", "La Banque mondiale"], 1),
      q("b2-2", "Culture Générale", "Le régime politique français est généralement défini comme :", ["Un régime présidentiel pur", "Un régime parlementaire", "Un régime semi-présidentiel", "Une monarchie constitutionnelle"], 2),
      q("b2-3", "Culture Générale", "En économie, l’inflation correspond à :", ["Une baisse généralisée des prix", "Une augmentation générale et durable des prix", "Une hausse des salaires uniquement", "Une baisse du chômage"], 1),
      q("b2-4", "Culture Générale", "Qui est l’auteur du célèbre roman dystopique “1984” ?", ["Albert Camus", "George Orwell", "Franz Kafka", "Émile Zola"], 1),
      q("b2-5", "Culture Générale", "Quelle est aujourd’hui la première puissance économique mondiale en termes de PIB nominal ?", ["La Chine", "Les États-Unis", "Le Japon", "L’Allemagne"], 1),
      q("b2-6", "Culture Générale", "Le Brexit désigne :", ["Une crise financière européenne", "La sortie du Royaume-Uni de l’Union européenne", "Un accord commercial", "Une réforme monétaire"], 1),
      q("b2-7", "Culture Générale", "Quel est le rôle principal de l’Organisation des Nations Unies (ONU) ?", ["Gérer les politiques économiques", "Maintenir la paix et la sécurité internationale", "Réguler les entreprises", "Créer des lois nationales"], 1),
      q("b2-8", "Culture Générale", "Une démocratie moderne repose principalement sur :", ["Le pouvoir militaire", "Des élections libres et régulières", "Une monarchie forte", "Un parti unique"], 1),
      q("b2-9", "Culture Générale", "La mondialisation peut être définie comme :", ["Une fermeture des économies", "Une interconnexion croissante des économies et des échanges", "Une isolation des pays", "Une suppression du commerce"], 1),
      q("b2-10", "Culture Générale", "Le réchauffement climatique correspond à :", ["Un phénomène local temporaire", "Une augmentation globale et durable des températures", "Un refroidissement global", "Une simple variation naturelle"], 1),
      q("b2-11", "Business & Vente", "Le CRM (Customer Relationship Management) est un outil qui permet principalement de :", ["Gérer les relations avec les clients", "Produire des biens", "Gérer les salaires", "Faire de la publicité"], 0),
      q("b2-12", "Business & Vente", "Dans un processus commercial, un prospect est défini comme :", ["Un client fidèle", "Une personne susceptible de devenir client", "Un fournisseur", "Un concurrent"], 1),
      q("b2-13", "Business & Vente", "Le chiffre d’affaires d’une entreprise correspond à :", ["Son bénéfice net", "Le total de ses ventes", "Ses charges", "Son capital"], 1),
      q("b2-14", "Business & Vente", "Lorsqu’un client exprime une objection, cela signifie généralement :", ["Qu’il refuse définitivement", "Qu’il exprime un frein ou une hésitation", "Qu’il accepte l’offre", "Qu’il a déjà acheté"], 1),
      q("b2-15", "Business & Vente", "Le marketing a pour objectif principal de :", ["Produire des biens", "Attirer et convaincre des clients", "Livrer des produits", "Gérer les employés"], 1),
      q("b2-16", "Business & Vente", "La fidélisation client consiste à :", ["Trouver de nouveaux clients uniquement", "Maintenir une relation durable avec les clients existants", "Réduire les prix", "Ignorer les retours clients"], 1),
      q("b2-17", "Business & Vente", "Le networking correspond au fait de :", ["Vendre rapidement", "Développer un réseau de relations professionnelles", "Gérer les stocks", "Réduire les coûts"], 1),
      q("b2-18", "Business & Vente", "La marge correspond à :", ["Le chiffre d’affaires", "La différence entre le coût et le prix de vente", "Le salaire", "Les taxes"], 1),
      q("b2-19", "Business & Vente", "Un lead est généralement considéré comme :", ["Un client perdu", "Un prospect identifié", "Un salarié", "Un fournisseur"], 1),
      q("b2-20", "Business & Vente", "Le closing correspond à :", ["La prospection", "La finalisation de la vente", "Le service après-vente", "La livraison"], 1),
      q("b2-21", "Business & Vente", "Le ROI (Return On Investment) permet de mesurer :", ["Le nombre de clients", "La rentabilité d’un investissement", "Le chiffre d’affaires", "Les coûts"], 1),
      q("b2-22", "Business & Vente", "Un bon commercial se distingue principalement par sa capacité à :", ["Parler beaucoup", "Écouter et comprendre le client", "Forcer la vente", "Ignorer les objections"], 1),
      q("b2-23", "Business & Vente", "Une vente efficace repose avant tout sur :", ["La pression exercée sur le client", "La compréhension des besoins du client", "Le hasard", "Le prix uniquement"], 1),
      q("b2-24", "Business & Vente", "Une offre commerciale correspond à :", ["Une proposition faite à un client", "Un salaire", "Un produit uniquement", "Une charge"], 0),
      q("b2-25", "Business & Vente", "Un client satisfait est un client qui :", ["Ne revient jamais", "Peut revenir et recommander", "Refuse l’offre", "Ignore l’entreprise"], 1),
      q("b2-26", "Business & Vente", "Un argument commercial est :", ["Une justification destinée à convaincre", "Un produit", "Une vente", "Une facture"], 0),
      q("b2-27", "Business & Vente", "Comprendre le besoin du client est :", ["Optionnel", "Essentiel dans la vente", "Inutile", "Secondaire"], 1),
      q("b2-28", "Business & Vente", "La vente est avant tout :", ["Une relation", "Une pression", "Un hasard", "Une chance"], 0),
      q("b2-29", "Business & Vente", "Le prix d’un produit dépend souvent de :", ["La valeur perçue par le client", "Le hasard", "Les employés", "Le marketing uniquement"], 0),
      q("b2-30", "Business & Vente", "L’objectif principal d’un commercial est de :", ["Parler", "Vendre tout en satisfaisant le client", "Forcer", "Ignorer"], 1),
      q("b2-31", "Personnalité", "Face à une difficulté importante dans ton travail, tu as tendance à :", ["Abandonner rapidement", "Chercher activement une solution", "Attendre que ça passe", "Éviter le problème"], 1),
      q("b2-32", "Personnalité", "Lorsque tu travailles sur un projet, tu préfères :", ["Travailler seul", "Travailler en équipe", "Alterner selon les situations", "Ne pas t’impliquer"], 2),
      q("b2-33", "Personnalité", "Comment décrirais-tu ton niveau de motivation au quotidien ?", ["Faible", "Moyen", "Élevé", "Très élevé"], 3),
      q("b2-34", "Personnalité", "Face à une situation stressante, tu réagis généralement en :", ["Paniquant", "Gardant ton calme", "Fuyant la situation", "Te bloquant"], 1),
      q("b2-35", "Personnalité", "Lorsque tu échoues, ta réaction est plutôt de :", ["Abandonner", "Apprendre et recommencer", "Ignorer l’échec", "Blâmer les autres"], 1),
      q("b2-36", "Personnalité", "Ton niveau d’organisation est plutôt :", ["Désorganisé", "Moyen", "Organisé", "Très structuré"], 3),
      q("b2-37", "Personnalité", "Dans un groupe, tu prends des initiatives :", ["Jamais", "Parfois", "Souvent", "Très souvent"], 3),
      q("b2-38", "Personnalité", "Ta capacité à communiquer avec les autres est :", ["Difficile", "Correcte", "Bonne", "Excellente"], 3),
      q("b2-39", "Personnalité", "À l’oral, tu te sens :", ["Pas à l’aise", "Moyennement à l’aise", "À l’aise", "Très à l’aise"], 3),
      q("b2-40", "Personnalité", "Ton objectif principal dans la vie professionnelle est :", ["La stabilité", "Gagner de l’argent", "Réussir", "Être libre"], 2),
      q("b2-41", "Anglais", "Que signifie la phrase : “I work in sales and I manage clients” ?", ["Je travaille en marketing", "Je travaille en vente et je gère des clients", "Je produis des biens", "Je suis étudiant"], 1),
      q("b2-42", "Anglais", "Le mot “customer” signifie :", ["Fournisseur", "Client", "Employé", "Manager"], 1),
      q("b2-43", "Anglais", "Que signifie le verbe “to sell” ?", ["Acheter", "Vendre", "Donner", "Louer"], 1),
      q("b2-44", "Anglais", "Que signifie “We have a meeting tomorrow” ?", ["Nous avons une réunion demain", "Nous vendons demain", "Nous achetons demain", "Nous partons demain"], 0),
      q("b2-45", "Anglais", "Le mot “money” signifie :", ["Temps", "Argent", "Travail", "Produit"], 1),
      q("b2-46", "Anglais", "“Team” signifie :", ["Équipe", "Client", "Produit", "Vente"], 0),
      q("b2-47", "Anglais", "“Goal” signifie :", ["Objectif", "Produit", "Vente", "Client"], 0),
      q("b2-48", "Anglais", "Que signifie “Good job” ?", ["Mauvais travail", "Bon travail", "Travail lent", "Travail difficile"], 1),
      q("b2-49", "Anglais", "Le verbe “to buy” signifie :", ["Vendre", "Acheter", "Louer", "Donner"], 1),
      q("b2-50", "Anglais", "“Work” signifie :", ["Travail", "Produit", "Client", "Salaire"], 0),
    ],
  },
  bac3: {
    label: "Bachelor RDA",
    questions: [
      q("b3-1", "Culture Générale", "Le Produit Intérieur Brut (PIB) permet principalement de mesurer :", ["La richesse totale d’un pays", "La production de richesse sur une période donnée", "Le niveau de vie moyen", "Le pouvoir d’achat"], 1),
      q("b3-2", "Culture Générale", "Une politique monétaire restrictive mise en place par une banque centrale vise généralement à :", ["Stimuler la croissance", "Réduire l’inflation", "Augmenter les salaires", "Réduire les impôts"], 1),
      q("b3-3", "Culture Générale", "Qui est considéré comme le père de l’économie moderne et du libéralisme économique ?", ["Karl Marx", "John Keynes", "Adam Smith", "Milton Friedman"], 2),
      q("b3-4", "Culture Générale", "Un marché oligopolistique se caractérise par :", ["Un seul acteur dominant", "Une multitude d’acteurs", "Quelques acteurs dominants", "L’absence de concurrence"], 2),
      q("b3-5", "Culture Générale", "La dette publique correspond à :", ["La dette des entreprises", "La dette des ménages", "L’ensemble des dettes de l’État", "Les crédits bancaires"], 2),
      q("b3-6", "Culture Générale", "Le concept de “soft power” désigne :", ["La puissance militaire", "L’influence culturelle et diplomatique", "La puissance industrielle", "La domination économique"], 1),
      q("b3-7", "Culture Générale", "Une externalité négative correspond à :", ["Un effet positif indirect", "Un coût indirect pour la société", "Une taxe imposée", "Une production excessive"], 1),
      q("b3-8", "Culture Générale", "La croissance économique est principalement favorisée par :", ["La baisse de la population", "L’innovation et l’investissement", "L’augmentation des impôts", "La réduction des échanges"], 1),
      q("b3-9", "Culture Générale", "La balance commerciale d’un pays correspond à :", ["Son PIB", "La différence entre exportations et importations", "Ses recettes fiscales", "Son taux de chômage"], 1),
      q("b3-10", "Culture Générale", "Une situation de monopole correspond à :", ["Plusieurs entreprises dominantes", "Une seule entreprise sur le marché", "Une forte concurrence", "Une absence totale d’offre"], 1),
      q("b3-11", "Business & Vente", "Un lead qualifié correspond à :", ["Un client perdu", "Un prospect ayant un réel potentiel d’achat", "Un fournisseur", "Un salarié"], 1),
      q("b3-12", "Business & Vente", "Le coût d’acquisition client (CAC) correspond à :", ["Le chiffre d’affaires généré par client", "Le coût nécessaire pour acquérir un client", "Le bénéfice réalisé", "Le prix du produit"], 1),
      q("b3-13", "Business & Vente", "Le LTV (Lifetime Value) représente :", ["Le coût d’un client", "La valeur totale générée par un client sur la durée", "Le panier moyen", "Le nombre d’achats"], 1),
      q("b3-14", "Business & Vente", "Une stratégie d’upsell consiste à :", ["Vendre un produit moins cher", "Vendre un produit plus premium", "Offrir un produit", "Réduire les coûts"], 1),
      q("b3-15", "Business & Vente", "Le cross-sell consiste à :", ["Vendre un produit complémentaire", "Réduire les prix", "Vendre en masse", "Changer de marché"], 0),
      q("b3-16", "Business & Vente", "Un tunnel de vente (sales funnel) sert à :", ["Livrer les produits", "Convertir des prospects en clients", "Gérer les stocks", "Recruter"], 1),
      q("b3-17", "Business & Vente", "Une objection client est généralement :", ["Un refus définitif", "Une opportunité de mieux convaincre", "Une erreur du client", "Une vente ratée"], 1),
      q("b3-18", "Business & Vente", "Un bon closing repose principalement sur :", ["La pression", "La compréhension du besoin et du timing", "Le hasard", "Le prix le plus bas"], 1),
      q("b3-19", "Business & Vente", "La fidélisation client permet :", ["D’augmenter les coûts", "D’améliorer la rentabilité", "De réduire le chiffre d’affaires", "De limiter la croissance"], 1),
      q("b3-20", "Business & Vente", "Le ROI permet de mesurer :", ["Le nombre de clients", "La rentabilité d’un investissement", "Le chiffre d’affaires", "Le volume de vente"], 1),
      q("b3-21", "Business & Vente", "Un KPI est :", ["Un produit", "Un indicateur de performance", "Un client", "Un outil marketing"], 1),
      q("b3-22", "Business & Vente", "Le branding correspond à :", ["La vente directe", "L’image et la perception de la marque", "Le prix", "Le produit"], 1),
      q("b3-23", "Business & Vente", "La proposition de valeur permet de :", ["Réduire les coûts", "Se différencier sur le marché", "Augmenter les prix", "Recruter"], 1),
      q("b3-24", "Business & Vente", "Une stratégie de différenciation consiste à :", ["Copier les concurrents", "Se démarquer clairement", "Réduire les prix", "Ignorer le marché"], 1),
      q("b3-25", "Business & Vente", "La scalabilité d’un business signifie :", ["Sa stabilité", "Sa capacité à croître rapidement sans exploser les coûts", "Sa rentabilité immédiate", "Sa taille"], 1),
      q("b3-26", "Business & Vente", "Le taux de conversion correspond à :", ["Le nombre de visiteurs", "Le pourcentage de prospects devenant clients", "Le chiffre d’affaires", "Le nombre de ventes"], 1),
      q("b3-27", "Business & Vente", "Une stratégie marketing efficace repose sur :", ["Le hasard", "La compréhension du client", "Le prix uniquement", "La concurrence"], 1),
      q("b3-28", "Business & Vente", "L’acquisition client correspond à :", ["Garder les clients", "Attirer de nouveaux clients", "Vendre plus cher", "Réduire les coûts"], 1),
      q("b3-29", "Business & Vente", "Une stratégie long terme efficace combine généralement :", ["Acquisition uniquement", "Fidélisation uniquement", "Acquisition + fidélisation", "Réduction des coûts"], 2),
      q("b3-30", "Business & Vente", "Le positionnement de marché correspond à :", ["Le prix", "La place occupée dans l’esprit du client", "Le chiffre d’affaires", "Le produit"], 1),
      q("b3-31", "Personnalité", "Face à un challenge complexe, tu as tendance à :", ["L’éviter", "Le tenter sans stratégie", "L’analyser et agir", "Prendre le lead"], 3),
      q("b3-32", "Personnalité", "Ta prise de décision est plutôt :", ["Lente", "Influencée", "Rapide et réfléchie", "Stratégique"], 3),
      q("b3-33", "Personnalité", "Ton rapport à l’échec est :", ["Bloquant", "Difficile", "Formateur", "Motivant"], 3),
      q("b3-34", "Personnalité", "Sous pression, tu es :", ["Inefficace", "Moyen", "Efficace", "Très performant"], 3),
      q("b3-35", "Personnalité", "Ton organisation de travail est :", ["Désorganisée", "Moyenne", "Structurée", "Optimisée"], 3),
      q("b3-36", "Personnalité", "Dans un groupe, tu es plutôt :", ["Suiveur", "Participant", "Leader", "Leader influent"], 3),
      q("b3-37", "Personnalité", "Ta communication est :", ["Faible", "Correcte", "Impactante", "Très persuasive"], 3),
      q("b3-38", "Personnalité", "Tu prends des initiatives :", ["Rarement", "Parfois", "Souvent", "Constamment"], 3),
      q("b3-39", "Personnalité", "Tu es capable de t’adapter :", ["Difficilement", "Moyennement", "Facilement", "Très rapidement"], 3),
      q("b3-40", "Personnalité", "Ton ambition professionnelle est :", ["Stabilité", "Évolution", "Réussite", "Excellence"], 3),
      q("b3-41", "Anglais", "“I am currently working on a sales strategy to increase revenue” signifie :", ["Je cherche un emploi", "Je travaille sur une stratégie pour augmenter le chiffre d’affaires", "Je réduis les ventes", "Je recrute"], 1),
      q("b3-42", "Anglais", "“Customer retention is essential for long-term growth” signifie :", ["La fidélisation est essentielle", "L’acquisition est inutile", "Le marketing est inutile", "La vente est finie"], 0),
      q("b3-43", "Anglais", "“We need to improve our conversion rate” signifie :", ["Réduire les ventes", "Améliorer le taux de conversion", "Supprimer les clients", "Produire"], 1),
      q("b3-44", "Anglais", "“High-value client” désigne :", ["Un client difficile", "Un client rentable", "Un client perdu", "Un client récent"], 1),
      q("b3-45", "Anglais", "“Deadline” signifie :", ["Objectif", "Date limite", "Budget", "Produit"], 1),
      q("b3-46", "Anglais", "“Strong communication skills are required” signifie :", ["Mauvaise communication", "Bonne communication nécessaire", "Aucune communication", "Silence"], 1),
      q("b3-47", "Anglais", "“We are targeting a new market segment” signifie :", ["On ferme le marché", "On vise un nouveau segment", "On réduit", "On supprime"], 1),
      q("b3-48", "Anglais", "“Business growth depends on strategy and execution” signifie :", ["Croissance dépend du hasard", "Croissance dépend stratégie et exécution", "Croissance dépend prix", "Croissance dépend produit"], 1),
      q("b3-49", "Anglais", "“Negotiation skills are key in sales” signifie :", ["Négociation inutile", "Négociation importante", "Vente inutile", "Produit important"], 1),
      q("b3-50", "Anglais", "“We need a scalable business model” signifie :", ["Modèle limité", "Modèle adaptable à grande échelle", "Modèle fixe", "Modèle lent"], 1),
    ],
  },
  master: {
    label: "MASTÈRE MCM",
    questions: [
      q("m-1", "Culture Générale", "Une politique budgétaire expansionniste consiste généralement à :", ["Réduire les dépenses publiques", "Augmenter les dépenses ou réduire les impôts pour stimuler l’économie", "Stabiliser les finances publiques", "Augmenter les taxes"], 1),
      q("m-2", "Culture Générale", "Le paradoxe de l’épargne (Keynes) explique que :", ["Plus on épargne, plus l’économie croît", "Une épargne excessive peut freiner la croissance économique", "L’épargne est inutile", "L’épargne augmente l’inflation"], 1),
      q("m-3", "Culture Générale", "Une situation de stagflation combine :", ["Croissance forte et inflation", "Inflation élevée et stagnation économique", "Déflation et croissance", "Croissance et emploi"], 1),
      q("m-4", "Culture Générale", "L’indépendance d’une banque centrale permet principalement :", ["De contrôler les entreprises", "De stabiliser la monnaie et l’inflation", "D’augmenter les salaires", "De fixer les prix"], 1),
      q("m-5", "Culture Générale", "L’avantage comparatif (Ricardo) justifie :", ["Le protectionnisme", "La spécialisation des pays dans certains secteurs", "L’autarcie", "La taxation"], 1),
      q("m-6", "Culture Générale", "Une bulle spéculative correspond à :", ["Une stabilité des prix", "Une hausse des prix déconnectée de la valeur réelle", "Une baisse de la demande", "Une régulation du marché"], 1),
      q("m-7", "Culture Générale", "Le quantitative easing consiste à :", ["Réduire la masse monétaire", "Injecter massivement des liquidités dans l’économie", "Augmenter les impôts", "Réduire les dépenses publiques"], 1),
      q("m-8", "Culture Générale", "Une récession économique se caractérise par :", ["Une forte croissance", "Une baisse du PIB sur plusieurs trimestres", "Une hausse de l’emploi", "Une stabilité économique"], 1),
      q("m-9", "Culture Générale", "La gouvernance d’entreprise concerne principalement :", ["La production", "La direction, le contrôle et la prise de décision stratégique", "Le marketing", "La vente"], 1),
      q("m-10", "Culture Générale", "Le concept de mondialisation avancée implique :", ["Une fermeture économique", "Une interdépendance forte entre les économies", "Une absence de commerce", "Une économie locale uniquement"], 1),
      q("m-11", "Business & Vente", "Une stratégie long terme performante repose principalement sur :", ["L’acquisition uniquement", "La fidélisation uniquement", "L’équilibre entre acquisition et rétention", "La réduction des coûts"], 2),
      q("m-12", "Business & Vente", "Le ratio LTV / CAC est utilisé pour :", ["Mesurer le nombre de clients", "Évaluer la rentabilité d’un modèle économique", "Calculer les salaires", "Fixer les prix"], 1),
      q("m-13", "Business & Vente", "Un avantage concurrentiel durable repose sur :", ["Un prix bas uniquement", "Une différenciation difficilement imitable", "Une publicité forte", "Une production rapide"], 1),
      q("m-14", "Business & Vente", "Le growth hacking consiste à :", ["Réduire les coûts", "Tester rapidement des stratégies pour accélérer la croissance", "Produire plus", "Stabiliser l’entreprise"], 1),
      q("m-15", "Business & Vente", "Une stratégie d’upsell efficace permet :", ["De réduire les ventes", "D’augmenter le panier moyen", "De perdre des clients", "De baisser les prix"], 1),
      q("m-16", "Business & Vente", "Une entreprise scalable est une entreprise qui :", ["Ne peut pas grandir", "Peut croître rapidement sans augmenter proportionnellement ses coûts", "Est stable", "Est locale"], 1),
      q("m-17", "Business & Vente", "Le pricing stratégique repose sur :", ["Le hasard", "La valeur perçue par le client", "Le coût uniquement", "La concurrence uniquement"], 1),
      q("m-18", "Business & Vente", "Une bonne stratégie de rétention client permet :", ["D’augmenter le CAC", "D’améliorer la rentabilité globale", "De réduire les ventes", "D’augmenter les coûts"], 1),
      q("m-19", "Business & Vente", "Le positionnement marketing correspond à :", ["Le prix du produit", "La place occupée dans l’esprit du client", "Le nombre de ventes", "La distribution"], 1),
      q("m-20", "Business & Vente", "L’optimisation du funnel de vente vise à :", ["Réduire le trafic", "Améliorer le taux de conversion à chaque étape", "Supprimer des étapes", "Réduire le produit"], 1),
      q("m-21", "Business & Vente", "Un bon closing avancé repose sur :", ["La pression", "Le timing, la psychologie et la compréhension client", "Le hasard", "Le prix"], 1),
      q("m-22", "Business & Vente", "Une stratégie omnicanale consiste à :", ["Utiliser un seul canal", "Intégrer plusieurs canaux de manière cohérente", "Supprimer le digital", "Se concentrer sur un canal"], 1),
      q("m-23", "Business & Vente", "La segmentation de marché permet :", ["De vendre au hasard", "D’adapter l’offre à des groupes spécifiques", "De réduire les coûts", "D’ignorer les clients"], 1),
      q("m-24", "Business & Vente", "Une proposition de valeur forte permet :", ["De copier les concurrents", "De se différencier clairement", "De réduire les ventes", "De diminuer les prix"], 1),
      q("m-25", "Business & Vente", "Le churn rate mesure :", ["Le nombre de clients", "Le taux de perte de clients", "Le chiffre d’affaires", "Le profit"], 1),
      q("m-26", "Business & Vente", "Une stratégie de croissance efficace repose sur :", ["L’intuition uniquement", "L’analyse de données et l’expérimentation", "Le hasard", "La concurrence"], 1),
      q("m-27", "Business & Vente", "Un business model performant doit être :", ["Complexe", "Compréhensible, rentable et scalable", "Local", "Lent"], 1),
      q("m-28", "Business & Vente", "La rétention client est souvent plus rentable que l’acquisition car :", ["Elle est plus chère", "Elle coûte moins et génère plus de valeur", "Elle est inutile", "Elle ralentit"], 1),
      q("m-29", "Business & Vente", "Un leader commercial performant se distingue par :", ["Son autorité", "Sa vision et sa capacité à exécuter", "Son contrôle total", "Son isolement"], 1),
      q("m-30", "Business & Vente", "Une stratégie long terme efficace nécessite :", ["Court terme uniquement", "Vision + exécution", "Hasard", "Réaction"], 1),
      q("m-31", "Personnalité", "Face à un problème complexe et incertain, tu as tendance à :", ["L’éviter", "Réagir sans analyse", "Structurer et analyser", "Anticiper et prendre le lead"], 3),
      q("m-32", "Personnalité", "Ta prise de décision repose principalement sur :", ["L’émotion", "L’urgence", "L’analyse", "La vision stratégique"], 3),
      q("m-33", "Personnalité", "Ton rapport au risque est :", ["Évitement", "Prudent", "Calculé", "Assumé"], 3),
      q("m-34", "Personnalité", "Ton style de leadership est :", ["Autoritaire", "Adaptatif", "Structuré", "Inspirant"], 3),
      q("m-35", "Personnalité", "Sous forte pression, tu es :", ["Bloqué", "Moyen", "Efficace", "Très performant"], 3),
      q("m-36", "Personnalité", "Ton état d’esprit (mindset) est plutôt :", ["Fixe", "Adaptatif", "Growth mindset", "Ultra orienté progression"], 3),
      q("m-37", "Personnalité", "Ta capacité à prendre des initiatives est :", ["Faible", "Moyenne", "Forte", "Très proactive"], 3),
      q("m-38", "Personnalité", "Ta vision professionnelle est :", ["Court terme", "Moyen terme", "Long terme", "Stratégique"], 3),
      q("m-39", "Personnalité", "Ta communication est :", ["Basique", "Claire", "Impactante", "Très influente"], 3),
      q("m-40", "Personnalité", "Ton objectif principal est :", ["Sécurité", "Réussite", "Leadership", "Impact"], 3),
      q("m-41", "Anglais", "“We need to optimize our sales funnel to increase conversion rates” signifie :", ["Réduire les ventes", "Optimiser le tunnel de vente pour améliorer la conversion", "Supprimer les clients", "Réduire le marketing"], 1),
      q("m-42", "Anglais", "“Customer retention is a key driver of long-term profitability” signifie :", ["L’acquisition est essentielle", "La fidélisation est clé pour la rentabilité long terme", "Le marketing est inutile", "Le produit est inutile"], 1),
      q("m-43", "Anglais", "“We are focusing on high-value clients to maximize revenue” signifie :", ["Clients faibles", "Clients rentables", "Clients gratuits", "Clients nouveaux"], 1),
      q("m-44", "Anglais", "“This business model is highly scalable” signifie :", ["Modèle limité", "Modèle difficile", "Modèle adaptable à grande échelle", "Modèle local"], 2),
      q("m-45", "Anglais", "“We need to improve customer experience to reduce churn” signifie :", ["Réduire les clients", "Améliorer l’expérience pour réduire les pertes", "Supprimer produit", "Réduire ventes"], 1),
      q("m-46", "Anglais", "“Strong negotiation skills are critical in closing deals” signifie :", ["Négociation inutile", "Négociation essentielle", "Vente inutile", "Produit"], 1),
      q("m-47", "Anglais", "“Market positioning is essential to stand out from competitors” signifie :", ["Copier concurrents", "Se différencier", "Réduire prix", "Ignorer marché"], 1),
      q("m-48", "Anglais", "“Revenue growth depends on both strategy and execution” signifie :", ["Hasard", "Stratégie + exécution", "Produit", "Prix"], 1),
      q("m-49", "Anglais", "“We need to analyze data to make better decisions” signifie :", ["Ignorer données", "Analyser données pour mieux décider", "Copier", "Réduire"], 1),
      q("m-50", "Anglais", "“A strong value proposition drives customer acquisition” signifie :", ["Offre faible", "Bonne proposition attire clients", "Prix bas", "Produit"], 1),
    ],
  },
};

const state = {
  candidate: null,
  levelKey: "",
  questions: [],
  index: 0,
  answers: [],
  remaining: QUESTION_TIME,
  timer: null,
};

const $ = (id) => document.getElementById(id);
const screens = ["screen-welcome", "screen-form", "screen-quiz", "screen-result"];

function showScreen(screenId) {
  screens.forEach((id) => $(id).classList.toggle("active", id === screenId));
}

function init() {
  $("btn-start").addEventListener("click", () => showScreen("screen-form"));
  $("candidate-form").addEventListener("submit", onFormSubmit);
  $("btn-next").addEventListener("click", goNextQuestion);
  $("btn-restart").addEventListener("click", restartQuiz);

  // Sync level radio cards → hidden select
  document.querySelectorAll('input[name="level-radio"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      $("level").value = radio.value;
    });
  });

  showScreen("screen-welcome");
}

function onFormSubmit(event) {
  event.preventDefault();
  $("form-error").textContent = "";

  const candidate = {
    lastName: $("lastName").value.trim(),
    firstName: $("firstName").value.trim(),
    email: $("email").value.trim(),
    phone: $("phone").value.trim(),
    age: $("age").value.trim(),
    level: $("level").value,
    objective: $("objective").value.trim(),
  };

  if (!candidate.lastName || !candidate.firstName || !candidate.email || !candidate.phone || !candidate.age || !candidate.level || !candidate.objective) {
    $("form-error").textContent = "Veuillez remplir tous les champs avant de lancer le quiz.";
    return;
  }

  state.candidate = candidate;
  state.levelKey = candidate.level;
  state.questions = QUIZ_DATA[candidate.level].questions;
  state.index = 0;
  state.answers = [];

  showScreen("screen-quiz");
  renderQuestion();
}

function resetTimer() {
  clearInterval(state.timer);
  state.remaining = QUESTION_TIME;

  const ring  = document.getElementById("timer-ring");
  const label = document.getElementById("timer");
  if (ring) {
    ring.style.transition = "none";
    ring.style.strokeDashoffset = "0";
    ring.style.stroke = "#4d86ff";
  }
  if (label) {
    label.textContent = QUESTION_TIME;
    label.style.color = "#fff";
  }
  // Re-enable smooth animation after a tick
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (ring) ring.style.transition = "stroke-dashoffset .9s linear, stroke .3s ease";
  }));

  state.timer = setInterval(() => {
    state.remaining -= 1;
    updateTimerUI();
    if (state.remaining <= 0) {
      saveAnswer(true);
      goToNextStep();
    }
  }, 1000);
}

function updateTimerUI() {
  const label = $("timer");
  const ring  = $("timer-ring");
  const circumference = 188.5; // 2π × 30

  if (label) label.textContent = state.remaining;

  if (ring) {
    const offset = circumference * (1 - state.remaining / QUESTION_TIME);
    ring.style.strokeDashoffset = offset;
    if (state.remaining <= 5) {
      ring.style.stroke = "#ef4444";
      if (label) label.style.color = "#ef4444";
    } else if (state.remaining <= 10) {
      ring.style.stroke = "#f59e0b";
      if (label) label.style.color = "#f59e0b";
    } else {
      ring.style.stroke = "#4d86ff";
      if (label) label.style.color = "#fff";
    }
  }
}

function renderQuestion() {
  const question = state.questions[state.index];
  const total = state.questions.length;
  const pct = Math.round(((state.index + 1) / total) * 100);

  $("quiz-level-pill").textContent = QUIZ_DATA[state.levelKey].label;
  $("progress-label").textContent = `Question ${state.index + 1}/${total}`;
  $("progress-percent").textContent = `${pct}%`;
  $("progress-fill").style.width = `${pct}%`;
  $("question-section").textContent = question.section;
  $("question-text").textContent = question.text;

  const btnSpan = $("btn-next").querySelector("span");
  const btnIcon = $("btn-next").querySelector("i");
  const isLast  = state.index === total - 1;
  if (btnSpan) btnSpan.textContent = isLast ? "Terminer" : "Suivant";
  if (btnIcon) btnIcon.className = isLast ? "fa-solid fa-flag-checkered" : "fa-solid fa-arrow-right";

  const answerZone = $("answer-zone");
  answerZone.innerHTML = "";

  const nextBtn = $("btn-next");
  if (nextBtn) nextBtn.disabled = true;

  if (question.type === "mcq") {
    question.options.forEach((optionText, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";
      label.innerHTML = `
        <input type="radio" name="q-answer" value="${optionIndex}">
        <div class="opt-letter">${String.fromCharCode(65 + optionIndex)}</div>
        <span class="opt-text">${optionText}</span>
      `;
      label.addEventListener("click", () => {
        document.querySelectorAll(".option").forEach((el) => el.classList.remove("active"));
        label.classList.add("active");
        if (nextBtn) nextBtn.disabled = false;
        const msg = $("answer-error");
        if (msg) msg.textContent = "";
      });
      answerZone.appendChild(label);
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.id = "open-answer";
    textarea.className = "open-answer";
    textarea.placeholder = "Saisissez votre réponse...";
    textarea.addEventListener("input", () => {
      const hasText = textarea.value.trim().length > 0;
      if (nextBtn) nextBtn.disabled = !hasText;
      const msg = $("answer-error");
      if (msg) msg.textContent = "";
    });
    answerZone.appendChild(textarea);
  }

  const err = document.createElement("p");
  err.id = "answer-error";
  err.className = "err-msg";
  answerZone.appendChild(err);

  resetTimer();
}

function saveAnswer(timedOut = false) {
  if (state.answers[state.index]) {
    return;
  }

  const question = state.questions[state.index];
  if (question.type === "mcq") {
    const checked = document.querySelector('input[name="q-answer"]:checked');
    state.answers[state.index] = {
      questionId: question.id,
      type: "mcq",
      selected: checked ? Number(checked.value) : null,
      timedOut,
    };
  } else {
    const text = $("open-answer")?.value?.trim() || "";
    state.answers[state.index] = {
      questionId: question.id,
      type: "open",
      text,
      timedOut,
    };
  }
}

function goNextQuestion() {
  const question = state.questions[state.index];
  const msg = $("answer-error");
  if (question.type === "mcq") {
    const checked = document.querySelector('input[name="q-answer"]:checked');
    if (!checked) {
      if (msg) msg.textContent = "Répondez à la question pour continuer.";
      return;
    }
  } else {
    const text = $("open-answer")?.value?.trim() || "";
    if (!text) {
      if (msg) msg.textContent = "Répondez à la question pour continuer.";
      return;
    }
  }

  saveAnswer(false);
  goToNextStep();
}

function goToNextStep() {
  clearInterval(state.timer);
  const isLast = state.index >= state.questions.length - 1;
  if (isLast) {
    renderResults();
    return;
  }

  state.index += 1;
  renderQuestion();
}

function getPerformanceLevel(percent) {
  if (percent >= 85) return "Excellent";
  if (percent >= 70) return "Très Bien";
  if (percent >= 55) return "Bien";
  if (percent >= 40) return "Moyen";
  return "À renforcer";
}

function getMedal(percent) {
  if (percent >= 85) return { cls: "medal-gold", icon: "fa-solid fa-trophy", label: "Médaille d'Or" };
  if (percent >= 70) return { cls: "medal-silver", icon: "fa-solid fa-medal", label: "Médaille d'Argent" };
  if (percent >= 55) return { cls: "medal-bronze", icon: "fa-solid fa-award", label: "Médaille de Bronze" };
  return { cls: "medal-participation", icon: "fa-solid fa-star", label: "Participation" };
}

function formatDate(dateIso) {
  const d = new Date(dateIso);
  return `${d.toLocaleDateString("fr-FR")} ${d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;
}

function buildQuizLeadPayload({ percent, note, perf, correctCount, totalMcq, errors, finalRecord }) {
  return {
    candidate: {
      ...state.candidate,
    },
    quiz: {
      levelKey: state.levelKey,
      levelLabel: QUIZ_DATA[state.levelKey].label,
      scorePercent: percent,
      noteSur20: Number(note),
      performance: perf,
      correctCount,
      totalMcq,
      recordPercent: finalRecord?.percent ?? percent,
      attemptedAt: new Date().toISOString(),
    },
    errors: errors.map(({ question, answer }) => ({
      questionId: question.id,
      section: question.section,
      question: question.text,
      selected:
        answer && answer.selected !== null
          ? `${String.fromCharCode(65 + answer.selected)}) ${question.options[answer.selected]}`
          : "Aucune réponse",
      correct: `${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}`,
      timedOut: Boolean(answer?.timedOut),
    })),
  };
}

async function sendLeadToHubSpot(payload) {
  try {
    const response = await fetch(LEAD_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("HubSpot sync failed:", response.status, text);
      return false;
    }

    return true;
  } catch (error) {
    console.error("HubSpot sync error:", error);
    return false;
  }
}

function getRecordKey(levelKey) {
  return `keos-quiz-record-${levelKey}`;
}

function renderResults() {
  showScreen("screen-result");

  const mcqQuestions = state.questions.filter((qItem) => qItem.type === "mcq");
  let correctCount = 0;
  const errors = [];

  state.questions.forEach((question, index) => {
    const answer = state.answers[index];
    if (question.type !== "mcq") {
      return;
    }

    const isCorrect = answer && answer.selected === question.correct;
    if (isCorrect) {
      correctCount += 1;
    } else {
      errors.push({
        question,
        answer,
      });
    }
  });

  const totalMcq = mcqQuestions.length;
  const percent = Math.round((correctCount / totalMcq) * 100);
  const note = ((percent / 100) * 20).toFixed(2);
  const perf = getPerformanceLevel(percent);
  const medal = getMedal(percent);

  $("result-title").textContent = `Bravo ${state.candidate.firstName} ${state.candidate.lastName}`;
  $("result-subtitle").textContent = `Niveau ${QUIZ_DATA[state.levelKey].label} - ${perf}`;
  $("final-note").textContent = `${note}/20`;
  $("final-score").textContent = `${percent}%`;
  $("correct-count").textContent = `${correctCount}/${totalMcq}`;
  $("medal-icon").className = `medal-display ${medal.cls}`;
  $("medal-icon").innerHTML = `<i class="${medal.icon}"></i>`;

  const recordKey = getRecordKey(state.levelKey);
  const previousRecordRaw = localStorage.getItem(recordKey);
  const previousRecord = previousRecordRaw ? JSON.parse(previousRecordRaw) : null;
  const currentEntry = {
    percent,
    note,
    name: `${state.candidate.firstName} ${state.candidate.lastName}`,
    when: new Date().toISOString(),
  };

  let finalRecord = previousRecord;
  if (!previousRecord || percent > previousRecord.percent) {
    localStorage.setItem(recordKey, JSON.stringify(currentEntry));
    finalRecord = currentEntry;
  }

  $("record-score").textContent = `${finalRecord.percent}%`;
  // Résultats: afficher uniquement le score (pas de corrections).
  const finalMessage = $("final-message");
  if (finalMessage) finalMessage.style.display = "none";

  const reviewCard = document.querySelector(".review-card");
  if (reviewCard) reviewCard.style.display = "none";

  const correctTile = $("correct-count")?.closest(".s-tile");
  if (correctTile) correctTile.style.display = "none";
  const recordTile = $("record-score")?.closest(".s-tile");
  if (recordTile) recordTile.style.display = "none";

  if (percent >= 85) launchConfetti();

  // Les corrections sont masquées, mais on conserve le détail des erreurs pour HubSpot.

  const leadPayload = buildQuizLeadPayload({
    percent,
    note,
    perf,
    correctCount,
    totalMcq,
    errors,
    finalRecord,
  });

  // Fire-and-forget: do not block quiz UX if API is offline.
  void sendLeadToHubSpot(leadPayload);
}

function launchConfetti() {
  const wrap = document.createElement("div");
  wrap.className = "confetti-wrap";
  document.body.appendChild(wrap);

  const colors = ["#f59e0b", "#4d86ff", "#705cf5", "#34d399", "#f87171", "#fff", "#fcd34d", "#a78bfa"];

  for (let i = 0; i < 100; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    const size   = 4 + Math.random() * 8;
    const isCirc = Math.random() > 0.5;
    p.style.cssText = [
      `left:${Math.random() * 100}vw`,
      `background:${colors[Math.floor(Math.random() * colors.length)]}`,
      `width:${size}px`,
      `height:${isCirc ? size : size * 1.6}px`,
      `border-radius:${isCirc ? "50%" : "2px"}`,
      `animation-duration:${2.2 + Math.random() * 2.4}s`,
      `animation-delay:${Math.random() * 1.8}s`,
      `opacity:${.7 + Math.random() * .3}`,
    ].join(";");
    wrap.appendChild(p);
  }

  setTimeout(() => wrap.remove(), 6500);
}

function restartQuiz() {
  clearInterval(state.timer);
  state.index = 0;
  state.answers = [];
  showScreen("screen-welcome");
}

init();
