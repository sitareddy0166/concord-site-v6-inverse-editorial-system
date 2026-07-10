import { useState } from 'react';
import financialAnalysisImg from '@/assets/financial-analysis.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  Cpu,
  ShieldCheck,
  ArrowsClockwise,
  CheckCircle,
  XCircle,
  MinusCircle,
  UserGear,
  ChartLineUp,
  HardHat,
  ArrowsLeftRight,
  UsersThree,
  Quotes,
  User,
} from '@phosphor-icons/react';
import {
  SEOHead,
  SchemaScript,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import FaqAccordion from '@/components/sections/FaqAccordion';

const cardShadow = { boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)' };

const comparisonRows = [
  { label: 'Licensed PE Engineers', icon: UserGear, concord: 'check', traditional: 'x' },
  { label: 'Energy Modeling', icon: ChartLineUp, concord: 'check', traditional: 'x' },
  { label: 'Audit Defense Included', icon: ShieldCheck, concord: 'check', traditional: 'minus' },
  { label: 'PWA Compliance', icon: HardHat, concord: 'check', traditional: 'minus' },
  { label: 'Credit Transfer Support', icon: ArrowsLeftRight, concord: 'check', traditional: 'x' },
  { label: 'Dedicated Account Team', icon: UsersThree, concord: 'check', traditional: 'x' },
];

const processSteps = [
  { num: '01', title: 'Initial Consultation', desc: 'We start with a thorough conversation to understand your portfolio, goals, and current tax strategy. This helps us identify the full scope of incentive opportunities available to you.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', imgAlt: 'Two professionals in an initial consultation meeting reviewing documents' },
  { num: '02', title: 'Portfolio Analysis', desc: 'Our engineers conduct a detailed analysis of your buildings and projects, quantifying every eligible incentive and mapping the potential value across all applicable programs.', img: financialAnalysisImg, imgAlt: 'Analyst reviewing building portfolio data on multiple screens' },
  { num: '03', title: 'Strategy Development', desc: 'We craft a tailored roadmap that maximizes your credits while ensuring full regulatory compliance. Our engineers and tax experts collaborate to build the optimal strategy for your situation.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', imgAlt: 'Strategy planning dashboard showing tax incentive optimization roadmap' },
  { num: '04', title: 'Implementation', desc: 'We prepare audit-proof documentation, coordinate with your CPA, and manage the complete filing process. Every detail is handled by our dedicated team from start to finish.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', imgAlt: 'Professional preparing audit-proof documentation and managing the filing process' },
  { num: '05', title: 'Results Delivery', desc: 'Credits are captured and monetized. You receive comprehensive reporting showing exactly what was achieved, along with all supporting documentation for your records.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', imgAlt: 'Professional presenting final tax savings results and documentation to client' },
  { num: '06', title: 'Ongoing Partnership', desc: 'We monitor legislative changes, identify new opportunities, and provide lifetime audit defense for every engagement. As regulations evolve, we ensure you stay ahead.', img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=600&q=80', imgAlt: 'Business partners shaking hands symbolizing long-term consulting partnership' },
];

const faqs = [
  { question: 'What makes Concord different from other tax incentive firms?', answer: 'Concord employs licensed Professional Engineers who build detailed energy models, not just accountants. Every study includes court-tested documentation protocols with lifetime audit defense. Our engineering-first approach ensures your credits are not only claimed but can withstand any IRS scrutiny.' },
  { question: 'How does Concord ensure my credits survive an IRS audit?', answer: 'Our engineering-first approach produces audit-proof documentation backed by ASHRAE-standard energy models. With an industry-leading audit track record and lifetime audit defense included in every engagement, your credits are protected from day one.' },
  { question: 'What types of organizations does Concord work with?', answer: 'We work with building owners, commercial real estate portfolios, tax-exempt organizations, government entities, CPA firms, and any organization that can benefit from clean energy tax incentives including 179D, Direct Pay, PWA compliance, and R&D credits.' },
  { question: 'How long does the engagement process take?', answer: 'Most engagements begin with a complimentary assessment. From there, our team can identify eligible incentives and create a roadmap within weeks, with many clients seeing results within 60 to 90 days.' },
];

function StatusIcon({ type }) {
  if (type === 'check') return <CheckCircle size={24} weight="fill" className="text-concord-green" />;
  if (type === 'x') return <XCircle size={24} weight="fill" className="text-red-400" />;
  return <MinusCircle size={24} className="text-slate-300" />;
}

export default function WhyUs() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Why Choose Concord' },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SEOHead
        title="Why Choose Concord | Concord Energy Strategies"
        description="Discover why leading organizations choose Concord Energy Strategies. Engineering-first approach, audit-proof documentation, and $1B+ in tax savings secured."
        canonical="/why-us"
      />
      <SchemaScript schema={orgSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Breadcrumb */}
      <div className="pt-[88px] bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm font-body flex items-center gap-2">
            <Link to="/" className="text-white/40 hover:text-white/70 transition-colors">Home</Link>
            <CaretRight size={10} className="text-white/30" />
            <span className="text-white/40">About</span>
            <CaretRight size={10} className="text-white/30" />
            <span className="text-white font-medium">Why Choose Concord</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-concord-dark pb-[40px] lg:pb-[48px] pt-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Why Concord</span>
            <h1 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] mb-6 text-white">
              We Don't Just Find Incentives. We Defend Them.
            </h1>
            <p className="text-[16px] lg:text-[18px] text-white/60 max-w-[640px] leading-relaxed mb-6">
              Where other firms stop at identification, Concord builds audit-proof cases backed by licensed engineers, energy models, and 15+ years of IRS defense experience. That's the difference between claiming a credit and keeping it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-concord-dark px-8 py-4 rounded-full text-[15px] font-bold inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/the-concord-standard"
                className="px-8 py-4 rounded-full text-[15px] font-bold border-2 border-white/20 text-white hover:border-white/40 transition-colors font-heading w-full sm:w-auto text-center"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              { value: '$1B+', label: 'Client Savings' },
              { value: '100%', label: 'Audit Success Rate' },
              { value: '1,000+', label: 'Buildings Evaluated Annually' },
              { value: '15+', label: 'Years of Clean Energy Focus' },
            ].map((stat, i) => (
              <ScrollFadeIn key={stat.label} delay={i * 50}>
                <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 text-center card-hover flex flex-col h-full items-center justify-center">
                  <p className="font-heading font-extrabold text-[32px] lg:text-[40px] text-concord-green">{stat.value}</p>
                  <p className="text-[14px] text-slate-500 font-medium mt-2">{stat.label}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">What Sets Us Apart</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Built Different. By Design.</h2>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              { icon: Cpu, title: 'Engineering-First Approach', desc: 'We employ licensed Professional Engineers who build detailed energy models, not just accountants reviewing spreadsheets. Real engineering means real defensibility.' },
              { icon: ShieldCheck, title: 'Audit-Proof Documentation', desc: "Every study includes court-tested documentation protocols with lifetime audit defense. We don't just help you claim credits; we make sure you keep them." },
              { icon: ArrowsClockwise, title: 'End-to-End Service', desc: 'From initial assessment through filing and audit defense, one dedicated team handles everything. No handoffs, no gaps, no surprises.' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollFadeIn key={card.title} delay={i * 50}>
                  <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm p-10 card-hover relative overflow-hidden group flex flex-col h-full">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-concord-green to-concord-greenHover" />
                    <div className="w-16 h-16 rounded-2xl bg-concord-mint flex items-center justify-center mb-6 group-hover:bg-concord-green transition-colors">
                      <Icon size={28} weight="duotone" className="text-concord-green group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-[20px] mb-3">{card.title}</h3>
                    <p className="text-[16px] text-slate-500 leading-relaxed flex-grow">{card.desc}</p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">See how Concord compares to your current approach</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Request a complimentary portfolio review and discover what you may be leaving on the table.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 shrink-0 w-full sm:w-auto justify-center"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Side by Side</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Concord vs. Traditional Firms</h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-black/[0.06]">
                <div className="p-6 md:p-8 font-bold font-heading text-slate-400 text-sm uppercase tracking-wider">Capability</div>
                <div className="p-6 md:p-8 text-center bg-concord-green/5 border-l border-r border-black/[0.06]">
                  <span className="font-bold font-heading text-concord-green text-sm uppercase tracking-wider">Concord</span>
                </div>
                <div className="p-6 md:p-8 text-center">
                  <span className="font-bold font-heading text-slate-400 text-sm uppercase tracking-wider">Traditional CPA</span>
                </div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => {
                const Icon = row.icon;
                const isLast = i === comparisonRows.length - 1;
                return (
                  <div key={row.label} className={`grid grid-cols-3 ${!isLast ? 'border-b border-black/[0.06]' : ''} hover:bg-concord-mint/30 transition-colors`}>
                    <div className="p-6 md:p-8 font-medium text-sm md:text-base flex items-center gap-3">
                      <Icon size={18} className="text-concord-green hidden sm:block" />
                      {row.label}
                    </div>
                    <div className="p-6 md:p-8 text-center bg-concord-green/5 border-l border-r border-black/[0.06] flex items-center justify-center">
                      <StatusIcon type={row.concord} />
                    </div>
                    <div className="p-6 md:p-8 text-center flex items-center justify-center">
                      <StatusIcon type={row.traditional} />
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollFadeIn>
              <div className="relative rounded-3xl overflow-hidden bg-concord-mint aspect-[4/3]">
                <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
                <div className="absolute inset-0 bg-gradient-to-t from-concord-dark/20 to-transparent" />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Team</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6">Credentials That Matter When It Counts</h2>
              <p className="text-[16px] text-slate-500 leading-relaxed mb-8">
                Our team combines deep engineering expertise with tax policy knowledge that few firms can match. When the IRS questions a claim, our credentials and methodology stand up to scrutiny.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { bold: 'Licensed Professional Engineers (PE)', text: ', energy modeling and building systems experts' },
                  { bold: 'LEED Accredited Professionals', text: ', sustainable building certification specialists' },
                  { bold: 'Certified Energy Managers (CEM)', text: ', recognized by the Association of Energy Engineers' },
                  { bold: 'Tax Policy Specialists', text: ', deep IRS regulatory knowledge and audit experience' },
                  { bold: 'ASHRAE Building Modeling Experts', text: ', certified in energy simulation standards' },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <CheckCircle size={20} weight="fill" className="text-concord-green mt-0.5" />
                    <span className="text-slate-600">
                      <strong className="text-concord-dark">{item.bold}</strong>{item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/who-we-are"
                className="inline-flex items-center gap-2 text-concord-green font-semibold font-heading hover:gap-3 transition-all"
              >
                Meet Our Leadership <ArrowRight size={16} />
              </Link>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Client Testimonial</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Trusted by Industry Leaders</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm p-10 relative">
              <Quotes size={48} weight="fill" className="text-concord-green/20 absolute top-8 right-10" />
              <p className="text-lg text-slate-600 leading-relaxed mb-8 relative z-10">
                "Concord took the complexity out of our 179D claims and delivered results that exceeded our expectations. Their team was responsive, thorough, and always available."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-concord-green/10 flex items-center justify-center">
                  <User size={20} weight="fill" className="text-concord-green" />
                </div>
                <div>
                  <div className="font-bold font-heading">James Richardson</div>
                  <div className="text-sm text-slate-500">VP of Facilities, National Education Partners</div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">The Concord Standard</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Our Proven 6-Step Process</h2>
          </ScrollFadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ background: 'rgba(61,163,93,0.3)' }} />

            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollFadeIn key={step.num}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 ${i < processSteps.length - 1 ? 'mb-[80px]' : ''}`}>
                    <div className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-concord-green text-white font-heading font-bold text-[14px] mb-4">{step.num}</div>
                      <h3 className="font-heading font-bold text-[24px] text-concord-dark mb-3">{step.title}</h3>
                      <p className="text-[16px] text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <img src={step.img} alt={step.imgAlt} className="rounded-3xl w-full shadow-md" loading="lazy" width="600" height="400" />
                    </div>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">Questions about our process or approach?</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Our team is ready to walk you through how Concord can maximize your clean energy tax incentives.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 shrink-0 w-full sm:w-auto justify-center"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <ScrollFadeIn className="lg:w-[40%]">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Common Questions</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">Frequently Asked Questions</h2>
              <p className="text-[16px] text-slate-500 leading-relaxed">Everything you need to know about working with Concord and how we help organizations maximize their clean energy tax incentives.</p>
            </ScrollFadeIn>

            <div className="lg:w-[60%] space-y-4">
              {faqs.map((faq, i) => (
                <ScrollFadeIn key={i} delay={i * 50}>
                  <FaqItem question={faq.question} answer={faq.answer} />
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
            alt="Aerial view of modern commercial buildings in a city skyline at sunset"
            className="w-full h-full object-cover"
            loading="lazy"
            width="1400"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-concord-dark/90 to-concord-dark/70" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 lg:p-14 text-center">
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-6">Ready to Work with the Best?</h2>
            <p className="text-[16px] text-white/70 leading-relaxed max-w-[600px] mx-auto mb-10">
              Join the organizations that trust Concord to maximize their clean energy incentives and defend every dollar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#151C19] px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/179d-tax-deduction"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Inline FAQ item for the side-by-side layout */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-heading font-bold text-[16px]">{question}</span>
        <CaretRight
          size={16}
          className={`text-concord-green shrink-0 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 text-[15px] text-slate-500 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}
