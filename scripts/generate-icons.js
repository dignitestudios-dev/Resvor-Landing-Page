const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildIcons() {
  const emblemPath = path.join(__dirname, '../public/resvor-emblem.png');
  const size = 512;
  const padding = 76; // emblem will be (512 - 152) = 360x360
  const emblemSize = size - padding * 2;

  const emblemResized = await sharp(emblemPath)
    .resize(emblemSize, emblemSize, { fit: 'contain' })
    .toBuffer();

  // Create SVG background: rounded squircle (iOS / modern favicon style) with midnight gradient & royal blue border
  const svgBg = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a1538" />
          <stop offset="45%" stop-color="#04081c" />
          <stop offset="100%" stop-color="#020410" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#020410" stop-opacity="0" />
        </radialGradient>
      </defs>
      <!-- Base squircle with royal blue border -->
      <rect x="12" y="12" width="${size - 24}" height="${size - 24}" rx="116" fill="url(#grad)" stroke="#2563eb" stroke-width="8" stroke-opacity="0.6" />
      <rect x="12" y="12" width="${size - 24}" height="${size - 24}" rx="116" fill="url(#glow)" />
    </svg>
  `);

  // Composite background with resized emblem
  const icon512 = await sharp(svgBg)
    .composite([
      { input: emblemResized, top: padding, left: padding }
    ])
    .png()
    .toBuffer();

  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../src/app');

  // Save all sizes
  await sharp(icon512).toFile(path.join(publicDir, 'icon-512.png'));
  await sharp(icon512).resize(192, 192).toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(icon512).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(icon512).resize(180, 180).toFile(path.join(appDir, 'apple-icon.png'));
  await sharp(icon512).resize(48, 48).toFile(path.join(publicDir, 'favicon-48x48.png'));
  await sharp(icon512).resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(icon512).resize(32, 32).toFile(path.join(appDir, 'icon.png'));
  await sharp(icon512).resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));

  // Also create a pure vector SVG icon for modern browser favicon support
  const svgIcon = `
<svg width="32" height="32" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1538" />
      <stop offset="50%" stop-color="#04081c" />
      <stop offset="100%" stop-color="#020410" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="116" fill="url(#bgGrad)" stroke="#2563eb" stroke-width="8" stroke-opacity="0.6" />
  <image href="/resvor-emblem.png" x="${padding}" y="${padding}" width="${emblemSize}" height="${emblemSize}" />
</svg>
`.trim();

  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgIcon);

  console.log('All icons generated successfully!');
}

buildIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});

