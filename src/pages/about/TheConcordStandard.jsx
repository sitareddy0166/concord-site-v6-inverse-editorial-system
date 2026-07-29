import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateOrganizationSchema, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/utils/seo';
import AboutPageShell, { AboutBreadcrumb, AboutHero, ChapterHeader, ChapterHeaderInk, AboutCTA } from '@/components/about/AboutPageShell';
import StickyNav from '@/components/layout/StickyNav';

const stages = [
  { num: '01', title: 'Assessment',            body: 'We evaluate eligibility across every applicable federal incentive, identifying opportunities that generalist advisors miss.' },
  { num: '02', title: 'Roadmap',               body: 'A project-specific compliance roadmap detailing every milestone, deliverable, and deadline.' },
  { num: '03', title: 'Compliance Management', body: 'Real-time tracking through Concord Caisson keeps every document, deadline, and requirement on schedule.' },
  { num: '04', title: 'Substantiation',        body: 'Detailed technical reports and certifications built to withstand IRS scrutiny.' },
  { num: '05', title: 'Monetization',          body: 'IRS election filings, pre-registration, credit transfer facilitation, and Direct Pay applications.' },
  { num: '06', title: 'Continuation',          body: 'Monitoring through the full recapture window with audit defense included as standard.' },
];

const caissonFeatures = [
  { code: 'K/01', title: 'Real-Time Dashboard',     body: 'Live compliance visibility into every project, incentive, and deadline.' },
  { code: 'K/02', title: 'Document Management',     body: 'All certifications and reports stored in one secure repository with version control.' },
  { code: 'K/03', title: 'Deadline Tracking',       body: 'Automated alerts keep filing deadlines and compliance milestones from getting missed.' },
  { code: 'K/04', title: 'Audit-Ready Architecture', body: 'Every document organized for immediate IRS examination.' },
  { code: 'K/05', title: 'Collaborative Workflows', body: 'Your team, CPA, and Concord on the same platform with role-based access.' },
  { code: 'K/06', title: 'Portfolio Analytics',     body: 'Track credit values, filing statuses, and monetization across your portfolio.' },
];

const differentiators = [
  { title: 'vs. Traditional CPA Firms', items: ['Deep focus on tax incentives, not generalist practice', 'Proprietary Caisson platform for real-time tracking', 'Audit defense included as standard', 'IRS examination-grade technical reports'] },
  { title: 'vs. In-House Teams',         items: ['Immediate capacity across all incentive programs', '15+ years of evolving IRS and Treasury guidance', 'Purpose-built compliance platform included', 'Performance-aligned fee structures'] },
  { title: 'vs. Other Consultants',      items: ['End-to-end: assessment through audit defense', 'Full recapture period monitoring and support', '15+ years, more than $1 billion in client savings', 'Single point of responsibility for entire lifecycle'] },
];

const caseStudies = [
  { amount: '$12M+', label: 'Credits Captured',      title: 'National Solar Developer',    body: 'Concord managed compliance across a 40-project solar portfolio, identifying overlooked PWA documentation gaps and recovering credits that would have been forfeited.', tags: ['ITC', 'PWA', 'Direct Pay'] },
  { amount: '$3.2M', label: 'Direct Pay Received',   title: 'University Medical Center',   body: 'A major university hospital leveraged the Concord Standard to claim Direct Pay on a campus-wide energy retrofit, delivering a Treasury payment within one filing cycle.', tags: ['179D', 'Direct Pay', 'Tax-Exempt'] },
  { amount: '$8.5M', label: 'R&D Credits Claimed',   title: 'Manufacturing Conglomerate',  body: 'A multi-facility manufacturer engaged Concord to assess R&D credit eligibility across six divisions, resulting in current-year and retroactive credits.', tags: ['R&D Credits', 'Retroactive', 'Audit Defense'] },
];

const faqs = [
  { question: 'What is the Concord Standard?', answer: 'Our proprietary end-to-end compliance framework covering every phase from eligibility assessment through monetization and audit defense.' },
  { question: 'How long does the process take?', answer: 'Single-project engagements typically take four to six weeks. Multi-project portfolios take eight to twelve weeks for initial substantiation.' },
  { question: 'What is Concord Caisson?', answer: 'Our proprietary technology platform powering real-time compliance tracking, document management, and portfolio analytics.' },
  { question: 'Is audit defense included?', answer: 'Yes. Audit defense is standard with every engagement. If the IRS examines any credit Concord substantiated, we manage the response.' },
  { question: 'Can it apply to projects already underway?', answer: 'Yes. We regularly engage with projects at every stage and conduct gap analyses to identify missing documentation.' },
  { question: 'How does Concord charge?', answer: 'Performance-aligned fee structures designed to minimize upfront risk. Detailed proposals provided after initial assessment.' },
];

const navItems = [
  { href: '#framework', label: 'Framework' },
  { href: '#process',   label: 'Six-Stage Process' },
  { href: '#caisson',   label: 'Concord Caisson' },
  { href: '#why',       label: 'Why Concord' },
  { href: '#results',   label: 'Results' },
  { href: '#faq',       label: 'FAQ' },
];

/**
 * StageRail — sticky vertical progression showing which of the six
 * stages the reader is currently viewing, with line-drawn markers.
 */
function StageRail({ activeIndex }) {
  return (
    <div className="sticky top-[128px]">
      <p className="tech-label mb-6" style={{ color: 'rgb(var(--concord))' }}>The Standard · 06 stages</p>
      <ol className="relative">
        <span aria-hidden="true" className="absolute left-[14px] top-2 bottom-2 w-px bg-[rgb(var(--ink))/0.15]" />
        {stages.map((s, i) => {
          const active = i === activeIndex;
          const past = i < activeIndex;
          return (
            <li key={s.num} className="relative pl-10 py-3">
              <span
                aria-hidden="true"
                className={`absolute left-[6px] top-4 w-4 h-4 border transition-colors ${
                  active ? 'bg-[rgb(var(--concord))] border-[rgb(var(--concord))]' :
                  past   ? 'bg-[rgb(var(--ink))/0.4] border-[rgb(var(--ink))/0.4]' :
                           'bg-[rgb(var(--paper))] border-[rgb(var(--ink))/0.35]'
                }`}
              />
              <p className={`index-num transition-colors ${active ? 'text-[rgb(var(--concord))]' : ''}`} style={{ color: active ? undefined : 'rgba(8,12,10,0.45)' }}>Stage {s.num}</p>
              <p className={`font-[Fraunces] text-[18px] leading-tight transition-colors ${active ? 'text-[rgb(var(--ink))]' : 'text-[rgb(var(--ink))/0.55]'}`}>{s.title}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function TheConcordStandard() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef([]);

  useEffect(() => {
    const compute = () => {
      const y = window.scrollY + 200;
      let idx = 0;
      stageRefs.current.forEach((el, i) => { if (el && el.offsetTop <= y) idx = i; });
      setActiveStage(idx);
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    return () => window.removeEventListener('scroll', compute);
  }, []);

  return (
    <AboutPageShell>
      <SEOHead title="The Concord Standard | Concord Energy Strategies"
        description="The Concord Standard: our proprietary 6-step compliance framework for federal clean energy tax incentives, from assessment through IRS audit defense."
        canonical="/the-concord-standard" />
      <SchemaScript schema={generateOrganizationSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/why-us' }, { name: 'The Concord Standard' }])} />
      <SchemaScript schema={generateServiceSchema({ name: 'The Concord Standard', description: 'A proprietary, end-to-end compliance management framework for federal tax incentives.', url: '/the-concord-standard' })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />

      <AboutBreadcrumb current="The Concord Standard" />
      <AboutHero
        code="A/03 · THE STANDARD"
        eyebrow="Our framework"
        title={<>The Concord <em className="italic font-light">Standard.</em></>}
        lede="A compliance framework built so nothing gets missed and every incentive dollar gets claimed. Developed over 15 years of practice, this is the process behind more than $1 billion in client savings."
        primaryCta={{ label: 'Start the Conversation', href: '/contact' }}
        secondaryCta={{ label: 'See the six stages', href: '#process' }}
        meta={[
          { label: 'Stages', value: '06' },
          { label: 'Platform', value: 'Concord Caisson' },
          { label: 'Audit defense', value: 'Included' },
        ]}
      />

      <StickyNav items={navItems} />

      {/* Framework */}
      <section id="framework" className="surface-ivory band">
        <div className="arch grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="tech-label mb-4" style={{ color: 'rgb(var(--concord))' }}>Section I · Framework</p>
            <h2 className="h-lead" style={{ color: 'rgb(var(--ink))' }}>What is the Concord Standard?</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] leading-relaxed text-[rgb(var(--ink))/0.78]">
            <p>The Concord Standard is a proprietary, end-to-end compliance management framework developed over more than 15 years of specialized practice. It identifies qualifying incentives, tracks each compliance requirement, and builds the record to defend every credit dollar.</p>
            <p>Unlike ad-hoc consulting approaches, the Concord Standard covers the full incentive lifecycle. It is powered by our proprietary technology platform, <strong className="text-[rgb(var(--ink))]">Concord Caisson</strong>, which provides real-time visibility into compliance status across every project in your portfolio.</p>
          </div>
        </div>
      </section>

      {/* Six-stage progression — sticky rail + one panel per stage */}
      <section id="process" className="surface-paper band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section II · The 06-stage process" title="Six stages, one continuous chain of custody." />
          <div className="grid lg:grid-cols-12 gap-10 border-t border-[rgb(var(--ink))/0.15] pt-10">
            <aside className="lg:col-span-4 hidden lg:block"><StageRail activeIndex={activeStage} /></aside>
            <ol className="lg:col-span-8 space-y-16">
              {stages.map((s, i) => (
                <li key={s.num} ref={(el) => (stageRefs.current[i] = el)} className="relative">
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-2">
                      <span className="font-[Fraunces] text-[64px] leading-none text-[rgb(var(--concord))]">{s.num}</span>
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-[Fraunces] text-[32px] leading-tight" style={{ color: 'rgb(var(--ink))' }}>{s.title}</h3>
                      <p className="mt-4 text-[17px] leading-relaxed text-[rgb(var(--ink))/0.75] max-w-2xl">{s.body}</p>
                      {/* line-drawn stage marker */}
                      <svg className="mt-6 w-full max-w-lg" viewBox="0 0 400 40" aria-hidden="true">
                        <line x1="0" y1="20" x2="400" y2="20" stroke="rgb(var(--ink))" strokeOpacity="0.15" />
                        <line x1="0" y1="20" x2={((i + 1) / stages.length) * 400} y2="20" stroke="rgb(61,163,93)" strokeWidth="2" />
                        {stages.map((_, k) => (
                          <circle key={k} cx={(k / (stages.length - 1)) * 400} cy="20" r={k === i ? '6' : '3'} fill={k <= i ? 'rgb(61,163,93)' : 'rgb(var(--ink))'} fillOpacity={k <= i ? 1 : 0.35} />
                        ))}
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Concord Caisson */}
      <section id="caisson" className="surface-ink band">
        <div className="arch">
          <ChapterHeader chapter="Section III · Technology" title="The Concord Caisson platform."
            lede="The Concord Standard is powered by Caisson, our proprietary technology platform purpose-built for tax incentive compliance management." />
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-[rgb(var(--ivory))/0.12]">
            {caissonFeatures.map((f) => (
              <li key={f.code} className="p-6 border-b lg:border-b-0 border-[rgb(var(--ivory))/0.12] lg:[&:not(:nth-child(3n))]:border-r [&:not(:last-child)]:md:[&:nth-child(2n)]:lg:border-r-0">
                <p className="index-num">{f.code}</p>
                <h3 className="mt-3 font-[Fraunces] text-[20px] text-[rgb(var(--ivory))]">{f.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[rgb(var(--ivory))/0.72]">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What makes it different */}
      <section id="why" className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section IV · Why Concord" title="What makes it different."
            lede="The Concord Standard was built to solve the problems we saw repeatedly when clients came to us after working with generalist advisors or in-house teams." />
          <div className="grid lg:grid-cols-3 border-t border-[rgb(var(--ink))/0.15]">
            {differentiators.map((d, i) => (
              <div key={d.title} className="p-8 border-b lg:border-b-0 lg:border-r border-[rgb(var(--ink))/0.12] last:lg:border-r-0">
                <p className="index-num" style={{ color: 'rgba(8,12,10,0.55)' }}>W/{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-[Fraunces] text-[22px] leading-tight" style={{ color: 'rgb(var(--ink))' }}>{d.title}</h3>
                <ul className="mt-5 space-y-3">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-3 text-[14px] text-[rgb(var(--ink))/0.75]">
                      <span className="text-[rgb(var(--concord))]" aria-hidden="true">→</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results — case studies as editorial index */}
      <section id="results" className="surface-graphite band">
        <div className="arch">
          <ChapterHeader chapter="Section V · Results" title="The Concord Standard in action." />
          <ol className="border-t border-[rgb(var(--ivory))/0.12]">
            {caseStudies.map((c, i) => (
              <li key={c.title} className="grid lg:grid-cols-12 gap-6 items-baseline py-8 border-b border-[rgb(var(--ivory))/0.10]">
                <span className="lg:col-span-1 index-num">R/{String(i + 1).padStart(2, '0')}</span>
                <div className="lg:col-span-3">
                  <p className="font-[Fraunces] text-[36px] leading-none text-[rgb(var(--concord-glow))]">{c.amount}</p>
                  <p className="tech-label tech-label--brass mt-2">{c.label}</p>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-[Fraunces] text-[22px] text-[rgb(var(--ivory))]">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[rgb(var(--ivory))/0.72]">{c.body}</p>
                </div>
                <div className="lg:col-span-2 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="tech-label border border-[rgb(var(--ivory))/0.25] px-2 py-1">{t}</span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="surface-ivory band">
        <div className="arch grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <ChapterHeaderInk chapter="Section VI · FAQ" title="Frequently asked questions." />
            <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="btn btn-dark mt-2 inline-flex" style={{ color: 'rgb(var(--ivory))' }}>
              Book a discovery call <ArrowRight size={14} weight="bold" />
            </a>
          </div>
          <ul className="lg:col-span-8 border-t border-[rgb(var(--ink))/0.15]">
            {faqs.map((f, i) => (
              <li key={f.question} className="border-b border-[rgb(var(--ink))/0.12] py-6">
                <details className="group" open={i === 0}>
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

      <AboutCTA title="See the Concord Standard in action."
        body="Every engagement starts with a conversation. Tell us about your projects and we will show you what the Concord Standard can deliver."
        primary={{ label: 'Start the Conversation', href: '/contact' }}
        secondary={{ label: 'Explore Services', href: '/179d-tax-deduction' }} />
    </AboutPageShell>
  );
}
