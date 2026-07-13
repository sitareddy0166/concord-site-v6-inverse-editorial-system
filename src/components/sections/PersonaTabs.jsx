import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import EditorialMedia from '@/components/media/EditorialMedia';

/**
 * Accessible tablist with:
 * - Arrow-key navigation (Left/Right/Home/End)
 * - Roving tabindex
 * - Horizontally scrollable pill row on mobile with edge fades
 * - Per-persona EditorialMedia illustration on the panel
 * - Stable panel min-height to reduce layout jump
 * - No content transition under reduced motion
 */
export default function PersonaTabs({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const btnRefs = useRef({});

  const focusIndex = useCallback((i) => {
    const t = items[(i + items.length) % items.length];
    if (!t) return;
    setActive(t.id);
    btnRefs.current[t.id]?.focus();
  }, [items]);

  const onKey = useCallback((e, i) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); focusIndex(i + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); focusIndex(i - 1); }
    else if (e.key === 'Home') { e.preventDefault(); focusIndex(0); }
    else if (e.key === 'End') { e.preventDefault(); focusIndex(items.length - 1); }
  }, [focusIndex, items.length]);

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
      {/* Tab rail — horizontally scrollable pills on mobile, vertical index on desktop */}
      <div className="lg:col-span-4">
        {/* Mobile: horizontal scrollable pills with edge fade */}
        <div
          role="tablist"
          aria-label="Who we serve"
          aria-orientation="horizontal"
          className="lg:hidden -mx-6 sm:-mx-8 px-6 sm:px-8 flex gap-2 overflow-x-auto scrollbar-hide subnav-fade pb-1"
        >
          {items.map((t, i) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                id={`persona-tab-${t.id}`}
                aria-selected={on}
                aria-controls={`persona-panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                ref={(el) => (btnRefs.current[t.id] = el)}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`shrink-0 min-h-[44px] px-4 flex items-center gap-2 border transition-colors
                  ${on
                    ? 'border-[rgb(var(--concord-glow))] bg-[rgb(var(--concord))/0.10] text-[rgb(var(--ivory))]'
                    : 'border-[rgb(var(--ivory))/0.15] text-[rgb(var(--ivory))/0.65]'}`}
              >
                <span className={`index-num ${on ? 'text-[rgb(var(--concord-glow))]' : ''}`}>B/0{i + 1}</span>
                <span className="text-[13px] tracking-wide">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop: vertical index list */}
        <div
          role="tablist"
          aria-label="Who we serve"
          aria-orientation="vertical"
          className="hidden lg:block border-y border-[rgb(var(--ivory))/0.12]"
        >
          {items.map((t, i) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                id={`persona-tab-desktop-${t.id}`}
                aria-selected={on}
                aria-controls={`persona-panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                ref={(el) => (btnRefs.current[t.id] = el)}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`w-full flex items-baseline gap-4 text-left py-5 border-b border-[rgb(var(--ivory))/0.12] transition-colors last:border-b-0
                  ${on ? 'text-[rgb(var(--ivory))]' : 'text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]'}`}
              >
                <span className={`index-num shrink-0 w-12 ${on ? 'text-[rgb(var(--concord-glow))]' : ''}`}>B/0{i + 1}</span>
                <span className="font-[Fraunces] text-[24px] leading-tight tracking-tight flex-1">{t.label}</span>
                <ArrowRight size={18} weight="bold" aria-hidden="true" className={on ? 'text-[rgb(var(--concord-glow))]' : ''} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      <div className="lg:col-span-8">
        {items.map((t) => {
          const on = active === t.id;
          if (!on) return null;
          return (
            <div
              key={t.id}
              role="tabpanel"
              id={`persona-panel-${t.id}`}
              aria-labelledby={`persona-tab-${t.id}`}
              className="grid md:grid-cols-2 gap-0 border border-[rgb(var(--ivory))/0.12] persona-fade min-h-[420px] lg:min-h-[460px]"
            >
              <div className="surface-ivory p-6 sm:p-8 lg:p-10 relative flex flex-col">
                <span aria-hidden="true" className="coord absolute top-3 right-3 text-[rgb(var(--ink))/0.5]" />
                <p className="tech-label mb-4" style={{ color: 'rgb(var(--concord))' }}>Persona</p>
                <h3 className="font-[Fraunces] font-normal text-[26px] sm:text-[30px] leading-tight tracking-tight text-[rgb(var(--ink))]">
                  {t.title}
                </h3>
                <p className="mt-5 text-[16px] leading-relaxed text-[rgb(var(--ink))/0.78] max-w-md">
                  {t.description}
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="btn btn-dark min-h-[44px]">Learn More <ArrowRight size={14} weight="bold" /></Link>
                </div>
              </div>
              <div className="relative bg-[rgb(var(--ink))] min-h-[240px] md:min-h-full overflow-hidden">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.imageAlt || ''}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                ) : (
                  <EditorialMedia variant={t.media} alt={t.imageAlt} className="w-full h-full" aspect="4/3" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
