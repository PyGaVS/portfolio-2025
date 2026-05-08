import type ListItem from '../types/ListItem';

export type SkillSection = {
  summary: string;
  open?: boolean;        // <details open> sur la première section uniquement
  bulleted: boolean;     // true => puces classiques ; false => pas de puce (icônes)
  items: ListItem[];
};

const skills: SkillSection[] = [
  {
    summary: "Ce que je maîtrise + ou - :",
    open: true,
    bulleted: false,
    items: [
      { text: "Python", icon: "fa-brands fa-python" },
      { text: "Php + Laravel", icon: "fa-brands fa-php" },
      { text: "SQL (stored procedure, triggers, events)", icon: "fa-solid fa-database" },
      { text: "HTML", icon: "fa-brands fa-html5" },
      { text: "CSS", icon: "fa-brands fa-css3-alt" },
      { text: "Programmation Orientée Objet (POO)", icon: "fa-solid fa-cubes" },
      { text: "Anglais", icon: "fa-solid fa-language" },
      { text: "Commandes Linux", icon: "fa-solid fa-terminal" },
      { text: "Javascript / Typescript + Adonis", icon: "fa-brands fa-js" },
      { text: "React", icon: "fa-brands fa-react" },
      { text: "Dart + Flutter", icon: "fa-brands fa-google" },
      { text: "Docker", icon: "fa-brands fa-docker" },
      { text: "Kubernetes", icon: "fa-solid fa-cube" },
      { text: "C#", icon: "fa-solid fa-c" },
    ],
  },
  {
    summary: "Les logiciels que j'utilise :",
    bulleted: true,
    items: [
      { text: "Edupython" },
      { text: "Visual studio code" },
      { text: "Visual studio community" },
      { text: "Phpmyadmin" },
      { text: "TablePlus" },
      { text: "Php Storm" },
      { text: "Postman" },
      { text: "Insomnia" },
      { text: "GitHub" },
      { text: "Android studio" },
      { text: "Docker desktop" },
      { text: "Minio" },
    ],
  },
  {
    summary: "Mes qualitées :",
    bulleted: true,
    items: [
      { text: "Persévérant : je contourne rarement les problèmes auxquels je suis confronté" },
      { text: "Curieux : je veux tout comprendre" },
      { text: "Passionné : je m'entraîne régulièrement dans le développement informatique" },
      { text: "Sociable : je suis à l'aise en équipe" },
      { text: "Autonome : en tant que développeur je suis capable de m'adapter à un nouveau langage seul" },
      { text: "Sensible à la qualité du code et à l'expérience utilisateur" },
    ],
  },
];

export default skills;
