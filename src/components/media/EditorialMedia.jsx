import { useState } from 'react';

/**
 * EditorialMedia
 * ----------------------------------------------------------------
 * Single component that replaces every empty blueprint-grid-fine
 * placeholder across the site. Each variant renders a distinct
 * hand-authored SVG illustration (dark graphite ground, concord
 * green line-work, brass highlights). Never produces an empty
 * dark box. Supports an optional real `src` with graceful
 * error fallback back to the SVG.
 *
 * usage:
 *   <EditorialMedia variant="hvac" alt="…" aspect="3/2" />
 *   <EditorialMedia variant="solar-array" decorative aspect="4/3" />
 */
export default function EditorialMedia({
  variant = 'schematic',
  alt = '',
  decorative = false,
  src,
  aspect,             // "3/2" | "4/3" | "16/9" | undefined (fill parent)
  className = '',
  rounded = false,
}) {
  const [errored, setErrored] = useState(false);
  const useImage = src && !errored;
  const resolved = variant === 'auto' ? pickVariantFromAlt(alt) : variant;
  const Illustration = ILLUSTRATIONS[resolved] || ILLUSTRATIONS.schematic;
  const aspectClass = aspect ? `aspect-[${aspect}]` : '';
  const roundedClass = rounded ? 'rounded-sm' : '';
  const a11y = decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': alt || undefined };

  return (
    <figure
      {...a11y}
      className={`relative overflow-hidden bg-[rgb(var(--graphite))] border border-[rgb(var(--ivory))/0.10] ${aspectClass} ${roundedClass} ${className}`}
    >
      {useImage ? (
        <img
          src={src}
          alt={decorative ? '' : alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Illustration />
      )}
    </figure>
  );
}

/* ============================================================
   Illustrations — each is a discrete architectural / editorial
   SVG. Ink graphite ground, concord-glow strokes, ivory dims,
   brass highlights. Uses viewBox with preserveAspectRatio slice
   so it fills the container regardless of aspect.
   ============================================================ */

const SVG_BASE = {
  className: 'absolute inset-0 w-full h-full',
  preserveAspectRatio: 'xMidYMid slice',
  xmlns: 'http://www.w3.org/2000/svg',
};

const S = {
  ink: '#0b0f0d',
  graphite: '#12161 4',
  ivory: '#efece5',
  green: '#40b868',
  greenDim: '#3da35d',
  brass: '#b8905b',
};

/* --- Shared subtle grid ------------------------------------- */
const Grid = () => (
  <g opacity="0.35">
    {Array.from({ length: 20 }).map((_, i) => (
      <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="240" stroke={S.ivory} strokeOpacity="0.06" strokeWidth="0.5" />
    ))}
    {Array.from({ length: 12 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke={S.ivory} strokeOpacity="0.06" strokeWidth="0.5" />
    ))}
  </g>
);

const Label = ({ x, y, text }) => (
  <text x={x} y={y} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={S.ivory} fillOpacity="0.5">{text}</text>
);

const frame = (label) => (
  <>
    <rect x="0" y="0" width="400" height="240" fill={S.ink} />
    <Grid />
    <rect x="6" y="6" width="388" height="228" fill="none" stroke={S.ivory} strokeOpacity="0.08" />
    <Label x="10" y="230" text={label} />
  </>
);

const ILLUSTRATIONS = {
  /* ---------- 179D & buildings ------------------------------ */
  'building-179d': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · 179D · COMMERCIAL ENVELOPE')}
      <rect x="90" y="60" width="180" height="160" fill={S.ink} stroke={S.green} strokeWidth="1.2" />
      {[0,1,2,3,4,5].map((i) => (
        <line key={i} x1="90" y1={80 + i * 24} x2="270" y2={80 + i * 24} stroke={S.ivory} strokeOpacity="0.28" />
      ))}
      {[0,1,2,3].map((i) => (
        <line key={i} x1={130 + i * 40} y1="60" x2={130 + i * 40} y2="220" stroke={S.ivory} strokeOpacity="0.14" strokeDasharray="1 3" />
      ))}
      {/* glass curtain */}
      <rect x="180" y="60" width="90" height="160" fill={S.green} fillOpacity="0.10" />
      {/* rooftop unit */}
      <rect x="140" y="46" width="60" height="14" fill={S.ink} stroke={S.green} />
      <Label x="204" y="56" text="HP-01" />
      {/* dimension */}
      <line x1="290" y1="60" x2="290" y2="220" stroke={S.ivory} strokeOpacity="0.4" />
      <Label x="296" y="140" text="96'" />
      {/* solar */}
      <rect x="300" y="70" width="60" height="18" fill={S.ink} stroke={S.brass} strokeWidth="0.75" />
      {[0,1,2].map((i) => (
        <line key={i} x1={320 + i * 14} y1="70" x2={320 + i * 14} y2="88" stroke={S.ivory} strokeOpacity="0.3" />
      ))}
      <Label x="300" y="102" text="PV / ROOF" />
    </svg>
  ),
  hvac: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · HVAC · CHILLED BEAM DISTRIBUTION')}
      {/* AHU */}
      <rect x="40" y="60" width="80" height="50" fill={S.ink} stroke={S.green} strokeWidth="1.2" />
      <Label x="46" y="52" text="AHU-01" />
      {[0,1,2,3].map((i) => (
        <line key={i} x1={54 + i * 16} y1="60" x2={54 + i * 16} y2="110" stroke={S.ivory} strokeOpacity="0.4" />
      ))}
      {/* duct trunks */}
      <path d="M 120 85 L 200 85 L 200 150 L 360 150" fill="none" stroke={S.green} strokeWidth="2" />
      <path d="M 200 85 L 340 85" fill="none" stroke={S.green} strokeWidth="2" />
      {/* diffusers */}
      {[240,280,320].map((x,i) => (
        <g key={i}><rect x={x-8} y="80" width="16" height="10" fill={S.ink} stroke={S.brass} /><line x1={x} y1="90" x2={x} y2="110" stroke={S.brass} /></g>
      ))}
      {[220,260,300,340].map((x,i) => (
        <g key={i}><rect x={x-8} y="145" width="16" height="10" fill={S.ink} stroke={S.brass} /></g>
      ))}
      <Label x="130" y="80" text="SUPPLY" />
      <Label x="130" y="164" text="RETURN" />
    </svg>
  ),
  lighting: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · LIGHTING · LED ZONES + SENSORS')}
      {/* ceiling grid */}
      {Array.from({ length: 5 }).map((_, r) => (
        <g key={r}>
          {Array.from({ length: 8 }).map((_, c) => (
            <rect key={c} x={40 + c * 40} y={50 + r * 30} width="30" height="4" fill={S.green} opacity={(r+c)%2?0.9:0.55} />
          ))}
        </g>
      ))}
      {[80,160,240,320].map((x,i) => (
        <g key={i}>
          <circle cx={x} cy="215" r="6" fill="none" stroke={S.brass} />
          <circle cx={x} cy="215" r="2" fill={S.brass} />
        </g>
      ))}
      <Label x="60" y="235" text="OCC" />
      <Label x="140" y="235" text="DAY" />
      <Label x="220" y="235" text="DIM" />
      <Label x="300" y="235" text="CTRL" />
    </svg>
  ),
  'energy-model': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · ENERGY MODEL · ASHRAE 90.1 BASELINE')}
      {/* axes */}
      <line x1="60" y1="40" x2="60" y2="200" stroke={S.ivory} strokeOpacity="0.5" />
      <line x1="60" y1="200" x2="370" y2="200" stroke={S.ivory} strokeOpacity="0.5" />
      {/* baseline bars */}
      {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
        <g key={i}>
          <rect x={70 + i * 24} y={200 - (60 + (i%3)*10)} width="8" height={60 + (i%3)*10} fill={S.ivory} fillOpacity="0.28" />
          <rect x={80 + i * 24} y={200 - (35 + (i%4)*6)} width="8" height={35 + (i%4)*6} fill={S.green} />
        </g>
      ))}
      <Label x="70" y="34" text="kBtu/sf·yr" />
      <Label x="290" y="216" text="J F M A M J J A S O N D" />
      {/* legend */}
      <rect x="290" y="52" width="10" height="6" fill={S.ivory} fillOpacity="0.28" /><Label x="304" y="58" text="BASELINE" />
      <rect x="290" y="66" width="10" height="6" fill={S.green} /><Label x="304" y="72" text="PROPOSED" />
    </svg>
  ),
  'field-verify': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · FIELD VERIFICATION · SITE INSPECTION')}
      {/* clipboard */}
      <rect x="80" y="40" width="140" height="180" fill={S.ink} stroke={S.ivory} strokeOpacity="0.35" />
      <rect x="130" y="30" width="40" height="16" fill={S.brass} />
      {[0,1,2,3,4,5,6].map((i) => (
        <g key={i}>
          <line x1="94" y1={70 + i*20} x2="204" y2={70 + i*20} stroke={S.ivory} strokeOpacity="0.2" />
          <rect x="94" y={62 + i*20} width="8" height="8" fill="none" stroke={S.green} />
          {i % 2 === 0 && <path d={`M 96 ${66 + i*20} L 99 ${69 + i*20} L 103 ${63 + i*20}`} stroke={S.green} fill="none" strokeWidth="1.5" />}
        </g>
      ))}
      {/* measuring */}
      <line x1="240" y1="60" x2="360" y2="60" stroke={S.green} strokeWidth="1.5" />
      <line x1="240" y1="55" x2="240" y2="65" stroke={S.green} /><line x1="360" y1="55" x2="360" y2="65" stroke={S.green} />
      <Label x="286" y="52" text="MEAS" />
      {/* building icon */}
      <rect x="240" y="100" width="120" height="120" fill="none" stroke={S.ivory} strokeOpacity="0.35" />
      {[0,1,2,3].map((r) =>
        [0,1,2,3].map((c) => (<rect key={`${r}${c}`} x={252 + c * 26} y={112 + r * 26} width="16" height="16" fill={S.green} fillOpacity={((r+c)%2)?0.6:0.2} />))
      )}
    </svg>
  ),

  /* ---------- PWA ------------------------------------------- */
  'workforce-pwa': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · PWA · APPRENTICE WORKFORCE')}
      {/* helmets */}
      {[80,150,220,290].map((x, i) => (
        <g key={i}>
          <path d={`M ${x-22} 130 Q ${x} 92 ${x+22} 130 Z`} fill={S.brass} opacity={i===1?1:0.75} />
          <line x1={x-24} y1="132" x2={x+24} y2="132" stroke={S.ink} strokeWidth="2" />
          <rect x={x-16} y="134" width="32" height="60" fill="none" stroke={S.ivory} strokeOpacity="0.4" />
          <line x1={x-16} y1="150" x2={x+16} y2="150" stroke={S.green} />
          <Label x={x-14} y="212" text={`W-${i+1}`} />
        </g>
      ))}
      {/* hours bar */}
      <Label x="60" y="42" text="APPRENTICE HOURS · 15%" />
      <rect x="60" y="46" width="280" height="6" fill={S.ivory} fillOpacity="0.15" />
      <rect x="60" y="46" width="130" height="6" fill={S.green} />
    </svg>
  ),
  payroll: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · CERTIFIED PAYROLL · WH-347')}
      <rect x="50" y="30" width="300" height="180" fill={S.ink} stroke={S.ivory} strokeOpacity="0.3" />
      {/* header */}
      <rect x="50" y="30" width="300" height="20" fill={S.green} opacity="0.18" />
      <Label x="58" y="44" text="EMPLOYEE" /><Label x="180" y="44" text="CLASS" /><Label x="240" y="44" text="HRS" /><Label x="290" y="44" text="RATE" />
      {[0,1,2,3,4,5,6].map((i) => (
        <g key={i}>
          <line x1="50" y1={58 + i * 20} x2="350" y2={58 + i * 20} stroke={S.ivory} strokeOpacity="0.1" />
          <circle cx="60" cy={68 + i * 20} r="4" fill={S.ivory} fillOpacity="0.2" />
          <rect x="70" y={64 + i * 20} width="100" height="8" fill={S.ivory} fillOpacity="0.15" />
          <rect x="180" y={64 + i * 20} width="50" height="8" fill={S.ivory} fillOpacity="0.15" />
          <rect x="240" y={64 + i * 20} width="40" height="8" fill={S.brass} fillOpacity="0.5" />
          <rect x="290" y={64 + i * 20} width="50" height="8" fill={S.green} fillOpacity="0.55" />
        </g>
      ))}
      <path d="M 320 30 l 20 0 l 0 20 z" fill={S.brass} opacity="0.7" />
    </svg>
  ),
  'compliance-records': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · COMPLIANCE RECORDS · AUDIT LEDGER')}
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <rect x={40} y={40 + i * 32} width="320" height="24" fill={S.ink} stroke={S.ivory} strokeOpacity="0.2" />
          <rect x="50" y={48 + i * 32} width="60" height="8" fill={S.ivory} fillOpacity="0.25" />
          <rect x="120" y={48 + i * 32} width="140" height="8" fill={S.ivory} fillOpacity="0.15" />
          <circle cx="290" cy={52 + i * 32} r="6" fill={i < 3 ? S.green : S.brass} opacity="0.85" />
          <Label x="304" y={56 + i * 32} text={i < 3 ? 'PASS' : 'REV'} />
        </g>
      ))}
    </svg>
  ),

  /* ---------- Direct Pay ------------------------------------ */
  'public-infra': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · DIRECT PAY · PUBLIC INFRASTRUCTURE')}
      {/* skyline */}
      <rect x="30" y="140" width="60" height="80" fill={S.ink} stroke={S.green} />
      <Label x="34" y="152" text="MUNI" />
      <rect x="100" y="100" width="70" height="120" fill={S.ink} stroke={S.green} />
      <Label x="104" y="112" text="UNIV" />
      <rect x="180" y="80" width="60" height="140" fill={S.ink} stroke={S.green} />
      <Label x="184" y="92" text="HOSP" />
      <rect x="250" y="130" width="50" height="90" fill={S.ink} stroke={S.green} />
      <Label x="254" y="142" text="TRIBAL" />
      <rect x="310" y="110" width="60" height="110" fill={S.ink} stroke={S.green} />
      <Label x="316" y="122" text="RURAL EC" />
      {/* windows */}
      {[[100,120,70],[180,100,60],[310,130,60]].map(([x,y,w], i) => (
        <g key={i}>
          {Array.from({length: 4}).map((_, r) => (
            Array.from({length: 3}).map((__, c) => (
              <rect key={`${r}-${c}`} x={x + 8 + c * (w/3)} y={y + 12 + r * 18} width="6" height="8" fill={S.green} fillOpacity={((r+c)%2)?0.7:0.3} />
            ))
          ))}
        </g>
      ))}
      <line x1="20" y1="220" x2="380" y2="220" stroke={S.ivory} strokeOpacity="0.3" />
    </svg>
  ),
  registration: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · PRE-FILING REGISTRATION · IRS WORKFLOW')}
      {['IDENT','PROJECT','CREDIT','REVIEW','APPROVE'].map((label, i) => (
        <g key={i}>
          <rect x={30 + i * 70} y="90" width="60" height="50" fill={S.ink} stroke={i===2 ? S.green : S.ivory} strokeOpacity={i===2 ? 1 : 0.4} strokeWidth={i===2 ? 1.5 : 1} />
          <Label x={36 + i * 70} y="118" text={label} />
          <text x={60 + i * 70} y="130" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={S.green}>{i+1}</text>
          {i < 4 && <path d={`M ${90 + i * 70} 115 L ${100 + i * 70} 115`} stroke={S.green} strokeWidth="1.5" markerEnd="url(#arrH)" />}
        </g>
      ))}
      <defs>
        <marker id="arrH" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={S.green} />
        </marker>
      </defs>
      <Label x="30" y="180" text="§ 6417 · REGISTRATION NUMBER ISSUED" />
      <rect x="30" y="188" width="340" height="6" fill={S.ivory} fillOpacity="0.12" />
      <rect x="30" y="188" width="240" height="6" fill={S.brass} />
    </svg>
  ),

  /* ---------- Transferable Credits -------------------------- */
  'solar-array': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · UTILITY-SCALE SOLAR · § 6418 ELIGIBLE')}
      {/* sun */}
      <circle cx="330" cy="50" r="14" fill="none" stroke={S.brass} strokeWidth="1.2" />
      {[0,45,90,135,180,225,270,315].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 330 + Math.cos(rad) * 20, y1 = 50 + Math.sin(rad) * 20;
        const x2 = 330 + Math.cos(rad) * 26, y2 = 50 + Math.sin(rad) * 26;
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={S.brass} />;
      })}
      {/* panel rows */}
      {[0,1,2].map((row) => (
        <g key={row}>
          {[0,1,2,3,4,5].map((c) => {
            const x = 30 + c * 58;
            const y = 130 + row * 30;
            return (
              <g key={c} transform={`translate(${x} ${y}) skewX(-14)`}>
                <rect x="0" y="0" width="48" height="22" fill={S.ink} stroke={S.green} strokeWidth="0.9" />
                <line x1="16" y1="0" x2="16" y2="22" stroke={S.ivory} strokeOpacity="0.25" />
                <line x1="32" y1="0" x2="32" y2="22" stroke={S.ivory} strokeOpacity="0.25" />
                <line x1="0" y1="11" x2="48" y2="11" stroke={S.ivory} strokeOpacity="0.15" />
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  ),
  storage: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · BATTERY STORAGE · BESS CONTAINER')}
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x={60 + i * 100} y="100" width="90" height="100" fill={S.ink} stroke={S.green} />
          {/* vents */}
          {[0,1,2,3,4].map((v) => (<line key={v} x1={70 + i * 100} y1={110 + v * 18} x2={140 + i * 100} y2={110 + v * 18} stroke={S.ivory} strokeOpacity="0.2" />))}
          <rect x={64 + i * 100} y="180" width="82" height="8" fill={S.green} fillOpacity={0.3 + i * 0.25} />
          <Label x={68 + i * 100} y="220" text={`SOC ${30 + i * 25}%`} />
        </g>
      ))}
      <path d="M 60 60 L 360 60" stroke={S.brass} strokeWidth="1.2" />
      <Label x="60" y="52" text="AC BUS · 480V" />
    </svg>
  ),
  diligence: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · DUE DILIGENCE · TRANSACTION FILE')}
      {[0,1,2].map((i) => (
        <g key={i} transform={`translate(${30 + i * 20} ${30 + i * 12})`}>
          <rect x="0" y="0" width="220" height="170" fill={S.ink} stroke={S.ivory} strokeOpacity={0.2 + i * 0.15} />
          {i === 2 && (
            <>
              {[0,1,2,3,4,5].map((r) => (<line key={r} x1="14" y1={26 + r * 22} x2="206" y2={26 + r * 22} stroke={S.ivory} strokeOpacity="0.18" />))}
              <rect x="14" y="10" width="80" height="8" fill={S.green} />
              <rect x="140" y="140" width="66" height="20" fill={S.brass} opacity="0.85" />
              <text x="152" y="154" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={S.ink}>SIGNED</text>
            </>
          )}
        </g>
      ))}
      <Label x="270" y="60" text="D/01 CREDIT DEED" />
      <Label x="270" y="80" text="D/02 CHAIN OF TITLE" />
      <Label x="270" y="100" text="D/03 INDEMNITY" />
      <Label x="270" y="120" text="D/04 INSURANCE" />
    </svg>
  ),
  transaction: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · § 6418 TRANSFER · SELLER → BUYER')}
      <rect x="30" y="80" width="120" height="80" fill={S.ink} stroke={S.green} />
      <Label x="40" y="72" text="DEVELOPER" />
      <text x="90" y="120" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="18" fill={S.green}>§</text>
      <text x="90" y="146" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={S.ivory} fillOpacity="0.6">CREDIT</text>

      <rect x="250" y="80" width="120" height="80" fill={S.ink} stroke={S.brass} />
      <Label x="260" y="72" text="CORPORATE BUYER" />
      <text x="310" y="120" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="18" fill={S.brass}>$</text>
      <text x="310" y="146" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={S.ivory} fillOpacity="0.6">CASH</text>

      <path d="M 150 105 L 250 105" stroke={S.green} strokeWidth="1.5" markerEnd="url(#arrT)" />
      <path d="M 250 140 L 150 140" stroke={S.brass} strokeWidth="1.5" markerEnd="url(#arrT2)" />
      <defs>
        <marker id="arrT" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={S.green} />
        </marker>
        <marker id="arrT2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={S.brass} />
        </marker>
      </defs>
      <Label x="160" y="196" text="TRANSFER ELECTION · IRS FORM 3800" />
    </svg>
  ),

  /* ---------- R&D ------------------------------------------- */
  manufacturing: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · PROCESS DEVELOPMENT · MFG LINE')}
      <line x1="30" y1="160" x2="370" y2="160" stroke={S.ivory} strokeOpacity="0.4" />
      {/* conveyor */}
      <rect x="30" y="150" width="340" height="6" fill={S.ivory} fillOpacity="0.2" />
      {[60,120,180,240,300].map((x, i) => (
        <circle key={i} cx={x} cy="164" r="6" fill="none" stroke={S.ivory} strokeOpacity="0.5" />
      ))}
      {/* robotic arms */}
      {[100,200,300].map((x, i) => (
        <g key={i}>
          <rect x={x-8} y="60" width="16" height="30" fill={S.ink} stroke={S.green} />
          <line x1={x} y1="90" x2={x + (i%2?26:-26)} y2="120" stroke={S.green} strokeWidth="1.6" />
          <line x1={x + (i%2?26:-26)} y1="120" x2={x} y2="150" stroke={S.brass} strokeWidth="1.6" />
          <circle cx={x} cy="150" r="4" fill={S.brass} />
          <Label x={x-14} y="52" text={`STA-${i+1}`} />
        </g>
      ))}
      {/* parts */}
      {[80,140,220,280].map((x, i) => (<rect key={i} x={x-6} y="140" width="12" height="10" fill={S.green} opacity={0.5 + (i%2)*0.4} />))}
    </svg>
  ),
  engineering: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · ENGINEERING · CAD SECTION')}
      {/* isometric block */}
      <g stroke={S.green} strokeWidth="1.1" fill="none">
        <path d="M 120 80 L 220 60 L 320 100 L 320 180 L 220 200 L 120 160 Z" />
        <path d="M 120 80 L 120 160 M 220 60 L 220 140 M 320 100 L 320 180 M 220 140 L 320 180 M 220 140 L 120 100" />
        <path d="M 120 100 L 220 60 M 120 100 L 220 140" strokeDasharray="2 3" strokeOpacity="0.6" />
      </g>
      {/* dim lines */}
      <line x1="120" y1="216" x2="320" y2="216" stroke={S.ivory} strokeOpacity="0.4" />
      <line x1="120" y1="212" x2="120" y2="220" stroke={S.ivory} strokeOpacity="0.4" />
      <line x1="320" y1="212" x2="320" y2="220" stroke={S.ivory} strokeOpacity="0.4" />
      <Label x="200" y="228" text="200mm" />
      <Label x="30" y="46" text="ISO · TRIMETRIC" />
      <Label x="330" y="46" text="SHT · 01" />
    </svg>
  ),
  prototype: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · PROTOTYPE ITERATION · V1 → V4')}
      {[0,1,2,3].map((i) => (
        <g key={i} transform={`translate(${40 + i * 90} 70)`}>
          <rect x="0" y="0" width="70" height="100" fill={S.ink} stroke={S.ivory} strokeOpacity={0.25 + i * 0.18} />
          <circle cx="35" cy="40" r={10 + i * 3} fill="none" stroke={S.green} strokeWidth="1.2" />
          <line x1="10" y1="70" x2="60" y2="70" stroke={S.ivory} strokeOpacity="0.3" />
          <line x1="10" y1="80" x2={i === 3 ? 60 : 40 + i * 4} y2="80" stroke={S.brass} strokeWidth="2" />
          <Label x="6" y="118" text={`V${i+1}`} />
        </g>
      ))}
      <Label x="40" y="204" text="ITERATION LOG · PASS/FAIL RATES" />
    </svg>
  ),
  software: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · SOFTWARE R&D · SPRINT TELEMETRY')}
      {/* window chrome */}
      <rect x="30" y="30" width="340" height="180" fill={S.ink} stroke={S.ivory} strokeOpacity="0.3" />
      <line x1="30" y1="50" x2="370" y2="50" stroke={S.ivory} strokeOpacity="0.25" />
      <circle cx="42" cy="40" r="3" fill={S.brass} />
      <circle cx="52" cy="40" r="3" fill={S.ivory} fillOpacity="0.4" />
      <circle cx="62" cy="40" r="3" fill={S.green} />
      {/* code lines */}
      {[0,1,2,3,4,5,6,7,8].map((i) => (
        <g key={i}>
          <rect x={44} y={62 + i * 16} width={30 + (i * 17 % 40)} height="4" fill={S.green} fillOpacity={0.4 + (i%3)*0.2} />
          <rect x={80 + (i * 17 % 40)} y={62 + i * 16} width={80 + (i * 13 % 60)} height="4" fill={S.ivory} fillOpacity="0.25" />
        </g>
      ))}
      {/* graph */}
      <polyline points="230,180 250,160 270,168 290,140 310,152 330,120 350,132" fill="none" stroke={S.green} strokeWidth="1.5" />
    </svg>
  ),
  laboratory: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · LABORATORY TESTING · SPEC SETUP')}
      {/* bench */}
      <line x1="20" y1="180" x2="380" y2="180" stroke={S.ivory} strokeOpacity="0.4" strokeWidth="1.5" />
      {/* flasks */}
      <path d="M 80 100 L 90 100 L 90 130 L 110 170 L 60 170 L 80 130 Z" fill={S.green} fillOpacity="0.25" stroke={S.green} />
      <line x1="60" y1="160" x2="110" y2="160" stroke={S.green} />
      {/* beaker */}
      <rect x="140" y="130" width="46" height="50" fill="none" stroke={S.ivory} strokeOpacity="0.5" />
      <rect x="140" y="150" width="46" height="30" fill={S.brass} fillOpacity="0.35" />
      {/* microscope */}
      <g stroke={S.ivory} strokeOpacity="0.5" fill="none">
        <rect x="230" y="150" width="60" height="30" />
        <line x1="260" y1="150" x2="260" y2="110" strokeWidth="1.5" />
        <circle cx="260" cy="100" r="10" />
        <line x1="252" y1="140" x2="272" y2="140" />
      </g>
      {/* graph */}
      <rect x="320" y="80" width="60" height="80" fill={S.ink} stroke={S.ivory} strokeOpacity="0.35" />
      <polyline points="322,140 335,120 345,130 360,90 378,100" fill="none" stroke={S.green} strokeWidth="1.2" />
    </svg>
  ),
  'tech-docs': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · TECHNICAL DOCUMENTATION · QRE INDEX')}
      {[0,1,2].map((i) => (
        <g key={i} transform={`translate(${30 + i * 130} 40)`}>
          <rect x="0" y="0" width="110" height="160" fill={S.ink} stroke={S.ivory} strokeOpacity="0.3" />
          <rect x="0" y="0" width="110" height="20" fill={S.green} opacity="0.2" />
          <Label x="8" y="14" text={`QRE · TIER ${i+1}`} />
          {[0,1,2,3,4,5,6].map((r) => (
            <g key={r}>
              <line x1="8" y1={34 + r * 16} x2="102" y2={34 + r * 16} stroke={S.ivory} strokeOpacity="0.1" />
              <rect x="8" y={28 + r * 16} width={60 + (r * 7 % 30)} height="4" fill={S.ivory} fillOpacity="0.2" />
            </g>
          ))}
          <rect x="8" y="146" width="60" height="8" fill={S.brass} />
        </g>
      ))}
    </svg>
  ),

  /* ---------- Auxiliary ------------------------------------- */
  'office-map': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · OFFICE LOCATION · LOUISVILLE KY')}
      {/* street grid */}
      {[60,120,180,240,300].map((x, i) => (<line key={i} x1={x} y1="30" x2={x} y2="210" stroke={S.ivory} strokeOpacity="0.18" />))}
      {[60,100,140,180].map((y, i) => (<line key={i} x1="30" y1={y} x2="370" y2={y} stroke={S.ivory} strokeOpacity="0.18" />))}
      {/* highway */}
      <path d="M 30 120 Q 200 60 370 130" stroke={S.brass} strokeWidth="2" fill="none" />
      {/* river */}
      <path d="M 30 200 Q 200 180 370 205" stroke={S.green} strokeOpacity="0.5" strokeWidth="4" fill="none" />
      {/* marker */}
      <g transform="translate(200 110)">
        <path d="M 0 0 C -14 -20 14 -20 0 0 Z M 0 -14 C -6 -14 -6 -6 0 -6 C 6 -6 6 -14 0 -14 Z" fill={S.green} />
        <circle cx="0" cy="-10" r="3" fill={S.ink} />
      </g>
      <Label x="210" y="108" text="CONCORD" />
    </svg>
  ),
  article: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · EDITORIAL · FIELD NOTE')}
      <rect x="60" y="30" width="280" height="180" fill={S.ink} stroke={S.ivory} strokeOpacity="0.3" />
      <rect x="74" y="46" width="120" height="8" fill={S.green} />
      <rect x="74" y="62" width="200" height="4" fill={S.ivory} fillOpacity="0.35" />
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={i} x="74" y={90 + i * 14} width={240 - (i%3) * 30} height="3" fill={S.ivory} fillOpacity="0.2" />
      ))}
      <rect x="240" y="90" width="60" height="70" fill={S.green} opacity="0.15" stroke={S.green} strokeOpacity="0.4" />
      {[0,1,2].map((i) => (
        <line key={i} x1="248" y1={100 + i * 20} x2="292" y2={100 + i * 20} stroke={S.green} strokeOpacity="0.4" />
      ))}
    </svg>
  ),
  whitepaper: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · WHITEPAPER · LONG-FORM GUIDE')}
      <g transform="translate(140 30)">
        <rect x="6" y="6" width="120" height="180" fill={S.ink} stroke={S.ivory} strokeOpacity="0.2" />
        <rect x="0" y="0" width="120" height="180" fill={S.ink} stroke={S.brass} />
        <rect x="12" y="14" width="60" height="8" fill={S.brass} />
        <rect x="12" y="30" width="96" height="4" fill={S.ivory} fillOpacity="0.4" />
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <rect key={i} x="12" y={50 + i * 12} width={96 - (i%3) * 20} height="2" fill={S.ivory} fillOpacity="0.25" />
        ))}
        <rect x="12" y="160" width="30" height="10" fill={S.green} />
      </g>
    </svg>
  ),
  'document-stack': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · RECORD · LEGAL DOCUMENT')}
      {[0,1,2].map((i) => (
        <rect key={i} x={100 + i * 16} y={40 + i * 12} width="200" height="160" fill={S.ink} stroke={S.ivory} strokeOpacity={0.2 + i * 0.15} />
      ))}
      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
        <line key={i} x1="146" y1={70 + i * 14} x2="308" y2={70 + i * 14} stroke={S.ivory} strokeOpacity="0.18" />
      ))}
      <rect x="132" y="56" width="60" height="6" fill={S.green} />
    </svg>
  ),
  'thank-you': () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · DELIVERY · TRANSMITTED')}
      <circle cx="200" cy="120" r="60" fill="none" stroke={S.green} strokeWidth="1.5" />
      <path d="M 170 122 L 194 146 L 234 100" fill="none" stroke={S.green} strokeWidth="3" />
      <Label x="140" y="200" text="DOCUMENT DISPATCHED · CH-0247" />
    </svg>
  ),

  /* ---------- Fallback -------------------------------------- */
  schematic: () => (
    <svg {...SVG_BASE} viewBox="0 0 400 240">
      {frame('FIG · SCHEMATIC')}
      <rect x="70" y="50" width="260" height="140" fill="none" stroke={S.green} strokeWidth="1.2" />
      <line x1="70" y1="120" x2="330" y2="120" stroke={S.ivory} strokeOpacity="0.3" strokeDasharray="2 4" />
      <line x1="200" y1="50" x2="200" y2="190" stroke={S.ivory} strokeOpacity="0.3" strokeDasharray="2 4" />
      <circle cx="200" cy="120" r="26" fill="none" stroke={S.brass} />
    </svg>
  ),
};

/* --- alt-text → variant heuristic ------------------------------- */
export function pickVariantFromAlt(altText) {
  const a = (altText || '').toLowerCase();
  if (!a) return 'schematic';
  if (/(solar|photovoltaic|pv\b|sun)/.test(a)) return 'solar-array';
  if (/(battery|bess|storage)/.test(a)) return 'storage';
  if (/(worker|workforce|apprentice|labor)/.test(a)) return 'workforce-pwa';
  if (/(payroll|wh-347|wage)/.test(a)) return 'payroll';
  if (/(audit|compliance|record|ledger)/.test(a)) return 'compliance-records';
  if (/(registration|pre-filing|irs|workflow)/.test(a)) return 'registration';
  if (/(universit|higher ed|campus)/.test(a)) return 'public-infra';
  if (/(hospital|healthcare|medical)/.test(a)) return 'public-infra';
  if (/(municipal|city|government|federal|tribal|public|nonprofit)/.test(a)) return 'public-infra';
  if (/(transfer|buyer|seller|marketplace|financial|transaction)/.test(a)) return 'transaction';
  if (/(diligence|deed|title|indemnity)/.test(a)) return 'diligence';
  if (/(cad|engineering|blueprint|drawing)/.test(a)) return 'engineering';
  if (/(prototype|iteration|version)/.test(a)) return 'prototype';
  if (/(software|code|sprint|application)/.test(a)) return 'software';
  if (/(laborator|lab\b|testing|experiment|beaker|microscope)/.test(a)) return 'laboratory';
  if (/(manufactur|factory|assembly|robot)/.test(a)) return 'manufacturing';
  if (/(hvac|chill|duct|air handler|ahu)/.test(a)) return 'hvac';
  if (/(lighting|led|luminaire|lamp)/.test(a)) return 'lighting';
  if (/(energy model|ashrae|modeling|baseline|simulation)/.test(a)) return 'energy-model';
  if (/(field|verif|inspect|site visit|walkthrough)/.test(a)) return 'field-verify';
  if (/(school|office|commercial|multifamily|residential|building|facade|glass|envelope)/.test(a)) return 'building-179d';
  if (/(document|qre|whitepaper|guide)/.test(a)) return 'tech-docs';
  if (/(map|location|office|louisville)/.test(a)) return 'office-map';
  return 'schematic';
}
