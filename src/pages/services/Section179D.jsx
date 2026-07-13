import { Link } from 'react-router-dom';
import {
  Buildings, Bank, GraduationCap, HouseLine,
  ThermometerSimple, Lightbulb, House, Sun,
  Lightning, Hammer, ChartBar,
  MagnifyingGlass, FileText, ClipboardText, ClockCounterClockwise, ShieldCheck,
} from '@phosphor-icons/react';
import {
  SEOHead, SchemaScript,
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateWebPageSchema, generateSpeakableSchema,
} from '@/utils/seo';
import StickyNav from '@/components/layout/StickyNav';
import VideoExplainer from '@/components/sections/VideoExplainer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServicePageShell from '@/components/service/ServicePageShell';
import {
  SharedServiceFAQ, ServiceFinalCTA, RelatedServices,
  ServiceSectionHeader, ServiceFactsRail, ServiceMediaSplit,
  ServiceAudienceGrid, ServiceEligibilityIndex, ServiceProcess,
  ServiceDocumentIndex, ServiceComparison, ServiceEvidence,
} from '@/components/service';


const stickyNavItems = [
  { label: 'What Is 179D?', href: '#what-is-179d' },
  { label: 'Buildings', href: '#buildings-qualify' },
  { label: 'Improvements', href: '#improvements' },
  { label: 'Who Qualifies?', href: '#who-qualifies' },
  { label: 'Designers', href: '#designers' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Concord', href: '#why-concord' },
  { label: 'FAQ', href: '#faq' },
];

const faqs = [
  {
    question: 'What is the maximum 179D deduction available?',
    answer: 'The maximum is $5.94 per square foot for projects meeting PWA requirements and achieving 50%+ energy savings. Without PWA, the base maximum is $1.19/sq ft.',
  },
  {
    question: 'Which types of buildings qualify?',
    answer: 'Government-owned buildings, tax-exempt properties, commercial buildings, and multifamily residential buildings with four or more stories all qualify.',
  },
  {
    question: 'What building improvements are eligible?',
    answer: 'HVAC and hot water systems, LED lighting and controls, building envelope upgrades, and renewable energy integrations that reduce total energy costs.',
  },
  {
    question: 'Can the 179D deduction be claimed retroactively?',
    answer: 'Yes. Deductions can be claimed for up to three prior tax years by filing amended returns.',
  },
  {
    question: 'Do architects, engineers, and contractors qualify?',
    answer: 'Yes. Design professionals on tax-exempt or government projects can receive the deduction through allocation letters from the property owner.',
  },
  {
    question: 'What certification is required?',
    answer: 'A licensed professional must certify the building meets energy savings requirements using IRS-approved software against the applicable ASHRAE 90.1 standard.',
  },
  {
    question: 'Is the 179D deduction permanent?',
    answer: 'Yes under current law. Projects that began construction before June 30, 2026 locked in enhanced IRA rates. Later projects remain eligible; contact Concord to confirm which rate structure applies to your project.',
  },
  {
    question: 'What are the risks without expert support?',
    answer: 'Insufficient documentation or incorrect modeling can result in disallowed claims and IRS penalties. Concord mitigates these risks with audit-ready documentation.',
  },
];

export default function Section179D() {
  return (
    <ServicePageShell>
      <SEOHead
        title="179D Tax Deduction | Concord Energy Strategies"
        description="Claim up to $5.94/sq ft with the 179D energy-efficient commercial building deduction. Concord handles modeling, certification and audit defense."
        canonical="/179d-tax-deduction"
      />
      <SchemaScript schema={generateServiceSchema({ name: '179D Tax Deduction Consulting', description: 'Expert consulting for the 179D energy-efficient commercial building tax deduction, including energy modeling, certification, allocation letters, and audit defense.', url: '/179d-tax-deduction' })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/#services' }, { name: '179D Tax Deduction', url: '/179d-tax-deduction' }])} />
      <SchemaScript schema={generateWebPageSchema({ name: '179D Tax Deduction | Concord Energy Strategies', description: 'Claim up to $5.94/sq ft with the 179D energy-efficient commercial building deduction.', url: '/179d-tax-deduction' })} />
      <SchemaScript schema={generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts'])} />
      <SchemaScript schema={generateHowToSchema({
        name: 'How to Claim the 179D Tax Deduction',
        description: 'Concord\'s six-step process to claim the 179D energy-efficient commercial building deduction.',
        steps: [
          { title: 'Upload Your Files', description: 'Submit building plans and project reports through our secure platform.' },
          { title: 'Document Processing', description: 'Our software identifies all qualifying improvements from your specifications.' },
          { title: 'Energy Modeling', description: 'Detailed models demonstrating DOE and IRS compliance.' },
          { title: 'Site Certification', description: 'Licensed engineers verify installations and collect documentation.' },
          { title: 'Allocation Letters', description: 'We manage the full allocation process including owner signatures.' },
          { title: 'Report Delivery', description: 'IRS-compliant report ready to file, with audit defense included.' },
        ],
      })} />

      <ServiceHero
        code="S/01"
        eyebrow="Section 179D"
        title="179D Tax Deduction"
        lastUpdated="July 2026"
        primaryCta={{ label: 'Start Your 179D Claim', href: '/contact' }}
        lede={<>The Section 179D tax deduction rewards building owners, architects, engineers, contractors, and developers who invest in energy-efficient properties. Concord helps you claim up to <strong className="text-[rgb(var(--ivory))]">$5.94 per square foot</strong> in federal tax savings with an industry-leading audit track record, backed by <Link to="/the-concord-standard" className="ed-link">The Concord Standard</Link>.</>}
        stats={[
          { value: '$5.94/sf', label: 'Maximum deduction', note: 'With PWA compliance' },
          { value: '25%+',     label: 'Minimum energy savings', note: 'To qualify' },
          { value: '3 yrs',    label: 'Retroactive claim window' },
        ]}
      />




      <StickyNav items={stickyNavItems} />

      {/* What Is 179D */}
      <section id="what-is-179d" className="surface-ink band">
        <div className="arch">
          <ServiceMediaSplit
            code="F/01"
            eyebrow="Understanding 179D"
            title="What Is the 179D Tax Deduction?"
            mediaVariant="engineering"
            mediaImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            mediaAlt="Modern commercial building with energy-efficient glass facade"
            lede={
              <>
                The 179D tax deduction is a federal incentive that allows building owners and designers to reduce their tax liability by up to $5.94 per square foot when they implement energy-efficient improvements in commercial, government, or multifamily buildings. Established under the Energy Policy Act of 2005 and expanded by the Inflation Reduction Act of 2022, it covers new construction and retrofits. Learn more about how <Link to="/prevailing-wage-apprenticeship" className="ed-link">PWA compliance</Link> unlocks the maximum rates.
              </>
            }
          >
            <p className="service-definition mt-5 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
              Eligible projects include improvements to HVAC systems, lighting, or building envelope design. For government-owned or tax-exempt buildings, designers who create energy-efficient specifications can receive allocation letters that transfer the deduction directly to them. Projects must meet <Link to="/obbba-deadline" className="ed-link">key deadlines</Link> to lock in enhanced rates. Credits may also be combined with <Link to="/transferable-tax-credits" className="ed-link">transferable credits</Link> for additional value.
            </p>

            <div className="key-facts mt-8">
              <p className="tech-label mb-4"><span className="index-num mr-2 text-[rgb(var(--concord-glow))]">K/01</span>Key 179D Facts</p>
              <ServiceEligibilityIndex
                rows={[
                  { title: 'Maximum Deduction', desc: 'Up to $5.94 per square foot with PWA compliance.' },
                  { title: 'Energy Savings',    desc: 'Minimum 25% energy savings required to qualify.' },
                  { title: 'Eligible Buildings', desc: 'Commercial, government, and 4+ story multifamily buildings eligible.' },
                  { title: 'Designer Route',    desc: 'Designers of tax-exempt projects can receive the deduction via allocation letters.' },
                  { title: 'Retroactive Claims', desc: 'Retroactive claims available for up to three prior tax years.' },
                ]}
              />
            </div>

            <div className="mt-8">
              <ServiceFactsRail
                facts={[
                  { label: 'Max / sq ft', value: '$5.94', note: 'With PWA compliance' },
                  { label: 'Client Savings', value: '$1B+', note: 'Realized to date' },
                ]}
              />
            </div>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* Buildings That Qualify */}
      <section id="buildings-qualify" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="B/01"
            eyebrow="Eligible Properties"
            title="What Buildings Qualify for the 179D Deduction?"
            lede="The 179D deduction covers a broad range of building types that implement energy-efficient improvements."
          />
          <ServiceAudienceGrid
            items={[
              { icon: Bank,           title: 'Government Buildings',   desc: 'Schools, courthouses, libraries, military facilities, municipal offices, and other publicly owned properties.' },
              { icon: GraduationCap,  title: 'Tax-Exempt Properties',  desc: <>Nonprofit hospitals, universities, tribal facilities, religious institutions, and charitable organizations. These entities may also benefit from <Link to="/direct-pay" className="ed-link">Direct Pay</Link>.</> },
              { icon: Buildings,      title: 'Commercial Buildings',   desc: 'Office buildings, warehouses, retail centers, industrial facilities, and mixed-use properties.' },
              { icon: HouseLine,      title: 'Multifamily Residential', desc: 'Residential buildings with four or more stories, including new construction and renovation projects.' },
            ]}
          />
        </div>
      </section>

      {/* Qualifying Improvements */}
      <section id="improvements" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceMediaSplit
            reverse
            code="I/01"
            eyebrow="Qualifying Improvements"
            title="What Improvements Qualify for 179D?"
            mediaVariant="engineering"
            mediaImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
            mediaAlt="Engineers reviewing energy modeling blueprints for building improvements"
            lede={<>To qualify, projects must demonstrate a reduction in total annual energy and power costs compared to the ASHRAE 90.1 reference standard. Meeting <Link to="/prevailing-wage-apprenticeship" className="ed-link">prevailing wage and apprenticeship</Link> requirements unlocks enhanced rates.</>}
          >
            <div className="mt-6">
              <ServiceEligibilityIndex
                rows={[
                  { title: 'HVAC and Hot Water',   desc: 'High-efficiency heating, ventilation, air conditioning, and plumbing systems that reduce energy consumption.' },
                  { title: 'Lighting',             desc: 'LED fixtures, automated lighting controls, occupancy sensors, and daylighting strategies that lower electricity usage.' },
                  { title: 'Building Envelope',    desc: 'Upgraded insulation, energy-efficient roofing, high-performance windows, and improved doors that minimize thermal loss.' },
                  { title: 'Renewable Integration', desc: 'Energy-saving systems combined with solar photovoltaic, geothermal, or other renewable energy technologies.' },
                ]}
              />
            </div>

            <div className="mt-8">
              <p className="tech-label mb-4"><span className="index-num mr-2 text-[rgb(var(--concord-glow))]">R/01</span>Energy Savings Requirements</p>
              <ServiceComparison
                headers={['Threshold', 'Requirement']}
                rows={[
                  ['Base Deduction',       <>At least <strong className="text-[rgb(var(--ivory))]">25% energy savings</strong> required.</>],
                  ['Maximum $5.94/sq ft',  <>Up to <strong className="text-[rgb(var(--ivory))]">50%+ savings</strong> secures the maximum rate.</>],
                  ['Enhanced Rates',       <><Link to="/prevailing-wage-apprenticeship" className="ed-link">PWA compliance</Link> required for enhanced deduction rates.</>],
                ]}
              />
            </div>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* Who Qualifies */}
      <section id="who-qualifies" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="W/01"
            eyebrow="Eligibility"
            title="Who Qualifies for the 179D Deduction?"
            lede={<>Several groups can claim the 179D deduction depending on their role in the project. <Link to="/who-we-are" className="ed-link">Our team</Link> has deep experience guiding each group through the process.</>}
          />
          <ServiceAudienceGrid
            items={[
              { icon: Buildings,  title: 'Architects',              desc: 'Eligible when their designs include energy-saving features such as advanced lighting layouts, HVAC planning, or improved building envelopes.' },
              { icon: Lightning,  title: 'Engineers',               desc: 'Qualify when they specify efficient HVAC, plumbing, electrical, or mechanical systems that meet or exceed ASHRAE 90.1 standards.' },
              { icon: Hammer,     title: 'Contractors',             desc: 'May receive allocation letters if they install qualifying improvements that contribute to building-wide energy savings.' },
              { icon: ChartBar,   title: 'ESCOs',                   desc: 'Often qualify by designing and implementing full retrofit projects with guaranteed performance outcomes.' },
              { icon: HouseLine,  title: 'Multifamily Developers',  desc: 'Eligible for deductions when constructing or upgrading residential buildings with four or more stories.' },
              { icon: Bank,       title: 'Property Owners',         desc: 'Can claim deductions when improving energy efficiency in offices, warehouses, retail spaces, or industrial facilities they own.' },
            ]}
          />
        </div>
      </section>

      {/* Designers / Allocation Letters */}
      <section id="designers" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceMediaSplit
            code="D/01"
            eyebrow="For Design Professionals"
            title="How Do Designers Qualify? What Is an Allocation Letter?"
            mediaVariant="building-179d"
            mediaImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            mediaAlt="Architectural drawings showing 179D allocation letter documentation for a public sector building"
            lede={<>Design professionals working on tax-exempt or government-owned buildings can qualify by receiving an allocation letter from the property owner. Federal law allows the economic benefit to be transferred to the designers who made the energy-saving improvements possible. Visit our <Link to="/resources" className="ed-link">resources</Link> library for detailed allocation letter guides.</>}
          >
            <div className="mt-6">
              <ServiceEligibilityIndex
                rows={[
                  { title: 'Architect',   desc: 'Eligible when your building designs improve energy efficiency.' },
                  { title: 'Engineer',    desc: 'Qualify when your specifications reduce overall energy consumption.' },
                  { title: 'Contractor',  desc: 'Can claim the deduction when you install qualifying energy-efficient systems.' },
                  { title: 'ESCO',        desc: 'Eligible when you design and implement full retrofit projects with verified energy savings.' },
                ]}
              />
            </div>
            <p className="mt-6 text-[14px] text-[rgb(var(--ivory))/0.7] leading-relaxed">
              A third-party certification from a licensed professional is also required. Projects must begin construction before <Link to="/obbba-deadline" className="ed-link">critical deadlines</Link> to lock in enhanced rates.
            </p>
          </ServiceMediaSplit>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="C/01"
            eyebrow="Proven Results"
            title="179D Success Stories"
          />
          <ServiceEvidence
            items={[
              { amount: '$1.2M', title: 'Public School District', desc: 'Deductions realized through HVAC and lighting upgrades across multiple campuses.' },
              { amount: '$750K', title: 'Military Facility',      desc: 'Retroactive savings secured through amended filings and comprehensive documentation.' },
              { amount: '$2.5M', title: 'Multifamily Developer',  desc: 'Tax benefits captured from building envelope and lighting system upgrades.' },
            ]}
          />
          <p className="mt-8 text-[14px]">
            <Link to="/resources?content=Case+Studies" className="ed-link">View all case studies</Link>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="P/01"
            eyebrow="The Concord Process"
            title="How to Claim the 179D Tax Deduction"
            lede="We make it simple. Six steps from start to finish."
          />
          <ServiceProcess
            steps={[
              { title: 'Upload Your Files',   desc: 'Submit building plans and project reports through our secure platform.' },
              { title: 'Document Processing', desc: 'Our software identifies all qualifying improvements from your specifications.' },
              { title: 'Energy Modeling',     desc: 'Detailed models demonstrating DOE and IRS compliance.' },
              { title: 'Site Certification',  desc: 'Licensed engineers verify installations and collect documentation.' },
              { title: 'Allocation Letters',  desc: 'We manage the full allocation process including owner signatures.' },
              { title: 'Report Delivery',     desc: 'IRS-compliant report ready to file, with audit defense included.' },
            ]}
          />
        </div>
      </section>

      <VideoExplainer
        headline="See How 179D Works"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Why Concord */}
      <section id="why-concord" className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <ServiceSectionHeader
            code="A/01"
            eyebrow="The Concord Advantage"
            title="Why Choose Concord for 179D?"
            lede={<>Concord specializes exclusively in energy-efficiency tax incentives, with over $1 billion in realized client savings and an industry-leading audit track record. Learn more about <Link to="/the-concord-standard" className="ed-link">The Concord Standard</Link>.</>}
          />
          <ServiceAudienceGrid
            items={[
              { icon: MagnifyingGlass,        title: 'Full Eligibility Assessment', desc: 'Complete assessment and energy modeling for every qualifying building in your portfolio.' },
              { icon: FileText,               title: 'Certified Documentation',     desc: 'IRS-compliant reports prepared by licensed professionals, ready for filing.' },
              { icon: ClipboardText,          title: 'Allocation Letter Support',   desc: 'Full allocation letter management for designers working on government and tax-exempt projects.' },
              { icon: ClockCounterClockwise,  title: 'Retroactive Claims',          desc: 'Filed for prior tax years (up to three years back, or four for allocations) to recover past savings.' },
              { icon: ShieldCheck,            title: 'Audit Defense',               desc: 'Compliance assurance and full audit defense included as a standard part of every engagement.' },
              { icon: Lightning,              title: 'Proven Audit Track Record',   desc: 'Backed by over $1 billion in realized client savings across thousands of projects.' },
            ]}
          />

          <div className="mt-14">
            <ServiceSectionHeader
              code="X/01"
              eyebrow="Deliverables"
              title="179D Documentation Package"
            />
            <ServiceDocumentIndex
              documents={[
                { title: 'Energy Model',           desc: 'IRS-approved modeling of proposed vs. ASHRAE 90.1 reference building.' },
                { title: 'Site Certification',    desc: 'Licensed professional verification of installed measures.' },
                { title: 'Allocation Letter',     desc: 'Owner-signed transfer of deduction to designer, when applicable.' },
                { title: 'Certified Report',      desc: 'IRS-compliant report ready to file, with audit defense included.' },
              ]}
            />
          </div>
        </div>
      </section>


      <SharedServiceFAQ
        faqs={faqs}
        intro={<>Get answers to the most common questions about the 179D tax deduction. Visit our <Link to="/resources" className="ed-link">resources library</Link> for more in-depth guides.</>}
      />

      <RelatedServices currentHref="/179d-tax-deduction" />

      <ServiceFinalCTA
        eyebrow="Get Started Today"
        headline="Ready to Claim Your 179D Deduction?"
        description="Our team will assess your building portfolio, estimate your potential savings, and guide you through every step of the process."
      />
    </ServicePageShell>
  );
}

