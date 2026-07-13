import { Link } from 'react-router-dom';
import {
  Certificate, ChartLineUp, ShieldCheck, Trophy, Warning,
} from '@phosphor-icons/react';
import {
  SEOHead, SchemaScript,
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateWebPageSchema, generateSpeakableSchema,
} from '@/utils/seo';
import StickyNav from '@/components/layout/StickyNav';
import ServiceHero from '@/components/sections/ServiceHero';
import VideoExplainer from '@/components/sections/VideoExplainer';
import ServicePageShell from '@/components/service/ServicePageShell';
import {
  SharedServiceFAQ, ServiceFinalCTA, RelatedServices,
  ServiceSectionHeader, ServiceFactsRail, ServiceMediaSplit,
  ServiceAudienceGrid, ServiceEligibilityIndex, ServiceProcess,
  ServiceDocumentIndex, ServiceComparison, ServiceEvidence,
} from '@/components/service';


const stickyNavItems = [
  { label: 'What Is PWA?', href: '#what-is-pwa' },
  { label: 'Incentives', href: '#incentives' },
  { label: 'Why Concord', href: '#why-concord' },
  { label: 'Our Process', href: '#process' },
  { label: 'Guarantee', href: '#guarantee' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  {
    question: 'What is Prevailing Wage and Apprenticeship (PWA) compliance?',
    answer: 'PWA compliance refers to meeting the prevailing wage and apprenticeship requirements established by the Inflation Reduction Act (IRA). Projects that meet these requirements qualify for the enhanced 5x bonus multiplier on clean energy tax credits, increasing incentives by up to 400%.',
  },
  {
    question: 'Which tax credits require PWA compliance for the bonus rate?',
    answer: 'PWA compliance is required for the bonus rate on 179D, ITC (Sections 48 & 48E), PTC (Sections 45 & 45Y), 45Q carbon capture credits, and 45V clean hydrogen credits. Without compliance, projects receive only the base rate, which is one-fifth of the full credit.',
  },
  {
    question: 'What happens if my project fails to meet PWA requirements?',
    answer: 'If your project fails to meet PWA requirements, you receive only the base credit rate, which is one-fifth (1/5) of the bonus rate. For example, the ITC drops from 30% to just 6%. Additionally, projects that begin meeting requirements but fail to maintain compliance may face correction payments and penalties.',
  },
  {
    question: 'When did PWA requirements take effect?',
    answer: 'PWA requirements apply to projects that began construction on or after January 29, 2023 (60 days after the IRS published initial guidance). Projects that began construction before this date are generally exempt from PWA requirements for the bonus rate.',
  },
  {
    question: 'What are the apprenticeship requirements for PWA compliance?',
    answer: 'Projects must ensure that a percentage of total labor hours are performed by qualified apprentices from registered apprenticeship programs. The requirement started at 12.5% for projects beginning in 2023 and increased to 15% for projects beginning in 2024 and beyond.',
  },
  {
    question: 'How does Concord help with PWA compliance?',
    answer: 'Concord provides end-to-end PWA compliance management including wage determination analysis, payroll monitoring, apprenticeship tracking, real-time compliance dashboards, documentation management, and audit defense support. Our 100% compliance rate ensures your project captures the full bonus multiplier.',
  },
  {
    question: 'What documentation is required through the recapture period?',
    answer: 'PWA compliance requires certified payroll records, wage rate determinations, apprenticeship registrations, and hour-by-hour labor tracking maintained through the full recapture window. Concord centralizes this documentation in the Concord Caisson platform so records are audit-ready if the IRS examines the project years after placed-in-service.',
  },
  {
    question: 'Can PWA correction procedures cure a non-compliant project?',
    answer: 'Yes. IRA correction procedures allow projects to cure prevailing wage shortfalls through back-wage payments and cure apprenticeship deficiencies through good-faith effort documentation. Concord identifies compliance gaps early and manages the correction filings so projects preserve access to the 5x bonus multiplier.',
  },
];

const tabData = [
  { id: '179d', label: '179D', baseRate: '$0.50/sqft', bonusRate: '$5.00/sqft', bonusNote: 'With PWA compliance (up to $5.94)' },
  { id: 'itc', label: 'ITC (48 & 48E)', baseRate: '6%', bonusRate: '30%', bonusNote: 'With PWA compliance (up to 50% with adders)' },
  { id: 'ptc', label: 'PTC (45 & 45Y)', baseRate: '0.55\u00A2/kWh', bonusRate: '2.75\u00A2/kWh', bonusNote: 'With PWA compliance' },
  { id: '45q', label: '45Q', baseRate: '$17/ton', bonusRate: '$85/ton', bonusNote: 'With PWA compliance (geological storage)' },
  { id: '45v', label: '45V', baseRate: '$0.60/kg', bonusRate: '$3.00/kg', bonusNote: 'With PWA compliance (lowest emissions tier)' },
];

const serviceSchema = generateServiceSchema({
  name: 'PWA Compliance Consulting',
  description: 'Prevailing Wage and Apprenticeship compliance consulting to unlock the 5x bonus multiplier on IRA clean energy tax credits.',
  url: '/prevailing-wage-apprenticeship',
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#services' },
  { name: 'PWA Compliance', url: '/prevailing-wage-apprenticeship' },
]);

const processSteps = [
  { step: '01', title: 'Initial Assessment', desc: 'We evaluate your project scope, timeline, and workforce structure to determine PWA requirements and create a tailored compliance roadmap.', img: null, alt: 'Construction site assessment with compliance data analysis' },
  { step: '02', title: 'Wage Rate Determination', desc: 'We analyze Department of Labor wage determinations for your specific project location and trade classifications, verifying prevailing wage rates and fringe benefits.', alt: 'Financial spreadsheets showing prevailing wage rate analysis' },
  { step: '03', title: 'Apprenticeship Setup', desc: 'We coordinate with registered apprenticeship programs, manage labor hour ratios, and ensure your project meets or exceeds the required apprenticeship thresholds.', img: null, alt: 'Team collaborating on apprenticeship program setup and training coordination' },
  { step: '04', title: 'Monitoring & Reporting', desc: 'Our real-time monitoring platform provides continuous visibility into compliance status. Automated alerts flag potential deviations before they become problems.', img: null, alt: 'Compliance monitoring dashboard showing real-time wage tracking metrics' },
  { step: '05', title: 'Documentation & Filing', desc: 'We build comprehensive, IRS-ready documentation packages with certified payroll records, apprenticeship logs, and wage determination analyses assembled throughout construction.', img: null, alt: 'Professional reviewing certified payroll compliance documents' },
  { step: '06', title: 'Audit Support', desc: 'If the IRS examines your credit claim, our team steps in with organized, defensible documentation and direct support throughout the audit process to protect your full credit amount.', img: null, alt: 'Tax professionals reviewing audit documentation and compliance records' },
];

const guaranteeItems = [
  'Full prevailing wage rate analysis for every trade classification on your project',
  'Apprenticeship program coordination and hour tracking from day one',
  'Certified payroll review on every pay period throughout construction',
  'Real-time compliance monitoring with automated deviation alerts',
  'IRS-ready documentation packages assembled and maintained throughout',
  'Full audit defense support if the IRS examines your credit claim',
];

export default function PWA() {
  return (
    <ServicePageShell>
      <SEOHead
        title="PWA Compliance | Concord Energy Strategies"
        description="Prevailing Wage and Apprenticeship compliance for clean energy projects. Unlock the 5x IRA bonus multiplier with Concord and our 100% audit success rate."
        canonical="/prevailing-wage-apprenticeship"
      />
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={generateWebPageSchema({ name: 'PWA Compliance | Concord Energy Strategies', description: 'Prevailing Wage and Apprenticeship Compliance', url: '/prevailing-wage-apprenticeship' })} />
      <SchemaScript schema={generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts'])} />
      <SchemaScript schema={generateHowToSchema({
        name: 'How to Achieve PWA Compliance',
        description: "Concord's process to unlock the 5x IRA bonus multiplier through Prevailing Wage and Apprenticeship compliance.",
        steps: [
          { title: 'Project Assessment', description: 'Review labor plan, wage determinations, and apprenticeship requirements.' },
          { title: 'Wage & Fringe Monitoring', description: 'Track prevailing wage payments and fringe benefits across contractors.' },
          { title: 'Apprenticeship Documentation', description: 'Verify apprentice hours and ratios meet IRA thresholds.' },
          { title: 'Compliance Certification', description: 'Assemble certified payrolls and PWA compliance package.' },
          { title: 'Audit-Ready Filing', description: 'Deliver documentation supporting the 5x bonus multiplier on IRA credits.' },
        ],
      })} />

      <ServiceHero
        code="S/02"
        eyebrow="PWA Compliance"
        title="Unlock the 5× bonus multiplier"
        lastUpdated="April 2026"
        primaryCta={{ label: 'Get a Compliance Assessment', href: '/contact' }}
        lede="The Inflation Reduction Act offers massive clean energy tax credits, but only if you meet Prevailing Wage and Apprenticeship requirements. Concord ensures every dollar is captured."
        stats={[
          { value: '5×',      label: 'Enhanced rate multiplier', note: 'With PWA compliance' },
          { value: '$5.94/sf', label: 'Maximum 179D rate',       note: 'PWA required' },
          { value: '100%',    label: 'Compliance rate',          note: 'All engagements' },
        ]}
      />

      <StickyNav items={stickyNavItems} />

      {/* What Is PWA */}
      <section id="what-is-pwa" className="surface-ink band">
        <div className="arch">
          <ServiceMediaSplit
            code="F/01"
            eyebrow="Understanding PWA"
            title="What is Prevailing Wage & Apprenticeship Compliance?"
            mediaVariant="solar-array"
            mediaImages={[
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
              'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1000&q=85',
              'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=85',
            ]}
            mediaAlt="Construction workers installing solar panels on a prevailing wage project site"
            lede={<>The Inflation Reduction Act of 2022 introduced Prevailing Wage and Apprenticeship (PWA) requirements as the gateway to enhanced clean energy tax incentives. Projects that meet these labor standards qualify for the full bonus credit rate, which is <strong className="text-[rgb(var(--ivory))]">five times</strong> the base rate. This is particularly critical for organizations pursuing the <Link to="/179d-tax-deduction" className="ed-link">179D tax deduction</Link>, where compliance determines whether you receive $1.19/sqft or the full $5.94/sqft.</>}
          >
            <p className="service-definition mt-5 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
              Prevailing wage requires paying workers no less than local prevailing rates as determined by the Department of Labor. Apprenticeship requirements mandate a percentage of total labor hours be performed by qualified apprentices from registered programs. Meeting <Link to="/the-concord-standard" className="ed-link">the Concord Standard</Link> ensures your documentation is audit-proof from day one.
            </p>

            <div className="key-facts mt-8">
              <p className="tech-label mb-4"><span className="index-num mr-2 text-[rgb(var(--concord-glow))]">K/01</span>Key PWA Facts</p>
              <ServiceEligibilityIndex
                rows={[
                  { title: 'Bonus Multiplier',    desc: 'PWA compliance unlocks the 5x bonus multiplier on IRA credits.' },
                  { title: 'Prevailing Wage',     desc: 'Prevailing wages are set by the Department of Labor for the project locality.' },
                  { title: 'Apprentice Hours',    desc: 'A minimum share of total labor hours must be performed by registered apprentices.' },
                  { title: 'Base Rate Penalty',   desc: 'Base rate without PWA is one-fifth of the bonus rate (for ITC: 6% vs 30%).' },
                  { title: 'Required Records',    desc: 'Certified payrolls and apprentice logs are required audit documentation.' },
                ]}
              />
            </div>

            <div className="mt-8 flex gap-4 items-start border-l-2 border-[rgb(var(--concord-glow))] pl-5 py-2">
              <Warning size={22} weight="fill" className="text-[rgb(var(--concord-glow))] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-[Fraunces] text-[18px] text-[rgb(var(--ivory))] mb-1">Without PWA, You Get 1/5 the Credit</p>
                <p className="text-[14px] text-[rgb(var(--ivory))/0.7] leading-relaxed">
                  Projects that fail to meet PWA requirements receive only the base credit rate, just <strong className="text-[rgb(var(--ivory))]">one-fifth</strong> of the bonus amount. For the ITC, that means 6% instead of 30%.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <ServiceFactsRail
                facts={[
                  { label: 'Projects Managed', value: '1,200+', note: 'Across all incentive types' },
                  { label: 'Compliance Rate',  value: '100%',   note: 'All PWA engagements' },
                ]}
              />
            </div>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* Incentives */}
      <section id="incentives" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="I/01"
            eyebrow="Applicable Incentives"
            title="Base Rate vs. Bonus Rate"
            lede={<>See how PWA compliance transforms every major IRA tax incentive from modest to maximized. Whether you are pursuing <Link to="/direct-pay" className="ed-link">Direct Pay under Section 6417</Link> or <Link to="/transferable-tax-credits" className="ed-link">transferable credits under Section 6418</Link>, the bonus rate requires PWA compliance.</>}
          />
          <ServiceComparison
            headers={['Incentive', 'Base Rate', 'Bonus Rate', 'Notes']}
            rows={[
              ['179D',           '$0.50 / sq ft',   '$5.00 / sq ft',   'With PWA compliance (up to $5.94)'],
              ['ITC (48 & 48E)', '6%',              '30%',             'With PWA compliance (up to 50% with adders)'],
              ['PTC (45 & 45Y)', '0.55¢ / kWh',     '2.75¢ / kWh',     'With PWA compliance'],
              ['45Q',            '$17 / ton',       '$85 / ton',       'With PWA compliance (geological storage)'],
              ['45V',            '$0.60 / kg',      '$3.00 / kg',      'With PWA compliance (lowest emissions tier)'],
            ]}
          />
        </div>
      </section>

      {/* Why Concord */}
      <section id="why-concord" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="A/01"
            eyebrow="Why Concord"
            title="Trusted by America's Leading Clean Energy Developers"
            lede={<>Our specialized PWA compliance team combines deep regulatory knowledge with technology-driven monitoring. Learn more about <Link to="/why-us" className="ed-link">why organizations choose Concord</Link> and <Link to="/who-we-are" className="ed-link">the team behind our work</Link>.</>}
          />
          <ServiceAudienceGrid
            items={[
              { icon: Certificate,  title: 'Licensed Compliance Officers', desc: 'Our team of certified compliance professionals has deep expertise in Department of Labor wage determinations and registered apprenticeship programs.' },
              { icon: ChartLineUp,  title: 'Real-Time Monitoring',         desc: 'Our proprietary dashboards track wage rates, apprenticeship hours, and compliance metrics in real time so issues are caught and resolved immediately.' },
              { icon: ShieldCheck,  title: 'Audit-Proof Documentation',    desc: 'We build comprehensive, IRS-ready documentation packages from day one, with certified payroll records, apprenticeship logs, and wage determination analyses.' },
              { icon: Trophy,       title: '100% Compliance Rate',         desc: 'Our track record speaks for itself. Across 1,200+ projects, our clients have successfully secured the full bonus multiplier on their credits.' },
            ]}
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="P/01"
            eyebrow="Our Process"
            title="End-to-End PWA Compliance"
            lede={<>From pre-construction planning to post-completion audit defense, we manage every element of PWA compliance. Our process pairs naturally with incentives like <Link to="/rd-tax-credits" className="ed-link">R&D tax credits</Link> to maximize your total benefit.</>}
          />
          <ServiceProcess
            steps={processSteps.map((s) => ({ title: s.title, desc: s.desc }))}
          />
        </div>
      </section>

      <VideoExplainer
        headline="See How PWA Compliance Works"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Guarantee / Documentation */}
      <section id="guarantee" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="G/01"
            eyebrow="Our Guarantee"
            title="PWA Compliance, Guaranteed."
            lede={<>When you partner with Concord, you get more than consulting. You get a commitment to results backed by our track record of 1,200+ successful projects. See our <Link to="/resources" className="ed-link">latest case studies and resources</Link> for real-world outcomes.</>}
          />
          <ServiceDocumentIndex
            documents={guaranteeItems.map((g, i) => ({
              title: [
                'Wage Rate Analysis',
                'Apprenticeship Coordination',
                'Certified Payroll Review',
                'Real-Time Monitoring',
                'IRS-Ready Documentation',
                'Audit Defense Support',
              ][i],
              desc: g,
            }))}
          />

          <div className="mt-14">
            <ServiceSectionHeader
              code="C/01"
              eyebrow="Client Voices"
              title="From Our Clients"
            />
            <ServiceEvidence
              items={[
                {
                  amount: '“1,200+ projects”',
                  title: 'James Richardson, VP of Facilities, National Education Partners',
                  desc: 'Concord\'s PWA compliance process gave us complete confidence that our documentation would withstand any audit. Their team was responsive, thorough, and made a complex process feel straightforward.',
                },
              ]}
            />
          </div>
        </div>
      </section>


      <SharedServiceFAQ
        faqs={faqs}
        intro="Everything you need to know about prevailing wage and apprenticeship compliance for IRA tax credits."
      />

      <RelatedServices currentHref="/prevailing-wage-apprenticeship" />

      <ServiceFinalCTA
        eyebrow="Start Today"
        headline="Don't Leave 80% of Your Credits on the Table"
        description="Every day without PWA compliance is money left behind. Let Concord's experts ensure you capture the full 5x bonus multiplier on your clean energy tax credits."
      />
    </ServicePageShell>
  );
}

