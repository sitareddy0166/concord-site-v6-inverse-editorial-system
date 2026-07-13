import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CaretDown, List, X } from '@phosphor-icons/react';

const dropdowns = [
  {
    label: 'Services',
    href: '/#services',
    items: [
      { code: 'S/01', label: '179D Tax Deduction',            href: '/179d-tax-deduction',            hint: 'Energy-efficient commercial buildings' },
      { code: 'S/02', label: 'PWA Compliance',                href: '/prevailing-wage-apprenticeship', hint: 'Prevailing wage and apprenticeship' },
      { code: 'S/03', label: 'Direct Pay (6417)',             href: '/direct-pay',                    hint: 'Tax-exempt entity cash payments' },
      { code: 'S/04', label: 'Transferable Credits (6418)',   href: '/transferable-tax-credits',       hint: 'Credit sale and purchase' },
      { code: 'S/05', label: 'R&D Tax Credits',               href: '/rd-tax-credits',                hint: 'Innovation cost recovery' },
    ],
  },
  {
    label: 'About Us',
    href: '/why-us',
    items: [
      { code: 'A/01', label: 'Why Us',              href: '/why-us',                hint: 'Standards and results' },
      { code: 'A/02', label: 'Who We Are',          href: '/who-we-are',            hint: 'People and history' },
      { code: 'A/03', label: 'The Concord Standard', href: '/the-concord-standard', hint: 'Six-stage process' },
      { code: 'A/04', label: 'Client Charter',       href: '/client-charter',        hint: 'Engagement principles' },
      { code: 'A/05', label: 'Careers',             href: '/careers',               hint: 'Open positions' },
    ],
  },
  {
    label: 'Insights',
    href: '/resources',
    items: [
      { code: 'I/01', label: 'News & Articles', href: '/resources?content=News',          hint: 'Field notes and updates' },
      { code: 'I/02', label: 'Case Studies',    href: '/resources?content=Case+Studies',  hint: 'Client engagements' },
      { code: 'I/03', label: 'Whitepapers',     href: '/whitepaper',                       hint: 'Long-form guides' },
      { code: 'I/04', label: 'Deadlines',       href: '/resources?content=Deadlines',      hint: 'Filing windows' },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRefs = useRef({});

  const isActivePath = useCallback((href) => {
    if (!href) return false;
    const path = href.split('?')[0].split('#')[0];
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  }, [location.pathname]);

  const isGroupActive = useCallback((d) => {
    if (isActivePath(d.href)) return true;
    return d.items.some((it) => isActivePath(it.href));
  }, [isActivePath]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileGroup(null);
    document.body.style.overflow = '';
  }, [location.pathname, location.hash, location.search]);

  // Release scroll lock and close menu on desktop resize / unmount
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileGroup(null);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        if (mobileOpen) { setMobileOpen(false); document.body.style.overflow = ''; }
      }
    };
    const onClick = (e) => {
      if (openMenu && menuRefs.current[openMenu] && !menuRefs.current[openMenu].contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [openMenu, mobileOpen]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((v) => {
      const next = !v;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const headerBg = scrolled || mobileOpen || openMenu
    ? 'bg-[rgb(var(--ink))] border-[rgb(var(--ivory))/0.14]'
    : 'bg-[rgb(var(--ink))/0.55] backdrop-blur-md border-transparent';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 h-[64px] z-[1000] transition-colors duration-200 border-b ${headerBg}`}>
        <nav aria-label="Primary" className="arch h-full flex items-center justify-between gap-6">
          <Link to="/" aria-label="Concord Energy Strategies home" className="flex items-center gap-3 shrink-0">
            <img src="/assets/concord-logo.svg" alt="" aria-hidden="true" width="120" height="28" className="h-6 w-auto invert brightness-0 opacity-90" />
            <span className="sr-only">Concord Energy Strategies</span>
            <span aria-hidden="true" className="hidden sm:inline text-[10px] tracking-[0.24em] uppercase text-[rgb(var(--ivory))/0.5] font-mono border-l border-[rgb(var(--ivory))/0.15] pl-3 ml-1">
              Est. 2009 &middot; Louisville KY
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {dropdowns.map((d) => {
              const isOpen = openMenu === d.label;
              const active = isGroupActive(d);
              return (
                <div key={d.label} className="relative flex items-center" ref={(el) => (menuRefs.current[d.label] = el)}>
                  <Link
                    to={d.href}
                    data-active={active || undefined}
                    className="nav-link inline-flex items-center px-3 py-2"
                    onClick={() => setOpenMenu(null)}
                  >
                    {d.label}
                  </Link>
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-label={`${d.label} menu`}
                    onClick={() => setOpenMenu(isOpen ? null : d.label)}
                    className="nav-link -ml-1 pr-2 py-2"
                  >
                    <CaretDown size={10} weight="bold" aria-hidden="true" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div role="menu" className="absolute top-full left-0 mt-1 w-[340px] bg-[rgb(var(--graphite))] border border-[rgb(var(--ivory))/0.10] shadow-2xl">
                      <div className="px-4 py-2 border-b border-[rgb(var(--ivory))/0.08] flex items-center justify-between">
                        <span className="tech-label">Index &nbsp;/&nbsp; {d.label}</span>
                        <span className="tech-label tech-label--dim">0{d.items.length}</span>
                      </div>
                      <ul className="py-1">
                        {d.items.map((it) => {
                          const itActive = isActivePath(it.href);
                          return (
                            <li key={it.href}>
                              <Link
                                to={it.href}
                                role="menuitem"
                                aria-current={itActive ? 'page' : undefined}
                                className={`flex items-baseline gap-3 px-4 py-3 group hover:bg-[rgb(var(--ivory))/0.04] ${itActive ? 'bg-[rgb(var(--ivory))/0.03]' : ''}`}
                                onClick={() => setOpenMenu(null)}
                              >
                                <span className="index-num shrink-0 w-10">{it.code}</span>
                                <span className="flex-1">
                                  <span className={`block text-[14px] font-medium group-hover:text-[rgb(var(--concord-glow))] ${itActive ? 'text-[rgb(var(--concord-glow))]' : 'text-[rgb(var(--ivory))]'}`}>
                                    {it.label}
                                  </span>
                                  <span className="block text-[12px] text-[rgb(var(--ivory))/0.55] mt-0.5">{it.hint}</span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/the-concord-standard" data-active={isActivePath('/the-concord-standard') || undefined} className="nav-link px-3 py-2">The Concord Standard</Link>
            <Link to="/obbba-deadline" data-active={isActivePath('/obbba-deadline') || undefined} className="nav-link px-3 py-2 text-[rgb(var(--brass))] hover:text-[rgb(var(--brass))]">OBBBA</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link to="/contact" data-active={isActivePath('/contact') || undefined} className="nav-link px-2">Contact</Link>
            <Link to="/start-the-conversation" className="btn btn-primary">
              Start<span aria-hidden="true"> →</span>
            </Link>
          </div>

          <button
            onClick={toggleMobile}
            className="lg:hidden p-3 -mr-2 text-[rgb(var(--ivory))]"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[999] pt-[64px] bg-[rgb(var(--ink))] lg:hidden overflow-y-auto">
          <div className="arch py-8 flex flex-col gap-6">
            {dropdowns.map((d) => {
              const open = mobileGroup === d.label;
              return (
                <div key={d.label} className="border-b border-[rgb(var(--ivory))/0.10] pb-4">
                  <div className="flex items-center justify-between">
                    <Link to={d.href} className="tech-label" data-active={isGroupActive(d) || undefined}>
                      {d.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-label={`${open ? 'Collapse' : 'Expand'} ${d.label}`}
                      onClick={() => setMobileGroup(open ? null : d.label)}
                      className="p-3 -mr-3 text-[rgb(var(--ivory))/0.7]"
                    >
                      <CaretDown size={14} weight="bold" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {open && (
                    <ul className="mt-3 flex flex-col divide-y divide-[rgb(var(--ivory))/0.08] border-y border-[rgb(var(--ivory))/0.08]">
                      {d.items.map((it) => (
                        <li key={it.href}>
                          <Link to={it.href} className="flex items-baseline gap-3 py-3 min-h-[48px]">
                            <span className="index-num w-10">{it.code}</span>
                            <span className="text-[15px] text-[rgb(var(--ivory))]">{it.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <div className="flex flex-col gap-3 pt-4">
              <Link to="/the-concord-standard" className="nav-link py-3 min-h-[48px] flex items-center">The Concord Standard</Link>
              <Link to="/obbba-deadline" className="nav-link py-3 min-h-[48px] flex items-center text-[rgb(var(--brass))]">OBBBA Deadlines</Link>
              <Link to="/contact" className="btn btn-outline mt-3 justify-center">Contact</Link>
              <Link to="/start-the-conversation" className="btn btn-primary justify-center">Start the Conversation</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
