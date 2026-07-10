export default function StatsBar({ stats }) {
  return (
    <section className="surface-forest border-y border-[rgb(var(--ivory))/0.08] py-12" aria-label="Practice metrics">
      <div className="arch grid grid-cols-1 md:grid-cols-3 gap-y-8">
        {stats.map((s, i) => (
          <div key={i} className={`px-6 ${i > 0 ? 'md:border-l border-[rgb(var(--ivory))/0.12]' : ''}`}>
            <p className="tech-label mb-3">Metric &nbsp;/&nbsp; 0{i + 1}</p>
            <p className="font-[Fraunces] text-[48px] lg:text-[64px] leading-none">{s.value}</p>
            <p className="mt-2 text-[13px] text-[rgb(var(--ivory))/0.65]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
