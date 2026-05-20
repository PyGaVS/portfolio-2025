export type ProjectImage = {
  source: string;
  width?: number;
  featured?: boolean;            // affichée dans le slideshow de la Home
};

export type Inline =
  | { kind: 'text'; value: string }
  | { kind: 'link'; label: string; href: string; style?: 'blue' | 'white' }
  | { kind: 'strong'; value: string };

export type ProjectBlock =
  | { kind: 'p'; text: string }                                  // <p className="gray">{text}</p>
  | { kind: 'p-rich'; segments: Inline[] }                        // <p className="gray">{...segments}</p>
  | { kind: 'inline'; segments: Inline[] }                        // segments rendus directement (pas de wrapping)
  | { kind: 'ul'; items: string[] }                               // <ul className="gray"><li>…</li>…</ul>
  | { kind: 'image'; source: string; width: number }              // <img src=… width=…px />
  | { kind: 'iframe'; src: string; width: number; title: string }; // embed YouTube

export type ProjectData = {
  title: string;
  id?: string;
  images: ProjectImage[];
  body: ProjectBlock[];
};

export type ProjectGroup = {
  heading?: string;            // "Année n°1", "Stage n°1", etc. (optionnel : groupe sans titre)
  projects: ProjectData[];
};

export type ProjectSection = {
  heading: string;             // "Mes réalisations perso", "Lors de mon BTS SIO", "Mes contributions"
  groups: ProjectGroup[];
};
