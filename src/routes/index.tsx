import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import avatar from "@/assets/aymen.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aymen Kacem — Ingénieur Big Data & IA" },
      {
        name: "description",
        content:
          "Portfolio d'Aymen Kacem, étudiant ingénieur en Big Data et Intelligence Artificielle : projets, études et CV.",
      },
      { property: "og:title", content: "Aymen Kacem — Ingénieur Big Data & IA" },
      {
        property: "og:description",
        content: "Projets Big Data, IA et développement full-stack d'Aymen Kacem.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="starfield border-b border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:justify-between md:py-28">
          <div>
            <p className="text-2xl font-medium text-foreground md:text-3xl">Bienvenue ! 👋</p>
            <h1 className="mt-3 text-3xl font-bold uppercase md:text-4xl">
              C'est <span className="text-gradient">Aymen Kacem</span>
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Étudiant ingénieur en informatique, spécialité{" "}
              <span className="text-primary">Big Data & Intelligence Artificielle</span>, en échange
              académique à l'UTT, France.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projets"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Voir mes projets
              </Link>
              <Link
                to="/cv"
                className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Mon CV
              </Link>
            </div>
          </div>
          <img
            src={avatar.url}
            alt="Portrait d'Aymen Kacem"
            className="glow-ring size-52 rounded-full object-cover md:size-64"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold uppercase md:text-3xl">
          Laissez moi <span className="text-gradient">me</span> présenter
        </h2>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Je suis étudiant ingénieur en informatique à l'
            <span className="text-primary">Institut International de Technologie (IIT), Sfax</span>,
            actuellement en échange académique à l'
            <span className="text-primary">Université de Technologie de Troyes</span>.
          </p>
          <p>
            Je maîtrise les bases telles que{" "}
            <em className="text-primary">Python, Java, TypeScript, SQL et PHP</em>.
          </p>
          <div>
            <p className="text-foreground">Mes domaines d'intérêt sont :</p>
            <ul className="mt-2 space-y-1 pl-4 text-primary italic">
              <li>- Architectures Big Data (Kafka, Spark, Hadoop, Kudu, Impala)</li>
              <li>- Intelligence Artificielle & Vision par ordinateur</li>
              <li>- Développement web full-stack</li>
            </ul>
          </div>
          <p>
            J'applique ma passion pour construire des systèmes de données temps réel et des
            applications intelligentes, du pipeline d'ingestion jusqu'à l'interface utilisateur.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold">Trouve-moi sur</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            N'hésitez pas à <span className="text-primary">vous connecter</span> avec moi
          </p>
          <div className="mt-6 flex justify-center gap-4">
            {[
              { href: "https://github.com/aymen-kacem", Icon: Github, label: "GitHub" },
              {
                href: "https://www.linkedin.com/in/aymen-kacem-96b571291/",
                Icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:aymenkacem2019@gmail.com", Icon: Mail, label: "E-mail" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
