import { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions", eyebrow = "FAQ" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[80px] lg:py-[100px] bg-concord-cream" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <ScrollFadeIn className="text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">{eyebrow}</p>
          <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">{title}</h2>
        </ScrollFadeIn>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <ScrollFadeIn key={index} delay={index * 50}>
              <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <span className="font-heading font-bold text-[16px] text-concord-dark pr-4">{faq.question}</span>
                  <Plus
                    size={20}
                    className={`text-concord-green shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-[15px] text-slate-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
