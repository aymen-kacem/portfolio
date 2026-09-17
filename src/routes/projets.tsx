import { createFileRoute } from "@tanstack/react-router";
import { FileText, Award, Github, Play } from "lucide-react";
import { FileSlot, VideoSlot } from "@/components/site/FileSlot";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Aymen Kacem" },
      {
        name: "description",
        content:
          "Projets d'Aymen Kacem : architecture Big Data (PFE), pointage automatisé par reconnaissance faciale, et plus.",
      },
      { property: "og:title", content: "Projets — Aymen Kacem" },
      {
        property: "og:description",
        content: "Architecture Big Data, reconnaissance faciale, super-app étudiante.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold md:text-3xl">
        Mes projets <span className="text-gradient">récents</span>
      </h1>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Voici des exemples de projets que j'ai réalisés :
      </p>

      <div className="mt-12 space-y-8">
        {/* PFE */}
        <article className="surface-card p-6 md:p-8">
          <span className="text-xs tracking-wide text-primary uppercase">
            Stage de fin d'études · Sifast, Sfax · Février – Juin 2024
          </span>
          <h2 className="mt-2 text-lg font-semibold md:text-xl">
            Architecture Big Data pour l'analyse de données rapides et changeantes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Conception et implémentation d'une architecture Big Data complète, hautement évolutive
            et tolérante aux pannes, capable de traiter à la fois des flux temps réel et des
            traitements par lots.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            <li>
              - Ingestion de données avec <span className="text-primary">Apache Kafka</span> depuis
              des API, consommées par Hadoop (HDFS), Kudu et Spark
            </li>
            <li>
              - Prétraitement par lots avec <span className="text-primary">Apache Spark</span>,
              stockage sur HDFS via YARN, codage d'effacement (XOR)
            </li>
            <li>
              - Traitement temps réel avec <span className="text-primary">Spark Streaming</span>,
              stockage dans Kudu pour des analyses rapides
            </li>
            <li>
              - Intégration <span className="text-primary">Kudu / Impala</span> pour l'analyse temps
              réel et requêtage HDFS via Spark SQL
            </li>
            <li>- Architecture multi-clusters, évolutive et tolérante aux pannes</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Kafka", "Spark", "Hadoop", "Kudu", "Impala", "Python", "SQL"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 border-t border-border/60 pt-5">
            <FileSlot
              fileKey="pfeReport"
              label="Rapport de projet"
              icon={<FileText className="size-3.5" />}
            />
            <FileSlot
              fileKey="pfeAttestation"
              label="Attestation de stage"
              icon={<Award className="size-3.5" />}
            />
          </div>
        </article>

        {/* Pointage */}
        <article className="surface-card p-6 md:p-8">
          <span className="text-xs tracking-wide text-primary uppercase">
            Stage d'été · IP Soft, Sfax · Juillet – Septembre 2025
          </span>
          <h2 className="mt-2 text-lg font-semibold md:text-xl">
            Application Web de Pointage Automatisé avec Reconnaissance Faciale sur Caméras IP
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Application web qui automatise le pointage des employés grâce à la reconnaissance
                faciale en temps réel sur des caméras IP connectées au réseau de l'entreprise.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  - Authentification sécurisée par <span className="text-primary">JWT</span>{" "}
                  dynamique (connexion / déconnexion)
                </li>
                <li>- Détection faciale en temps réel via caméras IP</li>
                <li>
                  - Enregistrement automatique de la date, l'heure et l'image à chaque détection
                </li>
                <li>- Notifications en temps réel avec photo et horodatage</li>
                <li>- Tableau de bord : historique des présences et statistiques</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "OpenCV", "Deep Learning", "JWT", "React", "Caméras IP"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Play className="size-3.5" /> Démonstration de l'application
              </p>
              <VideoSlot fileKey="pointageDemoVideo" title="Démo — Pointage automatisé" />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 border-t border-border/60 pt-5">
            <FileSlot
              fileKey="pointageReport"
              label="Rapport de projet"
              icon={<FileText className="size-3.5" />}
            />
          </div>
        </article>

        {/* Data Warehouse */}
        <article className="surface-card p-6 md:p-8">
          <span className="text-xs tracking-wide text-primary uppercase">
            Projet Académique · Data Warehouse & Business Intelligence
          </span>
          <h2 className="mt-2 text-lg font-semibold md:text-xl">
            Entrepôt de Données Décisionnel pour Achats et Ventes
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mise en place d'un entrepôt de données décisionnel (data warehouse) pour l'entreprise à partir de la base opérationnelle EntrepriseDB, couvrant les activités d'achats et de ventes.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li>
                  - Modèle en constellation avec tables de faits (SaleFact, PurchaseFact) et dimensions partagées/spécifiques
                </li>
                <li>
                  - Flux ETL via <span className="text-primary">SSIS</span> pour l'extraction, la transformation et le chargement des commandes
                </li>
                <li>
                  - Agrégation dans un cube OLAP via <span className="text-primary">SSAS</span>, interrogeable en MDX
                </li>
                <li>
                  - Analyse multidimensionnelle croisée exposée via une API <span className="text-primary">.NET</span> (backend)
                </li>
                <li>
                  - Consommation des données et restitution visuelle sur un dashboard <span className="text-primary">React</span> (frontend)
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Data Warehouse", "ETL", "SSIS", "SSAS", "OLAP", "MDX", ".NET", "React"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Play className="size-3.5" /> Démonstration de l'entrepôt
              </p>
              <VideoSlot fileKey="dataWarehouseDemoVideo" title="Démo — Data Warehouse" />
            </div>
          </div>
        </article>

        {/* Autres */}
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-card p-6 flex flex-col">
            <div>
              <span className="text-xs tracking-wide text-primary uppercase">
                BINVERSE · Janvier – mai 2026
              </span>
              <h2 className="mt-2 text-base font-semibold">
                Super-App pour la vie étudiante
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Plateforme intégrant la vie sociale, académique et professionnelle des étudiants :
                gestion de plus de 20 clubs (300+ membres), Campus Feed interactif pour 500+
                utilisateurs, module recrutement Swipe-to-Apply et gamification. Architecture React.js
                / Laravel 11 / MySQL / WebSockets supportant 100+ utilisateurs simultanés.
              </p>
            </div>
            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              <FileSlot
                fileKey="superAppAttestation"
                label="Attestation de stage"
                icon={<Award className="size-3.5" />}
              />
            </div>
          </article>

          <article className="surface-card p-6">
            <span className="text-xs tracking-wide text-primary uppercase">
              Yperflow · Juillet – Août 2024
            </span>
            <h2 className="mt-2 text-base font-semibold">
              Extraction intelligente de documents (Data Science)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Traitement d'images avec OpenCV et Tesseract OCR, automatisation de la détection de
              tableaux (PDDLOCR, TableCV), extraction depuis des PDF normaux et scannés (PyMuPDF,
              Fitz), sécurisation de documents avec Spire et extraction structurée par expressions
              régulières.
            </p>
          </article>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/aymen-kacem"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
        >
          <Github className="size-4" /> Voir mon GitHub
        </a>
      </div>
    </div>
  );
}
