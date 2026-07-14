import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookingModal } from '@/components/ui/BookingModal';
import { ArrowRight, CaretRight } from '@phosphor-icons/react';

/**
 * Dark editorial hero used across all five service pages.
 * Composition: coordinate rails, blueprint grid, oversized
 * display headline, technical eyebrow, disciplined lede,
 * paired stat rail, dual CTA. Preserves original wording.
 */
export default function ServiceHero({
  code,          // 'S/01' etc.
  eyebrow,       // 'Section 179D'
  title,         // '179D Tax Deduction'
  lede,          // long paragraph, can include <Link>
  stats = [],    // [{value, label, note?}]
  breadcrumb,    // 'Services / 179D Tax Deduction'
  primaryCta = { label: 'Start the Conversation', href: '/contact' },
  secondaryCta = { label: 'Book a Discovery Call' },
  lastUpdated,
}) {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <header className="surface-ink relative overflow-hidden grain">
      {/* Blueprint grid backdrop */}
      <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(61,163,93,0.14), transparent 55%)' }} />

      {/* Breadcrumb bar */}
      <div className="arch pt-8 relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] tech-label tech-label--dim">
          <Link to="/" className="hover:text-[rgb(var(--ivory))]">Home</Link>
          <CaretRight size={9} weight="bold" />
          <Link to="/#services" className="hover:text-[rgb(var(--ivory))]">Services</Link>
          <CaretRight size={9} weight="bold" />
          <span className="text-[rgb(var(--ivory))/0.85]">{title}</span>
        </nav>
      </div>

      <div className="arch pt-10 pb-20 lg:pt-16 lg:pb-28 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="index-num">{code}</span>
              <span className="h-px w-16 bg-[rgb(var(--ivory))/0.25]" />
              <span className="tech-label">{eyebrow}</span>
            </div>
            <h1 className="h-display text-balance mb-8">
              {title}
            </h1>
            <div className="max-w-2xl">
              <div className="hero-description service-definition text-[17px] lg:text-[19px] text-[rgb(var(--ivory))/0.75] leading-relaxed">
                {lede}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to={primaryCta.href} className="btn btn-primary">
                {primaryCta.label} <ArrowRight size={14} weight="bold" />
              </Link>
              {secondaryCta.href ? (
                <Link to={secondaryCta.href} className="btn btn-outline">{secondaryCta.label}</Link>
              ) : (
                <button type="button" onClick={() => setBookingOpen(true)} className="btn btn-outline">
                  {secondaryCta.label}
                </button>
              )}
            </div>
            {lastUpdated && (
              <p className="mt-8 tech-label tech-label--dim">Last reviewed &nbsp;/&nbsp; {lastUpdated}</p>
            )}
          </div>

          {/* Stat rail */}
          {stats.length > 0 && (
            <aside className="lg:col-span-4 border-l border-[rgb(var(--ivory))/0.12] lg:pl-8" aria-label="Key facts">
              <p className="tech-label mb-5">Key Facts</p>
              <ul className="divide-y divide-[rgb(var(--ivory))/0.10] key-facts">
                {stats.map((s) => (
                  <li key={s.label} className="py-4">
                    <p className="font-[Fraunces] text-[36px] leading-none text-[rgb(var(--ivory))]">{s.value}</p>
                    <p className="text-[13px] text-[rgb(var(--ivory))/0.75] mt-1">{s.label}</p>
                    {s.note && <p className="text-[11px] text-[rgb(var(--ivory))/0.45] mt-1">{s.note}</p>}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        {/* Coordinate marks */}
        <span aria-hidden="true" className="coord absolute bottom-4 left-6 text-[rgb(var(--ivory))/0.45]" />
        <span aria-hidden="true" className="coord absolute bottom-4 right-6 text-[rgb(var(--ivory))/0.45]" />
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </header>
  );
}
