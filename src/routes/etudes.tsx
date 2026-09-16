import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/etudes")({
  head: () => ({
    meta: [
      { title: "Études — Aymen Kacem" },
      {
        name: "description",
        content:
          "Parcours académique d'Aymen Kacem : cycle d'ingénieur IIT Sfax & UTT Troyes, licence en sciences de l'informatique.",
      },
      { property: "og:title", content: "Études — Aymen Kacem" },
      {
        property: "og:description",
        content: "Parcours académique et formations d'Aymen Kacem.",
      },
    ],
  }),
  component: Etudes,
});

const items = [
  {
    period: "2024 – 2027 (En cours)",
    title: "Diplôme national d'ingénieur, spécialité Informatique",
    school:
      "Institut International de Technologie (IIT), Sfax, Tunisie — échange académique à l'Université de Technologie de Troyes (UTT), France (dernière année)",
    text: "Formation orientée Big Data et Intelligence Artificielle : architectures distribuées, traitement de données massives, machine learning et développement logiciel.",
  },
  {
    period: "2021 – 2024",
    title: "Licence en Sciences de l'Informatique",
    school: "Génie Logiciel et Systèmes d'Information — Faculté des Sciences de Sfax",
    text: "Bases de l'informatique : algorithmique, programmation, bases de données, génie logiciel et systèmes d'information.",
  },
  {
    period: "2020",
    title: "Baccalauréat en Sciences Expérimentales",
    school: "Tunisie",
    text: "Formation scientifique généraliste en mathématiques, physique et sciences de la vie.",
  },
];

function Etudes() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold md:text-3xl">
        Mes <span className="text-gradient">Études</span>
      </h1>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Parcours académique et formations professionnelles
      </p>

      <div className="mt-12 space-y-6">
        {items.map((i) => (
          <article key={i.title} className="surface-card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-base font-semibold md:text-lg">{i.title}</h2>
              <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs text-primary">
                {i.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground/80">{i.school}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
