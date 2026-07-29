/**
 * Concord V6 — Shared Service Primitives (Phase B)
 * -----------------------------------------------------------------
 * Content-driven, modular components used across all five service
 * routes. Each is responsive by default, keyboard accessible where
 * relevant, and preserves the V6 dark technical editorial identity.
 *
 * Prop shapes are intentionally simple to ease future porting to a
 * HubSpot Content Hub theme (label / value / href / list pairs).
 *
 * Components:
 *   - ServiceSectionHeader
 *   - ServiceFactsRail
 *   - ServiceMediaSplit
 *   - ServiceAudienceGrid
 *   - ServiceEligibilityIndex
 *   - ServiceProcess
 *   - ServiceDocumentIndex
 *   - ServiceComparison
 *   - ServiceEvidence
 *   - RelatedServices
 *   - SharedServiceFAQ
 *   - ServiceFinalCTA
 */
import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle } from '@phosphor-icons/react';
import EditorialMedia from '@/components/media/EditorialMedia';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import { getRelatedServices } from '@/data/services';

/* ---------- 1. Section header ---------- */
export function ServiceSectionHeader({ eyebrow, code, title, lede, align = 'left', children }) {
  const center = align === 'center';
  return (
    <div className={`mb-10 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      {(eyebrow || code) && (
        <p className="tech-label mb-4">
          {code && <span className="index-num mr-2">{code}</span>}
          {eyebrow}
        </p>
      )}
      {title && <h2 className="h-lead text-balance">{title}</h2>}
      {lede && (
        <p className="mt-5 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72]">
          {lede}
        </p>
      )}
      {children}
    </div>
  );
}

/* ---------- 2. Facts rail ---------- */
export function ServiceFactsRail({ facts = [] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-[rgb(var(--ivory))/0.12] pt-6">
      {facts.map((f, i) => (
        <div key={i} className="border-l border-[rgb(var(--ivory))/0.10] pl-4">
          <dt className="tech-label tech-label--dim">{f.label}</dt>
          <dd className="font-[Fraunces] text-[22px] sm:text-[26px] leading-none mt-2 text-[rgb(var(--ivory))]">
            {f.value}
          </dd>
          {f.note && <p className="mt-2 text-[12px] text-[rgb(var(--ivory))/0.55]">{f.note}</p>}
        </div>
      ))}
    </dl>
  );
}

/* ---------- 3. Media split ---------- */
export function ServiceMediaSplit({
  eyebrow, code, title, lede, bullets, mediaVariant = 'engineering', mediaAlt = '',
  mediaImage, mediaImages, reverse = false, children,
}) {
  const collage = Array.isArray(mediaImages) ? mediaImages.filter(Boolean).slice(0, 3) : null;

  return (
    <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="lg:col-span-6 flex flex-col">
        <ServiceSectionHeader eyebrow={eyebrow} code={code} title={title} lede={lede} />
        {bullets && bullets.length > 0 && (
          <ul className="space-y-3 mt-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-[rgb(var(--ivory))/0.78] leading-relaxed">
                <CheckCircle size={18} weight="fill" className="text-[rgb(var(--concord-glow))] shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
      <div className="lg:col-span-6 flex">
        {collage && collage.length > 0 ? (
          <MediaCollage images={collage} alt={mediaAlt} />
        ) : mediaImage ? (
          <div className="relative overflow-hidden border border-[rgb(var(--ivory))/0.12] bg-[rgb(var(--ink))] w-full min-h-[360px] lg:min-h-0">
            <img
              src={mediaImage}
              alt={mediaAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(11,15,13,0.10) 0%, rgba(11,15,13,0.45) 100%)' }} />
          </div>
        ) : (
          <EditorialMedia variant={mediaVariant} alt={mediaAlt} aspect="4/3" className="w-full" />
        )}
      </div>
    </div>
  );
}

function MediaCollage({ images, alt }) {
  const n = images.length;
  const layout =
    n === 1
      ? 'grid-cols-1 grid-rows-1'
      : n === 2
      ? 'grid-cols-2 grid-rows-1'
      : 'grid-cols-3 grid-rows-6';

  return (
    <div
      className={`grid gap-2 w-full h-full self-stretch min-h-[420px] lg:min-h-[560px] ${layout}`}
      role="group"
      aria-label={alt}
    >
      {images.map((src, i) => {
        let cls = 'relative overflow-hidden border border-[rgb(var(--ivory))/0.12] bg-[rgb(var(--ink))]';
        if (n === 3) {
          if (i === 0) cls += ' col-span-2 row-span-6';
          else if (i === 1) cls += ' col-span-1 row-span-3';
          else cls += ' col-span-1 row-span-3';
        }
        return (
          <div key={i} className={cls}>
            <img
              src={src}
              alt={i === 0 ? alt : ''}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity"
            />
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(11,15,13,0.10) 0%, rgba(11,15,13,0.45) 100%)' }} />
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 4. Audience grid ---------- */
export function ServiceAudienceGrid({ items = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgb(var(--ivory))/0.10] border border-[rgb(var(--ivory))/0.10]">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div key={i} className="surface-ink p-6 flex flex-col">
            <p className="index-num mb-4 text-[rgb(var(--concord-glow))]">A/{String(i + 1).padStart(2, '0')}</p>
            {Icon && <Icon size={22} weight="light" className="text-[rgb(var(--concord-glow))] mb-4" />}
            <h3 className="font-[Fraunces] text-[20px] tracking-tight text-[rgb(var(--ivory))] mb-2">{it.title}</h3>
            <p className="text-[14px] text-[rgb(var(--ivory))/0.7] leading-relaxed">{it.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 5. Eligibility index ---------- */
export function ServiceEligibilityIndex({ rows = [] }) {
  return (
    <div className="border-t border-[rgb(var(--ivory))/0.12]">
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 py-5 border-b border-[rgb(var(--ivory))/0.10]"
        >
          <div className="sm:col-span-2 flex sm:block items-baseline gap-3">
            <span className="index-num text-[rgb(var(--concord-glow))]">E/{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="sm:col-span-4">
            <h3 className="font-[Fraunces] text-[18px] tracking-tight text-[rgb(var(--ivory))]">{r.title}</h3>
            {r.note && <p className="mt-1 text-[12px] text-[rgb(var(--ivory))/0.55]">{r.note}</p>}
          </div>
          <div className="sm:col-span-6">
            <p className="text-[14px] text-[rgb(var(--ivory))/0.72] leading-relaxed">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- 6. Process ---------- */
export function ServiceProcess({ steps = [] }) {
  return (
    <ol className="grid gap-px bg-[rgb(var(--ivory))/0.10] border border-[rgb(var(--ivory))/0.10] sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={i} className="surface-ink p-6 flex flex-col">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-[Fraunces] text-[28px] leading-none text-[rgb(var(--concord-glow))]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="tech-label tech-label--dim">STEP</span>
          </div>
          <h3 className="font-[Fraunces] text-[18px] tracking-tight text-[rgb(var(--ivory))] mb-2">{s.title}</h3>
          <p className="text-[14px] text-[rgb(var(--ivory))/0.72] leading-relaxed">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- 7. Document index ---------- */
export function ServiceDocumentIndex({ documents = [] }) {
  return (
    <div className="border-t border-[rgb(var(--ivory))/0.12]">
      {documents.map((d, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 py-4 border-b border-[rgb(var(--ivory))/0.10]"
        >
          <div className="sm:col-span-2">
            <span className="index-num text-[rgb(var(--concord-glow))]">D/{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="sm:col-span-4 font-[Fraunces] text-[16px] text-[rgb(var(--ivory))]">{d.title}</div>
          <div className="sm:col-span-6 text-[14px] text-[rgb(var(--ivory))/0.7]">{d.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- 8. Comparison ---------- */
export function ServiceComparison({ headers = [], rows = [] }) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden sm:block border border-[rgb(var(--ivory))/0.12] overflow-x-auto">
        <table className="w-full text-left text-[14px]">
          <thead>
            <tr className="border-b border-[rgb(var(--ivory))/0.12]">
              {headers.map((h, i) => (
                <th key={i} className="tech-label px-4 py-3 text-[rgb(var(--ivory))/0.7] font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[rgb(var(--ivory))/0.08]">
                {r.map((cell, j) => (
                  <td key={j} className={`px-4 py-4 align-top ${j === 0 ? 'font-[Fraunces] text-[16px] text-[rgb(var(--ivory))]' : 'text-[rgb(var(--ivory))/0.75]'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile stacked records */}
      <div className="sm:hidden border-t border-[rgb(var(--ivory))/0.12]">
        {rows.map((r, i) => (
          <div key={i} className="py-5 border-b border-[rgb(var(--ivory))/0.10]">
            <h4 className="font-[Fraunces] text-[18px] text-[rgb(var(--ivory))] mb-3">{r[0]}</h4>
            <dl className="space-y-2">
              {headers.slice(1).map((h, j) => (
                <div key={j} className="flex flex-col">
                  <dt className="tech-label tech-label--dim">{h}</dt>
                  <dd className="text-[14px] text-[rgb(var(--ivory))/0.78]">{r[j + 1]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- 9. Evidence / case studies ---------- */
export function ServiceEvidence({ items = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgb(var(--ivory))/0.10] border border-[rgb(var(--ivory))/0.10]">
      {items.map((it, i) => (
        <article key={i} className="surface-ink p-6 flex flex-col">
          <p className="index-num text-[rgb(var(--concord-glow))] mb-3">C/{String(i + 1).padStart(2, '0')}</p>
          <p className="font-[Fraunces] text-[32px] leading-none text-[rgb(var(--ivory))] mb-3">{it.amount}</p>
          <h3 className="font-[Fraunces] text-[18px] tracking-tight text-[rgb(var(--ivory))] mb-2">{it.title}</h3>
          <p className="text-[14px] text-[rgb(var(--ivory))/0.72] leading-relaxed">{it.desc}</p>
        </article>
      ))}
    </div>
  );
}

/* ---------- 10. Related services ---------- */
export function RelatedServices({ currentHref, eyebrow = 'Related Services', title = 'Continue Exploring' }) {
  const items = getRelatedServices(currentHref);
  return (
    <section className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
      <div className="arch">
        <ServiceSectionHeader eyebrow={eyebrow} code="R/01" title={title} />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgb(var(--ivory))/0.10] border border-[rgb(var(--ivory))/0.10]">
          {items.map((s, i) => (
            <li key={s.href} className="surface-ink">
              <Link
                to={s.href}
                className="group block p-6 h-full min-h-[44px] hover:bg-[rgb(var(--concord))/0.08] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="index-num text-[rgb(var(--concord-glow))]">S/{String(i + 1).padStart(2, '0')}</span>
                  <ArrowUpRight size={16} className="text-[rgb(var(--ivory))/0.5] group-hover:text-[rgb(var(--concord-glow))]" />
                </div>
                <h3 className="font-[Fraunces] text-[18px] tracking-tight text-[rgb(var(--ivory))] mb-2">{s.name}</h3>
                <p className="text-[13px] text-[rgb(var(--ivory))/0.68] leading-relaxed">{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 11. FAQ ---------- */
export function SharedServiceFAQ({ faqs = [], eyebrow = 'FAQ', title = 'Frequently Asked Questions', intro }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();
  return (
    <section id="faq" className="surface-ink band">
      <div className="arch">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <ServiceSectionHeader eyebrow={eyebrow} code="Q/01" title={title} lede={intro} />
          </div>
          <div className="lg:col-span-8 border-t border-[rgb(var(--ivory))/0.12]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q-${i}`;
              const panelId = `${baseId}-a-${i}`;
              return (
                <div key={i} className="border-b border-[rgb(var(--ivory))/0.12]">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left min-h-[44px]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="index-num shrink-0 text-[rgb(var(--concord-glow))]">Q/{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-[Fraunces] text-[18px] sm:text-[20px] lg:text-[22px] tracking-tight text-[rgb(var(--ivory))]">
                        {f.question}
                      </span>
                    </span>
                    <span aria-hidden="true" className={`tech-label text-[rgb(var(--concord-glow))] shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="pb-6 pl-0 sm:pl-14 pr-2"
                  >
                    <div className="text-[15px] sm:text-[16px] text-[rgb(var(--ivory))/0.75] leading-relaxed max-w-2xl">
                      {typeof f.answer === 'string' ? <p>{f.answer}</p> : f.answer}
                    </div>
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

/* ---------- 12. Final CTA ---------- */
export function ServiceFinalCTA({
  eyebrow = 'Get Started',
  headline = 'Ready to Move Forward?',
  description = 'Our team will assess eligibility, estimate your savings, and handle the filings.',
  primary = { label: 'Start the Conversation', href: '/contact' },
  secondary = { label: 'Book a Discovery Call', href: 'https://www.concordlp.com/meetings/jonathan-darnell' },
}) {
  return (
    <section className="surface-ink band relative overflow-hidden grain border-t border-[rgb(var(--ivory))/0.10]">
      <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="arch relative">
        <ScrollFadeIn>
          <div className="max-w-3xl">
            <p className="tech-label mb-4"><span className="index-num mr-2">X/01</span>{eyebrow}</p>
            <h2 className="h-display text-balance">{headline}</h2>
            <p className="mt-6 text-[16px] lg:text-[17px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to={primary.href} className="btn btn-primary min-h-[44px]">
                {primary.label} <ArrowRight size={14} weight="bold" />
              </Link>
              {secondary && (
                secondary.href?.startsWith('http') ? (
                  <a href={secondary.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline min-h-[44px]">
                    {secondary.label}
                  </a>
                ) : (
                  <Link to={secondary.href} className="btn btn-outline min-h-[44px]">
                    {secondary.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
