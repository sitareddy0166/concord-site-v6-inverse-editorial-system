import { Link } from 'react-router-dom';
import {
  CaretRight,
  DownloadSimple,
  MagnifyingGlassPlus,
  CheckSquare,
  Calculator,
  FileText,
  EnvelopeSimple,
  BookOpen,
  CalendarCheck,
  Article,
  FilePdf,
  ChartBar,
  ArrowRight,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

export default function WhitepaperThankYou() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Thank You', url: '/whitepaper/thank-you' },
  ]);

  return (
    <>
      <SEOHead
        title="Thank You"
        description="Thank you for downloading the 2026 R&D Tax Credit Guide. Your whitepaper is on its way to your inbox."
        canonical="/whitepaper/thank-you"
        noindex
      />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Breadcrumbs */}
      <div>
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm font-body text-slate-500">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-concord-green transition-colors">Home</Link></li>
              <li><CaretRight size={12} className="text-slate-400" /></li>
              <li><Link to="/resources" className="hover:text-concord-green transition-colors">Resources</Link></li>
              <li><CaretRight size={12} className="text-slate-400" /></li>
              <li className="text-concord-dark font-medium">Thank You</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 1. HERO / CONFIRMATION */}
      <section className="bg-concord-cream py-[100px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollFadeIn>
            {/* Animated Checkmark Circle */}
            <div className="w-28 h-28 bg-concord-green/10 rounded-full flex items-center justify-center mx-auto mb-10 relative animate-[scaleIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
              <div className="w-20 h-20 bg-concord-green rounded-full flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 18L15 25L28 11" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <h1 className="font-heading font-extrabold text-[40px] lg:text-[64px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-6">
              Thank You!
            </h1>
            <p className="text-lg md:text-xl text-concord-dark/60 font-body leading-relaxed max-w-xl mx-auto mb-10">
              Your whitepaper is on its way to your inbox. If you don't see it within a few minutes, check your spam folder. While you wait, explore our <Link to="/resources" className="text-concord-green font-medium hover:underline">resource library</Link> or read our latest <Link to="/resources" className="text-concord-green font-medium hover:underline">guide to IRA clean energy tax credits</Link>.
            </p>
            <Link to="/whitepaper" className="inline-flex items-center gap-2.5 bg-[#151C19] text-white px-10 py-5 rounded-full text-[15px] font-semibold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 shadow-lg">
              <DownloadSimple weight="fill" size={18} />
              Download Now
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 2. WHAT'S INSIDE */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Whitepaper Preview</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">
              What's Inside the Guide
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {[
                { icon: MagnifyingGlassPlus, title: 'R&D Credit Overview', desc: 'A comprehensive breakdown of the federal R&D tax credit, its history, and current legislation affecting clean energy companies.' },
                { icon: CheckSquare, title: 'Eligibility Criteria', desc: 'Detailed four-part test analysis to determine which of your activities qualify, with real-world clean energy examples.' },
                { icon: Calculator, title: 'Calculation Methods', desc: 'Step-by-step walkthrough of the Regular and Alternative Simplified Credit methods, including which one maximizes your benefit.' },
                { icon: FileText, title: 'Claiming Process', desc: 'Documentation requirements, IRS Form 6765 guidance, and audit-proof strategies to protect your credit claims long-term.' },
              ].map((card) => (
                <div key={card.title} className="card-hover bg-concord-mint rounded-3xl p-8 text-center flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <card.icon size={30} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-concord-dark/60 text-sm leading-relaxed mt-auto">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 3. NEXT STEPS */}
      <section className="bg-concord-cream py-[100px]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Your Roadmap</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">
              What Happens Next
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-[56px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] bg-gradient-to-r from-concord-green to-concord-greenHover"></div>

              {[
                { num: 1, icon: EnvelopeSimple, title: 'Check Your Inbox', desc: <>Your whitepaper download link has been sent to the email you provided. Look for a message from Concord Energy Strategies. Questions? <Link to="/contact" className="text-concord-green font-medium hover:underline">Contact us</Link>.</> },
                { num: 2, icon: BookOpen, title: 'Read the Guide', desc: 'Dive into the 50+ page guide covering everything from eligibility to advanced calculation strategies for clean energy R&D credits.' },
                { num: 3, icon: CalendarCheck, title: 'Start the Conversation', desc: <>Ready to put this knowledge into action? <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="text-concord-green font-medium hover:underline">Book a discovery call</a> with our experts to assess your credit opportunities.</> },
              ].map((step) => (
                <div key={step.num} className="text-center relative flex flex-col h-full">
                  <div className="w-14 h-14 bg-concord-green rounded-full flex items-center justify-center mx-auto mb-6 text-white font-heading font-bold text-lg relative z-10 shadow-lg shadow-concord-green/20">
                    {step.num}
                  </div>
                  <div className="bg-white rounded-3xl p-8 card-hover flex flex-col flex-1">
                    <div className="w-12 h-12 bg-concord-mint rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon size={24} className="text-concord-green" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-concord-dark/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 4. RELATED RESOURCES */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Keep Learning</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">
              Related Resources
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <Link to="/resources" className="card-hover bg-white rounded-3xl overflow-hidden border border-black/[0.06] group flex flex-col h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-concord-mint to-concord-green/10 flex items-center justify-center">
                  <Article size={70} className="text-concord-green/30 group-hover:text-concord-green/50 transition-colors" />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-semibold text-concord-green uppercase tracking-wider mb-3">Blog</span>
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-concord-green transition-colors">5 Common R&D Tax Credit Mistakes Clean Energy Companies Make</h3>
                  <p className="text-concord-dark/60 text-sm leading-relaxed mb-4">
                    Avoid costly errors that could reduce your credit or trigger an IRS audit. Our experts break down the top pitfalls.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-concord-green font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight />
                  </span>
                </div>
              </Link>

              <Link to="/whitepaper" className="card-hover bg-white rounded-3xl overflow-hidden border border-black/[0.06] group flex flex-col h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-[#FFF5DC] to-concord-cream flex items-center justify-center">
                  <FilePdf size={70} className="text-[#e85d75]/30 group-hover:text-[#e85d75]/50 transition-colors" />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-semibold text-[#e85d75] uppercase tracking-wider mb-3">Whitepaper</span>
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-concord-green transition-colors">The Complete Guide to 179D Deductions in 2026</h3>
                  <p className="text-concord-dark/60 text-sm leading-relaxed mb-4">
                    Everything building owners and designers need to know about maximizing energy-efficient commercial building deductions.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-concord-green font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight />
                  </span>
                </div>
              </Link>

              <Link to="/resources" className="card-hover bg-white rounded-3xl overflow-hidden border border-black/[0.06] group flex flex-col h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-concord-green/5 to-concord-dark/5 flex items-center justify-center">
                  <ChartBar size={70} className="text-concord-dark/20 group-hover:text-concord-dark/40 transition-colors" />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-semibold text-concord-dark/50 uppercase tracking-wider mb-3">Case Study</span>
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-concord-green transition-colors">How a Solar Developer Captured $2.4M in R&D Credits</h3>
                  <p className="text-concord-dark/60 text-sm leading-relaxed mb-4">
                    See how Concord helped a mid-size solar development firm identify and substantiate over $2.4 million in qualified research activities.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-concord-green font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight />
                  </span>
                </div>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-concord-cream py-[100px] px-6">
        <div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden">
          <ScrollFadeIn>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Modern energy-efficient commercial office building representing clean energy tax credit opportunities" className="absolute inset-0 w-full h-full object-cover" width="1200" height="600" loading="lazy" />
            <div className="absolute inset-0 bg-[#151C19]/90"></div>
            <div className="relative z-10 p-16 md:p-20 text-center">
              <div className="max-w-2xl mx-auto rounded-3xl p-12" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-6">
                  Ready to Maximize Your Credits?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Our team has helped organizations capture over $1B in clean energy tax incentives. Let us show you what's possible for your business. Browse more insights in our <Link to="/resources" className="text-white underline hover:text-white/90">resource library</Link>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="inline-flex items-center justify-center gap-2.5 bg-white text-[#151C19] px-8 py-3.5 rounded-full text-[15px] font-bold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
                    Start the Conversation <ArrowRight size={18} />
                  </a>
                  <Link to="/resources" className="inline-flex items-center justify-center gap-2.5 border border-white/30 text-white px-8 py-3.5 rounded-full text-[15px] font-bold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
                    View All Resources
                  </Link>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
