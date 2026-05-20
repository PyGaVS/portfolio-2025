import type { Inline, ProjectSection } from '../types/ProjectData';

import reservations from '../assets/img/projects/reservation.jpg';
import alizon from '../assets/img/projects/alizon.jpg';
import inscription from '../assets/img/projects/inscription.jpg';
import selenium from '../assets/img/projects/Selenium.jpg';
import seleniumMcd from '../assets/img/projects/Selenium-mcd.jpg';
import seleniumReport from '../assets/img/projects/Selenium-report.jpg';
import seleniumSearch from '../assets/img/projects/Selenium-search.jpg';
import seven from '../assets/img/projects/Seven.jpg';
import sevenForm from '../assets/img/projects/Seven-form.jpg';
import sevenMcd from '../assets/img/projects/Seven-mcd.jpg';
import tui from '../assets/img/projects/tui.jpg';
import tuiHomeview from '../assets/img/projects/tui-homeview.jpg';
import tuiSearch from '../assets/img/projects/tui-search.jpg';
import workout6 from '../assets/img/projects/workout_app/image6.png';
import workout8 from '../assets/img/projects/workout_app/image8.png';
import workout10 from '../assets/img/projects/workout_app/image10.png';
import workout12 from '../assets/img/projects/workout_app/image12.png';

// Helpers pour construire des segments inline de manière compacte
const t = (value: string): Inline => ({ kind: 'text', value });
const link = (
  label: string,
  href: string,
  style: 'blue' | 'white' = 'blue',
): Inline => ({ kind: 'link', label, href, style });
const strong = (value: string): Inline => ({ kind: 'strong', value });

const sections: ProjectSection[] = [
  // ─── Mes réalisations perso
  /*
  {
    heading: 'Mes réalisations perso',
    groups: [
      {
        projects: [
          {
            title: 'Projet programmation orientée objet (POO) fraction : Python',
            images: [{ source: fractions, width: 300 }],
            body: [
              { kind: 'p', text: "Algorithme python que j'ai fait au lycée lors des cours de Numérique Science Informatique. Ce code peut réaliser des calculs de fractions avec de la programmation orientée objet." },
              { kind: 'p', text: 'Le jeu de test effectué ci-dessous :' },
            ],
          },
          {
            title: 'Site web sur minecraft : php/css/javascript',
            images: [{ source: mcwebsite, width: 1000 }],
            body: [
              { kind: 'p', text: "Cette application web disposant d'un front-end css/js est munis de quelques fonctionnalités tel qu'un onglet chat ou l'on peut envoyer des messages ou bien changer de thème (sombre/lumineux)." },
              {
                kind: 'p-rich',
                segments: [
                  t('Lien du projet Github : '),
                  link('MCWebsite', 'https://github.com/PyGaVS/MCWebsite', 'white'),
                ],
              },
            ],
          },
          {
            title: 'Générateur de html : adonisjs',
            images: [{ source: htmlGenerator, width: 1000 }],
            body: [
              {
                kind: 'p-rich',
                segments: [
                  t('Cette application me permet de générer du html pour ma '),
                  link('documentation', 'docs.html'),
                  t(". J'ai du réaliser plusieurs CRUD, un héritage de classe et faire en sorte que l'utilisateur (moi) puisse décider de l'ordre dans laquelle les données sont traitées."),
                ],
              },
              {
                kind: 'p-rich',
                segments: [
                  t('Lien du projet Github : '),
                  link('HtmlGenerator', 'https://github.com/PyGaVS/HtmlGeneratorPortfolio', 'white'),
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  */

  // ─── Lors de mon BTS SIO
  {
    heading: 'Lors de mon BTS SIO',
    groups: [
      {
        heading: 'Année n°1',
        projects: [
          {
            title: "Application web de réservation de visite d'entreprise: php",
            images: [{ source: reservations, width: 900 }],
            body: [
              { kind: 'p', text: "Ce projet est une application web en php monolithique que j'ai réalisé en équipe avec un collègue. Cette application à été codé durant la semaine de projet de début janvier 2023." },
              { kind: 'p', text: "Aucun framework n'était utilisé c'était simplement du php codé \"à la main\" sans utilisation de la POO, car j'était encore débutant dans le développement web." },
              { kind: 'p', text: "Cette application permettait de se connecter, lister les visites de l'utilisateur connecté et de créer une visite. Puis en tant que utilisateur non connecté (visiteur) on pouvait voir la listes des visites disponibles." },
            ],
          },
        ],
      },
      {
        heading: 'Stage n°1',
        projects: [
          {
            title: "Sysème d'inscription et de connexion : adonisjs/css",
            images: [{ source: inscription, width: 500 }],
            body: [
              { kind: 'p', text: "Système d'inscription et de connexion réalisé sur le framework Adonis lors de mon stage chez Leadcode qui rentre les informations dans une base de données." },
              { kind: 'p', text: "Dans cet exercice j'ai réalisé des validateurs pour que l'utilisateur rentre des informations valides tel qu'un mot de passe d'une longueur comprise entre 8 et 255 caractères." },
              { kind: 'p', text: 'Je me suis aussi entraîné en css et appris à utiliser des fonctions asynchrone.' },
              {
                kind: 'p-rich',
                segments: [
                  t('Lien du dépôt github : '),
                  link('Adonis-register-practice', 'https://github.com/PyGaVS/Adonis-register-practice', 'white'),
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'Année n°2',
        projects: [
          {
            title: 'Site de gestion de commandes : laravel',
            images: [{ source: alizon, width: 1000 }],
            body: [
              { kind: 'p', text: 'Application web de gestion de commandes réalisé sur laravel/adminlte.' },
              { kind: 'p', text: "Cet application à été réalisée lors d'un exercice en cours durant une semaine afin de nous initier à Laravel." },
              { kind: 'p', text: 'Fonctionnalitées codés :' },
              {
                kind: 'ul',
                items: [
                  'Système de connexion',
                  "Afficher la liste des clients liés à l'utilisateur connecté",
                  "Afficher la fiche d'un client ainsi que ses commandes",
                  'Ajouter une commande à un client',
                  "Voir les détails et modifier une commande d'un client",
                ],
              },
              {
                kind: 'p-rich',
                segments: [
                  t('Lien du dépôt github : '),
                  link('Alisales-adminlte', 'https://github.com/PyGaVS/Alisales-adminlte', 'white'),
                ],
              },
            ],
          },
          {
            title: 'Site de réservation de véhicule : laravel headless',
            images: [
              { source: seven, width: 1000 },
              { source: sevenForm, width: 1000 },
            ],
            body: [
              { kind: 'p', text: "Ce projet constitue la situation professionnelle n°1 présenté lors de l'épreuve E5 du BTS SIO" },
              { kind: 'p', text: "L'application Seven Travel donne accès à la liste des réservations de véhicule des clients et nous pouvons ajouter une réservation à l'aide d'un formulaire composé de plusieurs pages fluides, les transitions entre les pages sont fluides car ça a été fait en javascript donc le formulaire est entièrement chargé dès le début." },
              {
                kind: 'p-rich',
                segments: [
                  t("Une fois le formulaire complété, un message informe l'utilisateur si la réservation est possible ou non. J'ai utilisé la librairie "),
                  link('Toastr', 'https://github.com/CodeSeven/toastr?tab=readme-ov-file'),
                  t(' pour afficher le message.'),
                ],
              },
              { kind: 'p', text: "Cet application utilise une API pour accéder à la base de données. J'ai réalisé cet API en équipe avec deux collègues qui l'utiliseront aussi pour créer deux autres applications dans le même contexte. Nous utilision donc le GitLab du campus pour partager le code" },
              { kind: 'p', text: "Framework utilisé pour l'API et l'application web : Laravel (php)" },
              { kind: 'p', text: 'Le modèle conceptuel des données :' },
              { kind: 'image', source: sevenMcd, width: 900 },
              {
                kind: 'p-rich',
                segments: [
                  t("Lien du dépôt github de l'API : "),
                  link('BTS-SIO-sp1-api', 'https://github.com/PyGaVS/BTS-SIO-sp1-api', 'white'),
                ],
              },
              {
                kind: 'p-rich',
                segments: [
                  t("Lien du dépôt github de l'application web : "),
                  link('BTS-SIO-sp1-web', 'https://github.com/PyGaVS/BTS-SIO-sp1-web', 'white'),
                ],
              },
            ],
          },
          {
            title: 'Application de discussion : Dart Flutter',
            images: [
              { source: selenium, width: 300 },
              { source: seleniumSearch, width: 300 },
              { source: seleniumReport, width: 300 },
            ],
            body: [
              { kind: 'p', text: "Ce projet constitue la situation professionnelle n°2 présenté lors de l'épreuve E5 du BTS SIO" },
              { kind: 'p', text: "Cet application mobile permet à des utilisateurs de communiquer entre eux, en accédant à une conversation et en écrivant des messages." },
              { kind: 'p', text: "On peut créer une conversation avec plusieurs utilisateurs en les sélectionnant et aussi à l'aide d'un système de recherche d'utilisateur." },
              { kind: 'p', text: "On peut aussi envoyer un signalement à des messages pouvant être jugé malveillant, un collègue à moi a créé une application web permettant de traiter ces signalements." },
              { kind: 'p', text: "Les utilisateurs possèdent un score de “gentillesse” où des restrictions seront appliqués aux utilisateurs ayant un score trop faible, à force de se faire signaler sur des messages visant à nuire l’expérience des autres utilisateurs. Dans l'api le score de gentillesse est codés mais il n'est pas traité sur l'application mobile. Moi et mon collègue n'avons pas eu le temps de coder entièrement cette fonctionnalitée." },
              { kind: 'p', text: "Avec mon collègue, nous avons conçu l'API à deux. Nous utilision donc le GitLab du campus pour partager le code" },
              { kind: 'p', text: "Framework utilisé pour l'API : Laravel (php)" },
              { kind: 'p', text: "Framework utilisé pour l'application mobile : Flutter (dart)" },
              { kind: 'p', text: 'Le modèle conceptuel des données :' },
              { kind: 'image', source: seleniumMcd, width: 900 },
              {
                kind: 'p-rich',
                segments: [
                  t("Lien du dépôt github de l'API : "),
                  link('BTS-SIO-sp2-api', 'https://github.com/PyGaVS/BTS-SIO-sp2-api', 'white'),
                ],
              },
              {
                kind: 'p-rich',
                segments: [
                  t("Lien du dépôt github de l'application mobile : "),
                  link('BTS-SIO-sp2-mobile', 'https://github.com/PyGaVS/BTS-SIO-sp2-mobile', 'white'),
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'Stage n°2',
        projects: [
          {
            title: 'Outil de gestion cloud en terminal de commande : react/typescript',
            images: [
              { source: tuiHomeview, width: 1000, featured: true },
              { source: tui, width: 1000 },
              { source: tuiSearch, width: 1000 },
            ],
            body: [
              {
                kind: 'p-rich',
                segments: [
                  t("Cet outil permet d'accéder au objets stockées dans un s3 AWS (une base de données permettant de stocker tout type de fichier). J'ai réalisé cet outil lors de mon stage à "),
                  link('Oomade', 'https://www.oomade.com/'),
                  t(' qui va permettre aux développeurs de cette entreprise de faire des tests pour leurs applications. J\'ai fait mes tests pour cet outil en utilisant un pod k8s contenant une image '),
                  link('Minio', 'https://min.io/'),
                  t('. Le rendu des vues se fait avec la librairie '),
                  link('ink', 'https://github.com/vadimdemedes/ink'),
                  t(', et ce projet est réalisé avec React TSX.'),
                ],
              },
              { kind: 'p', text: 'Principales fonctionnalitées codées :' },
              { kind: 'p', text: "⛵  Navigation :  'Enter' pour selectionner un un élément, 'b'  pour retourner au niveau précédent et 'esc' pour retourner au menu." },
              { kind: 'p', text: "🚪  Exit : 'esc' quand on est au menu ou 'ctrl + q'" },
              { kind: 'p', text: "⬇️  Download : 'd' pour télécharger un fichier (pas un dossier)" },
              { kind: 'p', text: "📄  Copy Past : 'c' et 'v' de la même manière que ctrl + c ctrl + v à l'exception que l'on ne peut pas sélectionner plusieurs fichier à la fois ou de dossier. Le presse-papier sera affiché dans la box jaune." },
              { kind: 'p', text: "🔄  Refresh : 'r' permet de refresh la page, et le refresh est automatique lorsqu'on past ou delete." },
              { kind: 'p', text: "🗑️  Delete : 'x' permet de supprimer définitivement un élément du s3 sans message de confirmation" },
              { kind: 'p', text: "🔎  Search : 's' permet de focus sur la barre de recherche et cela va trier les objets de la manière suivante :" },
              { kind: 'p', text: '-En priorité les objets où le nom commence par le str dans la barre de recherche.' },
              { kind: 'p', text: '-En second les objets qui contiennent le str dans la barre de recherche.' },
              { kind: 'p', text: '📁  Recursion : Les objets sont triés en fonction de leur nom avec récursivité dans des dossiers.' },
              { kind: 'p', text: "↔️  Pagination : Le nombres d'objet possède une limite (par défaut 10) d'affichage par page et il suffit d'utiliser les flèches latérales pour changer de page." },
              { kind: 'p', text: '🔀  Offset : Le offset est géré de sorte à pouvoir ce déplacer entre les extrémités des éléments rapidement.' },
              { kind: 'p', text: "ℹ️  Highlight : Les infos du fichier que l'on survole sont affichés dans la box verte." },
              { kind: 'p', text: '💯  User info : Des messages tel que le loading pour un téléchargement seront affichés pour que l\'utilisateur soit informé si il doit patienter lors d\'une requête au s3 (comme un download).' },
              {
                kind: 'p-rich',
                segments: [
                  t('Lien du projet github : '),
                  link('tui-diagnostic-tools', 'https://github.com/Stage-2024/tui-diagnostic-tools', 'white'),
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── Lors de mon CDA
  {
    heading: 'Lors de mon CDA',
    groups: [
      {
        projects: [
          {
            title: 'Muscu App — suivi de séances de musculation : React + AdonisJS',
            images: [
              { source: workout8, width: 500, featured: true },
              { source: workout10, width: 500 },
              { source: workout6, width: 500 },
              { source: workout12, width: 500 },
            ],
            body: [
              {
                kind: 'p',
                text: "Application web full-stack de suivi d'entraînements de musculation, développée en équipe avec Alexandre Bourguignon dans le cadre du CDA.",
              },
              {
                kind: 'p',
                text: "L'utilisateur crée ses séances, enregistre ses exercices (séries, répétitions, charges) et suit sa progression via un dashboard graphique.",
              },
              {
                kind: 'p',
                text: 'Fonctionnalités principales :',
              },
              {
                kind: 'ul',
                items: [
                  "Authentification (inscription, connexion, codes d'accès)",
                  "Bibliothèque d'exercices structurée par muscle et par bloc d'exercices",
                  "Création / édition de séances avec historique complet",
                  "Dashboard de statistiques avec graphiques (volume, progression)",
                  "Backoffice d'administration",
                ],
              },
              {
                kind: 'p',
                text: 'Stack technique :',
              },
              {
                kind: 'ul',
                items: [
                  'Backend : AdonisJS 7 (TypeScript) — API REST, architecture domain-driven',
                  'Frontend : React 19, TypeScript, Tailwind v4, Radix UI, Chart.js + Recharts, GSAP, Lucide',
                  'Containerisation : Docker (compose dev + prod)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // ─── Mes contributions
  {
    heading: 'Mes contributions',
    groups: [
      {
        projects: [
          {
            title: 'Pokérogue : typescript',
            id: 'pokerogue',
            images: [],
            body: [
              {
                kind: 'p-rich',
                segments: [
                  link('Pokérogue', 'https://pokerogue.net/'),
                  t(" est un fangame Pokémon inspiré du genre roguelite qui nous propose de faire uniquement des combats tout en collectant des objets cumulables et en explorant divers biomes pour affronter des adversaires de plus en plus puissants. Ce jeu se joue directement sur le navigateur, il est donc très facile d'accès."),
                ],
              },
              {
                kind: 'iframe',
                src: 'https://www.youtube.com/embed/bIpysAYaFZ0?si=kLA4RyvZHQAcn0DO',
                width: 1000,
                title: 'YouTube video player',
              },
              { kind: 'p', text: "Le jeu n'étant pas fini car il y a beaucoup de méchaniques différentes à coder, j'ai saisi cette opportunité pour créer ma propre expérience sur un projet très complexe avec un enjeu important, au vu du nombre de joueurs s'y connectant chaque jour. J'ai donc implémenté une capacité et un talent qui n'étaient pas encore codés car leur méchaniques étaient uniques et complexes." },
              {
                kind: 'inline',
                segments: [
                  strong('La capacité Vengeance - '),
                  link('En savoir plus', 'https://www.pokepedia.fr/Vengeance'),
                ],
              },
              { kind: 'p', text: 'Découverte et prise de connaissance de la structure du code du jeu.' },
              { kind: 'p', text: "Implémentation de la capacité ainsi que des tests unitaires avec l'outil Vitest." },
              { kind: 'p', text: 'Cette capacité est maintenant implémenté dans le jeu !' },
              {
                kind: 'p-rich',
                segments: [
                  t('Lien du PR GitHub : '),
                  link('[Move] Add Retaliate double damage condition #1831', 'https://github.com/pagefaultgames/pokerogue/pull/1831', 'white'),
                ],
              },
              {
                kind: 'inline',
                segments: [
                  strong('Le talent Illusion - '),
                  link('En savoir plus', 'https://www.pokepedia.fr/Illusion'),
                ],
              },
              { kind: 'p', text: 'Implémentation du talent ainsi que des tests unitaires correspondants.' },
              { kind: 'p', text: "Collaboration avec une équipe de traduction pour traduire le message indiquant l'effet de l'illusion." },
              { kind: 'p', text: "Manipulation de l'UI du jeu." },
              { kind: 'p', text: 'Ce talent est maintenant implémenté dans le jeu.' },
              { kind: 'p', text: 'Lien des PR GitHub :' },
              {
                kind: 'p-rich',
                segments: [link('[Ability] Implement Illusion #3273', 'https://github.com/pagefaultgames/pokerogue/pull/3273', 'white')],
              },
              {
                kind: 'p-rich',
                segments: [link('Add illusionBreak localizations #26', 'https://github.com/pagefaultgames/pokerogue-locales/pull/26', 'white')],
              },
              {
                kind: 'p-rich',
                segments: [link('[Bug] Pokemon with illusion imitate the cry of the illusion #5675', 'https://github.com/pagefaultgames/pokerogue/pull/5675', 'white')],
              },
              {
                kind: 'p-rich',
                segments: [link('[Bug] Fix some move using the type of the illusion instead of the actual type #5772', 'https://github.com/pagefaultgames/pokerogue/pull/5772', 'white')],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default sections;
