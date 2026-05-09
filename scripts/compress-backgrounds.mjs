/**
 * Compresse en place les images de src/assets/img/backgrounds/.
 *
 * Utilisation : npm run compress-bg
 *
 * Comportement :
 *   - Lit chaque image .jpg/.jpeg/.png du dossier
 *   - La redimensionne à MAX_WIDTH (sans agrandir une image plus petite)
 *   - La ré-encode en JPEG progressif via mozjpeg à QUALITY
 *   - Réécrit le fichier au même endroit (les originaux NASA peuvent toujours
 *     être re-téléchargés depuis Flickr/webbtelescope.org)
 *   - Skip si le résultat n'apporte pas de gain (≥ 95% du poids initial)
 *
 * Tu peux ajuster MAX_WIDTH et QUALITY selon le compromis taille/qualité voulu.
 */

import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = 'src/assets/img/backgrounds';
const MAX_WIDTH = 2560;   // largeur max — couvre 1440p et 4K avec un peu de zoom
const QUALITY = 82;       // 78-85 = sweet spot, l'œil ne voit pas la différence

const formatSize = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

const files = await readdir(DIR);
const images = files.filter((f) => /\.(jpe?g|png)$/i.test(f));

if (images.length === 0) {
  console.log('Aucune image à compresser dans', DIR);
  process.exit(0);
}

console.log(`\nCompression de ${images.length} image(s) dans ${DIR}\n`);
console.log(`  Resize:  max ${MAX_WIDTH}px de large`);
console.log(`  Qualité: ${QUALITY} (mozjpeg, progressive)\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of images) {
  const path = join(DIR, file);
  const inputBuf = await readFile(path);
  const before = inputBuf.length;
  totalBefore += before;

  const output = await sharp(inputBuf)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toBuffer();

  // Skip si la ré-encodage ne réduit pas significativement (ex. déjà optimisée)
  if (output.length >= before * 0.95) {
    console.log(`  ✓ ${file.padEnd(40)} ${formatSize(before).padStart(10)} (déjà optimisé, skip)`);
    totalAfter += before;
    continue;
  }

  await writeFile(path, output);
  totalAfter += output.length;

  const reduction = (((before - output.length) / before) * 100).toFixed(0);
  console.log(
    `  → ${file.padEnd(40)} ${formatSize(before).padStart(10)} → ${formatSize(output.length).padStart(8)}  (-${reduction}%)`,
  );
}

const totalReduction = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0);
console.log(
  `\n  Total: ${formatSize(totalBefore)} → ${formatSize(totalAfter)}  (-${totalReduction}%)\n`,
);
