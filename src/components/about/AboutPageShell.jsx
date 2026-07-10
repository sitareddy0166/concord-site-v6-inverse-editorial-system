import { Link } from 'react-router-dom';
import { ArrowRight, CaretRight } from '@phosphor-icons/react';

/**
 * AboutPageShell — shared chrome for all /about routes.
 * Composition slots kept explicit so each page renders a distinct
 * body composition against a common dark editorial grammar.
 */
export function AboutBreadcrumb({ current }) {
  return (
    <div className="surface-ink border-b border-[rgb(var(--ivory))/0.08]">
      <div className="arch py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px]">
          <Link to="/" className="tech-label tech-label--dim hover:text-[rgb(var(--ivory))]">Home</Link>
          <CaretRight size={10} className="text-[rgb(var(--ivory))/0.35]" />
          <span className="tech-label tech-label--dim">About</span>
          <CaretRight size={10} className="text-[rgb(var(--ivory))/0.35]" />
          <span className="tech-label">{current}</span>
        </nav>
      </div>
    </div>
  );
}

export function AboutHero({ code, eyebrow, title, lede, meta, primaryCta, secondaryCta }) {
  return (
    <section className="surface-ink relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="arch relative pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="index-num">{code}</span>
              <span className="h-px w-10 bg-[rgb(var(--ivory))/0.25]" />
              <span className="tech-label">{eyebrow}</span>
            </div>
            <h1 className="h-display text-balance">{title}</h1>
            {lede && (
              <p className="mt-8 text-[17px] lg:text-[19px] leading-relaxed text-[rgb(var(--ivory))/0.75] max-w-2xl">
                {lede}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link to={primaryCta.href} className="btn btn-primary">
                    {primaryCta.label} <ArrowRight size={14} weight="bold" />
                  </Link>
                )}
                {secondaryCta && (
                  secondaryCta.href.startsWith('#') ? (
                    <a href={secondaryCta.href} className="btn btn-outline">{secondaryCta.label}</a>
                  ) : (
                    <Link to={secondaryCta.href} className="btn btn-outline">{secondaryCta.label}</Link>
                  )
                )}
              </div>
            )}
          </div>
          {meta && (
            <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[rgb(var(--ivory))/0.12] pt-8 lg:pt-0 lg:pl-8" aria-label="Key facts">
              <p className="tech-label mb-5">Key Facts</p>
              <ul className="divide-y divide-[rgb(var(--ivory))/0.10] key-facts">
                {meta.map((m) => (
                  <li key={m.label} className="py-4">
                    <p className="font-[Fraunces] text-[36px] leading-none text-[rgb(var(--ivory))]">{m.value}</p>
                    <p className="text-[13px] text-[rgb(var(--ivory))/0.75] mt-1">{m.label}</p>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

export function ChapterHeader({ chapter, title, lede, align = 'left' }) {
  return (
    <header className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {chapter && <p className="tech-label mb-4">{chapter}</p>}
      <h2 className="h-lead text-balance">{title}</h2>
      {lede && <p className="mt-5 text-[16px] lg:text-[18px] text-[rgb(var(--ivory))/0.75] leading-relaxed">{lede}</p>}
    </header>
  );
}

export function ChapterHeaderInk({ chapter, title, lede, align = 'left' }) {
  return (
    <header className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {chapter && <p className="tech-label mb-4" style={{ color: 'rgb(var(--concord))' }}>{chapter}</p>}
      <h2 className="h-lead text-balance" style={{ color: 'rgb(var(--ink))' }}>{title}</h2>
      {lede && <p className="mt-5 text-[16px] lg:text-[18px] leading-relaxed text-[rgb(var(--ink))/0.75]">{lede}</p>}
    </header>
  );
}

export function AboutCTA({ eyebrow = 'Correspond', title, body, primary, secondary }) {
  return (
    <section className="surface-ink border-t border-[rgb(var(--ivory))/0.12]">
      <div className="arch py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <p className="tech-label mb-4">{eyebrow}</p>
          <h2 className="h-lead text-balance">{title}</h2>
          {body && <p className="mt-5 text-[16px] text-[rgb(var(--ivory))/0.75] max-w-xl">{body}</p>}
        </div>
        <div className="lg:col-span-4 flex flex-wrap gap-3 justify-start lg:justify-end">
          {primary && (
            <Link to={primary.href} className="btn btn-primary">
              {primary.label} <ArrowRight size={14} weight="bold" />
            </Link>
          )}
          {secondary && (
            <Link to={secondary.href} className="btn btn-outline">{secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function AboutPageShell({ children }) {
  return <div className="about-shell v6">{children}</div>;
}
