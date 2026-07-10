import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  Bank,
  GraduationCap,
  Cross,
  Leaf,
  Buildings,
  UsersThree,
  Sun,
  Wind,
  Lightning,
  BatteryCharging,
  Atom,
  Tree,
  Gavel,
  MagnifyingGlass,
  FileText,
  ClipboardText,
  ShieldCheck,
  CheckCircle,
  ChartBar,
  Headset,
  Scales,
  Certificate,
  CurrencyDollar,
  HandCoins,
  Handshake,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateWebPageSchema, generateSpeakableSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import StickyNav from '@/components/layout/StickyNav';
import ServiceHero from '@/components/sections/ServiceHero';
import VideoExplainer from '@/components/sections/VideoExplainer';

const stickyNavItems = [
  { label: 'What Is Direct Pay?', href: '#what-is-6417' },
  { label: 'Eligible Credits', href: '#eligible-credits' },
  { label: 'Projects', href: '#qualifying-projects' },
  { label: 'Who Qualifies?', href: '#who-qualifies' },
  { label: 'How to Claim', href: '#how-to-claim' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Why Concord', href: '#why-concord' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  {
    question: 'What is Section 6417 Direct Pay?',
    answer: 'Section 6417, also known as "elective pay" or "direct pay," was introduced by the Inflation Reduction Act to allow tax-exempt entities to receive certain clean energy tax credits as direct cash payments from the IRS. This means municipalities, nonprofits, tribal governments, and other tax-exempt organizations can now monetize credits they could never use before.',
  },
  {
    question: 'Which entities qualify for Direct Pay?',
    answer: 'Tax-exempt organizations under IRC 501(a), state and local governments, tribal governments, the Tennessee Valley Authority, Alaska Native Corporations, and rural electric cooperatives all qualify for Direct Pay. Certain applicable entities may also qualify for specific credits.',
  },
  {
    question: 'Which credits are eligible for Direct Pay?',
    answer: 'Eleven credits qualify, including the Investment Tax Credit (ITC), Production Tax Credit (PTC), Section 179D energy efficient commercial buildings deduction, Section 45Q carbon capture credit, Section 45V clean hydrogen credit, and several others created or expanded by the IRA.',
  },
  {
    question: 'How does the Direct Pay process work?',
    answer: 'Entities must complete IRS pre-filing registration, file an annual tax return (even if not normally required), and make the Direct Pay election. The IRS then treats the credit as a tax payment, resulting in a refund equal to the credit amount.',
  },
  {
    question: 'Is there a deadline to elect Direct Pay?',
    answer: 'The Direct Pay election must be made on the entity\'s tax return for the year the credit is determined, filed by the due date (including extensions). Pre-filing registration must be completed before the return is filed.',
  },
  {
    question: 'Can Direct Pay be combined with other incentives?',
    answer: 'Yes. Direct Pay can be layered with other IRA provisions. For example, a tax-exempt entity could claim both the 179D deduction and Direct Pay for eligible credits on the same project, or ensure PWA compliance to capture the enhanced 5x bonus rate on applicable credits.',
  },
  {
    question: 'What documentation is required to support a Direct Pay election?',
    answer: 'Entities need IRS pre-filing registration confirmation, credit substantiation records tied to the qualifying project, and a timely filed annual return that carries the Direct Pay election. Concord assembles the full documentation package so the election is defensible under IRS examination.',
  },
  {
    question: 'How long does the Direct Pay process take end to end?',
    answer: 'From pre-filing registration through payment, most engagements run over several months, with pre-filing registration itself typically the longest step. Concord manages the timeline so registration, election filing, and IRS coordination stay aligned with your tax year and cash-flow needs.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Section 6417 Direct Pay',
  description: 'Section 6417 Direct Pay enables tax-exempt entities to receive clean energy tax credits as direct cash payments from the IRS. Concord manages the full process.',
  url: 'https://www.concordenergy.com/services/section-6417-direct-pay',
});

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.concordenergy.com/' },
  { name: 'Services', url: 'https://www.concordenergy.com/#services' },
  { name: 'Direct Pay', url: 'https://www.concordenergy.com/services/section-6417-direct-pay' },
]);

const tabData = [
  {
    id: 'itc',
    label: 'ITC (48 & 48E)',
    title: 'Investment Tax Credit',
    rate: '6% / 30%',
    description: 'The ITC provides a percentage-based credit for investment in qualifying clean energy property. With PWA compliance, the rate increases from 6% to 30%, with potential adders for domestic content and energy communities pushing it to 50% or more.',
    items: ['Solar energy systems', 'Energy storage (standalone)', 'Geothermal heat pumps', 'Microgrid controllers', 'Fuel cells & combined heat and power'],
  },
  {
    id: 'ptc',
    label: 'PTC (45 & 45Y)',
    title: 'Production Tax Credit',
    rate: '0.55¢ / 2.75¢ per kWh',
    description: 'The PTC provides a per-kilowatt-hour credit for electricity generated from qualifying renewable sources over a 10-year period. PWA compliance unlocks the full 2.75¢/kWh rate.',
    items: ['Wind energy facilities', 'Solar energy facilities', 'Geothermal energy', 'Municipal solid waste', 'Qualified hydropower'],
  },
  {
    id: '45q',
    label: '45Q',
    title: 'Carbon Capture Credit',
    rate: '$17 / $85 per ton',
    description: 'Section 45Q provides credits for qualified carbon oxide captured and sequestered. The enhanced rate of $85/ton (geological storage) requires PWA compliance.',
    items: ['Direct air capture', 'Industrial point source capture', 'Geological sequestration', 'Enhanced oil recovery', 'Utilization pathways'],
  },
  {
    id: '45v',
    label: '45V',
    title: 'Clean Hydrogen Credit',
    rate: '$0.60 / $3.00 per kg',
    description: 'Section 45V provides credits for clean hydrogen production based on lifecycle greenhouse gas emissions. The maximum $3.00/kg rate requires PWA compliance and the lowest emissions tier.',
    items: ['Electrolysis from renewables', 'Steam methane reforming with CCS', 'Biomass gasification', 'Nuclear-powered electrolysis', 'Thermochemical processes'],
  },
];

export default function DirectPay() {
  const [activeTab, setActiveTab] = useState('itc');

  return (
    <>
      <SEOHead
        title="Section 6417 Direct Pay | Concord Energy Strategies"
        description="Section 6417 Direct Pay enables tax-exempt entities to receive clean energy tax credits as direct cash payments from the IRS. Concord manages the full process."
        canonical="/direct-pay"
      />
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={generateWebPageSchema({ name: 'Section 6417 Direct Pay | Concord Energy Strategies', description: 'Section 6417 Direct Pay Consulting', url: '/direct-pay' })} />
      <SchemaScript schema={generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts'])} />
      <SchemaScript schema={generateHowToSchema({
        name: 'How to Claim Section 6417 Direct Pay',
        description: "Concord's process to secure Section 6417 Direct Pay refunds for tax-exempt entities.",
        steps: [
          { title: 'Eligibility Review', description: 'Confirm entity type and qualifying clean energy project details.' },
          { title: 'Documentation & Modeling', description: 'Gather asset records and prepare compliance documentation.' },
          { title: 'Pre-Filing Registration', description: 'Register the project with the IRS to receive a registration number.' },
          { title: 'Elective Payment Election', description: 'File Form 3800 and required elections on the annual return.' },
          { title: 'IRS Payment Monetization', description: 'Receive direct cash payment from Treasury and confirm reconciliation.' },
        ],
      })} />

      <ServiceHero
        code="S/03"
        eyebrow="Section 6417 Direct Pay"
        title="Turn Tax Credits Into Direct Cash Payments"
        lastUpdated="April 2026"
        primaryCta={{ label: 'Check Your Eligibility', href: '/contact' }}
        lede={<>For the first time, tax-exempt entities can receive clean energy tax credits as direct cash payments from the U.S. Treasury. Concord helps municipalities, nonprofits, and tribal governments navigate Section 6417 to unlock millions in new funding. Eligible entities can combine Direct Pay with the <Link to="/179d-tax-deduction" className="ed-link">179D deduction</Link> and <Link to="/transferable-tax-credits" className="ed-link">transferable credits</Link> for maximum benefit.</>}
        stats={[
          { value: 'Refundable', label: 'Cash from Treasury', note: 'Direct Payment' },
          { value: '11',          label: 'Eligible credits',    note: 'Under Section 6417' },
          { value: '$3.2M',       label: 'Average claim',       note: 'Tax-exempt entities' },
          { value: '5 yrs',       label: 'Election window',     note: 'Tax years 2023 to 2027' },
        ]}
      />

      <StickyNav items={stickyNavItems} />

      {/* What Is Direct Pay */}
      <section id="what-is-6417" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="max-w-4xl">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Understanding Section 6417</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">
                What Is Direct Pay?
              </h2>
              <p className="service-definition text-[16px] font-body text-slate-500 leading-relaxed mb-5">
                Section 6417 of the Internal Revenue Code, introduced by the Inflation Reduction Act, fundamentally changed how tax-exempt entities interact with clean energy incentives. For the first time, organizations that don't owe federal income tax can receive the full value of certain clean energy tax credits as direct cash payments from the U.S. Treasury.
              </p>
              <p className="text-[16px] font-body text-slate-500 leading-relaxed mb-6">
                This provision, also known as "elective pay," treats the credit amount as a tax payment made by the entity, generating an overpayment that the IRS refunds. The result: municipalities, school districts, nonprofits, tribal governments, and other tax-exempt organizations can now fund clean energy projects and receive real cash returns. Organizations can combine Direct Pay with the <Link to="/179d-tax-deduction" className="text-concord-green font-semibold hover:underline">179D deduction</Link> and ensure <Link to="/prevailing-wage-apprenticeship" className="text-concord-green font-semibold hover:underline">PWA compliance</Link> for the maximum 5x bonus rate on applicable credits. Learn how <Link to="/the-concord-standard" className="text-concord-green font-semibold hover:underline">The Concord Standard</Link> ensures every filing is accurate and audit-ready.
              </p>
              <div className="key-facts bg-[#151C19] text-white rounded-2xl p-6 max-w-2xl">
                <h3 className="font-heading font-bold text-[18px] text-white mb-4">Key Direct Pay Facts</h3>
                <ul className="space-y-2.5">
                  {[
                    'Section 6417 lets tax-exempt entities receive credits as direct cash payments from Treasury',
                    'Eleven clean energy credits qualify for elective pay under the IRA',
                    'Eligible entities include municipalities, school districts, nonprofits, and tribal governments',
                    'Pre-filing IRS registration is required before claiming the payment',
                    'PWA compliance unlocks the 5x bonus multiplier on applicable credits',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-200 text-[14px] leading-relaxed">
                      <CheckCircle size={16} weight="fill" className="text-concord-green shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Eligible Credits Tabs */}
      <section id="eligible-credits" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Eligible Credits</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Credits Available Through Direct Pay</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">Eleven credits qualify for Direct Pay under Section 6417. Select a credit type to learn more about eligibility and rates.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            {/* Tab Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-250 ${
                    activeTab === tab.id
                      ? 'bg-[#151C19] text-white'
                      : 'bg-gray-100 text-concord-dark hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Tab Panel */}
            {tabData.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id} className="bg-concord-mint rounded-3xl p-8 lg:p-12 border border-black/[0.06]">
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2">{tab.title}</h3>
                      <p className="text-concord-green font-heading font-extrabold text-lg mb-4">{tab.rate}</p>
                      <p className="text-slate-500 text-base leading-relaxed">{tab.description}</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base mb-4">Qualifying Technologies</h4>
                      <ul className="space-y-3">
                        {tab.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle size={20} weight="fill" className="text-concord-green mt-0.5 shrink-0" />
                            <span className="text-slate-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </ScrollFadeIn>
        </div>
      </section>

      {/* Qualifying Projects */}
      <section id="qualifying-projects" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Project Types</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Qualifying Projects</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">Direct Pay applies to a wide range of clean energy projects. These are the most common project types our clients pursue.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sun, title: 'Solar Installations', desc: 'Rooftop and ground-mount solar arrays for government buildings, schools, and nonprofit facilities generating ITC or PTC credits.' },
                { icon: Wind, title: 'Wind Energy', desc: 'Small and utility-scale wind projects generating production tax credits over a 10-year period for eligible entities.' },
                { icon: BatteryCharging, title: 'Energy Storage', desc: 'Standalone battery storage systems now eligible for their own ITC, enabling resilience and demand management for public facilities.' },
                { icon: Lightning, title: 'EV Infrastructure', desc: 'Electric vehicle charging station installations at government and nonprofit locations qualifying for the Section 30C credit.' },
                { icon: Buildings, title: 'Building Efficiency', desc: 'Energy efficient building improvements qualifying for the 179D deduction, including HVAC, lighting, and envelope upgrades.' },
                { icon: Leaf, title: 'Biogas & Clean Fuels', desc: 'Renewable natural gas, clean hydrogen production, and sustainable aviation fuel projects generating applicable credits.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col">
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

      {/* Who Qualifies */}
      <section id="who-qualifies" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Eligible Entities</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Who Qualifies for Direct Pay?</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">Section 6417 is specifically designed for organizations that historically could not benefit from tax credits because they owe no federal income tax.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Bank, title: 'State & Local Governments', desc: 'Municipalities, counties, state agencies, and public utilities investing in clean energy infrastructure.' },
                { icon: GraduationCap, title: 'School Districts', desc: 'K-12 school districts and public university systems implementing solar, geothermal, and energy efficiency projects.' },
                { icon: Cross, title: 'Nonprofit Organizations', desc: 'Tax-exempt organizations under IRC 501(a), including hospitals, community organizations, and religious institutions.' },
                { icon: UsersThree, title: 'Tribal Governments', desc: 'Indian tribal governments and Alaska Native Corporations pursuing clean energy projects on tribal lands.' },
                { icon: Buildings, title: 'Public Housing Authorities', desc: 'Housing authorities and affordable housing organizations implementing clean energy improvements across their portfolios.' },
                { icon: Leaf, title: 'Rural Electric Cooperatives', desc: 'Rural electric cooperatives and the Tennessee Valley Authority, now able to monetize credits on clean energy investments.' },
              ].map((card, i) => (
                <div key={i} className="bg-concord-mint rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col">
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

      {/* How to Claim */}
      <section id="how-to-claim" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">The Process</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">How to Claim Direct Pay</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">Concord manages every step from pre-filing registration to payment receipt. Our proven process ensures you capture the maximum credit amount.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Project Assessment', desc: 'We evaluate your clean energy projects to identify all eligible credits and estimate the total Direct Pay amount available.' },
                { step: '02', title: 'Pre-Filing Registration', desc: 'We complete the mandatory IRS pre-filing registration process, obtaining the registration number required to make the Direct Pay election.' },
                { step: '03', title: 'Credit Substantiation', desc: 'We document all qualifying costs, activities, and compliance requirements to build an audit-ready credit substantiation package.' },
                { step: '04', title: 'PWA Compliance', desc: 'For projects requiring PWA compliance, we ensure prevailing wage and apprenticeship requirements are met to capture the 5x bonus rate.' },
                { step: '05', title: 'Tax Return Filing', desc: 'We prepare or coordinate the filing of your annual tax return with the Direct Pay election, ensuring all required forms and schedules are included.' },
                { step: '06', title: 'Payment Receipt', desc: 'The IRS processes your election and issues a direct cash payment equal to the full credit amount, typically within the standard refund timeline.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-concord-green text-white flex items-center justify-center font-heading font-extrabold text-lg mb-5">
                    {card.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed flex-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <VideoExplainer
        headline="See How Direct Pay Works"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Case Studies */}
      <section id="case-studies" className="py-[80px] lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Proven Results</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Direct Pay in Action</h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: GraduationCap, title: 'Public School District', desc: 'A large school district installed solar across 12 campuses and received $4.2M in Direct Pay refunds for ITC credits.', savings: '$4.2M', sector: 'Education' },
                { icon: Bank, title: 'Municipal Government', desc: 'A city government deployed solar and EV charging across public facilities, claiming Direct Pay on multiple credit types.', savings: '$2.8M', sector: 'Government' },
                { icon: Cross, title: 'Nonprofit Hospital', desc: 'A nonprofit hospital system leveraged Direct Pay for a combined solar and geothermal project across three facilities.', savings: '$1.9M', sector: 'Healthcare' },
              ].map((card, i) => (
                <div key={i} className="bg-concord-cream rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col">
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

      {/* Why Concord */}
      <section id="why-concord" className="py-[80px] lg:py-[100px] bg-concord-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">Why Concord</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Your Direct Pay Partner</h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">Concord specializes in navigating the IRS requirements for Direct Pay elections. Learn more about <Link to="/why-us" className="text-concord-green font-semibold hover:underline">why organizations choose Concord</Link> and <Link to="/who-we-are" className="text-concord-green font-semibold hover:underline">the team behind our work</Link>.</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'IRS Registration Experts', desc: 'We manage the entire pre-filing registration process, ensuring your entity is properly registered and compliant before filing.' },
                { icon: FileText, title: 'Credit Substantiation', desc: 'Comprehensive documentation packages that withstand IRS examination, with detailed cost documentation and credit calculations.' },
                { icon: Scales, title: 'Legal & Tax Advisory', desc: 'Expert guidance on election mechanics, timing strategies, and coordination with your existing tax advisors.' },
                { icon: ChartBar, title: 'Multi-Credit Optimization', desc: 'We analyze your full project portfolio to identify all applicable credits and maximize your total Direct Pay amount.' },
                { icon: Certificate, title: 'PWA Compliance', desc: 'Integrated prevailing wage and apprenticeship compliance to ensure you capture the enhanced 5x bonus rate on eligible credits.' },
                { icon: Headset, title: 'End-to-End Support', desc: 'From initial assessment through payment receipt and ongoing audit defense, Concord manages every step of the process.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green flex flex-col">
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

      {/* FAQ */}
      <section id="faq" className="py-[80px] lg:py-[100px] bg-concord-mint">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <ScrollFadeIn className="lg:col-span-2">
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block font-heading">FAQ</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">Frequently Asked Questions</h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8">Everything you need to know about Section 6417 Direct Pay for tax-exempt entities.</p>
              <Link to="/contact" className="bg-[#151C19] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2">
                Still have questions? <ArrowRight size={16} />
              </Link>
            </ScrollFadeIn>

            <ScrollFadeIn className="lg:col-span-3">
              <FaqInline faqs={faqs} />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner - Glassmorphism */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
            alt="Large-scale solar farm representing clean energy Direct Pay opportunities"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#151C19]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <span className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4 block">Start Today</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-6 text-balance">
                Your Clean Energy Credits Are Waiting
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Tax-exempt entities are leaving millions on the table. Let Concord help you claim the direct cash payments you're entitled to under Section 6417.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-[#151C19] px-8 py-3.5 rounded-full text-base font-bold tracking-wide inline-flex items-center gap-2 hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
                  Start the Conversation <ArrowRight size={16} />
                </Link>
                <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="px-8 py-3.5 rounded-full text-base font-bold tracking-wide border border-white/30 text-white hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}

function FaqInline({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-black/[0.06]">
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex items-center justify-between py-6 text-base font-semibold text-concord-dark w-full text-left">
            {faq.question}
            <span className={`text-xl text-concord-green ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="pb-6 text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
