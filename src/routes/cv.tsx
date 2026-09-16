import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import avatar from "@/assets/aymen.jpg.asset.json";
import cvFile from "@/assets/cv.docx.asset.json";

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
    period: "Janvier – Mars 2026 (3 mois)",
    title: "Stage — Plateforme « Super-App » pour la vie étudiante — BINVERSE, Sfax",
    bullets: [
      "Plateforme intégrant vie sociale, académique et professionnelle des étudiants",
      "Gestion de clubs universitaires (20+ clubs, 300+ membres)",
      "Campus Feed interactif (posts, stories, événements) pour 500+ utilisateurs",
      "Module recrutement/stages avec système Swipe-to-Apply",
      "Gamification (badges, classements, engagement)",
      "React.js, Laravel 11, MySQL, WebSockets — 100+ utilisateurs simultanés",
    ],
  },
  {
    period: "Juillet – Septembre 2025 (2 mois)",
    title: "Stage d'été — Pointage automatisé par reconnaissance faciale — IP Soft, Sfax",
    bullets: [
      "Authentification sécurisée par JWT dynamique",
      "Détection faciale en temps réel via caméras IP",
      "Enregistrement automatique de la date, l'heure et l'image",
      "Notifications en temps réel avec photo et horodatage",
      "Tableau de bord : historique des présences et statistiques",
    ],
  },
  {
    period: "Juillet – Août 2024 (2 mois)",
    title: "Stage — Data Scientist — Yperflow, Sfax",
    bullets: [
      "Traitement d'images avec OpenCV et Tesseract OCR",
      "PDDLOCR et TableCV pour automatiser la détection de données tabulaires",
      "Extraction depuis PDF normaux et scannés (PyMuPDF, Fitz, Tesseract)",
      "Gestion et sécurisation de documents avec Spire",
      "Extraction structurée via expressions régulières",
    ],
  },
  {
    period: "Février – Juin 2024 (5 mois)",
    title: "Stage de fin d'études — Architecture Big Data — Sifast, Sfax",
    bullets: [
      "Ingestion avec Apache Kafka depuis des API, consommée par Hadoop (HDFS), Kudu et Spark",
      "Prétraitement par lots avec Spark, stockage HDFS via YARN, codage d'effacement (XOR)",
      "Traitement temps réel avec Spark Streaming, stockage dans Kudu",
      "Intégration Kudu / Impala et requêtage HDFS via Spark SQL",
      "Architecture multi-clusters évolutive et tolérante aux pannes",
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
              <p className="text-sm text-muted-foreground">
                24 ans. Étudiant ingénieur en informatique, spécialité Big Data & Intelligence
                Artificielle. En échange académique à l'UTT, France, pour la dernière année du cycle
                d'ingénieur.
              </p>
              <p className="mt-2 text-sm text-primary">Curieux — Esprit analytique — Autonome</p>
            </Block>

            <Block title="Contact">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="size-3.5 shrink-0 text-primary" /> +216 28 289 415
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-3.5 shrink-0 text-primary" />
                  <a className="hover:text-foreground" href="mailto:aymenkacem2019@gmail.com">
                    aymenkacem2019@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-3.5 shrink-0 text-primary" /> Troyes, France
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="size-3.5 shrink-0 text-primary" />
                  <a
                    className="break-all hover:text-foreground"
                    href="https://www.linkedin.com/in/aymen-kacem-96b571291/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    aymen-kacem
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
                <li>Arabe : langue maternelle</li>
                <li>Français : B2</li>
                <li>Anglais : B2</li>
              </ul>
            </Block>

            <Block title="Compétences clés">
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Big Data : Kafka, Spark, Spark Streaming, Hadoop, Kudu, Impala</li>
                <li>Langages : Python, Java, TypeScript, JavaScript, SQL, PHP</li>
                <li>Frameworks : Django, React, Angular, Laravel 11</li>
                <li>Bases de données : PostgreSQL, MySQL</li>
                <li>Outils : Git, Docker, Postman, Firebase</li>
              </ul>
            </Block>

            <Block title="Centres d'intérêt">
              <p className="text-sm text-muted-foreground">
                Machine Learning & vision par ordinateur, architectures Big Data, développement web
                full-stack.
              </p>
            </Block>
          </aside>

          {/* Colonne droite */}
          <div className="space-y-8 p-8">
            <Block title="Éducation">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground">
                    Diplôme national d'ingénieur, spécialité Informatique
                  </span>{" "}
                  — IIT Sfax, Tunisie & UTT Troyes, France (échange, dernière année) — 2024 – 2027
                  (En cours)
                </li>
                <li>
                  <span className="text-foreground">Licence en Sciences de l'Informatique</span>,
                  Génie Logiciel et Systèmes d'Information — Faculté des Sciences de Sfax — 2021 –
                  2024
                </li>
                <li>
                  <span className="text-foreground">
                    Baccalauréat en Sciences Expérimentales
                  </span>{" "}
                  — Tunisie — 2020
                </li>
              </ul>
            </Block>

            <Block title="Expériences professionnelles">
              <div className="space-y-6">
                {experiences.map((e) => (
                  <div key={e.title}>
                    <p className="text-xs text-primary italic">{e.period}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{e.title}</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b}>- {b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Certifications">
              <p className="text-sm text-muted-foreground">
                AWS Academy Graduate – Cloud Foundations (Training Badge, 20h) : services essentiels
                AWS, architecture cloud, sécurité et déploiement.
              </p>
            </Block>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={cvFile.url}
          download="Aymen_Kacem_CV.docx"
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
