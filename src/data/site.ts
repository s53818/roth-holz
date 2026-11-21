/**
 * Zentrale Inhalte der Website. Alle Texte werden hier gepflegt,
 * nicht in den Komponenten. Platzhalter sind mit „Platzhalter“ markiert.
 */

export const site = {
  name: 'ROTH Holz Service',
  owner: 'Phillip Roth',
  url: 'https://www.holz-roth.at',
  domain: 'www.holz-roth.at',
  description:
    'ROTH Holz Service – Forstbetrieb aus Preding in der Steiermark: Holzschlägerung, Bringung, Aufforstung und Trüffelplantagen.',
  address: {
    street: 'Meinhold Weg 4/9',
    zip: '8504',
    city: 'Preding',
    region: 'Steiermark',
    country: 'AT',
  },
  email: 'office@holz-roth.at',
  /** Platzhalter, bitte durch die echte Nummer ersetzen */
  phone: '+43 XXX XXXXXXX',
  /** Für tel:-Links, ohne Leerzeichen. Platzhalter. */
  phoneHref: '+43XXXXXXXXXX',
  /** Hat der Betrieb eine echte Nummer, hier auf true setzen (steuert Anruf-Button/JSON-LD) */
  phoneIsReal: false,
} as const;

export const nav = [
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'Galerie', href: '/#galerie' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

export const hero = {
  claim: 'Wald mit Verstand. Holz mit Handschlag.',
  sub: 'Forstarbeit aus der Steiermark – sauber geplant, sicher ausgeführt. (Platzhaltertext)',
  ctaPrimary: 'Anfrage stellen',
  ctaSecondary: 'Anrufen',
} as const;

export type ServiceIcon = 'saw' | 'log' | 'seedling' | 'truffle';

export const services: {
  id: string;
  icon: ServiceIcon;
  title: string;
  text: string;
}[] = [
  {
    id: 'holzschlaegerung',
    icon: 'saw',
    title: 'Holzschlägerung',
    text: 'Fachgerechte und sichere Fällung, auch in schwierigem Gelände. Platzhaltertext: Hier folgt eine kurze Beschreibung der Leistung.',
  },
  {
    id: 'bringung',
    icon: 'log',
    title: 'Bringung',
    text: 'Schonende Holzbringung und Transport zum Lagerplatz oder Abnehmer. Platzhaltertext: Hier folgt eine kurze Beschreibung der Leistung.',
  },
  {
    id: 'aufforstung',
    icon: 'seedling',
    title: 'Aufforstung',
    text: 'Standortgerechte Pflanzung und Pflege für einen stabilen Zukunftswald. Platzhaltertext: Hier folgt eine kurze Beschreibung der Leistung.',
  },
  {
    id: 'trueffelplantagen',
    icon: 'truffle',
    title: 'Trüffelplantagen',
    text: 'Anlage und Betreuung von Trüffelplantagen. Platzhaltertext: Hier folgt eine kurze Beschreibung der Leistung.',
  },
];

export const about = {
  title: 'Über uns',
  lead: 'Phillip Roth – Forstbetrieb aus Preding.',
  paragraphs: [
    'ROTH Holz Service ist ein regionaler Betrieb aus Preding in der Weststeiermark. Platzhaltertext: Hier erzählt Phillip Roth kurz, wer er ist, wie er arbeitet und was ihm wichtig ist.',
    'Unser Einsatzgebiet: Weststeiermark und Umgebung. Platzhaltertext: Genaue Angabe des Einsatzgebiets (Bezirke/Radius) ergänzen.',
  ],
  facts: [
    { label: 'Betrieb', value: 'Phillip Roth' },
    { label: 'Standort', value: 'Preding, Steiermark' },
    { label: 'Einsatzgebiet', value: 'Weststeiermark (Platzhalter)' },
  ],
} as const;

export const gallerySection = {
  title: 'Galerie',
  intro: 'Einblicke in unsere Arbeit. (Platzhalterbilder)',
} as const;

export const contactSection = {
  title: 'Kontakt',
  intro:
    'Sie planen eine Schlägerung, Aufforstung oder Trüffelplantage? Schreiben Sie uns, wir melden uns zeitnah.',
} as const;
