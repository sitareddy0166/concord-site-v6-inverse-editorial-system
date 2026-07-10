// Postbuild prerender. Uses puppeteer to render every sitemap route into
// dist/<route>/index.html so JS-free crawlers see fully rendered HTML with
// title, meta description, canonical, and JSON-LD.
//
// Usage: `npm run build` (invokes this via the `postbuild` script).
// Puppeteer is a devDependency; on first run it downloads Chromium.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createServer } from 'node:http';
import handler from 'serve-handler';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/179d-tax-deduction',
  '/direct-pay',
  '/prevailing-wage-apprenticeship',
  '/transferable-tax-credits',
  '/rd-tax-credits',
  '/obbba-deadline',
  '/resources',
  '/whitepaper',
  '/the-concord-standard',
  '/who-we-are',
  '/why-us',
  '/client-charter',
  '/careers',
  '/contact',
  '/start-the-conversation',
  '/privacy-policy',
  '/terms-conditions',
];

async function main() {
  if (!existsSync(DIST)) {
    console.warn('[prerender] dist/ missing, skipping.');
    return;
  }

  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch {
    console.warn('[prerender] puppeteer not installed, skipping. Run `npm i -D puppeteer serve-handler` to enable.');
    return;
  }

  const server = createServer((req, res) =>
    handler(req, res, { public: DIST, rewrites: [{ source: '**', destination: '/index.html' }] })
  );
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  try {
    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`;
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // wait for react-helmet-async to have flushed head tags
      await page.waitForSelector('title', { timeout: 5000 }).catch(() => {});
      const html = await page.content();
      await page.close();

      const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''));
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, 'index.html'), html, 'utf8');
      console.log(`[prerender] wrote ${route}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((e) => {
  console.error('[prerender] failed', e);
  process.exitCode = 1;
});
