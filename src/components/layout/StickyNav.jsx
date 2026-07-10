import { useEffect, useRef, useState } from 'react';

export default function StickyNav({ items }) {
  const [active, setActive] = useState(items[0]?.href.replace('#', '') || '');
  const linkRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    const ids = items.map((i) => i.href.replace('#', ''));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    // Offset accounts for fixed 64px header + ~48px sticky subnav
    const OFFSET = 140;

    const compute = () => {
      const y = window.scrollY + OFFSET;
      let current = els[0].id;
      for (const el of els) {
        if (el.offsetTop <= y) current = el.id;
        else break;
      }
      setActive(current);
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [items]);

  useEffect(() => {
    const el = linkRefs.current[active];
    if (el && containerRef.current) {
      const c = containerRef.current;
      const elLeft = el.offsetLeft;
      const target = elLeft - c.clientWidth / 2 + el.clientWidth / 2;
      c.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }, [active]);

  return (
    <nav aria-label="On this page" className="subnav">
      <div className="arch">
        <div ref={containerRef} className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          <span className="tech-label tech-label--brass shrink-0 py-3.5">On This Page</span>
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
