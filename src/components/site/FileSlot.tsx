import { portfolioFiles, type PortfolioFileKey } from "@/lib/portfolio-files";

type Props = {
  fileKey: PortfolioFileKey;
  label: string;
  icon?: React.ReactNode;
};

export function FileSlot({ fileKey, label, icon }: Props) {
  const href = portfolioFiles[fileKey];

  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground">
        {icon}
        {label} · à venir
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/25"
    >
      {icon}
      {label}
    </a>
  );
}

export function VideoSlot({ fileKey, title }: { fileKey: PortfolioFileKey; title: string }) {
  const rawSrc = portfolioFiles[fileKey];

  if (!rawSrc) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-border bg-secondary/40 text-center text-xs text-muted-foreground">
        Vidéo de démonstration à ajouter
      </div>
    );
  }

  // Handle Google Drive links for embedding
  const src = rawSrc.includes("drive.google.com")
    ? rawSrc.replace(/\/view.*$/, "/preview")
    : rawSrc;

  const isEmbed = /youtube|youtu\.be|vimeo|drive\.google\.com/.test(src);

  return isEmbed ? (
    <iframe
      src={src}
      title={title}
      allowFullScreen
      className="aspect-video w-full rounded-lg border border-border"
    />
  ) : (
    <video src={src} controls className="aspect-video w-full rounded-lg border border-border" />
  );
}
