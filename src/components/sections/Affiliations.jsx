export default function Affiliations() {
  const logos = [
    { src: '/assets/affiliations/acec-logo.png',   alt: 'American Council of Engineering Companies logo' },
    { src: '/assets/affiliations/acp-logo.png',    alt: 'American Clean Power association logo' },
    { src: '/assets/affiliations/cebn-logo.png',   alt: 'Clean Energy Business Network logo' },
    { src: '/assets/affiliations/seia-logo.png',   alt: 'Solar Energy Industries Association logo' },
    { src: '/assets/affiliations/naesco-logo.png', alt: 'National Association of Energy Service Companies logo' },
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
              width="180" height="60" loading="lazy"
              className="h-12 w-auto object-contain mx-auto brightness-200 contrast-50 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
