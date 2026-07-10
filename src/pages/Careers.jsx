import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight,
  ArrowDown,
  ArrowRight,
  Target,
  TrendUp,
  Medal,
  UsersThree,
  Check,
  MapPin,
  Heart,
  PiggyBank,
  SunHorizon,
  House,
  GraduationCap,
  Baby,
  Barbell,
  Airplane,
  MagnifyingGlass,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema, generateJobPostingSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

const whyCards = [
  { icon: Target, title: 'Mission-Driven Work', desc: 'Every project accelerates the clean energy transition. Your work directly helps organizations capture incentives that fund sustainable building practices.' },
  { icon: TrendUp, title: 'Growth & Development', desc: "Dedicated learning budgets, mentorship programs, and clear career pathways ensure you're always advancing your expertise and leadership skills." },
  { icon: Medal, title: 'Competitive Benefits', desc: 'Top-tier compensation, comprehensive health coverage, generous PTO, and a 401(k) match that reflects how much we value our team.' },
  { icon: UsersThree, title: 'Collaborative Culture', desc: 'Engineers, consultants, and strategists work side by side. We celebrate diverse perspectives and believe the best ideas come from open collaboration.' },
];

const jobListings = [
  { id: 1, category: 'consulting', catLabel: 'Consulting', title: 'Senior Tax Incentive Consultant', location: 'Remote', desc: 'Lead complex 179D, PWA, and Direct Pay engagements for Fortune 500 clients. Develop tax incentive strategies and ensure compliance across multi-site portfolios.' },
  { id: 2, category: 'engineering', catLabel: 'Engineering', title: 'Energy Engineer', location: 'Washington, DC', desc: 'Perform energy modeling, building assessments, and 179D certifications. Work with architects and building owners to maximize energy efficiency tax deductions.' },
  { id: 3, category: 'operations', catLabel: 'Operations', title: 'Client Success Manager', location: 'Remote', desc: 'Own the client experience from onboarding through ongoing engagement. Coordinate cross-functional teams to deliver tax incentive results on time and on budget.' },
  { id: 4, category: 'marketing', catLabel: 'Marketing', title: 'Marketing Director', location: 'New York, NY', desc: 'Lead brand strategy, content marketing, and demand generation for a fast-growing clean energy consulting firm. Drive awareness and pipeline growth across channels.' },
  { id: 5, category: 'consulting', catLabel: 'Consulting', title: 'PWA Compliance Specialist', location: 'Washington, DC', desc: 'Ensure prevailing wage and apprenticeship compliance across client projects. Develop documentation frameworks and conduct compliance audits for clean energy builds.' },
  { id: 6, category: 'engineering', catLabel: 'Engineering', title: 'Full Stack Developer', location: 'Remote', desc: 'Build and maintain internal tools and client-facing platforms that power tax incentive analysis, compliance tracking, and reporting dashboards.' },
];

const benefitCards = [
  { icon: Heart, title: 'Health & Dental', desc: 'Premium medical, dental, and vision coverage' },
  { icon: PiggyBank, title: '401(k) Match', desc: 'Generous employer match to grow your retirement' },
  { icon: SunHorizon, title: 'Unlimited PTO', desc: 'Flexible time off to recharge and reset' },
  { icon: House, title: 'Remote Flexibility', desc: 'Work from anywhere with hybrid options' },
  { icon: GraduationCap, title: 'Professional Development', desc: 'Annual learning budgets and conference stipends' },
  { icon: Baby, title: 'Parental Leave', desc: 'Generous paid leave for new parents' },
  { icon: Barbell, title: 'Wellness Stipend', desc: 'Monthly stipend for gym, wellness, and self-care' },
  { icon: Airplane, title: 'Annual Retreat', desc: 'Company-wide team building in inspiring locations' },
];

const processSteps = [
  { num: '01', title: 'Apply Online', desc: 'Submit your resume and cover letter through our application portal. We review every application carefully and respond within one week.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', imgAlt: 'Professional reviewing a job application on a laptop in a well-lit office setting' },
  { num: '02', title: 'Phone Screen', desc: "A 30-minute call with our People team to discuss your background, interests, and how you'd contribute to Concord's mission.", img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', imgAlt: 'Professional conducting a phone screen interview in a modern office' },
  { num: '03', title: 'Team Interview', desc: 'Meet with your future team leads for a deeper dive into your skills, experience, and culture fit. We want you to learn about us too.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', imgAlt: 'Team members conducting a panel interview with a candidate in a conference room' },
  { num: '04', title: 'Offer & Onboarding', desc: "Receive a competitive offer and join the Concord team. Our structured onboarding ensures you're set up for success from day one.", img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80', imgAlt: 'New team member being welcomed during the onboarding process with a laptop and welcome materials' },
];

const filterTabs = [
  { key: 'all', label: 'All Roles' },
  { key: 'consulting', label: 'Consulting' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'operations', label: 'Operations' },
  { key: 'marketing', label: 'Marketing' },
];

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredJobs = activeFilter === 'all'
    ? jobListings
    : jobListings.filter((job) => job.category === activeFilter);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]);

  return (
    <>
      <SEOHead
        title="Careers"
        description="Join Concord Energy Strategies. Explore open roles in consulting, engineering, operations, and marketing at a firm with $1B+ in client savings secured."
        canonical="/careers"
      />
      <SchemaScript schema={breadcrumbSchema} />
      {jobListings.map((job) => (
        <SchemaScript key={job.id} schema={generateJobPostingSchema({
          title: job.title,
          description: job.desc,
          location: job.location,
          remote: job.location.toLowerCase() === 'remote',
          url: '/careers',
        })} />
      ))}

      {/* HERO */}
      <section className="bg-concord-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
          <div className="absolute inset-0 bg-gradient-to-b from-concord-dark/60 via-concord-dark/80 to-concord-dark"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-[40px] lg:py-[60px]">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[13px] text-white/50">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><CaretRight size={10} /></li>
              <li className="text-white/80">Careers</li>
            </ol>
          </nav>
          <div className="max-w-[720px]">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-5">We're Hiring</p>
            <h1 className="font-heading font-extrabold text-[36px] md:text-[52px] lg:text-7xl tracking-[-0.03em] leading-[1.05] text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] text-white/70 leading-relaxed max-w-[600px] mb-10">
              Help shape the future of clean energy tax incentives. Build your career at a firm where compliance, innovation, and sustainability converge.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#positions" className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300" onClick={(e) => { e.preventDefault(); document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Open Positions <ArrowDown />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK HERE */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Why Concord</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">Why Work Here</h2>
            <p className="text-[16px] text-slate-500 leading-relaxed max-w-[560px] mx-auto">We offer more than a job. We offer the chance to make a measurable impact on the clean energy transition. Discover <Link to="/why-us" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">why organizations choose Concord</Link>.</p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {whyCards.map((card, i) => (
              <ScrollFadeIn key={card.title} delay={i * 100}>
                <div className="card-hover bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-concord-mint flex items-center justify-center mb-6">
                    <card.icon weight="bold" size={24} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-3">{card.title}</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mt-auto">{card.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE & VALUES */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <ScrollFadeIn className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn className="lg:w-1/2">
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Our Culture</p>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-6">Built on Values,<br />Driven by Impact</h2>
              <p className="text-[16px] text-slate-500 leading-relaxed mb-8">At Concord, we've built a culture where technical excellence meets genuine care for our planet. Learn more about <Link to="/who-we-are" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">who we are</Link> and <Link to="/the-concord-standard" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">the Concord Standard</Link> that guides everything we do. Our team thrives because we invest in people, trust their expertise, and empower them to do meaningful work every single day.</p>
              <div className="flex flex-col gap-5">
                {[
                  { title: 'Integrity First', desc: 'We do the right thing, even when no one is watching. Our compliance-driven approach means every recommendation is backed by rigorous analysis.' },
                  { title: 'Continuous Learning', desc: 'Tax policy evolves constantly. We stay ahead through ongoing education, industry conferences, and knowledge-sharing across teams.' },
                  { title: 'Client-Centered Excellence', desc: 'We measure our success by our clients\' outcomes. Every team member is empowered to go the extra mile to deliver exceptional results.' },
                ].map((value) => (
                  <div key={value.title} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-concord-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" size={14} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[16px] text-concord-dark mb-1">{value.title}</h3>
                      <p className="text-[16px] text-slate-500 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="positions" className="bg-white py-[80px] lg:py-[100px] scroll-mt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Open Roles</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">Open Positions</h2>
            <p className="text-[16px] text-slate-500 leading-relaxed max-w-[560px] mx-auto">Find a role that matches your skills and passion. We're looking for talented people across every department.</p>
            <p className="text-[14px] text-concord-green font-semibold mt-3 max-w-[560px] mx-auto">Positions updated regularly. <Link to="/contact" className="underline underline-offset-2 hover:text-concord-greenHover">Contact us</Link> for current openings.</p>
          </ScrollFadeIn>

          {/* Filter Tabs */}
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`rounded-full px-6 py-2.5 text-[14px] font-semibold border border-black/[0.06] transition-all ${
                    activeFilter === tab.key
                      ? 'bg-[#151C19] text-white'
                      : 'bg-white text-concord-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollFadeIn>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card card-hover bg-white rounded-3xl p-8 border border-black/[0.06] shadow-sm flex flex-col h-full relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-concord-green before:scale-x-0 before:transition-transform hover:before:scale-x-100">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full bg-concord-mint text-concord-green text-[12px] font-semibold">{job.catLabel}</span>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFF5DC] text-concord-dark text-[12px] font-semibold">Full-time</span>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[12px] font-medium">(Sample Listing)</span>
                </div>
                <h3 className="font-heading font-bold text-[20px] text-concord-dark mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-[13px] text-slate-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                </div>
                <p className="text-[16px] text-slate-500 leading-relaxed mb-6 flex-1">{job.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 justify-center w-full sm:w-auto">
                  Apply Now <ArrowRight />
                </a>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <MagnifyingGlass size={40} className="text-slate-300 mb-4 mx-auto" />
              <p className="text-[16px] text-slate-400">No positions found in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-concord-cream py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Perks & Benefits</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">Benefits That Matter</h2>
            <p className="text-[16px] text-slate-500 leading-relaxed max-w-[560px] mx-auto">We take care of our people so they can focus on taking care of our clients.</p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {benefitCards.map((card, i) => (
              <ScrollFadeIn key={card.title} delay={i * 50}>
                <div className="card-hover bg-white rounded-3xl p-6 text-center border border-black/[0.06] shadow-sm flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-concord-mint flex items-center justify-center mx-auto mb-4">
                    <card.icon weight="bold" size={20} className="text-concord-green" />
                  </div>
                  <h3 className="font-heading font-bold text-[15px] text-concord-dark mb-1">{card.title}</h3>
                  <p className="text-[14px] text-slate-400">{card.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="bg-white py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">How It Works</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4">Application Process</h2>
            <p className="text-[16px] text-slate-500 leading-relaxed max-w-[560px] mx-auto">Our hiring process is designed to be transparent, respectful, and efficient.</p>
          </ScrollFadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ background: 'rgba(61,163,93,0.3)' }}></div>

            {processSteps.map((step, i) => (
              <ScrollFadeIn key={step.num}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 ${i < processSteps.length - 1 ? 'mb-[80px]' : ''}`}>
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-concord-green text-white font-heading font-bold text-[14px] mb-4">{step.num}</div>
                    <h3 className="font-heading font-bold text-[24px] text-concord-dark mb-3">{step.title}</h3>
                    <p className="text-[16px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <img src={step.img} alt={step.imgAlt} width="600" height="400" className="rounded-3xl w-full shadow-md" loading="lazy" />
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-[80px] lg:py-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(61,163,93,0.85) 0%, rgba(21,28,25,0.9) 100%)' }}></div>
        </div>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <div className="rounded-3xl p-10 lg:p-16 text-center border" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-4">We Make It Simple</h2>
              <p className="text-[16px] text-white/70 leading-relaxed max-w-[520px] mx-auto mb-8">Don't see your role? We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to the clean energy transition.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-concord-dark px-8 py-4 font-bold text-[15px] hover:bg-white/90 transition-colors">
                  Send Us Your Resume <ArrowRight />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white px-8 py-4 font-bold text-[15px] hover:bg-white/10 transition-colors">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
