import { Link } from 'react-router-dom';
import { Quotes } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateOrganizationSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/seo';
import AboutPageShell, { AboutBreadcrumb, AboutHero, ChapterHeader, ChapterHeaderInk, AboutCTA } from '@/components/about/AboutPageShell';

const commitments = [
  { code: 'I',   title: 'Transparency',          body: 'Open reporting at every stage with no hidden fees. You will always know where your engagement stands, what we are working on, and exactly what you are paying for.' },
  { code: 'II',  title: 'Expertise',             body: 'Certified professionals who pursue continuous education. Our team stays ahead of evolving tax legislation so you benefit from the most current strategies available.' },
  { code: 'III', title: 'Responsiveness',        body: 'A 24-hour response guarantee backed by a dedicated team assigned to your account. When you need answers, we are already working on them.' },
  { code: 'IV',  title: 'Compliance First',      body: 'Audit-ready deliverables on every engagement. We engineer our documentation to withstand scrutiny, giving you confidence that every credit will hold up.' },
  { code: 'V',   title: 'Client Education',      body: 'Regular workshops, curated resources, and legislative updates. We empower your team with the knowledge to make informed decisions about energy incentives.' },
  { code: 'VI',  title: 'Long-term Partnership', body: 'Ongoing support that extends well beyond the initial engagement. As regulations evolve and new opportunities emerge, we are beside you every step of the way.' },
];

const delivery = [
  { num: '01', title: 'Discovery & Assessment',   body: 'We analyze your portfolio, identify every eligible incentive, and quantify the potential value across all applicable programs.' },
  { num: '02', title: 'Strategy Development',     body: 'Our engineers and tax experts craft a tailored roadmap that maximizes your credits while ensuring full regulatory compliance.' },
  { num: '03', title: 'Implementation & Filing',  body: 'We prepare audit-proof documentation, coordinate with your CPA, and manage the complete filing process from start to finish.' },
  { num: '04', title: 'Ongoing Support',          body: 'We monitor legislative changes, identify new opportunities, and provide lifetime audit defense for every engagement we deliver.' },
];

const metrics = [
  { value: '100%', label: 'Audit success rate',     sub: 'Across all engagements' },
  { value: '24 hr', label: 'Response time',         sub: 'Response time target' },
  { value: 'Audit-ready', label: 'Deliverable standard', sub: 'Every engagement' },
];

const faqs = [
  { question: 'What is the Concord Client Charter?', answer: 'The Client Charter is our formal commitment to six principles: transparency, expertise, responsiveness, compliance, client education, and long-term partnership. It guides every engagement we undertake, from the first conversation through years of ongoing support.' },
  { question: "What is Concord's response time guarantee?", answer: 'We guarantee a maximum 24-hour response time for all client inquiries. Every client is assigned a dedicated team, so when you need answers, we are already working on them.' },
  { question: 'Does Concord provide audit defense?', answer: 'Yes. Every deliverable is engineered to be audit ready, and we support our clients through examination. Our documentation is built to withstand IRS scrutiny and protect every credit we help you claim.' },
];

export default function ClientCharter() {
  return (
    <AboutPageShell>
      <SEOHead title="Client Charter | Concord Energy Strategies"
        description="The Concord Client Charter: our formal commitment to transparency, expertise, responsiveness, and long-term partnership with every client we serve."
        canonical="/client-charter" />
      <SchemaScript schema={generateOrganizationSchema()} />
      <SchemaScript schema={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/why-us' }, { name: 'Client Charter' }])} />
      <SchemaScript schema={generateFAQSchema(faqs)} />

      <AboutBreadcrumb current="Client Charter" />
      <AboutHero
        code="A/04 · CHARTER"
        eyebrow="Our commitment"
        title={<>Our <em className="italic font-light">Client Charter.</em></>}
        lede="A commitment to excellence, transparency, and your success. The Charter represents the principles and standards we hold ourselves to on every engagement."
        primaryCta={{ label: 'Start the Conversation', href: '/contact' }}
        secondaryCta={{ label: 'Read the commitments', href: '#commitments' }}
        meta={[
          { label: 'Document', value: 'CES-CC-01' },
                    { label: 'Revision', value: '2026' },
        ]}
      />

      {/* Preamble — formal charter opening */}
      <section className="surface-paper band">
        <div className="arch max-w-3xl">
          <p className="tech-label mb-4" style={{ color: 'rgb(var(--concord))' }}>Preamble</p>
          <div className="border-t border-b border-[rgb(var(--ink))/0.15] py-10 space-y-6">
            <p className="font-[Fraunces] text-[22px] lg:text-[26px] leading-snug text-[rgb(var(--ink))]">
              At Concord Energy Strategies, our clients are at the center of everything we do. This charter represents the principles and standards we hold ourselves to on every engagement.
            </p>
            <p className="text-[16px] leading-relaxed text-[rgb(var(--ink))/0.75]">
              It is not merely a statement of intent; it is a binding commitment that guides our team from the first conversation through years of ongoing partnership. We believe that navigating complex clean energy tax incentives requires more than technical expertise. It demands a consulting partner who operates with radical transparency, unwavering accountability, and a genuine investment in your long-term success.
            </p>
          </div>
          <p className="mt-6 tech-label tech-label--dim">Signed · The Partners of Concord Energy Strategies</p>
        </div>
      </section>

      {/* Six articles — formal charter document layout */}
      <section id="commitments" className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Articles · The six commitments" title="What we stand for." />
          <ol className="border-t border-[rgb(var(--ink))/0.20]">
            {commitments.map((c, i) => (
              <li key={c.code} className="grid grid-cols-12 gap-6 py-8 border-b border-[rgb(var(--ink))/0.15]">
                <div className="col-span-12 md:col-span-2">
                  <p className="tech-label" style={{ color: 'rgb(var(--concord))' }}>Article {c.code}</p>
                  <p className="index-num mt-2" style={{ color: 'rgba(8,12,10,0.55)' }}>0{i + 1} / 06</p>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h3 className="font-[Fraunces] text-[26px] leading-tight" style={{ color: 'rgb(var(--ink))' }}>{c.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[rgb(var(--ink))/0.75] max-w-3xl">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimony inline in the document */}
      <section className="surface-graphite band-sm">
        <div className="arch max-w-3xl">
          <p className="tech-label mb-4">Endorsement</p>
          <blockquote className="border-l-2 border-[rgb(var(--concord))] pl-8">
            <Quotes size={28} weight="fill" className="text-[rgb(var(--concord))/0.5] mb-4" aria-hidden="true" />
            <p className="font-[Fraunces] italic text-[22px] lg:text-[26px] leading-snug text-[rgb(var(--ivory))]">
              Concord took the complexity out of our 179D claims and delivered results that exceeded our expectations. Their team was responsive, thorough, and always available.
            </p>
            <footer className="mt-6 text-[14px] text-[rgb(var(--ivory))/0.7]">
              <span className="text-[rgb(var(--ivory))] font-semibold">Controller, healthcare network</span> · Illustrative client profile
            </footer>
          </blockquote>
        </div>
      </section>

      {/* How we deliver — four-step index */}
      <section className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Schedule A · Delivery" title="How we deliver on the Charter." />
          <ol className="grid md:grid-cols-2 border-t border-[rgb(var(--ink))/0.15]">
            {delivery.map((d) => (
              <li key={d.num} className="p-8 border-b border-[rgb(var(--ink))/0.12] md:[&:nth-child(odd)]:border-r">
                <p className="font-[Fraunces] text-[48px] leading-none text-[rgb(var(--concord))]">{d.num}</p>
                <h3 className="mt-4 font-[Fraunces] text-[22px]" style={{ color: 'rgb(var(--ink))' }}>{d.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[rgb(var(--ink))/0.75] max-w-md">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Accountability metrics */}
      <section className="surface-ink band">
        <div className="arch">
          <ChapterHeader chapter="Schedule B · Accountability" title="Accountability in action."
            lede="We do not just make promises. We measure our performance against them. These figures reflect the standards outlined in this Charter." />
          <dl className="grid md:grid-cols-3 border-t border-[rgb(var(--ivory))/0.15]">
            {metrics.map((m) => (
              <div key={m.label} className="p-8 border-b md:border-b-0 md:border-r border-[rgb(var(--ivory))/0.12] last:md:border-r-0">
                <dd className="font-[Fraunces] text-[64px] leading-none text-[rgb(var(--concord-glow))]">{m.value}</dd>
                <dt className="mt-4 font-[Fraunces] text-[18px] text-[rgb(var(--ivory))]">{m.label}</dt>
                <p className="mt-1 text-[13px] text-[rgb(var(--ivory))/0.6]">{m.sub}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-ivory band">
        <div className="arch grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <ChapterHeaderInk chapter="Section · Questions" title="About our Charter." />
          </div>
          <ul className="lg:col-span-8 border-t border-[rgb(var(--ink))/0.15]">
            {faqs.map((f, i) => (
              <li key={f.question} className="border-b border-[rgb(var(--ink))/0.12] py-6">
                <details className="group">
                  <summary className="flex items-baseline gap-4 cursor-pointer list-none">
                    <span className="index-num shrink-0" style={{ color: 'rgba(8,12,10,0.55)' }}>Q/{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-[Fraunces] text-[20px] leading-tight flex-1" style={{ color: 'rgb(var(--ink))' }}>{f.question}</span>
                    <span aria-hidden="true" className="text-[rgb(var(--ink))/0.4] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 pl-12 text-[15px] leading-relaxed text-[rgb(var(--ink))/0.72]">{f.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AboutCTA title="Experience the Concord difference."
        body="Ready to work with a partner committed to your success? Start the conversation and see the Charter in action."
        primary={{ label: 'Start the Conversation', href: '/contact' }}
        secondary={{ label: 'The Concord Standard', href: '/the-concord-standard' }} />
    </AboutPageShell>
  );
}
