
# Concord Site V1 — Deep Read-Only Audit

Scope: repository as inspected. No files modified. Every business claim (statistics, tax rules, dates, affiliations, testimonials, titles, address, phone, legal statements) is treated as UNVERIFIED unless the repo itself sources it. Palette (`concord-dark #151C19`, `concord-green #3da35d`, `greenHover #40b868`, `cream #F6F4EF`, `mint #F1F6F2`, `highlight #FFF5DC`, `coral #e85d75`) is preserved in all V2 recommendations.

---

## 1) Critical defects

1. **No form backend.** Every form silently swallows submissions. `src/pages/Contact.jsx:64`, `src/pages/Whitepaper.jsx:80`, `src/components/layout/Footer.jsx:8`, `src/components/sections/NewsletterBar.jsx:6` all `preventDefault` then show a success state via `setTimeout` with no `fetch`, no `mailto`, no HubSpot form ID. Leads produced by the site currently go nowhere. This is the single highest-priority defect.
2. **Duplicate Contact page still shipping.** `src/pages/ContactUs.jsx` (256 lines, HubSpot embed via `data-src`) is still in the repo and imported nowhere — but it duplicates content, drifts from `Contact.jsx`, and its HubSpot script logic (`ContactUs.jsx:38`) is the only place a real meeting embed exists. Dead code + lost integration.
3. **Booking uses external URL, not a real embed.** `BookingCard.jsx:4` opens `https://www.concordlp.com/meetings/jonathan-darnell` in an iframe; many other pages link to the same URL as an `<a href>` (17 hits across service, about, whitepaper pages). If the URL 404s or the vendor changes it, every CTA breaks silently — no fallback, no `target=_blank`, no `rel="noopener"`.
4. **Prerender uses `waitUntil: 'networkidle0'`** (`scripts/prerender.mjs:60`) against unsplash + hubspot CDNs. In restricted CI or offline builds, network idle never resolves and postbuild hangs 30 s per route, then continues — but no plain-HTML content check exists.
5. **`overflow-x: clip` at the layout root** (`Layout.jsx:26`) is applied inline. It hides bugs (e.g. off-canvas mobile menus) rather than fixing them; also blocks position-sticky descendants in some browsers (`.sticky` inside `StickyNav.jsx` will now clip on Safari < 16).
6. **`main.jsx` uses non-TS `.jsx` while `tsconfig.json` is present.** Vite alias `@` is defined but tsconfig may not reflect it (see item 25); IDE tooling and prerender resolution can diverge.
7. **`<html lang="en">` fixed** in `index.html`, but there is no per-page `<title>` or `<meta name="description">` in the static shell. Every crawler that ignores JS (LinkedIn, Slack, some Bing paths) sees an empty head until prerender writes over it. If prerender fails silently the deploy ships a blank-metadata site.

## 2) High-impact improvements

- Split monolith pages: `Home.jsx` 1055 lines, `OBBBADeadline.jsx` 825, `TheConcordStandard.jsx` 482, service pages 430–576 each. Extract `ServiceHero`, `KeyFacts`, `ProcessTimeline`, `FaqSection`, `RelatedServices`, `TestimonialBlock`, `IndustryGrid`, `StatsFloatingCards` into `src/components/sections/`.
- `HeroSection.jsx` uses `dangerouslySetInnerHTML` on the `title` prop (line 21). Replace with a `children` slot or a typed structured prop; the current form is a small XSS surface if title ever becomes user-derived.
- Blog `content` is HTML strings in `src/data/blogPosts.js` rendered without sanitization (see `BlogPost.jsx`). Move to MDX or use `DOMPurify`.
- No design tokens beyond Tailwind. Add CSS custom properties for radius scale, motion durations, elevation shadow set, and a documented spacing scale.
- Icons come from `@phosphor-icons/react` which tree-shakes poorly in barrel imports; audit bundle with `rollup-plugin-visualizer`.
- Fonts loaded via Google Fonts without `font-display: swap` control (relies on Google default) and without `<link rel="preload" as="font">`. Self-host or use `fontsource` for CLS + privacy.
- `react-helmet-async` is client-only; SSR/prerender race is why item 7 exists. Consider migrating to `@vite/plugin-ssr`, `vike`, or Astro in V2 for true SSG.

## 3) Factual claims that need human/source verification

Every one of these is asserted in code with no source link, citation, or dated evidence file in the repo:

- **$1B+ in client savings** — `Home.jsx:245`, `llms.txt`, `seo.jsx` schema. UNVERIFIED.
- **98% audit success rate** — `Home.jsx:245`, `llms.txt`. UNVERIFIED.
- **15+ years focus** — `Home.jsx:245`, `llms.txt`. UNVERIFIED.
- **1,000+ buildings evaluated annually** — `Home.jsx:212`, `llms.txt`. UNVERIFIED.
- **"$5.94 per square foot" max 179D** — repeated in `services.js:5`, blog post, Home. Tax rate; must be reconciled to Rev. Proc. 2025-32 by counsel each year.
- **"Founder Dennis J. Stilger Jr. helped shape the 179D provision into law"** and "Co-Chair of the Coalition for Energy Efficient Jobs & Investment" — `WhoWeAre.jsx:144`, `llms.txt`. UNVERIFIED, high legal-risk claim.
- **Address `6000 Brownsboro Park Blvd, Suite H, Louisville, KY 40207`** — `seo.jsx:57–62`. UNVERIFIED.
- **Phone `(502) 384-9078`** — `seo.jsx:53,78`, `llms.txt`. UNVERIFIED.
- **`info@concordenergy.com`** — used across Contact, Privacy, Terms. Different domain from `concordlp.com` used in canonicals — INCONSISTENT.
- **LinkedIn `sameAs` `linkedin.com/company/concord-energy-strategies`** — `seo.jsx:81`. UNVERIFIED.
- **`numberOfEmployees` minValue 11 maxValue 50** — `seo.jsx:74`. UNVERIFIED.
- **`foundingDate: 2009`** — `seo.jsx:52`. UNVERIFIED.
- **Job postings and city assignments** (Washington DC, New York NY, Remote) — `Careers.jsx` `jobListings`. Emit JobPosting JSON-LD — if roles are not actually open, this is misleading structured data and can trigger a Google manual action.
- **All testimonials/blockquotes** on Home, PWA, RDTaxCredits, TransferableCredits, ClientCharter, WhyUs — no attribution source in repo. `Home.jsx:612,695` already carry the "Illustrative example" disclaimer; service pages do NOT.
- **Section 174 retroactive $31M threshold, PWA penalty amounts ($5,000 / $10,000)** — `blogPosts.js`. Tax figures; must be sourced.
- **Blog `dateModified` = `datePublished`** by default in `generateArticleSchema` (`seo.jsx`). If dates are wrong, freshness signals mislead.
- **Affiliations strip** in `Affiliations.jsx` — flag whether Concord is in fact affiliated with the logos rendered.

## 4) Missing assets / routes / metadata

- **`/og-image.jpg` (referenced `seo.jsx:5` `DEFAULT_IMAGE`)** — not present in `public/`. Every share renders a broken card.
- **`/assets/concord-logo.png`** — referenced in JSON-LD `logo` (`seo.jsx:50`, article publisher). Repo has `public/assets/concord-logo.svg` and `assets/concord-logo.svg` only. Google requires a bitmap logo for Article rich results.
- **`/assets/concord-icon.jpg`** referenced as favicon in `index.html` — exists in `public/assets/` (binary), but a `.jpg` favicon is unusual; provide `.ico` + `apple-touch-icon.png` + web manifest.
- **No `site.webmanifest`, no theme-color meta, no `apple-touch-icon`.**
- **Sitemap missing `/resources/:id` blog entries.** `sitemap.xml` has `/resources` but not the actual `blogPosts` slugs — those pages therefore aren't discoverable via sitemap.
- **`/client-charter` present in App routes but missing from Navbar dropdown** (it is present via the About dropdown, verified). However the primary Navbar exposes `/#services` for the Services parent — `/#services` requires the Home page to have `id="services"`, which is not enforced by tests and can silently drift.
- **No `humans.txt`, no `security.txt`.**
- **No `_headers` / Cache-Control** — but Lovable hosting doesn't use them; still, hashed asset caching should be documented for V2.
- **No 404 sitemap page or search fallback.**

## 5) SEO and indexing risks

- **Domain mismatch:** JSON-LD/sitemap use `concordlp.com`; contact emails use `concordenergy.com`. Pick one; register the other as alias.
- **Canonical resolution assumes production domain.** No `<base>` tag; on preview builds canonicals point to prod URL — fine, but means noindex protection is only from `robots.txt` on the preview host.
- **No `<meta name="robots">` on `/whitepaper/thank-you`** unless the SEOHead `noindex` prop is passed — verify still set after the last edit.
- **`speakable` schema** targets `.hero-description`, `.service-definition`, `.key-facts` — `.service-definition` and `.key-facts` classes do not appear in any component I inspected. Broken speakable selectors are ignored, but the schema is emitted, which is misleading.
- **`generateOrganizationSchema` and `generateWebSiteSchema` both fire on Home** — fine, but `WebPage` + `Service` × 5 also fire on Home simultaneously. Google will pick one; the Service graph is unusual on the root URL — attach services on their own pages only.
- **JobPosting schema on `Careers.jsx`** — enumerates 6 roles. If these aren't real open reqs with valid `datePosted`/`validThrough`, this is a rich-results violation.
- **Blog posts store `date` (`2025-10-16`) but no `dateModified`** in `blogPosts.js` — Article schema then reports `dateModified = datePublished`. Loses freshness signal for updated posts.
- **`<h1>` audit:** `Home.jsx:234` OK. `NotFound.jsx` OK. Verify service pages each have exactly one `<h1>` — many use hero components; a full sweep is recommended.
- **`llms.txt` claims specific facts** — same UNVERIFIED list from §3 is now also emitted at `/llms.txt`, doubling exposure.
- **No hreflang** — fine for US-only.
- **No breadcrumb landmark markup** even where the JSON-LD is emitted; add `<nav aria-label="Breadcrumb"><ol>` HTML.

## 6) Accessibility and Core Web Vitals risks

- **Nav dropdowns open on hover only** (`Navbar.jsx` `.group` pattern). Keyboard users cannot open them — the parent link navigates instead. Move to Radix/HeadlessUI `Menu` with proper `aria-expanded` and Escape handling. `aria-expanded="false"` is currently hardcoded (`Navbar.jsx:83`) — a lie for screen readers.
- **Focus visible outline** is set (`globals.css:70`) — good. But many custom buttons override with `hover:` transforms and no explicit focus style beyond global.
- **FAQ accordion** (`FaqAccordion.jsx`) uses a `button` inside a card but no `aria-expanded`, no `aria-controls`, and animates `max-h` (jumps content). Wire to Radix Accordion or add ARIA + `hidden` attribute for accessibility parity.
- **Unsplash images at 1920×1080** loaded eagerly in hero regions (Contact.jsx:336, Careers.jsx:101,304) — LCP killers. Should be `loading="eager" fetchpriority="high"` for actual LCP image and `loading="lazy"` for the rest, plus a small `<img srcSet>` for mobile.
- **Google Fonts render-blocking**, no `font-display=swap` explicitly appended. Add `&display=swap`.
- **44 unique unsplash URLs across 81 references** — every `<img>` fetches from a third party without an SLA; use `preconnect` or self-host. Also a GDPR concern for EU visitors.
- **`scroll-margin-top: 140px`** applied globally to `[id]` (`globals.css:70`) — will over-scroll anchor jumps on pages without a sticky sub-nav.
- **`bg-white/85 backdrop-blur`** on navbar — reduced motion / low-contrast risk; check text contrast over busy hero images.
- **Motion:** `useScrollAnimation` fires on every element with `ScrollFadeIn`. No `prefers-reduced-motion` respected. Wrap in `matchMedia('(prefers-reduced-motion: reduce)')`.
- **`h-[440px]`, fixed `min-h-screen`** — audit for `h-screen` vs `h-dvh` on mobile.
- **Bundle:** Lazy routes ✓ (App.jsx uses `lazy`). No route-level `Suspense boundary` errors mapped to `NotFound` — a chunk load failure ends in a blank fallback.

## 7) Content architecture gaps

- **Two contact routes** (`/contact`, `/start-the-conversation`) render the same component. Different intents (form vs. book-a-call). Split.
- **Insights** dropdown links to `/resources?content=News` etc. but the Resources page owns filter state via `useSearchParams`. Deep links work, but no server-side filter for pagination — long term a full CMS.
- **Blog data is a static JS array of 405 lines** with inline HTML content and remote hubspot image URLs. Not sustainable. Move to MDX in-repo or a headless CMS (Sanity/Contentful/Payload). Deep-link images to a CDN we control.
- **No case-study data model.** Resources uses `category` and `content` filters loosely.
- **Whitepaper thank-you** presents a "book a discovery call" flow but the whitepaper form doesn't actually send the whitepaper (form submit is stubbed — §1). Design/UX contract is broken.
- **No pricing / engagement-model page** — for AEO ("how much does 179D consulting cost"), we have no landing target.
- **No glossary** — high-value AEO surface for terms like 179D, PWA, ITC, PTC, DOE-2, ASHRAE 90.1.
- **No location/service-area pages** — LocalBusiness schema is set but no city or state landing pages.

## 8) Animation / WebGL opportunities and cautions

Opportunities (all optional; must respect reduced motion):

- **Hero:** Subtle `three.js` or `@react-three/fiber` scene of an isometric building lighting up as tax credits stack; keep under 60 KB and gate behind `IntersectionObserver` + `prefers-reduced-motion`.
- **Process timeline (6 steps):** Scroll-locked SVG path drawing (Framer Motion `useScroll`) — cheap, high-impact.
- **OBBBA deadlines:** small animated countdown card is present (`CountdownTimer.jsx`) — extend with `LayoutGroup` transitions when rows expire.
- **Stat cards:** IntersectionObserver-triggered number ramp using `motion/react`.

Cautions:

- Do not ship a full WebGL scene at LCP. Load after `requestIdleCallback`.
- Any 3D asset must be under 200 KB gzipped and gated on `prefers-reduced-motion: no-preference` AND `matchMedia('(min-width: 1024px)')`.
- Framer Motion adds ~35 KB gzip; use `motion/mini` if only a few animations.
- Avoid parallax on mobile — Safari kinetic scroll is jittery.
- Do not animate `box-shadow` or `filter: blur` in scroll listeners — jank.

## 9) Recommended V2 information architecture and component architecture

### V2 IA

```text
/                            Home
/services/
  /179d-tax-deduction
  /prevailing-wage-apprenticeship
  /direct-pay
  /transferable-tax-credits
  /rd-tax-credits
/industries/                 (NEW hub)
  /government
  /higher-education
  /healthcare
  /commercial-real-estate
  /renewable-energy
  /aec-firms
  /manufacturing
  /software
  /life-sciences
  /tribal-nations
/who-we-serve/               (persona routing)
  /designers
  /for-profit-owners
  /tax-exempt-owners
/about/
  /who-we-are
  /why-us
  /the-concord-standard
  /client-charter
  /careers
/insights/                   (renamed /resources)
  /news
  /case-studies
  /whitepapers
  /deadlines
  /glossary                  (NEW)
/tools/                      (NEW: gated lead gen)
  /179d-estimator
  /pwa-eligibility
  /obbba-timeline
/contact                     (form)
/book-a-call                 (canonical booking, replaces /start-the-conversation)
/privacy-policy
/terms-conditions
```

Redirect `/start-the-conversation` → `/book-a-call`, keep `/contact-us` → `/contact` (already in App.jsx).

### V2 Component architecture

```text
src/
  components/
    layout/          Navbar, Footer, Breadcrumbs, StickyNav, Container
    sections/        Hero, KeyFacts, ProcessTimeline, IndustryGrid,
                     StatsFloatingCards, TestimonialBlock, FaqSection,
                     RelatedServicesRow, CTA (Dark/White variants),
                     InlineBookingCard, NewsletterBar
    ui/              Button, Badge, Card, Accordion (Radix),
                     Dialog (Radix), Tabs (Radix), Tooltip (Radix),
                     BookingModal, CountdownTimer, RichText
    seo/             SEOHead, JsonLd, Breadcrumbs (both HTML + schema)
    motion/          ScrollFadeIn, MotionSafe, NumberRamp
    forms/           ContactForm, NewsletterForm, WhitepaperForm
                     (all wired to a shared submitLead(payload) service)
  content/
    services/*.mdx
    insights/*.mdx
    industries/*.mdx
  data/
    stats.ts         (single source of truth for canon stats)
    services.ts
    industries.ts
    team.ts
  services/          submitLead, fetchMeetingUrl, analytics
  hooks/             useReducedMotion, useIntersection, useMediaQuery
  utils/             seo/, formatting/, dates/
```

Consolidation targets:
- All service hero variants → `Hero` + `KeyFacts` composition (one file).
- All service testimonial blocks → `TestimonialBlock` with a `verified: boolean` gate that hides unverified quotes automatically in production.
- All "Illustrative example" disclaimers → one `<ProofDisclaimer/>` component.

## 10) Ordered implementation backlog

Priority 0 — fix now, before any redesign:

1. Wire all four forms to a real endpoint (HubSpot Forms API, Resend, or a Lovable Cloud edge function). Add server-side validation and rate limiting.
2. Reconcile domain: pick `concordlp.com` OR `concordenergy.com`; update `seo.jsx` `SITE_URL`, all email links, and DNS.
3. Delete `src/pages/ContactUs.jsx` OR merge its HubSpot embed into `Contact.jsx`. Not both.
4. Verify every claim in §3. Any that cannot be substantiated must be removed from `Home.jsx`, `llms.txt`, `seo.jsx`, service pages, blog posts, and `WhoWeAre.jsx`.
5. Add `/og-image.jpg` (1200×630) and `/assets/concord-logo.png` (bitmap) or update schema to reference the SVG only where allowed.
6. Add missing blog URLs to `sitemap.xml`; consider a build-time generator that reads `blogPosts.js`.
7. Confirm `/whitepaper/thank-you` still renders `<meta name="robots" content="noindex,nofollow">`.

Priority 1 — SEO/AEO integrity:

8. Remove `speakable` CSS selectors that don't exist in DOM (or add the classes).
9. Move `Service` × 5 schema off Home to their own service pages only.
10. Gate `JobPosting` schema on `role.active === true` with real `datePosted` / `validThrough`; hide the schema when empty.
11. Add `dateModified` field to each blog post and pass through to Article schema.
12. Emit HTML `<nav aria-label="Breadcrumb">` alongside the JSON-LD.
13. Add `og:image` per route (services + insights).

Priority 2 — Accessibility + performance:

14. Rebuild Navbar dropdowns on Radix Menu; correct `aria-expanded` state; keyboard + escape.
15. Rebuild FAQ on Radix Accordion.
16. Respect `prefers-reduced-motion` in `useScrollAnimation` and any future WebGL.
17. Self-host or preload critical fonts; add `&display=swap`.
18. Replace hero unsplash images with owned assets or `next-gen` formats (AVIF/WEBP) served from `/public`.
19. Set explicit LCP image with `fetchpriority="high"`, others `loading="lazy"` + `decoding="async"`.
20. Remove global `overflow-x: clip` on Layout root; fix the offending off-canvas menu directly.

Priority 3 — content architecture:

21. Migrate `blogPosts.js` HTML strings to MDX or CMS; sanitize any remaining HTML with DOMPurify.
22. Introduce `/industries/*` hub with the 10 industries already listed on Home.
23. Introduce `/insights/glossary` seeded from FAQs across all service pages.
24. Introduce `/tools/179d-estimator` — gated calculator becomes the top-of-funnel asset.

Priority 4 — engineering hygiene:

25. Convert `.jsx` to `.tsx` progressively; align `tsconfig.paths` with Vite alias `@`.
26. Add ESLint + a11y plugin, Prettier, lint-staged.
27. Add Playwright smoke tests: every sitemap URL renders `<h1>`, unique `<title>`, unique meta description; no console errors.
28. Add `rollup-plugin-visualizer` and set bundle budgets (initial JS < 180 KB gzip).
29. Replace prerender puppeteer with a proper SSG (Astro, Vike, or Next static export) OR harden `scripts/prerender.mjs` (retry, offline-safe, per-route timeout, plain-HTML content assertion).
30. Add CI (GitHub Actions) that runs build + prerender + Playwright on every PR.

Priority 5 — brand and motion polish (only after 1–4):

31. Introduce optional WebGL hero (r3f), gated on reduced-motion + `min-width: 1024px`.
32. Add scroll-locked SVG process timeline.
33. Add number-ramp stat cards.
34. Design-token pass: motion durations, elevation shadows, radius scale documented in `globals.css`.

---

### Notes preserved for V2

- Palette: locked. `#151C19` dark, `#3da35d`/`#40b868` green ACCENT ONLY (never a section fill or button fill), `#F6F4EF` sage, `#F1F6F2` mint, `#FFF5DC` cream, `#e85d75` coral warnings.
- Font stack: `Plus Jakarta Sans` headings + `Inter` body.
- Router: React Router v6 client-side, SPA fallback provided by Lovable hosting.

This report is read-only. No code was edited. Approve to move into build mode for any subset of the backlog above.
