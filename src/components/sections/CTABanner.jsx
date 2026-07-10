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
    <section className={`py-[80px] lg:py-[100px] relative ${isDark ? 'bg-concord-dark bg-grain' : 'bg-white'}`}>
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <h2 className={`font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-concord-dark'}`}>
          {headline}
        </h2>
        <p className={`text-[18px] leading-relaxed max-w-[600px] mx-auto mb-10 ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
          {description}
        </p>
        <Link
          to={buttonHref}
          className={`inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 ${
            isDark ? 'bg-white text-concord-dark' : 'bg-[#151C19] text-white'
          }`}
        >
          {buttonText} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
