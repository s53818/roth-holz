import type { ImageMetadata } from 'astro';
import { galleryEntries } from '../data/gallery';

export interface GalleryPhoto {
  id: string;
  /** Lokales Asset (aktuell) oder URL (später, z. B. Upload-Verzeichnis) */
  src: ImageMetadata | string;
  alt: string;
  /** Pflicht, wenn src eine URL ist (für Layout und <Image>) */
  width?: number;
  height?: number;
}

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/**
 * Einzige Schnittstelle der Galerie zu den Daten.
 * TODO: Später auf Datenbank (Drizzle/SQLite) mit Admin-Upload umstellen.
 * Die Signatur (async, Rückgabe GalleryPhoto[]) bleibt dabei gleich.
 */
export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  return [...galleryEntries]
    .sort((a, b) => a.order - b.order)
    .flatMap((entry) => {
      const mod = files[`../assets/gallery/${entry.file}`];
      if (!mod) {
        console.warn(`[gallery] Bilddatei fehlt: ${entry.file}`);
        return [];
      }
      return [{ id: entry.file, src: mod.default, alt: entry.alt }];
    });
}
