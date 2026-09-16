import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiApachekafka, SiApachespark, SiApachehadoop, SiPython, SiTypescript,
  SiJavascript, SiPhp, SiDjango, SiReact, SiAngular, SiLaravel,
  SiPostgresql, SiMysql, SiGit, SiDocker, SiPostman, SiFirebase,
  SiOpencv, SiSocketdotio
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
const avatar = { url: "/profile.jpg" };

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

const skillGroups = {
  left: [
    {
      title: "Big Data",
      skills: [
        { icon: SiApachekafka, label: "Kafka" },
        { icon: SiApachespark, label: "Spark" },
        { icon: SiApachespark, label: "Spark Streaming" },
        { icon: SiApachehadoop, label: "Hadoop / HDFS" },
        { icon: FaDatabase, label: "Kudu" },
        { icon: FaDatabase, label: "Impala" },
        { icon: SiApachehadoop, label: "YARN" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { icon: SiDjango, label: "Django" },
        { icon: SiReact, label: "React" },
        { icon: SiAngular, label: "Angular" },
        { icon: SiLaravel, label: "Laravel 11" },
      ],
    },
    {
      title: "Outils",
      skills: [
        { icon: SiGit, label: "Git" },
        { icon: SiDocker, label: "Docker" },
        { icon: SiPostman, label: "Postman" },
        { icon: SiFirebase, label: "Firebase" },
        { icon: SiSocketdotio, label: "WebSockets" },
      ],
    },
  ],
  right: [
    {
      title: "Langages",
      skills: [
        { icon: SiPython, label: "Python" },
        { icon: FaJava, label: "Java" },
        { icon: SiTypescript, label: "TypeScript" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: FaDatabase, label: "SQL" },
        { icon: SiPhp, label: "PHP" },
      ],
    },
    {
      title: "Données & IA",
      skills: [
        { icon: SiPostgresql, label: "PostgreSQL" },
        { icon: SiMysql, label: "MySQL" },
        { icon: SiOpencv, label: "OpenCV" },
        { icon: FaCode, label: "Tesseract OCR" },
        { icon: FaCode, label: "PyMuPDF" },
      ],
    },
  ],
};

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
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-8">
            Mes compétences <span className="text-primary">professionnelles</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {skillGroups.left.map((group) => (
                <div key={group.title} className="rounded-xl border border-primary/20 bg-secondary/10 p-5">
                  <h3 className="mb-4 text-sm font-semibold text-primary">{group.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/30 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                      >
                        <skill.icon className="size-3.5" />
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {skillGroups.right.map((group) => (
                <div key={group.title} className="rounded-xl border border-primary/20 bg-secondary/10 p-5">
                  <h3 className="mb-4 text-sm font-semibold text-primary">{group.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/30 px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                      >
                        <skill.icon className="size-3.5" />
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8">
          J'applique ma passion pour construire des systèmes de données temps réel et des
          applications intelligentes, du pipeline d'ingestion jusqu'à l'interface utilisateur.
        </p>

        <div className="mt-12">
          <h3 className="mb-8 text-center text-xl font-bold">
            Mes <span className="text-primary">certifications</span>
          </h3>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-primary/20 bg-secondary/10 p-6">
              <h4 className="font-semibold text-foreground">AWS Academy Graduate — Cloud Foundations</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Training Badge (20h) : services essentiels AWS, architecture cloud, sécurité et déploiement.
              </p>
              <div className="mt-6 overflow-hidden rounded-md border border-border/40 shadow-sm">
                <img src="/aws-cert.png" alt="Certification AWS" className="w-full object-cover" />
              </div>
            </div>
          </div>
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
