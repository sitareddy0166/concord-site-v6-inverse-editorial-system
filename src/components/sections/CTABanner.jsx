import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export default function CTABanner({
  headline = "Ready to Maximize Your Tax Incentives?",
  description = "Let's identify every incentive your organization qualifies for.",
  buttonText = "Start the Conversation",
  buttonHref = "/contact",
  variant = "dark",
}) {
  const isDark = variant === 'dark';
  return (
    <section className={`${isDark ? 'surface-ink' : 'surface-ivory'} band relative overflow-hidden grain`}>
      {isDark && <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-40" />}
      <div className="arch relative text-center">
        <h2 className={`h-display text-balance max-w-3xl mx-auto ${isDark ? '' : 'text-[rgb(var(--ink))]'}`}>{headline}</h2>
        <p className={`mt-6 text-[17px] leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-[rgb(var(--ivory))/0.7]' : 'text-[rgb(var(--ink))/0.7]'}`}>
          {description}
        </p>
        <div className="mt-10">
          <Link to={buttonHref} className={`btn ${isDark ? 'btn-primary' : 'btn-dark'}`}>
            {buttonText} <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
