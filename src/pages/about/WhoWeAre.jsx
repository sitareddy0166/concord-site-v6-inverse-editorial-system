import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretRight,
  Calculator,
  Wrench,
  Scales,
  Cpu,
  ShieldCheck,
  UsersThree,
  Handshake,
  Trophy,
  Lightbulb,
  Heart,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateOrganizationSchema, generateBreadcrumbSchema, generateAboutPageSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import CTABanner from '@/components/sections/CTABanner';

const cardShadow = { boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)' };

const expertiseCards = [
  { icon: Calculator, title: 'Tax Advisory & Compliance', description: 'Strategic guidance on federal energy tax incentives, IRS compliance, and audit-ready documentation for 179D, ITC, PTC, and Direct Pay claims.', weight: 'bold' },
  { icon: Wrench, title: 'Engineering & Energy Modeling', description: 'ASHRAE 90.1-compliant energy simulations, DOE-2 modeling, and licensed professional certifications for qualifying improvements.', weight: 'bold' },
  { icon: Scales, title: 'Legislative & Policy Analysis', description: 'Real-time monitoring of IRS rulings, Treasury guidance, and legislative developments that affect clean energy incentive eligibility.', weight: 'bold' },
  { icon: Cpu, title: 'Technology & Data Analytics', description: 'Proprietary software that automates document processing, identifies qualifying improvements, and accelerates study delivery.', weight: 'bold' },
  { icon: ShieldCheck, title: 'Audit Defense & Documentation', description: 'Comprehensive, IRS-compliant report packages and dedicated audit support with an industry-leading success track record across all engagements.', weight: 'bold' },
  { icon: UsersThree, title: 'Client Success & Project Management', description: 'Dedicated project managers who coordinate cross-functional teams and ensure every dollar of eligible savings is captured.', weight: 'bold' },
];

const valueCards = [
  { icon: Handshake, title: 'Integrity', description: 'We provide honest, transparent advice grounded in current law. Our clients trust us because we never overstate eligibility.' },
  { icon: Trophy, title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we do, from energy modeling to audit-ready deliverables.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Our proprietary technology and refined processes deliver faster, more accurate results than traditional approaches.' },
  { icon: Heart, title: 'Service', description: 'The client comes first. We build long-term partnerships by making complex tax incentives accessible and results-driven.' },
];

const stats = [
  { value: '$1B+', label: 'Client Savings Secured' },
  { value: '100%', label: 'Audit Success Rate' },
  { value: '1,000+', label: 'Buildings Evaluated Annually' },
  { value: '15+', label: 'Years of Clean Energy Focus' },
];

export default function WhoWeAre() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Who We Are' },
  ]);

  return (
    <div className="about-shell v6">
    <>
      <SEOHead
        title="Who We Are | Concord Energy Strategies"
        description="Meet the Concord Energy Strategies team. Founded 2009, $1B+ in client tax savings secured, 15+ years focused on clean energy incentive compliance."
        canonical="/who-we-are"
      />
      <SchemaScript schema={orgSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={generateAboutPageSchema({
        name: 'Who We Are | Concord Energy Strategies',
        description: 'Meet the Concord Energy Strategies team behind $1B+ in client tax savings.',
        url: '/who-we-are',
        about: orgSchema,
      })} />

      {/* Breadcrumb */}
      <div className="pt-[88px] bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm font-body flex items-center gap-2">
            <Link to="/" className="text-white/40 hover:text-white/70 transition-colors">Home</Link>
            <CaretRight size={10} className="text-white/30" />
            <span className="text-white/40">About</span>
            <CaretRight size={10} className="text-white/30" />
            <span className="text-white font-medium">Who We Are</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-concord-dark pb-[40px] lg:pb-[48px] pt-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block font-heading">About Concord</span>
            <h1 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] mb-6 text-white">
              The People Behind the Results
            </h1>
            <p className="text-[16px] lg:text-[18px] text-white/60 max-w-[640px] leading-relaxed mb-6">
              Concord brings together tax advisors, licensed engineers, policy analysts, and technologists who share a single mission: helping businesses claim every dollar of federal clean energy tax incentives they have earned.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.concordlp.com/meetings/jonathan-darnell"
                className="bg-white text-concord-dark px-8 py-4 rounded-full text-[15px] font-bold inline-flex items-center gap-2 font-heading hover:-translate-y-[2px] hover:shadow-lg transition-all w-full sm:w-auto justify-center"
              >
                Start the Conversation <ArrowRight size={16} />
              </a>
              <a
                href="#leadership"
                className="px-8 py-4 rounded-full text-[15px] font-bold border-2 border-white/20 text-white hover:border-white/40 transition-colors font-heading w-full sm:w-auto text-center"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto">
              <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">Our Mission</span>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Why We Started Concord</h2>
              <div className="space-y-4 text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px]">
                <p>We set out to change the way businesses claim federal tax incentives. Our founding team saw an industry failing its clients: incentives going unclaimed, compliance gaps creating audit risk, and building owners leaving money on the table.</p>
                <p>Concord was founded to fix that. We built a firm from the ground up that combines deep tax advisory expertise with licensed engineering capabilities, proprietary technology, and a relentless focus on audit-ready documentation.</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-white py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">The Team</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Our Leadership</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">Our leadership team brings decades of combined experience across tax advisory, engineering, policy, and technology.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 gap-6 max-w-[700px] mx-auto items-stretch">
            <ScrollFadeIn>
              <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 text-center card-hover flex flex-col h-full" style={cardShadow}>
                <div className="w-20 h-20 rounded-full bg-concord-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white font-heading">DS</span>
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark">Dennis J. Stilger, Jr.</h3>
                <p className="text-concord-green font-semibold text-[14px] mt-1">Founder & Principal</p>
                <p className="text-[14px] text-slate-500 leading-relaxed mt-3 mt-auto">Dennis founded Concord in 2009 and has been instrumental in shaping federal energy tax policy. As Co-Chair of the Coalition for Energy Efficient Jobs & Investment, he played a central role in lobbying Section 179D into permanent law.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 text-center card-hover flex flex-col h-full" style={cardShadow}>
                <div className="w-20 h-20 rounded-full bg-concord-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white font-heading">JD</span>
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark">Jonathan Darnell</h3>
                <p className="text-concord-green font-semibold text-[14px] mt-1">Managing Partner</p>
                <p className="text-[14px] text-slate-500 leading-relaxed mt-3 mt-auto">Jonathan leads client engagements and oversees business development for Concord. With deep expertise in 179D, transferable tax credits, and Direct Pay compliance, he has helped clients realize over $1 billion in federal tax savings.</p>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Inline CTA */}
          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">Ready to work with our leadership team?</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Schedule a conversation to discuss your organization's incentive opportunities.</p>
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

      {/* Expertise */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">What We Bring</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Multidisciplinary Expertise</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">Clean energy tax incentives sit at the intersection of tax law, engineering, and public policy. Concord is built to cover every dimension.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {expertiseCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollFadeIn key={card.title} delay={i * 50}>
                  <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 card-hover flex flex-col h-full" style={cardShadow}>
                    <div className="w-12 h-12 bg-concord-green/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} weight="bold" className="text-concord-green" />
                    </div>
                    <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-2">{card.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mt-auto">{card.description}</p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">What Guides Us</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Our Values</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">These principles define how we work, how we treat our clients, and how we hold ourselves accountable.</p>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {valueCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollFadeIn key={card.title} delay={i * 50}>
                  <div className="bg-white rounded-[24px] border border-black/[0.06] p-8 text-center card-hover flex flex-col h-full" style={cardShadow}>
                    <div className="w-14 h-14 bg-concord-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} weight="bold" className="text-concord-green" />
                    </div>
                    <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-2">{card.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mt-auto">{card.description}</p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          {/* Inline CTA */}
          <ScrollFadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">Learn about the process behind our results</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">See how The Concord Standard drives measurable outcomes for every client.</p>
              </div>
              <Link
                to="/the-concord-standard"
                className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all shrink-0 w-full sm:w-auto justify-center"
              >
                The Concord Standard <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollFadeIn className="text-center mb-12">
            <span className="text-[13px] uppercase tracking-widest font-bold text-concord-green mb-4 block">Proven Track Record</span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-concord-dark mb-4">Concord by the Numbers</h2>
            <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">Our results speak for themselves. These figures represent real outcomes delivered to real clients.</p>
          </ScrollFadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {stats.map((stat, i) => (
              <ScrollFadeIn key={stat.label} delay={i * 50}>
                <div className="bg-white rounded-[24px] border border-black/[0.06] p-6 text-center card-hover" style={cardShadow}>
                  <p className="text-3xl md:text-4xl font-extrabold font-heading text-concord-green tracking-tight">{stat.value}</p>
                  <p className="text-sm text-slate-500 font-medium mt-2">{stat.label}</p>
                </div>
              </ScrollFadeIn>
            ))}
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
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 lg:p-14 text-center">
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-tight leading-[1.1] text-white mb-6">Join the Organizations We Have Helped</h2>
            <p className="text-[16px] lg:text-[18px] text-white/70 leading-relaxed max-w-[600px] mx-auto mb-10">Whether you are a building owner, CPA firm, or tax-exempt organization, Concord can help you capture every incentive you deserve.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.concordlp.com/meetings/jonathan-darnell"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-concord-dark px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all"
              >
                Start the Conversation <ArrowRight size={16} />
              </a>
              <Link
                to="/179d-tax-deduction"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 font-bold text-[15px] hover:border-white hover:bg-white/10 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
    </div>
  );
}
