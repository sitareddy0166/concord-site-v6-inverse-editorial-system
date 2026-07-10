import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.concordlp.com';
const SITE_NAME = 'Concord Energy Strategies';
const DEFAULT_IMAGE = 'https://www.concordlp.com/og-image.jpg';
const LAST_MODIFIED = '2026-07';

export function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noindex = false,
  children,
}) {
  const fullTitle = title.includes('Concord') ? title : `${title} | Concord Energy Strategies`;
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  );
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Concord Energy Strategies',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/concord-logo.png`,
    description:
      'Compliance-driven clean energy tax incentive consulting firm helping organizations maximize 179D, PWA, Direct Pay, and R&D credits.',
    foundingDate: '2009',
    telephone: '(502) 384-9078',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6000 Brownsboro Park Blvd, Suite H',
      addressLocality: 'Louisville',
      addressRegion: 'KY',
      postalCode: '40207',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    knowsAbout: [
      '179D Tax Deduction',
      'Prevailing Wage and Apprenticeship Compliance',
      'Section 6417 Direct Pay',
      'Section 6418 Transferable Credits',
      'R&D Tax Credits',
      'Clean Energy Tax Incentives',
      'Inflation Reduction Act',
      'IRS Tax Credit Compliance',
    ],
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 11, maxValue: 50 },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '(502) 384-9078',
      url: `${SITE_URL}/start-the-conversation`,
    },
    sameAs: ['https://www.linkedin.com/company/concord-energy-strategies'],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

export function generateWebPageSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    dateModified: LAST_MODIFIED,
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

export function generateServiceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { '@type': 'Organization', name: 'Concord Energy Strategies', url: SITE_URL },
  };
}

export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function generateArticleSchema({
  title, description, url, image, datePublished, dateModified, author,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author || 'Dennis Stilger Jr.',
      jobTitle: 'Founder & Principal',
      worksFor: { '@type': 'Organization', name: 'Concord Energy Strategies' },
      url: `${SITE_URL}/who-we-are`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Concord Energy Strategies',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/concord-logo.png` },
    },
  };
}

export function generateHowToSchema({ name, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function generateCollectionPageSchema({ name, description, url, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    dateModified: LAST_MODIFIED,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${SITE_URL}${it.url}`,
      })),
    },
  };
}

export function generateJobPostingSchema({ title, description, location, remote, url }) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    employmentType: 'FULL_TIME',
    datePosted: '2026-07-02',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Concord Energy Strategies',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/assets/concord-logo.png`,
    },
    url: `${SITE_URL}${url}`,
  };
  if (remote) {
    base.jobLocationType = 'TELECOMMUTE';
    base.applicantLocationRequirements = { '@type': 'Country', name: 'US' };
  } else {
    base.jobLocation = {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: location, addressCountry: 'US' },
    };
  }
  return base;
}

export function generateAboutPageSchema({ name, description, url, about }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    dateModified: LAST_MODIFIED,
    about: about || undefined,
  };
}

export function generateSpeakableSchema(cssSelectors) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };
}

export function SchemaScript({ schema }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
