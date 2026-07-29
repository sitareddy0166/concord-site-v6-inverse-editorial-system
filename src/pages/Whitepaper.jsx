import EditorialMedia from '@/components/media/EditorialMedia';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  DownloadSimple,
  CheckCircle,
  LockSimple,
  CaretRight,
  CaretDown,
  BookOpen,
  ChartLineUp,
  CalendarCheck,
  Factory,
  UsersThree,
  EyeSlash,
  Trophy,
  MagnifyingGlass,
  Calculator,
  Quotes,
  User,
  ArrowRight,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import CTABanner from '@/components/sections/CTABanner';

const tocItems = [
  { num: '01', title: 'The R&D Tax Credit Landscape', desc: 'A full overview of the current federal and state R&D credit framework for energy companies.' },
  { num: '02', title: 'Qualifying Activities in Clean Energy', desc: 'Identify which clean energy research, development, and engineering activities qualify for credits.' },
  { num: '03', title: 'The Four-Part Test Explained', desc: 'A step-by-step breakdown of the IRS four-part test and how to test each activity against the criteria.' },
  { num: '04', title: 'Credit Calculation Methodology', desc: 'Regular method vs. Alternative Simplified Credit (ASC) with worked examples for clean energy firms.' },
  { num: '05', title: 'Industry-Specific Applications', desc: 'Tailored guidance for solar, wind, battery storage, HVAC, and building efficiency sectors.' },
  { num: '06', title: 'Common Mistakes & Missed Opportunities', desc: 'The top pitfalls that cost energy companies thousands in unclaimed credits every year.' },
  { num: '07', title: 'Case Studies & Real-World Examples', desc: '12 detailed case studies showing how clean energy companies captured significant R&D credits.' },
  { num: '08', title: 'Getting Started with Concord', desc: 'How our team helps you identify, document, and claim every eligible R&D credit dollar.' },
];

const learnCards = [
  { icon: Factory, title: 'Top Industries Benefiting', desc: 'Discover which clean energy sectors are capturing the most R&D credits and why your industry likely qualifies.' },
  { icon: UsersThree, title: 'Expanded Eligibility Under New Rules', desc: '2026 regulatory updates have broadened eligibility. Learn the new criteria that may now include your activities.' },
  { icon: EyeSlash, title: 'Why R&D Credits Are Overlooked', desc: 'Most energy companies leave money on the table. Understand the misconceptions that cause firms to miss eligible credits.' },
  { icon: Trophy, title: 'Competitive Advantage Analysis', desc: 'See how leading firms use R&D credits to reduce effective tax rates and reinvest in innovation.' },
  { icon: MagnifyingGlass, title: 'Missed Opportunities Audit', desc: 'A self-assessment framework to identify credits you may have missed in prior tax years and how to amend.' },
  { icon: Calculator, title: 'Step-by-Step Calculation Guide', desc: 'Walk through actual credit calculations with our worksheets, formulas, and real-world clean energy examples.' },
];

const faqItems = [
  {
    question: 'Who is this whitepaper for?',
    answer: 'This guide is designed for CFOs, tax directors, controllers, and operations leaders at clean energy companies including solar, wind, battery storage, EV infrastructure, and energy efficiency firms. It is also valuable for CPAs advising clients in these sectors.',
    hasContactLink: true,
  },
  {
    question: 'Is the whitepaper really free?',
    answer: 'Yes, the whitepaper is completely free. We ask for your contact information so we can deliver the PDF to your inbox and, with your permission, keep you updated on regulatory changes that may affect your eligibility.',
  },
  {
    question: 'How current is the information?',
    answer: 'This guide was updated in Q1 2026 and reflects the latest IRS guidance, Treasury regulations, and legislative changes.',
  },
  {
    question: 'Can I share this with my team?',
    answer: 'Absolutely. We encourage you to share the whitepaper with colleagues in finance, tax, engineering, and operations.',
  },
];

export default function Whitepaper() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/whitepaper/thank-you');
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'R&D Tax Credit Whitepaper', url: '/whitepaper' },
  ]);

  return (
    <>
      <SEOHead
        title="2026 R&D Tax Credit Whitepaper"
        description="Download the 2026 R&D Tax Credit Whitepaper for clean energy companies: 50+ pages, 12 case studies, filing checklists, and Q1 2026 policy updates."
        canonical="/whitepaper"
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
              <li className="text-concord-dark font-medium">R&D Tax Credit Whitepaper</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT: Download Form Card */}
            <ScrollFadeIn>
              <div id="download-form" className="card-hover bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <span className="inline-flex items-center gap-2 bg-concord-green/10 text-concord-green text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <DownloadSimple weight="fill" /> Download Free
                </span>
                <h1 className="font-heading font-extrabold text-[28px] lg:text-[32px] tracking-[-0.02em] leading-[1.15] mb-4">
                  The 2026 R&D Tax Credit Guide for Clean Energy Companies
                </h1>
                <div className="flex items-center gap-2 text-sm text-concord-dark/60 mb-8">
                  <CheckCircle weight="fill" className="text-concord-green text-lg" />
                  <span className="font-body">Trusted by 2,493 clean energy companies</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full px-5 py-3.5 rounded-xl bg-concord-mint text-sm font-body font-medium placeholder-concord-dark/40 focus:outline-none focus:ring-2 focus:ring-concord-green/30 transition-shadow" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full px-5 py-3.5 rounded-xl bg-concord-mint text-sm font-body font-medium placeholder-concord-dark/40 focus:outline-none focus:ring-2 focus:ring-concord-green/30 transition-shadow" />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-5 py-3.5 rounded-xl bg-concord-mint text-sm font-body font-medium placeholder-concord-dark/40 focus:outline-none focus:ring-2 focus:ring-concord-green/30 transition-shadow" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" required className="w-full px-5 py-3.5 rounded-xl bg-concord-mint text-sm font-body font-medium placeholder-concord-dark/40 focus:outline-none focus:ring-2 focus:ring-concord-green/30 transition-shadow" />
                  <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="w-full px-5 py-3.5 rounded-xl bg-concord-mint text-sm font-body font-medium placeholder-concord-dark/40 focus:outline-none focus:ring-2 focus:ring-concord-green/30 transition-shadow" />
                  <button type="submit" className="w-full bg-[#151C19] text-white py-4 rounded-full font-semibold text-sm hover:bg-concord-dark/90 transition-all shadow-premium mt-2">
                    Download the Whitepaper
                  </button>
                </form>

                <p className="flex items-center gap-2 text-xs text-concord-dark/40 mt-5 font-body">
                  <LockSimple weight="fill" className="text-sm" />
                  Your information is secure. We never share your data with third parties.
                </p>
              </div>
            </ScrollFadeIn>

            {/* RIGHT: Whitepaper Cover Mockup */}
            <ScrollFadeIn className="flex flex-col items-center lg:pt-8">
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-concord-dark/5 rounded-3xl transform rotate-6 scale-95 translate-y-4"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl transform rotate-3 overflow-hidden w-72 md:w-80">
                  <EditorialMedia variant="whitepaper" decorative className="h-full w-full" />
                  <div className="p-8 md:p-10">
                    <span className="text-concord-green text-xs font-bold uppercase tracking-widest">Concord Energy Strategies</span>
                    <h2 className="text-lg md:text-xl font-heading font-extrabold tracking-tight mt-4 mb-6 leading-snug">
                      The 2026 R&D Tax Credit Guide for Clean Energy Companies
                    </h2>
                    <div className="w-full h-px bg-concord-dark/10 mb-6"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-concord-mint rounded-full w-full"></div>
                      <div className="h-2 bg-concord-mint rounded-full w-4/5"></div>
                      <div className="h-2 bg-concord-mint rounded-full w-3/5"></div>
                      <div className="h-2 bg-concord-mint rounded-full w-4/5"></div>
                      <div className="h-2 bg-concord-mint rounded-full w-2/5"></div>
                    </div>
                    <div className="mt-8 flex items-center gap-2">
                      <img src="/assets/concord-logo.svg" alt="Concord Energy Strategies" className="h-6 w-auto" width="90" height="24" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <span className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-premium">
                  <BookOpen weight="fill" className="text-concord-green" /> 50+ pages
                </span>
                <span className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-premium">
                  <ChartLineUp weight="fill" className="text-concord-green" /> 12 case studies
                </span>
                <span className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-premium">
                  <CalendarCheck weight="fill" className="text-concord-green" /> Updated Q1 2026
                </span>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* 2. TABLE OF CONTENTS */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Inside the Guide</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">Table of Contents</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="space-y-4">
              {tocItems.map((item) => (
                <div key={item.num} className="toc-item flex items-start gap-5 p-5 rounded-2xl hover:bg-concord-mint transition-colors cursor-default">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-concord-green/10 flex items-center justify-center text-concord-green font-bold text-sm">{item.num}</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-concord-dark/50 font-body mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 3. WHAT YOU'LL LEARN */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Key Takeaways</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1]">What You'll Learn</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {learnCards.map((card) => (
                <div key={card.title} className="card-hover bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-concord-green/10 flex items-center justify-center mb-5">
                    <card.icon size={24} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-concord-dark/55 font-body leading-relaxed mt-auto">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 4. TESTIMONIAL */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="bg-concord-cream rounded-3xl p-10 md:p-14 text-center relative">
              <div className="w-14 h-14 rounded-full bg-concord-green/10 flex items-center justify-center mx-auto mb-8">
                <Quotes weight="fill" size={24} className="text-concord-green" />
              </div>
              <blockquote className="text-xl md:text-2xl font-heading font-bold tracking-tight leading-snug mb-8 max-w-3xl mx-auto">
                "This whitepaper helped us identify over $1.2M in previously unclaimed R&D credits. The four-part test breakdown alone was worth its weight in gold for our engineering team."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-concord-green/10 flex items-center justify-center">
                  <User weight="fill" className="text-concord-green text-lg" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-sm">VP of Engineering, clean energy manufacturer</p>
                  <p className="text-xs text-concord-dark/50 font-body">Illustrative client profile</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 5. ABOUT CONCORD */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">About Concord</p>
                <h2 className="font-heading font-extrabold text-[36px] lg:text-[44px] tracking-[-0.03em] leading-[1.1] mb-6">
                  Trusted by Clean Energy Leaders Nationwide
                </h2>
                <p className="text-concord-dark/60 text-lg leading-relaxed mb-8 font-body">
                  Concord Energy Strategies is a specialized consulting firm helping organizations claim clean energy tax incentives under the Inflation Reduction Act. Our team combines deep expertise in areas like <Link to="/rd-tax-credits" className="text-concord-green font-medium hover:underline">R&D tax credits</Link> with energy industry knowledge to deliver measurable results. Learn more about <Link to="/the-concord-standard" className="text-concord-green font-medium hover:underline">the Concord Standard</Link> that guides our work, or explore our full <Link to="/resources" className="text-concord-green font-medium hover:underline">resource library</Link>.
                </p>
                <Link to="/who-we-are" className="inline-flex items-center gap-2 bg-[#151C19] text-white px-8 py-4 rounded-full font-semibold text-sm">
                  Learn More About Us <ArrowRight />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '$1B+', label: 'Client Savings Secured' },
                  { value: '100%', label: 'Audit Success Rate' },
                  { value: '1,000+', label: 'Buildings Evaluated Annually' },
                  { value: '15+', label: 'Years of Clean Energy Focus' },
                ].map((stat) => (
                  <div key={stat.label} className="card-hover bg-white rounded-3xl p-8 text-center border border-black/[0.06] shadow-sm flex flex-col h-full">
                    <p className="text-4xl font-heading font-extrabold text-concord-green mb-2">{stat.value}</p>
                    <p className="text-sm text-concord-dark/50 font-body font-medium mt-auto">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-[40%]">
                <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">FAQ</p>
                <h2 className="font-heading font-extrabold text-[36px] lg:text-[44px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">Frequently Asked Questions</h2>
                <p className="text-[16px] text-slate-500 leading-relaxed">Common questions about the R&D Tax Credit whitepaper and how it can help your organization.</p>
              </div>
              <div className="lg:w-[60%] flex flex-col gap-4">
                {faqItems.map((faq, index) => (
                  <details key={faq.question} className="bg-white rounded-2xl border border-black/[0.06] shadow-sm" open={index === 0}>
                    <summary className="flex items-center justify-between px-6 py-5 font-heading font-bold text-[16px] text-concord-dark cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <CaretDown className="faq-chevron text-concord-green text-lg shrink-0 ml-4" />
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-[15px] text-slate-500 leading-relaxed">
                        {faq.answer}
                        {faq.hasContactLink && (
                          <> Have questions? <Link to="/contact" className="text-concord-green font-medium hover:underline">Contact our team</Link> for personalized guidance.</>
                        )}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <EditorialMedia variant="whitepaper" decorative className="h-full w-full" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(61,163,93,0.93), rgba(21,28,25,0.92))' }}></div>
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="rounded-3xl p-10 lg:p-14 border text-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[48px] tracking-[-0.03em] text-white leading-[1.1] mb-5">Ready to Capture Your R&D Credits?</h2>
              <p className="text-[16px] text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                Download the guide and start identifying credits your company may be leaving on the table. Or <Link to="/contact" className="text-white underline hover:text-white/90">reach out to our experts</Link> for a personalized assessment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#download-form" className="w-full sm:w-auto bg-white text-[#151C19] px-8 py-3.5 rounded-full text-[16px] font-bold text-center hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300" onClick={(e) => { e.preventDefault(); document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Download the Free Guide
                </a>
                <a href="https://www.concordlp.com/meetings/jonathan-darnell" className="w-full sm:w-auto px-8 py-3.5 rounded-full text-[16px] font-bold text-white border border-white/30 hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 text-center">
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
