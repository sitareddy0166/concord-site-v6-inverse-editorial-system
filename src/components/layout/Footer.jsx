import { Link } from 'react-router-dom';
import { LinkedinLogo, InstagramLogo, YoutubeLogo, ArrowUpRight } from '@phosphor-icons/react';

const cols = [
  {
    label: 'Services',
    items: [
      { label: '179D Tax Deduction', href: '/179d-tax-deduction' },
      { label: 'PWA Compliance', href: '/prevailing-wage-apprenticeship' },
      { label: 'Direct Pay (6417)', href: '/direct-pay' },
      { label: 'Transferable Credits (6418)', href: '/transferable-tax-credits' },
      { label: 'R&D Tax Credits', href: '/rd-tax-credits' },
    ],
  },
  {
    label: 'About Us',
    items: [
      { label: 'Why Us', href: '/why-us' },
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'The Concord Standard', href: '/the-concord-standard' },
      { label: 'Client Charter', href: '/client-charter' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'News & Articles', href: '/resources?content=News' },
      { label: 'Case Studies', href: '/resources?content=Case+Studies' },
      { label: 'Whitepapers', href: '/whitepaper' },
      { label: 'Deadlines', href: '/resources?content=Deadlines' },
      { label: 'OBBBA', href: '/obbba-deadline' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="surface-ink border-t border-[rgb(var(--ivory))/0.08]">
      {/* Coordinate marks band */}
      <div className="arch pt-16 pb-10 relative">
        <span className="coord absolute top-4 left-6 text-[rgb(var(--ivory))/0.4]" aria-hidden="true" />
        <span className="coord absolute top-4 right-6 text-[rgb(var(--ivory))/0.4]" aria-hidden="true" />

        {/* Manifesto row */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/concord-logo.svg" alt="Concord Energy Strategies" width="132" height="30" className="h-7 w-auto invert brightness-0 opacity-90" />
            </div>
            <p className="h-chapter text-balance mb-6 max-w-md">
              Compliance-driven advisory for the clean energy tax code.
            </p>
            <p className="text-[14px] text-[rgb(var(--ivory))/0.6] leading-relaxed max-w-md">
              Concord Energy Strategies partners with commercial building owners, ESCOs, designers, and tax-exempt entities to identify, substantiate, and monetize federal clean energy incentives.
            </p>

            <div className="mt-8">
              <p className="tech-label mb-3">Correspond</p>
              <ul className="text-[14px] text-[rgb(var(--ivory))/0.75] space-y-1.5">
                <li>
                  <a href="mailto:info@concordenergy.com" className="ed-link">info@concordenergy.com</a>
                </li>
                <li>
                  <a href="tel:+15023849078" className="ed-link">(502) 384-9078</a>
                </li>
                <li className="text-[rgb(var(--ivory))/0.55] pt-1">
                  6000 Brownsboro Park Blvd, Suite H<br />Louisville, KY 40207
                </li>
              </ul>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.label}>
                <p className="tech-label mb-4">{col.label}</p>
                <ul className="space-y-2.5">
                  {col.items.map((it) => (
                    <li key={it.href}>
                      <Link to={it.href} className="text-[14px] text-[rgb(var(--ivory))/0.75] hover:text-[rgb(var(--concord-glow))] transition-colors">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Newsletter (honest state — no fake success) */}
      <div className="border-t border-[rgb(var(--ivory))/0.08]">
        <div className="arch py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <p className="tech-label mb-2">Field Notes</p>
            <p className="text-[15px] text-[rgb(var(--ivory))/0.85]">
              Deadlines, regulatory updates, and practitioner memos from the Concord team.
            </p>
          </div>
          <a
            href="mailto:info@concordenergy.com?subject=Subscribe%20to%20Field%20Notes"
            className="btn btn-outline"
          >
            Request Updates <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgb(var(--ivory))/0.08]">
        <div className="arch py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/283486" target="_blank" rel="noopener noreferrer" aria-label="Concord on LinkedIn" className="text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]"><LinkedinLogo size={18} weight="bold" /></a>
            <a href="https://www.instagram.com/concordenergystrategies/" target="_blank" rel="noopener noreferrer" aria-label="Concord on Instagram" className="text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]"><InstagramLogo size={18} weight="bold" /></a>
            <a href="https://www.youtube.com/@Concordenergystrategies" target="_blank" rel="noopener noreferrer" aria-label="Concord on YouTube" className="text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]"><YoutubeLogo size={18} weight="bold" /></a>
          </div>
          <p className="text-[12px] text-[rgb(var(--ivory))/0.45] tracking-wide">© 2026 Concord Energy Strategies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[12px] text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]">Privacy</Link>
            <Link to="/terms-conditions" className="text-[12px] text-[rgb(var(--ivory))/0.55] hover:text-[rgb(var(--ivory))]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
