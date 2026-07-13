import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Clock, Bank, GraduationCap, Heartbeat,
  BuildingOffice, SolarPanel, Ruler, Factory, Code, Dna, Tipi, Phone,
} from '@phosphor-icons/react';
import {
  SEOHead, SchemaScript,
  generateOrganizationSchema, generateFAQSchema, generateServiceSchema,
  generateWebSiteSchema, generateWebPageSchema, generateSpeakableSchema,
} from '@/utils/seo';
import BuildingBlueprint from '@/components/sections/BuildingBlueprint';
import PersonaTabs from '@/components/sections/PersonaTabs';
import HomeFaq from '@/components/sections/HomeFaq';


/* ------------------------------------------------------------------ */
/* Content preserved from V1 verbatim (no invented facts).            */
/* ------------------------------------------------------------------ */
const homeFaqs = [
  { question: 'What is the 179D tax deduction?', answer: 'Section 179D is a federal tax deduction for energy-efficient commercial buildings. Qualifying buildings can receive up to $5.94 per square foot when prevailing wage and apprenticeship requirements are met.' },
  { question: 'Who qualifies for Direct Pay under Section 6417?', answer: 'Tax-exempt entities such as state and local governments, tribal nations, nonprofits, and rural electric cooperatives can receive direct cash payments for 11 eligible clean energy tax credits.' },
  { question: 'What are transferable tax credits under Section 6418?', answer: 'Section 6418 allows for-profit entities to sell eligible clean energy tax credits to unrelated buyers for cash, creating a new marketplace for monetizing clean energy investments.' },
  { question: 'How does the prevailing wage and apprenticeship requirement work?', answer: 'Projects that meet PWA requirements can multiply their base credit by up to 5x. Concord helps you navigate compliance, documentation, and correction procedures to maximize your incentive.' },
  { question: 'What is The Concord Standard?', answer: 'The Concord Standard is our six-step compliance-driven process covering assessment, roadmap creation, substantiation, compliance management, monetization, and continuation to ensure maximum incentive capture.' },
  { question: 'How quickly can we start capturing incentives?', answer: 'Most engagements begin with a complimentary assessment. From there, our team can identify eligible incentives and create a roadmap within weeks, with many clients seeing results within 60 to 90 days.' },
];

const services = [
  { code: 'S/01', href: '/179d-tax-deduction',            title: '179D Tax Deduction',            note: 'Sec. 179D',      lede: 'Up to $5.94 per square foot for energy-efficient commercial buildings. We handle the energy modeling, certification, and allocation letters so you capture the maximum deduction.' },
  { code: 'S/02', href: '/prevailing-wage-apprenticeship', title: 'PWA Compliance',                note: 'IRA Labor Std.', lede: 'Prevailing wage and apprenticeship requirements can multiply credits up to 5x. We ensure compliance from day one.' },
  { code: 'S/03', href: '/direct-pay',                    title: 'Section 6417 Direct Pay',       note: 'Sec. 6417',      lede: 'Tax-exempt entities receive direct cash payments for eligible clean energy credits. We manage pre-filing registration and compliance.' },
  { code: 'S/04', href: '/transferable-tax-credits',       title: 'Section 6418 Transferable Credits', note: 'Sec. 6418',  lede: 'Sell eligible clean energy tax credits to unrelated buyers for cash. We facilitate the marketplace, diligence, and transfer mechanics.' },
  { code: 'S/05', href: '/rd-tax-credits',                title: 'R&D Tax Credits',               note: 'Sec. 41',        lede: 'Identify qualifying research activities and expenses to offset tax liability. Our technical team documents everything for audit resilience.' },
];

const tabs = [
  { id: 'designers',   label: 'Project Designers',       title: 'Project Designers',       description: 'Architects and engineers who design energy-efficient buildings can claim the 179D deduction through allocation letters from building owners. Concord manages the entire process, from energy modeling to certification.', media: 'engineering',   imageAlt: 'Architect reviewing energy-efficient building blueprints for 179D tax deduction eligibility' },
  { id: 'for-profit',  label: 'For-Profit Owners',       title: 'For-Profit Owners',       description: 'Commercial building owners can directly claim 179D deductions and leverage transferable credits under Section 6418 to monetize their clean energy investments in new ways.', media: 'building-179d', imageAlt: 'Modern commercial office building exterior with energy-efficient systems eligible for 179D tax deduction' },
  { id: 'tax-exempt',  label: 'Tax-Exempt Owners',       title: 'Tax-Exempt Owners',       description: 'Government agencies, tribal nations, and nonprofits can now receive direct cash payments for clean energy tax credits through Section 6417. We handle pre-filing registration and IRS compliance.', media: 'public-infra',  imageAlt: 'University campus buildings representing tax-exempt entities eligible for Section 6417 Direct Pay' },
  { id: 'marketplace', label: 'Tax Credit Marketplace',  title: 'Tax Credit Marketplace',  description: 'Section 6418 created a new marketplace for buying and selling clean energy credits. Concord connects buyers and sellers, manages due diligence, and ensures compliant transfer mechanics.', media: 'transaction',   imageAlt: 'Financial dashboard showing tax credit transfer analytics for Section 6418 marketplace' },
];


const standardStages = [
  { num: '01', title: 'Assessment',            text: 'We evaluate your portfolio to identify every eligible incentive. Our team reviews building systems, project timelines, and ownership structures to uncover hidden value.' },
  { num: '02', title: 'Roadmap',               text: 'We create a clear, prioritized action plan for capturing your incentives. You will know exactly what is available, what is required, and the projected financial impact.' },
  { num: '03', title: 'Substantiation',        text: 'Our technical team builds the audit-resilient documentation package, including energy models, certifications, and allocation letters that withstand IRS scrutiny.' },
  { num: '04', title: 'Compliance Management', text: 'We monitor regulatory changes, manage prevailing wage documentation, and ensure your projects stay compliant throughout the entire lifecycle.' },
  { num: '05', title: 'Monetization',          text: 'Whether through direct deductions, Direct Pay elections, or credit transfers, we help you convert your incentives into real financial returns.' },
  { num: '06', title: 'Continuation',          text: 'Incentive programs evolve. We stay engaged to capture future opportunities, adapt to regulatory changes, and ensure your portfolio continues to benefit year after year.' },
];

const industries = [
  { icon: Bank,           label: 'Government',        desc: 'Federal, state, and municipal building portfolios' },
  { icon: GraduationCap,  label: 'Higher Ed',         desc: 'University and campus energy retrofits' },
  { icon: Heartbeat,      label: 'Healthcare',        desc: 'Hospitals and medical facility upgrades' },
  { icon: BuildingOffice, label: 'Commercial RE',     desc: 'Office, retail, and mixed-use portfolios' },
  { icon: SolarPanel,     label: 'Renewable Energy',  desc: 'Solar, storage, and clean generation projects' },
  { icon: Ruler,          label: 'A/E/C Firms',       desc: 'Designer allocations and engineering studies' },
  { icon: Factory,        label: 'Manufacturing',     desc: 'Industrial process and facility efficiency' },
  { icon: Code,           label: 'Software & Tech',   desc: 'R&D credit-rich innovation activities' },
  { icon: Dna,            label: 'Life Sciences',     desc: 'Lab facilities and research operations' },
  { icon: Tipi,           label: 'Tribal Nations',    desc: 'Direct Pay and sovereign energy investment' },
];

const caseStudies = [
  { amount: '$1.2M', title: 'Public School District', text: '179D deductions captured across 14 energy-efficient school buildings through designer allocation letters and comprehensive energy modeling.' },
  { amount: '$750K', title: 'Military Facility',      text: 'Direct Pay election for a federal military installation, including pre-filing registration, compliance documentation, and IRS coordination.' },
  { amount: '$2.5M', title: 'Multifamily Developer',  text: 'Combined 179D and transferable credits strategy across a portfolio of sustainable residential developments meeting PWA requirements.' },
];

const affiliationLogos = [
  { src: '/assets/affiliations/acec-logo.png',   alt: 'American Council of Engineering Companies logo',   height: 44 },
  { src: '/assets/affiliations/acp-logo.png',    alt: 'American Clean Power association logo',            height: 40 },
  { src: '/assets/affiliations/cebn-logo.png',   alt: 'Clean Energy Business Network logo',               height: 44 },
  { src: '/assets/affiliations/seia-logo.png',   alt: 'Solar Energy Industries Association logo',         height: 40 },
  { src: '/assets/affiliations/naesco-logo.png', alt: 'National Association of Energy Service Companies logo', height: 44 },
];


const latestResources = [
  { category: 'News',       date: 'Mar 15, 2026', title: 'IRS Updates 179D Guidance for 2026 Tax Year' },
  { category: 'Case Study', date: 'Feb 28, 2026', title: 'How a University System Captured $3.8M in Direct Pay' },
  { category: 'Whitepaper', date: 'Jan 20, 2026', title: 'The Complete Guide to PWA Compliance in 2026' },
];

/* ------------------------------------------------------------------ */

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);


  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const webPageSchema = generateWebPageSchema({
    name: 'Concord Energy Strategies | Tax Incentive Experts',
    description: 'Compliance-driven clean energy tax incentive consulting: 179D, PWA, Direct Pay, Transferable Credits, R&D.',
    url: '/',
  });
  const speakableSchema = generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts']);
  const faqSchema = generateFAQSchema(homeFaqs);
  const serviceSchemas = [
    generateServiceSchema({ name: '179D Tax Deduction Consulting', description: 'Expert consulting for the 179D energy-efficient commercial building tax deduction.', url: '/179d-tax-deduction' }),
    generateServiceSchema({ name: 'Direct Pay (Section 6417)', description: 'Help tax-exempt entities receive clean energy tax credits as direct cash payments.', url: '/direct-pay' }),
    generateServiceSchema({ name: 'PWA Compliance Consulting', description: 'Prevailing Wage and Apprenticeship compliance to unlock the 5x bonus multiplier.', url: '/prevailing-wage-apprenticeship' }),
    generateServiceSchema({ name: 'Transferable Tax Credits (Section 6418)', description: 'Monetize clean energy tax credits through Section 6418 transfers to corporate buyers.', url: '/transferable-tax-credits' }),
    generateServiceSchema({ name: 'R&D Tax Credits', description: 'Recover innovation costs with R&D tax credits for clean energy companies.', url: '/rd-tax-credits' }),
  ];

  return (
    <>
      <SEOHead
        title="Concord Energy Strategies | Tax Incentive Experts"
        description="Maximize clean energy tax incentives with Concord Energy Strategies. Over $1 billion in client savings across 15+ years of 179D, PWA, and Direct Pay expertise."
        canonical="/"
      />
      <SchemaScript schema={organizationSchema} />
      <SchemaScript schema={websiteSchema} />
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={speakableSchema} />
      {serviceSchemas.map((s, i) => <SchemaScript key={i} schema={s} />)}

      {/* ============================================================
          HERO — Dark architectural, split panel + blueprint cutaway
          ============================================================ */}
      <section className="surface-ink relative overflow-hidden grain">
        <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-70" />

        <div className="arch relative">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 pt-8 pb-16 lg:pt-16 lg:pb-24 items-stretch">
            {/* Copy panel — solid ivory reading surface */}
            <div className="order-1 lg:order-1 lg:col-span-6 xl:col-span-5 surface-ivory p-6 sm:p-8 lg:p-12 relative">
              <span aria-hidden="true" className="coord absolute top-3 left-3 text-[rgb(var(--ink))/0.5]" />
              <span aria-hidden="true" className="coord absolute top-3 right-3 text-[rgb(var(--ink))/0.5]" />

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="index-num" style={{ color: 'rgba(8,12,10,0.55)' }}>FIG. 00 / OVERVIEW</span>
                <span className="h-px w-10 bg-[rgb(var(--ink))/0.3]" />
                <span className="tech-label" style={{ color: 'rgb(var(--concord))' }}>Compliance-Driven Tax Incentive Experts</span>
              </div>

              <h1 className="h-display text-balance" style={{ color: 'rgb(var(--ink))' }}>
                Maximize Your<br /><em className="italic font-light">Tax Incentives.</em>
              </h1>

              <p className="mt-6 font-[Fraunces] text-[22px] sm:text-[24px] lg:text-[30px] leading-tight tracking-tight text-[rgb(var(--ink))/0.75]">
                Concord Makes It Simple.
              </p>

              <p className="hero-description mt-6 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ink))/0.75] max-w-lg">
                With over $1 billion in tax savings identified and an industry-leading audit success track record, Concord Energy Strategies helps building owners, designers, and tax-exempt organizations capture every clean energy incentive they deserve.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/start-the-conversation" className="btn btn-dark">
                  Start the Conversation <ArrowRight size={14} weight="bold" />
                </Link>
                <a href="#services-atlas" className="btn btn-outline" style={{ color: 'rgb(var(--ink))', boxShadow: 'inset 0 0 0 1px rgba(8,12,10,0.35)' }}>
                  Explore Services
                </a>
              </div>

              {/* Mobile-only compact graphic — appears after CTAs per audit order */}
              <div className="lg:hidden -mx-6 sm:-mx-8 mt-8 relative border-y border-[rgb(var(--ink))/0.08] aspect-[4/3] bg-[rgb(var(--ink))]">
                <BuildingBlueprint />
              </div>

              <div className="hrule-ink mt-10 mb-6" />
              <dl className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <dt className="tech-label" style={{ color: 'rgba(8,12,10,0.55)' }}>Savings</dt>
                  <dd className="font-[Fraunces] text-[24px] sm:text-[28px] leading-none mt-1 text-[rgb(var(--ink))]">$1B+</dd>
                </div>
                <div>
                  <dt className="tech-label" style={{ color: 'rgba(8,12,10,0.55)' }}>Audit Success</dt>
                  <dd className="font-[Fraunces] text-[24px] sm:text-[28px] leading-none mt-1 text-[rgb(var(--ink))]">100%</dd>
                </div>
                <div>
                  <dt className="tech-label" style={{ color: 'rgba(8,12,10,0.55)' }}>Focus</dt>
                  <dd className="font-[Fraunces] text-[24px] sm:text-[28px] leading-none mt-1 text-[rgb(var(--ink))]">15+ yrs</dd>
                </div>
              </dl>
            </div>

            {/* Blueprint panel — desktop only (mobile version renders inline in copy panel above) */}
            <div className="hidden lg:block lg:order-2 lg:col-span-6 xl:col-span-7 relative border border-[rgb(var(--ivory))/0.10] lg:min-h-[560px]">
              <BuildingBlueprint />
            </div>

          </div>

          {/* Meta strip — hidden below 640px to reduce clutter */}
          <div className="hidden sm:block">
            <div className="hrule mb-0" />
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 text-[rgb(var(--ivory))/0.6]">
              <span className="tech-label tech-label--dim">Doc/CES-V6 · Revision 06.07.2026</span>
              <span className="tech-label tech-label--dim">Fig. 01 · Mid-rise Commercial Cutaway</span>
              <span className="tech-label tech-label--dim">Louisville KY · Practicing in 50 states</span>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          AFFILIATIONS BAND — institutional monochrome marquee
          ============================================================ */}
      <section className="surface-graphite border-y border-[rgb(var(--ivory))/0.08] py-10" aria-label="Industry affiliations">
        <div className="arch">
          <div className="flex items-baseline justify-between mb-6">
            <p className="tech-label">Industry Affiliations</p>
            <p className="tech-label tech-label--dim">Verified members · 05</p>
          </div>
          <div className="marquee-viewport">
            <div className="marquee-track items-center">
              {[...affiliationLogos, ...affiliationLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={i < affiliationLogos.length ? logo.alt : ''}
                  aria-hidden={i >= affiliationLogos.length || undefined}
                  width="200"
                  height="72"
                  loading="lazy"
                  className="affiliation-logo"
                  style={{ height: `${logo.height || 44}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          SERVICES ATLAS — vertical editorial index, no card grid
          ============================================================ */}
      <section id="services" className="surface-ink band">
        <div className="arch">
          <div id="services-atlas" className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="tech-label mb-6">Our Services</p>
              <h2 className="h-display text-balance">Tax Incentives, Simplified</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16px] text-[rgb(var(--ivory))/0.7] leading-relaxed">
                Concord's practice concentrates on five federal incentive mechanisms. Each is documented, substantiated, and monetized with the same disciplined method.
              </p>
            </div>
          </div>

          <ol className="border-t border-[rgb(var(--ivory))/0.12]">
            {services.map((s) => (
              <li key={s.href} className="border-b border-[rgb(var(--ivory))/0.12] group">
                <Link
                  to={s.href}
                  className="grid lg:grid-cols-12 gap-6 py-8 lg:py-10 items-baseline hover:bg-[rgb(var(--ivory))/0.02] transition-colors px-2"
                >
                  <div className="lg:col-span-1 index-num pt-1">{s.code}</div>
                  <div className="lg:col-span-4">
                    <h3 className="font-[Fraunces] text-[28px] lg:text-[34px] leading-tight tracking-tight text-[rgb(var(--ivory))] group-hover:text-[rgb(var(--concord-glow))] transition-colors">
                      {s.title}
                    </h3>
                    <p className="tech-label tech-label--brass mt-2">{s.note}</p>
                  </div>
                  <div className="lg:col-span-6 text-[15px] text-[rgb(var(--ivory))/0.7] leading-relaxed max-w-xl">
                    {s.lede}
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <ArrowUpRight size={22} weight="bold" className="text-[rgb(var(--ivory))/0.55] group-hover:text-[rgb(var(--concord-glow))] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[15px] text-[rgb(var(--ivory))/0.65]">See what your projects qualify for.</p>
            <Link to="/start-the-conversation" className="btn btn-outline">
              Start the Conversation <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          DATA BAND — integrated stat rail (not floating cards)
          ============================================================ */}
      <section className="surface-forest border-y border-[rgb(var(--ivory))/0.08] py-14" aria-label="Practice at a glance">
        <div className="arch grid lg:grid-cols-4 gap-y-8 gap-x-12">
          <div>
            <p className="tech-label mb-3">Rate ceiling</p>
            <p className="font-[Fraunces] text-[56px] leading-none">$5.94<span className="text-[24px] text-[rgb(var(--ivory))/0.55]">/sf</span></p>
            <p className="text-[13px] text-[rgb(var(--ivory))/0.65] mt-2">Maximum 179D deduction with PWA compliance</p>
          </div>
          <div>
            <p className="tech-label mb-3">PWA Multiplier</p>
            <p className="font-[Fraunces] text-[56px] leading-none">5×</p>
            <p className="text-[13px] text-[rgb(var(--ivory))/0.65] mt-2">Enhanced credit rate for compliant projects</p>
          </div>
          <div>
            <p className="tech-label mb-3">Portfolio Reach</p>
            <p className="font-[Fraunces] text-[56px] leading-none">1,000<span className="text-[24px] text-[rgb(var(--ivory))/0.55]">+</span></p>
            <p className="text-[13px] text-[rgb(var(--ivory))/0.65] mt-2">Buildings evaluated annually</p>
          </div>
          <div>
            <p className="tech-label mb-3">Recovery Window</p>
            <p className="font-[Fraunces] text-[56px] leading-none">3<span className="text-[24px] text-[rgb(var(--ivory))/0.55]"> yrs</span></p>
            <p className="text-[13px] text-[rgb(var(--ivory))/0.65] mt-2">Retroactive claim horizon</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHO WE SERVE — vertical indexed tabs, accessible
          ============================================================ */}
      <section className="surface-ink band">
        <div className="arch">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-8">
              <p className="tech-label mb-6">Chapters · B/01–04</p>
              <h2 className="h-display text-balance">Built for your position in the incentive stack.</h2>
            </div>
          </div>

          <PersonaTabs items={tabs} />
        </div>
      </section>


      {/* ============================================================
          THE CONCORD STANDARD — six-stage sticky progression
          ============================================================ */}
      <section className="surface-graphite band" aria-label="The Concord Standard">
        <div className="arch">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="tech-label mb-6">Method · C/01</p>
              <h2 className="h-display text-balance">The Concord Standard.</h2>
              <p className="mt-6 text-[17px] text-[rgb(var(--ivory))/0.7] max-w-2xl leading-relaxed">
                A six-stage, compliance-first discipline. Each stage produces a defined artifact your auditor, controller, and counsel can rely on.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link to="/the-concord-standard" className="btn btn-outline">Read The Standard <ArrowUpRight size={14} weight="bold" /></Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Stage rail */}
            <div className="lg:col-span-4 border-l border-[rgb(var(--ivory))/0.15] pl-6 lg:sticky lg:top-24 self-start">
              <ol>
                {standardStages.map((stage, i) => {
                  const on = activeStage === i;
                  return (
                    <li key={stage.num}>
                      <button
                        onClick={() => setActiveStage(i)}
                        aria-current={on ? 'step' : undefined}
                        className={`w-full text-left py-3 flex items-baseline gap-4 ${on ? 'text-[rgb(var(--ivory))]' : 'text-[rgb(var(--ivory))/0.5] hover:text-[rgb(var(--ivory))]'}`}
                      >
                        <span className={`index-num shrink-0 ${on ? 'text-[rgb(var(--concord-glow))]' : ''}`}>{stage.num}</span>
                        <span className="font-[Fraunces] text-[22px] leading-tight tracking-tight">{stage.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Stage detail */}
            <div className="lg:col-span-8 border border-[rgb(var(--ivory))/0.12] p-8 lg:p-12 relative min-h-[360px]">
              <span aria-hidden="true" className="coord absolute top-3 right-3 text-[rgb(var(--ivory))/0.45]" />
              <p className="tech-label tech-label--brass">Stage {standardStages[activeStage].num} of 06</p>
              <h3 className="h-lead mt-4">{standardStages[activeStage].title}</h3>
              <p className="mt-6 text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.75] max-w-2xl">
                {standardStages[activeStage].text}
              </p>

              {/* Simple line-drawn progress diagram */}
              <svg viewBox="0 0 600 60" className="mt-10 w-full" role="presentation">
                <line x1="10" y1="30" x2="590" y2="30" stroke="rgba(239,236,229,0.15)" strokeWidth="1" />
                {standardStages.map((_, i) => {
                  const x = 10 + (i * (580 / 5));
                  const active = i <= activeStage;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={30} r={active ? 6 : 4} fill={active ? '#40b868' : '#12161a'} stroke={active ? '#40b868' : 'rgba(239,236,229,0.35)'} strokeWidth="1" />
                      <text x={x} y={54} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={active ? 'rgba(239,236,229,0.9)' : 'rgba(239,236,229,0.45)'}>
                        {String(i + 1).padStart(2, '0')}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIAL — editorial pull quote
          ============================================================ */}
      <section className="surface-ivory band">
        <div className="arch">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-3">
              <p className="tech-label" style={{ color: 'rgb(var(--concord))' }}>Client Voice · D/01</p>
            </div>
            <blockquote className="lg:col-span-9">
              <p className="font-[Fraunces] text-[32px] lg:text-[48px] leading-[1.05] tracking-tight text-[rgb(var(--ink))] text-balance">
                "Concord took the complexity out of our 179D claims and delivered results that exceeded our expectations. Their team was responsive, thorough, and always available."
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <p className="font-semibold text-[rgb(var(--ink))]">James Richardson</p>
                  <p className="text-[13px] text-[rgb(var(--ink))/0.6]">VP of Facilities, National Education Partners</p>
                </div>
                <p className="text-[12px] italic text-[rgb(var(--ink))/0.5] max-w-xs">
                  Illustrative example based on typical engagement profiles. Actual results vary.
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============================================================
          OBBBA URGENCY — dark full-bleed with brass accent
          ============================================================ */}
      <section className="surface-ink band relative overflow-hidden grain">
        <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="arch relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-2">
              <p className="tech-label tech-label--brass">Deadline · E/01</p>
              <p className="mt-4 font-[JetBrains_Mono] text-[13px] text-[rgb(var(--brass))]">2026 · 07 · 06</p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="h-lead">
                The OBBBA election cutoff for retroactive R&amp;D claims is July 6, 2026.
              </h2>
              <p className="mt-5 text-[16px] text-[rgb(var(--ivory))/0.7] max-w-2xl leading-relaxed">
                OBBBA statutory deadlines are approaching. Retroactive R&amp;D credit elections, Section 174A expensing, and Direct Pay registrations all have hard filing windows. Let our team confirm which deadlines apply to your organization before they close.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link to="/obbba-deadline" className="btn btn-primary">
                <Clock size={14} weight="bold" /> Deadline Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES — three columns, editorial numerals
          ============================================================ */}
      <section className="surface-graphite band">
        <div className="arch">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-8">
              <p className="tech-label mb-6">Proven Impact · F/01</p>
              <h2 className="h-display text-balance">Results that speak.</h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/resources?content=Case+Studies" className="ed-link text-[14px]">View all case studies →</Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[rgb(var(--ivory))/0.12]">
            {caseStudies.map((cs) => (
              <article key={cs.title} className="surface-graphite p-8 lg:p-10">
                <p className="tech-label tech-label--dim mb-6">Engagement</p>
                <p className="font-[Fraunces] text-[64px] leading-none text-[rgb(var(--concord-glow))]">{cs.amount}</p>
                <h3 className="mt-6 font-[Fraunces] text-[22px] tracking-tight text-[rgb(var(--ivory))]">{cs.title}</h3>
                <p className="mt-3 text-[14px] text-[rgb(var(--ivory))/0.7] leading-relaxed">{cs.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[12px] italic text-[rgb(var(--ivory))/0.5] text-center">
            Illustrative examples based on typical engagement profiles. Actual results vary.
          </p>
        </div>
      </section>

      {/* ============================================================
          GETTING STARTED — three-step, contra-composition
          ============================================================ */}
      <section className="surface-ivory band">
        <div className="arch grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="tech-label mb-6" style={{ color: 'rgb(var(--concord))' }}>Onboarding · G/01</p>
            <h2 className="h-display text-balance" style={{ color: 'rgb(var(--ink))' }}>Take the first step.</h2>
            <p className="mt-6 text-[16px] text-[rgb(var(--ink))/0.7] max-w-md leading-relaxed">
              Most engagements start with a complimentary assessment. In just one conversation, we can identify your eligible incentives and outline a path to significant savings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-dark">Start the Conversation <ArrowRight size={14} weight="bold" /></Link>
              <Link to="/contact-us" className="btn btn-outline" style={{ color: 'rgb(var(--ink))', boxShadow: 'inset 0 0 0 1px rgba(8,12,10,0.35)' }}><Phone size={14} weight="bold" /> Schedule a Meeting</Link>
            </div>
          </div>

          <ol className="lg:col-span-7 flex flex-col divide-y divide-[rgb(var(--ink))/0.12] border-y border-[rgb(var(--ink))/0.12]">
            {[
              { num: '1', title: 'Start the Conversation', text: 'Tell us about your portfolio, and our team will identify your eligible incentives at no cost.' },
              { num: '2', title: 'Review Your Roadmap',    text: 'We deliver a clear action plan with projected savings, timelines, and compliance requirements.' },
              { num: '3', title: 'Start Saving',           text: 'Our team handles substantiation, compliance, and monetization while you focus on your business.' },
            ].map((step) => (
              <li key={step.num} className="py-6 flex items-baseline gap-6">
                <span className="index-num w-8" style={{ color: 'rgba(8,12,10,0.55)' }}>0{step.num}</span>
                <div>
                  <h3 className="font-[Fraunces] text-[22px] tracking-tight text-[rgb(var(--ink))]">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-[rgb(var(--ink))/0.7] max-w-lg">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          INDUSTRIES — dense editorial matrix
          ============================================================ */}
      <section className="surface-ink band">
        <div className="arch">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-8">
              <p className="tech-label mb-6">Coverage · H/01</p>
              <h2 className="h-display text-balance">Across every sector.</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-[rgb(var(--ivory))/0.12]">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.label} className="border-r border-b border-[rgb(var(--ivory))/0.12] p-6 hover:bg-[rgb(var(--ivory))/0.03] transition-colors">
                  <Icon size={22} weight="light" className="text-[rgb(var(--concord-glow))]" aria-hidden="true" />
                  <p className="mt-4 font-[Fraunces] text-[18px] text-[rgb(var(--ivory))]">{ind.label}</p>
                  <p className="mt-2 text-[12px] text-[rgb(var(--ivory))/0.6] leading-snug">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          LATEST RESOURCES — editorial list
          ============================================================ */}
      <section className="surface-graphite band">
        <div className="arch">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="tech-label mb-6">Insights · I/01</p>
              <h2 className="h-display text-balance">Latest resources.</h2>
            </div>
            <Link to="/resources" className="ed-link text-[14px]">View all →</Link>
          </div>

          <ul className="border-t border-[rgb(var(--ivory))/0.12]">
            {latestResources.map((a) => (
              <li key={a.title} className="border-b border-[rgb(var(--ivory))/0.12]">
                <Link to="/resources" className="grid lg:grid-cols-12 gap-4 py-6 items-baseline group hover:bg-[rgb(var(--ivory))/0.02] px-2">
                  <span className="lg:col-span-2 tech-label tech-label--dim">{a.category}</span>
                  <span className="lg:col-span-2 text-[13px] text-[rgb(var(--ivory))/0.55] font-[JetBrains_Mono]">{a.date}</span>
                  <span className="lg:col-span-7 font-[Fraunces] text-[22px] lg:text-[26px] tracking-tight leading-tight text-[rgb(var(--ivory))] group-hover:text-[rgb(var(--concord-glow))] transition-colors">
                    {a.title}
                  </span>
                  <span className="lg:col-span-1 flex lg:justify-end">
                    <ArrowUpRight size={20} weight="bold" className="text-[rgb(var(--ivory))/0.55] group-hover:text-[rgb(var(--concord-glow))] transition-colors" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          FAQ — inline accordion, semantic details
          ============================================================ */}
      <section className="surface-ink band" id="faq">
        <div className="arch">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="tech-label mb-6">Frequently Asked · J/01</p>
              <h2 className="h-lead">Everything you need to know about clean energy tax incentives and how Concord can help your organization.</h2>
            </div>
            <div className="lg:col-span-8">
              <HomeFaq faqs={homeFaqs} />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA — dark full-bleed with ivory island
          ============================================================ */}
      <section className="surface-forest band relative overflow-hidden grain">
        <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="arch relative">
          <div className="surface-ivory p-10 lg:p-16 max-w-4xl mx-auto relative">
            <span aria-hidden="true" className="coord absolute top-3 left-3 text-[rgb(var(--ink))/0.5]" />
            <span aria-hidden="true" className="coord absolute top-3 right-3 text-[rgb(var(--ink))/0.5]" />
            <span aria-hidden="true" className="coord absolute bottom-3 left-3 text-[rgb(var(--ink))/0.5]" />
            <span aria-hidden="true" className="coord absolute bottom-3 right-3 text-[rgb(var(--ink))/0.5]" />

            <p className="tech-label" style={{ color: 'rgb(var(--concord))' }}>Concord Energy Strategies · Louisville KY</p>
            <h2 className="h-display mt-6 text-balance" style={{ color: 'rgb(var(--ink))' }}>We make it simple.</h2>
            <p className="mt-6 text-[17px] text-[rgb(var(--ink))/0.7] max-w-lg leading-relaxed">
              Let Concord Energy Strategies handle the complexity of clean energy tax incentives so you can focus on what matters most.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-dark">Start the Conversation <ArrowRight size={14} weight="bold" /></Link>
              <Link to="/contact-us" className="btn btn-outline" style={{ color: 'rgb(var(--ink))', boxShadow: 'inset 0 0 0 1px rgba(8,12,10,0.35)' }}>
                <Phone size={14} weight="bold" /> Schedule a Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
