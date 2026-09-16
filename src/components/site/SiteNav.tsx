import { Link } from "@tanstack/react-router";
import { Home, User, FolderGit2, GraduationCap, FileText } from "lucide-react";

const links = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/a-propos", label: "À propos", icon: User },
  { to: "/projets", label: "Projets", icon: FolderGit2 },
  { to: "/etudes", label: "Études", icon: GraduationCap },
  { to: "/cv", label: "CV", icon: FileText },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1 px-4 py-3 sm:gap-4">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            <Icon className="size-3.5" />
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      Copyright © {new Date().getFullYear()} — Aymen Kacem
    </footer>
  );
}
