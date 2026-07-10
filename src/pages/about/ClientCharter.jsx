import { useState } from 'react';
import financialAnalysisImg from '@/assets/financial-analysis.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  CaretDown,
  Eye,
  Certificate,
  ClockCountdown,
  ShieldCheck,
  BookOpenText,
  Handshake,
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

const commitments = [
  { icon: Eye, title: 'Transparency', desc: 'Open reporting at every stage with no hidden fees. You will always know where your engagement stands, what we are working on, and exactly what you are paying for.' },
  { icon: Certificate, title: 'Expertise', desc: 'Certified professionals who pursue continuous education. Our team stays ahead of evolving tax legislation so you benefit from the most current strategies available.' },
  { icon: ClockCountdown, title: 'Responsiveness', desc: 'A 24-hour response guarantee backed by a dedicated team assigned to your account. When you need answers, we are already working on them.' },
  { icon: ShieldCheck, title: 'Compliance First', desc: '100% audit-ready deliverables on every engagement. We engineer our documentation to withstand scrutiny, giving you confidence that every credit will hold up.' },
  { icon: BookOpenText, title: 'Client Education', desc: 'Regular workshops, curated resources, and legislative updates. We empower your team with the knowledge to make informed decisions about energy incentives.' },
  { icon: Handshake, title: 'Long-term Partnership', desc: 'Ongoing support that extends well beyond the initial engagement. As regulations evolve and new opportunities emerge, we are beside you every step of the way.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & Assessment', desc: 'We analyze your portfolio, identify every eligible incentive, and quantify the potential value across all applicable programs.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', imgAlt: 'Professional conducting initial discovery assessment at desk' },
  { num: '02', title: 'Strategy Development', desc: 'Our engineers and tax experts craft a tailored roadmap that maximizes your credits while ensuring full regulatory compliance.', img: financialAnalysisImg, imgAlt: 'Team collaborating on tax incentive strategy development with financial documents' },
  { num: '03', title: 'Implementation & Filing', desc: 'We prepare audit-proof documentation, coordinate with your CPA, and manage the complete filing process from start to finish.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', imgAlt: 'Professional signing and preparing audit-proof documentation for IRS filing' },
  { num: '04', title: 'Ongoing Support', desc: 'We monitor legislative changes, identify new opportunities, and provide lifetime audit defense for every engagement we deliver.', img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=600&q=80', imgAlt: 'Client and consultant shaking hands representing ongoing partnership and support' },
];

const faqs = [
  { question: 'What is the Concord Client Charter?', answer: 'The Client Charter is our formal commitment to six principles: transparency, expertise, responsiveness, compliance, client education, and long-term partnership. It guides every engagement we undertake, from the first conversation through years of ongoing support.' },
  { question: "What is Concord's response time guarantee?", answer: 'We guarantee a maximum 24-hour response time for all client inquiries. Every client is assigned a dedicated team, so when you need answers, we are already working on them.' },
  { question: 'Does Concord provide audit defense?', answer: 'Yes. 100% of our deliverables are audit-ready. We provide lifetime audit defense for every engagement, engineering our documentation to withstand IRS scrutiny and protect every credit we help you claim.' },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-heading font-bold text-[16px]">{question}</span>
        <CaretDown
          size={16}
          className={`text-concord-green shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 text-[15px] text-slate-500 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

export default function ClientCharter() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Client Charter' },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SEOHead
        title="Client Charter | Concord Energy Strategies"
        description="The Concord Client Charter: our formal commitment to transparency, expertise, responsiveness, and long-term partnership with every client we serve."
        canonical="/client-charter"
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
            <span className="text-white font-medium">Client Charter</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-concord-dark pb-[40px] lg:pb-[48px] pt-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">Our Commitment</span>
            <h1 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] mb-6 text-white">
              Our Client Charter
            </h1>
            <p className="text-[16px] lg:text-[18px] text-white/60 max-w-[640px] leading-relaxed mb-6">
              Our commitment to excellence, transparency, and your success. The Client Charter represents the principles and standards we hold ourselves to on every engagement.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-concord-dark px-8 py-4 rounded-full text-[15px] font-bold inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
              <a
                href="#commitments"
                className="px-8 py-4 rounded-full text-[15px] font-bold border-2 border-white/20 text-white hover:border-white/40 transition-colors font-heading w-full sm:w-auto text-center"
              >
                See Our Commitments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollFadeIn>
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Promise to You</p>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
              At Concord Energy Strategies, our clients are at the center of everything we do. This charter represents the principles and standards we hold ourselves to on every engagement. It is not merely a statement of intent; it is a binding commitment that guides our team from the first conversation through years of ongoing partnership.
            </p>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              We believe that navigating complex clean energy tax incentives requires more than technical expertise. It demands a consulting partner who operates with radical transparency, unwavering accountability, and a genuine investment in your long-term success.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Six Commitments */}
      <section id="commitments" className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">What We Stand For</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Our Six Commitments</h2>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollFadeIn key={c.title} delay={i * 50}>
                  <div className="bg-white rounded-3xl border border-black/[0.06] shadow-sm p-8 card-hover flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-concord-mint flex items-center justify-center mb-6">
                      <Icon size={24} weight="duotone" className="text-concord-green" />
                    </div>
                    <h3 className="font-heading font-bold text-[20px] mb-3">{c.title}</h3>
                    <p className="text-[16px] text-slate-500 leading-relaxed flex-grow">{c.desc}</p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="border-l-4 border-concord-green pl-8 md:pl-12 py-4">
              <blockquote className="text-2xl md:text-3xl font-heading font-semibold italic leading-relaxed text-concord-dark mb-8">
                "Concord took the complexity out of our 179D claims and delivered results that exceeded our expectations. Their team was responsive, thorough, and always available."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-concord-mint flex items-center justify-center">
                  <User size={20} weight="duotone" className="text-concord-green" />
                </div>
                <div>
                  <p className="font-bold font-heading text-concord-dark">James Richardson</p>
                  <p className="text-sm text-slate-500">VP of Facilities, National Education Partners</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* How We Deliver - Timeline */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Process</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">How We Deliver</h2>
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
        </div>
      </section>

      {/* Accountability */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Measurable Results</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Accountability in Action</h2>
            <p className="text-[16px] text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed">
              We don't just make promises. We measure our performance against them. These numbers reflect our ongoing commitment to the standards outlined in this charter.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-stretch">
            {[
              { value: '100%', label: 'Audit Success Rate', sub: 'Across all engagements' },
              { value: '24hr', label: 'Response Time', sub: 'Guaranteed maximum' },
              { value: '100%', label: 'Compliance Rate', sub: 'Audit-ready deliverables' },
            ].map((stat, i) => (
              <ScrollFadeIn key={stat.label} delay={i * 50}>
                <div className="bg-concord-cream rounded-3xl border border-black/[0.06] shadow-sm p-10 text-center card-hover flex flex-col items-center justify-center">
                  <div className="text-5xl md:text-6xl font-extrabold font-heading text-concord-green mb-3">{stat.value}</div>
                  <p className="text-base font-semibold font-heading text-concord-dark mb-1">{stat.label}</p>
                  <p className="text-sm text-slate-500">{stat.sub}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">Experience the charter in action</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">See firsthand how our six commitments translate into real results for your organization.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 shrink-0 w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
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
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Questions</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-4">About Our Charter</h2>
              <p className="text-[16px] text-slate-500 leading-relaxed">Learn more about our commitment to transparency, compliance, and long-term partnership with every client we serve.</p>
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
          <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
          <div className="absolute inset-0 bg-gradient-to-br from-concord-dark/90 to-concord-dark/70" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 lg:p-14 text-center">
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-6">Experience the Concord Difference</h2>
              <p className="text-[16px] text-white/70 leading-relaxed max-w-[600px] mx-auto mb-10">
                Join the organizations that trust Concord to uphold the highest standards in clean energy tax incentive consulting. Let us show you what a true partnership looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#151C19] px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  Start the Conversation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/the-concord-standard"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  See Our Process <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
