export type Tech = {
  name: string;
  slug: string;  // nom du fichier sans extension (le carousel cherche .svg, .png ou .webp)
};

const techs: Tech[] = [
  { name: 'Docker',     slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'PHP',        slug: 'php' },
  { name: 'Dart',       slug: 'dart' },
  { name: 'MySQL',      slug: 'mysql' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'git',        slug: 'git' },
  { name: 'React',      slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'CSS',        slug: 'css' },
  { name: 'Tailwind',   slug: 'tailwind' },
  { name: 'AWS',        slug: 'aws' },
];

export default techs;
