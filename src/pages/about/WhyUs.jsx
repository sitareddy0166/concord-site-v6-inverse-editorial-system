import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, XCircle, MinusCircle, Quotes } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateOrganizationSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/seo';
import AboutPageShell, { AboutBreadcrumb, AboutHero, ChapterHeader, ChapterHeaderInk, AboutCTA } from '@/components/about/AboutPageShell';
import { BuildingElevation, EnergyFlow } from '@/components/about/BlueprintFigure';

const proofRows = [
  { code: 'E/01', label: 'Licensed PE Engineers on staff',    concord: true,  traditional: false },
  { code: 'E/02', label: 'Full energy modeling capability',   concord: true,  traditional: false },
  { code: 'E/03', label: 'Audit defense included as standard', concord: true,  traditional: null },
  { code: 'E/04', label: 'Prevailing wage and apprenticeship compliance', concord: true, traditional: null },
  { code: 'E/05', label: 'Section 6418 credit transfer support', concord: true, traditional: false },
  { code: 'E/06', label: 'Dedicated cross-functional account team', concord: true, traditional: false },
];

const differentiators = [
  { code: 'D/01', title: 'Engineering-first approach', body: 'Licensed Professional Engineers build detailed energy models. Not accountants reviewing spreadsheets. Real engineering means real defensibility on examination.' },
  { code: 'D/02', title: 'Audit-proof documentation', body: 'Every study includes court-tested documentation protocols with lifetime audit defense. We do not just help you claim credits; we make sure you keep them.' },
  { code: 'D/03', title: 'End-to-end service', body: 'From initial assessment through filing and audit defense, one dedicated team handles everything. No handoffs, no gaps, no surprises.' },
];

const credentials = [
  { bold: 'Licensed Professional Engineers (PE)', note: 'Energy modeling and building systems experts' },
  { bold: 'LEED Accredited Professionals',         note: 'Sustainable building certification specialists' },
  { bold: 'Certified Energy Managers (CEM)',       note: 'Recognized by the Association of Energy Engineers' },
  { bold: 'Tax Policy Specialists',                note: 'Deep IRS regulatory knowledge and audit experience' },
  { bold: 'ASHRAE Building Modeling Experts',      note: 'Certified in energy simulation standards' },
];

const faqs = [
  { question: 'What makes Concord different from other tax incentive firms?', answer: 'Concord employs licensed Professional Engineers who build detailed energy models, not just accountants. Every study includes court-tested documentation protocols with lifetime audit defense. Our engineering-first approach ensures your credits are not only claimed but can withstand any IRS scrutiny.' },
  { question: 'How does Concord ensure my credits survive an IRS audit?', answer: 'Our engineering-first approach produces audit-proof documentation backed by ASHRAE-standard energy models. With an industry-leading audit track record and lifetime audit defense included in every engagement, your credits are protected from day one.' },
  { question: 'What types of organizations does Concord work with?', answer: 'We work with building owners, commercial real estate portfolios, tax-exempt organizations, government entities, CPA firms, and any organization that can benefit from clean energy tax incentives including 179D, Direct Pay, PWA compliance, and R&D credits.' },
  { question: 'How long does the engagement process take?', answer: 'Most engagements begin with a complimentary assessment. From there, our team can identify eligible incentives and create a roadmap within weeks, with many clients seeing results within 60 to 90 days.' },
];

function StatusMark({ v }) {
  if (v === true)  return <CheckCircle size={22} weight="fill" className="text-[rgb(var(--concord-glow))]" aria-label="Included" />;
  if (v === false) return <XCircle size={22} weight="regular" className="text-[rgb(var(--ivory))/0.35]" aria-label="Not included" />;
  return <MinusCircle size={22} weight="regular" className="text-[rgb(var(--ivory))/0.45]" aria-label="Sometimes" />;
}

export default function WhyUs() {
  return (
    <AboutPageShell>
      <SEOHead title="Why Choose Concord | Concord Energy Strategies"
        description="Discover why leading organizations choose Concord Energy Strategies. Engineering-first approach, audit-proof documentation, and $1B+ in tax savings secured."
        canonical="/why-us" />
      <SchemaScript schema={generateOrganizationSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/why-us' }, { name: 'Why Choose Concord' }])} />
      <SchemaScript schema={generateFAQSchema(faqs)} />

      <AboutBreadcrumb current="Why Choose Concord" />
      <AboutHero
        code="A/01 · WHY US"
        eyebrow="Evidence, not adjectives"
        title={<>We do not just find incentives.<br/><em className="italic font-light">We defend them.</em></>}
        lede="Where other firms stop at identification, Concord builds audit-proof cases backed by licensed engineers, energy models, and 15+ years of IRS defense experience. That is the difference between claiming a credit and keeping it."
        primaryCta={{ label: 'Start the Conversation', href: '/contact' }}
        secondaryCta={{ label: 'See Our Process', href: '/the-concord-standard' }}
        meta={[
          { label: 'Savings', value: '$1B+' },
          { label: 'Audit success', value: '100%' },
          { label: 'Buildings / yr', value: '1,000+' },
          { label: 'Focus', value: '15+ yrs' },
        ]}
      />

      {/* Proof index — evidence rail */}
      <section className="surface-ink band">
        <div className="arch">
          <ChapterHeader chapter="Section I · Evidence Index" title="Concord vs. traditional CPA firms."
            lede="A side-by-side of the capabilities that determine whether a clean energy credit survives audit. Reviewed against the market of generalist accounting practices." />
          <div className="border-t border-[rgb(var(--ivory))/0.15]">
            <div className="grid grid-cols-12 gap-4 py-3 border-b border-[rgb(var(--ivory))/0.12]">
              <div className="col-span-1 tech-label tech-label--dim">Code</div>
              <div className="col-span-7 tech-label tech-label--dim">Capability</div>
              <div className="col-span-2 text-center tech-label" style={{ color: 'rgb(var(--concord-glow))' }}>Concord</div>
              <div className="col-span-2 text-center tech-label tech-label--dim">Traditional CPA</div>
            </div>
            {proofRows.map((r) => (
              <div key={r.code} className="grid grid-cols-12 gap-4 items-center py-5 border-b border-[rgb(var(--ivory))/0.08]">
                <div className="col-span-1 index-num">{r.code}</div>
                <div className="col-span-7 text-[15px] text-[rgb(var(--ivory))]">{r.label}</div>
                <div className="col-span-2 flex justify-center"><StatusMark v={r.concord} /></div>
                <div className="col-span-2 flex justify-center"><StatusMark v={r.traditional} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators — numbered index */}
      <section className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section II · What sets us apart" title="Built different. By design." />
          <ol className="grid md:grid-cols-3 gap-0 border-t border-[rgb(var(--ink))/0.12]">
            {differentiators.map((d) => (
              <li key={d.code} className="border-b md:border-b-0 md:border-r border-[rgb(var(--ink))/0.12] last:border-r-0 p-8">
                <p className="index-num" style={{ color: 'rgba(8,12,10,0.55)' }}>{d.code}</p>
                <h3 className="mt-4 font-[Fraunces] text-[26px] leading-tight tracking-tight" style={{ color: 'rgb(var(--ink))' }}>{d.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[rgb(var(--ink))/0.72]">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Credentials + technical figure */}
      <section className="surface-ink band">
        <div className="arch grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ChapterHeader chapter="Section III · Credentials" title="Credentials that matter when it counts."
              lede="Our team combines deep engineering expertise with tax policy knowledge that few firms can match. When the IRS questions a claim, our credentials and methodology stand up to scrutiny." />
            <ul className="border-t border-[rgb(var(--ivory))/0.12]">
              {credentials.map((c, i) => (
                <li key={c.bold} className="grid grid-cols-12 gap-4 items-baseline py-5 border-b border-[rgb(var(--ivory))/0.08]">
                  <span className="col-span-1 index-num">C/{String(i + 1).padStart(2, '0')}</span>
                  <span className="col-span-11">
                    <span className="font-[Fraunces] text-[20px] text-[rgb(var(--ivory))]">{c.bold}</span>
                    <span className="block text-[14px] text-[rgb(var(--ivory))/0.65] mt-1">{c.note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/who-we-are" className="mt-8 inline-flex items-center gap-2 ed-link text-[14px]">
              Meet our leadership <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <EnergyFlow label="Energy flow schematic: source, HVAC, envelope, savings" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="surface-graphite band-sm">
        <div className="arch max-w-3xl">
          <p className="tech-label mb-4">Section IV · Client Testimony</p>
          <blockquote className="relative">
            <Quotes size={36} weight="fill" className="text-[rgb(var(--concord))/0.4] mb-4" aria-hidden="true" />
            <p className="font-[Fraunces] text-[24px] lg:text-[30px] leading-tight tracking-tight text-[rgb(var(--ivory))]">
              Concord took the complexity out of our 179D claims and delivered results that exceeded our expectations. Their team was responsive, thorough, and always available.
            </p>
            <footer className="mt-6 text-[14px]">
              <span className="text-[rgb(var(--ivory))] font-semibold">Director of Energy, university system</span>
              <span className="text-[rgb(var(--ivory))/0.55]"> · Illustrative client profile</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-ivory band">
        <div className="arch grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <ChapterHeaderInk chapter="Section V · FAQ" title="Common questions."
              lede="Everything you need to know about working with Concord and how we help organizations maximize their clean energy tax incentives." />
          </div>
          <ul className="lg:col-span-8 border-t border-[rgb(var(--ink))/0.15]">
            {faqs.map((f, i) => (
              <li key={f.question} className="border-b border-[rgb(var(--ink))/0.12] py-6">
                <details className="group">
                  <summary className="flex items-baseline gap-4 cursor-pointer list-none">
                    <span className="index-num shrink-0" style={{ color: 'rgba(8,12,10,0.55)' }}>Q/{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-[Fraunces] text-[20px] leading-tight tracking-tight flex-1" style={{ color: 'rgb(var(--ink))' }}>{f.question}</span>
                    <span aria-hidden="true" className="text-[rgb(var(--ink))/0.4] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 pl-12 text-[15px] leading-relaxed text-[rgb(var(--ink))/0.72]">{f.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AboutCTA title="Ready to work with the best?"
        body="Join the organizations that trust Concord to maximize their clean energy incentives and defend every dollar."
        primary={{ label: 'Start the Conversation', href: '/contact' }}
        secondary={{ label: 'Explore Services', href: '/179d-tax-deduction' }} />
    </AboutPageShell>
  );
}
