const QUESTION_TIME = 20;

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
    label: "Bac+2",
    questions: [
      q("b2-1", "Culture Générale", "Quelle est la capitale de la France ?", ["Londres", "Berlin", "Paris", "Rome"], 2),
      q("b2-2", "Culture Générale", "Quel est le nom de l'océan qui borde la France à l'ouest ?", ["Océan Indien", "Océan Atlantique", "Océan Pacifique", "Océan Arctique"], 1),
      q("b2-3", "Culture Générale", "Quel est le plus grand animal terrestre ?", ["L'éléphant", "La girafe", "Le rhinocéros", "L'hippopotame"], 0),
      q("b2-4", "Culture Générale", "Combien de continents y a-t-il sur Terre ?", ["4", "5", "6", "7"], 3),
      q("b2-5", "Culture Générale", "Quel est le sport national du Japon ?", ["Le football", "Le sumo", "Le basketball", "Le tennis"], 1),
      q("b2-6", "Culture Générale", "Quelle est la couleur du ciel par temps clair ?", ["Vert", "Rouge", "Bleu", "Jaune"], 2),
      q("b2-7", "Culture Générale", "Quel est le nom de la planète sur laquelle nous vivons ?", ["Mars", "Vénus", "Terre", "Jupiter"], 2),
      q("b2-8", "Culture Générale", "Quel est le fruit qui pousse sur un pommier ?", ["Une poire", "Une banane", "Une pomme", "Une orange"], 2),
      q("b2-9", "Culture Générale", "Combien de doigts a une main humaine (sans compter le pouce) ?", ["3", "4", "5", "6"], 1),
      q("b2-10", "Culture Générale", "Quel animal est connu pour son long cou ?", ["Le zèbre", "Le lion", "La girafe", "Le singe"], 2),
      q("b2-11", "Business", "Que signifie l'acronyme PME ?", ["Petite et Moyenne Entreprise", "Projets et Méthodes d'Entreprise", "Production et Marketing d'Entreprise", "Plan de Management Économique"], 0),
      q("b2-12", "Business", "Quel est le but principal d'une entreprise à but lucratif ?", ["Faire du bénévolat", "Réaliser des bénéfices", "Offrir des services gratuits", "Réduire ses effectifs"], 1),
      q("b2-13", "Business", "Qu'est-ce que le marketing mix (les 4P) ?", ["Produit, Prix, Place, Promotion", "Publicité, Personnel, Processus, Preuve", "Partenariat, Performance, Planification, Profit", "Positionnement, Packaging, Perception, Prévision"], 0),
      q("b2-14", "Business", "Quel document comptable récapitule les ressources et les emplois d'une entreprise à une date donnée ?", ["Le compte de résultat", "Le bilan", "Le tableau de bord", "Le journal de bord"], 1),
      q("b2-15", "Business", "Qu'est-ce qu'une étude de marché ?", ["Une analyse de la concurrence et des besoins des clients", "Une séance de brainstorming interne", "Une campagne publicitaire à la télévision", "Un inventaire des stocks en magasin"], 0),
      q("b2-16", "Business", "Quel est l'avantage principal du commerce électronique (e-commerce) ?", ["L'absence totale de frais de livraison", "La possibilité d'acheter 24h/24 et 7j/7", "Le contact physique avec le vendeur", "L'absence de taxes sur les produits"], 1),
      q("b2-17", "Business", "Qu'est-ce qu'un prospect en commerce ?", ["Un client fidèle depuis 10 ans", "Un fournisseur de matières premières", "Un client potentiel qui n'a pas encore acheté", "Un ancien employé de l'entreprise"], 2),
      q("b2-18", "Business", "Que signifie le terme BtoB (Business to Business) ?", ["Une vente d'une entreprise à un particulier", "Une vente entre deux entreprises", "Une vente directe au consommateur final", "Un échange de services entre employés"], 1),
      q("b2-19", "Business", "Quelle est la fonction principale du service des Ressources Humaines (RH) ?", ["Gérer les ventes de l'entreprise", "Gérer le recrutement et la carrière des employés", "Réparer le matériel informatique", "Concevoir les nouveaux produits"], 1),
      q("b2-20", "Business", "Qu'est-ce qu'une marque ?", ["Un simple nom sans importance", "Un signe distinctif permettant d'identifier les produits ou services d'une entreprise", "Le prix d'un produit", "Le lieu de fabrication d'un objet"], 1),
      q("b2-21", "Réflexion / Logique", "Complétez la suite logique : 2, 4, 8, 16, ...", ["24", "30", "32", "40"], 2),
      q("b2-22", "Réflexion / Logique", "Si tous les chats sont des animaux et que Minou est un chat, alors :", ["Minou n'est pas un animal", "Minou est un animal", "Tous les animaux sont des chats", "Minou est un chien"], 1),
      q("b2-23", "Réflexion / Logique", "Quel mot ne va pas avec les autres ?", ["Pomme", "Banane", "Carotte", "Orange"], 2),
      q("b2-24", "Réflexion / Logique", "Un train part de Paris à 8h et arrive à Lyon à 10h. Quelle a été la durée du trajet ?", ["1 heure", "1 heure 30 minutes", "2 heures", "2 heures 30 minutes"], 2),
      q("b2-25", "Réflexion / Logique", "Si A est plus grand que B, et B est plus grand que C, alors :", ["C est plus grand que A", "A est plus petit que C", "A est plus grand que C", "B est le plus grand des trois"], 2),
      q("b2-26", "Mise en Situation Commerciale", "Un client entre dans votre magasin et semble perdu. Que faites-vous ?", ["Vous l'ignorez et continuez votre travail", "Vous attendez qu'il vienne vous voir", "Vous l'abordez poliment en lui demandant si vous pouvez l'aider", "Vous lui demandez de sortir s'il n'achète rien"], 2),
      q("b2-27", "Mise en Situation Commerciale", "Un client se plaint d'un produit défectueux. Quelle est la meilleure attitude ?", ["Lui dire que c'est de sa faute", "L'écouter, s'excuser et chercher une solution (échange, remboursement, réparation)", "Ignorer sa plainte", "Lui dire de contacter directement le fabricant"], 1),
      q("b2-28", "Mise en Situation Commerciale", "Comment réagir face à un client qui trouve votre produit trop cher ?", ["Lui dire d'aller voir ailleurs", "Baisser immédiatement le prix de 50%", "Argumenter sur la valeur et la qualité du produit pour justifier le prix", "Se mettre en colère"], 2),
      q("b2-29", "Mise en Situation Commerciale", "Quel est l'élément le plus important lors d'un premier contact avec un prospect ?", ["Parler sans s'arrêter de son produit", "Écouter les besoins du prospect et créer un climat de confiance", "Demander immédiatement les coordonnées bancaires", "Critiquer la concurrence"], 1),
      q("b2-30", "Mise en Situation Commerciale", "Pour fidéliser un client, il est préférable de :", ["Ne plus jamais le contacter après la vente", "Lui envoyer régulièrement des offres personnalisées et prendre de ses nouvelles", "Augmenter les prix pour lui uniquement", "Lui vendre des produits dont il n'a pas besoin"], 1),
      q("b2-31", "Intelligence Artificielle", "Que signifie l'acronyme IA ?", ["Information Automatique", "Intelligence Artificielle", "Interface d'Apprentissage", "Innovation Avancée"], 1),
      q("b2-32", "Intelligence Artificielle", "ChatGPT est un exemple de :", ["Moteur de recherche classique", "IA générative de texte", "Robot ménager", "Logiciel de comptabilité"], 1),
      q("b2-33", "Intelligence Artificielle", "Quel est l'un des risques souvent cités concernant l'IA ?", ["Elle va rendre les humains immortels", "Elle peut créer des fausses informations (deepfakes)", "Elle ne fonctionnera jamais sans électricité", "Elle va remplacer tous les animaux de compagnie"], 1),
      q("b2-34", "Intelligence Artificielle", "L'IA peut-elle aider une entreprise à mieux comprendre ses clients ?", ["Non, c'est impossible", "Oui, en analysant de grandes quantités de données (Big Data)", "Seulement si l'entreprise vend des ordinateurs", "L'IA ne s'intéresse pas aux humains"], 1),
      q("b2-35", "Intelligence Artificielle", "Dans quel domaine l'IA est-elle déjà utilisée ?", ["La médecine (diagnostic)", "Les voitures autonomes", "La recommandation de films (Netflix)", "Toutes les réponses ci-dessus"], 3),
      q("b2-36", "Anglais", 'Choose the correct word: "I ______ a student."', ["is", "are", "am", "be"], 2),
      q("b2-37", "Anglais", 'What is the opposite of "expensive"?', ["Cheap", "New", "Fast", "Big"], 0),
      q("b2-38", "Anglais", '"How ______ are you?" - "I am 20 years old."', ["many", "old", "much", "long"], 1),
      q("b2-39", "Anglais", "Which word is a day of the week?", ["January", "Monday", "Summer", "Morning"], 1),
      q("b2-40", "Anglais", 'Translate into French: "Good morning."', ["Bonsoir", "Bonne nuit", "Bonjour", "Au revoir"], 2),
      q("b2-41", "Anglais", '"Where ______ you live?"', ["do", "does", "are", "is"], 0),
      q("b2-42", "Anglais", '"I like ______ to music."', ["listen", "listening", "listens", "listened"], 1),
      q("b2-43", "Anglais", '"She ______ a red car."', ["have", "has", "having", "haves"], 1),
      q("b2-44", "Anglais", 'What does "ASAP" mean?', ["As Soon As Possible", "Always Say Always Please", "After School At Play", "All Students Are Present"], 0),
      q("b2-45", "Anglais", '"Can you help ______?"', ["I", "me", "my", "mine"], 1),
      openQ("b2-46", "Question Ouverte", "Décrivez une situation où vous avez dû faire preuve de persévérance pour atteindre un objectif. Quels ont été les défis et comment les avez-vous surmontés ?"),
      openQ("b2-47", "Question Ouverte", "En quoi la formation que vous visez dans notre école correspond-elle à vos aspirations professionnelles et comment comptez-vous contribuer à la vie de l'école ?"),
    ],
  },
  bac3: {
    label: "Bac+3",
    questions: [
      q("b3-1", "Culture Générale", "Quelle est la capitale de l'Italie ?", ["Madrid", "Rome", "Athènes", "Lisbonne"], 1),
      q("b3-2", "Culture Générale", "Quel est le plus grand désert du monde ?", ["Le désert de Gobi", "Le désert du Sahara", "Le désert d'Atacama", "Le désert d'Arabie"], 1),
      q("b3-3", "Culture Générale", "Quel est le nom du premier homme à avoir marché sur la Lune ?", ["Buzz Aldrin", "Youri Gagarine", "Neil Armstrong", "John Glenn"], 2),
      q("b3-4", "Culture Générale", "Quel est le nom du célèbre monument parisien avec une grande tour en fer ?", ["L'Arc de Triomphe", "Le Louvre", "La Tour Eiffel", "Notre-Dame de Paris"], 2),
      q("b3-5", "Culture Générale", "Quel est le nom du gaz que nous respirons et qui est essentiel à la vie ?", ["Le dioxyde de carbone", "L'azote", "L'oxygène", "L'hydrogène"], 2),
      q("b3-6", "Culture Générale", "Quel est le nom du célèbre détective créé par Arthur Conan Doyle ?", ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Arsène Lupin"], 1),
      q("b3-7", "Culture Générale", "Quel est le nom du continent où se trouve l'Égypte ?", ["L'Asie", "L'Europe", "L'Afrique", "L'Amérique"], 2),
      q("b3-8", "Culture Générale", "Quel est le nom du repas que l'on prend le matin ?", ["Le déjeuner", "Le dîner", "Le petit-déjeuner", "Le souper"], 2),
      q("b3-9", "Culture Générale", "Quel est le nom de l'animal qui produit du miel ?", ["La fourmi", "L'abeille", "La guêpe", "Le papillon"], 1),
      q("b3-10", "Culture Générale", "Quel est le nom du personnage de Disney qui est une souris ?", ["Donald Duck", "Mickey Mouse", "Pluto", "Dingo"], 1),
      q("b3-11", "Business et Stratégie", "Qu'est-ce que l'analyse SWOT ?", ["Une méthode pour analyser les forces, faiblesses, opportunités et menaces", "Un logiciel de comptabilité", "Une technique de vente directe", "Un type de contrat de travail"], 0),
      q("b3-12", "Business et Stratégie", "Que signifie le terme Business Model ?", ["La structure juridique de l'entreprise", "La manière dont une entreprise génère de la valeur et des revenus", "Le plan d'aménagement des bureaux", "Le profil type des employés de l'entreprise"], 1),
      q("b3-13", "Business et Stratégie", "Qu'est-ce qu'un avantage concurrentiel ?", ["Le fait d'avoir plus d'employés que ses concurrents", "Un élément qui permet à une entreprise de se démarquer et d'être plus performante que ses rivaux", "Le fait de vendre ses produits au prix le plus bas possible", "L'emplacement géographique de l'entreprise"], 1),
      q("b3-14", "Business et Stratégie", "Que signifie l'acronyme ROI ?", ["Retour sur Investissement (Return on Investment)", "Rentabilité des Opérations Internes", "Risque d'Obsolescence Industrielle", "Revenu des Opérations Internationales"], 0),
      q("b3-15", "Business et Stratégie", "Qu'est-ce que la segmentation de marché ?", ["La division d'un marché en groupes de consommateurs ayant des besoins similaires", "La fermeture de certains points de vente", "L'augmentation des prix de tous les produits", "Le rachat d'un concurrent"], 0),
      q("b3-16", "Business et Stratégie", "Quel est le rôle principal d'un Business Developer ?", ["Réparer les ordinateurs de l'entreprise", "Identifier et exploiter de nouvelles opportunités de croissance pour l'entreprise", "Gérer la paie des employés", "Concevoir les logos de la marque"], 1),
      q("b3-17", "Business et Stratégie", "Qu'est-ce que le E-commerce ?", ["Le commerce de produits électroniques uniquement", "La vente de biens et services par Internet", "L'échange de monnaies étrangères", "Le commerce de proximité"], 1),
      q("b3-18", "Business et Stratégie", "Que signifie l'acronyme CRM ?", ["Conseil en Recrutement et Management", "Gestion de la Relation Client (Customer Relationship Management)", "Contrôle des Ressources Matérielles", "Création de Revenus Mensuels"], 1),
      q("b3-19", "Business et Stratégie", "Qu'est-ce que la Supply Chain ?", ["La chaîne de magasins de l'entreprise", "La chaîne d'approvisionnement (de la production à la livraison finale)", "La hiérarchie de l'entreprise", "Le réseau informatique interne"], 1),
      q("b3-20", "Business et Stratégie", "Quel est l'objectif d'une levée de fonds ?", ["Distribuer des dividendes aux actionnaires", "Obtenir des capitaux auprès d'investisseurs pour financer le développement de l'entreprise", "Rembourser toutes les dettes de l'entreprise", "Augmenter les salaires de tous les employés"], 1),
      q("b3-21", "Réflexion Critique et Étude de Cas", "Une entreprise voit son chiffre d'affaires augmenter de 10% mais son bénéfice net diminuer de 5%. Quelle peut en être la cause ?", ["Les prix de vente ont augmenté", "Les coûts de production ou les charges d'exploitation ont augmenté plus vite que les ventes", "L'entreprise a trop de clients", "Les impôts ont baissé"], 1),
      q("b3-22", "Réflexion Critique et Étude de Cas", "Quel est le but principal d'un Brainstorming ?", ["Prendre une décision finale immédiate", "Générer un maximum d'idées nouvelles et créatives sans jugement immédiat", "Critiquer les propositions des collègues", "Rédiger un rapport technique"], 1),
      q("b3-23", "Réflexion Critique et Étude de Cas", "Si un produit a une élasticité-prix forte, cela signifie que :", ["Le prix ne change jamais", "Une petite variation du prix entraîne une grande variation de la demande", "La demande reste la même quel que soit le prix", "Le produit est de très mauvaise qualité"], 1),
      q("b3-24", "Réflexion Critique et Étude de Cas", "Dans une analyse PESTEL, que représente le E ?", ["Économique et Environnemental", "Éthique et Efficace", "Électronique et Évolutif", "Emploi et Éducation"], 0),
      q("b3-25", "Réflexion Critique et Étude de Cas", "Quel est l'intérêt principal de la méthode Agile en gestion de projet ?", ["Ne jamais changer de plan une fois le projet lancé", "Favoriser l'adaptabilité, la collaboration et les itérations rapides", "Réduire le nombre de réunions", "Utiliser le moins d'outils numériques possible"], 1),
      q("b3-26", "Mise en Situation Commerciale Avancée", "Un client grand compte menace de partir chez la concurrence si vous ne baissez pas vos prix de 20%. Quelle est votre réaction ?", ["Vous acceptez immédiatement pour ne pas perdre le client", "Vous refusez catégoriquement et raccrochez", "Vous cherchez à comprendre ses besoins réels et proposez une offre à valeur ajoutée (services, garanties) plutôt qu'une simple baisse de prix", "Vous ignorez sa menace"], 2),
      q("b3-27", "Mise en Situation Commerciale Avancée", "Comment préparez-vous une négociation commerciale importante ?", ["Vous y allez sans préparation pour être plus naturel", "Vous définissez vos objectifs, vos limites (BATNA) et étudiez le profil de votre interlocuteur", "Vous préparez seulement votre discours de vente", "Vous demandez à un collègue d'y aller à votre place"], 1),
      q("b3-28", "Mise en Situation Commerciale Avancée", "Quel est l'indicateur le plus pertinent pour mesurer l'efficacité d'une campagne de prospection ?", ["Le nombre d'appels passés", "Le taux de transformation (nombre de ventes réalisées par rapport au nombre de contacts)", "Le temps passé au téléphone", "Le nombre de cafés bus pendant la prospection"], 1),
      q("b3-29", "Mise en Situation Commerciale Avancée", "En cas de conflit avec un partenaire commercial, quelle est la meilleure approche ?", ["Porter plainte immédiatement", "Privilégier le dialogue et la recherche d'un compromis gagnant-gagnant", "Rompre tout contact", "Lui envoyer une lettre de menace"], 1),
      q("b3-30", "Mise en Situation Commerciale Avancée", "Pour développer les ventes sur un nouveau marché, il est préférable de :", ["Utiliser exactement la même stratégie que sur le marché actuel", "Réaliser une étude de marché locale et adapter son offre et sa communication", "Baisser les prix au maximum sans réfléchir", "Attendre que les clients viennent d'eux-mêmes"], 1),
      q("b3-31", "Intelligence Artificielle et Transformation Digitale", "Qu'est-ce que le Machine Learning ?", ["Une machine qui apprend à parler", "Un sous-domaine de l'IA permettant aux systèmes d'apprendre à partir de données", "Le fait de réparer des machines manuellement", "Un logiciel de traduction automatique uniquement"], 1),
      q("b3-32", "Intelligence Artificielle et Transformation Digitale", "Quel est l'impact principal du Big Data pour les entreprises ?", ["Avoir trop de données et ne plus savoir quoi en faire", "Permettre une analyse plus précise des comportements clients et une meilleure prise de décision", "Remplacer tous les serveurs informatiques", "Augmenter les coûts de stockage inutilement"], 1),
      q("b3-33", "Intelligence Artificielle et Transformation Digitale", "Qu'est-ce qu'un chatbot ?", ["Un robot qui ressemble à un chat", "Un programme informatique capable de simuler une conversation avec un utilisateur", "Un virus informatique", "Un logiciel de montage vidéo"], 1),
      q("b3-34", "Intelligence Artificielle et Transformation Digitale", "Quel est l'enjeu éthique majeur de l'IA en entreprise ?", ["La consommation d'électricité des serveurs", "Les biais algorithmiques et la protection de la vie privée des données", "Le prix des licences logicielles", "La couleur de l'interface utilisateur"], 1),
      q("b3-35", "Intelligence Artificielle et Transformation Digitale", "La Blockchain est principalement associée à :", ["La création de sites web", "La sécurisation et la transparence des transactions et des données", "L'envoi d'e-mails en masse", "Le montage de photos"], 1),
      q("b3-36", "Anglais des Affaires", 'Choose the correct word: "We need to ______ a meeting for next week."', ["schedule", "do", "make", "have"], 0),
      q("b3-37", "Anglais des Affaires", 'What does "CEO" stand for?', ["Chief Executive Officer", "Central Electronic Office", "Customer Engagement Organization", "Corporate Economic Officer"], 0),
      q("b3-38", "Anglais des Affaires", '"The company\'s profits ______ by 15% last year."', ["increase", "increased", "increasing", "increases"], 1),
      q("b3-39", "Anglais des Affaires", 'What is a "deadline"?', ["A line that is dead", "The latest time or date by which something should be completed", "A telephone line for emergencies", "A type of insurance policy"], 1),
      q("b3-40", "Anglais des Affaires", '"I look forward to ______ from you soon."', ["hear", "hearing", "heard", "hears"], 1),
      q("b3-41", "Anglais des Affaires", '"Could you please ______ me the report?"', ["send", "sent", "sending", "sends"], 0),
      q("b3-42", "Anglais des Affaires", 'What is a "competitor"?', ["A person who works for the same company", "A person or organization that is a rival in business", "A customer who buys a lot of products", "A supplier of raw materials"], 1),
      q("b3-43", "Anglais des Affaires", '"We are ______ a new product next month."', ["launching", "starting", "beginning", "opening"], 0),
      q("b3-44", "Anglais des Affaires", 'What does "B2B" mean?', ["Business to Business", "Business to Buyer", "Back to Business", "Buy to Build"], 0),
      q("b3-45", "Anglais des Affaires", '"The ______ of this project is to increase sales."', ["goal", "finish", "end", "stop"], 0),
      openQ("b3-46", "Question Ouverte", "Choisissez une entreprise que vous admirez et analysez sa stratégie de développement sur les cinq dernières années. Quels sont, selon vous, les facteurs clés de son succès et les défis qu'elle devra relever à l'avenir ?"),
      openQ("b3-47", "Question Ouverte", "Comment l'intelligence artificielle pourrait-elle transformer le secteur d'activité dans lequel vous souhaitez évoluer ? Présentez une innovation basée sur l'IA qui, selon vous, aura un impact majeur."),
    ],
  },
  master: {
    label: "Master",
    questions: [
      q("m-1", "Culture Générale et Géopolitique", "Quelle est la capitale de l'Espagne ?", ["Barcelone", "Madrid", "Séville", "Valence"], 1),
      q("m-2", "Culture Générale et Géopolitique", "Quel est le nom du grand fleuve qui traverse Paris ?", ["La Loire", "Le Rhône", "La Seine", "La Garonne"], 2),
      q("m-3", "Culture Générale et Géopolitique", "Quel est le nom de l'animal qui est le meilleur ami de l'homme ?", ["Le chat", "Le chien", "Le poisson", "L'oiseau"], 1),
      q("m-4", "Culture Générale et Géopolitique", "Quel est le nom de la saison où les feuilles tombent des arbres ?", ["Le printemps", "L'été", "L'automne", "L'hiver"], 2),
      q("m-5", "Culture Générale et Géopolitique", "Quel est le nom du célèbre peintre qui a coupé son oreille ?", ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], 1),
      q("m-6", "Culture Générale et Géopolitique", "Quel est le nom du sport où l'on utilise une raquette et une balle pour frapper au-dessus d'un filet ?", ["Le football", "Le basketball", "Le tennis", "Le rugby"], 2),
      q("m-7", "Culture Générale et Géopolitique", "Quel est le nom de l'instrument de musique à cordes que l'on frotte avec un archet ?", ["La guitare", "Le piano", "Le violon", "La flûte"], 2),
      q("m-8", "Culture Générale et Géopolitique", "Quel est le nom de la couleur obtenue en mélangeant le bleu et le jaune ?", ["Le rouge", "Le vert", "Le violet", "L'orange"], 1),
      q("m-9", "Culture Générale et Géopolitique", "Quel est le nom du petit de la vache ?", ["Le chevreau", "L'agneau", "Le veau", "Le poulain"], 2),
      q("m-10", "Culture Générale et Géopolitique", "Quel est le nom du mois qui vient après décembre ?", ["Novembre", "Janvier", "Février", "Mars"], 1),
      q("m-11", "Stratégie et Management Avancé", "Qu'est-ce que la stratégie de l'Océan Bleu ?", ["S'attaquer à un marché très concurrentiel", "Créer un nouvel espace de marché non contesté où la concurrence est inexistante", "Réduire les coûts au maximum", "Fusionner avec son principal concurrent"], 1),
      q("m-12", "Stratégie et Management Avancé", "Que signifie l'acronyme VUCA dans le monde des affaires ?", ["Volatility, Uncertainty, Complexity, Ambiguity", "Value, Utility, Cost, Availability", "Vision, Unity, Cooperation, Action", "Velocity, Urgency, Consistency, Adaptability"], 0),
      q("m-13", "Stratégie et Management Avancé", "Qu'est-ce que la Responsabilité Sociétale des Entreprises (RSE) ?", ["L'obligation légale de payer ses impôts", "L'intégration volontaire par les entreprises de préoccupations sociales et environnementales à leurs activités commerciales", "La distribution de dividendes aux employés", "Le fait de faire de la publicité pour des causes caritatives"], 1),
      q("m-14", "Stratégie et Management Avancé", "Quel est le but principal de la Matrice BCG ?", ["Évaluer la performance individuelle des employés", "Analyser le portefeuille de produits d'une entreprise en fonction de la part de marché et de la croissance", "Calculer le coût de revient des produits", "Planifier les campagnes de communication"], 1),
      q("m-15", "Stratégie et Management Avancé", "Qu'est-ce que le Management Agile ?", ["Un management basé sur le contrôle strict des employés", "Un management favorisant la flexibilité, l'autonomie des équipes et l'adaptation rapide au changement", "Un management qui demande aux employés de courir vite", "Un management sans aucun manager"], 1),
      q("m-16", "Stratégie et Management Avancé", "Que signifie le terme Gouvernance d'Entreprise ?", ["Le système par lequel les entreprises sont dirigées et contrôlées (relations entre actionnaires, conseil d'administration et direction)", "Le règlement intérieur de l'entreprise", "Le choix des bureaux de la direction", "Le plan de recrutement annuel"], 0),
      q("m-17", "Stratégie et Management Avancé", "Qu'est-ce qu'une fusion-acquisition (M&A) ?", ["Le rachat d'une entreprise par une autre ou le regroupement de deux entreprises", "Le licenciement collectif d'employés", "La création d'une nouvelle marque", "L'ouverture d'une filiale à l'étranger"], 0),
      q("m-18", "Stratégie et Management Avancé", "Quel est l'intérêt principal du Lean Management ?", ["Augmenter le nombre de produits en stock", "Éliminer les gaspillages et optimiser les processus pour créer plus de valeur avec moins de ressources", "Recruter plus de managers", "Utiliser les technologies les plus chères"], 1),
      q("m-19", "Stratégie et Management Avancé", "Qu'est-ce que la Culture d'Entreprise ?", ["Le niveau d'études des employés", "L'ensemble des valeurs, croyances et comportements partagés au sein d'une organisation", "Les sorties culturelles organisées par l'entreprise", "La langue parlée dans l'entreprise"], 1),
      q("m-20", "Stratégie et Management Avancé", "Quel est l'objectif d'une Analyse de la Chaîne de Valeur de Porter ?", ["Identifier les activités de l'entreprise qui créent de la valeur pour le client et procurent un avantage concurrentiel", "Calculer la valeur boursière de l'entreprise", "Déterminer le prix de vente final d'un produit", "Évaluer la solidité financière des fournisseurs"], 0),
      q("m-21", "Marketing Stratégique et Digital", "Qu'est-ce que le Marketing Prédictif ?", ["Deviner les envies des clients au hasard", "Utiliser des algorithmes et des données historiques pour anticiper les comportements futurs des consommateurs", "Faire des sondages dans la rue", "Lancer un produit sans aucune étude préalable"], 1),
      q("m-22", "Marketing Stratégique et Digital", "Que signifie l'acronyme KPI ?", ["Key Performance Indicator (Indicateur Clé de Performance)", "Knowledge Process Integration", "Key Product Innovation", "Known Public Interest"], 0),
      q("m-23", "Marketing Stratégique et Digital", "Qu'est-ce que l'Inbound Marketing ?", ["Une stratégie visant à attirer les clients vers soi par la création de contenu pertinent plutôt que d'aller les chercher par la publicité intrusive", "Faire du démarchage téléphonique intensif", "Acheter des bases de données d'e-mails", "Faire de la publicité à la télévision"], 0),
      q("m-24", "Marketing Stratégique et Digital", "Quel est le but principal du Branding ?", ["Créer un logo uniquement", "Développer une identité de marque forte et cohérente pour susciter une préférence et une fidélité chez le consommateur", "Baisser les prix pour attirer plus de clients", "Vendre le plus de produits possible en un temps record"], 1),
      q("m-25", "Marketing Stratégique et Digital", "Qu'est-ce que le Customer Journey (Parcours Client) ?", ["Le trajet physique du client pour aller au magasin", "L'ensemble des interactions et points de contact d'un client avec une marque, de la prise de conscience au service après-vente", "La liste des achats effectués par un client", "Le temps passé par un client sur un site web"], 1),
      q("m-26", "Étude de Cas Stratégique", "Une entreprise leader sur son marché voit sa part de marché s'effriter au profit de nouveaux entrants low-cost. Quelle stratégie est la plus pertinente ?", ["Baisser ses prix au niveau des concurrents, au risque de dégrader ses marges", "Innover et monter en gamme pour se différencier par la valeur ajoutée et le service", "Ignorer la concurrence et attendre qu'elle disparaisse", "Porter plainte pour concurrence déloyale sans fondement"], 1),
      q("m-27", "Étude de Cas Stratégique", "Comment évaluer le succès du lancement d'un nouveau produit ?", ["Uniquement par le chiffre d'affaires réalisé le premier mois", "Par une combinaison d'indicateurs : ventes, part de marché, taux de pénétration, notoriété et satisfaction client", "Par le nombre d'articles de presse parus", "Par le temps passé à concevoir le produit"], 1),
      q("m-28", "Étude de Cas Stratégique", "Quel est le principal risque d'une expansion internationale trop rapide ?", ["Avoir trop de clients", "Perdre le contrôle opérationnel, ne pas s'adapter aux spécificités locales et mettre en péril la rentabilité globale", "Devenir trop célèbre", "Devoir parler plusieurs langues"], 1),
      q("m-29", "Étude de Cas Stratégique", "En cas de crise de réputation sur les réseaux sociaux, quelle est la meilleure attitude pour une marque ?", ["Supprimer tous les commentaires négatifs et ne pas répondre", "Réagir rapidement, avec transparence, empathie et proposer des solutions concrètes", "Attendre que la crise passe d'elle-même", "Attaquer les internautes en justice"], 1),
      q("m-30", "Étude de Cas Stratégique", "Pour optimiser le ROI d'une campagne marketing digital, il est essentiel de :", ["Dépenser le maximum de budget sur tous les canaux", "Cibler précisément son audience, tester différents messages (A/B testing) et analyser les résultats en temps réel", "Faire la même publicité que ses concurrents", "Ne pas mesurer les résultats pour ne pas être déçu"], 1),
      q("m-31", "Intelligence Artificielle et Éthique des Affaires", "Qu'est-ce que l'IA Générative ?", ["Une IA qui ne fait que classer des données", "Une IA capable de créer de nouveaux contenus (texte, image, audio, vidéo) à partir de données d'entraînement", "Une IA qui ne fonctionne que sur les réseaux sociaux", "Un type de robot industriel"], 1),
      q("m-32", "Intelligence Artificielle et Éthique des Affaires", "Quel est l'enjeu majeur du RGPD pour les entreprises utilisant l'IA ?", ["Payer des taxes sur l'utilisation de l'IA", "Garantir la protection de la vie privée, le consentement des utilisateurs et la transparence dans le traitement des données personnelles", "Utiliser uniquement des serveurs basés en Europe", "Ne plus utiliser de données du tout"], 1),
      q("m-33", "Intelligence Artificielle et Éthique des Affaires", "Quel est l'un des principaux biais de l'IA dont les managers doivent être conscients ?", ["Le biais de confirmation des algorithmes qui peut renforcer des stéréotypes ou des discriminations présents dans les données d'entraînement", "Le biais de l'IA qui préfère les couleurs vives", "Le biais de l'IA qui refuse de travailler le week-end", "Le biais de l'IA qui demande trop d'énergie"], 0),
      q("m-34", "Intelligence Artificielle et Éthique des Affaires", "Comment l'IA peut-elle transformer le rôle du manager ?", ["En remplaçant totalement le manager par un algorithme", "En automatisant les tâches répétitives et en fournissant des analyses de données pour aider à la prise de décision stratégique et humaine", "En surveillant les employés 24h/24", "En supprimant le besoin de communication entre les équipes"], 1),
      q("m-35", "Intelligence Artificielle et Éthique des Affaires", "Qu'est-ce que l'éthique by design dans le développement de systèmes d'IA ?", ["Intégrer les principes éthiques dès la phase de conception du système d'IA, et non après coup", "Faire de beaux designs pour les robots", "Embaucher un philosophe dans l'équipe de développement", "Créer un code de conduite que personne ne lit"], 0),
      q("m-36", "Anglais des Affaires et Négociation", 'Choose the correct word: "We need to ______ a strategy to enter the Asian market."', ["develop", "do", "make", "have"], 0),
      q("m-37", "Anglais des Affaires et Négociation", 'What does "M&A" stand for?', ["Mergers and Acquisitions", "Marketing and Advertising", "Management and Administration", "Money and Assets"], 0),
      q("m-38", "Anglais des Affaires et Négociation", '"The negotiation reached a ______, with neither side willing to budge."', ["deadlock", "finish", "start", "success"], 0),
      q("m-39", "Anglais des Affaires et Négociation", 'What is a "stakeholder"?', ["A person who owns a stake in a fence", "Any person or group that has an interest or concern in an organization", "Only the shareholders of a company", "A competitor in the same market"], 1),
      q("m-40", "Anglais des Affaires et Négociation", '"We must ______ our core competencies to gain a competitive advantage."', ["leverage", "use", "do", "make"], 0),
      q("m-41", "Anglais des Affaires et Négociation", '"The board of directors ______ the proposed merger."', ["approved", "approves", "approving", "approve"], 0),
      q("m-42", "Anglais des Affaires et Négociation", 'What is "sustainability" in a business context?', ["The ability to maintain high profits forever", "Meeting the needs of the present without compromising the ability of future generations to meet theirs", "Keeping the same employees for a long time", "Using the same technology for many years"], 1),
      q("m-43", "Anglais des Affaires et Négociation", '"We are facing a ______ in the global economy."', ["downturn", "upturn", "growth", "success"], 0),
      q("m-44", "Anglais des Affaires et Négociation", 'What does "B2C" mean?', ["Business to Consumer", "Business to Company", "Buyer to Customer", "Back to Commerce"], 0),
      q("m-45", "Anglais des Affaires et Négociation", '"The ______ of the company is to become the world leader in green energy."', ["vision", "end", "stop", "finish"], 0),
      openQ("m-46", "Question Ouverte", "Proposez une stratégie de développement innovante pour une entreprise de votre choix, en tenant compte des défis actuels du marché et des opportunités offertes par les nouvelles technologies (IA, blockchain, etc.)."),
      openQ("m-47", "Question Ouverte", "Comment percevez-vous le rôle du manager commercial et marketing de demain face à l'évolution rapide des technologies et des attentes des consommateurs ? Développez votre vision et les compétences clés nécessaires."),
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
      });
      answerZone.appendChild(label);
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.id = "open-answer";
    textarea.className = "open-answer";
    textarea.placeholder = "Saisissez votre réponse...";
    answerZone.appendChild(textarea);
  }

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
  $("final-message").innerHTML = `
    <i class="${medal.icon}"></i> ${medal.label} - Niveau ${perf}<br>
    Record ${QUIZ_DATA[state.levelKey].label}: <strong>${finalRecord.percent}%</strong> par ${finalRecord.name}<br>
    <small>Dernière mise à jour: ${formatDate(finalRecord.when)}</small>
  `;

  if (percent >= 85) launchConfetti();

  const errorList = $("error-list");
  errorList.innerHTML = "";
  if (!errors.length) {
    const div = document.createElement("div");
    div.className = "no-error";
    div.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sans erreur sur les questions QCM. Excellent résultat.';
    errorList.appendChild(div);
  } else {
    errors.forEach(({ question, answer }, idx) => {
      const item = document.createElement("article");
      item.className = "error-item";
      const selectedText =
        answer && answer.selected !== null
          ? `${String.fromCharCode(65 + answer.selected)}) ${question.options[answer.selected]}`
          : "Aucune réponse";
      const correctText = `${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}`;
      item.innerHTML = `
        <h4>Erreur ${idx + 1} - ${question.section}</h4>
        <p>${question.text}</p>
        <p><span class="tag-wrong">Votre réponse:</span> ${selectedText}</p>
        <p><span class="tag-right">Bonne réponse:</span> ${correctText}</p>
      `;
      errorList.appendChild(item);
    });
  }
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
