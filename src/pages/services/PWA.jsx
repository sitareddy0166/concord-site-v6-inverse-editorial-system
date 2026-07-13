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
  { step: '02', title: 'Wage Rate Determination', desc: 'We analyze Department of Labor wage determinations for your specific project location and trade classifications, verifying prevailing wage rates and fringe benefits.', img: financialAnalysisImg, alt: 'Financial spreadsheets showing prevailing wage rate analysis' },
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
      <section id="what-is-pwa" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollFadeIn className="relative">
            <EditorialMedia variant="solar-array" alt="Construction workers installing solar panels on a prevailing wage project site" aspect="4/3" rounded className="w-full" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-3xl shadow-lg px-6 py-4">
              <p className="text-2xl font-heading font-extrabold text-concord-green">1,200+</p>
              <p className="text-xs text-concord-dark/60 font-medium">Projects Managed</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Understanding PWA</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">What is Prevailing Wage &amp; Apprenticeship Compliance?</h2>
            <p className="service-definition text-base text-slate-500 leading-relaxed mb-6">
              The Inflation Reduction Act of 2022 introduced Prevailing Wage and Apprenticeship (PWA) requirements as the gateway to enhanced clean energy tax incentives. Projects that meet these labor standards qualify for the full bonus credit rate, which is <strong className="text-concord-dark">five times</strong> the base rate. This is particularly critical for organizations pursuing the <Link to="/179d-tax-deduction" className="text-concord-green font-semibold hover:underline">179D tax deduction</Link>, where compliance determines whether you receive $1.19/sqft or the full $5.94/sqft.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-6">
              Prevailing wage requires paying workers no less than local prevailing rates as determined by the Department of Labor. Apprenticeship requirements mandate a percentage of total labor hours be performed by qualified apprentices from registered programs. Meeting <Link to="/the-concord-standard" className="text-concord-green font-semibold hover:underline">the Concord Standard</Link> ensures your documentation is audit-proof from day one.
            </p>

            <div className="key-facts bg-[#151C19] text-white rounded-2xl p-6 mb-8">
              <h3 className="font-heading font-bold text-[18px] text-white mb-4">Key PWA Facts</h3>
              <ul className="space-y-2.5">
                {[
                  'PWA compliance unlocks the 5x bonus multiplier on IRA credits',
                  'Prevailing wages are set by the Department of Labor for the project locality',
                  'A minimum share of total labor hours must be performed by registered apprentices',
                  'Base rate without PWA is one-fifth of the bonus rate (for ITC: 6% vs 30%)',
                  'Certified payrolls and apprentice logs are required audit documentation',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-200 text-[14px] leading-relaxed">
                    <CheckCircle size={16} weight="fill" className="text-concord-green shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Callout */}
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Warning size={24} weight="fill" className="text-amber-600" />
              </div>
              <div>
                <p className="font-heading font-bold text-concord-dark mb-1">Without PWA, You Get 1/5 the Credit</p>
                <p className="text-sm text-slate-500 leading-relaxed">Projects that fail to meet PWA requirements receive only the base credit rate, just <strong>one-fifth</strong> of the bonus amount. For the ITC, that means 6% instead of 30%.</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Incentives Tabs */}
      <section id="incentives" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Applicable Incentives</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Base Rate vs. Bonus Rate</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">See how PWA compliance transforms every major IRA tax incentive from modest to maximized. Whether you are pursuing <Link to="/direct-pay" className="text-concord-green font-semibold hover:underline">Direct Pay under Section 6417</Link> or <Link to="/transferable-tax-credits" className="text-concord-green font-semibold hover:underline">transferable credits under Section 6418</Link>, the bonus rate requires PWA compliance.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-250 ${
                    activeTab === tab.id ? 'bg-[#151C19] text-white' : 'bg-gray-100 text-concord-dark hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {tabData.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id} className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm text-center flex flex-col justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Base Rate</p>
                    <p className="font-heading text-[48px] font-extrabold text-concord-dark/30 mb-2">{tab.baseRate}</p>
                    <p className="text-sm text-slate-400">Without PWA compliance</p>
                  </div>
                  <div className="bg-[#151C19] rounded-3xl p-8 text-white text-center shadow-sm flex flex-col justify-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#40b868] mb-3">Bonus Rate</p>
                    <p className="font-heading text-[48px] font-extrabold mb-2">{tab.bonusRate}</p>
                    <p className="text-sm text-white/70">{tab.bonusNote}</p>
                  </div>
                </div>
              ) : null
            )}
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why Concord */}
      <section id="why-concord" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Why Concord</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Trusted by America&apos;s Leading Clean Energy Developers</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">Our specialized PWA compliance team combines deep regulatory knowledge with technology-driven monitoring. Learn more about <Link to="/why-us" className="text-concord-green font-semibold hover:underline">why organizations choose Concord</Link> and <Link to="/who-we-are" className="text-concord-green font-semibold hover:underline">the team behind our work</Link>.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Certificate, title: 'Licensed Compliance Officers', desc: 'Our team of certified compliance professionals has deep expertise in Department of Labor wage determinations and registered apprenticeship programs.' },
                { icon: ChartLineUp, title: 'Real-Time Monitoring', desc: 'Our proprietary dashboards track wage rates, apprenticeship hours, and compliance metrics in real time so issues are caught and resolved immediately.' },
                { icon: ShieldCheck, title: 'Audit-Proof Documentation', desc: 'We build comprehensive, IRS-ready documentation packages from day one, with certified payroll records, apprenticeship logs, and wage determination analyses.' },
                { icon: Trophy, title: '100% Compliance Rate', desc: 'Our track record speaks for itself. Across 1,200+ projects, our clients have successfully secured the full bonus multiplier on their credits.' },
              ].map((card, i) => (
                <div key={i} className="bg-concord-mint rounded-3xl p-8 lg:p-10 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-6">
                    <card.icon size={28} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed flex-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Process</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">End-to-End PWA Compliance</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">From pre-construction planning to post-completion audit defense, we manage every element of PWA compliance. Our process pairs naturally with incentives like <Link to="/rd-tax-credits" className="text-concord-green font-semibold hover:underline">R&D tax credits</Link> to maximize your total benefit.</p>
            </div>
          </ScrollFadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-concord-green/20"></div>

            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollFadeIn key={i} className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 ${i < processSteps.length - 1 ? 'mb-[80px]' : ''}`}>
                  <div className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                    <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-concord-green text-white flex items-center justify-center font-heading font-extrabold text-lg shrink-0">{step.step}</div>
                      <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed">{step.desc}</p>
                  </div>
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    {step.img ? (<img src={step.img} alt={step.alt} loading="lazy" width="600" height="400" className="rounded-3xl shadow-md w-full object-cover aspect-[3/2]" />) : (<EditorialMedia variant="auto" alt={step.alt} aspect="3/2" className="w-full" />)}
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <VideoExplainer
        headline="See How PWA Compliance Works"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Guarantee (Dark Section) */}
      <section id="guarantee" className="py-[80px] lg:py-[100px] bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollFadeIn>
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Guarantee</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-6">PWA Compliance, Guaranteed.</h2>
              <p className="text-white/50 text-base leading-relaxed mb-10">When you partner with Concord, you get more than consulting. You get a commitment to results backed by our track record of 1,200+ successful projects. See our <Link to="/resources" className="text-concord-green hover:underline">latest case studies and resources</Link> for real-world outcomes.</p>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="space-y-5">
                {guaranteeItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-concord-green/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} weight="fill" className="text-concord-green" />
                    </div>
                    <p className="text-white/80 text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollFadeIn>
            <div className="w-16 h-16 rounded-full bg-concord-green/10 flex items-center justify-center mx-auto mb-8">
              <Quotes size={32} weight="fill" className="text-concord-green" />
            </div>
            <blockquote className="text-xl md:text-2xl font-heading font-bold text-concord-dark leading-relaxed mb-8">
              &ldquo;Concord&apos;s PWA compliance process gave us complete confidence that our documentation would withstand any audit. Their team was responsive, thorough, and made a complex process feel straightforward.&rdquo;
            </blockquote>
            <div>
              <p className="font-heading font-bold text-concord-dark">James Richardson</p>
              <p className="text-sm text-slate-500">VP of Facilities, National Education Partners</p>
            </div>
          </ScrollFadeIn>
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

