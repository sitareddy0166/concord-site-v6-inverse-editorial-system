import { useState } from 'react';
import financialAnalysisImg from '@/assets/financial-analysis.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  CheckCircle,
  Sun,
  Wind,
  Car,
  BatteryCharging,
  Atom,
  Tree,
  Buildings,
  Bank,
  Shield,
  Cpu,
  ChartPie,
  User,
  MagnifyingGlass,
  ChartBar,
  Scales,
  Headset,
  ShieldCheck,
  Lock,
  Eye,
  Certificate,
  GraduationCap,
  ShieldStar,
  Quotes,
  ChatCircle,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateWebPageSchema, generateSpeakableSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import StickyNav from '@/components/layout/StickyNav';
import ServiceHero from '@/components/sections/ServiceHero';
import VideoExplainer from '@/components/sections/VideoExplainer';
import ServicePageShell from '@/components/service/ServicePageShell';

const stickyNavItems = [
  { label: 'What Are Transferable Credits?', href: '#what-are-tc' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Who Can Sell', href: '#who-can-sell' },
  { label: 'Who Can Buy', href: '#who-can-buy' },
  { label: 'Why Concord', href: '#why-concord' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  {
    question: 'What is Section 6418 transferability?',
    answer: 'Section 6418, introduced by the Inflation Reduction Act, allows eligible taxpayers who generate clean energy tax credits to sell those credits to unrelated third-party buyers for cash. This creates a liquid market for tax credits without the complexity of traditional tax equity structures.',
  },
  {
    question: 'Which credits are eligible for transfer?',
    answer: 'Twelve types of credits qualify, including the Investment Tax Credit (ITC), Production Tax Credit (PTC), Section 45Q carbon capture credits, Section 45V clean hydrogen credits, Section 45X advanced manufacturing credits, and others created or extended by the IRA.',
  },
  {
    question: 'What discount do buyers typically receive?',
    answer: 'Market pricing typically ranges from 90 to 95 cents per dollar of credit value, depending on credit type, project risk profile, and market conditions. Concord ensures competitive pricing through its broad buyer network.',
  },
  {
    question: 'How does Concord protect buyers from risk?',
    answer: 'Concord performs comprehensive due diligence on every transaction, including project verification, credit substantiation, seller financial review, and legal structuring with tax indemnification provisions to protect buyers.',
  },
  {
    question: 'How long does a transfer take?',
    answer: 'A typical transfer takes 4 to 8 weeks from initial engagement to closing, depending on deal complexity and due diligence requirements. Concord manages the full timeline to ensure efficient execution.',
  },
  {
    question: 'Can any taxpayer buy transferable credits?',
    answer: 'Yes. Any taxpayer with federal income tax liability can purchase transferable credits under Section 6418. This includes corporations, partnerships, individuals, and other entities across all industries.',
  },
  {
    question: 'What documentation supports a Section 6418 transfer?',
    answer: 'A defensible transfer package includes IRS pre-filing registration numbers for both parties, credit substantiation from the underlying project, a transfer agreement with tax indemnification provisions, and evidence supporting the credit amount claimed. Concord assembles and reviews this package before closing to protect both seller and buyer.',
  },
  {
    question: 'Is IRS pre-filing registration required for every transfer?',
    answer: 'Yes. Section 6418 transfers require pre-filing registration through the IRS Energy Credits Online portal for each project generating credits, and both seller and buyer must file elections on their timely filed returns. Concord manages registration and election filings so no procedural step blocks the transaction.',
  },
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
  { step: '01', title: 'Credit Identification', desc: 'We analyze your clean energy portfolio to identify all eligible IRA tax credits, quantify their value, and determine optimal transfer timing. This step mirrors the assessment phase of The Concord Standard.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', alt: 'Energy consultant analyzing tax credit portfolio at desk' },
  { step: '02', title: 'Due Diligence', desc: 'Comprehensive project verification, credit substantiation, financial review, and risk assessment to ensure every credit is defensible and market-ready.', img: financialAnalysisImg, alt: 'Due diligence team reviewing compliance documents and financial statements at a conference table' },
  { step: '03', title: 'Buyer Matching', desc: 'Credits are matched to pre-vetted corporate buyers in our network based on credit type, size, timing preferences, and competitive market pricing.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', alt: 'Business professionals in a meeting negotiating tax credit transfer terms' },
  { step: '04', title: 'Transfer Execution', desc: 'Transfer agreements drafted with full tax indemnification, representations, warranties, and IRS compliance provisions. Cash delivered at closing.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', alt: 'Legal professional reviewing and signing a Section 6418 credit transfer agreement' },
  { step: '05', title: 'Compliance Filing', desc: 'IRS pre-filing registration, transfer election support, Form 3800 guidance, and complete documentation packages for both parties.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', alt: 'Professional preparing IRS compliance filings and transfer election and Form 3800 tracking' },
  { step: '06', title: 'Post-Transfer Support', desc: 'Ongoing compliance monitoring, audit defense assistance, and advisory support for future credit transfers and portfolio optimization.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80', alt: 'Aerial view of a large-scale solar farm representing completed clean energy project' },
];

const sellerCards = [
  { icon: Sun, title: 'Solar Developers', desc: 'Utility-scale and distributed solar project developers generating investment and production tax credits.', badge: 'ITC & PTC Credits' },
  { icon: Wind, title: 'Wind Projects', desc: 'Onshore and offshore wind energy developers earning production tax credits over a 10-year period.', badge: 'PTC Credits' },
  { icon: Car, title: 'EV Manufacturers', desc: 'Electric vehicle and commercial clean vehicle manufacturers with eligible Section 30D and 45W credits.', badge: '30D & 45W Credits' },
  { icon: BatteryCharging, title: 'Battery Storage', desc: 'Standalone and co-located energy storage projects now eligible for their own investment tax credits.', badge: 'ITC Credits' },
  { icon: Atom, title: 'Hydrogen Producers', desc: 'Clean hydrogen production facilities generating credits based on lifecycle greenhouse gas emissions.', badge: '45V Credits' },
  { icon: Tree, title: 'Carbon Capture', desc: 'Carbon capture, utilization, and storage projects earning credits for qualified CO2 sequestration.', badge: '45Q Credits' },
];

const buyerCards = [
  { icon: Buildings, title: 'Corporations', desc: 'Fortune 500 and mid-market companies looking to reduce federal tax liability while supporting clean energy.', badge: 'Fortune 500 & Mid-Market' },
  { icon: Bank, title: 'Banks & Financial Institutions', desc: 'National and regional banks leveraging transferable credits as a simpler alternative to traditional tax equity.', badge: 'National & Regional' },
  { icon: Shield, title: 'Insurance Companies', desc: 'Property & casualty and life insurers with significant tax obligations seeking dollar-for-dollar credit offsets.', badge: 'P&C & Life Insurers' },
  { icon: Cpu, title: 'Tech Companies', desc: 'Technology firms achieving ESG goals and tax optimization through strategic clean energy credit purchases.', badge: 'ESG & Tax Optimization' },
  { icon: ChartPie, title: 'Private Equity Firms', desc: 'Fund-level buyers deploying capital into transferable credits as a risk-adjusted investment strategy.', badge: 'Fund-Level Buyers' },
  { icon: User, title: 'Any U.S. Taxpayer', desc: 'Any entity or individual with federal income tax liability can purchase credits under Section 6418.', badge: 'Federal Tax Liability' },
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
          { title: 'Valuation & Buyer Match', description: 'Value the credit and match with pre-vetted corporate buyers at market rates.' },
          { title: 'Diligence & Documentation', description: 'Assemble diligence package including PWA proof, energy models, and compliance records.' },
          { title: 'Purchase Agreement', description: 'Negotiate the transfer election and execute the credit purchase agreement.' },
          { title: 'Registration & Transfer', description: 'Complete IRS pre-filing registration and file the elective transfer election.' },
        ],
      })} />

      <ServiceHero
        code="S/04"
        eyebrow="Section 6418"
        title="Monetize your clean energy tax credits"
        lastUpdated="April 2026"
        primaryCta={{ label: 'Sell Credits', href: '#who-can-sell' }}
        lede={<>Section 6418 created a new marketplace for <Link to="/transferable-tax-credits" className="ed-link">transferable tax credits</Link>. Whether you generate credits and need liquidity or have tax liability and want savings, Concord connects both sides with confidence.</>}
        stats={[
          { value: '$10B+',  label: 'Market size',         note: 'Growing rapidly' },
          { value: '12',      label: 'Eligible credit types', note: 'Section 6418' },
          { value: '91–94¢',  label: 'Average price',        note: 'Per dollar of credit' },
          { value: '6–8%',    label: 'Buyer savings',         note: 'vs. full tax liability' },
        ]}
      />

      <StickyNav items={stickyNavItems} />

      {/* What Are Transferable Credits */}
      <section id="what-are-tc" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollFadeIn>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Financial data visualization representing the transferable tax credit marketplace" width="800" height="500" loading="lazy" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-md" />
            </ScrollFadeIn>

            <ScrollFadeIn>
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Understanding Section 6418</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">
                What Are Transferable Tax Credits?
              </h2>
              <p className="service-definition text-[16px] font-body text-slate-500 leading-relaxed mb-5">
                The Inflation Reduction Act created Section 6418, allowing entities that generate clean energy tax credits to sell them to unrelated third-party buyers for cash. This unlocks liquidity for project developers and delivers tax savings to corporate buyers, without complex tax equity partnerships. Organizations pursuing <Link to="/179d-tax-deduction" className="text-concord-green font-semibold hover:underline">179D deductions</Link> or <Link to="/direct-pay" className="text-concord-green font-semibold hover:underline">Direct Pay elections</Link> can also benefit from understanding the transfer marketplace.
              </p>
              <p className="text-[16px] font-body text-slate-500 leading-relaxed mb-6">
                Transferability has rapidly created a multi-billion dollar market, simplifying how clean energy projects are financed and making tax credits accessible to a much broader set of participants. Learn how <Link to="/the-concord-standard" className="text-concord-green font-semibold hover:underline">The Concord Standard</Link> ensures every transaction is handled with rigor.
              </p>
              <div className="key-facts bg-[#151C19] text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold text-[18px] text-white mb-4">Key Transferable Credit Facts</h3>
                <ul className="space-y-2.5">
                  {[
                    'Section 6418 allows unrelated third-party sale of clean energy tax credits for cash',
                    'No partnership or tax equity structure required to transfer',
                    'Buyers claim credits dollar-for-dollar on their federal tax return',
                    'Pre-filing IRS registration is required before completing the transfer',
                    'PWA compliance and clean documentation drive the highest market prices',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-200 text-[14px] leading-relaxed">
                      <CheckCircle size={16} weight="fill" className="text-concord-green shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* How Marketplace Works - Alternating Timeline */}
      <section id="how-it-works" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">The Process</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">
                How Our Marketplace Works
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-concord-green/30"></div>

            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollFadeIn key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 ${i < processSteps.length - 1 ? 'mb-[80px]' : ''}`}>
                  <div className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-concord-green text-white font-heading font-bold text-[14px] mb-4">{step.step}</div>
                    <h3 className="font-heading font-bold text-[24px] text-concord-dark mb-3">{step.title}</h3>
                    <p className="text-[16px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <img src={step.img} alt={step.alt} width="600" height="400" className="rounded-3xl w-full shadow-md" loading="lazy" />
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <VideoExplainer
        headline="See How Transferable Credits Work"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Who Can Sell */}
      <section id="who-can-sell" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">For Sellers</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">
              Who Can Sell Credits?
            </h2>
            <p className="text-[16px] font-body text-slate-500 leading-relaxed mb-8 max-w-3xl">
              Any entity that generates eligible clean energy tax credits under the IRA can sell them through Section 6418. Common credit generators include:
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="rounded-[24px] overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80" alt="Aerial view of a large-scale solar farm generating clean energy tax credits eligible for transfer under Section 6418" className="w-full h-[280px] object-cover" loading="lazy" width="1200" height="400" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sellerCards.map((card, i) => (
                <div key={i} className="bg-white rounded-[24px] border border-black/[0.06] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-concord-green/10 flex items-center justify-center mb-4">
                    <card.icon size={20} className="text-concord-green" />
                  </div>
                  <p className="font-heading font-bold text-concord-dark mb-1">{card.title}</p>
                  <p className="text-slate-500 text-sm mb-4">{card.desc}</p>
                  <span className="mt-auto inline-block bg-concord-green/10 text-concord-green text-xs font-semibold px-3 py-1 rounded-full w-fit">{card.badge}</span>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Who Can Buy */}
      <section id="who-can-buy" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">For Buyers</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">
              Who Can Buy Credits?
            </h2>
            <p className="text-[16px] font-body text-slate-500 leading-relaxed mb-8 max-w-3xl">
              Any entity with federal income tax liability can purchase transferable credits and claim them dollar-for-dollar against taxes owed. Learn more about <Link to="/why-us" className="text-concord-green font-semibold hover:underline">why organizations choose Concord</Link> to navigate this process. Our buyer network includes:
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="rounded-[24px] overflow-hidden mb-8">
              <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buyerCards.map((card, i) => (
                <div key={i} className="bg-white rounded-[24px] border border-black/[0.06] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-concord-green/10 flex items-center justify-center mb-4">
                    <card.icon size={20} className="text-concord-green" />
                  </div>
                  <p className="font-heading font-bold text-concord-dark mb-1">{card.title}</p>
                  <p className="text-slate-500 text-sm mb-4">{card.desc}</p>
                  <span className="mt-auto inline-block bg-concord-green/10 text-concord-green text-xs font-semibold px-3 py-1 rounded-full w-fit">{card.badge}</span>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why Concord */}
      <section id="why-concord" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Why Concord</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">
                Your Trusted Intermediary
              </h2>
              <p className="text-[16px] font-body text-slate-500 leading-relaxed mt-5">
                Every transaction is backed by Concord&apos;s deep expertise in energy tax law, project finance, and credit substantiation. <Link to="/who-we-are" className="text-concord-green font-semibold hover:underline">Meet the team</Link> behind the marketplace.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MagnifyingGlass, title: 'Due Diligence', desc: 'Comprehensive project verification, credit substantiation, and seller vetting for every transaction.' },
                { icon: ChartBar, title: 'Price Discovery', desc: 'Market-driven pricing informed by our proprietary deal data and broad network of buyers and sellers.' },
                { icon: Scales, title: 'Legal Structuring', desc: 'Transfer agreements with tax indemnification, representations, warranties, and IRS compliance provisions.' },
                { icon: Headset, title: 'Ongoing Support', desc: 'Post-closing compliance monitoring, IRS registration support, and audit defense assistance.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-6">
                    <card.icon size={28} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-sm font-body text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Recent Transactions</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">
                Proven Results
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: GraduationCap, title: 'Public School District', desc: 'A public school district leveraged energy-efficient building upgrades across multiple campuses, capturing 179D deductions and transferring credits to unlock immediate savings.', savings: '$1.2M', sector: 'Education' },
                { icon: ShieldStar, title: 'Military Facility', desc: 'A military facility achieved significant energy efficiency improvements and monetized the resulting tax credits through Concord\'s proven methodology.', savings: '$750K', sector: 'Government' },
                { icon: Buildings, title: 'Multifamily Developer', desc: 'A multifamily developer maximized incentives across a portfolio of new construction projects, combining Direct Pay and transferable credits for optimal value.', savings: '$2.5M', sector: 'Real Estate' },
              ].map((card, i) => (
                <div key={i} className="bg-concord-cream rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col h-full">
                  <div className="h-2 bg-gradient-to-r from-concord-green to-emerald-500"></div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-concord-green/10 flex items-center justify-center mb-5">
                      <card.icon size={24} className="text-concord-green" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">{card.title}</h3>
                    <p className="text-sm font-body text-slate-500 leading-relaxed mb-6 flex-1">{card.desc}</p>
                    <div className="flex justify-between items-end border-t border-concord-dark/5 pt-5">
                      <div>
                        <p className="text-xs font-body text-slate-400 uppercase tracking-widest">Savings</p>
                        <p className="text-2xl font-extrabold tracking-tight text-concord-green font-heading">{card.savings}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-body text-slate-400 uppercase tracking-widest">Sector</p>
                        <p className="text-sm font-bold font-heading">{card.sector}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Dark Trust Section */}
      <section className="py-[80px] lg:py-[100px] bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Marketplace Guarantees</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white">
                Built on Trust &amp; Transparency
              </h2>
              <p className="text-[16px] font-body text-white/50 leading-relaxed mt-5">
                Every transaction through Concord&apos;s marketplace is backed by institutional-grade protections for both buyers and sellers.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: 'Tax Indemnification', desc: 'Buyers receive contractual indemnification against credit disallowance or recapture risk.' },
                { icon: Lock, title: 'IRS Compliance', desc: 'Full pre-filing registration, transfer election support, and Form 3800 filing guidance.' },
                { icon: Eye, title: 'Full Transparency', desc: 'Clear pricing, no hidden fees, and complete visibility into credit provenance and project details.' },
                { icon: Certificate, title: 'Audit Defense', desc: 'Post-closing support including documentation packages and audit defense assistance if needed.' },
              ].map((card, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
                  <card.icon size={32} className="text-concord-greenHover mb-5" />
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{card.title}</h3>
                  <p className="text-sm font-body text-white/50 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollFadeIn>
            <Quotes size={48} weight="fill" className="text-concord-green/20 mx-auto mb-8" />
            <blockquote className="text-[22px] md:text-[28px] leading-relaxed font-heading font-semibold tracking-tight text-concord-dark text-balance mb-10">
              &ldquo;Concord&apos;s marketplace expertise made the entire credit transfer process seamless. Their due diligence gave our board complete confidence, and we realized significant tax savings that directly impacted our bottom line.&rdquo;
            </blockquote>
            <div>
              <p className="font-bold font-heading text-concord-dark">James Richardson</p>
              <p className="text-slate-500 text-sm">VP of Facilities, National Education Partners</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <ScrollFadeIn className="lg:w-[40%]">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">FAQ</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] font-body text-slate-500 leading-relaxed mb-8">
                New to transferable credits? We answer the most common questions from both buyers and sellers navigating the Section 6418 marketplace. For more <Link to="/resources" className="text-concord-green font-semibold hover:underline">insights and resources</Link>, visit our knowledge center.
              </p>
              <Link to="/contact" className="bg-[#151C19] text-white px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 font-heading">
                Talk to an Expert <ArrowRight size={16} />
              </Link>
            </ScrollFadeIn>

            <ScrollFadeIn className="lg:w-[60%]">
              <FaqInline faqs={faqs} />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner - Glassmorphism */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80" alt="Clean energy solar farm at sunset representing sustainable investment" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#151C19]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-5">
                Ready to Monetize Your Credits?
              </h2>
              <p className="text-white/60 text-lg font-body leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you are selling credits for cash or buying them at a discount, Concord makes the process simple, safe, and fast. Schedule a consultation today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-[#151C19] font-bold px-8 py-3.5 rounded-full text-base inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
                  Start the Conversation <ArrowRight size={16} />
                </Link>
                <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-full text-base hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 font-heading">
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </ServicePageShell>
  );
}

function FaqInline({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-black/[0.06]">
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex items-center justify-between p-6 font-heading font-semibold text-lg w-full text-left">
            {faq.question}
            <CaretRight size={20} className={`text-concord-dark/40 shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-90' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="px-6 pb-6 text-sm font-body text-slate-500 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
