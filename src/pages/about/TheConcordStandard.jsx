import { useState } from 'react';
import manufacturingRdImg from '@/assets/manufacturing-rd.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  CaretDown,
  Crosshair,
  MapTrifold,
  Monitor,
  FileText,
  CurrencyDollar,
  ShieldCheck,
  Database,
  Bell,
  Lock,
  UsersThree,
  ChartBar,
  FileMagnifyingGlass,
  Users,
  Stack,
  CheckCircle,
} from '@phosphor-icons/react';
import {
  SEOHead,
  SchemaScript,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

const cardShadow = { boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)' };

const processSteps = [
  { num: '01', icon: Crosshair, title: 'Assessment', desc: 'We evaluate eligibility across every applicable federal incentive, identifying opportunities that generalist advisors miss.' },
  { num: '02', icon: MapTrifold, title: 'Roadmap', desc: 'A project-specific compliance roadmap detailing every milestone, deliverable, and deadline.' },
  { num: '03', icon: Monitor, title: 'Compliance Management', desc: 'Real-time tracking through Concord Caisson keeps every document, deadline, and requirement on schedule.' },
  { num: '04', icon: FileText, title: 'Substantiation', desc: 'Detailed technical reports and certifications built to withstand IRS scrutiny.' },
  { num: '05', icon: CurrencyDollar, title: 'Monetization', desc: 'IRS election filings, pre-registration, credit transfer facilitation, and Direct Pay applications.' },
  { num: '06', icon: ShieldCheck, title: 'Continuation', desc: 'Monitoring through the full recapture window with audit defense included as standard.' },
];

const caissonFeatures = [
  { icon: Monitor, title: 'Real-Time Dashboard', desc: 'Live compliance visibility into every project, incentive, and deadline.' },
  { icon: Database, title: 'Document Management', desc: 'All certifications and reports stored in one secure repository with version control.' },
  { icon: Bell, title: 'Deadline Tracking', desc: 'Automated alerts ensure no filing deadline or compliance milestone is missed.' },
  { icon: Lock, title: 'Audit-Ready Architecture', desc: 'Every document organized for immediate IRS examination.' },
  { icon: UsersThree, title: 'Collaborative Workflows', desc: 'Your team, CPA, and Concord on the same platform with role-based access.' },
  { icon: ChartBar, title: 'Portfolio Analytics', desc: 'Track credit values, filing statuses, and monetization across your portfolio.' },
];

const differentiators = [
  {
    icon: FileMagnifyingGlass,
    title: 'vs. Traditional CPA Firms',
    items: ['Deep focus on tax incentives, not generalist practice', 'Proprietary Caisson platform for real-time tracking', 'Audit defense included as standard', 'IRS examination-grade technical reports'],
  },
  {
    icon: Users,
    title: 'vs. In-House Teams',
    items: ['Immediate capacity across all incentive programs', '15+ years of evolving IRS and Treasury guidance', 'Purpose-built compliance platform included', 'Performance-aligned fee structures'],
  },
  {
    icon: Stack,
    title: 'vs. Other Consultants',
    items: ['End-to-end: assessment through audit defense', 'Full recapture period monitoring and support', '15+ years, more than $1 billion in client savings', 'Single point of responsibility for entire lifecycle'],
  },
];

const caseStudies = [
  {
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'Large-scale solar panel installation on open land',
    amount: '$12M+',
    label: 'Credits Captured',
    title: 'National Solar Developer',
    desc: 'Concord managed compliance across a 40-project solar portfolio, identifying overlooked PWA documentation gaps and recovering credits that would have been forfeited.',
    tags: ['ITC', 'PWA', 'Direct Pay'],
  },
  {
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    imgAlt: 'University medical center hospital building exterior',
    amount: '$3.2M',
    label: 'Direct Pay Received',
    title: 'University Medical Center',
    desc: 'A major university hospital leveraged the Concord Standard to claim Direct Pay on a campus-wide energy retrofit, delivering a Treasury payment within one filing cycle.',
    tags: ['179D', 'Direct Pay', 'Tax-Exempt'],
  },
  {
    img: manufacturingRdImg,
    imgAlt: 'Manufacturing facility floor representing R&D and production',
    amount: '$8.5M',
    label: 'R&D Credits Claimed',
    title: 'Manufacturing Conglomerate',
    desc: 'A multi-facility manufacturer engaged Concord to assess R&D credit eligibility across six divisions, resulting in current-year and retroactive credits.',
    tags: ['R&D Credits', 'Retroactive', 'Audit Defense'],
  },
];

const faqs = [
  { question: 'What is the Concord Standard?', answer: 'Our proprietary end-to-end compliance framework covering every phase from eligibility assessment through monetization and audit defense.' },
  { question: 'How long does the process take?', answer: 'Single-project engagements typically take four to six weeks. Multi-project portfolios take eight to twelve weeks for initial substantiation.' },
  { question: 'What is Concord Caisson?', answer: 'Our proprietary technology platform powering real-time compliance tracking, document management, and portfolio analytics.' },
  { question: 'Is audit defense included?', answer: 'Yes. Audit defense is standard with every engagement. If the IRS examines any credit Concord substantiated, we manage the response.' },
  { question: 'Can it apply to projects already underway?', answer: 'Yes. We regularly engage with projects at every stage and conduct gap analyses to identify missing documentation.' },
  { question: 'How does Concord charge?', answer: 'Performance-aligned fee structures designed to minimize upfront risk. Detailed proposals provided after initial assessment.' },
];

const stickyNavItems = [
  { href: '#about-framework', label: 'About the Framework' },
  { href: '#six-step-process', label: 'The 6-Step Process' },
  { href: '#caisson-platform', label: 'Concord Caisson' },
  { href: '#what-makes-it-different', label: 'Why Concord' },
  { href: '#results', label: 'Results' },
  { href: '#faqs', label: 'FAQ' },
];

function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl group border border-black/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left font-heading font-semibold text-lg"
      >
        {question}
        <CaretDown
          size={20}
          className={`text-concord-dark/40 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-sm font-body text-slate-500 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

export default function TheConcordStandard() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'The Concord Standard' },
  ]);
  const serviceSchema = generateServiceSchema({
    name: 'The Concord Standard',
    description: 'A proprietary, end-to-end compliance management framework for federal tax incentives covering assessment, compliance tracking, substantiation, monetization, and audit defense.',
    url: '/the-concord-standard',
  });
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SEOHead
        title="The Concord Standard | Concord Energy Strategies"
        description="The Concord Standard: our proprietary 6-step compliance framework for federal clean energy tax incentives, from assessment through IRS audit defense."
        canonical="/the-concord-standard"
      />
      <SchemaScript schema={orgSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Breadcrumb */}
      <div className="pt-[88px] bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm font-body flex items-center gap-2">
            <Link to="/" className="text-white/40 hover:text-white/70 transition-colors">Home</Link>
            <CaretRight size={10} className="text-white/30" />
            <span className="text-white/40">About</span>
            <CaretRight size={10} className="text-white/30" />
            <span className="text-white font-medium">The Concord Standard</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-concord-dark pb-[40px] lg:pb-[48px] pt-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Our Framework</span>
            <h1 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] mb-6 text-white">
              The Concord Standard
            </h1>
            <p className="text-[16px] lg:text-[18px] text-white/60 max-w-[640px] leading-relaxed mb-6">
              Our structured compliance management framework ensures nothing is missed and every incentive dollar is captured. Developed over 15 years of practice, this is the process behind more than $1 billion in client savings.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.concordlp.com/meetings/jonathan-darnell"
                className="bg-white text-concord-dark px-8 py-4 rounded-full text-[15px] font-bold inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
              </a>
              <a
                href="#six-step-process"
                className="px-8 py-4 rounded-full text-[15px] font-bold border-2 border-white/20 text-white hover:border-white/40 transition-colors font-heading w-full sm:w-auto text-center"
              >
                See the Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <nav className="sticky top-[72px] z-[999] bg-white border-b border-black/[0.06] overflow-x-auto" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }} aria-label="Page sections">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-2 py-3">
          {stickyNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-500 px-4 py-2 text-[13px] font-semibold rounded-full transition-all duration-200 whitespace-nowrap hover:bg-concord-mint hover:text-concord-dark"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* About the Framework */}
      <section id="about-framework" className="py-[80px] lg:py-[100px] px-6 bg-white" style={{ scrollMarginTop: '130px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">About the Framework</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">What Is the Concord Standard?</h2>
              <div className="space-y-4 text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px]">
                <p>The Concord Standard is a proprietary, end-to-end compliance management framework developed over more than 15 years of specialized practice. It ensures every qualifying incentive is identified, every compliance requirement is met, and every credit dollar is captured and defended.</p>
                <p>Unlike ad-hoc consulting approaches, the Concord Standard covers the full incentive lifecycle. It is powered by our proprietary technology platform, Concord Caisson, which provides real-time visibility into compliance status across every project in your portfolio.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '15+', label: 'Years of Practice' },
                  { value: '$1B+', label: 'Client Savings Secured' },
                  { value: '100%', label: 'Audit Success Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-[24px] border border-black/[0.06] p-5 text-center card-hover">
                    <p className="text-2xl md:text-3xl font-extrabold font-heading text-concord-green tracking-tight">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section id="six-step-process" className="py-[80px] lg:py-[100px] px-6 bg-concord-cream" style={{ scrollMarginTop: '130px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">The Process</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1]">The 6-Step Concord Standard Process</h2>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollFadeIn key={step.num} delay={i * 50}>
                  <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 card-hover flex flex-col h-full" style={cardShadow}>
                    <div className="w-12 h-12 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-concord-green" />
                    </div>
                    <div className="text-[13px] font-bold text-concord-green uppercase tracking-widest mb-2">Step {step.num}</div>
                    <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-3">{step.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mt-auto">{step.desc}</p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          {/* Inline CTA */}
          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">See how the Concord Standard applies to your projects</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Every engagement starts with a conversation about your portfolio.</p>
              </div>
              <a
                href="https://www.concordlp.com/meetings/jonathan-darnell"
                className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all shrink-0 w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Concord Caisson */}
      <section id="caisson-platform" className="py-[80px] lg:py-[100px] px-6 bg-white" style={{ scrollMarginTop: '130px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">Our Technology</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">The Concord Caisson Platform</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">The Concord Standard is powered by Caisson, our proprietary technology platform purpose-built for tax incentive compliance management.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {caissonFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollFadeIn key={feature.title} delay={i * 50}>
                  <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 card-hover flex flex-col h-full" style={cardShadow}>
                    <div className="w-12 h-12 bg-concord-green/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} weight="bold" className="text-concord-green" />
                    </div>
                    <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-2">{feature.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mt-auto">{feature.desc}</p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section id="what-makes-it-different" className="py-[80px] lg:py-[100px] px-6 bg-concord-cream" style={{ scrollMarginTop: '130px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">Why Concord</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">What Makes It Different</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">The Concord Standard was built to solve the problems we saw repeatedly when clients came to us after working with generalist advisors or in-house teams.</p>
          </ScrollFadeIn>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {differentiators.map((diff, i) => {
              const Icon = diff.icon;
              return (
                <ScrollFadeIn key={diff.title} delay={i * 50}>
                  <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 card-hover flex flex-col h-full" style={cardShadow}>
                    <div className="w-12 h-12 bg-concord-green/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} weight="bold" className="text-concord-green" />
                    </div>
                    <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-4">{diff.title}</h3>
                    <ul className="space-y-3 text-[14px] text-slate-500 leading-relaxed mt-auto">
                      {diff.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle size={16} weight="fill" className="text-concord-green mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          {/* Inline CTA */}
          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">Discover what the Concord Standard can deliver for you</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Explore how our framework applies to your specific incentive programs.</p>
              </div>
              <Link
                to="/179d-tax-deduction"
                className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all shrink-0 w-full sm:w-auto justify-center"
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Results / Case Studies */}
      <section id="results" className="py-[80px] lg:py-[100px] px-6 bg-white" style={{ scrollMarginTop: '130px' }}>
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">Proven Results</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">The Concord Standard in Action</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">These case studies illustrate how the Concord Standard delivers measurable results across different industries and incentive programs.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {caseStudies.map((cs, i) => (
              <ScrollFadeIn key={cs.title} delay={i * 50}>
                <div className="bg-white rounded-[24px] border border-black/[0.06] overflow-hidden card-hover flex flex-col h-full" style={cardShadow}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={cs.img} alt={cs.imgAlt} className="w-full h-full object-cover" loading="lazy" width="600" height="400" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <span className="text-xl font-bold text-concord-green">{cs.amount}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-concord-green text-xs font-semibold uppercase tracking-widest">{cs.label}</p>
                    <h3 className="font-heading font-bold text-[18px] text-concord-dark mt-1 mb-2">{cs.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-4 mt-auto">{cs.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="bg-concord-cream text-concord-dark text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-[80px] lg:py-[100px] px-6 bg-concord-cream" style={{ scrollMarginTop: '130px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-[40%]">
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">FAQ</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] mb-4">Frequently Asked Questions</h2>
              <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mb-8">Learn more about how The Concord Standard methodology works and what to expect at each stage of the process.</p>
              <a
                href="https://www.concordlp.com/meetings/jonathan-darnell"
                className="bg-[#151C19] text-white px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all"
              >
                Start the Conversation <ArrowRight size={16} />
              </a>
            </div>

            <div className="lg:w-[60%] space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Modern corporate building exterior at sunset representing organizations Concord serves"
            className="w-full h-full object-cover"
            loading="lazy"
            width="1600"
            height="900"
          />
          <div className="absolute inset-0 bg-[#151C19]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-white mb-6">See the Concord Standard in Action</h2>
            <p className="text-[16px] lg:text-[18px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">Every engagement starts with a conversation. Tell us about your projects and we will show you what the Concord Standard can deliver.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#151C19] px-8 py-3.5 rounded-full text-[15px] font-bold inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.concordlp.com/meetings/jonathan-darnell"
                className="px-8 py-3.5 rounded-full text-[15px] font-bold border border-white/30 text-white hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 font-heading"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
