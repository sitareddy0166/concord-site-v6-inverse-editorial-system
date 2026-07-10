import { useEffect, useRef, useState } from 'react';

/**
 * Architectural cutaway of a mid-rise commercial building
 * rendered as a highly polished SVG "blueprint". Systems
 * highlight on hover / click. Subtle pointer parallax on the
 * roof plant and solar array. Respects prefers-reduced-motion.
 *
 * This is the required high-quality static SVG fallback and
 * primary illustration for the hero. It is server-prerenderable,
 * a11y-labeled, and works with no JS.
 */
const SYSTEMS = [
  { id: 'envelope', label: 'Envelope',        detail: 'High-performance glazing, insulation, thermal breaks' },
  { id: 'hvac',     label: 'HVAC',            detail: 'Roof plant, chilled beams, VAV distribution' },
  { id: 'lighting', label: 'Lighting',        detail: 'LED zones, daylight sensors, controls' },
  { id: 'solar',    label: 'Clean Energy',    detail: 'PV array, storage, submeters' },
  { id: 'docs',     label: 'Documentation',   detail: 'Modeling, certification, allocation letters' },
  { id: 'capture',  label: 'Incentive Capture', detail: '179D deduction and transferable credits' },
];

export default function BuildingBlueprint() {
  const [active, setActive] = useState('hvac');
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt({ x: nx * 6, y: ny * 4 }));
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => { el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); cancelAnimationFrame(raf); };
  }, []);

  const on = (id) => active === id;

  return (
    <div ref={wrapRef} className="relative w-full h-full">
      {/* Legend / system selector (HTML, outside the canvas) */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 max-w-[220px]">
        <p className="tech-label mb-1">Systems / F-01</p>
        <div role="tablist" aria-label="Building systems" className="flex flex-col">
          {SYSTEMS.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={on(s.id)}
              onClick={() => setActive(s.id)}
              className={`text-left group border-l-2 pl-3 pr-2 py-1.5 transition-colors ${on(s.id) ? 'border-[rgb(var(--concord-glow))] text-[rgb(var(--ivory))]' : 'border-transparent text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]'}`}
            >
              <span className="index-num mr-2">L/{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[12px] font-medium tracking-wide uppercase">{s.label}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-snug text-[rgb(var(--ivory))/0.55] max-w-[200px]">
          {SYSTEMS.find((s) => s.id === active)?.detail}
        </p>
      </div>

      {/* Coordinate marks */}
      <span className="coord absolute top-2 right-2 text-[rgb(var(--ivory))/0.4]" aria-hidden="true" />
      <span className="coord absolute bottom-2 left-2 text-[rgb(var(--ivory))/0.4]" aria-hidden="true" />
      <span className="coord absolute bottom-2 right-2 text-[rgb(var(--ivory))/0.4]" aria-hidden="true" />

      <svg
        viewBox="0 0 800 600"
        role="img"
        aria-label="Architectural cutaway of a mid-rise commercial building showing envelope, HVAC, lighting, clean energy, documentation, and incentive capture systems"
        className="w-full h-full"
        style={{ transform: `translate3d(${tilt.x * 0.4}px, ${tilt.y * 0.3}px, 0)` }}
      >
        <defs>
          <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#3da35d" stopOpacity="0.25" />
            <stop offset="1" stopColor="#0f2418" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="brass" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#d1a670" />
            <stop offset="1" stopColor="#8a6a3f" />
          </linearGradient>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(239,236,229,0.15)" strokeWidth="1" />
          </pattern>
          <filter id="soft">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* Sky field with faint horizon and stars */}
        <rect x="0" y="0" width="800" height="600" fill="rgb(12,16,14)" />
        <line x1="0" y1="470" x2="800" y2="470" stroke="rgba(239,236,229,0.08)" strokeWidth="1" />

        {/* Section datum */}
        <g stroke="rgba(239,236,229,0.2)" strokeWidth="0.75" fill="none">
          <line x1="60" y1="90" x2="60" y2="540" strokeDasharray="2 4" />
          <line x1="740" y1="90" x2="740" y2="540" strokeDasharray="2 4" />
          <text x="52" y="86" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.4)">A</text>
          <text x="738" y="86" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.4)">B</text>
        </g>

        {/* Ground datum */}
        <line x1="0" y1="510" x2="800" y2="510" stroke="rgba(239,236,229,0.3)" strokeWidth="1.2" />
        <g>
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={i} x1={i * 34} y1="510" x2={i * 34 + 8} y2="520" stroke="rgba(239,236,229,0.25)" strokeWidth="0.75" />
          ))}
        </g>

        {/* Solar array on ground / adjacent */}
        <g opacity={on('solar') ? 1 : 0.4} style={{ transform: `translate3d(${tilt.x * 0.6}px, 0, 0)`, transformOrigin: 'center' }}>
          {[0,1,2].map((i) => (
            <g key={i} transform={`translate(${600 + i * 44}, 470) rotate(-14)`}>
              <rect x="0" y="0" width="42" height="30" fill="#0f2418" stroke={on('solar') ? '#40b868' : 'rgba(239,236,229,0.35)'} strokeWidth="1" />
              <line x1="14" y1="0" x2="14" y2="30" stroke="rgba(239,236,229,0.15)" />
              <line x1="28" y1="0" x2="28" y2="30" stroke="rgba(239,236,229,0.15)" />
              <line x1="0" y1="15" x2="42" y2="15" stroke="rgba(239,236,229,0.15)" />
              <line x1="21" y1="30" x2="21" y2="42" stroke={on('solar') ? '#40b868' : 'rgba(239,236,229,0.35)'} strokeWidth="1" />
            </g>
          ))}
        </g>

        {/* Building envelope (7 stories) */}
        <g>
          {/* Main mass */}
          <rect x="180" y="150" width="380" height="360" fill="#0e1412" stroke={on('envelope') ? '#40b868' : 'rgba(239,236,229,0.55)'} strokeWidth={on('envelope') ? 1.6 : 1} />

          {/* Glass curtain on right half */}
          <rect x="380" y="150" width="180" height="360" fill="url(#glass)" opacity={on('envelope') || on('hvac') ? 0.8 : 0.5} />

          {/* Floors */}
          {Array.from({ length: 7 }).map((_, i) => {
            const y = 150 + (i + 1) * 51.4;
            return (
              <g key={i}>
                <line x1="180" y1={y} x2="560" y2={y} stroke="rgba(239,236,229,0.35)" strokeWidth="0.75" />
                <text x="168" y={y - 2} fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="end" fill="rgba(239,236,229,0.5)">
                  L{7 - i}
                </text>
                {/* Lighting zones per floor */}
                <g opacity={on('lighting') ? 1 : 0.35}>
                  {[0,1,2,3,4].map((k) => (
                    <circle key={k} cx={210 + k * 40} cy={y - 26} r="2" fill={on('lighting') ? '#40b868' : 'rgba(239,236,229,0.5)'} />
                  ))}
                </g>
                {/* HVAC ducts per floor (right side) */}
                <g opacity={on('hvac') ? 1 : 0.25}>
                  <rect x="400" y={y - 12} width="150" height="6" fill="url(#hatch)" stroke={on('hvac') ? '#40b868' : 'rgba(239,236,229,0.3)'} strokeWidth="0.75" />
                </g>
              </g>
            );
          })}

          {/* Structural columns */}
          {[220, 300, 380, 460, 540].map((x) => (
            <line key={x} x1={x} y1="150" x2={x} y2="510" stroke="rgba(239,236,229,0.12)" strokeWidth="0.75" strokeDasharray="1 3" />
          ))}
        </g>

        {/* Roof plant / HVAC unit */}
        <g style={{ transform: `translate3d(${tilt.x * 0.9}px, ${tilt.y * 0.5}px, 0)`, transformOrigin: 'center' }} opacity={on('hvac') ? 1 : 0.6}>
          <rect x="240" y="118" width="80" height="32" fill="#12161a" stroke={on('hvac') ? '#40b868' : 'rgba(239,236,229,0.55)'} strokeWidth="1" />
          <line x1="252" y1="118" x2="252" y2="150" stroke="rgba(239,236,229,0.35)" />
          <line x1="266" y1="118" x2="266" y2="150" stroke="rgba(239,236,229,0.35)" />
          <line x1="280" y1="118" x2="280" y2="150" stroke="rgba(239,236,229,0.35)" />
          <line x1="294" y1="118" x2="294" y2="150" stroke="rgba(239,236,229,0.35)" />
          <line x1="308" y1="118" x2="308" y2="150" stroke="rgba(239,236,229,0.35)" />
          <text x="322" y="134" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.55)">HP-01</text>

          <rect x="400" y="130" width="60" height="20" fill="#12161a" stroke={on('hvac') ? '#40b868' : 'rgba(239,236,229,0.55)'} strokeWidth="1" />
          <text x="464" y="144" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.55)">AHU-02</text>
        </g>

        {/* Roof PV strip */}
        <g opacity={on('solar') ? 1 : 0.35}>
          <rect x="480" y="140" width="76" height="10" fill="#0f2418" stroke={on('solar') ? '#40b868' : 'rgba(239,236,229,0.35)'} strokeWidth="0.75" />
          {[0,1,2,3,4,5].map((i) => (
            <line key={i} x1={480 + i * 12.6} y1="140" x2={480 + i * 12.6} y2="150" stroke="rgba(239,236,229,0.2)" />
          ))}
        </g>

        {/* Documentation flow (bottom-left) */}
        <g opacity={on('docs') ? 1 : 0.35}>
          <rect x="60" y="540" width="120" height="40" fill="#12161a" stroke={on('docs') ? '#40b868' : 'rgba(239,236,229,0.4)'} strokeWidth="1" />
          <text x="70" y="558" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.75)">D/01 Energy Model</text>
          <text x="70" y="572" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.55)">D/02 Certification</text>

          <path d={`M 120 540 C 160 480, 200 460, 240 470`} fill="none" stroke={on('docs') ? '#40b868' : 'rgba(239,236,229,0.35)'} strokeWidth="1" strokeDasharray="2 3" />
        </g>

        {/* Incentive capture (bottom-right) */}
        <g opacity={on('capture') ? 1 : 0.4}>
          <rect x="620" y="540" width="120" height="40" fill="#12161a" stroke={on('capture') ? '#40b868' : 'rgba(239,236,229,0.4)'} strokeWidth="1" />
          <text x="630" y="558" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.75)">$ 179D Capture</text>
          <text x="630" y="572" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.55)">§ 6417 / 6418</text>
          <path d={`M 560 500 C 600 520, 620 540, 660 540`} fill="none" stroke={on('capture') ? '#40b868' : 'rgba(239,236,229,0.35)'} strokeWidth="1" strokeDasharray="2 3" />
        </g>

        {/* Dimension line */}
        <g stroke="rgba(239,236,229,0.4)" strokeWidth="0.75" fill="rgba(239,236,229,0.55)">
          <line x1="60" y1="120" x2="180" y2="120" />
          <line x1="60" y1="115" x2="60" y2="125" />
          <line x1="180" y1="115" x2="180" y2="125" />
          <text x="120" y="112" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle">SETBACK</text>

          <line x1="580" y1="150" x2="580" y2="510" />
          <line x1="575" y1="150" x2="585" y2="150" />
          <line x1="575" y1="510" x2="585" y2="510" />
          <text x="588" y="335" fontFamily="JetBrains Mono, monospace" fontSize="9">96&#39;</text>
        </g>

        {/* Highlight callout on active */}
        <g>
          {active === 'envelope' && <rect x="176" y="146" width="388" height="368" fill="none" stroke="#40b868" strokeWidth="1.2" strokeDasharray="4 4" className="draw-line" style={{'--dash':1520}} />}
          {active === 'hvac' && <rect x="236" y="114" width="228" height="42" fill="none" stroke="#40b868" strokeWidth="1.2" strokeDasharray="4 4" className="draw-line" style={{'--dash':560}} />}
          {active === 'lighting' && <rect x="196" y="180" width="220" height="330" fill="none" stroke="#40b868" strokeWidth="1.2" strokeDasharray="4 4" className="draw-line" style={{'--dash':1100}} />}
          {active === 'solar' && <rect x="476" y="136" width="84" height="18" fill="none" stroke="#40b868" strokeWidth="1.2" strokeDasharray="4 4" className="draw-line" style={{'--dash':200}} />}
          {active === 'docs' && <rect x="56" y="536" width="128" height="48" fill="none" stroke="#40b868" strokeWidth="1.2" strokeDasharray="4 4" className="draw-line" style={{'--dash':350}} />}
          {active === 'capture' && <rect x="616" y="536" width="128" height="48" fill="none" stroke="#40b868" strokeWidth="1.2" strokeDasharray="4 4" className="draw-line" style={{'--dash':350}} />}
        </g>

        <text x="60" y="588" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(239,236,229,0.4)">
          FIG. 01 — MID-RISE COMMERCIAL / SECTIONAL / SYSTEMS OVERLAY
        </text>
      </svg>
    </div>
  );
}
