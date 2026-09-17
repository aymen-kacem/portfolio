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
  pointageDemoVideo: "https://drive.google.com/file/d/11MT77DNWRZx7k4EHBrbnQBP88N0AgA2n/view?usp=sharing",
  /** Attestation de stage — IP Soft (Pointage automatisé) — PDF ou image */
  pointageAttestation: "",

  /** Vidéo de démonstration de l'entrepôt de données (Data Warehouse) */
  dataWarehouseDemoVideo: "https://drive.google.com/file/d/1Ovv8QCDY4VSavmgqBqaa2a83b-FUI4ZW/view?usp=sharing",
  /** Attestation de stage — Super-App BINVERSE */
  superAppAttestation: "/attestation-super-app.pdf",
} as const;

export type PortfolioFileKey = keyof typeof portfolioFiles;
