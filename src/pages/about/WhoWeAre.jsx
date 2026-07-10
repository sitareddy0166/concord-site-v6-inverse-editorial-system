import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateOrganizationSchema, generateBreadcrumbSchema, generateAboutPageSchema } from '@/utils/seo';
import AboutPageShell, { AboutBreadcrumb, AboutHero, ChapterHeader, ChapterHeaderInk, AboutCTA } from '@/components/about/AboutPageShell';
import { PortraitGlyph, BuildingElevation } from '@/components/about/BlueprintFigure';

const expertise = [
  { code: 'X/01', title: 'Tax Advisory & Compliance',           body: 'Strategic guidance on federal energy tax incentives, IRS compliance, and audit-ready documentation for 179D, ITC, PTC, and Direct Pay claims.' },
  { code: 'X/02', title: 'Engineering & Energy Modeling',       body: 'ASHRAE 90.1-compliant energy simulations, DOE-2 modeling, and licensed professional certifications for qualifying improvements.' },
  { code: 'X/03', title: 'Legislative & Policy Analysis',       body: 'Real-time monitoring of IRS rulings, Treasury guidance, and legislative developments that affect clean energy incentive eligibility.' },
  { code: 'X/04', title: 'Technology & Data Analytics',         body: 'Proprietary software that automates document processing, identifies qualifying improvements, and accelerates study delivery.' },
  { code: 'X/05', title: 'Audit Defense & Documentation',       body: 'Comprehensive, IRS-compliant report packages and dedicated audit support with an industry-leading success track record across all engagements.' },
  { code: 'X/06', title: 'Client Success & Project Management', body: 'Dedicated project managers who coordinate cross-functional teams and ensure every dollar of eligible savings is captured.' },
];

const values = [
  { code: 'V/01', title: 'Integrity',  body: 'Honest, transparent advice grounded in current law. Our clients trust us because we never overstate eligibility.' },
  { code: 'V/02', title: 'Excellence', body: 'We hold ourselves to the highest standards in everything we do, from energy modeling to audit-ready deliverables.' },
  { code: 'V/03', title: 'Innovation', body: 'Our proprietary technology and refined processes deliver faster, more accurate results than traditional approaches.' },
  { code: 'V/04', title: 'Service',    body: 'The client comes first. We build long-term partnerships by making complex tax incentives accessible and results-driven.' },
];

const stats = [
  { value: '$1B+',   label: 'Client savings secured' },
  { value: '100%',   label: 'Audit success rate' },
  { value: '1,000+', label: 'Buildings evaluated / yr' },
  { value: '15+',    label: 'Years of clean energy focus' },
];

const leadership = [
  { initials: 'DS', name: 'Dennis J. Stilger, Jr.', role: 'Founder & Principal',
    bio: 'Dennis founded Concord in 2009 and has been instrumental in shaping federal energy tax policy. As Co-Chair of the Coalition for Energy Efficient Jobs & Investment, he played a central role in lobbying Section 179D into permanent law.' },
  { initials: 'JD', name: 'Jonathan Darnell', role: 'Managing Partner',
    bio: 'Jonathan leads client engagements and oversees business development for Concord. With deep expertise in 179D, transferable tax credits, and Direct Pay compliance, he has helped clients realize over $1 billion in federal tax savings.' },
];

export default function WhoWeAre() {
  const org = generateOrganizationSchema();
  return (
    <AboutPageShell>
      <SEOHead title="Who We Are | Concord Energy Strategies"
        description="Meet the Concord Energy Strategies team. Founded 2009, $1B+ in client tax savings secured, 15+ years focused on clean energy incentive compliance."
        canonical="/who-we-are" />
      <SchemaScript schema={org} />
      <SchemaScript schema={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/why-us' }, { name: 'Who We Are' }])} />
      <SchemaScript schema={generateAboutPageSchema({ name: 'Who We Are | Concord Energy Strategies', description: 'Meet the Concord Energy Strategies team behind $1B+ in client tax savings.', url: '/who-we-are', about: org })} />

      <AboutBreadcrumb current="Who We Are" />
      <AboutHero
        code="A/02 · WHO WE ARE"
        eyebrow="Est. 2009 · Louisville, KY"
        title={<>The people behind <em className="italic font-light">the results.</em></>}
        lede="Concord brings together tax advisors, licensed engineers, policy analysts, and technologists who share a single mission: helping organizations claim every dollar of federal clean energy tax incentives they have earned."
        primaryCta={{ label: 'Start the Conversation', href: '/contact' }}
        secondaryCta={{ label: 'Meet the team', href: '#leadership' }}
        meta={[
          { label: 'Founded', value: '2009' },
          { label: 'Practice', value: 'Clean energy tax' },
          { label: 'Headquarters', value: 'Louisville, KY' },
        ]}
      />

      {/* Mission — long-form profile */}
      <section className="surface-ivory band">
        <div className="arch grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="tech-label mb-4" style={{ color: 'rgb(var(--concord))' }}>Section I · Origin</p>
            <h2 className="h-lead" style={{ color: 'rgb(var(--ink))' }}>Why we started Concord.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] leading-relaxed text-[rgb(var(--ink))/0.78]">
            <p>We set out to change the way businesses claim federal tax incentives. Our founding team saw an industry failing its clients: incentives going unclaimed, compliance gaps creating audit risk, and building owners leaving money on the table.</p>
            <p>Concord was founded to fix that. We built a firm from the ground up that combines deep tax advisory expertise with licensed engineering capabilities, proprietary technology, and a relentless focus on audit-ready documentation.</p>
          </div>
        </div>
      </section>

      {/* Leadership — two-column editorial profiles */}
      <section id="leadership" className="surface-ink band">
        <div className="arch">
          <ChapterHeader chapter="Section II · Leadership" title="Principals of the firm."
            lede="Two-partner leadership brings decades of combined experience across tax advisory, engineering, policy, and technology." />
          <div className="grid lg:grid-cols-2 gap-10 border-t border-[rgb(var(--ivory))/0.12] pt-10">
            {leadership.map((p, i) => (
              <article key={p.initials} className="grid grid-cols-12 gap-6">
                <div className="col-span-4"><PortraitGlyph initials={p.initials} label={`${p.name}, ${p.role}`} /></div>
                <div className="col-span-8">
                  <p className="index-num">P/{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 font-[Fraunces] text-[28px] leading-tight text-[rgb(var(--ivory))]">{p.name}</h3>
                  <p className="tech-label tech-label--brass mt-1">{p.role}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-[rgb(var(--ivory))/0.75]">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-[rgb(var(--ivory))/0.12] flex flex-wrap items-baseline justify-between gap-4">
            <p className="text-[15px] text-[rgb(var(--ivory))/0.7] max-w-xl">Ready to work with our leadership team? Schedule a conversation to discuss your organization's incentive opportunities.</p>
            <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="btn btn-primary">Start the Conversation <ArrowRight size={14} weight="bold" /></a>
          </div>
        </div>
      </section>

      {/* Expertise — 6 disciplines */}
      <section className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section III · What we bring" title="Multidisciplinary expertise."
            lede="Clean energy tax incentives sit at the intersection of tax law, engineering, and public policy. Concord is built to cover every dimension." />
          <ol className="grid md:grid-cols-2 border-t border-[rgb(var(--ink))/0.15]">
            {expertise.map((x) => (
              <li key={x.code} className="grid grid-cols-12 gap-4 items-baseline p-6 border-b border-[rgb(var(--ink))/0.12] md:[&:nth-child(odd)]:border-r">
                <span className="col-span-2 index-num" style={{ color: 'rgba(8,12,10,0.55)' }}>{x.code}</span>
                <div className="col-span-10">
                  <h3 className="font-[Fraunces] text-[22px] leading-tight" style={{ color: 'rgb(var(--ink))' }}>{x.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[rgb(var(--ink))/0.72]">{x.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="surface-ink band">
        <div className="arch">
          <ChapterHeader chapter="Section IV · What guides us" title="Our values." />
          <div className="grid md:grid-cols-4 border-t border-[rgb(var(--ivory))/0.12]">
            {values.map((v) => (
              <div key={v.code} className="p-6 border-b md:border-b-0 md:border-r border-[rgb(var(--ivory))/0.12] last:md:border-r-0">
                <p className="index-num">{v.code}</p>
                <h3 className="mt-4 font-[Fraunces] text-[24px] text-[rgb(var(--ivory))]">{v.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[rgb(var(--ivory))/0.72]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="surface-graphite band-sm">
        <div className="arch">
          <ChapterHeader chapter="Section V · Track record" title="Concord by the numbers." />
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-[rgb(var(--ivory))/0.12]">
            {stats.map((s) => (
              <div key={s.label} className="p-6 border-b lg:border-b-0 lg:border-r border-[rgb(var(--ivory))/0.12] last:lg:border-r-0">
                <dd className="font-[Fraunces] text-[42px] lg:text-[56px] leading-none text-[rgb(var(--concord-glow))]">{s.value}</dd>
                <dt className="mt-3 tech-label tech-label--dim">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <AboutCTA title="Join the organizations we have helped."
        body="Whether you are a building owner, CPA firm, or tax-exempt organization, Concord can help you capture every incentive you deserve."
        primary={{ label: 'Start the Conversation', href: '/contact' }}
        secondary={{ label: 'Explore Services', href: '/179d-tax-deduction' }} />
    </AboutPageShell>
  );
}
