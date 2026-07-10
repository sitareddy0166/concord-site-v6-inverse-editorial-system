import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

export default function InlineCTA({
  headline = "Let's Identify Your Incentives",
  buttonText = "Start the Conversation",
  buttonHref = "/contact",
}) {
  return (
    <section className="py-[60px] bg-concord-mint">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <ScrollFadeIn>
          <h3 className="font-heading font-bold text-[28px] lg:text-[36px] text-concord-dark mb-6">{headline}</h3>
          <Link
            to={buttonHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
          >
            {buttonText} <ArrowRight size={16} />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
