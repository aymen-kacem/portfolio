import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
const avatar = { url: "/profile.jpg" };
const cvFile = { url: "/Aymen_Kacem_CV.pdf" };

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Aymen Kacem" },
      {
        name: "description",
        content:
          "CV d'Aymen Kacem : éducation, expériences professionnelles, projets et compétences en Big Data et IA.",
      },
      { property: "og:title", content: "CV — Aymen Kacem" },
      { property: "og:description", content: "CV complet d'Aymen Kacem, Big Data & IA." },
    ],
  }),
  component: CV,
});

const experiences = [
  {
    title: "Développement d'une plateforme « Super-App » pour la vie étudiante",
    period: "BINVERSE, Sfax | Janvier – mai 2026 (5 mois)",
    bullets: [
      "Conception d'une plateforme intégrant vie sociale, académique et professionnelle des étudiants",
      "Développement d'un système de gestion de clubs universitaires (plus de 20 clubs, 300+ membres)",
      "Implémentation d'un Campus Feed interactif (posts, stories, événements) pour 500+ utilisateurs",
      "Création d'un module recrutement/stages avec système Swipe-to-Apply",
      "Mise en place d'un système de gamification (badges, classements, engagement)",
      "Architecture technique : React.js, Laravel 11, MySQL, WebSockets — 100+ utilisateurs simultanés",
    ],
  },
  {
    title: "Application Web de Pointage Automatisé par Reconnaissance Faciale",
    period: "IP Soft, Sfax | Juillet – Septembre 2025 (2 mois)",
    bullets: [
      "Authentification sécurisée par JWT dynamique (connexion/déconnexion)",
      "Détection faciale en temps réel via caméras IP connectées au réseau",
      "Enregistrement automatique de la date, l'heure et l'image lors de chaque détection",
      "Notifications en temps réel avec photo et horodatage",
      "Tableau de bord affichant l'historique des présences et statistiques",
    ],
  },
  {
    title: "Stage — Data Scientist",
    period: "Yperflow, Sfax | Juillet – Août 2024 (2 mois)",
    bullets: [
      "Extraction, conversion, redimensionnement et traitement d'images avec OpenCV et Tesseract OCR",
      "Utilisation de PDDLOCR et TableCV pour automatiser la détection et l'organisation des données extraites",
      "Extraction de données depuis des PDF (normaux et scannés) avec PyMuPDF, Fitz et Tesseract OCR",
      "Création, gestion des propriétés et sécurisation (mot de passe) de documents avec Spire",
      "Extraction structurée de données via expressions régulières (module re)",
    ],
  },
  {
    title: "Stage de fin d'études — Architecture Big Data pour l'analyse de données rapides et changeantes",
    period: "Sifast, Sfax | Février – Juin 2024 (5 mois)",
    bullets: [
      "Ingestion de données avec Apache Kafka depuis des API, consommées par Hadoop (HDFS), Kudu et Spark",
      "Prétraitement des données par lots avec Apache Spark, stockage sur HDFS via YARN, codage d'effacement (XOR)",
      "Traitement temps réel avec Spark Streaming, stockage dans Kudu pour analyses rapides",
      "Intégration Kudu / Impala pour l'analyse temps réel et requêtage HDFS via Spark SQL",
      "Conception d'une architecture hautement évolutive et tolérante aux pannes (multi-clusters)",
    ],
  },
];

function CV() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="sr-only">CV d'Aymen Kacem</h1>

      <div className="surface-card overflow-hidden">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]">
          {/* Colonne gauche */}
          <aside className="space-y-8 border-b border-border/60 bg-secondary/30 p-8 md:border-r md:border-b-0">
            <img
              src={avatar.url}
              alt="Portrait d'Aymen Kacem"
              className="mx-auto size-32 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="font-display text-xl font-bold">Aymen Kacem</p>
              <p className="mt-1 text-xs text-primary">
                Étudiant Ingénieur — Data, Big Data & IA
              </p>
            </div>

            <Block title="Profil">

              <p className="mt-2 text-sm text-muted-foreground">
                Étudiant ingénieur en informatique, spécialité Big Data & Intelligence
                Artificielle.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                En échange académique à l'Université de Technologie de Troyes (UTT), France,
                pour la dernière année du cycle d'ingénieur.
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">Curieux • Esprit analytique • Autonome</p>
            </Block>

            <Block title="Contact">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="size-3.5 shrink-0 text-primary" /> Troyes, France
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-3.5 shrink-0 text-primary" /> +33 7 59 04 38 86
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-3.5 shrink-0 text-primary" />
                  <a className="hover:text-foreground" href="mailto:aymenkacem2019@gmail.com">
                    aymenkacem2019@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="size-3.5 shrink-0 text-primary" />
                  <a
                    className="break-all hover:text-foreground"
                    href="https://www.linkedin.com/in/aymen-kacem-96b571291/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/aymen-kacem
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="size-3.5 shrink-0 text-primary" />
                  <a
                    className="break-all hover:text-foreground"
                    href="https://github.com/aymen-kacem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/aymen-kacem
                  </a>
                </li>
              </ul>
            </Block>

            <Block title="Langues">
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><span className="font-medium text-foreground">Arabe</span> — langue maternelle</li>
                <li><span className="font-medium text-foreground">Français</span> — niveau B2</li>
                <li><span className="font-medium text-foreground">Anglais</span> — niveau B2</li>
              </ul>
            </Block>

            <Block title="Compétences clés">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="font-medium text-foreground">Big Data</span> Kafka, Spark, Spark Streaming, Hadoop, Kudu, Impala</li>
                <li><span className="font-medium text-foreground">Langages</span> Python, Java, TypeScript, JavaScript, SQL, PHP</li>
                <li><span className="font-medium text-foreground">Frameworks</span> Django, React, Angular, Laravel 11</li>
                <li><span className="font-medium text-foreground">Bases de données</span> PostgreSQL, MySQL</li>
                <li><span className="font-medium text-foreground">Outils</span> Git, Docker, Postman, Firebase</li>
              </ul>
            </Block>

            <Block title="Centres d'intérêt">
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Machine Learning & Vision par ordinateur</li>
                <li>Architectures Big Data</li>
                <li>Développement web full-stack</li>
              </ul>
            </Block>
          </aside>

          {/* Colonne droite */}
          <div className="space-y-8 p-8">
            <Block title="Éducation">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground font-semibold">
                    Diplôme national d'ingénieur, spécialité Informatique
                  </span>{" "}
                  Institut International de Technologie (IIT), Sfax, Tunisie & Université de Technologie de Troyes (UTT), France <span className="text-primary">•</span> 2024 – 2027 (en cours)
                </li>
                <li>
                  <span className="text-foreground font-semibold">Licence en Sciences de l'Informatique — Génie Logiciel et Systèmes d'Information</span>{" "}
                  Faculté des Sciences de Sfax <span className="text-primary">•</span> 2021 – 2024
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Baccalauréat en Sciences Expérimentales
                  </span>{" "}
                  Tunisie <span className="text-primary">•</span> 2020
                </li>
              </ul>
            </Block>

            <Block title="Expériences professionnelles">
              <div className="space-y-6">
                {experiences.map((e) => (
                  <div key={e.title}>
                    <p className="text-[15px] font-semibold text-foreground">{e.title}</p>
                    <p className="mt-0.5 text-sm text-primary italic">{e.period}</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-primary">▸</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Certifications">
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary">▸</span>
                <p>
                  <span className="font-semibold text-foreground">AWS Academy Graduate — Cloud Foundations</span> (Training Badge, 20h) — services essentiels
                  AWS, architecture cloud, sécurité et déploiement
                </p>
              </div>
            </Block>


          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={cvFile.url}
          download="Aymen_Kacem_CV.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="size-4" /> Télécharger mon CV
        </a>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 rounded-md bg-primary/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
