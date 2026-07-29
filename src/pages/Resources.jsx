import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MagnifyingGlass, ArrowRight, ArrowUpRight, X, Funnel } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/utils/seo';
import blogPosts, { contentTypes, serviceTypes } from '@/data/blogPosts';
import PostImage from '@/components/media/PostImage';
import { ServiceFinalCTA } from '@/components/service';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getPostLink(post) {
  if (post.link) return post.link;
  return `/resources/${post.id}`;
}

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('content') || '';
  const initialService = searchParams.get('service') || '';

  const [activeCategories, setActiveCategories] = useState(initialCategory ? [initialCategory] : []);
  const [activeServices, setActiveServices] = useState(initialService ? [initialService] : []);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortOrder, setSortOrder] = useState('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync URL <- state (persist filters in the address bar)
  useEffect(() => {
    const next = new URLSearchParams();
    if (activeCategories[0]) next.set('content', activeCategories[0]);
    if (activeServices[0]) next.set('service', activeServices[0]);
    if (searchQuery.trim()) next.set('q', searchQuery.trim());
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategories, activeServices, searchQuery]);

  // Sync state <- URL (back/forward, direct load, header dropdown clicks)
  useEffect(() => {
    const c = searchParams.get('content');
    if (c && !activeCategories.includes(c)) setActiveCategories([c]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const toggleCategory = (cat) =>
    setActiveCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  const toggleService = (svc) =>
    setActiveServices((prev) => (prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]));

  const clearAllFilters = () => {
    setActiveCategories([]);
    setActiveServices([]);
    setSearchQuery('');
    setSortOrder('newest');
  };

  const activeFilters = [...activeCategories, ...activeServices];
  const removeFilter = (filter) => {
    if (contentTypes.includes(filter)) setActiveCategories((p) => p.filter((c) => c !== filter));
    else setActiveServices((p) => p.filter((s) => s !== filter));
  };

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];
    if (activeCategories.length) posts = posts.filter((p) => activeCategories.includes(p.category));
    if (activeServices.length) posts = posts.filter((p) => activeServices.includes(p.serviceType));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }
    posts.sort((a, b) => (sortOrder === 'newest' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)));
    return posts;
  }, [activeCategories, activeServices, searchQuery, sortOrder]);

  const featuredPost = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[0],
    []
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ]);

  return (
    <>
      <SEOHead
        title="Resources & Insights | Concord Energy Strategies"
        description="Analysis on clean energy tax incentives: 179D, PWA, Direct Pay, transferable credits, and R&D. Legislative updates and case studies from Concord."
        canonical="/resources"
      />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript
        schema={generateCollectionPageSchema({
          name: 'Resources & Insights',
          description: 'Expert analysis on clean energy tax incentives from Concord Energy Strategies.',
          url: '/resources',
          items: blogPosts.map((p) => ({ name: p.title, url: `/resources/${p.id}` })),
        })}
      />

      {/* ============================================================
          HERO — V6 dark editorial
          ============================================================ */}
      <section className="surface-ink relative overflow-hidden grain">
        <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="arch relative py-14 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[12px] tech-label tech-label--dim">
              <li><Link to="/" className="hover:text-[rgb(var(--ivory))]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[rgb(var(--ivory))]">Resources</li>
            </ol>
          </nav>
          <p className="tech-label mb-4"><span className="index-num mr-2">R/00</span>Insights &amp; Field Notes</p>
          <h1 className="h-display text-balance">Resource Hub.</h1>
          <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-[rgb(var(--ivory))/0.72] max-w-2xl">
            Your hub for expert analysis, case studies, whitepapers, and legislative
            updates on clean energy tax incentives and compliance.
          </p>
        </div>
      </section>

      {/* ============================================================
          FEATURED ARTICLE
          ============================================================ */}
      {featuredPost && (
        <section className="surface-graphite border-y border-[rgb(var(--ivory))/0.10]">
          <div className="arch">
            <Link
              to={getPostLink(featuredPost)}
              className="grid lg:grid-cols-[1fr_420px] gap-0 items-stretch group"
            >
              <div className="py-12 lg:py-16 lg:pr-10">
                <p className="tech-label tech-label--brass mb-5"><span className="index-num mr-2">F/01</span>Featured</p>
                <h2 className="font-[Fraunces] font-normal text-[28px] lg:text-[40px] leading-tight tracking-tight text-[rgb(var(--ivory))] mb-5 group-hover:text-[rgb(var(--concord-glow))] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[16px] leading-relaxed text-[rgb(var(--ivory))/0.72] mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 tech-label">
                  Read article <ArrowRight size={14} weight="bold" />
                </span>
              </div>
              <PostImage post={featuredPost} className="aspect-video lg:aspect-auto lg:h-full border-l border-[rgb(var(--ivory))/0.10]" />
            </Link>
          </div>
        </section>
      )}

      {/* ============================================================
          FILTERS + GRID
          ============================================================ */}
      <section className="surface-ink band">
        <div className="arch">
          {/* Search + counts + mobile filter trigger */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-[600px]">
              <MagnifyingGlass size={16} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--ivory))/0.5]" />
              <input
                type="search"
                aria-label="Search resources"
                placeholder="Search articles, case studies, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[rgb(var(--graphite))] border border-[rgb(var(--ivory))/0.12] pl-11 pr-4 py-3 text-[16px] text-[rgb(var(--ivory))] placeholder:text-[rgb(var(--ivory))/0.4] outline-none focus:border-[rgb(var(--concord-glow))]"
              />
            </div>
            <div className="flex items-center justify-between md:justify-end gap-4 md:ml-auto">
              <p className="tech-label tech-label--dim">
                {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
              </p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen((v) => !v)}
                aria-expanded={mobileFiltersOpen}
                aria-controls="resource-filters-mobile"
                className="lg:hidden inline-flex items-center gap-2 min-h-[44px] px-4 border border-[rgb(var(--ivory))/0.15] tech-label"
              >
                <Funnel size={14} weight="bold" aria-hidden="true" /> Filters
              </button>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="tech-label tech-label--dim">Active:</span>
              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => removeFilter(filter)}
                  className="inline-flex items-center gap-1.5 border border-[rgb(var(--concord-glow))/0.5] text-[rgb(var(--ivory))] text-[13px] px-3 py-1.5 hover:border-[rgb(var(--concord-glow))]"
                  aria-label={`Remove ${filter} filter`}
                >
                  {filter} <X size={12} weight="bold" aria-hidden="true" />
                </button>
              ))}
              <button
                onClick={clearAllFilters}
                className="tech-label text-[rgb(var(--concord-glow))] ml-2"
              >
                Reset all
              </button>
            </div>
          )}

          <div className="grid lg:grid-cols-[240px_1fr] gap-10">
            {/* SIDEBAR (desktop) / DRAWER (mobile) */}
            <aside
              id="resource-filters-mobile"
              className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}
            >
              <div className="lg:sticky lg:top-[88px] space-y-8">
                <div>
                  <p className="tech-label mb-3">Sort</p>
                  <select
                    aria-label="Sort resources"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full bg-[rgb(var(--graphite))] border border-[rgb(var(--ivory))/0.12] text-[15px] text-[rgb(var(--ivory))] px-3 py-2.5 min-h-[44px] outline-none focus:border-[rgb(var(--concord-glow))]"
                  >
                    <option value="newest">Most recent</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </div>

                <div>
                  <p className="tech-label mb-3">Content Type</p>
                  <ul className="space-y-2">
                    {contentTypes.map((cat) => (
                      <li key={cat}>
                        <label className="flex items-center gap-2.5 cursor-pointer min-h-[32px]">
                          <input
                            type="checkbox"
                            checked={activeCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="w-4 h-4 accent-[rgb(var(--concord))]"
                          />
                          <span className="text-[15px] text-[rgb(var(--ivory))/0.78]">{cat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="tech-label mb-3">Service Type</p>
                  <ul className="space-y-2">
                    {serviceTypes.map((svc) => (
                      <li key={svc}>
                        <label className="flex items-center gap-2.5 cursor-pointer min-h-[32px]">
                          <input
                            type="checkbox"
                            checked={activeServices.includes(svc)}
                            onChange={() => toggleService(svc)}
                            className="w-4 h-4 accent-[rgb(var(--concord))]"
                          />
                          <span className="text-[15px] text-[rgb(var(--ivory))/0.78]">{svc}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* CARD GRID */}
            <div className="min-w-0">
              {filteredPosts.length === 0 ? (
                <div className="border border-[rgb(var(--ivory))/0.12] p-10 text-center">
                  <p className="text-[16px] text-[rgb(var(--ivory))/0.7]">
                    No articles match your criteria.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="mt-4 tech-label text-[rgb(var(--concord-glow))]"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[rgb(var(--ivory))/0.10] border border-[rgb(var(--ivory))/0.10]">
                  {filteredPosts.map((post) => (
                    <li key={post.id} className="surface-ink">
                      <Link
                        to={getPostLink(post)}
                        className="group flex flex-col h-full hover:bg-[rgb(var(--concord))/0.06] transition-colors"
                      >
                        <PostImage post={post} className="aspect-video border-b border-[rgb(var(--ivory))/0.10]" />
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="tech-label text-[rgb(var(--concord-glow))]">{post.category}</span>
                            {post.serviceType && (
                              <span className="tech-label tech-label--dim">· {post.serviceType}</span>
                            )}
                          </div>
                          <h3 className="font-[Fraunces] text-[19px] leading-snug tracking-tight text-[rgb(var(--ivory))] mb-2 group-hover:text-[rgb(var(--concord-glow))] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-[14px] text-[rgb(var(--ivory))/0.7] leading-relaxed line-clamp-3 flex-1 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-[rgb(var(--ivory))/0.10]">
                            <span className="tech-label tech-label--dim">
                              {formatDate(post.date)}{post.readTime ? ` · ${post.readTime}` : ''}
                            </span>
                            <ArrowUpRight size={16} weight="bold" aria-hidden="true" className="text-[rgb(var(--ivory))/0.55] group-hover:text-[rgb(var(--concord-glow))]" />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <ServiceFinalCTA
        eyebrow="Need Expert Guidance"
        headline="Talk to a Concord Advisor"
        description="Our team can tell you which credits your projects qualify for and what they're worth."
      />
    </>
  );
}
