/**
 * Emplacements pour tes fichiers.
 * Colle simplement l'URL (ou le chemin) entre les guillemets et le bouton
 * correspondant devient actif automatiquement sur le site.
 *
 * Laisse "" pour afficher « à venir ».
 */
export const portfolioFiles = {
  /** Rapport du stage de fin d'études (Architecture Big Data) — PDF */
  pfeReport: "/pfe-rapport.pdf",
  /** Attestation de stage — Sifast (Architecture Big Data) — PDF ou image */
  pfeAttestation: "/pfe-attestation.jpg",

  /** Rapport du stage d'été (Pointage automatisé) — PDF */
  pointageReport: "/pointage-rapport.pdf",
  /** Vidéo de démonstration de l'application de pointage — MP4 ou lien YouTube */
  pointageDemoVideo: "",
  /** Attestation de stage — IP Soft (Pointage automatisé) — PDF ou image */
  pointageAttestation: "",
} as const;

export type PortfolioFileKey = keyof typeof portfolioFiles;
