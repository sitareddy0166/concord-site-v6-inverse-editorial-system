/**
 * BlueprintFigure — reusable inline SVG technical illustrations used
 * across About and Service pages as replacements for stock photography.
 * Every variant is a purpose-built line drawing on ink, no external
 * assets, no unsplash hotlinks. Decorative-by-default; pass `label`
 * to promote to an accessible figure.
 */

function Frame({ label, children, aspect = '4/3' }) {
  const props = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true };
  return (
    <div
      {...props}
      className="relative w-full bg-[rgb(var(--graphite))] border border-[rgb(var(--ivory))/0.10] overflow-hidden"
      style={{ aspectRatio: aspect }}
    >
      <div aria-hidden="true" className="absolute inset-0 blueprint-grid-fine opacity-70" />
      {children}
      <span aria-hidden="true" className="absolute top-3 left-3 tech-label tech-label--dim">FIG · CES</span>
      <span aria-hidden="true" className="absolute bottom-3 right-3 tech-label tech-label--dim">01 / 01</span>
    </div>
  );
}

export function BuildingElevation({ label }) {
  return (
    <Frame label={label}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <g fill="none" stroke="rgb(64,184,104)" strokeWidth="1">
          {/* ground line */}
          <line x1="20" y1="260" x2="380" y2="260" strokeWidth="1.5" />
          {/* main mass */}
          <rect x="80" y="70" width="240" height="190" />
          {/* floor plates */}
          {[110, 150, 190, 230].map((y) => (
            <line key={y} x1="80" y1={y} x2="320" y2={y} strokeDasharray="2 3" opacity="0.6" />
          ))}
          {/* windows */}
          {[90, 130, 170, 210, 250, 290].map((x) =>
            [80, 120, 160, 200, 240].map((y) => (
              <rect key={`${x}-${y}`} x={x} y={y} width="18" height="24" opacity="0.55" />
            ))
          )}
          {/* roof plant */}
          <rect x="140" y="50" width="60" height="20" />
          <rect x="220" y="55" width="40" height="15" />
          {/* PV array */}
          <g stroke="rgb(184,144,91)">
            <line x1="150" y1="52" x2="195" y2="52" />
            <line x1="150" y1="56" x2="195" y2="56" />
            <line x1="150" y1="60" x2="195" y2="60" />
          </g>
          {/* dimension */}
          <g stroke="rgb(239,236,229)" opacity="0.35">
            <line x1="80" y1="278" x2="320" y2="278" />
            <line x1="80" y1="274" x2="80" y2="282" />
            <line x1="320" y1="274" x2="320" y2="282" />
          </g>
        </g>
        <text x="200" y="292" textAnchor="middle" fill="rgb(239,236,229)" opacity="0.55" fontFamily="JetBrains Mono, monospace" fontSize="9">240′ FRONTAGE</text>
      </svg>
    </Frame>
  );
}

export function MechanicalSchematic({ label }) {
  return (
    <Frame label={label} aspect="4/3">
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <g fill="none" stroke="rgb(64,184,104)" strokeWidth="1.2">
          {/* AHU box */}
          <rect x="40" y="60" width="120" height="60" />
          <text x="100" y="95" textAnchor="middle" fill="rgb(239,236,229)" fontFamily="JetBrains Mono, monospace" fontSize="10">AHU-01</text>
          {/* Chiller */}
          <circle cx="320" cy="90" r="35" />
          <text x="320" y="94" textAnchor="middle" fill="rgb(239,236,229)" fontFamily="JetBrains Mono, monospace" fontSize="10">CH-1</text>
          {/* piping */}
          <path d="M160 80 L 260 80 L 280 90" />
          <path d="M160 100 L 260 100 L 280 90" strokeDasharray="3 3" />
          {/* diffusers */}
          {[80, 130, 180, 230, 280].map((x) => (
            <g key={x}>
              <line x1={x} y1="160" x2={x} y2="200" />
              <polygon points={`${x - 8},200 ${x + 8},200 ${x},215`} />
            </g>
          ))}
          <line x1="60" y1="160" x2="300" y2="160" strokeWidth="1.5" />
          <line x1="100" y1="120" x2="100" y2="160" />
        </g>
        <g fill="rgb(184,144,91)" fontFamily="JetBrains Mono, monospace" fontSize="9">
          <text x="60" y="245">SUPPLY · 55°F</text>
          <text x="220" y="245">RETURN · 72°F</text>
        </g>
      </svg>
    </Frame>
  );
}

export function EnergyFlow({ label }) {
  return (
    <Frame label={label}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <g fill="none" stroke="rgb(64,184,104)" strokeWidth="1.2">
          <rect x="30" y="120" width="90" height="60" />
          <rect x="160" y="60" width="80" height="60" />
          <rect x="160" y="180" width="80" height="60" />
          <rect x="280" y="120" width="90" height="60" />
          <path d="M120 150 L160 90" />
          <path d="M120 150 L160 210" />
          <path d="M240 90 L280 150" />
          <path d="M240 210 L280 150" />
        </g>
        <g fill="rgb(239,236,229)" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="middle">
          <text x="75" y="155">SOURCE</text>
          <text x="200" y="95">HVAC</text>
          <text x="200" y="215">ENV</text>
          <text x="325" y="155">SAVINGS</text>
        </g>
        <g fill="rgb(184,144,91)" fontFamily="JetBrains Mono, monospace" fontSize="9">
          <text x="130" y="120">1.0</text>
          <text x="130" y="200">0.4</text>
          <text x="250" y="120">0.7</text>
          <text x="250" y="200">0.3</text>
        </g>
      </svg>
    </Frame>
  );
}

export function DocumentStack({ label }) {
  return (
    <Frame label={label} aspect="4/3">
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <g fill="none" stroke="rgb(64,184,104)" strokeWidth="1.2">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={90 + i * 8} y={60 + i * 8} width="180" height="220" opacity={1 - i * 0.15} />
          ))}
          <line x1="110" y1="100" x2="240" y2="100" opacity="0.7" />
          <line x1="110" y1="120" x2="240" y2="120" opacity="0.4" />
          <line x1="110" y1="140" x2="220" y2="140" opacity="0.4" />
          <line x1="110" y1="180" x2="240" y2="180" opacity="0.4" />
          <line x1="110" y1="200" x2="200" y2="200" opacity="0.4" />
          <line x1="110" y1="220" x2="240" y2="220" opacity="0.4" />
          <circle cx="220" cy="255" r="18" stroke="rgb(184,144,91)" />
          <text x="220" y="259" textAnchor="middle" fill="rgb(184,144,91)" fontFamily="JetBrains Mono, monospace" fontSize="8">SEAL</text>
        </g>
        <text x="115" y="90" fill="rgb(239,236,229)" fontFamily="JetBrains Mono, monospace" fontSize="10">CERTIFICATION · 179D</text>
      </svg>
    </Frame>
  );
}

export function PortraitGlyph({ initials, label }) {
  return (
    <Frame label={label} aspect="1/1">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
        <g fill="none" stroke="rgb(64,184,104)" strokeWidth="1.2">
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="55" opacity="0.5" strokeDasharray="2 4" />
          <line x1="20" y1="100" x2="180" y2="100" opacity="0.3" />
          <line x1="100" y1="20" x2="100" y2="180" opacity="0.3" />
        </g>
        <text x="100" y="112" textAnchor="middle" fill="rgb(239,236,229)" fontFamily="Fraunces, serif" fontSize="42" fontStyle="italic">{initials}</text>
      </svg>
    </Frame>
  );
}

export function ProgressionRail({ steps = 6, active = 0, label }) {
  return (
    <Frame label={label} aspect="4/3">
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
        <g stroke="rgb(64,184,104)" fill="none" strokeWidth="1.2">
          <line x1="60" y1="150" x2="340" y2="150" />
          {Array.from({ length: steps }).map((_, i) => {
            const x = 60 + (i * 280) / (steps - 1);
            const isActive = i === active;
            return (
              <g key={i}>
                <circle cx={x} cy="150" r={isActive ? 12 : 6} fill={isActive ? 'rgb(64,184,104)' : 'none'} />
                <text x={x} y="185" textAnchor="middle" fill="rgb(239,236,229)" opacity={isActive ? '1' : '0.5'} fontFamily="JetBrains Mono, monospace" fontSize="10">
                  0{i + 1}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </Frame>
  );
}

export default { BuildingElevation, MechanicalSchematic, EnergyFlow, DocumentStack, PortraitGlyph, ProgressionRail };
