import type { ExpData, Inline } from '@/types/ExpData';
import timactiveLogo from '@/assets/img/exp/timactive-logo.png';

const t = (value: string): Inline => ({ kind: 'text', value });
const link = (label: string, href: string, style: 'blue' | 'white' = 'blue'): Inline =>
  ({ kind: 'link', label, href, style });

const exp: ExpData = {
  header: 'Mes expériences',
  entries: [
    {
      kind: 'study',
      period: '2018-2019',
      text: '3eme au collège Pierre de Coubertin à Legé',
    },
    {
      kind: 'simple',
      period: '2019',
      segments: [
        t("Stage de découverte d'entreprise avec les employés communaux de Saint Etienne du Bois"),
      ],
      duration: 'Durée : 1 semaine',
    },
    {
      kind: 'study',
      period: '2019-2022',
      text: 'Bac général Lycée Notre Dame du Roc à la Roche sur Yon',
      subtitle: {
        title: 'Spécialités',
        items: [
          "Numérique et sciences de l'informatique (20/20 au bac)",
          'Mathématique (17/20 au bac)',
        ],
      },
    },
    {
      kind: 'study',
      period: '2022-2024',
      text: 'BTS Service Informatique aux Organisations campus Notre Dame du Roc à la Roche sur Yon (acquis).',
    },
    {
      kind: 'simple',
      period: 'Mai 2023',
      segments: [
        t("Stage de développement d'application chez Leadcode (autoentreprise fondateur de "),
        link('Mineral', 'https://mineral-foundation.org/'),
        t(')'),
      ],
      duration: 'Durée : 4 semaines',
    },
    {
      kind: 'simple',
      period: 'Janvier - Février 2024',
      segments: [
        t("Stage de développement et de déploiement d'applications chez "),
        link('Oomade', 'https://www.oomade.com/'),
      ],
      duration: 'Durée : 6 semaines',
    },
    {
      kind: 'contrib',
      period: 'Eté 2024 - Novembre 2024',
      intro:
        "N'ayant pas le permis de conduire à ce moment là, je me suis lancé dans deux contributions de projets sur GitHub (non rémunéré) dont le code est en open-source :",
      contribs: [
        {
          subtitle: 'Mineral :',
          prs: [
            {
              label: 'Remove member from cache when ban #180',
              href: 'https://github.com/mineral-dart/core/pull/180',
            },
          ],
          description: [
            link('Mineral', 'https://mineral-foundation.org/'),
            t(' étant un framework en Dart permettant de créer des bots sur Discord.'),
          ],
        },
        {
          subtitle: 'PokéRogue :',
          prs: [
            {
              label: '[Move] Add Retaliate double damage condition #1831',
              href: 'https://github.com/pagefaultgames/pokerogue/pull/1831',
            },
            {
              label: '[Ability] Implement Illusion #3273',
              href: 'https://github.com/pagefaultgames/pokerogue/pull/3273',
            },
            {
              label: 'Add illusionBreak localizations #26',
              href: 'https://github.com/pagefaultgames/pokerogue-locales/pull/26',
            },
          ],
          description: [
            t('PokéRogue est un fangame Pokémon jouable sur navigateur avec un système de roguelite.'),
          ],
          detailsLink: {
            label: 'Plus de details',
            href: 'https://portfolio-2025-alpha-roan.vercel.app/projects#pokerogue',
          },
        },
      ],
    },
    {
      kind: 'interim',
      period: 'Novembre 2024 - Août 2025',
      intro: 'Travail en intérim chez :',
      jobs: [
        { link: { label: 'Thomas Brioche', href: 'https://www.thomasbrioche.com/' }, duration: '1 semaine' },
        { link: { label: 'Servilegume Industrie', href: 'http://www.servilegume-industrie.com/' }, duration: '4 mois' },
        { link: { label: 'RP-Ouest', href: 'https://www.r-p-ouest.fr/' }, duration: '1 semaine' },
        { link: { label: 'Esvia', href: 'https://www.miditracage-esvia.com/' }, duration: '3 jours' },
        { link: { label: 'Sucre+', href: 'https://sucre.plus/' }, duration: '1 jour' },
        { link: { label: 'Atelier Marbrerie Bremand', href: 'https://amb-marbrerie.com/' }, duration: '1 mois' },
      ],
    },
    {
      kind: 'study',
      period: '2025-2026',
      text: "CDA (Concepteur Développeur d'Applications) en alternance — ",
      link: { label: 'Timactive', href: 'https://www.timactive.com/' },
    },
    {
      kind: 'simple',
      period: 'Septembre 2025 - Septembre 2026',
      segments: [
        t("Alternance en CDA (Concepteur Développeur d'Applications) chez "),
        link('Timactive', 'https://www.timactive.com/'),
      ],
      duration: 'Durée : 1 an',
      media: { type: 'image', url: timactiveLogo, alt: 'Logo Timactive' },
    },
  ],
};

export default exp;
