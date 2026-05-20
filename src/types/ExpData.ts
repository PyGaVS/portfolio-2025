export type Inline =
  | { kind: 'text'; value: string }
  | { kind: 'link'; label: string; href: string; style?: 'blue' | 'white' };

export type Link = { label: string; href: string; style?: 'blue' | 'white' };

export type Media = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
};

export type StudyEntry = {
  kind: 'study';
  period: string;
  text: string;
  link?: Link;            // lien optionnel rendu inline à la fin du text
  subtitle?: {
    title: string;
    items: string[];
  };
  media?: Media;
};

export type SimpleProfEntry = {
  kind: 'simple';
  period: string;
  segments: Inline[];
  duration: string;
  media?: Media;
};

export type Contribution = {
  subtitle: string;
  prs: Link[];
  description?: Inline[];
  detailsLink?: Link;
};

export type ContribProfEntry = {
  kind: 'contrib';
  period: string;
  intro: string;
  contribs: Contribution[];
  media?: Media;
};

export type InterimJob = {
  link: Link;
  duration: string;
};

export type InterimProfEntry = {
  kind: 'interim';
  period: string;
  intro: string;
  jobs: InterimJob[];
  media?: Media;
};

// Union de toutes les entries possibles — discriminée par `kind`
export type ExpEntry =
  | StudyEntry
  | SimpleProfEntry
  | ContribProfEntry
  | InterimProfEntry;

// Pour la rétro-compat / typage, on conserve l'alias historique
export type ProfExpEntry = SimpleProfEntry | ContribProfEntry | InterimProfEntry;

export type ExpData = {
  header: string;
  entries: ExpEntry[];
};
