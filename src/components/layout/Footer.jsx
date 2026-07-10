import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkedinLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-concord-dark relative">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-[80px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-5">
              <img src="/assets/concord-logo.svg" alt="Concord Energy Strategies" width="120" height="32" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[14px] text-white/50 leading-relaxed mb-6">Compliance-driven tax incentive experts helping organizations maximize clean energy savings.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/283486" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-concord-green hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinLogo size={18} weight="bold" />
              </a>
              <a href="https://www.instagram.com/concordenergystrategies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-concord-green hover:text-white transition-colors" aria-label="Instagram">
                <InstagramLogo size={18} weight="bold" />
              </a>
              <a href="https://www.youtube.com/@Concordenergystrategies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-concord-green hover:text-white transition-colors" aria-label="YouTube">
                <YoutubeLogo size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Incentives */}
          <div>
            <p className="font-heading font-bold text-[14px] uppercase tracking-[0.1em] text-white/40 mb-5">Incentives</p>
            <ul className="flex flex-col gap-3">
              <li><Link to="/179d-tax-deduction" className="text-[14px] text-white/60 hover:text-white transition-colors">179D Tax Deduction</Link></li>
              <li><Link to="/prevailing-wage-apprenticeship" className="text-[14px] text-white/60 hover:text-white transition-colors">PWA Compliance</Link></li>
              <li><Link to="/direct-pay" className="text-[14px] text-white/60 hover:text-white transition-colors">Direct Pay (6417)</Link></li>
              <li><Link to="/transferable-tax-credits" className="text-[14px] text-white/60 hover:text-white transition-colors">Transferable Credits (6418)</Link></li>
              <li><Link to="/rd-tax-credits" className="text-[14px] text-white/60 hover:text-white transition-colors">R&D Tax Credits</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="font-heading font-bold text-[14px] uppercase tracking-[0.1em] text-white/40 mb-5">About</p>
            <ul className="flex flex-col gap-3">
              <li><Link to="/why-us" className="text-[14px] text-white/60 hover:text-white transition-colors">Why Us</Link></li>
              <li><Link to="/who-we-are" className="text-[14px] text-white/60 hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/the-concord-standard" className="text-[14px] text-white/60 hover:text-white transition-colors">The Concord Standard</Link></li>
              <li><Link to="/client-charter" className="text-[14px] text-white/60 hover:text-white transition-colors">Client Charter</Link></li>
              <li><Link to="/careers" className="text-[14px] text-white/60 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <p className="font-heading font-bold text-[14px] uppercase tracking-[0.1em] text-white/40 mb-5">Insights</p>
            <ul className="flex flex-col gap-3">
              <li><Link to="/resources?content=News" className="text-[14px] text-white/60 hover:text-white transition-colors">News & Articles</Link></li>
              <li><Link to="/resources?content=Case+Studies" className="text-[14px] text-white/60 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/whitepaper" className="text-[14px] text-white/60 hover:text-white transition-colors">Whitepapers</Link></li>
              <li><Link to="/resources?content=Deadlines" className="text-[14px] text-white/60 hover:text-white transition-colors">Deadlines</Link></li>
              <li><Link to="/contact" className="text-[14px] text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-bold text-[16px] text-white mb-1">Stay informed on incentive updates</p>
              <p className="text-[14px] text-white/50">Get the latest clean energy tax news delivered to your inbox.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-concord-mint text-concord-dark placeholder:text-slate-400 rounded-full px-6 py-3 text-[14px] w-full md:w-[280px] outline-none focus:ring-2 focus:ring-concord-green"
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="rounded-full bg-white text-[#151C19] px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-[40px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/40">&copy; 2026 Concord Energy Strategies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-[13px] text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-[13px] text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
