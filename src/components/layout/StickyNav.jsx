import { useEffect, useRef, useState } from 'react';

export default function StickyNav({ items }) {
  const [active, setActive] = useState(items[0]?.href.replace('#', '') || '');
  const [edges, setEdges] = useState({ left: false, right: false });
  const linkRefs = useRef({});
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  // IntersectionObserver — track the section that dominates the viewport
  useEffect(() => {
    const ids = items.map((i) => i.href.replace('#', ''));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    // ratio table for each id, pick the highest
    const ratios = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.set(e.target.id, e.intersectionRatio);
        let bestId = active;
        let bestRatio = 0;
        for (const [id, r] of ratios) {
          if (r > bestRatio) { bestRatio = r; bestId = id; }
        }
        // keep previous if nothing intersects — never blank
        if (bestRatio > 0) setActive(bestId);
      },
      {
        // account for fixed 64px header + 48px sticky subnav
        rootMargin: '-128px 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.6, 0.85, 1],
      }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll active into view horizontally
  useEffect(() => {
    const el = linkRefs.current[active];
    const c = scrollRef.current;
    if (el && c) {
      const target = el.offsetLeft - c.clientWidth / 2 + el.clientWidth / 2;
      c.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }, [active]);

  // Edge fade indicators
  useEffect(() => {
    const c = scrollRef.current;
    if (!c) return;
    const update = () => {
      setEdges({
        left: c.scrollLeft > 4,
        right: c.scrollLeft + c.clientWidth < c.scrollWidth - 4,
      });
    };
    update();
    c.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { c.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [items]);

  return (
    <nav aria-label="On this page" className="subnav">
      <div className="arch relative">
        {edges.left && (
          <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10"
                style={{ background: 'linear-gradient(to right, rgb(var(--ink)), transparent)' }} />
        )}
        {edges.right && (
          <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10"
                style={{ background: 'linear-gradient(to left, rgb(var(--ink)), transparent)' }} />
        )}
        <div
          ref={(el) => { containerRef.current = el; scrollRef.current = el; }}
          data-subnav-scroll
          className="flex items-center gap-8 overflow-x-auto scrollbar-hide subnav-fade"
        >
          <span data-subnav-label className="tech-label tech-label--brass shrink-0 py-3.5">On This Page</span>
          {items.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                ref={(el) => (linkRefs.current[id] = el)}
                aria-current={isActive ? 'location' : undefined}
                className={`shrink-0 subnav-link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
