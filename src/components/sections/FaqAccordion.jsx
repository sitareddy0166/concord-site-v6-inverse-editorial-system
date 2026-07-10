import { useState } from 'react';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions", eyebrow = "FAQ" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="surface-ink band">
      <div className="arch">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="tech-label mb-6">{eyebrow} · Q/01</p>
            <h2 className="h-lead">{title}</h2>
          </div>
          <div className="lg:col-span-8 border-t border-[rgb(var(--ivory))/0.12]">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={i} className="border-b border-[rgb(var(--ivory))/0.12]">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="index-num shrink-0">Q/0{i + 1}</span>
                      <span className="font-[Fraunces] text-[20px] lg:text-[22px] tracking-tight text-[rgb(var(--ivory))]">{faq.question}</span>
                    </span>
                    <span aria-hidden="true" className={`tech-label text-[rgb(var(--concord-glow))] shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div id={`faq-panel-${i}`} hidden={!open} className="pb-6 pl-14 pr-4">
                    <p className="text-[15px] text-[rgb(var(--ivory))/0.72] leading-relaxed max-w-2xl">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
