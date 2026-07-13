import EditorialMedia from '@/components/media/EditorialMedia';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight,
  CaretDown,
  EnvelopeSimple,
  Clock,
  Lightning,
  MapPin,
  VideoCamera,
  SealCheck,
  ShieldCheck,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

const faqItems = [
  {
    question: 'What happens after I book a meeting?',
    answer: 'Once you schedule a meeting, you\'ll receive a confirmation email with the meeting details. A member of our team will join at the scheduled time to discuss your needs and identify the best path forward.',
  },
  {
    question: 'Is the initial consultation free?',
    answer: 'Yes. We offer a complimentary 30-minute strategy call to assess your eligibility for clean energy tax incentives. During this call, we\'ll discuss your current projects, identify potential credits and deductions, and outline a preliminary roadmap for maximizing your savings.',
  },
  {
    question: 'What information should I have ready before our first call?',
    answer: "It helps to have basic details about your projects or properties, including location, square footage, construction timelines, and any existing energy efficiency measures. Don't worry if you don't have everything -- our team will guide you through what's needed during the discovery process.",
  },
  {
    question: 'Do you work with clients nationwide?',
    answer: 'Absolutely. Headquartered in the Washington, DC metro area, we serve clients across all 50 states. Our team conducts virtual consultations and can coordinate on-site visits as needed for engineering certifications and compliance documentation.',
  },
];

export default function ContactUs() {
  useEffect(() => {
    // Load HubSpot meetings embed script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact-us' },
  ]);

  return (
    <>
      <SEOHead
        title="Contact Us: Schedule a Meeting"
        description="Schedule a meeting with Concord Energy Strategies. Book a discovery call to discuss your clean energy tax incentives including 179D, Direct Pay, PWA, and transferable credits."
        canonical="/contact-us"
      />
      <SchemaScript schema={breadcrumbSchema} />

      {/* HERO */}
      <section className="bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 pt-4 pb-6 lg:pt-6 lg:pb-8">
          <nav className="mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[14px]">
              <li><Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link></li>
              <li><CaretRight size={12} className="text-white/30" /></li>
              <li><span className="text-white/80">Contact Us</span></li>
            </ol>
          </nav>
          <h1 className="font-heading font-extrabold text-[32px] lg:text-[44px] tracking-[-0.03em] leading-[1.1] text-white mb-2">Set up a Meeting</h1>
          <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px]">The best way to learn more about what Concord can do for you is to book a meeting using our calendar.</p>
        </div>
      </section>

      {/* HUBSPOT CALENDAR + INFO */}
      <section className="bg-white py-[50px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT: Contact Info */}
            <div className="lg:col-span-2">
              <ScrollFadeIn>
                <p className="text-[16px] text-slate-500 leading-relaxed mb-6">
                  If you'd like to get in touch another way, simply{' '}
                  <Link to="/contact" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">fill in the form</Link>{' '}
                  or use these contact details:
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="font-heading font-bold text-[15px] text-concord-dark">Phone:</p>
                    <a href="tel:+15023849078" className="text-concord-green hover:text-concord-greenHover text-[15px]">(502) 384-9078</a>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[15px] text-concord-dark">Toll Free:</p>
                    <a href="tel:+18888975445" className="text-concord-green hover:text-concord-greenHover text-[15px]">(888) 897-5445</a>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[15px] text-concord-dark">Address:</p>
                    <p className="text-[15px] text-slate-600">6000 Brownsboro Park Blvd, Suite H<br />Louisville, KY 40207</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { icon: EnvelopeSimple, title: 'Email', content: <a href="mailto:info@concordenergy.com" className="text-[15px] text-slate-600 hover:text-concord-green transition-colors">info@concordenergy.com</a> },
                    { icon: Clock, title: 'Office Hours', content: <p className="text-[15px] text-slate-600">Mon&ndash;Fri 8AM&ndash;6PM EST</p> },
                    { icon: Lightning, title: 'Response Time', content: <p className="text-[15px] text-slate-600">Within 24 hours</p> },
                  ].map((card) => (
                    <div key={card.title} className="bg-concord-mint rounded-3xl p-5 border border-black/[0.06] shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-concord-green/10 flex items-center justify-center shrink-0">
                          <card.icon weight="fill" size={18} className="text-concord-green" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-[15px] text-concord-dark mb-1">{card.title}</h3>
                          {card.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollFadeIn>
            </div>

            {/* RIGHT: HubSpot Calendar Embed */}
            <div className="lg:col-span-3">
              <ScrollFadeIn>
                <div className="bg-white rounded-3xl shadow-sm border border-black/[0.06] overflow-hidden" style={{ minHeight: 650 }}>
                  <div
                    className="meetings-iframe-container"
                    data-src="https://meetings.hubspot.com/jonathan-darnell?embed=true"
                    style={{ minWidth: 320, height: 650 }}
                  ></div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="bg-concord-cream py-[50px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Where We Work</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">Serving Clients Nationwide</h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                img: null,
                imgAlt: 'Washington DC skyline with the Capitol building and National Mall at dusk',
                title: 'Washington, DC Metro Area',
                isHQ: true,
                icon: MapPin,
                detail: 'Greater Washington, DC Area',
                hasEmail: true,
              },
              {
                img: null,
                imgAlt: 'Aerial city skyline at night representing nationwide service coverage',
                title: 'Nationwide Coverage',
                icon: MapPin,
                detail: 'Serving clients across all 50 states with virtual consultations and on-site support',
              },
              {
                img: null,
                imgAlt: 'Business professionals in virtual consultation meeting',
                title: 'Virtual Consultations',
                icon: VideoCamera,
                detail: 'Schedule a virtual meeting from anywhere. Our team is available for remote engagements year-round.',
              },
            ].map((loc) => (
              <ScrollFadeIn key={loc.title}>
                <div className="bg-white rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm card-hover flex flex-col h-full">
                  <EditorialMedia variant="office-map" alt={loc.imgAlt} aspect="3/2" className="w-full" />
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-heading font-bold text-[18px] text-concord-dark">{loc.title}</h3>
                      {loc.isHQ && <span className="text-[11px] font-bold uppercase tracking-[0.1em] bg-concord-green/10 text-concord-green px-2.5 py-1 rounded-full">HQ</span>}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <loc.icon size={18} className="text-concord-green mt-0.5 shrink-0" />
                        <p className="text-[14px] text-slate-600 leading-relaxed">{loc.detail}</p>
                      </div>
                      {loc.hasEmail && (
                        <div className="flex items-center gap-3">
                          <EnvelopeSimple size={18} className="text-concord-green shrink-0" />
                          <a href="mailto:info@concordenergy.com" className="text-[14px] text-slate-600 hover:text-concord-green transition-colors">info@concordenergy.com</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-concord-cream py-[50px] lg:py-[100px]">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Common Questions</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">Frequently Asked Questions</h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="flex flex-col gap-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="bg-white rounded-3xl border border-black/[0.06] shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-5 font-heading font-bold text-[16px] text-concord-dark cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <CaretDown className="faq-chevron text-concord-green text-lg shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-[16px] text-slate-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-[50px] lg:py-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <EditorialMedia variant="office-map" decorative className="h-full w-full" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(61,163,93,0.85) 0%, rgba(21,28,25,0.9) 100%)' }}></div>
        </div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <ScrollFadeIn>
            <div className="rounded-3xl p-10 lg:p-14 border" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-white mb-4">We Make It Simple</h2>
              <p className="text-[16px] text-white/70 leading-relaxed max-w-[480px] mx-auto mb-8">Ready to explore your clean energy incentive opportunities? Get in touch today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/the-concord-standard" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-concord-dark px-8 py-4 font-bold text-[15px] hover:bg-white/90 transition-colors">
                  <SealCheck size={20} /> The Concord Standard
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white px-8 py-4 font-bold text-[15px] hover:bg-white/10 transition-colors">
                  Start the Conversation
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
