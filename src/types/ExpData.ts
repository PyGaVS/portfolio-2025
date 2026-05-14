export type Inline =
  | { kind: 'text'; value: string }
  | { kind: 'link'; label: string; href: string; style?: 'blue' | 'white' };

export type Link = { label: string; href: string; style?: 'blue' | 'white' };

export type StudyEntry = {
  period: string;
  text: string;
  specialties?: {
    title: string;
    items: string[];
  };
};

export type SimpleProfEntry = {
  kind: 'simple';
  period: string;
  segments: Inline[];
  duration: string;
};

export type Contribution = {
  title: string;
  prs: Link[];
  description?: Inline[];
  detailsLink?: Link;
};

export type ContribProfEntry = {
  kind: 'contrib';
  period: string;
  intro: string;
  contribs: Contribution[];
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
};

export type ProfExpEntry = SimpleProfEntry | ContribProfEntry | InterimProfEntry;

export type ExpData = {
  header: string;
  studies: {
    summary: string;
    entries: StudyEntry[];
  };
  profExp: {
    summary: string;
    entries: ProfExpEntry[];
  };
};
