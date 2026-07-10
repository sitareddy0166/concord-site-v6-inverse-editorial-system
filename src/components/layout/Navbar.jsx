import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Buildings, HardHat, HandCoins, ArrowsLeftRight, Flask, Star, UsersThree, SealCheck, Handshake, Briefcase, Newspaper, FolderOpen, FileText, Calendar, CaretDown, List, X } from '@phosphor-icons/react';

const iconMap = {
  Buildings, HardHat, HandCoins, ArrowsLeftRight, Flask,
  Star, UsersThree, SealCheck, Handshake, Briefcase,
  Newspaper, FolderOpen, FileText, Calendar,
};

const dropdowns = [
  {
    label: 'Services',
    href: '/#services',
    items: [
      { label: '179D Tax Deduction', href: '/179d-tax-deduction', icon: 'Buildings' },
      { label: 'PWA Compliance', href: '/prevailing-wage-apprenticeship', icon: 'HardHat' },
      { label: 'Direct Pay (6417)', href: '/direct-pay', icon: 'HandCoins' },
      { label: 'Transferable Credits (6418)', href: '/transferable-tax-credits', icon: 'ArrowsLeftRight' },
      { label: 'R&D Tax Credits', href: '/rd-tax-credits', icon: 'Flask' },
    ],
  },
  {
    label: 'About Us',
    href: '/why-us',
    items: [
      { label: 'Why Us', href: '/why-us', icon: 'Star' },
      { label: 'Who We Are', href: '/who-we-are', icon: 'UsersThree' },
      { label: 'The Concord Standard', href: '/the-concord-standard', icon: 'SealCheck' },
      { label: 'Client Charter', href: '/client-charter', icon: 'Handshake' },
      { label: 'Careers', href: '/careers', icon: 'Briefcase' },
    ],
  },
  {
    label: 'Insights',
    href: '/resources',
    items: [
      { label: 'News & Articles', href: '/resources?content=News', icon: 'Newspaper' },
      { label: 'Case Studies', href: '/resources?content=Case+Studies', icon: 'FolderOpen' },
      { label: 'Whitepapers', href: '/whitepaper', icon: 'FileText' },
      { label: 'Deadlines', href: '/resources?content=Deadlines', icon: 'Calendar' },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-white/85 backdrop-blur-[20px] border-b border-black/[0.06] z-[1000] flex items-center">
        <nav aria-label="Main navigation" className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-concord-green rounded">
            <img src="/assets/concord-logo.svg" alt="Concord Energy Strategies" width="120" height="32" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/the-concord-standard" className="text-[15px] font-medium text-slate-600 hover:text-concord-green focus:outline-none focus-visible:text-concord-green focus-visible:underline underline-offset-4 transition-colors">
              The Concord Standard
            </Link>

            {dropdowns.map((dropdown) => (
              <div key={dropdown.label} className="nav-item relative group">
                <Link
                  to={dropdown.href}
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="text-[15px] font-medium text-slate-600 hover:text-concord-green focus:outline-none focus-visible:text-concord-green focus-visible:underline underline-offset-4 transition-colors flex items-center gap-1"
                >
                  {dropdown.label} <CaretDown size={12} aria-hidden="true" />
                </Link>
                <div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[1001]" role="menu">
                  <div className="w-[280px] bg-white rounded-3xl shadow-xl border border-black/[0.06] p-4">
                    {dropdown.items.map((item) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          role="menuitem"
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-concord-mint focus:outline-none focus-visible:bg-concord-mint transition-colors"
                        >
                          {Icon && <Icon size={18} className="text-concord-green" aria-hidden="true" />}
                          <span className="text-[14px] font-medium text-concord-dark">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link to="/contact" className="text-[14px] font-bold text-concord-dark border border-concord-dark/20 rounded-full px-6 py-2.5 hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
              Contact
            </Link>
            <Link to="/start-the-conversation" className="text-[14px] font-bold text-white bg-[#151C19] rounded-full px-6 py-2.5 hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
              Start the Conversation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMobile} className="lg:hidden p-2" aria-label="Toggle navigation menu">
            {mobileOpen ? <X size={24} className="text-concord-dark" /> : <List size={24} className="text-concord-dark" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-0 z-[999] bg-white pt-[72px] overflow-y-auto lg:hidden ${mobileOpen ? 'open' : ''}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          <Link to="/the-concord-standard" className="text-lg font-heading font-bold text-concord-dark">The Concord Standard</Link>

          {dropdowns.map((dropdown) => (
            <div key={dropdown.label}>
              <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-concord-green mb-3">{dropdown.label}</p>
              <div className="flex flex-col gap-2 pl-4">
                {dropdown.items.map((item) => (
                  <Link key={item.href} to={item.href} className="text-[15px] text-slate-600 hover:text-concord-green">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t border-black/[0.06]">
            <Link to="/contact" className="text-center text-[14px] font-bold text-concord-dark border border-concord-dark/20 rounded-full px-6 py-3">
              Contact
            </Link>
            <Link to="/start-the-conversation" className="text-center text-[14px] font-bold text-white bg-[#151C19] rounded-full px-6 py-3">
              Start the Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
