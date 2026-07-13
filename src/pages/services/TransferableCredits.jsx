import { Link } from 'react-router-dom';
import {
  Sun, Wind, Car, BatteryCharging, Atom, Tree,
  Buildings, Bank, Shield, Cpu, ChartPie, User,
  MagnifyingGlass, ChartBar, Scales, Headset,
  ShieldCheck, Lock, Eye, Certificate,
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
  ServiceEvidence,
} from '@/components/service';

const stickyNavItems = [
  { label: 'What Are Transferable Credits?', href: '#what-are-tc' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Who Can Sell', href: '#who-can-sell' },
  { label: 'Who Can Buy', href: '#who-can-buy' },
  { label: 'Why Concord', href: '#why-concord' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  { question: 'What is Section 6418 transferability?', answer: 'Section 6418, introduced by the Inflation Reduction Act, allows eligible taxpayers who generate clean energy tax credits to sell those credits to unrelated third-party buyers for cash. This creates a liquid market for tax credits without the complexity of traditional tax equity structures.' },
  { question: 'Which credits are eligible for transfer?', answer: 'Twelve types of credits qualify, including the Investment Tax Credit (ITC), Production Tax Credit (PTC), Section 45Q carbon capture credits, Section 45V clean hydrogen credits, Section 45X advanced manufacturing credits, and others created or extended by the IRA.' },
  { question: 'What discount do buyers typically receive?', answer: 'Market pricing typically ranges from 90 to 95 cents per dollar of credit value, depending on credit type, project risk profile, and market conditions. Concord ensures competitive pricing through its broad buyer network.' },
  { question: 'How does Concord protect buyers from risk?', answer: 'Concord performs comprehensive due diligence on every transaction, including project verification, credit substantiation, seller financial review, and legal structuring with tax indemnification provisions to protect buyers.' },
  { question: 'How long does a transfer take?', answer: 'A typical transfer takes 4 to 8 weeks from initial engagement to closing, depending on deal complexity and due diligence requirements. Concord manages the full timeline to ensure efficient execution.' },
  { question: 'Can any taxpayer buy transferable credits?', answer: 'Yes. Any taxpayer with federal income tax liability can purchase transferable credits under Section 6418. This includes corporations, partnerships, individuals, and other entities across all industries.' },
  { question: 'What documentation supports a Section 6418 transfer?', answer: 'A defensible transfer package includes IRS pre-filing registration numbers for both parties, credit substantiation from the underlying project, a transfer agreement with tax indemnification provisions, and evidence supporting the credit amount claimed. Concord assembles and reviews this package before closing to protect both seller and buyer.' },
  { question: 'Is IRS pre-filing registration required for every transfer?', answer: 'Yes. Section 6418 transfers require pre-filing registration through the IRS Energy Credits Online portal for each project generating credits, and both seller and buyer must file elections on their timely filed returns. Concord manages registration and election filings so no procedural step blocks the transaction.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Section 6418 Transferable Tax Credits',
  description: 'Concord connects clean energy tax credit sellers with pre-vetted corporate buyers through the Section 6418 marketplace, handling due diligence, legal structuring, and transaction execution.',
  url: '/transferable-tax-credits',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#services' },
  { name: 'Transferable Credits', url: '/transferable-tax-credits' },
]);

const processSteps = [
  { title: 'Credit Identification',   desc: 'We analyze your clean energy portfolio to identify all eligible IRA tax credits, quantify their value, and determine optimal transfer timing. This step mirrors the assessment phase of The Concord Standard.' },
  { title: 'Due Diligence',           desc: 'Comprehensive project verification, credit substantiation, financial review, and risk assessment to ensure every credit is defensible and market-ready.' },
  { title: 'Buyer Matching',          desc: 'Credits are matched to pre-vetted corporate buyers in our network based on credit type, size, timing preferences, and competitive market pricing.' },
  { title: 'Transfer Execution',      desc: 'Transfer agreements drafted with full tax indemnification, representations, warranties, and IRS compliance provisions. Cash delivered at closing.' },
  { title: 'Compliance Filing',       desc: 'IRS pre-filing registration, transfer election support, Form 3800 guidance, and complete documentation packages for both parties.' },
  { title: 'Post-Transfer Support',   desc: 'Ongoing compliance monitoring, audit defense assistance, and advisory support for future credit transfers and portfolio optimization.' },
];

const sellerCards = [
  { icon: Sun,             title: 'Solar Developers',   desc: 'Utility-scale and distributed solar project developers generating investment and production tax credits (ITC & PTC).' },
  { icon: Wind,            title: 'Wind Projects',      desc: 'Onshore and offshore wind energy developers earning production tax credits over a 10-year period (PTC).' },
  { icon: Car,             title: 'EV Manufacturers',   desc: 'Electric vehicle and commercial clean vehicle manufacturers with eligible Section 30D and 45W credits.' },
  { icon: BatteryCharging, title: 'Battery Storage',    desc: 'Standalone and co-located energy storage projects now eligible for their own investment tax credits (ITC).' },
  { icon: Atom,            title: 'Hydrogen Producers', desc: 'Clean hydrogen production facilities generating credits based on lifecycle greenhouse gas emissions (45V).' },
  { icon: Tree,            title: 'Carbon Capture',     desc: 'Carbon capture, utilization, and storage projects earning credits for qualified CO2 sequestration (45Q).' },
];

const buyerCards = [
  { icon: Buildings, title: 'Corporations',                   desc: 'Fortune 500 and mid-market companies looking to reduce federal tax liability while supporting clean energy.' },
  { icon: Bank,      title: 'Banks & Financial Institutions', desc: 'National and regional banks leveraging transferable credits as a simpler alternative to traditional tax equity.' },
  { icon: Shield,    title: 'Insurance Companies',            desc: 'Property & casualty and life insurers with significant tax obligations seeking dollar-for-dollar credit offsets.' },
  { icon: Cpu,       title: 'Tech Companies',                 desc: 'Technology firms achieving ESG goals and tax optimization through strategic clean energy credit purchases.' },
  { icon: ChartPie,  title: 'Private Equity Firms',           desc: 'Fund-level buyers deploying capital into transferable credits as a risk-adjusted investment strategy.' },
  { icon: User,      title: 'Any U.S. Taxpayer',              desc: 'Any entity or individual with federal income tax liability can purchase credits under Section 6418.' },
];

export default function TransferableCredits() {
  return (
    <ServicePageShell>
      <SEOHead
        title="Transferable Tax Credits | Concord Energy Strategies"
        description="Monetize your clean energy tax credits through Section 6418 transfers. Concord connects sellers with pre-vetted corporate buyers at competitive market rates."
        canonical="/transferable-tax-credits"
      />
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={generateWebPageSchema({ name: 'Transferable Tax Credits | Concord Energy Strategies', description: 'Section 6418 Transferable Credit Advisory', url: '/transferable-tax-credits' })} />
      <SchemaScript schema={generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts'])} />
      <SchemaScript schema={generateHowToSchema({
        name: 'How to Monetize Section 6418 Transferable Tax Credits',
        description: "Concord's process to transfer clean energy tax credits to corporate buyers under Section 6418.",
        steps: [
          { title: 'Credit Eligibility Review', description: 'Confirm the credit qualifies for transfer and assess documentation readiness.' },
          { title: 'Valuation & Buyer Match',   description: 'Value the credit and match with pre-vetted corporate buyers at market rates.' },
          { title: 'Diligence & Documentation', description: 'Assemble diligence package including PWA proof, energy models, and compliance records.' },
          { title: 'Purchase Agreement',        description: 'Negotiate the transfer election and execute the credit purchase agreement.' },
          { title: 'Registration & Transfer',   description: 'Complete IRS pre-filing registration and file the elective transfer election.' },
        ],
      })} />

      <ServiceHero
        code="S/04"
        eyebrow="Section 6418"
        title="Monetize your clean energy tax credits"
        lastUpdated="April 2026"
        primaryCta={{ label: 'Sell Credits', href: '#who-can-sell' }}
        lede={<>Section 6418 created a new marketplace for transferable tax credits. Whether you generate credits and need liquidity or have tax liability and want savings, Concord connects both sides with confidence.</>}
        stats={[
          { value: '$10B+',  label: 'Market size',           note: 'Growing rapidly' },
          { value: '12',     label: 'Eligible credit types', note: 'Section 6418' },
          { value: '91–94¢', label: 'Average price',         note: 'Per dollar of credit' },
          { value: '6–8%',   label: 'Buyer savings',         note: 'vs. full tax liability' },
        ]}
      />

      <StickyNav items={stickyNavItems} />

      {/* What Are Transferable Credits */}
      <section id="what-are-tc" className="surface-ink band">
        <div className="arch">
          <ServiceMediaSplit
            code="F/01"
            eyebrow="Understanding Section 6418"
            title="What Are Transferable Tax Credits?"
            mediaVariant="transaction"
            mediaAlt="Financial data visualization representing the transferable tax credit marketplace"
            lede={<>The Inflation Reduction Act created Section 6418, allowing entities that generate clean energy tax credits to sell them to unrelated third-party buyers for cash. This unlocks liquidity for project developers and delivers tax savings to corporate buyers, without complex tax equity partnerships. Organizations pursuing <Link to="/179d-tax-deduction" className="ed-link">179D deductions</Link> or <Link to="/direct-pay" className="ed-link">Direct Pay elections</Link> can also benefit from understanding the transfer marketplace.</>}
          >
            <p className="service-definition mt-5 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
              Transferability has rapidly created a multi-billion dollar market, simplifying how clean energy projects are financed and making tax credits accessible to a much broader set of participants. Learn how <Link to="/the-concord-standard" className="ed-link">The Concord Standard</Link> ensures every transaction is handled with rigor.
            </p>

            <div className="key-facts mt-8">
              <p className="tech-label mb-4"><span className="index-num mr-2 text-[rgb(var(--concord-glow))]">K/01</span>Key Transferable Credit Facts</p>
              <ServiceEligibilityIndex
                rows={[
                  { title: 'Third-Party Sale',    desc: 'Section 6418 allows unrelated third-party sale of clean energy tax credits for cash.' },
                  { title: 'No Tax Equity',       desc: 'No partnership or tax equity structure required to transfer.' },
                  { title: 'Dollar-for-Dollar',   desc: 'Buyers claim credits dollar-for-dollar on their federal tax return.' },
                  { title: 'Pre-Filing',          desc: 'Pre-filing IRS registration is required before completing the transfer.' },
                  { title: 'Market Pricing',      desc: 'PWA compliance and clean documentation drive the highest market prices.' },
                ]}
              />
            </div>

            <div className="mt-10">
              <ServiceFactsRail
                facts={[
                  { label: 'Average Price',   value: '91–94¢', note: 'Per dollar of credit' },
                  { label: 'Typical Timeline', value: '4–8 wks', note: 'Engagement to close' },
                ]}
              />
            </div>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="P/01"
            eyebrow="The Process"
            title="How Our Marketplace Works"
            lede="Concord manages every step from credit identification through post-transfer support."
          />
          <ServiceProcess steps={processSteps} />
        </div>
      </section>

      {/* Who Can Sell */}
      <section id="who-can-sell" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="S/01"
            eyebrow="For Sellers"
            title="Who Can Sell Credits?"
            lede="Any entity that generates eligible clean energy tax credits under the IRA can sell them through Section 6418. Common credit generators include:"
          />
          <ServiceAudienceGrid items={sellerCards} />
        </div>
      </section>

      {/* Who Can Buy */}
      <section id="who-can-buy" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="B/01"
            eyebrow="For Buyers"
            title="Who Can Buy Credits?"
            lede={<>Any entity with federal income tax liability can purchase transferable credits and claim them dollar-for-dollar against taxes owed. Learn more about <Link to="/why-us" className="ed-link">why organizations choose Concord</Link> to navigate this process. Our buyer network includes:</>}
          />
          <ServiceAudienceGrid items={buyerCards} />
        </div>
      </section>

      {/* Why Concord */}
      <section id="why-concord" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="W/01"
            eyebrow="Why Concord"
            title="Your Trusted Intermediary"
            lede={<>Every transaction is backed by Concord's deep expertise in energy tax law, project finance, and credit substantiation. <Link to="/who-we-are" className="ed-link">Meet the team</Link> behind the marketplace.</>}
          />
          <ServiceAudienceGrid
            items={[
              { icon: MagnifyingGlass, title: 'Due Diligence',    desc: 'Comprehensive project verification, credit substantiation, and seller vetting for every transaction.' },
              { icon: ChartBar,        title: 'Price Discovery',  desc: 'Market-driven pricing informed by our proprietary deal data and broad network of buyers and sellers.' },
              { icon: Scales,          title: 'Legal Structuring', desc: 'Transfer agreements with tax indemnification, representations, warranties, and IRS compliance provisions.' },
              { icon: Headset,         title: 'Ongoing Support',  desc: 'Post-closing compliance monitoring, IRS registration support, and audit defense assistance.' },
              { icon: ShieldCheck,     title: 'Tax Indemnification', desc: 'Buyers receive contractual indemnification against credit disallowance or recapture risk.' },
              { icon: Lock,            title: 'IRS Compliance',   desc: 'Full pre-filing registration, transfer election support, and Form 3800 filing guidance.' },
              { icon: Eye,             title: 'Full Transparency', desc: 'Clear pricing, no hidden fees, and complete visibility into credit provenance and project details.' },
              { icon: Certificate,     title: 'Audit Defense',    desc: 'Post-closing support including documentation packages and audit defense assistance if needed.' },
            ]}
          />
        </div>
      </section>

      {/* Recent Transactions */}
      <section id="case-studies" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="C/01"
            eyebrow="Recent Transactions"
            title="Proven Results"
          />
          <ServiceEvidence
            items={[
              { amount: '$1.2M', title: 'Public School District',  desc: 'A public school district leveraged energy-efficient building upgrades across multiple campuses, capturing 179D deductions and transferring credits to unlock immediate savings.' },
              { amount: '$750K', title: 'Military Facility',       desc: "A military facility achieved significant energy efficiency improvements and monetized the resulting tax credits through Concord's proven methodology." },
              { amount: '$2.5M', title: 'Multifamily Developer',   desc: 'A multifamily developer maximized incentives across a portfolio of new construction projects, combining Direct Pay and transferable credits for optimal value.' },
            ]}
          />
        </div>
      </section>

      <SharedServiceFAQ
        faqs={faqs}
        intro={<>New to transferable credits? We answer the most common questions from both buyers and sellers navigating the Section 6418 marketplace. For more <Link to="/resources" className="ed-link">insights and resources</Link>, visit our knowledge center.</>}
      />

      <RelatedServices currentHref="/transferable-tax-credits" />

      <ServiceFinalCTA
        eyebrow="Get Started"
        headline="Ready to Monetize Your Credits?"
        description="Whether you are selling credits for cash or buying them at a discount, Concord makes the process simple, safe, and fast. Schedule a consultation today."
      />
    </ServicePageShell>
  );
}
