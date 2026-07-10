import { useState } from 'react';
import monetizationImg from '@/assets/monetization-step.jpg';
import substantiationImg from '@/assets/substantiation-step.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Buildings,
  HandCoins,
  ArrowsLeftRight,
  HardHat,
  Flask,
  Bank,
  GraduationCap,
  Heartbeat,
  BuildingOffice,
  SolarPanel,
  Ruler,
  Factory,
  Code,
  Dna,
  Tipi,
  
  Phone,
  Clock,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateOrganizationSchema, generateFAQSchema, generateServiceSchema, generateWebSiteSchema, generateWebPageSchema, generateSpeakableSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import Affiliations from '@/components/sections/Affiliations';
import StatsBar from '@/components/sections/StatsBar';
import FaqAccordion from '@/components/sections/FaqAccordion';

const homeFaqs = [
  {
    question: 'What is the 179D tax deduction?',
    answer:
      'Section 179D is a federal tax deduction for energy-efficient commercial buildings. Qualifying buildings can receive up to $5.94 per square foot when prevailing wage and apprenticeship requirements are met.',
  },
  {
    question: 'Who qualifies for Direct Pay under Section 6417?',
    answer:
      'Tax-exempt entities such as state and local governments, tribal nations, nonprofits, and rural electric cooperatives can receive direct cash payments for 11 eligible clean energy tax credits.',
  },
  {
    question: 'What are transferable tax credits under Section 6418?',
    answer:
      'Section 6418 allows for-profit entities to sell eligible clean energy tax credits to unrelated buyers for cash, creating a new marketplace for monetizing clean energy investments.',
  },
  {
    question: 'How does the prevailing wage and apprenticeship requirement work?',
    answer:
      'Projects that meet PWA requirements can multiply their base credit by up to 5x. Concord helps you navigate compliance, documentation, and correction procedures to maximize your incentive.',
  },
  {
    question: 'What is The Concord Standard?',
    answer:
      'The Concord Standard is our six-step compliance-driven process covering assessment, roadmap creation, substantiation, compliance management, monetization, and continuation to ensure maximum incentive capture.',
  },
  {
    question: 'How quickly can we start capturing incentives?',
    answer:
      'Most engagements begin with a complimentary assessment. From there, our team can identify eligible incentives and create a roadmap within weeks, with many clients seeing results within 60 to 90 days.',
  },
];

const tabs = [
  {
    id: 'designers',
    label: 'Project Designers',
    title: 'Project Designers',
    description:
      'Architects and engineers who design energy-efficient buildings can claim the 179D deduction through allocation letters from building owners. Concord manages the entire process, from energy modeling to certification.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Architect reviewing energy-efficient building blueprints for 179D tax deduction eligibility',
  },
  {
    id: 'for-profit',
    label: 'For-Profit Owners',
    title: 'For-Profit Owners',
    description:
      'Commercial building owners can directly claim 179D deductions and leverage transferable credits under Section 6418 to monetize their clean energy investments in new ways.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Modern commercial office building exterior with energy-efficient systems eligible for 179D tax deduction',
  },
  {
    id: 'tax-exempt',
    label: 'Tax-Exempt Owners',
    title: 'Tax-Exempt Owners',
    description:
      'Government agencies, tribal nations, and nonprofits can now receive direct cash payments for clean energy tax credits through Section 6417. We handle pre-filing registration and IRS compliance.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'University campus buildings representing tax-exempt entities eligible for Section 6417 Direct Pay',
  },
  {
    id: 'marketplace',
    label: 'Tax Credit Marketplace',
    title: 'Tax Credit Marketplace',
    description:
      'Section 6418 created a new marketplace for buying and selling clean energy credits. Concord connects buyers and sellers, manages due diligence, and ensures compliant transfer mechanics.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Financial dashboard showing tax credit transfer analytics for Section 6418 marketplace',
  },
];

const timelineSteps = [
  {
    num: '01',
    title: 'Assessment',
    text: 'We evaluate your portfolio to identify every eligible incentive. Our team reviews building systems, project timelines, and ownership structures to uncover hidden value.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Energy consultant performing commercial building audit to identify eligible clean energy tax incentives',
  },
  {
    num: '02',
    title: 'Roadmap',
    text: 'We create a clear, prioritized action plan for capturing your incentives. You will know exactly what is available, what is required, and the projected financial impact.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Tax incentive roadmap documents showing projected savings and compliance timelines',
  },
  {
    num: '03',
    title: 'Substantiation',
    text: 'Our technical team builds the audit-resilient documentation package, including energy models, certifications, and allocation letters that withstand IRS scrutiny.',
    image:
      substantiationImg,
    imageAlt:
      'Technical engineer preparing IRS-ready substantiation documentation for 179D certification',
  },
  {
    num: '04',
    title: 'Compliance Management',
    text: 'We monitor regulatory changes, manage prevailing wage documentation, and ensure your projects stay compliant throughout the entire lifecycle.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Compliance management dashboard tracking prevailing wage and regulatory requirements',
  },
  {
    num: '05',
    title: 'Monetization',
    text: 'Whether through direct deductions, Direct Pay elections, or credit transfers, we help you convert your incentives into real financial returns.',
    image:
      monetizationImg,
    imageAlt:
      'Financial report showing monetized clean energy tax incentives and direct deduction results',
  },
  {
    num: '06',
    title: 'Continuation',
    text: 'Incentive programs evolve. We stay engaged to capture future opportunities, adapt to regulatory changes, and ensure your portfolio continues to benefit year after year.',
    image:
      'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Business professionals shaking hands representing ongoing tax incentive partnership and continuation support',
  },
];

const industries = [
  { icon: Bank, label: 'Government', desc: 'Federal, state, and municipal building portfolios' },
  { icon: GraduationCap, label: 'Higher Ed', desc: 'University and campus energy retrofits' },
  { icon: Heartbeat, label: 'Healthcare', desc: 'Hospitals and medical facility upgrades' },
  { icon: BuildingOffice, label: 'Commercial RE', desc: 'Office, retail, and mixed-use portfolios' },
  { icon: SolarPanel, label: 'Renewable Energy', desc: 'Solar, storage, and clean generation projects' },
  { icon: Ruler, label: 'A/E/C Firms', desc: 'Designer allocations and engineering studies' },
  { icon: Factory, label: 'Manufacturing', desc: 'Industrial process and facility efficiency' },
  { icon: Code, label: 'Software & Tech', desc: 'R&D credit-rich innovation activities' },
  { icon: Dna, label: 'Life Sciences', desc: 'Lab facilities and research operations' },
  { icon: Tipi, label: 'Tribal Nations', desc: 'Direct Pay and sovereign energy investment' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('designers');

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const webPageSchema = generateWebPageSchema({
    name: 'Concord Energy Strategies | Tax Incentive Experts',
    description: 'Compliance-driven clean energy tax incentive consulting: 179D, PWA, Direct Pay, Transferable Credits, R&D.',
    url: '/',
  });
  const speakableSchema = generateSpeakableSchema(['.hero-description', '.service-definition', '.key-facts']);
  const faqSchema = generateFAQSchema(homeFaqs);
  const serviceSchemas = [
    generateServiceSchema({ name: '179D Tax Deduction Consulting', description: 'Expert consulting for the 179D energy-efficient commercial building tax deduction.', url: '/179d-tax-deduction' }),
    generateServiceSchema({ name: 'Direct Pay (Section 6417)', description: 'Help tax-exempt entities receive clean energy tax credits as direct cash payments.', url: '/direct-pay' }),
    generateServiceSchema({ name: 'PWA Compliance Consulting', description: 'Prevailing Wage and Apprenticeship compliance to unlock the 5x bonus multiplier.', url: '/prevailing-wage-apprenticeship' }),
    generateServiceSchema({ name: 'Transferable Tax Credits (Section 6418)', description: 'Monetize clean energy tax credits through Section 6418 transfers to corporate buyers.', url: '/transferable-tax-credits' }),
    generateServiceSchema({ name: 'R&D Tax Credits', description: 'Recover innovation costs with R&D tax credits for clean energy companies.', url: '/rd-tax-credits' }),
  ];

  const statsBarData = [
    { value: '$5.94', label: 'Max Deduction per Sq Ft' },
    { value: '5x', label: 'PWA Multiplier' },
    { value: '1,000+', label: 'Buildings Evaluated Annually' },
  ];

  return (
    <>
      <SEOHead
        title="Concord Energy Strategies | Tax Incentive Experts"
        description="Maximize clean energy tax incentives with Concord Energy Strategies. Over $1 billion in client savings across 15+ years of 179D, PWA, and Direct Pay expertise."
        canonical="/"
      />
      <SchemaScript schema={organizationSchema} />
      <SchemaScript schema={websiteSchema} />
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={speakableSchema} />
      {serviceSchemas.map((s, i) => <SchemaScript key={i} schema={s} />)}

      {/* ========== HERO ========== */}
      <section
        className="bg-white relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, #F1F6F2 0%, transparent 50%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-[32px] lg:py-[48px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:w-[55%] animate-fade-in-left">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-5">
                Compliance-Driven Tax Incentive Experts
              </p>
              <h1 className="font-heading font-extrabold text-[40px] lg:text-[64px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">
                Maximize Your
                <br />
                Tax Incentives.
              </h1>
              <p className="text-[22px] lg:text-[28px] text-[#2d6a4f] font-heading font-medium mb-6">
                Concord Makes It Simple.
              </p>
              <p className="hero-description text-[16px] text-slate-500 leading-relaxed max-w-[520px] mb-8">
                With over $1 billion in tax savings identified and an industry-leading audit success
                track record, Concord Energy Strategies helps building owners, designers, and
                tax-exempt organizations capture every clean energy incentive they deserve.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  Start the Conversation <ArrowRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-concord-dark/20 text-concord-dark px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Right: Floating Stat Cards */}
            <div className="hidden lg:block relative w-full max-w-[400px] h-[440px] animate-fade-in-right">
              {/* Card 1: Green gradient - top left */}
              <div className="absolute top-0 left-0 w-[240px] card-hover bg-gradient-to-br from-[#3da35d] to-[#40b868] rounded-3xl p-6 text-white shadow-lg -rotate-[2deg]">
                <p className="text-[42px] font-extrabold font-heading leading-none">$1B+</p>
                <p className="text-[15px] font-bold mt-2">Tax Savings Identified</p>
              </div>
              {/* Card 2: Dark - top right */}
              <div className="absolute top-[40px] right-0 w-[200px] card-hover bg-[#151C19] rounded-3xl p-6 text-white shadow-lg rotate-[3deg]">
                <p className="text-[40px] font-extrabold font-heading leading-none">100%</p>
                <p className="text-[13px] font-bold mt-2">Audit Success Rate</p>
              </div>
              {/* Card 3: Cream - middle */}
              <div className="absolute top-[190px] left-[30px] w-[220px] card-hover bg-[#FFF5DC] rounded-3xl p-6 text-[#151C19] shadow-lg border border-black/[0.06] rotate-[1deg]">
                <p className="text-[38px] font-extrabold font-heading leading-none text-[#3da35d]">1,000+</p>
                <p className="text-[13px] font-bold mt-2">Buildings Evaluated Annually</p>
              </div>
              {/* Chat bubble card - bottom right */}
              <div className="absolute bottom-0 right-[10px] w-[240px] card-hover bg-white rounded-3xl p-5 shadow-lg border border-black/[0.06] -rotate-[2deg]">
                <p className="text-[14px] leading-[1.5] text-concord-dark font-medium">&ldquo;Concord made our 179D claim effortless.&rdquo;</p>
                <div className="flex gap-0.5 mt-2 text-[#3da35d]" aria-label="5 star rating">
                  {[0,1,2,3,4].map(i => <span key={i}>★</span>)}
                </div>
              </div>
            </div>

            {/* Mobile stat stack */}
            <div className="flex lg:hidden flex-col gap-4 w-full">
              <div className="bg-gradient-to-br from-[#3da35d] to-[#40b868] rounded-3xl p-6 text-white shadow-lg">
                <p className="text-[38px] font-extrabold font-heading leading-none">$1B+</p>
                <p className="text-[15px] font-bold mt-2">Tax Savings Identified</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#151C19] rounded-3xl p-5 text-white shadow-lg">
                  <p className="text-[32px] font-extrabold font-heading leading-none">100%</p>
                  <p className="text-[13px] font-bold mt-2">Audit Success</p>
                </div>
                <div className="bg-[#FFF5DC] rounded-3xl p-5 text-[#151C19] shadow-lg border border-black/[0.06]">
                  <p className="text-[26px] font-extrabold font-heading leading-none text-[#3da35d]">1,000+</p>
                  <p className="text-[13px] font-bold mt-2">Buildings/Yr</p>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-5 shadow-lg border border-black/[0.06]">
                <p className="text-[14px] leading-[1.5] text-concord-dark font-medium">&ldquo;Concord made our 179D claim effortless.&rdquo;</p>
                <div className="flex gap-0.5 mt-2 text-[#3da35d]" aria-label="5 star rating">
                  {[0,1,2,3,4].map(i => <span key={i}>★</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AFFILIATIONS ========== */}
      <Affiliations />

      {/* ========== SERVICES ========== */}
      <section id="services" className="bg-white py-[90px] lg:py-[110px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
              Our Services
            </p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">
              Tax Incentives, Simplified
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* 179D - spans 2 cols */}
              <Link
                to="/179d-tax-deduction"
                className="service-card card-hover md:col-span-2 bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 lg:p-10 flex flex-col lg:flex-row items-start gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-concord-mint flex items-center justify-center shrink-0">
                  <Buildings weight="bold" size={32} className="text-concord-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">
                    179D Tax Deduction
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed mb-4 max-w-[600px]">
                    Up to $5.94 per square foot for energy-efficient commercial buildings. We handle
                    the energy modeling, certification, and allocation letters so you capture the
                    maximum deduction.
                  </p>
                  <span className="inline-flex items-center gap-1 text-concord-green font-bold text-[14px]">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>

              {/* Direct Pay */}
              <Link
                to="/direct-pay"
                className="service-card card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-concord-mint flex items-center justify-center mb-5">
                  <HandCoins weight="bold" size={32} className="text-concord-green" />
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">
                  Section 6417 Direct Pay
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-1">
                  Tax-exempt entities receive direct cash payments for eligible clean energy credits.
                  We manage pre-filing registration and compliance.
                </p>
                <span className="inline-flex items-center gap-1 text-concord-green font-bold text-[14px] mt-auto">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>

              {/* Transferable Credits */}
              <Link
                to="/transferable-tax-credits"
                className="service-card card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-concord-mint flex items-center justify-center mb-5">
                  <ArrowsLeftRight weight="bold" size={32} className="text-concord-green" />
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">
                  Section 6418 Transferable Credits
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-1">
                  Sell eligible clean energy tax credits to unrelated buyers for cash. We facilitate
                  the marketplace, diligence, and transfer mechanics.
                </p>
                <span className="inline-flex items-center gap-1 text-concord-green font-bold text-[14px] mt-auto">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>

              {/* PWA */}
              <Link
                to="/prevailing-wage-apprenticeship"
                className="service-card card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-concord-mint flex items-center justify-center mb-5">
                  <HardHat weight="bold" size={32} className="text-concord-green" />
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">
                  PWA Compliance
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-1">
                  Prevailing wage and apprenticeship requirements can multiply credits up to 5x. We
                  ensure compliance from day one.
                </p>
                <span className="inline-flex items-center gap-1 text-concord-green font-bold text-[14px] mt-auto">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>

              {/* R&D */}
              <Link
                to="/rd-tax-credits"
                className="service-card card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-concord-mint flex items-center justify-center mb-5">
                  <Flask weight="bold" size={32} className="text-concord-green" />
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">
                  R&D Tax Credits
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-1">
                  Identify qualifying research activities and expenses to offset tax liability. Our
                  technical team documents everything for audit resilience.
                </p>
                <span className="inline-flex items-center gap-1 text-concord-green font-bold text-[14px] mt-auto">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
            <p className="text-[16px] text-slate-600">See what your projects qualify for.</p>
            <Link
              to="/start-the-conversation"
              className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
            >
              Start the Conversation <ArrowRight size={14} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== STAT BAR ========== */}
      <StatsBar stats={statsBarData} />

      {/* ========== WHO WE SERVE ========== */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
              Who We Serve
            </p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">
              Built for Your Industry
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tab Buttons */}
              <div className="flex lg:flex-col gap-3 lg:w-[240px] shrink-0 overflow-x-auto lg:overflow-visible">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap text-left px-6 py-4 rounded-full font-bold text-[14px] transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#151C19] text-white shadow-md'
                        : 'bg-white text-concord-dark border border-black/[0.06]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`transition-opacity duration-300 ${
                      activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
                    }`}
                  >
                    <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm overflow-hidden">
                      <img
                        src={tab.image}
                        alt={tab.imageAlt}
                        width="800"
                        height="400"
                        loading="lazy"
                        className="w-full h-[260px] object-cover"
                      />
                      <div className="p-8">
                        <h3 className="font-heading font-bold text-[24px] text-concord-dark mb-3">
                          {tab.title}
                        </h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed mb-6">
                          {tab.description}
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                        >
                          Learn More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== THE CONCORD STANDARD ========== */}
      <section className="bg-concord-cream py-[90px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
              Our Process
            </p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">
              The Concord Standard:
              <br />
              We Make It Simple
            </h2>
          </ScrollFadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
              style={{ background: 'rgba(61,163,93,0.3)' }}
            />

            {timelineSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollFadeIn
                  key={step.num}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8 lg:gap-16 ${i < timelineSteps.length - 1 ? 'mb-[80px]' : ''}`}
                >
                  <div
                    className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-concord-green text-white font-heading font-bold text-[14px] mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-heading font-bold text-[24px] text-concord-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[16px] text-slate-500 leading-relaxed">{step.text}</p>
                  </div>
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      width="600"
                      height="400"
                      loading="lazy"
                      className="rounded-3xl w-full max-h-[400px] object-cover shadow-md"
                    />
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          <ScrollFadeIn className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
            <p className="text-[16px] text-slate-600">Get a no-cost eligibility review.</p>
            <Link
              to="/start-the-conversation"
              className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
            >
              Start the Conversation <ArrowRight size={14} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== TESTIMONIAL ========== */}
      <section className="bg-white py-[70px] lg:py-[90px]">
        <ScrollFadeIn className="max-w-[800px] mx-auto px-6 text-center">
          <div
            className="text-[80px] leading-none font-heading font-black mb-4"
            style={{ color: 'rgba(61,163,93,0.3)' }}
          >
            &ldquo;
          </div>
          <blockquote className="text-[24px] lg:text-[30px] font-heading font-medium text-concord-dark leading-snug mb-8">
            Concord took the complexity out of our 179D claims and delivered results that exceeded
            our expectations. Their team was responsive, thorough, and always available.
          </blockquote>
          <div>
            <p className="font-heading font-bold text-[16px] text-concord-dark">James Richardson</p>
            <p className="text-[14px] text-slate-500">
              VP of Facilities, National Education Partners
            </p>
            <p className="text-[12px] text-slate-500 mt-4 italic">
              Illustrative example based on typical engagement profiles. Actual results vary.
            </p>
          </div>
        </ScrollFadeIn>
      </section>

      {/* ========== URGENCY BANNER ========== */}
      <section className="bg-concord-dark py-[80px] lg:py-[100px] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #3da35d, transparent 70%)' }}
        />
        <ScrollFadeIn className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-concord-coral text-white text-[13px] font-bold uppercase tracking-[0.05em] px-5 py-2 rounded-full mb-6">
            <Clock size={14} /> Time-Sensitive
          </span>
          <h2 className="font-heading font-extrabold text-[32px] lg:text-[40px] tracking-[-0.03em] leading-[1.15] text-white mb-5">
            The OBBBA Election Cutoff for Retroactive R&amp;D Claims Is July 6, 2026
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[600px] mx-auto mb-8">
            OBBBA statutory deadlines are approaching. Retroactive R&amp;D credit elections, Section
            174A expensing, and Direct Pay registrations all have hard filing windows. Let our team
            confirm which deadlines apply to your organization before they close.
          </p>
          <Link
            to="/obbba-deadline"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#151C19] px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
              Results That Speak
            </p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">
              Proven Impact
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
              {[
                {
                  amount: '$1.2M',
                  title: 'Public School District',
                  text: '179D deductions captured across 14 energy-efficient school buildings through designer allocation letters and comprehensive energy modeling.',
                },
                {
                  amount: '$750K',
                  title: 'Military Facility',
                  text: 'Direct Pay election for a federal military installation, including pre-filing registration, compliance documentation, and IRS coordination.',
                },
                {
                  amount: '$2.5M',
                  title: 'Multifamily Developer',
                  text: 'Combined 179D and transferable credits strategy across a portfolio of sustainable residential developments meeting PWA requirements.',
                },
              ].map((cs) => (
                <div
                  key={cs.title}
                  className="card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 relative overflow-hidden h-full flex flex-col"
                >
                  <div
                    className="h-[3px] absolute top-0 left-0 right-0"
                    style={{ background: 'linear-gradient(90deg, #3da35d, #40b868)' }}
                  />
                  <p className="text-[36px] font-heading font-black text-concord-green leading-none mb-3">
                    {cs.amount}
                  </p>
                  <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed mt-auto">{cs.text}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-slate-500 italic text-center mb-10">
              Illustrative examples based on typical engagement profiles. Actual results vary.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn className="text-center">
            <Link
              to="/resources?content=Case+Studies"
              className="inline-flex items-center gap-1 text-concord-green font-bold text-[15px] hover:underline"
            >
              View All Case Studies <ArrowRight size={14} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== GETTING STARTED ========== */}
      <section className="relative py-[90px] lg:py-[110px] overflow-hidden bg-[#151C19]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            width="1600"
            height="900"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#151C19]/70" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Step cards */}
            <ScrollFadeIn className="lg:w-1/2 flex flex-col gap-5">
              {[
                {
                  num: '1',
                  title: 'Start the Conversation',
                  text: 'Tell us about your portfolio, and our team will identify your eligible incentives at no cost.',
                  hasLink: true,
                },
                {
                  num: '2',
                  title: 'Review Your Roadmap',
                  text: 'We deliver a clear action plan with projected savings, timelines, and compliance requirements.',
                },
                {
                  num: '3',
                  title: 'Start Saving',
                  text: 'Our team handles substantiation, compliance, and monetization while you focus on your business.',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="rounded-3xl p-6 border"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderColor: 'rgba(255,255,255,0.25)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <span className="text-white font-heading font-bold text-[14px]">
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[18px] text-white mb-1">
                        {step.hasLink ? (
                          <Link to="/contact" className="hover:underline">
                            {step.title}
                          </Link>
                        ) : (
                          step.title
                        )}
                      </h3>
                      <p className="text-[14px] text-white/70 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollFadeIn>

            {/* Right: CTA */}
            <ScrollFadeIn className="lg:w-1/2">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-white/70 mb-4">
                Getting Started
              </p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-[-0.03em] leading-[1.1] text-white mb-5">
                Take the First Step
              </h2>
              <p className="text-[16px] text-white/70 leading-relaxed mb-8 max-w-[480px]">
                Most engagements start with a complimentary assessment. In just one conversation, we
                can identify your eligible incentives and outline a path to significant savings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#151C19] px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  Start the Conversation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  <Phone size={16} /> Schedule a Meeting
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
              Industries
            </p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">
              Across Every Sector
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm p-6 text-center h-full flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-concord-mint flex items-center justify-center mb-3">
                      <Icon weight="bold" size={32} className="text-concord-green" />
                    </div>
                    <p className="font-heading font-bold text-[14px] text-concord-dark mb-1">
                      {ind.label}
                    </p>
                    <p className="text-[12px] leading-[1.5] text-slate-500">{ind.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== LATEST RESOURCES ========== */}
      <section className="bg-concord-cream py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
                Insights
              </p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">
                Latest Resources
              </h2>
            </div>
            <Link
              to="/resources"
              className="hidden md:inline-flex items-center gap-1 text-concord-green font-bold text-[15px] hover:underline"
            >
              View All <ArrowRight size={14} />
            </Link>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                {
                  image:
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                  imageAlt:
                    'Modern energy-efficient commercial building interior with sustainable HVAC and lighting systems',
                  category: 'News',
                  date: 'Mar 15, 2026',
                  title: 'IRS Updates 179D Guidance for 2026 Tax Year',
                },
                {
                  image:
                    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
                  imageAlt:
                    'University hospital building representing tax-exempt entity capturing Direct Pay credits',
                  category: 'Case Study',
                  date: 'Feb 28, 2026',
                  title: 'How a University System Captured $3.8M in Direct Pay',
                },
                {
                  image:
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
                  imageAlt:
                    'Construction workers on scaffolding representing prevailing wage and apprenticeship compliance',
                  category: 'Whitepaper',
                  date: 'Jan 20, 2026',
                  title: 'The Complete Guide to PWA Compliance in 2026',
                },
              ].map((article) => (
                <Link
                  key={article.title}
                  to="/resources"
                  className="card-hover bg-white rounded-3xl border border-black/[0.06] shadow-sm overflow-hidden group h-full flex flex-col"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    width="600"
                    height="340"
                    loading="lazy"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-concord-green bg-concord-mint px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-[13px] text-slate-400">{article.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-2 group-hover:text-concord-green transition-colors">
                      {article.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-concord-green font-bold text-[14px] mt-auto">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="text-center mt-8 md:hidden">
            <Link
              to="/resources"
              className="inline-flex items-center gap-1 text-concord-green font-bold text-[15px] hover:underline"
            >
              View All Resources <ArrowRight size={14} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left */}
              <div className="lg:w-[40%]">
                <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">
                  FAQ
                </p>
                <h2 className="font-heading font-extrabold text-[36px] lg:text-[44px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-[16px] text-slate-500 leading-relaxed">
                  Everything you need to know about clean energy tax incentives and how Concord can
                  help your organization.
                </p>
              </div>

              {/* Right: Inline accordion */}
              <div className="lg:w-[60%] flex flex-col gap-4">
                {homeFaqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} defaultOpen={index === 0} />
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden bg-[#151C19]">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            width="1600"
            height="600"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#151C19]/60" />
        </div>

        <ScrollFadeIn className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <div
            className="rounded-3xl p-10 lg:p-14 border"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderColor: 'rgba(255,255,255,0.2)',
            }}
          >
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-[-0.03em] leading-[1.1] text-white mb-5">
              We Make It Simple
            </h2>
            <p className="text-[16px] text-white/70 leading-relaxed max-w-[520px] mx-auto mb-8">
              Let Concord Energy Strategies handle the complexity of clean energy tax incentives so
              you can focus on what matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#151C19] px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
              >
                <Phone size={16} /> Schedule a Meeting
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </section>
    </>
  );
}

function FaqItem({ faq, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-heading font-bold text-[16px] text-concord-dark pr-4">
          {faq.question}
        </span>
        <svg
          className={`text-concord-green text-lg shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          width="18"
          height="18"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-5">
          <p className="text-[15px] text-slate-500 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
