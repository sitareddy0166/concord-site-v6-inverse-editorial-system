import { useState } from 'react';
import financialAnalysisImg from '@/assets/financial-analysis.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Buildings,
  Bank,
  GraduationCap,
  HouseLine,
  ThermometerSimple,
  Lightbulb,
  House,
  Sun,
  Lightning,
  Hammer,
  ChartBar,
  MagnifyingGlass,
  FileText,
  ClipboardText,
  ClockCounterClockwise,
  ShieldCheck,
  CheckCircle,
  CaretRight,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateWebPageSchema, generateSpeakableSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import StickyNav from '@/components/layout/StickyNav';
import VideoExplainer from '@/components/sections/VideoExplainer';
import CTABanner from '@/components/sections/CTABanner';
import FaqAccordion from '@/components/sections/FaqAccordion';
import BookingCard from '@/components/ui/BookingCard';
import ServiceHero from '@/components/sections/ServiceHero';
import ServicePageShell from '@/components/service/ServicePageShell';

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

      {/* Discovery scheduler */}
      <section className="surface-ivory band-sm" aria-label="Schedule a discovery call">
        <div className="arch grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="tech-label" style={{ color: 'rgb(var(--concord))' }}>Discovery · 30 min</p>
            <h2 className="h-lead mt-4" style={{ color: 'rgb(var(--ink))' }}>Meet with a 179D practitioner.</h2>
            <p className="mt-4 text-[15px] text-[rgb(var(--ink))/0.7] max-w-md">
              Bring your building type, square footage, and construction dates. We will walk you through eligibility, timelines, and next steps.
            </p>
          </div>
          <div className="lg:col-span-7">
            <BookingCard />
          </div>
        </div>
      </section>

      <StickyNav items={stickyNavItems} />

      {/* What Is 179D */}
      <section id="what-is-179d" className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollFadeIn>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Modern commercial building with energy-efficient glass facade" width="800" height="500" loading="lazy" className="rounded-[24px] w-full h-auto object-cover shadow-lg" />
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Understanding 179D</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">What Is the 179D Tax Deduction?</h2>
              <p className="service-definition text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mb-4">
                The 179D tax deduction is a federal incentive that allows building owners and designers to reduce their tax liability by up to $5.94 per square foot when they implement energy-efficient improvements in commercial, government, or multifamily buildings. Established under the Energy Policy Act of 2005 and expanded by the Inflation Reduction Act of 2022, it covers new construction and retrofits. Learn more about how <Link to="/prevailing-wage-apprenticeship" className="text-concord-green font-semibold hover:underline">PWA compliance</Link> unlocks the maximum rates.
              </p>
              <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mb-6">
                Eligible projects include improvements to HVAC systems, lighting, or building envelope design. For government-owned or tax-exempt buildings, designers who create energy-efficient specifications can receive allocation letters that transfer the deduction directly to them. Projects must meet <Link to="/obbba-deadline" className="text-concord-green font-semibold hover:underline">key deadlines</Link> to lock in enhanced rates. Credits may also be combined with <Link to="/transferable-tax-credits" className="text-concord-green font-semibold hover:underline">transferable credits</Link> for additional value.
              </p>

              <div className="key-facts bg-[#151C19] text-white rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-[18px] text-white mb-4">Key 179D Facts</h3>
                <ul className="space-y-2.5">
                  {[
                    'Up to $5.94 per square foot with PWA compliance',
                    'Minimum 25% energy savings required to qualify',
                    'Commercial, government, and 4+ story multifamily buildings eligible',
                    'Designers of tax-exempt projects can receive the deduction via allocation letters',
                    'Retroactive claims available for up to three prior tax years',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-200 text-[14px] leading-relaxed">
                      <CheckCircle size={16} weight="fill" className="text-concord-green shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-[24px] p-5 border border-black/[0.06]">
                  <p className="text-3xl font-extrabold text-concord-green font-heading">$5.94</p>
                  <p className="text-sm text-slate-500 mt-1">Max per sq ft with PWA</p>
                </div>
                <div className="bg-white rounded-[24px] p-5 border border-black/[0.06]">
                  <p className="text-3xl font-extrabold text-concord-green font-heading">$1B+</p>
                  <p className="text-sm text-slate-500 mt-1">Client savings realized</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-[24px] p-6 border border-black/[0.06]">
            <p className="text-[14px] font-semibold text-slate-600">Check your building's eligibility today</p>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all">Check Eligibility <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Buildings That Qualify */}
      <section id="buildings-qualify" className="bg-white py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-14">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Eligible Properties</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">What Buildings Qualify for the 179D Deduction?</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">The 179D deduction covers a broad range of building types that implement energy-efficient improvements.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { icon: <Bank size={24} className="text-concord-green" />, title: 'Government Buildings', desc: 'Schools, courthouses, libraries, military facilities, municipal offices, and other publicly owned properties.', img: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=800&q=80', alt: 'Government building' },
                { icon: <GraduationCap size={24} className="text-concord-green" />, title: 'Tax-Exempt Properties', desc: <>Nonprofit hospitals, universities, tribal facilities, religious institutions, and charitable organizations. These entities may also benefit from <Link to="/direct-pay" className="text-concord-green font-semibold hover:underline">Direct Pay</Link>.</>, img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', alt: 'Hospital building representing tax-exempt properties' },
                { icon: <Buildings size={24} className="text-concord-green" />, title: 'Commercial Buildings', desc: 'Office buildings, warehouses, retail centers, industrial facilities, and mixed-use properties.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', alt: 'Modern glass office building representing commercial properties' },
                { icon: <HouseLine size={24} className="text-concord-green" />, title: 'Multifamily Residential', desc: 'Residential buildings with four or more stories, including new construction and renovation projects.', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80', alt: 'Modern multifamily residential apartment building' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-[24px] border border-black/[0.06] p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 hover:border-t-concord-green transition-all duration-300 border-t-[3px] border-t-transparent">
                  <div className="w-14 h-14 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-6">{card.icon}</div>
                  <h3 className="text-lg font-extrabold mb-3 font-heading">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{card.desc}</p>
                  <img src={card.img} alt={card.alt} width="400" height="250" loading="lazy" className="rounded-xl w-full h-36 object-cover mt-auto pt-4" />
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Qualifying Improvements */}
      <section id="improvements" className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollFadeIn>
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Qualifying Improvements</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">What Improvements Qualify for 179D?</h2>
              <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mb-8">To qualify, projects must demonstrate a reduction in total annual energy and power costs compared to the ASHRAE 90.1 reference standard. Meeting <Link to="/prevailing-wage-apprenticeship" className="text-concord-green font-semibold hover:underline">prevailing wage and apprenticeship</Link> requirements unlocks enhanced rates.</p>
              <div className="space-y-4">
                {[
                  { icon: <ThermometerSimple size={20} className="text-concord-green" />, title: 'HVAC and Hot Water', desc: 'High-efficiency heating, ventilation, air conditioning, and plumbing systems that reduce energy consumption.' },
                  { icon: <Lightbulb size={20} className="text-concord-green" />, title: 'Lighting', desc: 'LED fixtures, automated lighting controls, occupancy sensors, and daylighting strategies that lower electricity usage.' },
                  { icon: <House size={20} className="text-concord-green" />, title: 'Building Envelope', desc: 'Upgraded insulation, energy-efficient roofing, high-performance windows, and improved doors that minimize thermal loss.' },
                  { icon: <Sun size={20} className="text-concord-green" />, title: 'Renewable Integration', desc: 'Energy-saving systems combined with solar photovoltaic, geothermal, or other renewable energy technologies.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white rounded-[24px] px-6 py-5 border border-black/[0.06]">
                    <div className="w-10 h-10 bg-concord-green/10 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div><h3 className="font-bold text-concord-dark font-heading">{item.title}</h3><p className="text-sm text-slate-500 mt-1">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100} className="flex flex-col gap-6">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" alt="Engineers reviewing energy modeling blueprints for building improvements" width="600" height="400" loading="lazy" className="rounded-[24px] shadow-md w-full h-64 object-cover" />
              <div className="bg-white rounded-[24px] p-6 border border-black/[0.06] flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-lg mb-3 text-concord-dark font-heading">Energy Savings Requirements</h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-start gap-2"><CheckCircle size={18} weight="fill" className="text-concord-green mt-0.5" /><span>At least <strong className="text-concord-dark">25% energy savings</strong> required for the base deduction</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={18} weight="fill" className="text-concord-green mt-0.5" /><span>Up to <strong className="text-concord-dark">50%+ savings</strong> secures the maximum $5.94/sq ft</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={18} weight="fill" className="text-concord-green mt-0.5" /><span><strong className="text-concord-dark"><Link to="/prevailing-wage-apprenticeship" className="text-concord-dark hover:text-concord-green">PWA compliance</Link></strong> required for enhanced deduction rates</span></li>
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section id="who-qualifies" className="bg-white py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-14">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Eligibility</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Who Qualifies for the 179D Deduction?</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">Several groups can claim the 179D deduction depending on their role in the project. <Link to="/who-we-are" className="text-concord-green font-semibold hover:underline">Our team</Link> has deep experience guiding each group through the process.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                { icon: <Buildings size={24} className="text-concord-green" />, title: 'Architects', desc: 'Eligible when their designs include energy-saving features such as advanced lighting layouts, HVAC planning, or improved building envelopes.' },
                { icon: <Lightning size={24} className="text-concord-green" />, title: 'Engineers', desc: 'Qualify when they specify efficient HVAC, plumbing, electrical, or mechanical systems that meet or exceed ASHRAE 90.1 standards.' },
                { icon: <Hammer size={24} className="text-concord-green" />, title: 'Contractors', desc: 'May receive allocation letters if they install qualifying improvements that contribute to building-wide energy savings.' },
                { icon: <ChartBar size={24} className="text-concord-green" />, title: 'ESCOs', desc: 'Often qualify by designing and implementing full retrofit projects with guaranteed performance outcomes.' },
                { icon: <HouseLine size={24} className="text-concord-green" />, title: 'Multifamily Developers', desc: 'Eligible for deductions when constructing or upgrading residential buildings with four or more stories.' },
                { icon: <Bank size={24} className="text-concord-green" />, title: 'Property Owners', desc: 'Can claim deductions when improving energy efficiency in offices, warehouses, retail spaces, or industrial facilities they own.' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-[24px] border border-black/[0.06] p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green">
                  <div className="w-14 h-14 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-6">{card.icon}</div>
                  <h3 className="text-lg font-extrabold mb-3 font-heading">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-auto">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-concord-cream rounded-[24px] p-6 border border-black/[0.06]">
            <p className="text-[14px] font-semibold text-slate-600">Find out if you qualify for the 179D deduction</p>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all">Talk to Our Team <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Designers / Allocation Letters */}
      <section id="designers" className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">For Design Professionals</span>
                <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">How Do Designers Qualify? What Is an Allocation Letter?</h2>
                <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mb-6">
                  Design professionals working on tax-exempt or government-owned buildings can qualify by receiving an allocation letter from the property owner. Federal law allows the economic benefit to be transferred to the designers who made the energy-saving improvements possible. Visit our <Link to="/resources" className="text-concord-green font-semibold hover:underline">resources</Link> library for detailed allocation letter guides.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Architect:', desc: 'Eligible when your building designs improve energy efficiency.' },
                    { label: 'Engineer:', desc: 'Qualify when your specifications reduce overall energy consumption.' },
                    { label: 'Contractor:', desc: 'Can claim the deduction when you install qualifying energy-efficient systems.' },
                    { label: 'ESCO:', desc: 'Eligible when you design and implement full retrofit projects with verified energy savings.' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <CheckCircle size={18} weight="fill" className="text-concord-green mt-0.5" />
                      <p className="text-[15px] text-slate-500"><strong className="text-concord-dark">{item.label}</strong> {item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm">A third-party certification from a licensed professional is also required. Projects must begin construction before <Link to="/obbba-deadline" className="text-concord-green font-semibold hover:underline">critical deadlines</Link> to lock in enhanced rates.</p>
              </div>
              <div>
                <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="bg-white py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-14">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Proven Results</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">179D Success Stories</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid sm:grid-cols-3 gap-8 items-stretch">
              {[
                { img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', alt: 'Public school campus with energy-efficient upgrades', amount: '$1.2M', title: 'Public School District', desc: 'Deductions realized through HVAC and lighting upgrades across multiple campuses.' },
                { img: financialAnalysisImg, alt: 'Financial documents for tax deduction', amount: '$750K', title: 'Military Facility', desc: 'Retroactive savings secured through amended filings and comprehensive documentation.' },
                { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', alt: 'Architectural plans for multifamily residential building envelope upgrades', amount: '$2.5M', title: 'Multifamily Developer', desc: 'Tax benefits captured from building envelope and lighting system upgrades.' },
              ].map((story) => (
                <div key={story.title} className="bg-white rounded-[24px] overflow-hidden border border-black/[0.06] flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green">
                  <div className="relative h-48 overflow-hidden">
                    <img src={story.img} alt={story.alt} width="500" height="300" loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5"><span className="text-xl font-bold text-concord-green">{story.amount}</span></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-concord-dark text-lg font-heading">{story.title}</h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed mt-auto">{story.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
          <p className="text-center mt-8"><Link to="/resources?content=Case+Studies" className="text-concord-green font-semibold hover:underline inline-flex items-center gap-1 text-sm">View all case studies <ArrowRight size={14} /></Link></p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-14">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">The Concord Process</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">How to Claim the 179D Tax Deduction</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">We make it simple. Six steps from start to finish.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                { step: '01', title: 'Upload Your Files', desc: 'Submit building plans and project reports through our secure platform.' },
                { step: '02', title: 'Document Processing', desc: 'Our software identifies all qualifying improvements from your specifications.' },
                { step: '03', title: 'Energy Modeling', desc: 'Detailed models demonstrating DOE and IRS compliance.' },
                { step: '04', title: 'Site Certification', desc: 'Licensed engineers verify installations and collect documentation.' },
                { step: '05', title: 'Allocation Letters', desc: 'We manage the full allocation process including owner signatures.' },
                { step: '06', title: 'Report Delivery', desc: 'IRS-compliant report ready to file, with audit defense included.' },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-[24px] border border-black/[0.06] p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green">
                  <div className="w-12 h-12 rounded-full bg-concord-green text-white font-heading font-bold flex items-center justify-center text-lg mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold mb-2 font-heading">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-[24px] p-6 border border-black/[0.06]">
            <p className="text-[14px] font-semibold text-slate-600">Ready to start the process?</p>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all">Get Started <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <VideoExplainer
        headline="See How 179D Works"
        videoUrl="https://www.youtube.com/watch?v=ZO0kLWOtQdc"
      />

      {/* Why Concord */}
      <section id="why-concord" className="bg-white py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-14">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">The Concord Advantage</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Why Choose Concord for 179D?</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">Concord specializes exclusively in energy-efficiency tax incentives, with over $1 billion in realized client savings and an industry-leading audit track record. Learn more about <Link to="/the-concord-standard" className="text-concord-green font-semibold hover:underline">The Concord Standard</Link>.</p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                { icon: <MagnifyingGlass size={24} className="text-concord-green" />, title: 'Full Eligibility Assessment', desc: 'Complete assessment and energy modeling for every qualifying building in your portfolio.' },
                { icon: <FileText size={24} className="text-concord-green" />, title: 'Certified Documentation', desc: 'IRS-compliant reports prepared by licensed professionals, ready for filing.' },
                { icon: <ClipboardText size={24} className="text-concord-green" />, title: 'Allocation Letter Support', desc: 'Full allocation letter management for designers working on government and tax-exempt projects.' },
                { icon: <ClockCounterClockwise size={24} className="text-concord-green" />, title: 'Retroactive Claims', desc: 'Filed for prior tax years (up to three years back, or four for allocations) to recover past savings.' },
                { icon: <ShieldCheck size={24} className="text-concord-green" />, title: 'Audit Defense', desc: 'Compliance assurance and full audit defense included as a standard part of every engagement.' },
                { icon: <Lightning size={24} className="text-concord-green" />, title: 'Proven Audit Track Record', desc: 'Backed by over $1 billion in realized client savings across thousands of projects.' },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-[24px] border border-black/[0.06] p-8 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-concord-green">
                  <div className="w-14 h-14 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-6">{card.icon}</div>
                  <h3 className="text-lg font-extrabold mb-3 font-heading">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-auto">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-16">
            <ScrollFadeIn>
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">FAQ</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Frequently Asked Questions</h2>
              <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px]">Get answers to the most common questions about the 179D tax deduction. Visit our <Link to="/resources" className="text-concord-green font-semibold hover:underline">resources library</Link> for more in-depth guides.</p>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <FaqInline faqs={faqs} />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden bg-[#151C19]">
        <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
        <div className="absolute inset-0 bg-[#151C19]/70"></div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="rounded-[24px] p-10 lg:p-14 text-center border border-white/20 backdrop-blur-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-greenHover mb-4 block font-heading">Get Started Today</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-white mb-6 text-balance">Ready to Claim Your 179D Deduction?</h2>
              <p className="text-[16px] lg:text-[18px] text-white/70 max-w-lg mx-auto leading-relaxed mb-10">Our team will assess your building portfolio, estimate your potential savings, and guide you through every step of the process.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto bg-white text-concord-dark px-8 py-4 rounded-full text-base font-bold tracking-wide inline-flex items-center justify-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all">Start the Conversation <ArrowRight size={16} /></Link>
                <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold tracking-wide border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:-translate-y-[2px] hover:shadow-lg inline-flex items-center justify-center gap-2 font-heading">Book a Discovery Call</a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </ServicePageShell>
  );
}

/* Inline FAQ component for the split layout used in this page */
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
