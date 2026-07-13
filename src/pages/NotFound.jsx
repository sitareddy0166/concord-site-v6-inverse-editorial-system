import { Link } from 'react-router-dom';
import { ArrowRight, House, Wrench, EnvelopeSimple } from '@phosphor-icons/react';
import { SEOHead } from '@/utils/seo';

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <section className="bg-concord-dark min-h-[100dvh] flex items-center">
        <div className="max-w-[820px] mx-auto px-6 py-[120px] lg:py-[160px] w-full">
          <p className="text-[12px] uppercase tracking-[0.18em] font-mono text-concord-green mb-6">
            Error / 404 / Route not found
          </p>
          <p className="font-heading font-black text-[96px] lg:text-[140px] leading-none tracking-[-0.04em] text-white mb-4">
            404
          </p>
          <h1 className="font-heading font-extrabold text-[32px] lg:text-[48px] tracking-[-0.03em] leading-[1.1] text-white mb-4">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-[17px] text-white/70 leading-[1.7] max-w-[560px] mb-10">
            The URL you followed may be outdated or mistyped. Use one of the paths below to get back on track.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[640px]">
            {[
              { to: '/', label: 'Home', icon: House },
              { to: '/179d-tax-deduction', label: 'Services', icon: Wrench },
              { to: '/contact', label: 'Contact', icon: EnvelopeSimple },
            ].map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-4 min-h-[52px] text-white hover:bg-white/[0.08] hover:border-concord-green transition-colors"
              >
                <span className="flex items-center gap-3 font-medium text-[15px]">
                  <Icon size={18} className="text-concord-green" />
                  {label}
                </span>
                <ArrowRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
