/**
 * Standalone Industry Affiliations band. The homepage renders its own
 * inline marquee for tighter layout control; this component keeps the
 * same visual grammar for any page that needs a static grid of seals.
 */
export default function Affiliations() {
  const logos = [
    { src: '/assets/affiliations/acec-logo.png',   alt: 'American Council of Engineering Companies logo',   height: 44 },
    { src: '/assets/affiliations/acp-logo.png',    alt: 'American Clean Power association logo',            height: 40 },
    { src: '/assets/affiliations/cebn-logo.png',   alt: 'Clean Energy Business Network logo',               height: 44 },
    { src: '/assets/affiliations/seia-logo.png',   alt: 'Solar Energy Industries Association logo',         height: 40 },
    { src: '/assets/affiliations/naesco-logo.png', alt: 'National Association of Energy Service Companies logo', height: 44 },
  ];
  return (
    <section className="surface-graphite border-y border-[rgb(var(--ivory))/0.08] py-10" aria-label="Industry affiliations">
      <div className="arch">
        <div className="flex items-baseline justify-between mb-6">
          <p className="tech-label">Industry Affiliations</p>
          <p className="tech-label tech-label--dim">Verified · 05</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-8">
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width="200"
              height="72"
              loading="lazy"
              className="affiliation-logo mx-auto"
              style={{ height: `${logo.height}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
