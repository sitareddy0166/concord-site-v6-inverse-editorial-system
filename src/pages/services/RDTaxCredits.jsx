import { Link } from 'react-router-dom';
import {
  Sun, BatteryCharging, Code, Cloud, Graph, Wall,
} from '@phosphor-icons/react';
import {
  SEOHead, SchemaScript,
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateWebPageSchema, generateSpeakableSchema,
} from '@/utils/seo';
import StickyNav from '@/components/layout/StickyNav';
import ServiceHero from '@/components/sections/ServiceHero';
import ServicePageShell from '@/components/service/ServicePageShell';
import {
  SharedServiceFAQ, ServiceFinalCTA, RelatedServices,
  ServiceSectionHeader, ServiceFactsRail, ServiceMediaSplit,
  ServiceAudienceGrid, ServiceEligibilityIndex, ServiceProcess,
} from '@/components/service';

const stickyNavItems = [
  { label: 'What Are R&D Credits?', href: '#overview' },
  { label: 'Qualifying Activities', href: '#qualifying' },
  { label: 'Our Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  { question: 'What qualifies as R&D for tax credit purposes?', answer: 'Activities that qualify must meet the IRS four-part test: they must be technological in nature, intended to eliminate uncertainty, involve a process of experimentation, and be undertaken for a permitted purpose (new or improved product, process, software, technique, formula, or invention). You don\'t need a formal lab; engineering, software development, and iterative design work often qualify.' },
  { question: 'Can clean energy companies claim R&D credits?', answer: 'Absolutely. Clean energy companies are among the strongest candidates for R&D tax credits. Activities such as developing solar technology, optimizing wind turbine designs, creating energy storage solutions, building energy modeling software, and engineering carbon capture systems all typically qualify. The credit applies to both successful and unsuccessful research efforts.' },
  { question: 'What is the four-part test for R&D eligibility?', answer: 'The four-part test requires that your activities: (1) have a permitted purpose, developing a new or improved business component; (2) are technological in nature, relying on principles of engineering, computer science, or physical/biological sciences; (3) involve eliminating technological uncertainty about capability, method, or design; and (4) involve a process of experimentation, evaluating alternatives through modeling, simulation, testing, or trial and error.' },
  { question: 'How far back can I claim R&D credits?', answer: 'Generally, you can amend federal returns to claim R&D credits for the past three open tax years. In some cases, state statutes may allow claims further back. Concord conducts lookback studies to identify and recover credits from prior years, ensuring you capture every available dollar from your historical innovation activities.' },
  { question: 'Can startups use R&D credits against payroll taxes?', answer: 'Yes. Qualified small businesses with less than $5 million in gross receipts and no more than five years of gross receipts can elect to apply up to $500,000 per year of their R&D credit against payroll taxes (FICA). This makes the credit extremely valuable for pre-revenue or early-stage clean energy startups that may not yet have income tax liability.' },
  { question: 'How does Concord document R&D activities?', answer: 'Concord uses a rigorous, IRS-compliant documentation methodology. We conduct technical interviews with your engineering and project teams, gather contemporaneous records such as project files, design documents, and test results, and produce a comprehensive study report with detailed narratives linking each qualified activity to the four-part test. This documentation is designed to withstand IRS examination.' },
  { question: 'How long does a typical R&D study take from kickoff to filing?', answer: 'Most R&D studies run 4 to 8 weeks from kickoff to final report, depending on the number of projects and complexity of the technical narratives. Concord aligns the timeline to your filing deadline so amended returns and Section 174A elections land inside the applicable statute of limitations.' },
  { question: 'How does the Section 174A election interact with the R&D credit?', answer: 'Section 174A restores immediate expensing of domestic R&D costs for eligible small businesses, while the R&D credit provides a separate dollar-for-dollar reduction of federal tax liability on those same qualified expenditures. Concord evaluates both together so clients capture the deduction and the credit without double-counting or compliance gaps.' },
];

const serviceSchema = generateServiceSchema({
  name: 'R&D Tax Credits',
  description: "Recover your innovation costs with R&D tax credits for clean energy companies. Concord identifies, documents, and captures every R&D dollar you're owed.",
  url: '/rd-tax-credits',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#services' },
  { name: 'R&D Tax Credits', url: '/rd-tax-credits' },
]);

const qualifyingActivities = [
  { icon: Sun,             title: 'Developing New Solar Tech',       desc: 'Designing and testing photovoltaic cells, panel configurations, or inverter systems to improve energy conversion efficiency.' },
  { icon: BatteryCharging, title: 'Battery Storage Research',        desc: 'Experimenting with novel chemistries, thermal management systems, or degradation modeling for energy storage solutions.' },
  { icon: Code,            title: 'Energy Modeling Software',        desc: 'Building proprietary tools for energy consumption forecasting, load balancing algorithms, or predictive maintenance platforms.' },
  { icon: Cloud,           title: 'Carbon Capture Methods',          desc: 'Researching direct air capture, solvent-based absorption, or mineralization techniques to reduce atmospheric CO2 levels.' },
  { icon: Graph,           title: 'Grid Optimization',               desc: 'Developing smart grid technologies, demand response systems, or distributed energy resource management platforms.' },
  { icon: Wall,            title: 'Building Material Innovation',    desc: 'Testing advanced insulation, phase-change materials, or integrated photovoltaic building envelopes for energy efficiency.' },
];

const processSteps = [
  { title: 'Activity Identification', desc: 'We conduct technical interviews with your engineering and project teams to identify all qualifying R&D activities under the IRS four-part test.' },
  { title: 'Expense Analysis',        desc: 'We analyze qualified research expenses including wages, supplies, and contract research to determine the full scope of your eligible credit.' },
  { title: 'Technical Documentation', desc: 'We produce comprehensive study reports with detailed narratives linking each qualified activity to the four-part test, gathering contemporaneous records and project documentation.' },
  { title: 'Credit Calculation',      desc: 'We compute your benefit using both the regular and alternative simplified credit methods, selecting the approach that maximizes your return.' },
  { title: 'Filing Support',          desc: 'We prepare all necessary tax forms and supporting schedules, coordinating with your CPA or tax team to ensure seamless filing and maximum credit capture.' },
  { title: 'Audit Defense',           desc: 'If the IRS examines your credit claim, our team provides full audit defense with organized, defensible documentation and direct support throughout the process.' },
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
          { title: 'Cost Documentation',      description: 'Capture qualified research expenditures across wages, supplies, and contract research.' },
          { title: 'Technical Narrative',     description: 'Build defensible technical documentation aligned with IRS four-part test.' },
          { title: 'Credit Calculation',      description: 'Compute Section 41 credit and evaluate Section 174A capitalization impact.' },
          { title: 'Filing & Audit Defense',  description: 'File Form 6765 and provide ongoing audit support if examined.' },
        ],
      })} />

      <ServiceHero
        code="S/05"
        eyebrow="R&D Tax Credits"
        title="Recover innovation costs. Fuel future growth."
        lastUpdated="April 2026"
        lede={<>Clean energy companies invest heavily in research and development, but most leave significant tax credits unclaimed. Concord helps you identify, document, and capture every R&D dollar you're owed.</>}
        stats={[
          { value: 'Dollar-for-Dollar', label: 'Tax liability reduction', note: 'R&D credits' },
          { value: '2,493',              label: 'Companies served',        note: 'And counting' },
          { value: 'Every industry',     label: 'Qualifies',                note: 'Not just tech' },
          { value: '20 yrs',             label: 'Carryforward period',      note: 'Unused credits' },
        ]}
      />

      <StickyNav items={stickyNavItems} />

      {/* Overview */}
      <section id="overview" className="surface-ink band">
        <div className="arch">
          <ServiceMediaSplit
            code="F/01"
            eyebrow="Understanding R&D Credits"
            title="What Are R&D Tax Credits?"
            mediaVariant="laboratory"
            mediaImages={[
              'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
            ]}
            mediaAlt="Clean energy laboratory researcher working on qualifying R&D activity"
            lede={<>The Research and Development Tax Credit (IRC Section 41) is a dollar-for-dollar federal tax incentive designed to reward companies that invest in innovation within the United States. Originally enacted in 1981, the credit has been expanded and made permanent to encourage technological advancement across all industries.</>}
          >
            <p className="service-definition mt-5 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
              For clean energy companies, R&D credits represent one of the most underutilized incentives available. Whether you are developing next-generation solar panels, optimizing battery storage systems, or engineering carbon capture solutions, your innovation activities likely qualify. Paired with programs like <Link to="/179d-tax-deduction" className="ed-link">179D deductions</Link> and <Link to="/direct-pay" className="ed-link">Section 6417 Direct Pay</Link>, R&D credits can dramatically accelerate your financial returns. Organizations pursuing <Link to="/prevailing-wage-apprenticeship" className="ed-link">PWA compliance</Link> for the 5x bonus multiplier should also explore whether their engineering activities generate additional R&D credit opportunities.
            </p>

            <div className="key-facts mt-8">
              <p className="tech-label mb-4"><span className="index-num mr-2 text-[rgb(var(--concord-glow))]">K/01</span>Key R&D Credit Facts</p>
              <ServiceEligibilityIndex
                rows={[
                  { title: 'Dollar-for-Dollar',    desc: 'Dollar-for-dollar federal credit under IRC Section 41.' },
                  { title: 'Permanent Incentive',  desc: 'Enacted in 1981, expanded and made permanent for ongoing innovation.' },
                  { title: 'Qualifying Costs',     desc: 'Qualifying costs include wages, supplies, and contract research.' },
                  { title: 'Four-Part Test',       desc: 'Activities must satisfy the IRS four-part test to qualify.' },
                  { title: 'Section 174A',         desc: 'Section 174A capitalization interacts with credit calculations for post-2022 years.' },
                ]}
              />
            </div>

            <div className="mt-10">
              <ServiceFactsRail
                facts={[
                  { label: 'Claimed annually', value: '$15B+',  note: 'In R&D tax credits' },
                  { label: 'Underclaim rate',  value: '~70%',   note: 'Eligible SMBs that miss out' },
                ]}
              />
            </div>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* Qualifying Activities */}
      <section id="qualifying" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="A/01"
            eyebrow="Qualifying Activities"
            title="R&D Activities in Clean Energy"
            lede={<>These common clean energy activities often qualify for R&D tax credits under the four-part test. Learn more about <Link to="/the-concord-standard" className="ed-link">The Concord Standard</Link> for documentation rigor.</>}
          />
          <ServiceAudienceGrid items={qualifyingActivities} />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="P/01"
            eyebrow="Our Process"
            title="How We Capture Your R&D Credits"
            lede={<>From activity identification to audit defense, our six-step process ensures maximum credit capture with IRS-compliant documentation. See <Link to="/why-us" className="ed-link">why leading companies choose Concord</Link>.</>}
          />
          <ServiceProcess steps={processSteps} />
        </div>
      </section>

      {/* Results */}
      <section id="results" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="R/01"
            eyebrow="Trusted R&D Expertise"
            title="IRS-Compliant Documentation. Audit-Ready Results."
            lede={<>Our team of engineers, tax professionals, and clean energy specialists has helped hundreds of companies recover millions in R&D credits. Every study we produce is designed to withstand full IRS examination. See our full track record on our <Link to="/resources" className="ed-link">resources page</Link>.</>}
          />
          <ServiceFactsRail
            facts={[
              { label: 'Audit Success Rate',       value: '100%' },
              { label: 'Client Savings Secured',   value: '$1B+' },
              { label: 'Years of Clean Energy Focus', value: '15+' },
              { label: 'Companies Served',         value: '2,493' },
            ]}
          />
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
