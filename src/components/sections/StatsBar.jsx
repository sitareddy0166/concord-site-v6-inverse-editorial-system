import { ScrollFadeIn } from '@/hooks/useScrollAnimation';

export default function StatsBar({ stats }) {
  return (
    <section className="bg-concord-dark py-[60px] lg:py-[80px] relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollFadeIn>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center md:flex-1">
                <div className="text-center w-full">
                  <p className="text-[40px] lg:text-[56px] font-heading font-black text-white leading-none">{stat.value}</p>
                  <p className="text-[14px] text-white/60 mt-2">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-white/15 shrink-0"></div>
                )}
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
