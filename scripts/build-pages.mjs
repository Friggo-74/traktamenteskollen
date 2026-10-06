import { mkdir, copyFile } from 'node:fs/promises';

const files = [
  'index.html', 'robots.txt', 'sitemap.xml',
  'google0469a81cd642d9c0.html',
  'logo-light.png', 'logo-dark.png', 'favicon-48.png',
  'icon-512.png', 'apple-touch-icon.png', 'og.png',
  '_redirects'
];
await mkdir('dist', { recursive: true });
await Promise.all(files.map(file => copyFile(file, `dist/${file}`)));
console.log(`Prepared ${files.length} public files in dist/`);
