import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight,
  CaretDown,
  EnvelopeSimple,
  MapPin,
  ChatCircleText,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

const tocSections = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'services', label: 'Description of Services' },
  { id: 'user-obligations', label: 'User Obligations' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'limitation-liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'dispute-resolution', label: 'Dispute Resolution' },
  { id: 'termination', label: 'Termination' },
  { id: 'force-majeure', label: 'Force Majeure' },
  { id: 'modifications', label: 'Modifications to Terms' },
  { id: 'severability', label: 'Severability' },
  { id: 'contact-info', label: 'Contact Information' },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const sectionRefs = useRef({});

  const updateActiveSection = useCallback(() => {
    const scrollPos = window.scrollY + 140;
    let active = '';
    for (let i = tocSections.length - 1; i >= 0; i--) {
      const el = sectionRefs.current[tocSections[i].id];
      if (el && el.offsetTop <= scrollPos) {
        active = tocSections[i].id;
        break;
      }
    }
    setActiveSection(active);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  const setSectionRef = useCallback((id) => (el) => {
    sectionRefs.current[id] = el;
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ]);

  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Review the Terms of Service for Concord Energy Strategies. Understand the terms governing the use of our tax incentive consulting services and website."
        canonical="/terms"
      />
      <SchemaScript schema={breadcrumbSchema} />

      {/* HERO */}
      <section className="bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 py-[32px] lg:py-[48px]">
          <nav className="flex items-center gap-2 text-[14px] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <CaretRight size={12} className="text-white/30" />
            <span className="text-concord-green font-medium">Terms of Service</span>
          </nav>
          <h1 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-white/50">Last updated: April 1, 2026</p>
        </div>
      </section>

      {/* Mobile TOC */}
      <div className="lg:hidden bg-concord-mint border-b border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <button
            className="flex items-center justify-between w-full text-[14px] font-bold text-concord-dark"
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
          >
            <span>On this page</span>
            <CaretDown size={16} className={`text-concord-green transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileTocOpen && (
            <nav className="flex flex-col gap-1 pt-3">
              {tocSections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-[13px] py-1.5 text-slate-500 hover:text-concord-green" onClick={() => setMobileTocOpen(false)}>{s.label}</a>
              ))}
            </nav>
          )}
        </div>
      </div>

      {/* CONTENT + TOC SIDEBAR */}
      <section className="bg-white py-[50px] lg:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-12 lg:gap-16">
            {/* Sticky TOC Sidebar (desktop) */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-[100px]">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">On this page</p>
                <nav className="flex flex-col gap-0.5">
                  {tocSections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`text-[13px] py-1.5 pl-3 border-l-2 transition-colors ${
                        activeSection === s.id
                          ? 'border-concord-green text-concord-green font-semibold'
                          : 'border-slate-200 text-slate-500 hover:text-concord-green'
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-[800px] flex-1" style={{ lineHeight: 1.8 }}>
              <ScrollFadeIn>
                <p className="text-[16px] text-slate-500 leading-relaxed mb-6">
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website and services provided by Concord Energy Strategies (&ldquo;Concord,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our website or engaging our services, you agree to be bound by these Terms. Please read them carefully before proceeding.
                </p>
              </ScrollFadeIn>

              {/* Acceptance of Terms */}
              <div id="acceptance" ref={setSectionRef('acceptance')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Acceptance of Terms</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">By accessing our website or engaging Concord Energy Strategies for consulting services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <Link to="/privacy-policy" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">Privacy Policy</Link>. If you are entering into these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>
                  <p className="text-[16px] text-slate-500 leading-relaxed">If you do not agree with any part of these Terms, you must discontinue use of our website and services immediately.</p>
                </ScrollFadeIn>
              </div>

              {/* Description of Services */}
              <div id="services" ref={setSectionRef('services')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Description of Services</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">Concord Energy Strategies provides compliance-driven consulting services related to clean energy tax incentives. Our services include, but are not limited to:</p>
                  <ul className="list-disc pl-6 text-[16px] text-slate-500 space-y-2 mb-4">
                    <li><strong>Tax Incentive Consulting:</strong> Section 179D energy-efficient commercial building tax deductions, R&D tax credit studies, and other applicable incentive programs</li>
                    <li><strong>Compliance Services:</strong> Prevailing Wage and Apprenticeship (PWA) compliance advisory, Direct Pay (Section 6417) election support, and Transferable Tax Credit (Section 6418) transaction advisory</li>
                    <li><strong>Documentation & Analysis:</strong> Preparation of supporting analyses, certification documentation, and deliverables to substantiate incentive claims</li>
                  </ul>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Our services are advisory in nature. Concord does not provide legal advice, and our analyses and deliverables should not be construed as legal opinions.</p>
                </ScrollFadeIn>
              </div>

              {/* User Obligations */}
              <div id="user-obligations" ref={setSectionRef('user-obligations')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">User Obligations</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">To enable us to deliver effective consulting services, you agree to:</p>
                  <ul className="list-disc pl-6 text-[16px] text-slate-500 space-y-2 mb-4">
                    <li>Provide accurate, complete, and timely information regarding your projects, buildings, and tax positions</li>
                    <li>Designate a primary point of contact authorized to make decisions on behalf of your organization</li>
                    <li>Review and respond to deliverables and requests for information within reasonable timeframes</li>
                    <li>Comply with all applicable federal, state, and local laws and regulations</li>
                    <li>Use our website and services only for lawful purposes and in accordance with these Terms</li>
                  </ul>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Concord is not responsible for delays or inaccuracies in our work product resulting from incomplete or incorrect information provided by the client.</p>
                </ScrollFadeIn>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property" ref={setSectionRef('intellectual-property')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Intellectual Property</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">All methodologies, frameworks, proprietary tools, templates, processes, and content on our website are the exclusive intellectual property of Concord Energy Strategies.</p>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Clients retain ownership of their own data, documents, and information provided to Concord. Deliverables produced specifically for the client may be used by the client for their intended purpose but may not be resold, redistributed, or publicly displayed without prior written consent from Concord.</p>
                </ScrollFadeIn>
              </div>

              {/* Confidentiality */}
              <div id="confidentiality" ref={setSectionRef('confidentiality')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Confidentiality</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">Both parties agree to maintain the confidentiality of all proprietary and sensitive information exchanged during the engagement. Concord will not disclose client information to third parties without prior written consent, except as required by law.</p>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Confidentiality obligations survive the termination of the engagement for a period of five (5) years, unless a longer period is required by applicable law or regulation.</p>
                </ScrollFadeIn>
              </div>

              {/* Limitation of Liability */}
              <div id="limitation-liability" ref={setSectionRef('limitation-liability')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Limitation of Liability</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">To the fullest extent permitted by law, Concord Energy Strategies&rsquo; total liability arising from or related to our services shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim.</p>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">In no event shall Concord be liable for indirect, incidental, consequential, special, or punitive damages.</p>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Concord&rsquo;s analyses and recommendations are based on our professional interpretation of applicable tax codes and regulations as of the date of delivery. We do not guarantee specific tax outcomes or IRS approval.</p>
                </ScrollFadeIn>
              </div>

              {/* Indemnification */}
              <div id="indemnification" ref={setSectionRef('indemnification')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Indemnification</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">You agree to indemnify, defend, and hold harmless Concord Energy Strategies, its officers, directors, employees, and agents from and against any claims, losses, damages, liabilities, and expenses arising from or related to your breach of these Terms, your misuse of deliverables, your provision of inaccurate information, or any violation of applicable law.</p>
                </ScrollFadeIn>
              </div>

              {/* Dispute Resolution */}
              <div id="dispute-resolution" ref={setSectionRef('dispute-resolution')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Dispute Resolution</h2>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Arbitration Clause</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If the dispute cannot be resolved within thirty (30) days, either party may elect to submit the matter to binding arbitration administered by the American Arbitration Association. The arbitration shall take place in Washington, D.C.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Governing Law</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the District of Columbia, without regard to its conflict of law principles.</p>
                </ScrollFadeIn>
              </div>

              {/* Termination */}
              <div id="termination" ref={setSectionRef('termination')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Termination</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">Either party may terminate an engagement by providing thirty (30) days&rsquo; written notice to the other party. The client shall be responsible for payment of all fees for services rendered through the effective date of termination.</p>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Concord reserves the right to terminate services immediately if the client fails to make timely payments, provides materially inaccurate information, or engages in conduct that compromises the integrity of our work.</p>
                </ScrollFadeIn>
              </div>

              {/* Force Majeure */}
              <div id="force-majeure" ref={setSectionRef('force-majeure')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Force Majeure</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Neither party shall be liable for any failure or delay in performing its obligations if such failure or delay results from circumstances beyond the party&rsquo;s reasonable control, including natural disasters, pandemics, acts of government, war, terrorism, power outages, internet disruptions, or labor disputes.</p>
                </ScrollFadeIn>
              </div>

              {/* Modifications to Terms */}
              <div id="modifications" ref={setSectionRef('modifications')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Modifications to Terms</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Concord reserves the right to modify these Terms of Service at any time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of our website or services after any modifications constitutes your acceptance of the revised Terms.</p>
                </ScrollFadeIn>
              </div>

              {/* Severability */}
              <div id="severability" ref={setSectionRef('severability')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Severability</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary. The invalidity of any provision shall not affect the validity or enforceability of the remaining provisions.</p>
                </ScrollFadeIn>
              </div>

              {/* Contact Information */}
              <div id="contact-info" ref={setSectionRef('contact-info')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Contact Information</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-6">If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="bg-concord-mint rounded-3xl p-6 md:p-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <EnvelopeSimple size={20} className="text-concord-green mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-concord-dark">Email</p>
                          <a href="mailto:info@concordenergy.com" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">info@concordenergy.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-concord-green mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-concord-dark">Location</p>
                          <p className="text-slate-500 text-[15px]">Concord Energy Strategies<br />Washington, DC Metro Area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-[50px] lg:py-[80px] overflow-hidden">
        <div className="absolute inset-0">
          <div aria-hidden="true" className="w-full h-full bg-[rgb(var(--graphite))] blueprint-grid-fine" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(61,163,93,0.85) 0%, rgba(21,28,25,0.9) 100%)' }}></div>
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <div className="rounded-3xl p-10 lg:p-14 text-center border" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-4">We Make It Simple</h2>
              <p className="text-[16px] text-white/70 leading-relaxed max-w-xl mx-auto mb-8">Have questions about these terms? Our team is happy to help you understand how our services can support your organization.</p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-concord-dark px-8 py-4 font-bold text-[15px] hover:bg-white/90 transition-colors">
                <ChatCircleText size={20} /> Contact Us
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
