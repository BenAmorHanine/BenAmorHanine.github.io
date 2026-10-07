/* ==========================================================
   ALL THE TEXT OF THE WEBSITE LIVES HERE.
   To add a new experience: copy one block inside "experience"
   (in BOTH "en" and "fr"), paste it at the top, and edit it.
   ========================================================== */

window.SITE = {
  name: "Hanine Ben Amor",
  initials: "HB",
  email: "hanine.benamor@insat.ucar.tn",
  github: "https://github.com/BenAmorHanine",
  linkedin: "https://www.linkedin.com/in/hanine-ben-amor-3604b1247/",
  photo: ,//"assets/photo.jpg", // put your photo here with this exact name
  cv: {
    en: "assets/cv/Hanine_Ben_Amor_CV_EN.pdf",
    fr: "assets/cv/Hanine_Ben_Amor_CV_FR.pdf"
  },

  /* ======================= ENGLISH ======================= */
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact", cv: "Download CV", menu: "Menu" },
    hero: {
      status: "Open to a PFE internship in applied AI, 2027",
      title: "Hanine Ben Amor.",
      tagline: "I build AI that sees, reads and reasons.",
      intro: "Final-year ICT engineering student at INSAT, working on computer vision, NLP, RAG, LLMs and multimodal AI, from research prototypes to models running on edge devices.",
      cta1: "Download CV",
      cta2: "View my experience",
      cta3: "View my projects",
      note: "Looking for startups and research labs in France"
    },
    highlights: [
      { value: "85%", label: "mAP@50 on fine-tuned detection models" },
      { value: "20+", label: "computer vision use cases deployed on NVIDIA Jetson" },
      { value: "1.25B", label: "pages in the Arabic judicial archive behind my RAG system" },
      { value: "~100 MB", label: "memory footprint after moving a pipeline from PyTorch to ONNX" }
    ],
    about: {
      title: "About",
      text: [
        "I'm a final-year engineering student at INSAT (Tunis) with hands-on experience across the AI stack: classical machine learning, computer vision, natural language processing (NLP), retrieval-augmented generation, LLMs and multimodal models.",
        "I care about systems that work in real conditions: models that run on a Jetson under privacy constraints, RAG pipelines that refuse to answer without evidence, and search engines fast enough to feel instant. For my PFE, I'm looking for a startup or research lab in France working on computer vision, NLP, ML, RAG or agentic LLM systems."
      ],
      facts: [
        { k: "Based in", v: "Tunis, Tunisia" },
        { k: "Degree", v: "Engineering, INSAT, 2027" },
        { k: "Focus", v: "Computer vision, NLP, RAG & LLMs, multimodal AI" },
        { k: "Languages", v: "French, English, Arabic; basic German and Spanish" }
      ]
    },
    experience: {
      title: "Experience",
      linkLabel: "See the project on GitHub",
      items: [
        {
          role: "AI & Data Science Intern (R&D)",
          org: "Yonnov'IA", place: "Marseille, France", dates: "Jul 2026 – Aug 2026",
          bullets: [
            "Built a hybrid semantic recommendation engine (9 signals + MMR) with ONNX/fastembed and pgvector (HNSW/IVFFlat), on top of a full scraping-to-retrieval pipeline.",
            "Cut latency from ~4–5 s to near-instant and memory from several GB to ~100 MB by moving from PyTorch to ONNX Runtime, with 3D PCA explainability and precision@k evaluation."
          ],
          tags: ["pgvector", "ONNX", "fastembed", "MMR", "Semantic search"]
        },
        {
          role: "AI Engineer (part-time)",
          org: "1MoreThing Ventures", place: "Tunis, Tunisia", dates: "Dec 2025 – Present",
          phases: [
            {
              name: "ML & Computer Vision", dates: "Jun 2026 – Present",
              bullets: [
                "Developed and validated 20+ computer vision use cases (detection, pose, tracking, OCR) with multi-step inference pipelines deployed on NVIDIA Jetson, under licensing and data-privacy constraints.",
                "Fine-tuned object detection and classification models on custom annotated datasets, reaching 85% mAP@50."
              ]
            },
            {
              name: "AI, RAG & OCR", dates: "Dec 2025 – May 2026",
              bullets: [
                "Designed an air-gapped, open-licence RAG system with a locally deployed Qwen LLM for a ~1.25-billion-page Arabic judicial archive (Ministry of Justice).",
                "Benchmarked OCR engines (PaddleOCR, Qari-OCR, Baseer) by page type and quality tier with CER/WER, on a handwriting-heavy corpus without ground truth.",
                "Built an 8-stage pipeline (intake, audit, splitting, structuring, hybrid indexing) with dense, BM25 and visual retrieval, cross-encoder reranking and Qwen for answer generation.",
                "Enforced a no-answer-without-evidence rule through citation verification, graded abstention against hallucinations, and a review loop that stores corrections as training data."
              ]
            }
          ],
          tags: ["YOLO", "RF-DETR", "NVIDIA Jetson", "RAG", "OCR", "Qwen", "Arabic NLP"]
        },
        {
          role: "Machine Learning Engineering Intern",
          org: "Hydatis", place: "Tunis, Tunisia", dates: "Jun 2025 – Aug 2025",
          link: "https://github.com/BenAmorHanine/personal_security_solution",
          bullets: [
            "Architected an AI-powered personal safety platform combining geospatial risk prediction and behavioural anomaly detection.",
            "Built the NLP and voice AI pipeline: Whisper transcription, then TunBERT fine-tuned on Tunisian dialect to detect distress (recall 0.90, F1 0.88 on the distress class), plus SpeechBrain for emotion analysis.",
            "Trained RandomForest/XGBoost models and served them through FastAPI microservices with REST APIs for real-time alerts."
          ],
          tags: ["NLP", "Whisper", "TunBERT", "Speech AI", "XGBoost", "FastAPI"]
        },
        {
          role: "IT Instructor",
          org: "PIZART Training Center", place: "Sousse, Tunisia", dates: "Jun 2024 – Present",
          bullets: ["Teaching Python, algorithms and machine learning to learners of different levels, and designing interactive educational projects."],
          tags: ["Teaching", "Python", "ML"]
        },
        {
          role: "Software Engineering Intern",
          org: "ITGate Group", place: "Sousse, Tunisia", dates: "Jul 2024",
          bullets: ["Built a microservices-based role management (RBAC) system with Node.js, MongoDB, JWT and Angular."],
          tags: ["Node.js", "Angular", "MongoDB"]
        }
      ]
    },
    projects: {
      title: "Projects",
      linkLabel: "View on GitHub",
      items: [
        {
          title: "Multimodal highlight detection for short videos",
          badge: "Publication in progress",
          text: "End-to-end pipeline that automatically generates Shorts by combining ImageBind, Whisper and BLIP-2, with cross-modal weighting and per-segment attention. Zero-shot detection through transformer-based semantic reranking of generated descriptions, with no labelled data.",
          tags: ["ImageBind", "Whisper", "BLIP-2", "Zero-shot"]
        },
        {
          title: "Real-time personal safety system",
          link: "https://github.com/BenAmorHanine/personal_security_solution",
          badge: "Distress recall 0.90",
          text: "Multi-signal safety system (Hydatis internship) that detects potential incidents by fusing behavioural anomaly detection, geospatial risk assessment and voice analysis. Its NLP core is a TunBERT model fine-tuned on Tunisian dialect transcriptions, which caught 180 of 200 distress cases in the test set.",
          tags: ["NLP", "Fine-tuning", "TunBERT", "Speech AI", "FastAPI"]
        },
        {
          title: "Sentiment analysis of hotel reviews",
          link: "https://github.com/BenAmorHanine/ML--Customers_Review_Analysis",
          badge: "Team project",
          text: "Full NLP pipeline on reviews of a 4-star business hotel in Tunis: Selenium scraping, text cleaning, TF-IDF, weak labelling and a comparison of Naive Bayes, logistic regression and SVM. Rebalancing with SMOTE raised the SVM from 68% to 90% in 5-fold cross-validation, and the analysis of its lexical limits points to contextual models.",
          tags: ["NLP", "TF-IDF", "SVM", "scikit-learn", "Web scraping"]
        },
        {
          title: "Respiratory sound classification",
          link: "https://github.com/BenAmorHanine/DL-optimisation-Classification-sonrespiratoire-ICBHdataset-AST-SAM",
          badge: "ICBHI score 69.4%",
          text: "Reproduced and improved a Transformer pipeline (AST + SAM optimizer) on ICBHI 2017, adding Focal Loss, Mixup and patient-wise evaluation. Outperformed the reference paper under stricter generalisation conditions.",
          tags: ["AST", "SAM", "Audio AI", "PyTorch"]
        },
        {
          title: "Big data pipeline for Chicago air quality",
          link: "https://github.com/BenAmorHanine/BigData-Airquality-chicago-analysis",
          text: "Real-time ingestion with Kafka, Spark Structured Streaming to HDFS, batch analytics with Java MapReduce, serving through HBase and an interactive Streamlit dashboard, all deployed with Docker.",
          tags: ["Kafka", "Spark", "HDFS", "HBase", "Docker"]
        },
        {
          title: "Boltzmann machines trained by quantum annealing",
          link: "https://github.com/ButterFlyEffect404/PPP",
          badge: "Contributor",
          text: "Quantum Boltzmann Machine using quantum annealing to train in large Hilbert spaces, with quantum state tomography on benchmark datasets.",
          tags: ["Quantum ML", "Optimization"]
        }
      ]
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "ML & deep learning", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face Transformers", "AST", "XGBoost", "RandomForest"] },
        { name: "Generative AI & LLMs", items: ["LLMs", "RAG", "Diffusion models", "Embeddings", "Prompt engineering", "Qwen", "LLaMA", "Graded abstention"] },
        { name: "Computer vision", items: ["Object detection", "Classification", "Pose estimation", "Tracking", "OCR", "Edge AI", "YOLO", "RF-DETR", "Fine-tuning", "mAP evaluation"] },
        { name: "Specialisations", items: ["NLP", "Arabic NLP", "Sentiment analysis", "Transformer fine-tuning", "Document AI", "PaddleOCR", "Video processing", "Whisper", "SpeechBrain", "TunBERT", "ImageBind", "BLIP-2"] },
        { name: "Semantic search", items: ["pgvector", "HNSW / IVFFlat", "BM25", "MMR", "Cross-encoder reranking", "Precision@k", "PCA explainability"] },
        { name: "MLOps & deployment", items: ["Docker", "FastAPI", "ONNX", "Prometheus", "Grafana", "REST APIs", "NVIDIA Jetson", "MQTT"] },
        { name: "Data & databases", items: ["Pandas", "NumPy", "SQL", "Spark", "Kafka", "HDFS", "HBase", "MapReduce", "PostgreSQL", "MySQL", "MongoDB", "Power BI"] },
        { name: "Programming & tools", items: ["Python", "Java", "JavaScript / TypeScript", "Git", "GitLab Actions", "Linux", "Agile"] }
      ]
    },
    education: {
      title: "Education",
      items: [
        { degree: "Engineering degree in Computer Networks and Telecommunications", school: "INSAT, Tunisia", dates: "Expected 2027", detail: "Machine learning, deep learning, data analysis, stochastic processes, optimization, operations research, business intelligence, big data" },
        { degree: "Preparatory cycle", school: "INSAT, Tunisia", dates: "2024" },
        { degree: "High school diploma in Mathematics, highest honours", school: "Sousse, Tunisia", dates: "2022" }
      ],
      certTitle: "Certifications",
      certs: [
        { name: "AWS Certified AI Practitioner (AIF-C01)", org: "AWS", year: "2026" },
        { name: "Generative AI Foundations", org: "AWS", year: "2026" },
        { name: "ML Engineer Track", org: "DataCamp", year: "2025" }
      ],
      activityTitle: "Leadership",
      activities: [
        { role: "System Administrator, ACM INSAT", dates: "2023 – 2025", text: "Managed network infrastructure for 100+ participants across the CodeQuest, WinterCup and DataQuest competitions; mentored new members and co-organised the Data Overflow competition." }
      ]
    },
    contact: {
      title: "Let's work together",
      text: "I'm looking for a PFE internship in computer vision, ML, RAG or LLM agents, with a startup or research lab in France. Email is the fastest way to reach me.",
      email: "Email me",
      copied: "Email copied",
      copy: "Copy email"
    },
    footer: "Built and hosted on GitHub Pages."
  },

  /* ======================= FRANÇAIS ======================= */
  fr: {
    nav: { about: "Profil", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact", cv: "Télécharger le CV", menu: "Menu" },
    hero: {
      status: "Disponible pour un stage PFE en IA appliquée, 2027",
      title: "Hanine Ben Amor.",
      tagline: "Je conçois des IA qui voient, lisent et raisonnent.",
      intro: "Élève ingénieure en dernière année à l'INSAT, je travaille sur la vision par ordinateur, le NLP, le RAG, les LLMs et l'IA multimodale, du prototype de recherche au modèle déployé en edge.",
      cta1: "Télécharger le CV",
      cta2: "Voir mon expérience",
      cta3: "Voir mes projets",
      note: "À la recherche d'une startup ou d'un laboratoire de recherche en France"
    },
    highlights: [
      { value: "85 %", label: "de mAP@50 sur des modèles de détection fine-tunés" },
      { value: "20+", label: "cas d'usage vision déployés sur NVIDIA Jetson" },
      { value: "1,25 Md", label: "de pages dans l'archive judiciaire arabe visée par mon système RAG" },
      { value: "~100 Mo", label: "d'empreinte mémoire après passage de PyTorch à ONNX" }
    ],
    about: {
      title: "Profil",
      text: [
        "Élève ingénieure en dernière année à l'INSAT (Tunis), j'ai une expérience concrète sur toute la chaîne de l'IA : machine learning classique, vision par ordinateur, traitement automatique du langage (NLP), génération augmentée par la recherche (RAG), LLMs et modèles multimodaux.",
        "Je m'intéresse aux systèmes qui fonctionnent en conditions réelles : des modèles qui tournent sur Jetson sous contraintes de confidentialité, des pipelines RAG qui refusent de répondre sans preuve, des moteurs de recherche assez rapides pour paraître instantanés. Pour mon PFE, je recherche une startup ou un laboratoire en France travaillant sur la vision, le NLP, le ML, le RAG ou les systèmes agentiques à base de LLMs."
      ],
      facts: [
        { k: "Basée à", v: "Tunis, Tunisie" },
        { k: "Diplôme", v: "Ingénieure, INSAT, 2027" },
        { k: "Domaines", v: "Vision par ordinateur, NLP, RAG et LLMs, IA multimodale" },
        { k: "Langues", v: "Français, anglais, arabe ; notions d'allemand et d'espagnol" }
      ]
    },
    experience: {
      title: "Expérience",
      linkLabel: "Voir le projet sur GitHub",
      items: [
        {
          role: "Stagiaire IA & Data Science (R&D)",
          org: "Yonnov'IA", place: "Marseille, France", dates: "Juil. 2026 – Août 2026",
          bullets: [
            "Développement d'un moteur de recommandation sémantique hybride (9 signaux + MMR) avec ONNX/fastembed et pgvector (HNSW/IVFFlat), sur un pipeline complet du scraping au retrieval.",
            "Latence réduite de ~4–5 s à quasi instantanée et mémoire de plusieurs Go à ~100 Mo grâce au passage de PyTorch à ONNX Runtime, avec explicabilité PCA 3D et évaluation precision@k."
          ],
          tags: ["pgvector", "ONNX", "fastembed", "MMR", "Recherche sémantique"]
        },
        {
          role: "Ingénieure IA (temps partiel)",
          org: "1MoreThing Ventures", place: "Tunis, Tunisie", dates: "Déc. 2025 – Aujourd'hui",
          phases: [
            {
              name: "ML & vision par ordinateur", dates: "Juin 2026 – Aujourd'hui",
              bullets: [
                "Développement et validation de plus de 20 cas d'usage vision (détection, pose, suivi, OCR) avec des pipelines d'inférence multi-étapes déployés sur NVIDIA Jetson, sous contraintes de licence et de confidentialité.",
                "Fine-tuning de modèles de détection et de classification sur des datasets annotés sur mesure, atteignant 85 % de mAP@50."
              ]
            },
            {
              name: "IA, RAG & OCR", dates: "Déc. 2025 – Mai 2026",
              bullets: [
                "Conception d'un système RAG air-gappé sous licences ouvertes, avec un LLM Qwen déployé en local, pour une archive judiciaire arabe d'environ 1,25 milliard de pages (Ministère de la Justice).",
                "Benchmark de moteurs OCR (PaddleOCR, Qari-OCR, Baseer) par type de page et niveau de qualité via CER/WER, sur un corpus majoritairement manuscrit sans vérité terrain.",
                "Pipeline en 8 étapes (réception, audit, découpage, structuration, indexation hybride) avec retrieval dense, BM25 et visuel, reranking par cross-encoder et Qwen pour la génération des réponses.",
                "Règle stricte « pas de réponse sans preuve » : vérification des citations, abstention graduée contre les hallucinations et boucle de révision qui conserve les corrections comme données d'entraînement."
              ]
            }
          ],
          tags: ["YOLO", "RF-DETR", "NVIDIA Jetson", "RAG", "OCR", "Qwen", "NLP arabe"]
        },
        {
          role: "Stagiaire en Machine Learning",
          org: "Hydatis", place: "Tunis, Tunisie", dates: "Juin 2025 – Août 2025",
          link: "https://github.com/BenAmorHanine/personal_security_solution",
          bullets: [
            "Conception d'une plateforme de sécurité personnelle combinant prédiction géospatiale des risques et détection d'anomalies comportementales.",
            "Développement du pipeline NLP et d'IA vocale : transcription Whisper, puis TunBERT fine-tuné sur le dialecte tunisien pour détecter la détresse (rappel 0,90, F1 0,88 sur la classe Détresse), et SpeechBrain pour l'analyse des émotions.",
            "Entraînement de modèles RandomForest/XGBoost et mise en production via des microservices FastAPI et des APIs REST pour des alertes en temps réel."
          ],
          tags: ["NLP", "Whisper", "TunBERT", "Speech AI", "XGBoost", "FastAPI"]
        },
        {
          role: "Formatrice en programmation",
          org: "PIZART Training Center", place: "Sousse, Tunisie", dates: "Juin 2024 – Aujourd'hui",
          bullets: ["Enseignement de Python, de l'algorithmique et du machine learning à différents niveaux ; conception de projets pédagogiques interactifs."],
          tags: ["Enseignement", "Python", "ML"]
        },
        {
          role: "Stagiaire en génie logiciel",
          org: "ITGate Group", place: "Sousse, Tunisie", dates: "Juillet 2024",
          bullets: ["Développement d'un système de gestion des rôles (RBAC) en microservices avec Node.js, MongoDB, JWT et Angular."],
          tags: ["Node.js", "Angular", "MongoDB"]
        }
      ]
    },
    projects: {
      title: "Projets",
      linkLabel: "Voir sur GitHub",
      items: [
        {
          title: "Détection multimodale de moments forts pour vidéos courtes",
          badge: "Publication en cours",
          text: "Pipeline de bout en bout qui génère automatiquement des Shorts en combinant ImageBind, Whisper et BLIP-2, avec pondération cross-modale et attention par segment. Détection zero-shot par reranking sémantique à base de transformers sur des descriptions générées, sans données labellisées.",
          tags: ["ImageBind", "Whisper", "BLIP-2", "Zero-shot"]
        },
        {
          title: "Système de sécurité personnelle en temps réel",
          link: "https://github.com/BenAmorHanine/personal_security_solution",
          badge: "Rappel détresse 0,90",
          text: "Système multi-signaux (stage Hydatis) qui détecte les incidents potentiels en fusionnant détection d'anomalies comportementales, évaluation géospatiale des risques et analyse vocale. Son cœur NLP est un TunBERT fine-tuné sur des transcriptions en dialecte tunisien, qui a détecté 180 des 200 cas de détresse du jeu de test.",
          tags: ["NLP", "Fine-tuning", "TunBERT", "IA vocale", "FastAPI"]
        },
        {
          title: "Analyse de sentiment d'avis clients d'un hôtel",
          link: "https://github.com/BenAmorHanine/ML--Customers_Review_Analysis",
          badge: "Projet en équipe",
          text: "Pipeline NLP complet sur les avis d'un hôtel d'affaires 4 étoiles à Tunis : scraping Selenium, nettoyage du texte, TF-IDF, étiquetage faible et comparaison Naive Bayes, régression logistique et SVM. Le rééquilibrage par SMOTE fait passer le SVM de 68 % à 90 % en validation croisée 5-fold, et l'analyse de ses limites lexicales oriente vers des modèles contextuels.",
          tags: ["NLP", "TF-IDF", "SVM", "scikit-learn", "Web scraping"]
        },
        {
          title: "Classification de sons respiratoires",
          link: "https://github.com/BenAmorHanine/DL-optimisation-Classification-sonrespiratoire-ICBHdataset-AST-SAM",
          badge: "Score ICBHI 69,4 %",
          text: "Reproduction et amélioration d'un pipeline Transformer (AST + optimiseur SAM) sur ICBHI 2017, avec Focal Loss, Mixup et évaluation par patient. Résultat supérieur au papier de référence dans des conditions de généralisation plus strictes.",
          tags: ["AST", "SAM", "IA audio", "PyTorch"]
        },
        {
          title: "Pipeline Big Data sur la qualité de l'air à Chicago",
          link: "https://github.com/BenAmorHanine/BigData-Airquality-chicago-analysis",
          text: "Ingestion temps réel avec Kafka, Spark Structured Streaming vers HDFS, analyses batch en Java MapReduce, exposition via HBase et tableau de bord Streamlit interactif, le tout déployé sous Docker.",
          tags: ["Kafka", "Spark", "HDFS", "HBase", "Docker"]
        },
        {
          title: "Machines de Boltzmann entraînées par recuit quantique",
          link: "https://github.com/ButterFlyEffect404/PPP",
          badge: "Contributrice",
          text: "Machine de Boltzmann quantique exploitant le recuit quantique pour l'entraînement dans de grands espaces de Hilbert, avec tomographie d'état quantique sur des jeux de données de référence.",
          tags: ["ML quantique", "Optimisation"]
        }
      ]
    },
    skills: {
      title: "Compétences",
      groups: [
        { name: "ML & deep learning", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face Transformers", "AST", "XGBoost", "RandomForest"] },
        { name: "IA générative & LLMs", items: ["LLMs", "RAG", "Modèles de diffusion", "Embeddings", "Prompt engineering", "Qwen", "LLaMA", "Abstention graduée"] },
        { name: "Vision par ordinateur", items: ["Détection d'objets", "Classification", "Estimation de pose", "Suivi d'objets", "OCR", "Edge AI", "YOLO", "RF-DETR", "Fine-tuning", "Évaluation mAP"] },
        { name: "Spécialisations", items: ["NLP", "NLP arabe", "Analyse de sentiment", "Fine-tuning de Transformers", "Document AI", "PaddleOCR", "Traitement vidéo", "Whisper", "SpeechBrain", "TunBERT", "ImageBind", "BLIP-2"] },
        { name: "Recherche sémantique", items: ["pgvector", "HNSW / IVFFlat", "BM25", "MMR", "Reranking cross-encoder", "Precision@k", "Explicabilité PCA"] },
        { name: "MLOps & déploiement", items: ["Docker", "FastAPI", "ONNX", "Prometheus", "Grafana", "APIs REST", "NVIDIA Jetson", "MQTT"] },
        { name: "Données & bases", items: ["Pandas", "NumPy", "SQL", "Spark", "Kafka", "HDFS", "HBase", "MapReduce", "PostgreSQL", "MySQL", "MongoDB", "Power BI"] },
        { name: "Programmation & outils", items: ["Python", "Java", "JavaScript / TypeScript", "Git", "GitLab Actions", "Linux", "Agile"] }
      ]
    },
    education: {
      title: "Formation",
      items: [
        { degree: "Diplôme d'ingénieur en Réseaux et Télécommunications", school: "INSAT, Tunisie", dates: "Prévu en 2027", detail: "Machine learning, deep learning, analyse de données, processus stochastiques, optimisation, recherche opérationnelle, business intelligence, big data" },
        { degree: "Cycle préparatoire", school: "INSAT, Tunisie", dates: "2024" },
        { degree: "Baccalauréat Mathématiques, mention Très Bien", school: "Sousse, Tunisie", dates: "2022" }
      ],
      certTitle: "Certifications",
      certs: [
        { name: "AWS Certified AI Practitioner (AIF-C01)", org: "AWS", year: "2026" },
        { name: "Generative AI Foundations", org: "AWS", year: "2026" },
        { name: "ML Engineer Track", org: "DataCamp", year: "2025" }
      ],
      activityTitle: "Engagement associatif",
      activities: [
        { role: "Administratrice système, ACM INSAT", dates: "2023 – 2025", text: "Gestion de l'infrastructure réseau pour plus de 100 participants lors des compétitions CodeQuest, WinterCup et DataQuest ; mentorat des nouveaux membres et co-organisation de la compétition Data Overflow." }
      ]
    },
    contact: {
      title: "Travaillons ensemble",
      text: "Je recherche un stage PFE en vision par ordinateur, ML, RAG ou agents LLM, au sein d'une startup ou d'un laboratoire de recherche en France. Le plus rapide pour me joindre reste l'email.",
      email: "M'écrire",
      copied: "Email copié",
      copy: "Copier l'email"
    },
    footer: "Conçu et hébergé sur GitHub Pages."
  }
};
