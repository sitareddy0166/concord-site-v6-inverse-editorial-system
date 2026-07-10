import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight,
  CaretDown,
  PaperPlaneTilt,
  EnvelopeSimple,
  Clock,
  Lightning,
  MapPin,
  VideoCamera,
  CheckCircle,
  SealCheck,
  ArrowRight,
  ShieldCheck,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/seo';
import BookingCard from '@/components/ui/BookingCard';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

const faqItems = [
  {
    question: 'What happens after I submit the contact form?',
    answer: 'Once you submit the form, a member of our team will review your inquiry and respond within 24 hours. We\'ll schedule an initial discovery call to understand your needs and identify the best path forward.',
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

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name.';
    if (!formData.email.trim() || !validateEmail(formData.email.trim())) newErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 8000);
    }, 1500);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const faqSchema = generateFAQSchema(faqItems.map((f) => ({ question: f.question, answer: f.answer })));

  const inputClasses = (field) =>
    `w-full rounded-2xl border ${errors[field] ? 'border-[#e85d75] ring-2 ring-[#e85d75]/10' : 'border-black/[0.06]'} px-5 py-4 text-[15px] text-concord-dark placeholder:text-slate-400 bg-white focus:ring-2 focus:ring-concord-green focus:border-concord-green outline-none transition-all`;

  return (
    <>
      <SEOHead
        title="Start the Conversation"
        description="Contact Concord Energy Strategies for clean energy tax incentive consulting. Schedule a discovery call for 179D, Direct Pay, PWA, R&D, and transferable credits."
        canonical="/contact"
      />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      {/* HERO */}
      <section className="bg-concord-dark">
        <div className="max-w-[1200px] mx-auto px-6 pt-4 pb-6 lg:pt-6 lg:pb-8">
          <nav className="mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[14px]">
              <li><Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link></li>
              <li><CaretRight size={12} className="text-white/30" /></li>
              <li><span className="text-white/80">Contact</span></li>
            </ol>
          </nav>
          <h1 className="font-heading font-extrabold text-[32px] lg:text-[44px] tracking-[-0.03em] leading-[1.1] text-white mb-2">Start the Conversation</h1>
          <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px]">Ready to maximize your clean energy tax incentives? Let's talk.</p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="bg-white py-[50px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT: Contact Form */}
            <div className="lg:col-span-3">
              <ScrollFadeIn>
                <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-3">Send Us a Message</h2>
                <p className="text-[16px] text-slate-500 leading-relaxed mb-8">
                  Fill out the form below and a member of our team will get back to you promptly. Learn more about our{' '}
                  <Link to="/179d-tax-deduction" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">179D</Link>,{' '}
                  <Link to="/direct-pay" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">Direct Pay</Link>,{' '}
                  <Link to="/prevailing-wage-apprenticeship" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">PWA</Link>, and{' '}
                  <Link to="/transferable-tax-credits" className="text-concord-green hover:text-concord-greenHover underline underline-offset-2">Transferable Credits</Link> services.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="firstName" className="block text-[14px] font-medium text-concord-dark mb-2">First Name <span className="text-[#e85d75]">*</span></label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className={inputClasses('firstName')} />
                      {errors.firstName && <p className="text-[#e85d75] text-[13px] mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[14px] font-medium text-concord-dark mb-2">Last Name <span className="text-[#e85d75]">*</span></label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Smith" className={inputClasses('lastName')} />
                      {errors.lastName && <p className="text-[#e85d75] text-[13px] mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="email" className="block text-[14px] font-medium text-concord-dark mb-2">Email <span className="text-[#e85d75]">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className={inputClasses('email')} />
                      {errors.email && <p className="text-[#e85d75] text-[13px] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[14px] font-medium text-concord-dark mb-2">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" className={inputClasses('phone')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="company" className="block text-[14px] font-medium text-concord-dark mb-2">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" className={inputClasses('company')} />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-[14px] font-medium text-concord-dark mb-2">Service Interest</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className={`${inputClasses('service')} appearance-none`} style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22%23666%22 d=%22M6 8L1 3h10z%22/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
                        <option value="">Select a service...</option>
                        <option value="179d">179D Tax Deduction</option>
                        <option value="direct-pay">Direct Pay (6417)</option>
                        <option value="pwa">PWA Compliance</option>
                        <option value="rd-credits">R&D Tax Credits</option>
                        <option value="transferable-credits">Transferable Credits (6418)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[14px] font-medium text-concord-dark mb-2">Message <span className="text-[#e85d75]">*</span></label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell us about your project or question..." className={`${inputClasses('message')} resize-vertical`}></textarea>
                    {errors.message && <p className="text-[#e85d75] text-[13px] mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-60">
                    {isSubmitting ? 'Sending...' : <>Send Message <PaperPlaneTilt /></>}
                  </button>

                  {showSuccess && (
                    <div className="mt-6 p-5 rounded-3xl bg-concord-mint border border-concord-green/20">
                      <div className="flex items-center gap-3">
                        <CheckCircle weight="fill" size={24} className="text-concord-green" />
                        <div>
                          <p className="font-heading font-bold text-concord-dark">Message sent successfully!</p>
                          <p className="text-[14px] text-slate-500">We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </ScrollFadeIn>
            </div>

            {/* RIGHT: Contact Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <ScrollFadeIn>
                {[
                  { icon: EnvelopeSimple, title: 'Email', content: <a href="mailto:info@concordenergy.com" className="text-[15px] text-slate-600 hover:text-concord-green transition-colors">info@concordenergy.com</a> },
                  { icon: Clock, title: 'Office Hours', content: <p className="text-[15px] text-slate-600">Mon&ndash;Fri 8AM&ndash;6PM EST</p> },
                  { icon: Lightning, title: 'Response Time', content: <p className="text-[15px] text-slate-600">Within 24 hours</p> },
                ].map((card) => (
                  <div key={card.title} className="bg-concord-mint rounded-3xl p-6 border border-black/[0.06] shadow-sm card-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-concord-green/10 flex items-center justify-center shrink-0">
                        <card.icon weight="fill" size={20} className="text-concord-green" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-[16px] text-concord-dark mb-1">{card.title}</h3>
                        {card.content}
                      </div>
                    </div>
                  </div>
                ))}
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
                img: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=600&q=80',
                imgAlt: 'Washington DC skyline with the Capitol building and National Mall at dusk',
                title: 'Washington, DC Metro Area',
                isHQ: true,
                icon: MapPin,
                detail: 'Greater Washington, DC Area',
                hasEmail: true,
              },
              {
                img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80',
                imgAlt: 'Aerial city skyline at night representing nationwide service coverage',
                title: 'Nationwide Coverage',
                icon: MapPin,
                detail: 'Serving clients across all 50 states with virtual consultations and on-site support',
              },
              {
                img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
                imgAlt: 'Business professionals in virtual consultation meeting',
                title: 'Virtual Consultations',
                icon: VideoCamera,
                detail: 'Schedule a virtual meeting from anywhere. Our team is available for remote engagements year-round.',
              },
            ].map((loc) => (
              <ScrollFadeIn key={loc.title}>
                <div className="bg-white rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm card-hover flex flex-col h-full">
                  <img src={loc.img} alt={loc.imgAlt} width="600" height="400" loading="lazy" className="w-full h-[200px] object-cover" />
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

      {/* BOOK A MEETING */}
      <section className="bg-white py-[50px] lg:py-[100px]">
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-10">
            <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">Book a Meeting</p>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">Schedule a Discovery Call</h2>
          </ScrollFadeIn>
          <div className="max-w-[560px] mx-auto">
            <BookingCard />
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
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80" alt="Sunlight streaming through a lush green forest canopy representing sustainability and clean energy" width="1920" height="1080" loading="lazy" className="w-full h-full object-cover" />
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
                <Link to="/resources" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white px-8 py-4 font-bold text-[15px] hover:bg-white/10 transition-colors">
                  Explore Resources
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
