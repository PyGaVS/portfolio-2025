/**
 * Gestion du background spatial :
 *   1. Pioche aléatoire d'une image dans assets/img/backgrounds/
 *   2. Animation de pan avec 6 keyframes générés aléatoirement à chaque load
 *      (via Web Animations API plutôt que CSS pour avoir des positions uniques
 *      à chaque visite)
 *
 * Pour ajouter un background : déposer l'image dans le dossier, c'est tout.
 */

const images = import.meta.glob<{ default: string }>(
  '../assets/img/backgrounds/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

const urls = Object.values(images).map((m) => m.default);

// Configuration centralisée — facile à tuner
const CONFIG = {
  durationMs: 300000,        // durée d'un cycle complet (ms)
  keyframes: 6,              // nombre de points dans le parcours
  minPercent: 10,            // limite gauche/haut (évite les coins extrêmes)
  maxPercent: 90,            // limite droite/bas
};

const randInRange = (min: number, max: number): number =>
  min + Math.random() * (max - min);

const randomPosition = (): string => {
  const x = randInRange(CONFIG.minPercent, CONFIG.maxPercent).toFixed(1);
  const y = randInRange(CONFIG.minPercent, CONFIG.maxPercent).toFixed(1);
  return `${x}% ${y}%`;
};

/**
 * Initialise le background : choisit une image aléatoire ET lance l'animation
 * de pan avec un parcours aléatoire. À appeler une fois au démarrage de l'app.
 */
export function initSpaceBackground(): void {
  if (urls.length === 0) return;

  const html = document.documentElement;

  // 1. Image aléatoire injectée via variable CSS (consommée dans base.css)
  const url = urls[Math.floor(Math.random() * urls.length)];
  html.style.setProperty('--bg-image', `url(${url})`);

  // 2. Position de départ aléatoire (visible immédiatement, avant que
  //    l'animation ne prenne le relais)
  html.style.backgroundPosition = randomPosition();

  // 3. Animation drift : skip si l'utilisateur préfère moins d'animations
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Génère N positions aléatoires + ferme la boucle (dernier = premier)
  // pour éviter un "snap" en fin de cycle.
  const positions = Array.from({ length: CONFIG.keyframes }, randomPosition);
  positions.push(positions[0]);

  html.animate(
    positions.map((p) => ({ backgroundPosition: p })),
    {
      duration: CONFIG.durationMs,
      iterations: Infinity,
    },
  );
}
