# ROTH Holz Service – Website

Astro (v7, TypeScript `strict`), `output: 'static'` + `@astrojs/node` (standalone).
Alle Seiten sind vorgerendert; der Node-Server wird nur für Astro Actions
(Kontaktformular, später Login) gebraucht. Kein UI-Framework, keine Cookies,
keine externen Requests, Schriften lokal (`@fontsource`).

## Befehle

| Zweck | Befehl |
| --- | --- |
| Abhängigkeiten installieren | `npm install` |
| Entwicklung | `npm run dev` (http://localhost:4321) |
| Typprüfung | `npx astro check` |
| Produktions-Build | `npm run build` |
| Produktionsstart | `HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs` |

Voraussetzung: Node.js ≥ 22. Siehe `.env.example` für Variablen.

## Struktur

- `src/data/site.ts` – alle Texte, Kontaktdaten, Navigation (Platzhalter ersetzen, z. B. Telefonnummer; `phoneIsReal` danach auf `true`)
- `src/data/gallery.ts` + `src/assets/gallery/` – Galerie-Einträge (Datei, Alt-Text, Reihenfolge)
- `src/lib/gallery.ts` – `getGalleryPhotos()`; **einzige** Datenquelle der Galerie
- `src/actions/index.ts` – Kontakt-Action (Zod, Honeypot `website`)
- `src/lib/contact.ts` – `handleContactRequest()` (derzeit nur Log)
- `src/styles/tokens.css` – Farben und Schriften (`--font-display` zentral austauschbar; Platzhalter: Unbounded)
- `src/assets/graphics/` – Höhenlinien (`contours.svg`) und Wald (`forest.svg`), per CSS-Maske mit `currentColor`/Farbe einfärbbar
- `src/pages/kontakt.astro` – serverseitiger Fallback des Formulars ohne JavaScript (nicht indexiert, nicht in der Sitemap)

## Kontaktformular

Mit JavaScript wird per Astro-Action-Client gesendet, die Rückmeldung erscheint direkt am Formular.
Ohne JavaScript sendet das Formular per POST an `/kontakt?_action=contact`; diese (einzige serverseitig gerenderte) Seite zeigt Erfolg oder Fehler am Formular.
Ausgefülltes Honeypot-Feld: Anfrage wird still verworfen.

## Später andocken

- **Mailversand (Nodemailer):** in `src/lib/contact.ts` beim `TODO` – SMTP-Variablen aus `.env.example`. Nichts sonst ändert sich.
- **Login (Better Auth, SQLite/Drizzle):** Konfiguration in `src/lib/auth.ts`, Schutz über `src/middleware.ts` (Pfade unter `/admin` prüfen), Seiten unter `src/pages/admin/` (existiert noch nicht), Datenverzeichnis über `DATA_DIR`.
- **Galerie mit Admin-Upload:** nur `getGalleryPhotos()` in `src/lib/gallery.ts` auf die Datenbank umstellen (Rückgabetyp `GalleryPhoto[]` bleibt). Bilder als URL mit `width`/`height`; für `<Image>` ggf. `image.remotePatterns` bzw. ein ausgeliefertes Upload-Verzeichnis ergänzen.
- **Container:** Dockerfile/Caddyfile bewusst noch nicht vorhanden.

## Platzhalter

Telefonnummer, Texte, Galeriebilder, Impressum/Datenschutz (`.todo`-Markierungen) und `public/og-image.png` sind Platzhalter. Impressum/Datenschutz vor Livegang rechtlich prüfen lassen.
