import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MagnifyingGlass } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema } from '@/utils/seo';
import AboutPageShell, { AboutBreadcrumb, AboutHero, ChapterHeader, ChapterHeaderInk, AboutCTA } from '@/components/about/AboutPageShell';

const whyItems = [
  { code: 'W/01', title: 'Mission-Driven Work',  body: 'Every project accelerates the clean energy transition. Your work directly helps organizations capture incentives that fund sustainable building practices.' },
  { code: 'W/02', title: 'Growth & Development', body: 'Dedicated learning budgets, mentorship programs, and clear career pathways ensure you are always advancing your expertise and leadership skills.' },
  { code: 'W/03', title: 'Competitive Benefits', body: 'Top-tier compensation, comprehensive health coverage, generous PTO, and a 401(k) match that reflects how much we value our team.' },
  { code: 'W/04', title: 'Collaborative Culture', body: 'Engineers, consultants, and strategists work side by side. We celebrate diverse perspectives and believe the best ideas come from open collaboration.' },
];

const values = [
  { title: 'Integrity First',            body: 'We do the right thing, even when no one is watching. Our compliance-driven approach means every recommendation is backed by rigorous analysis.' },
  { title: 'Continuous Learning',        body: 'Tax policy evolves constantly. We stay ahead through ongoing education, industry conferences, and knowledge-sharing across teams.' },
  { title: 'Client-Centered Excellence', body: 'We measure our success by our clients\' outcomes. Every team member is empowered to go the extra mile to deliver exceptional results.' },
];

const jobs = [
  { id: 1, category: 'consulting',  catLabel: 'Consulting',  title: 'Senior Tax Incentive Consultant', location: 'Remote',           body: 'Lead complex 179D, PWA, and Direct Pay engagements for Fortune 500 clients. Develop tax incentive strategies and ensure compliance across multi-site portfolios.' },
  { id: 2, category: 'engineering', catLabel: 'Engineering', title: 'Energy Engineer',                 location: 'Louisville, KY',    body: 'Perform energy modeling, building assessments, and 179D certifications. Work with architects and building owners to maximize energy efficiency tax deductions.' },
  { id: 3, category: 'operations',  catLabel: 'Operations',  title: 'Client Success Manager',          location: 'Remote',           body: 'Own the client experience from onboarding through ongoing engagement. Coordinate cross-functional teams to deliver tax incentive results on time and on budget.' },
  { id: 4, category: 'marketing',   catLabel: 'Marketing',   title: 'Marketing Director',              location: 'Remote',      body: 'Lead brand strategy, content marketing, and demand generation for a fast-growing clean energy consulting firm. Drive awareness and pipeline growth across channels.' },
  { id: 5, category: 'consulting',  catLabel: 'Consulting',  title: 'PWA Compliance Specialist',       location: 'Louisville, KY',    body: 'Ensure prevailing wage and apprenticeship compliance across client projects. Develop documentation frameworks and conduct compliance audits for clean energy builds.' },
  { id: 6, category: 'engineering', catLabel: 'Engineering', title: 'Full Stack Developer',            location: 'Remote',           body: 'Build and maintain internal tools and client-facing platforms that power tax incentive analysis, compliance tracking, and reporting dashboards.' },
];

const benefits = [
  ['Health & Dental',            'Premium medical, dental, and vision coverage'],
  ['401(k) Match',               'Generous employer match to grow your retirement'],
  ['Unlimited PTO',              'Flexible time off to recharge and reset'],
  ['Remote Flexibility',         'Work from anywhere with hybrid options'],
  ['Professional Development',   'Annual learning budgets and conference stipends'],
  ['Parental Leave',             'Generous paid leave for new parents'],
  ['Wellness Stipend',           'Monthly stipend for gym, wellness, and self-care'],
  ['Annual Retreat',             'Company-wide team building in inspiring locations'],
];

const process = [
  { num: '01', title: 'Apply Online',        body: 'Submit your resume and cover letter through our application portal. We review every application carefully and respond within one week.' },
  { num: '02', title: 'Phone Screen',        body: 'A 30-minute call with our People team to discuss your background, interests, and how you would contribute to Concord\'s mission.' },
  { num: '03', title: 'Team Interview',      body: 'Meet with your future team leads for a deeper dive into your skills, experience, and culture fit. We want you to learn about us too.' },
  { num: '04', title: 'Offer & Onboarding',  body: 'Receive a competitive offer and join the Concord team. Our structured onboarding ensures you are set up for success from day one.' },
];

const filters = [
  { key: 'all',         label: 'All Roles' },
  { key: 'consulting',  label: 'Consulting' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'operations',  label: 'Operations' },
  { key: 'marketing',   label: 'Marketing' },
];

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? jobs : jobs.filter((j) => j.category === activeFilter);

  return (
    <AboutPageShell>
      <SEOHead title="Careers | Concord Energy Strategies"
        description="Join Concord Energy Strategies. Explore open roles in consulting, engineering, operations, and marketing at a firm with $1B+ in client savings secured."
        canonical="/careers" />
      <SchemaScript schema={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Careers', url: '/careers' }])} />

      <AboutBreadcrumb current="Careers" />
      <AboutHero
        code="A/05 · CAREERS"
        eyebrow="We are hiring"
        title={<>Join our <em className="italic font-light">team.</em></>}
        lede="Help shape the future of clean energy tax incentives. Build your career at a firm where compliance, innovation, and sustainability converge."
        primaryCta={{ label: 'View Open Roles', href: '#positions' }}
        secondaryCta={{ label: 'Why Concord', href: '/why-us' }}
        meta={[
          { label: 'Open roles', value: `${jobs.length}` },
          { label: 'Locations', value: 'Louisville, KY and Remote' },
          { label: 'Practice', value: 'Clean energy tax' },
        ]}
      />

      {/* Why work here */}
      <section className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section I · Why Concord" title="Why work here."
            lede={<>We offer more than a job. We offer the chance to make a measurable impact on the clean energy transition. Discover <Link to="/why-us" className="ed-link" style={{ color: 'rgb(var(--concord))' }}>why organizations choose Concord</Link>.</>} />
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-[rgb(var(--ink))/0.15]">
            {whyItems.map((w) => (
              <li key={w.code} className="p-6 border-b lg:border-b-0 border-[rgb(var(--ink))/0.12] lg:[&:not(:last-child)]:border-r">
                <p className="index-num" style={{ color: 'rgba(8,12,10,0.55)' }}>{w.code}</p>
                <h3 className="mt-4 font-[Fraunces] text-[20px]" style={{ color: 'rgb(var(--ink))' }}>{w.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[rgb(var(--ink))/0.72]">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Culture & values */}
      <section className="surface-ink band">
        <div className="arch grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <ChapterHeader chapter="Section II · Our Culture" title="Built on values, driven by impact."
              lede={<>At Concord, we have built a culture where technical excellence meets genuine care for our planet. Learn more about <Link to="/who-we-are" className="ed-link">who we are</Link> and <Link to="/the-concord-standard" className="ed-link">the Concord Standard</Link> that guides everything we do.</>} />
          </div>
          <ul className="lg:col-span-7 border-t border-[rgb(var(--ivory))/0.12]">
            {values.map((v, i) => (
              <li key={v.title} className="grid grid-cols-12 gap-4 py-6 border-b border-[rgb(var(--ivory))/0.08]">
                <span className="col-span-1 index-num">V/{String(i + 1).padStart(2, '0')}</span>
                <div className="col-span-11">
                  <h3 className="font-[Fraunces] text-[22px] text-[rgb(var(--ivory))]">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[rgb(var(--ivory))/0.72]">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section III · Open roles" title="Open positions."
            lede={<>Find a role that matches your skills and passion. Positions updated regularly. <Link to="/contact" className="ed-link" style={{ color: 'rgb(var(--concord))' }}>Contact us</Link> for current openings.</>} />

          {/* Filter tabs — square editorial pills */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter roles">
            {filters.map((t) => {
              const active = activeFilter === t.key;
              return (
                <button key={t.key} role="tab" aria-selected={active}
                  onClick={() => setActiveFilter(t.key)}
                  className={`px-4 py-2 text-[12px] font-mono uppercase tracking-widest border transition-colors ${
                    active ? 'bg-[rgb(var(--ink))] text-[rgb(var(--ivory))] border-[rgb(var(--ink))]' :
                             'bg-transparent text-[rgb(var(--ink))/0.6] border-[rgb(var(--ink))/0.25] hover:text-[rgb(var(--ink))]'
                  }`}>
                  {t.label}
                </button>
              );
            })}
          </div>

          <ol className="border-t border-[rgb(var(--ink))/0.20]">
            {filtered.map((j, i) => (
              <li key={j.id} className="grid lg:grid-cols-12 gap-6 py-8 border-b border-[rgb(var(--ink))/0.15]">
                <div className="lg:col-span-1"><p className="index-num" style={{ color: 'rgba(8,12,10,0.55)' }}>R/{String(i + 1).padStart(2, '0')}</p></div>
                <div className="lg:col-span-7">
                  <p className="tech-label" style={{ color: 'rgb(var(--concord))' }}>{j.catLabel} · Full-time</p>
                  <h3 className="mt-2 font-[Fraunces] text-[26px] leading-tight" style={{ color: 'rgb(var(--ink))' }}>{j.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[rgb(var(--ink))/0.75] max-w-2xl">{j.body}</p>
                </div>
                <div className="lg:col-span-2 flex items-baseline gap-2 text-[13px] text-[rgb(var(--ink))/0.7]">
                  <MapPin size={14} aria-hidden="true" /> {j.location}
                </div>
                <div className="lg:col-span-2 flex items-start">
                  <Link to="/contact" className="btn btn-dark w-full lg:w-auto" style={{ color: 'rgb(var(--ivory))' }}>
                    Apply <ArrowRight size={13} weight="bold" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          {filtered.length === 0 && (
            <div className="text-center py-16 border-b border-[rgb(var(--ink))/0.15]">
              <MagnifyingGlass size={36} className="text-[rgb(var(--ink))/0.3] mx-auto mb-4" />
              <p className="text-[15px] text-[rgb(var(--ink))/0.6]">No positions found in this category. Check back soon.</p>
            </div>
          )}
          <p className="mt-6 text-[13px] text-[rgb(var(--ink))/0.5]">Listings shown are illustrative of the roles Concord typically hires for. Contact us for current active openings.</p>
        </div>
      </section>

      {/* Benefits — dense table */}
      <section className="surface-graphite band">
        <div className="arch">
          <ChapterHeader chapter="Section IV · Benefits" title="Benefits that matter."
            lede="We take care of our people so they can focus on taking care of our clients." />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[rgb(var(--ivory))/0.12]">
            {benefits.map(([t, d], i) => (
              <li key={t} className="p-6 border-b border-[rgb(var(--ivory))/0.10] lg:[&:not(:nth-child(4n))]:border-r sm:[&:not(:nth-child(2n))]:border-r lg:[&:nth-child(2n)]:border-r">
                <p className="index-num">B/{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 font-[Fraunces] text-[18px] text-[rgb(var(--ivory))]">{t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[rgb(var(--ivory))/0.7]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application process */}
      <section className="surface-ivory band">
        <div className="arch">
          <ChapterHeaderInk chapter="Section V · Process" title="Application process."
            lede="Our hiring process is designed to be transparent, respectful, and efficient." />
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-[rgb(var(--ink))/0.15]">
            {process.map((p) => (
              <li key={p.num} className="p-6 border-b lg:border-b-0 border-[rgb(var(--ink))/0.12] lg:[&:not(:last-child)]:border-r">
                <p className="font-[Fraunces] text-[48px] leading-none text-[rgb(var(--concord))]">{p.num}</p>
                <h3 className="mt-4 font-[Fraunces] text-[20px]" style={{ color: 'rgb(var(--ink))' }}>{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[rgb(var(--ink))/0.72]">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AboutCTA title="We make it simple."
        body="Do not see your role? We are always looking for exceptional talent. Send us your resume and let us know how you would like to contribute to the clean energy transition."
        primary={{ label: 'Send Us Your Resume', href: '/contact' }}
        secondary={{ label: 'Contact Our Team', href: '/contact' }} />
    </AboutPageShell>
  );
}
