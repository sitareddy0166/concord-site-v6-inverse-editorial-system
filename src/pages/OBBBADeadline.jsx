import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  SealCheck,
  WarningCircle,
  Warning,
  Buildings,
  HandCoins,
  HardHat,
  Swap,
  Flask,
  CheckCircle,
  Plus,
  CaretDown,
  CalendarBlank,
  CaretRight,
} from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import CountdownTimer from '@/components/ui/CountdownTimer';
import StickyNav from '@/components/layout/StickyNav';
import InlineCTA from '@/components/sections/InlineCTA';
import CTABanner from '@/components/sections/CTABanner';

const rawDeadlines = [
  {
    iso: '2026-03-15',
    date: 'March 15, 2026',
    incentiveType: 'R&D Tax Credits, Section 174',
    description: 'TY2022 Partnerships & S-Corps: 3-year statute of limitations expires',
    action: 'Last day to file amended returns for retroactive R&D credits and Section 174A elections',
  },
  {
    iso: '2026-04-15',
    date: 'April 15, 2026',
    incentiveType: 'R&D Tax Credits, Section 174',
    description: 'TY2022 C-Corps: 3-year statute of limitations expires',
    action: 'Last day to file amended C-Corp returns for R&D credits and 174A elections',
  },
  {
    iso: '2026-06-30',
    date: 'June 30, 2026',
    incentiveType: '179D Deduction, PWA Compliance',
    description: '179D: Begin-construction cutoff for enhanced IRA rates',
    action: 'Projects that began construction before this date locked in enhanced rates. Document begin-of-construction evidence now (Physical Work Test or 5% Safe Harbor, IRS Notice 2022-61).',
  },
  {
    iso: '2026-07-06',
    date: 'July 6, 2026',
    incentiveType: 'All Incentives, OBBBA Elections',
    description: 'OBBBA Election Cutoff (or standard 3-year claim deadline, whichever is earlier)',
    action: 'Finalize all OBBBA elections by this date',
  },
  {
    iso: '2026-09-15',
    date: 'September 15, 2026',
    incentiveType: 'R&D Tax Credits',
    description: 'TY2022 Extended Partnerships & S-Corps: statute of limitations expires',
    action: 'File amended returns for extended filers',
  },
  {
    iso: '2026-10-15',
    date: 'October 15, 2026',
    incentiveType: 'R&D Tax Credits',
    description: 'TY2022 Extended C-Corps: statute of limitations expires',
    action: 'File amended returns for extended C-Corp filers',
  },
  {
    iso: '2027-03-15',
    date: 'March 15, 2027',
    incentiveType: 'R&D Tax Credits',
    description: 'TY2023 Partnerships & S-Corps: statute of limitations expires',
    action: 'File amended returns for TY2023',
  },
  {
    iso: '2027-04-15',
    date: 'April 15, 2027',
    incentiveType: 'R&D Tax Credits',
    description: 'TY2023 C-Corps: statute of limitations expires',
    action: 'File amended returns for TY2023 C-Corps',
  },
  {
    iso: '2028-03-15',
    date: 'March 15, 2028',
    incentiveType: 'R&D Tax Credits',
    description: 'TY2024 Partnerships & S-Corps: statute of limitations expires',
    action: 'File amended returns for TY2024',
  },
  {
    iso: '2028-04-15',
    date: 'April 15, 2028',
    incentiveType: 'R&D Tax Credits',
    description: 'TY2024 C-Corps: statute of limitations expires',
    action: 'File amended returns for TY2024 C-Corps',
  },
];

const DAY_MS = 24 * 60 * 60 * 1000;

function computeDeadlineStatus(iso, now = new Date()) {
  const target = new Date(iso + 'T23:59:59');
  const diffDays = Math.ceil((target.getTime() - now.getTime()) / DAY_MS);
  if (diffDays < 0) {
    return { key: 'passed', urgency: 'Passed', urgencyColor: 'passed' };
  }
  if (diffDays <= 30) {
    return { key: 'urgent', urgency: 'Urgent', urgencyColor: 'red' };
  }
  if (diffDays <= 120) {
    return { key: 'upcoming', urgency: 'Upcoming', urgencyColor: 'amber' };
  }
  return { key: 'future', urgency: 'Future', urgencyColor: 'slate' };
}

function getComputedDeadlines(now = new Date()) {
  return rawDeadlines.map((d) => ({ ...d, ...computeDeadlineStatus(d.iso, now) }));
}


const impactCards = [
  {
    icon: Buildings,
    title: '179D Tax Deduction',
    urgency: 'High',
    urgencyColor: 'red',
    summary: 'Document begin-of-construction evidence for projects that started before June 30, 2026',
    changing: [
      'Projects that began construction before June 30, 2026 locked in enhanced IRA rates up to $5.94 per square foot with PWA',
      'IRS Notice 2022-61 recognizes the Physical Work Test and the 5% Safe Harbor as begin-of-construction methods',
      'Documentation gaps put enhanced rates at risk under IRS examination',
      'Later projects remain eligible under current law; the applicable rate structure depends on begin-of-construction facts',
    ],
    actions: [
      'Document begin-of-construction evidence now (Physical Work Test or 5% Safe Harbor)',
      'Complete energy modeling and certification for qualifying projects',
      'File 179D claims for current and prior tax years',
      'Secure allocation letters for government/tax-exempt projects',
    ],
    link: '/179d-tax-deduction',
    linkText: 'Check Your 179D Eligibility',
  },
  {
    icon: HandCoins,
    title: 'Direct Pay Elections',
    urgency: 'High',
    urgencyColor: 'red',
    summary: 'Tax-exempt entity elections may be modified or phased out',
    changing: [
      'Direct pay for tax-exempt entities may be modified or phased out',
      'IRS pre-filing registration required before elections',
      'Elections must be on timely filed returns',
      'Unregistered organizations risk losing refundable payments',
    ],
    actions: [
      'Complete IRS pre-filing registration immediately',
      'File direct pay elections on original, timely filed returns',
      'Complete compliance documentation for all applicable credits',
      'Engage Concord for expedited registration and elections',
    ],
    link: '/direct-pay',
    linkText: 'Explore Direct Pay',
  },
  {
    icon: HardHat,
    title: 'PWA Compliance',
    urgency: 'Medium',
    urgencyColor: 'amber',
    summary: 'Penalties up to $5,000/worker for non-compliance',
    changing: [
      'PWA required for 5x enhanced rates on 179D, ITC, PTC, 45Q, 45V, 45X',
      'Penalties: up to $5,000/worker ($10,000 for intentional disregard)',
      'Apprenticeship thresholds must be documented through recapture period',
      'Recordkeeping standards may change under new frameworks',
    ],
    actions: [
      'Ensure all project documentation is audit-ready',
      'Verify PWA tracking is current in the Concord Caisson platform',
      'Confirm wage rate determinations and apprenticeship registrations',
      'Strengthen compliance posture before potential rule changes',
    ],
    link: '/prevailing-wage-apprenticeship',
    linkText: 'Protect Your Credits',
  },
  {
    icon: Swap,
    title: 'Transferable Tax Credits',
    urgency: 'High',
    urgencyColor: 'red',
    summary: 'Marketplace rules and transaction structures may shift',
    changing: [
      'Marketplace may face new rules under OBBBA',
      'Credits must be substantiated before rule changes',
      'IRS pre-filing registration required for sellers and buyers',
      'Pricing and transaction structures may shift',
    ],
    actions: [
      'Bring current credits to market before July 6, 2026 cutoff',
      'Finalize pending transactions before any rule changes',
      'Complete IRS pre-filing registration for all transfer credits',
      'Secure compliance and due diligence materials',
    ],
    link: '/transferable-tax-credits',
    linkText: 'Enter the Market',
  },
  {
    icon: Flask,
    title: 'R&D Tax Credits & Section 174',
    urgency: 'High',
    urgencyColor: 'red',
    summary: 'Section 174 amortization repealed; retroactive elections available',
    changing: [
      'Section 174 amortization repealed; retroactive 174A expensing available',
      'Small businesses ($31M or less) can elect for 2022-2024',
      'Federal credit rate: 6-8% of QREs, plus 5-30% state credits',
      'Foreign R&D expenses remain subject to 15-year amortization',
    ],
    actions: [
      'File TY2022 amended returns now (March 15 for S-Corps, April 15 for C-Corps)',
      'Pursue retroactive Section 174A elections for 2022-2024',
      'Evaluate startup payroll tax offset eligibility (statutory cap applies)',
      'Begin R&D study now (4-8 weeks) to meet filing deadlines',
    ],
    link: '/rd-tax-credits',
    linkText: 'Explore R&D Credits',
  },
];

const faqs = [
  {
    question: 'What is the One Big Beautiful Bill Act?',
    answer:
      'The OBBBA (Public Law 119-21) was signed into law on July 4, 2025. It modifies several clean energy tax incentives, introduces construction start deadlines for enhanced IRA rates, repeals Section 174 amortization, and creates new election windows for retroactive R&D credits.',
  },
  {
    question: 'What are the most urgent deadlines?',
    answer:
      'March 15, 2026 for TY2022 Partnerships and S-Corps, and April 15, 2026 for TY2022 C-Corps. These are the last days to file amended returns for retroactive R&D credits and Section 174A elections before the 3-year statute of limitations expires.',
  },
  {
    question: 'What is the Section 174A election?',
    answer:
      'Section 174A allows small businesses (gross receipts of $31M or less) to elect to expense domestic R&D costs immediately rather than amortize them over 5 years. This election is available retroactively for tax years 2022, 2023, and 2024.',
  },
  {
    question: 'How does the OBBBA affect 179D?',
    answer:
      'The OBBBA set June 30, 2026 as the begin-construction cutoff for locking in enhanced IRA rates on 179D projects. Projects that began construction before that date locked in enhanced rates up to $5.94 per square foot with PWA. Later projects remain eligible; contact Concord to confirm which rate structure applies to your project.',
  },
  {
    question: 'What is the begin-construction safe harbor for 179D?',
    answer:
      'IRS Notice 2022-61 recognizes two ways to establish begin-of-construction: the Physical Work Test (physical work of a significant nature) and the 5% Safe Harbor (spending at least 5% of total facility costs). If your project qualifies, document the evidence now so it withstands IRS examination.',
  },
  {
    question: 'How are Direct Pay elections affected?',
    answer:
      'Direct pay elections for tax-exempt entities may be modified or phased out under the OBBBA. Organizations must complete IRS pre-filing registration and file elections on original, timely filed returns to preserve eligibility.',
  },
  {
    question: 'What happens to Transferable Tax Credits?',
    answer:
      'The transferable credits marketplace may face new rules. Credits should be brought to market before the July 6, 2026 OBBBA election cutoff. IRS pre-filing registration is required for both sellers and buyers.',
  },
  {
    question: 'How much can I recover through retroactive R&D credits?',
    answer:
      'Federal R&D credit rates range from 6-8% of qualified research expenditures. Additionally, approximately 40 states offer R&D credits ranging from 5-30%. Recovery amounts vary by qualifying expenditure volume and tax year; Concord can size the opportunity for your specific facts.',
  },
  {
    question: 'What are the PWA compliance risks?',
    answer:
      'Non-compliance with prevailing wage and apprenticeship requirements carries penalties of up to $5,000 per worker ($10,000 for intentional disregard). The OBBBA may introduce additional recordkeeping and documentation standards.',
  },
  {
    question: 'How can Concord help with OBBBA compliance?',
    answer:
      'Concord provides end-to-end support: R&D credit studies (4-8 weeks), 179D energy modeling and certification, direct pay registration, transferable credit transactions, and PWA compliance monitoring through our Caisson platform. Contact us to discuss your specific deadlines.',
  },
];

const timelineSteps = [
  { num: 1, phase: 'Immediate', title: 'File TY2022 Returns', text: 'Amended returns for R&D credits and 174A elections', colorClass: 'bg-concord-green' },
  { num: 2, phase: 'Now', title: 'Document 179D Projects', text: 'Begin-of-construction evidence for projects that started before June 30, 2026', colorClass: 'bg-concord-green' },
  { num: 3, phase: 'Before July 6, 2026', title: 'Complete Elections', text: 'Direct pay and transferable credit IRS registrations', colorClass: 'bg-amber-500' },
  { num: 4, phase: 'By July 6, 2026', title: 'OBBBA Cutoff', text: 'All OBBBA elections finalized by this date', colorClass: 'bg-amber-500' },
  { num: 5, phase: 'Ongoing', title: 'Monitor & Defend', text: 'TY2023-2024 deadlines and PWA documentation', colorClass: 'bg-concord-coral' },
];

const phaseColorMap = {
  'Immediate': 'text-concord-green',
  'Now': 'text-concord-green',
  'Before July 6, 2026': 'text-amber-600',
  'By July 6, 2026': 'text-amber-600',
  'Ongoing': 'text-concord-coral',
};

const urgencyBadge = (urgency, color) => {
  const styles = {
    red: 'bg-red-100 text-red-700',
    amber: 'bg-amber-100 text-amber-700',
    slate: 'bg-slate-100 text-slate-600',
    passed: 'bg-slate-200 text-slate-500',
  };
  return (
    <span className={`${styles[color]} text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
      {urgency}
    </span>
  );
};

const borderColorMap = { red: 'border-red-500', amber: 'border-amber-500', slate: 'border-slate-300', passed: 'border-slate-200' };

const stickyNavItems = [
  { label: 'Deadline Tracker', href: '#deadlines' },
  { label: 'OBBBA Impact', href: '#impact' },
  { label: 'Protect Your Incentives', href: '#protect' },
  { label: '179D Rates', href: '#rates' },
  { label: 'FAQ', href: '#faq' },
];

export default function OBBBADeadline() {
  const [openImpact, setOpenImpact] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const deadlines = getComputedDeadlines();
  const nearestUrgent = deadlines.find((d) => d.key === 'urgent');
  const nearestUpcoming = deadlines.find((d) => d.key === 'upcoming');

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'OBBBA Deadlines' },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SEOHead
        title="OBBBA Deadlines 2026: Tracker and Action Plan | Concord"
        description="Track OBBBA 2026 deadlines for 179D, R&D credits, Section 174A, direct pay, and transferable credits. $1B+ in client savings and 100% audit success rate."
        canonical="/obbba-deadline"
      />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      {/* ========== BREADCRUMBS ========== */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 font-body">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-concord-green transition-colors">Home</Link></li>
            <li><CaretRight size={12} /></li>
            <li><Link to="/resources" className="hover:text-concord-green transition-colors">Resources</Link></li>
            <li><CaretRight size={12} /></li>
            <li className="text-concord-dark font-semibold">OBBBA Deadlines</li>
          </ol>
        </nav>
      </div>

      {/* ========== HERO ========== */}
      <section className="bg-white py-[32px] lg:py-[48px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollFadeIn>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
                  <SealCheck size={16} className="text-amber-600" />
                  <span className="text-amber-700 text-[13px] font-bold">
                    Signed Into Law July 4, 2025
                  </span>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn delay={100}>
                <h1 className="font-heading font-extrabold text-[36px] lg:text-[52px] tracking-tight leading-[1.1] text-concord-dark mb-3 text-balance">
                  The One Big Beautiful Bill Act: Critical Deadlines.
                </h1>
                <p className="text-[12px] uppercase tracking-[0.15em] font-bold text-concord-green mb-6">Last Updated: July 2026</p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={200}>
                <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed mb-10 max-w-[540px]">
                  The OBBBA is now law and OBBBA statutory deadlines are approaching. The OBBBA
                  election cutoff for retroactive R&amp;D claims is July 6, 2026. File retroactive
                  R&amp;D credit claims and Section 174A elections before the statute of limitations
                  expires.
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#151C19] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                  >
                    Start the Conversation <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#deadlines"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-concord-dark/20 text-concord-dark px-8 py-4 rounded-full text-[15px] font-bold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                  >
                    View Critical Deadlines
                  </a>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Hero - Countdown to nearest deadline */}
            <div className="hidden lg:flex flex-col gap-4">
              <CountdownTimer
                deadlines={[
                  { date: '2026-07-06T23:59:59', label: 'OBBBA Election Cutoff' },
                  { date: '2026-09-15T23:59:59', label: 'Extended Returns: Partnerships and S-Corps' },
                  { date: '2026-10-15T23:59:59', label: 'Extended Returns: C-Corps' },
                  { date: '2027-03-15T23:59:59', label: 'TY2023 Filing: Partnerships and S-Corps' },
                  { date: '2027-04-15T23:59:59', label: 'TY2023 Filing: C-Corps' },
                ]}
              />
              <div className="bg-concord-cream rounded-[24px] p-5 flex items-center gap-4 border border-black/[0.06]">
                <WarningCircle size={20} className="text-red-500 shrink-0" />
                <p className="text-[14px] text-slate-600">
                  <strong className="text-concord-dark">OBBBA statutory deadlines are approaching.</strong> Confirm which filing windows apply to your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== URGENCY BANNERS (computed) ========== */}
      {(nearestUrgent || nearestUpcoming) && (
        <section className="bg-concord-cream">
          <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-4">
            {nearestUrgent && (
              <ScrollFadeIn>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 flex items-start gap-4">
                  <WarningCircle size={24} className="text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-bold text-red-700 mb-1">
                      URGENT: {nearestUrgent.date}: {nearestUrgent.incentiveType}
                    </p>
                    <p className="text-[14px] text-slate-700">
                      {nearestUrgent.description}. {nearestUrgent.action}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            )}
            {nearestUpcoming && (
              <ScrollFadeIn delay={100}>
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 flex items-start gap-4">
                  <Warning size={24} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-bold text-amber-700 mb-1">
                      UPCOMING: {nearestUpcoming.date}: {nearestUpcoming.incentiveType}
                    </p>
                    <p className="text-[14px] text-slate-700">
                      {nearestUpcoming.description}. {nearestUpcoming.action}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            )}
          </div>
        </section>
      )}

      {/* ========== KEY STATS ========== */}
      <section className="bg-white py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'July 4, 2025', label: 'OBBBA signed into law' },
              { value: '$5.94/sq ft', label: 'Max 179D deduction with PWA' },
              { value: '5x', label: 'PWA multiplier on enhanced rates' },
              { value: 'July 6, 2026', label: 'OBBBA election cutoff for retroactive R&D claims' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-hover bg-concord-cream rounded-[24px] border border-black/[0.06] p-6 text-center"
              >
                <p className="font-heading font-extrabold text-[28px] text-concord-dark mb-1">
                  {stat.value}
                </p>
                <p className="text-[14px] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== STICKY SECTION NAV (reuse shared component) ========== */}
      <StickyNav items={stickyNavItems} />

      {/* ========== CRITICAL DEADLINES TABLE ========== */}
      <section id="deadlines" className="bg-white py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-concord-green font-bold text-[13px] uppercase tracking-[0.15em] mb-3">
              Critical Dates
            </p>
            <h2 className="font-heading font-extrabold text-[32px] md:text-[40px] text-concord-dark mb-4">
              OBBBA Deadline Tracker
            </h2>
            <p className="text-slate-500 text-[16px] max-w-2xl mx-auto">
              Every deadline that matters for your tax incentives, color-coded by urgency.
            </p>
          </ScrollFadeIn>

          {/* Desktop Table - redesigned */}
          <ScrollFadeIn className="hidden lg:block">
            <div className="flex flex-col gap-3">
              {deadlines.map((d, i) => {
                const urgencyStyles = {
                  red: { border: 'border-l-red-500', dot: 'bg-red-500', bg: 'bg-red-50/40', text: 'text-concord-dark' },
                  amber: { border: 'border-l-amber-500', dot: 'bg-amber-500', bg: 'bg-amber-50/40', text: 'text-concord-dark' },
                  slate: { border: 'border-l-slate-300', dot: 'bg-slate-400', bg: 'bg-slate-50/40', text: 'text-concord-dark' },
                  passed: { border: 'border-l-slate-200', dot: 'bg-slate-300', bg: 'bg-slate-50/60', text: 'text-slate-400' },
                };
                const s = urgencyStyles[d.urgencyColor];
                return (
                  <div
                    key={i}
                    className={`${s.bg} rounded-2xl border border-black/[0.06] border-l-4 ${s.border} p-6 hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-[140px]">
                        <div className="flex items-center gap-2 mb-1">
                          <CalendarBlank size={16} className="text-slate-400" />
                          <span className={`font-heading font-bold text-[15px] ${s.text}`}>{d.date}</span>
                        </div>
                        {urgencyBadge(d.urgency, d.urgencyColor)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-[13px] uppercase tracking-wider mb-1 ${d.urgencyColor === 'passed' ? 'text-slate-400' : 'text-concord-green'}`}>{d.incentiveType}</p>
                        <p className={`text-[15px] font-medium mb-1 ${s.text}`}>{d.description}</p>
                        <p className={`text-[14px] ${d.urgencyColor === 'passed' ? 'text-slate-400' : 'text-slate-500'}`}>{d.action}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollFadeIn>

          {/* Mobile Cards */}
          <ScrollFadeIn className="lg:hidden flex flex-col gap-4">
            {deadlines.map((d, i) => (
              <div
                key={i}
                className={`card-hover bg-white rounded-[24px] border border-black/[0.06] shadow p-5 border-l-4 ${borderColorMap[d.urgencyColor]}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-[15px]">{d.date}</span>
                  {urgencyBadge(d.urgency, d.urgencyColor)}
                </div>
                <p className="text-[13px] text-concord-green font-bold mb-1">{d.incentiveType}</p>
                <p className="text-[14px] text-slate-600 mb-2">{d.description}</p>
                {d.action && <p className="text-[13px] text-slate-500">{d.action}</p>}
              </div>
            ))}
          </ScrollFadeIn>
        </div>
      </section>

      <InlineCTA
        headline="Don't Let Your Deadlines Expire"
        buttonText="Check Your Filing Status"
        buttonHref="/contact"
      />

      {/* ========== IMPACT ANALYSIS ========== */}
      <section id="impact" className="bg-concord-cream py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-concord-green font-bold text-[13px] uppercase tracking-[0.15em] mb-3">
              Impact Analysis
            </p>
            <h2 className="font-heading font-extrabold text-[32px] md:text-[40px] text-concord-dark mb-4">
              How the OBBBA Impacts Your Incentives
            </h2>
            <p className="text-slate-500 text-[16px] max-w-2xl mx-auto">
              Understand what is changing and what you need to do for each incentive program.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn className="flex flex-col gap-4">
            {impactCards.map((card, i) => {
              const Icon = card.icon;
              const isOpen = openImpact === i;
              return (
                <div key={i} className="card-hover bg-white rounded-[24px] border border-black/[0.06] overflow-hidden">
                  <button
                    onClick={() => setOpenImpact(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-6 hover:bg-concord-mint transition-colors text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-concord-green/20 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-concord-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading font-bold text-[18px] text-concord-dark">{card.title}</h3>
                        {urgencyBadge(card.urgency, card.urgencyColor)}
                      </div>
                      <p className="text-slate-500 text-[14px]">{card.summary}</p>
                    </div>
                    <Plus
                      size={20}
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-black/[0.06] pt-6 mb-6" />
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-heading font-bold text-red-500 text-[14px] mb-3">What&apos;s Changing</h4>
                          <ul className="flex flex-col gap-2">
                            {card.changing.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-[14px] text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-concord-green text-[14px] mb-3">What You Need to Do</h4>
                          <ul className="flex flex-col gap-2">
                            {card.actions.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-[14px] text-slate-600">
                                <CheckCircle size={16} className="text-concord-green mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link
                        to={card.link}
                        className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
                      >
                        {card.linkText} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollFadeIn>
        </div>
      </section>

      <CTABanner
        headline="Understand Your OBBBA Exposure"
        description="Our team will analyze which incentive programs are affected and build a compliance roadmap tailored to your organization."
        buttonText="Request an Impact Assessment"
        buttonHref="/contact"
        variant="dark"
      />

      {/* ========== TIMELINE ========== */}
      <section id="protect" className="bg-white py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-concord-green font-bold text-[13px] uppercase tracking-[0.15em] mb-3">
              Action Plan
            </p>
            <h2 className="font-heading font-extrabold text-[32px] md:text-[40px] text-concord-dark mb-4">
              Protect Your Incentives Timeline
            </h2>
            <p className="text-slate-500 text-[16px] max-w-2xl mx-auto">
              Five critical steps to secure your tax incentives before OBBBA deadlines close.
            </p>
          </ScrollFadeIn>

          {/* Desktop horizontal timeline */}
          <ScrollFadeIn className="hidden lg:block relative">
            <div className="absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-concord-green to-concord-coral" />
            <div className="grid grid-cols-5 gap-4 relative">
              {timelineSteps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className={`w-10 h-10 rounded-full ${step.colorClass} text-white font-bold flex items-center justify-center mx-auto mb-4 relative z-10 text-[14px]`}>
                    {step.num}
                  </div>
                  <p className={`font-heading font-bold ${phaseColorMap[step.phase]} text-[13px] uppercase tracking-wider mb-2`}>
                    {step.phase}
                  </p>
                  <h4 className="font-heading font-bold text-[15px] text-concord-dark mb-2">{step.title}</h4>
                  <p className="text-[13px] text-slate-500">{step.text}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          {/* Mobile vertical timeline */}
          <ScrollFadeIn className="lg:hidden relative pl-8">
            <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-gradient-to-b from-concord-green to-concord-coral" />
            <div className="flex flex-col gap-8">
              {timelineSteps.map((step) => (
                <div key={step.num} className="relative">
                  <div className={`absolute -left-8 w-10 h-10 rounded-full ${step.colorClass} text-white font-bold flex items-center justify-center text-[14px]`}>
                    {step.num}
                  </div>
                  <div className="ml-6">
                    <p className={`font-heading font-bold ${phaseColorMap[step.phase]} text-[13px] uppercase tracking-wider mb-1`}>
                      {step.phase}
                    </p>
                    <h4 className="font-heading font-bold text-[15px] text-concord-dark mb-1">{step.title}</h4>
                    <p className="text-[13px] text-slate-500">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <InlineCTA
        headline="Need Help Meeting These Deadlines?"
        buttonText="Talk to a Specialist"
        buttonHref="/contact"
      />

      {/* ========== 179D RATES ========== */}
      <section id="rates" className="bg-concord-cream py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <p className="text-concord-green font-bold text-[13px] uppercase tracking-[0.15em] mb-3">
              Deduction Rates
            </p>
            <h2 className="font-heading font-extrabold text-[32px] md:text-[40px] text-concord-dark mb-4">
              2026 179D Deduction Rates
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow overflow-hidden">
                <thead>
                  <tr className="bg-[#151C19] text-white text-left">
                    <th className="px-6 py-4 font-heading font-bold text-[13px] uppercase tracking-wider">Energy Savings Level</th>
                    <th className="px-6 py-4 font-heading font-bold text-[13px] uppercase tracking-wider">Base Rate</th>
                    <th className="px-6 py-4 font-heading font-bold text-[13px] uppercase tracking-wider">PWA Bonus Rate (5x)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-4 text-[14px] font-medium">Minimum (25% savings)</td>
                    <td className="px-6 py-4 text-[14px]">$0.59/sq ft</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-concord-green">$2.97/sq ft</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-[14px] font-medium">Maximum (50% savings)</td>
                    <td className="px-6 py-4 text-[14px]">$1.19/sq ft</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-concord-green">$5.94/sq ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-slate-500 mt-4 leading-relaxed">
              Projects that began construction before June 30, 2026 locked in enhanced IRA rates up
              to $5.94 per square foot with PWA. Under IRS Notice 2022-61, begin-of-construction is
              established via the Physical Work Test or the 5% Safe Harbor (spending at least 5% of
              total facility costs). PWA non-compliance penalties: up to $5,000/worker ($10,000 for
              intentional disregard).
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="bg-white py-[70px] lg:py-[90px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollFadeIn>
            <div className="grid lg:grid-cols-[40%_60%] gap-12">
              <div>
                <span className="text-concord-green font-bold text-[13px] uppercase tracking-[0.15em] mb-3 block">
                  FAQ
                </span>
                <h2 className="font-heading font-extrabold text-[32px] md:text-[40px] text-concord-dark mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-500 text-[16px] leading-relaxed">
                  Get answers to common questions about the OBBBA, critical deadlines, and how to
                  protect your tax incentives.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-concord-cream rounded-2xl shadow">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-heading font-bold text-[16px] text-concord-dark pr-4">
                        {faq.question}
                      </span>
                      <CaretDown
                        size={16}
                        className={`text-concord-green shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-6 pb-6 text-[15px] text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <CTABanner
        headline="Tax Year 2022 Deadlines Are Imminent"
        description="Don't let the statute of limitations expire on your R&D credits and Section 174A elections. Act now."
        buttonText="Start the Conversation"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
