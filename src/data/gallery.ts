/**
 * Galerie-Daten (Dateiname, Alt-Text, Reihenfolge).
 * Die Bilddateien liegen in src/assets/gallery/.
 * Wird später durch eine Datenbank mit Admin-Upload ersetzt –
 * siehe src/lib/gallery.ts.
 */
export interface GalleryEntry {
  file: string;
  alt: string;
  order: number;
}

export const galleryEntries: GalleryEntry[] = [
  { file: 'holzschlaegerung.jpg', alt: 'Platzhalter: Holzschlägerung im Wald', order: 1 },
  { file: 'bringung.jpg', alt: 'Platzhalter: Holzbringung am Hang', order: 2 },
  { file: 'aufforstung.jpg', alt: 'Platzhalter: Frisch aufgeforstete Fläche', order: 3 },
  { file: 'trueffel.jpg', alt: 'Platzhalter: Trüffelplantage', order: 4 },
  { file: 'wald-morgen.jpg', alt: 'Platzhalter: Nadelwald am Morgen', order: 5 },
  { file: 'lager.jpg', alt: 'Platzhalter: Holzlager', order: 6 },
];
