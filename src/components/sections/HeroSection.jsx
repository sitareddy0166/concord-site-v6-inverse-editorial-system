import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children,
  bgStyle,
}) {
  return (
    <section className="bg-white relative overflow-hidden" style={bgStyle}>
      <div className="max-w-[1200px] mx-auto px-6 py-[32px] lg:py-[48px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-[55%]">
            {eyebrow && (
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-5">{eyebrow}</p>
            )}
            <h1 className="font-heading font-extrabold text-[40px] lg:text-[64px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
              <p className="text-[22px] lg:text-[28px] text-slate-500 font-heading font-medium mb-6">{subtitle}</p>
            )}
            {description && (
              <p className="text-[16px] text-slate-500 leading-relaxed max-w-[520px] mb-8">{description}</p>
            )}
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  {primaryCta.label} <ArrowRight size={16} />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-concord-dark/20 text-concord-dark px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {children && (
            <div className="hidden lg:flex flex-col gap-4 w-full max-w-[360px] lg:w-[45%]">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
