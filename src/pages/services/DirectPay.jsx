import { Link } from 'react-router-dom';
import {
  Bank, GraduationCap, Cross, Leaf, Buildings, UsersThree,
  Sun, Wind, Lightning, BatteryCharging,
  FileText, ShieldCheck, ChartBar, Headset, Scales, Certificate,
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
  ServiceComparison, ServiceEvidence,
} from '@/components/service';

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
  { question: 'What is Section 6417 Direct Pay?', answer: 'Section 6417, also known as "elective pay" or "direct pay," was introduced by the Inflation Reduction Act to allow tax-exempt entities to receive certain clean energy tax credits as direct cash payments from the IRS. This means municipalities, nonprofits, tribal governments, and other tax-exempt organizations can now monetize credits they could never use before.' },
  { question: 'Which entities qualify for Direct Pay?', answer: 'Tax-exempt organizations under IRC 501(a), state and local governments, tribal governments, the Tennessee Valley Authority, Alaska Native Corporations, and rural electric cooperatives all qualify for Direct Pay. Certain applicable entities may also qualify for specific credits.' },
  { question: 'Which credits are eligible for Direct Pay?', answer: 'Eleven credits qualify, including the Investment Tax Credit (ITC), Production Tax Credit (PTC), Section 179D energy efficient commercial buildings deduction, Section 45Q carbon capture credit, Section 45V clean hydrogen credit, and several others created or expanded by the IRA.' },
  { question: 'How does the Direct Pay process work?', answer: 'Entities must complete IRS pre-filing registration, file an annual tax return (even if not normally required), and make the Direct Pay election. The IRS then treats the credit as a tax payment, resulting in a refund equal to the credit amount.' },
  { question: 'Is there a deadline to elect Direct Pay?', answer: 'The Direct Pay election must be made on the entity\'s tax return for the year the credit is determined, filed by the due date (including extensions). Pre-filing registration must be completed before the return is filed.' },
  { question: 'Can Direct Pay be combined with other incentives?', answer: 'Yes. Direct Pay can be layered with other IRA provisions. For example, a tax-exempt entity could claim both the 179D deduction and Direct Pay for eligible credits on the same project, or ensure PWA compliance to capture the enhanced 5x bonus rate on applicable credits.' },
  { question: 'What documentation is required to support a Direct Pay election?', answer: 'Entities need IRS pre-filing registration confirmation, credit substantiation records tied to the qualifying project, and a timely filed annual return that carries the Direct Pay election. Concord assembles the full documentation package so the election is defensible under IRS examination.' },
  { question: 'How long does the Direct Pay process take end to end?', answer: 'From pre-filing registration through payment, most engagements run over several months, with pre-filing registration itself typically the longest step. Concord manages the timeline so registration, election filing, and IRS coordination stay aligned with your tax year and cash-flow needs.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Section 6417 Direct Pay',
  description: 'Section 6417 Direct Pay enables tax-exempt entities to receive clean energy tax credits as direct cash payments from the IRS. Concord manages the full process.',
  url: '/direct-pay',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/#services' },
  { name: 'Direct Pay', url: '/direct-pay' },
]);

export default function DirectPay() {
  return (
    <ServicePageShell>
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
      <section id="what-is-6417" className="surface-ink band">
        <div className="arch">
          <ServiceMediaSplit
            code="F/01"
            eyebrow="Understanding Section 6417"
            title="What Is Direct Pay?"
            mediaVariant="public-infra"
            mediaAlt="Municipal facility with rooftop solar array representing a Section 6417 Direct Pay project"
            lede={<>Section 6417 of the Internal Revenue Code, introduced by the Inflation Reduction Act, fundamentally changed how tax-exempt entities interact with clean energy incentives. For the first time, organizations that do not owe federal income tax can receive the full value of certain clean energy tax credits as direct cash payments from the U.S. Treasury.</>}
          >
            <p className="service-definition mt-5 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
              This provision, also known as "elective pay," treats the credit amount as a tax payment made by the entity, generating an overpayment that the IRS refunds. The result: municipalities, school districts, nonprofits, tribal governments, and other tax-exempt organizations can now fund clean energy projects and receive real cash returns. Organizations can combine Direct Pay with the <Link to="/179d-tax-deduction" className="ed-link">179D deduction</Link> and ensure <Link to="/prevailing-wage-apprenticeship" className="ed-link">PWA compliance</Link> for the maximum 5x bonus rate on applicable credits. Learn how <Link to="/the-concord-standard" className="ed-link">The Concord Standard</Link> ensures every filing is accurate and audit-ready.
            </p>

            <div className="key-facts mt-8">
              <p className="tech-label mb-4"><span className="index-num mr-2 text-[rgb(var(--concord-glow))]">K/01</span>Key Direct Pay Facts</p>
              <ServiceEligibilityIndex
                rows={[
                  { title: 'Cash from Treasury', desc: 'Section 6417 lets tax-exempt entities receive credits as direct cash payments from Treasury.' },
                  { title: 'Eleven Credits',     desc: 'Eleven clean energy credits qualify for elective pay under the IRA.' },
                  { title: 'Eligible Entities',  desc: 'Eligible entities include municipalities, school districts, nonprofits, and tribal governments.' },
                  { title: 'Pre-Filing',         desc: 'Pre-filing IRS registration is required before claiming the payment.' },
                  { title: 'PWA Bonus',          desc: 'PWA compliance unlocks the 5x bonus multiplier on applicable credits.' },
                ]}
              />
            </div>

            <div className="mt-10">
              <ServiceFactsRail
                facts={[
                  { label: 'Election window', value: '5 yrs', note: 'Tax years 2023 to 2027' },
                  { label: 'Average claim',   value: '$3.2M', note: 'Tax-exempt entities' },
                ]}
              />
            </div>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* Eligible Credits */}
      <section id="eligible-credits" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="I/01"
            eyebrow="Eligible Credits"
            title="Credits Available Through Direct Pay"
            lede="Eleven credits qualify for Direct Pay under Section 6417. These four represent the majority of projects our clients pursue."
          />
          <ServiceComparison
            headers={['Credit', 'Rate', 'Description', 'Qualifying Technologies']}
            rows={[
              [
                'ITC (48 & 48E) — Investment Tax Credit',
                '6% / 30%',
                'The ITC provides a percentage-based credit for investment in qualifying clean energy property. With PWA compliance, the rate increases from 6% to 30%, with potential adders for domestic content and energy communities pushing it to 50% or more.',
                'Solar energy systems; energy storage (standalone); geothermal heat pumps; microgrid controllers; fuel cells & combined heat and power.',
              ],
              [
                'PTC (45 & 45Y) — Production Tax Credit',
                '0.55¢ / 2.75¢ per kWh',
                'The PTC provides a per-kilowatt-hour credit for electricity generated from qualifying renewable sources over a 10-year period. PWA compliance unlocks the full 2.75¢/kWh rate.',
                'Wind energy facilities; solar energy facilities; geothermal energy; municipal solid waste; qualified hydropower.',
              ],
              [
                '45Q — Carbon Capture Credit',
                '$17 / $85 per ton',
                'Section 45Q provides credits for qualified carbon oxide captured and sequestered. The enhanced rate of $85/ton (geological storage) requires PWA compliance.',
                'Direct air capture; industrial point source capture; geological sequestration; enhanced oil recovery; utilization pathways.',
              ],
              [
                '45V — Clean Hydrogen Credit',
                '$0.60 / $3.00 per kg',
                'Section 45V provides credits for clean hydrogen production based on lifecycle greenhouse gas emissions. The maximum $3.00/kg rate requires PWA compliance and the lowest emissions tier.',
                'Electrolysis from renewables; steam methane reforming with CCS; biomass gasification; nuclear-powered electrolysis; thermochemical processes.',
              ],
            ]}
          />
        </div>
      </section>

      {/* Qualifying Projects */}
      <section id="qualifying-projects" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="P/01"
            eyebrow="Project Types"
            title="Qualifying Projects"
            lede="Direct Pay applies to a wide range of clean energy projects. These are the most common project types our clients pursue."
          />
          <ServiceAudienceGrid
            items={[
              { icon: Sun,             title: 'Solar Installations',    desc: 'Rooftop and ground-mount solar arrays for government buildings, schools, and nonprofit facilities generating ITC or PTC credits.' },
              { icon: Wind,            title: 'Wind Energy',            desc: 'Small and utility-scale wind projects generating production tax credits over a 10-year period for eligible entities.' },
              { icon: BatteryCharging, title: 'Energy Storage',         desc: 'Standalone battery storage systems now eligible for their own ITC, enabling resilience and demand management for public facilities.' },
              { icon: Lightning,       title: 'EV Infrastructure',      desc: 'Electric vehicle charging station installations at government and nonprofit locations qualifying for the Section 30C credit.' },
              { icon: Buildings,       title: 'Building Efficiency',    desc: 'Energy efficient building improvements qualifying for the 179D deduction, including HVAC, lighting, and envelope upgrades.' },
              { icon: Leaf,            title: 'Biogas & Clean Fuels',   desc: 'Renewable natural gas, clean hydrogen production, and sustainable aviation fuel projects generating applicable credits.' },
            ]}
          />
        </div>
      </section>

      {/* Who Qualifies */}
      <section id="who-qualifies" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="A/01"
            eyebrow="Eligible Entities"
            title="Who Qualifies for Direct Pay?"
            lede="Section 6417 is specifically designed for organizations that historically could not benefit from tax credits because they owe no federal income tax."
          />
          <ServiceAudienceGrid
            items={[
              { icon: Bank,          title: 'State & Local Governments',    desc: 'Municipalities, counties, state agencies, and public utilities investing in clean energy infrastructure.' },
              { icon: GraduationCap, title: 'School Districts',             desc: 'K-12 school districts and public university systems implementing solar, geothermal, and energy efficiency projects.' },
              { icon: Cross,         title: 'Nonprofit Organizations',      desc: 'Tax-exempt organizations under IRC 501(a), including hospitals, community organizations, and religious institutions.' },
              { icon: UsersThree,    title: 'Tribal Governments',           desc: 'Indian tribal governments and Alaska Native Corporations pursuing clean energy projects on tribal lands.' },
              { icon: Buildings,     title: 'Public Housing Authorities',   desc: 'Housing authorities and affordable housing organizations implementing clean energy improvements across their portfolios.' },
              { icon: Leaf,          title: 'Rural Electric Cooperatives',  desc: 'Rural electric cooperatives and the Tennessee Valley Authority, now able to monetize credits on clean energy investments.' },
            ]}
          />
        </div>
      </section>

      {/* How to Claim */}
      <section id="how-to-claim" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="H/01"
            eyebrow="The Process"
            title="How to Claim Direct Pay"
            lede="Concord manages every step from pre-filing registration to payment receipt. Our proven process ensures you capture the maximum credit amount."
          />
          <ServiceProcess
            steps={[
              { title: 'Project Assessment',      desc: 'We evaluate your clean energy projects to identify all eligible credits and estimate the total Direct Pay amount available.' },
              { title: 'Pre-Filing Registration', desc: 'We complete the mandatory IRS pre-filing registration process, obtaining the registration number required to make the Direct Pay election.' },
              { title: 'Credit Substantiation',   desc: 'We document all qualifying costs, activities, and compliance requirements to build an audit-ready credit substantiation package.' },
              { title: 'PWA Compliance',          desc: 'For projects requiring PWA compliance, we ensure prevailing wage and apprenticeship requirements are met to capture the 5x bonus rate.' },
              { title: 'Tax Return Filing',       desc: 'We prepare or coordinate the filing of your annual tax return with the Direct Pay election, ensuring all required forms and schedules are included.' },
              { title: 'Payment Receipt',         desc: 'The IRS processes your election and issues a direct cash payment equal to the full credit amount, typically within the standard refund timeline.' },
            ]}
          />
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="C/01"
            eyebrow="Proven Results"
            title="Direct Pay in Action"
          />
          <ServiceEvidence
            items={[
              { amount: '$4.2M', title: 'Public School District', desc: 'A large school district installed solar across 12 campuses and received $4.2M in Direct Pay refunds for ITC credits.' },
              { amount: '$2.8M', title: 'Municipal Government',   desc: 'A city government deployed solar and EV charging across public facilities, claiming Direct Pay on multiple credit types.' },
              { amount: '$1.9M', title: 'Nonprofit Hospital',     desc: 'A nonprofit hospital system leveraged Direct Pay for a combined solar and geothermal project across three facilities.' },
            ]}
          />
        </div>
      </section>

      {/* Why Concord */}
      <section id="why-concord" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="W/01"
            eyebrow="Why Concord"
            title="Your Direct Pay Partner"
            lede={<>Concord specializes in navigating the IRS requirements for Direct Pay elections. Learn more about <Link to="/why-us" className="ed-link">why organizations choose Concord</Link> and <Link to="/who-we-are" className="ed-link">the team behind our work</Link>.</>}
          />
          <ServiceAudienceGrid
            items={[
              { icon: ShieldCheck, title: 'IRS Registration Experts',   desc: 'We manage the entire pre-filing registration process, ensuring your entity is properly registered and compliant before filing.' },
              { icon: FileText,    title: 'Credit Substantiation',      desc: 'Comprehensive documentation packages that withstand IRS examination, with detailed cost documentation and credit calculations.' },
              { icon: Scales,      title: 'Legal & Tax Advisory',       desc: 'Expert guidance on election mechanics, timing strategies, and coordination with your existing tax advisors.' },
              { icon: ChartBar,    title: 'Multi-Credit Optimization',  desc: 'We analyze your full project portfolio to identify all applicable credits and maximize your total Direct Pay amount.' },
              { icon: Certificate, title: 'PWA Compliance',             desc: 'Integrated prevailing wage and apprenticeship compliance to ensure you capture the enhanced 5x bonus rate on eligible credits.' },
              { icon: Headset,     title: 'End-to-End Support',         desc: 'From initial assessment through payment receipt and ongoing audit defense, Concord manages every step of the process.' },
            ]}
          />
        </div>
      </section>

      <SharedServiceFAQ
        faqs={faqs}
        intro="Everything you need to know about Section 6417 Direct Pay for tax-exempt entities."
      />

      <RelatedServices currentHref="/direct-pay" />

      <ServiceFinalCTA
        eyebrow="Start Today"
        headline="Your Clean Energy Credits Are Waiting"
        description="Tax-exempt entities are leaving millions on the table. Let Concord help you claim the direct cash payments you're entitled to under Section 6417."
      />
    </ServicePageShell>
  );
}
