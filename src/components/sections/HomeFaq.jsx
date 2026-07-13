import { useState, useId } from 'react';

/**
 * Shared accessible FAQ used on Home and other marketing surfaces.
 * - First item open by default.
 * - Correct aria-expanded / aria-controls / linked regions.
 * - Semantic <button> per question; no fixed max-height so long HTML answers do not clip.
 * - Answers may be a string or React node; strings are wrapped in <p>.
 */
export default function HomeFaq({ faqs = [] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="border-t border-[rgb(var(--ivory))/0.12]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={i} className="border-b border-[rgb(var(--ivory))/0.12]">
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-start justify-between gap-6 py-5 text-left min-h-[48px]"
              >
                <span className="flex items-baseline gap-4">
                  <span className="index-num shrink-0 text-[rgb(var(--concord-glow))]">Q/{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-[Fraunces] text-[18px] sm:text-[20px] lg:text-[22px] tracking-tight text-[rgb(var(--ivory))]">
                    {f.question}
                  </span>
                </span>
                <span aria-hidden="true" className={`tech-label text-[rgb(var(--concord-glow))] shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6 pl-0 sm:pl-14 pr-2"
            >
              <div className="text-[15px] sm:text-[16px] text-[rgb(var(--ivory))/0.78] leading-relaxed max-w-2xl">
                {typeof f.answer === 'string' ? <p>{f.answer}</p> : f.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
