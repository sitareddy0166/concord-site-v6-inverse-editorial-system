import EditorialMedia from '@/components/media/EditorialMedia';
import { useState } from 'react';
import financialAnalysisImg from '@/assets/financial-analysis.jpg';
import manufacturingRdImg from '@/assets/manufacturing-rd.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  Sun,
  BatteryCharging,
  Code,
  Cloud,
  Graph,
  Wall,
  ShieldCheck,
  Quotes,
  ChatCircleDots,
  CheckCircle,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateWebPageSchema, generateSpeakableSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import StickyNav from '@/components/layout/StickyNav';
import ServiceHero from '@/components/sections/ServiceHero';
import VideoExplainer from '@/components/sections/VideoExplainer';
import ServicePageShell from '@/components/service/ServicePageShell';
import { SharedServiceFAQ, ServiceFinalCTA, RelatedServices } from '@/components/service';

const stickyNavItems = [
  { label: 'What Are R&D Credits?', href: '#overview' },
  { label: 'Qualifying Activities', href: '#qualifying' },
  { label: 'Our Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  {
    question: 'What qualifies as R&D for tax credit purposes?',
    answer: 'Activities that qualify must meet the IRS four-part test: they must be technological in nature, intended to eliminate uncertainty, involve a process of experimentation, and be undertaken for a permitted purpose (new or improved product, process, software, technique, formula, or invention). You don\'t need a formal lab; engineering, software development, and iterative design work often qualify.',
  },
  {
    question: 'Can clean energy companies claim R&D credits?',
    answer: 'Absolutely. Clean energy companies are among the strongest candidates for R&D tax credits. Activities such as developing solar technology, optimizing wind turbine designs, creating energy storage solutions, building energy modeling software, and engineering carbon capture systems all typically qualify. The credit applies to both successful and unsuccessful research efforts.',
  },
  {
    question: 'What is the four-part test for R&D eligibility?',
    answer: 'The four-part test requires that your activities: (1) have a permitted purpose -- developing a new or improved business component; (2) are technological in nature -- relying on principles of engineering, computer science, or physical/biological sciences; (3) involve eliminating technological uncertainty about capability, method, or design; and (4) involve a process of experimentation -- evaluating alternatives through modeling, simulation, testing, or trial and error.',
  },
  {
    question: 'How far back can I claim R&D credits?',
    answer: 'Generally, you can amend federal returns to claim R&D credits for the past three open tax years. In some cases, state statutes may allow claims further back. Concord conducts lookback studies to identify and recover credits from prior years, ensuring you capture every available dollar from your historical innovation activities.',
  },
  {
    question: 'Can startups use R&D credits against payroll taxes?',
    answer: 'Yes. Qualified small businesses with less than $5 million in gross receipts and no more than five years of gross receipts can elect to apply up to $500,000 per year of their R&D credit against payroll taxes (FICA). This makes the credit extremely valuable for pre-revenue or early-stage clean energy startups that may not yet have income tax liability.',
  },
  {
    question: 'How does Concord document R&D activities?',
    answer: 'Concord uses a rigorous, IRS-compliant documentation methodology. We conduct technical interviews with your engineering and project teams, gather contemporaneous records such as project files, design documents, and test results, and produce a comprehensive study report with detailed narratives linking each qualified activity to the four-part test. This documentation is designed to withstand IRS examination.',
  },
  {
    question: 'How long does a typical R&D study take from kickoff to filing?',
    answer: 'Most R&D studies run 4 to 8 weeks from kickoff to final report, depending on the number of projects and complexity of the technical narratives. Concord aligns the timeline to your filing deadline so amended returns and Section 174A elections land inside the applicable statute of limitations.',
  },
  {
    question: 'How does the Section 174A election interact with the R&D credit?',
    answer: 'Section 174A restores immediate expensing of domestic R&D costs for eligible small businesses, while the R&D credit provides a separate dollar-for-dollar reduction of federal tax liability on those same qualified expenditures. Concord evaluates both together so clients capture the deduction and the credit without double-counting or compliance gaps.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'R&D Tax Credits',
  description: 'Recover your innovation costs with R&D tax credits for clean energy companies. Concord identifies, documents, and captures every R&D dollar you\'re owed.',
  url: '/rd-tax-credits',
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#services' },
  { name: 'R&D Tax Credits', url: '/rd-tax-credits' },
]);

const qualifyingActivities = [
  { icon: Sun, title: 'Developing New Solar Tech', desc: 'Designing and testing photovoltaic cells, panel configurations, or inverter systems to improve energy conversion efficiency.' },
  { icon: BatteryCharging, title: 'Battery Storage Research', desc: 'Experimenting with novel chemistries, thermal management systems, or degradation modeling for energy storage solutions.' },
  { icon: Code, title: 'Energy Modeling Software', desc: 'Building proprietary tools for energy consumption forecasting, load balancing algorithms, or predictive maintenance platforms.' },
  { icon: Cloud, title: 'Carbon Capture Methods', desc: 'Researching direct air capture, solvent-based absorption, or mineralization techniques to reduce atmospheric CO2 levels.' },
  { icon: Graph, title: 'Grid Optimization', desc: 'Developing smart grid technologies, demand response systems, or distributed energy resource management platforms.' },
  { icon: Wall, title: 'Building Material Innovation', desc: 'Testing advanced insulation, phase-change materials, or integrated photovoltaic building envelopes for energy efficiency.' },
];

const processSteps = [
  { step: '01', title: 'Activity Identification', desc: 'We conduct technical interviews with your engineering and project teams to identify all qualifying R&D activities under the IRS four-part test.', img: manufacturingRdImg, alt: 'Manufacturing floor where R&D activities and innovation take place' },
  { step: '02', title: 'Expense Analysis', desc: 'We analyze qualified research expenses including wages, supplies, and contract research to determine the full scope of your eligible credit.', img: financialAnalysisImg, alt: 'Financial analyst reviewing R&D expense spreadsheets and qualified research costs' },
  { step: '03', title: 'Technical Documentation', desc: 'We produce comprehensive study reports with detailed narratives linking each qualified activity to the four-part test, gathering contemporaneous records and project documentation.', img: null, alt: 'Technical documentation and engineering records supporting R&D and data management' },
  { step: '04', title: 'Credit Calculation', desc: 'We compute your benefit using both the regular and alternative simplified credit methods, selecting the approach that maximizes your return.', img: null, alt: 'Data visualization dashboard showing R&D credit calculation results' },
  { step: '05', title: 'Filing Support', desc: 'We prepare all necessary tax forms and supporting schedules, coordinating with your CPA or tax team to ensure seamless filing and maximum credit capture.', img: null, alt: 'Tax professional preparing IRS Form 6765 for R&D credit filing' },
  { step: '06', title: 'Audit Defense', desc: 'If the IRS examines your credit claim, our team provides full audit defense with organized, defensible documentation and direct support throughout the process.', img: null, alt: 'Concord advisors presenting audit defense strategy in a professional meeting' },
];

export default function RDTaxCredits() {
  return (
    <ServicePageShell>
      <SEOHead
        title="R&D Tax Credits | Concord Energy Strategies"
        description="Recover your innovation costs with R&D tax credits for clean energy companies. Download the free 2026 R&D Tax Credit Guide from Concord Energy Strategies."
        canonical="/rd-tax-credits"
      />
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={generateWebPageSchema({ name: 'R&D Tax Credits | Concord Energy Strategies', description: 'R&D Tax Credit Consulting', url: '/rd-tax-credits' })} />
      <SchemaScript schema={generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts'])} />
      <SchemaScript schema={generateHowToSchema({
        name: 'How to Claim R&D Tax Credits',
        description: "Concord's process to identify, document, and file R&D tax credits for clean energy innovators.",
        steps: [
          { title: 'Activity Identification', description: 'Review projects to identify qualifying research and experimentation activities.' },
          { title: 'Cost Documentation', description: 'Capture qualified research expenditures across wages, supplies, and contract research.' },
          { title: 'Technical Narrative', description: 'Build defensible technical documentation aligned with IRS four-part test.' },
          { title: 'Credit Calculation', description: 'Compute Section 41 credit and evaluate Section 174A capitalization impact.' },
          { title: 'Filing & Audit Defense', description: 'File Form 6765 and provide ongoing audit support if examined.' },
        ],
      })} />

      <ServiceHero
        code="S/05"
        eyebrow="R&D Tax Credits"
        title="Recover innovation costs. Fuel future growth."
        lastUpdated="April 2026"
        lede={<>Clean energy companies invest heavily in research and development, but most leave significant tax credits unclaimed. Concord helps you identify, document, and capture every R&amp;D dollar you're owed.</>}
        stats={[
          { value: 'Dollar-for-Dollar', label: 'Tax liability reduction', note: 'R&D credits' },
          { value: '2,493',              label: 'Companies served',        note: 'And counting' },
          { value: 'Every industry',     label: 'Qualifies',                note: 'Not just tech' },
          { value: '20 yrs',             label: 'Carryforward period',      note: 'Unused credits' },
        ]}
      />

      <StickyNav items={stickyNavItems} />

      {/* R&D Overview */}
      <section id="overview" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="max-w-5xl mx-auto">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Understanding R&amp;D Credits</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-12 text-balance">
                What Are R&amp;D Tax Credits?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="service-definition text-base font-body text-slate-500 leading-relaxed mb-6">
                    The Research and Development Tax Credit (IRC Section 41) is a dollar-for-dollar federal tax incentive designed to reward companies that invest in innovation within the United States. Originally enacted in 1981, the credit has been expanded and made permanent to encourage technological advancement across all industries.
                  </p>
                  <p className="text-base font-body text-slate-500 leading-relaxed mb-6">
                    For clean energy companies, R&amp;D credits represent one of the most underutilized incentives available. Whether you&apos;re developing next-generation solar panels, optimizing battery storage systems, or engineering carbon capture solutions, your innovation activities likely qualify. Paired with programs like <Link to="/179d-tax-deduction" className="text-concord-green font-semibold hover:underline">179D deductions</Link> and <Link to="/direct-pay" className="text-concord-green font-semibold hover:underline">Section 6417 Direct Pay</Link>, R&amp;D credits can dramatically accelerate your financial returns. Organizations pursuing <Link to="/prevailing-wage-apprenticeship" className="text-concord-green font-semibold hover:underline">PWA compliance</Link> for the 5x bonus multiplier should also explore whether their engineering activities generate additional R&amp;D credit opportunities.
                  </p>
                  <div className="key-facts bg-[#151C19] text-white rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-[18px] text-white mb-4">Key R&amp;D Credit Facts</h3>
                    <ul className="space-y-2.5">
                      {[
                        'Dollar-for-dollar federal credit under IRC Section 41',
                        'Enacted in 1981, expanded and made permanent for ongoing innovation',
                        'Qualifying costs include wages, supplies, and contract research',
                        'Activities must satisfy the IRS four-part test to qualify',
                        'Section 174A capitalization interacts with credit calculations for post-2022 years',
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2 text-slate-200 text-[14px] leading-relaxed">
                          <CheckCircle size={16} weight="fill" className="text-concord-green shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-concord-cream rounded-3xl p-10 border border-black/[0.06] shadow-sm">
                    <div className="text-[56px] md:text-[64px] font-heading font-extrabold text-concord-green tracking-tighter leading-none mb-4">$15B+</div>
                    <p className="text-lg font-heading font-bold text-concord-dark mb-2">Claimed annually in R&amp;D tax credits</p>
                    <p className="text-base font-body text-slate-500 leading-relaxed">Yet an estimated 70% of eligible small and mid-sized businesses fail to claim the credit each year, leaving billions on the table that could fund future innovation and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Qualifying Activities */}
      <section id="qualifying" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Qualifying Activities</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">
                R&amp;D Activities in Clean Energy
              </h2>
              <p className="text-base font-body text-slate-500 mt-4 leading-relaxed">These common clean energy activities often qualify for R&amp;D tax credits under the four-part test. Learn more about <Link to="/the-concord-standard" className="text-concord-green font-semibold hover:underline">The Concord Standard</Link> for documentation rigor.</p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualifyingActivities.map((card, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white rounded-3xl p-10 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col h-full">
                  <div className="w-14 h-14 bg-concord-green/10 rounded-2xl flex items-center justify-center mb-6">
                    <card.icon size={28} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight mb-3">{card.title}</h3>
                  <p className="text-base font-body text-slate-500 leading-relaxed flex-1">{card.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Process</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">How We Capture Your R&amp;D Credits</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">From activity identification to audit defense, our six-step process ensures maximum credit capture with IRS-compliant documentation. See <Link to="/why-us" className="text-concord-green font-semibold hover:underline">why leading companies choose Concord</Link>.</p>
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
        headline="See How R&D Tax Credits Work"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Dark Trust Section */}
      <section id="results" className="py-[80px] lg:py-[100px] bg-concord-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-concord-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-[16%] w-64 h-64 bg-concord-green/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <div className="text-center">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
                <ShieldCheck size={18} weight="fill" className="inline mr-1" />
                Trusted R&amp;D Expertise
              </p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white text-balance mb-8">
                IRS-Compliant Documentation. Audit-Ready Results.
              </h2>
              <p className="text-lg font-body text-white/50 leading-relaxed max-w-3xl mx-auto mb-14">
                Our team of engineers, tax professionals, and clean energy specialists has helped hundreds of companies recover millions in R&amp;D credits. Every study we produce is designed to withstand full IRS examination. See our full track record on our <Link to="/resources" className="text-concord-green hover:underline">resources page</Link>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {[
                  { value: '100%', label: 'Audit Success Rate' },
                  { value: '$1B+', label: 'Client Savings Secured' },
                  { value: '15+', label: 'Years of Clean Energy Focus' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-heading font-extrabold text-concord-greenHover tracking-tighter mb-2">{stat.value}</div>
                    <p className="text-sm font-body text-white/50 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
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
              &ldquo;Concord&apos;s R&amp;D credit study was incredibly thorough. They identified qualifying activities our previous advisors had missed entirely, and the documentation gave us total confidence during our audit.&rdquo;
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
        intro="Get answers to the most common questions about R&D tax credits for clean energy companies."
      />

      <RelatedServices currentHref="/rd-tax-credits" />

      <ServiceFinalCTA
        eyebrow="Start Today"
        headline="Stop Overlooking Your R&D Tax Benefits"
        description="Your innovation already happened. Let Concord make sure you're rewarded for it. Our team will identify every qualifying activity and maximize your credit."
      />
    </ServicePageShell>
  );
}

