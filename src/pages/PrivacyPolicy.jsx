import EditorialMedia from '@/components/media/EditorialMedia';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight,
  CaretDown,
  EnvelopeSimple,
  MapPin,
  ShieldCheck,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

const tocSections = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'information-sharing', label: 'Information Sharing' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'cookies-tracking', label: 'Cookies & Tracking' },
  { id: 'third-party-links', label: 'Third-Party Links' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact-us', label: 'Contact Us' },
];

export default function PrivacyPolicy() {
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
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ]);

  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Learn how Concord Energy Strategies collects, uses, and protects your personal information. Our privacy policy outlines your rights and our data practices."
        canonical="/privacy-policy"
      />
      <SchemaScript schema={breadcrumbSchema} />

      {/* HERO */}
      <section className="bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 py-[32px] lg:py-[48px]">
          <nav className="flex items-center gap-2 text-[14px] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <CaretRight size={12} className="text-white/30" />
            <span className="text-concord-green font-medium">Privacy Policy</span>
          </nav>
          <h1 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-4">Privacy Policy</h1>
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
                  At Concord Energy Strategies (&ldquo;Concord,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our consulting services, or interact with us in any capacity.
                </p>
              </ScrollFadeIn>

              {/* Information We Collect */}
              <div id="information-we-collect" ref={setSectionRef('information-we-collect')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Information We Collect</h2>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Personal Information</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
                  <ul className="list-disc pl-6 text-[16px] text-slate-500 space-y-2 mb-4">
                    <li>Full name, job title, and company name</li>
                    <li>Email address and phone number</li>
                    <li>Mailing address and billing information</li>
                    <li>Tax identification numbers and financial data necessary for our consulting services</li>
                    <li>Any other information you choose to provide through forms, emails, or direct communication</li>
                  </ul>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Usage Data</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">When you access our website, we automatically collect certain information, including:</p>
                  <ul className="list-disc pl-6 text-[16px] text-slate-500 space-y-2 mb-4">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on pages, and navigation paths</li>
                    <li>Referring website addresses and search terms</li>
                    <li>Device identifiers and screen resolution</li>
                  </ul>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Cookies</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed">We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. For more details, see the <a href="#cookies-tracking" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">Cookies & Tracking</a> section below.</p>
                </ScrollFadeIn>
              </div>

              {/* How We Use Your Information */}
              <div id="how-we-use" ref={setSectionRef('how-we-use')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">How We Use Your Information</h2>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Service Delivery</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">We use your information to provide, maintain, and improve our tax incentive consulting services, including 179D deductions, Direct Pay elections, prevailing wage and apprenticeship compliance, R&D credits, and transferable credit facilitation.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Communications</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">We may use your contact information to send you service-related correspondence, respond to inquiries, provide updates about regulatory changes affecting your tax incentives, and deliver newsletters or marketing materials where you have opted in.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Improvement</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed">We analyze usage data to improve our website functionality, tailor our services to better meet client needs, develop new service offerings, and ensure the security and integrity of our platforms.</p>
                </ScrollFadeIn>
              </div>

              {/* Information Sharing */}
              <div id="information-sharing" ref={setSectionRef('information-sharing')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Information Sharing</h2>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Third Parties</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">We may share your information with trusted third-party service providers who assist us in operating our business, such as IT hosting, payment processing, and analytics platforms. These providers are contractually obligated to protect your information and use it only for the purposes we specify.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Legal Requirements</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Business Transfers</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed">In the event of a merger, acquisition, reorganization, or sale of assets, your personal information may be transferred as part of that transaction. We will notify you of any such change.</p>
                </ScrollFadeIn>
              </div>

              {/* Data Security */}
              <div id="data-security" ref={setSectionRef('data-security')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Data Security</h2>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Encryption</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">All data transmitted to and from our website is encrypted using industry-standard TLS/SSL protocols. Sensitive client data stored on our systems is encrypted at rest using AES-256 encryption.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Access Controls</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-4">We implement strict role-based access controls to ensure that only authorized personnel can access your personal information. Multi-factor authentication is required for all team members accessing client data systems.</p>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Incident Response</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed">We maintain a comprehensive incident response plan. In the event of a data breach, we will notify affected individuals and relevant authorities in accordance with applicable laws, typically within 72 hours of discovery.</p>
                </ScrollFadeIn>
              </div>

              {/* Your Rights */}
              <div id="your-rights" ref={setSectionRef('your-rights')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Your Rights</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-6">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                  <div className="grid gap-4 sm:grid-cols-2 mb-6">
                    {[
                      { title: 'Right to Access', desc: 'Request a copy of the personal data we hold about you.' },
                      { title: 'Right to Correction', desc: 'Request that we correct any inaccurate or incomplete personal data.' },
                      { title: 'Right to Deletion', desc: 'Request that we delete your personal data, subject to legal exceptions.' },
                      { title: 'Right to Opt-Out', desc: 'Opt out of marketing communications at any time.' },
                    ].map((right) => (
                      <div key={right.title} className="bg-concord-mint rounded-3xl p-5">
                        <h3 className="font-heading font-semibold text-[16px] text-concord-dark mb-1">{right.title}</h3>
                        <p className="text-slate-500 text-[14px] leading-relaxed">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[16px] text-slate-500 leading-relaxed">To exercise any of these rights, please contact us at <a href="mailto:info@concordlp.com" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">info@concordlp.com</a>. We will respond within 30 days.</p>
                </ScrollFadeIn>
              </div>

              {/* Cookies & Tracking */}
              <div id="cookies-tracking" ref={setSectionRef('cookies-tracking')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Cookies & Tracking</h2>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">Types of Cookies We Use</h3>
                  <div className="overflow-x-auto mt-4 mb-6">
                    <table className="w-full text-sm text-left border border-slate-200 rounded-3xl overflow-hidden">
                      <thead className="bg-concord-mint">
                        <tr>
                          <th className="px-5 py-3.5 font-semibold text-concord-dark">Type</th>
                          <th className="px-5 py-3.5 font-semibold text-concord-dark">Purpose</th>
                          <th className="px-5 py-3.5 font-semibold text-concord-dark">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-500">
                        <tr className="border-t border-slate-200"><td className="px-5 py-3.5 font-medium">Essential</td><td className="px-5 py-3.5">Required for basic site functionality, security, and authentication</td><td className="px-5 py-3.5">Session</td></tr>
                        <tr className="border-t border-slate-200 bg-slate-50/50"><td className="px-5 py-3.5 font-medium">Analytics</td><td className="px-5 py-3.5">Help us understand visitor behavior and improve our website</td><td className="px-5 py-3.5">Up to 2 years</td></tr>
                        <tr className="border-t border-slate-200"><td className="px-5 py-3.5 font-medium">Functional</td><td className="px-5 py-3.5">Remember your preferences and settings</td><td className="px-5 py-3.5">Up to 1 year</td></tr>
                        <tr className="border-t border-slate-200 bg-slate-50/50"><td className="px-5 py-3.5 font-medium">Marketing</td><td className="px-5 py-3.5">Deliver relevant advertisements and track campaign performance</td><td className="px-5 py-3.5">Up to 1 year</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-concord-dark mt-8 mb-3">How to Manage Cookies</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed">You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, though doing so may affect the functionality of our website.</p>
                </ScrollFadeIn>
              </div>

              {/* Third-Party Links */}
              <div id="third-party-links" ref={setSectionRef('third-party-links')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Third-Party Links</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Our website may contain links to third-party websites, services, or resources that are not operated by Concord Energy Strategies. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.</p>
                </ScrollFadeIn>
              </div>

              {/* Children's Privacy */}
              <div id="childrens-privacy" ref={setSectionRef('childrens-privacy')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Children&rsquo;s Privacy</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal data from a child, we will take steps to delete that information promptly.</p>
                </ScrollFadeIn>
              </div>

              {/* Changes to This Policy */}
              <div id="changes" ref={setSectionRef('changes')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Changes to This Policy</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed">We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or industry standards. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page.</p>
                </ScrollFadeIn>
              </div>

              {/* Contact Us */}
              <div id="contact-us" ref={setSectionRef('contact-us')} className="scroll-mt-28 mt-14">
                <ScrollFadeIn>
                  <h2 className="font-heading font-bold text-2xl md:text-[28px] text-concord-dark border-l-4 border-concord-green pl-6 mb-6">Contact Us</h2>
                  <p className="text-[16px] text-slate-500 leading-relaxed mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-concord-mint rounded-3xl p-6 md:p-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <EnvelopeSimple size={20} className="text-concord-green mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-concord-dark">Email</p>
                          <a href="mailto:info@concordlp.com" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">info@concordlp.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-concord-green mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-concord-dark">Location</p>
                          <p className="text-slate-500 text-[15px]">Concord Energy Strategies<br />6000 Brownsboro Park Blvd, Suite H<br />Louisville, KY 40207</p>
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
          <EditorialMedia variant="document-stack" decorative className="h-full w-full" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(61,163,93,0.85) 0%, rgba(21,28,25,0.9) 100%)' }}></div>
        </div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <div className="rounded-3xl p-10 lg:p-14 text-center border" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-4">We Make It Simple</h2>
              <p className="text-[16px] text-white/70 leading-relaxed max-w-xl mx-auto mb-8">Have questions about your privacy? Our team is here to address your concerns and help you understand how your information is managed.</p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-concord-dark px-8 py-4 font-bold text-[15px] hover:bg-white/90 transition-colors">
                <ShieldCheck size={20} /> Contact Our Privacy Team
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
