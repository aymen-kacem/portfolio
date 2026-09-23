import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Aymen Kacem" },
      {
        name: "description",
        content:
          "Parcours, compétences Big Data, IA et outils utilisés par Aymen Kacem, étudiant ingénieur en informatique.",
      },
      { property: "og:title", content: "À propos — Aymen Kacem" },
      {
        property: "og:description",
        content: "Compétences Big Data, IA, développement web et outils d'Aymen Kacem.",
      },
    ],
  }),
  component: About,
});

const skills = [
  { group: "Big Data", items: ["Kafka", "Spark", "Spark Streaming", "Hadoop / HDFS", "Kudu", "Impala", "YARN"] },
  { group: "Langages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "PHP"] },
  { group: "Frameworks", items: ["Django", "React", "Angular", "Laravel 11"] },
  { group: "Données & IA", items: ["PostgreSQL", "MySQL", "OpenCV", "Tesseract OCR", "PyMuPDF"] },
  { group: "Outils", items: ["Git", "Docker", "Postman", "Firebase", "WebSockets"] },
];

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-bold md:text-3xl">
        Saviez-vous quelque chose sur <span className="text-gradient">Moi</span>
      </h1>

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Bonjour, je m'appelle <span className="text-primary">Aymen Kacem</span>, j'ai 24 ans et je
          suis étudiant ingénieur en informatique, spécialité Big Data & Intelligence Artificielle & Full Stack Developer.
        </p>
        <ul className="space-y-1 pl-4">
          <li>- Dernière année du cycle d'ingénieur (IIT Sfax · échange à l'UTT, France)</li>
          <li>- Futur ingénieur Data & IA</li>
          <li>- Développeur full-stack</li>
        </ul>
        <p className="text-foreground">En dehors du codage, voici ce que j'aime :</p>
        <ul className="space-y-1 pl-4">
          <li>- L'auto-formation et l'apprentissage continu</li>
          <li>- Le Machine Learning et la vision par ordinateur</li>
          <li>- Les langues : arabe (maternelle), français (B2), anglais (B2)</li>
        </ul>
        <p className="text-primary italic">
          "Curieux — Esprit analytique — Autonome : chaque projet est une occasion d'apprendre."
        </p>
      </div>

      <h2 className="mt-16 text-xl font-bold md:text-2xl">
        Mes compétences <span className="text-gradient">professionnelles</span>
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="surface-card p-5">
            <h3 className="text-sm font-semibold text-primary">{s.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-xl font-bold md:text-2xl">
        Mes <span className="text-gradient">certifications</span>
      </h2>
      <div className="surface-card mt-6 p-5 text-sm">
        <p className="font-medium">AWS Academy Graduate — Cloud Foundations</p>
        <p className="mt-1 text-muted-foreground">
          Training Badge (20h) : services essentiels AWS, architecture cloud, sécurité et
          déploiement.
        </p>
      </div>
    </div>
  );
}
