export default function Affiliations() {
  const logos = [
    { src: '/assets/affiliations/acec-logo.png', alt: 'American Council of Engineering Companies logo' },
    { src: '/assets/affiliations/acp-logo.png', alt: 'American Clean Power association logo' },
    { src: '/assets/affiliations/cebn-logo.png', alt: 'Clean Energy Business Network logo' },
    { src: '/assets/affiliations/seia-logo.png', alt: 'Solar Energy Industries Association logo' },
    { src: '/assets/affiliations/naesco-logo.png', alt: 'National Association of Energy Service Companies logo' },
  ];

  return (
    <section className="py-[48px] lg:py-[60px] bg-concord-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[14px] text-slate-400 font-medium mb-8">Our Affiliations</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width="180"
              height="60"
              className="h-[60px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
