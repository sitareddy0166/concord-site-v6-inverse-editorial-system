import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

export default function VideoExplainer({
  label = 'Video Explainer',
  headline = 'See How It Works',
  videoUrl = 'https://www.youtube.com/watch?v=ZO0kLWOtQdc',
  ctaText = 'Book a Call',
  ctaHref = '/contact-us',
  ctaSubtext = "Have questions after watching? Let's talk.",
}) {
  // Extract YouTube video ID
  const videoId = videoUrl.match(/(?:v=|\/embed\/|youtu\.be\/)([^&?#]+)/)?.[1] || 'ZO0kLWOtQdc';

  return (
    <section className="bg-concord-cream py-[80px] lg:py-[100px]">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollFadeIn className="text-center mb-10">
          <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-4">{label}</p>
          <h2 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-[-0.03em] leading-[1.1] text-concord-dark">{headline}</h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-black/[0.06]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={headline}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-3xl p-6 border border-black/[0.06]">
            <p className="text-[15px] text-slate-600">{ctaSubtext}</p>
            <Link
              to={ctaHref}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-3.5 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
            >
              {ctaText} <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
