import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MagnifyingGlass, ArrowRight, CaretRight, X, Funnel } from '@phosphor-icons/react';
import { SEOHead, SchemaScript, generateBreadcrumbSchema, generateCollectionPageSchema } from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import blogPosts, { contentTypes, serviceTypes } from '@/data/blogPosts';
import CTABanner from '@/components/sections/CTABanner';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getPostLink(post) {
  if (post.link) return post.link;
  return `/resources/${post.id}`;
}

export default function Resources() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('content') || '';

  const [activeCategories, setActiveCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [activeServices, setActiveServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    const content = searchParams.get('content');
    if (content) {
      setActiveCategories([content]);
    }
  }, [searchParams]);

  const toggleCategory = (cat) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleService = (svc) => {
    setActiveServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const clearAllFilters = () => {
    setActiveCategories([]);
    setActiveServices([]);
    setSearchQuery('');
    setSortOrder('newest');
  };

  const activeFilters = [...activeCategories, ...activeServices];

  const removeFilter = (filter) => {
    if (contentTypes.includes(filter)) {
      setActiveCategories((prev) => prev.filter((c) => c !== filter));
    } else {
      setActiveServices((prev) => prev.filter((s) => s !== filter));
    }
  };

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    if (activeCategories.length > 0) {
      posts = posts.filter((p) => activeCategories.includes(p.category));
    }

    if (activeServices.length > 0) {
      posts = posts.filter((p) => activeServices.includes(p.serviceType));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return posts;
  }, [activeCategories, activeServices, searchQuery, sortOrder]);

  // Featured post = newest post
  const featuredPost = useMemo(() => {
    const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    return sorted[0];
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ]);

  return (
    <>
      <SEOHead
        title="Resources & Insights"
        description="Expert analysis on clean energy tax incentives. Stay ahead of regulatory changes, market trends, and optimization strategies with Concord Energy Strategies."
        canonical="/resources"
      />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={generateCollectionPageSchema({
        name: 'Resources & Insights',
        description: 'Expert analysis on clean energy tax incentives from Concord Energy Strategies.',
        url: '/resources',
        items: blogPosts.map((p) => ({ name: p.title, url: `/resources/${p.id}` })),
      })} />

      {/* ========== HERO (Light BG) ========== */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[14px] text-slate-400">
              <li>
                <Link to="/" className="hover:text-concord-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <CaretRight size={10} />
              </li>
              <li className="text-concord-dark font-medium">Resources</li>
            </ol>
          </nav>
          <h1 className="font-heading font-extrabold text-[40px] lg:text-[56px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-5">
            Resource Hub
          </h1>
          <p className="text-[16px] lg:text-[18px] text-slate-500 leading-relaxed max-w-[640px]">
            Your hub for expert resources, research, tools, and insights on clean energy tax
            incentives and compliance.
          </p>
        </div>
      </section>

      {/* ========== FEATURED ARTICLE ========== */}
      {featuredPost && (
        <section className="bg-concord-dark">
          <div className="max-w-[1200px] mx-auto px-6">
            <Link
              to={getPostLink(featuredPost)}
              className="grid lg:grid-cols-[1fr_380px] gap-0 items-stretch group"
            >
              <div className="py-16 lg:py-20 pr-8">
                <span className="text-[13px] uppercase tracking-[0.15em] font-bold text-concord-green mb-4 block">
                  Featured
                </span>
                <h2 className="font-heading font-extrabold text-[28px] lg:text-[36px] text-white leading-[1.15] mb-5 tracking-[-0.02em]">
                  {featuredPost.title}
                </h2>
                <p className="text-white/60 text-[16px] leading-relaxed mb-6 max-w-[600px]">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-[15px] group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={16} />
                </span>
              </div>
              <div className="hidden lg:block overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ========== SEARCH + FILTERS + GRID ========== */}
      <section className="bg-concord-cream py-12 lg:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Search Bar + Results Count */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-[600px]">
              <MagnifyingGlass
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search articles, case studies, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-black/[0.08] bg-white pl-11 pr-4 py-3 text-[15px] text-concord-dark placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-concord-green focus:border-concord-green"
              />
            </div>
            <p className="text-[14px] text-slate-500 ml-auto">
              {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Active Filter Chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-[13px] font-semibold text-slate-500 uppercase tracking-wide">
                Active:
              </span>
              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => removeFilter(filter)}
                  className="inline-flex items-center gap-1.5 bg-white border border-concord-green/30 text-concord-dark text-[13px] font-medium px-3 py-1.5 rounded-full hover:bg-red-50 hover:border-red-200 transition-colors"
                >
                  {filter} <X size={12} weight="bold" />
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-10">
            {/* ====== LEFT SIDEBAR FILTERS ====== */}
            <aside className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-[100px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="flex items-center gap-2 font-heading font-bold text-[15px] text-concord-dark uppercase tracking-wide">
                    <Funnel size={16} weight="bold" /> Filters
                  </h3>
                  {activeFilters.length > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="text-[13px] text-concord-green font-semibold hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Sort By */}
                <div className="mb-8">
                  <p className="text-[13px] font-bold text-concord-dark uppercase tracking-wide mb-3">
                    Sort By
                  </p>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full text-[14px] text-concord-dark bg-white border border-black/[0.08] rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-concord-green"
                  >
                    <option value="newest">Most recent</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </div>

                {/* Content Type Checkboxes */}
                <div className="mb-8">
                  <p className="text-[13px] font-bold text-concord-dark uppercase tracking-wide mb-3">
                    Content Type
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {contentTypes.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={activeCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="w-4 h-4 rounded border-slate-300 text-concord-green focus:ring-concord-green cursor-pointer accent-concord-green"
                        />
                        <span className="text-[14px] text-slate-600 group-hover:text-concord-dark transition-colors">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Service Type Checkboxes */}
                <div className="mb-8">
                  <p className="text-[13px] font-bold text-concord-dark uppercase tracking-wide mb-3">
                    Service Type
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {serviceTypes.map((svc) => (
                      <label
                        key={svc}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={activeServices.includes(svc)}
                          onChange={() => toggleService(svc)}
                          className="w-4 h-4 rounded border-slate-300 text-concord-green focus:ring-concord-green cursor-pointer accent-concord-green"
                        />
                        <span className="text-[14px] text-slate-600 group-hover:text-concord-dark transition-colors">
                          {svc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {activeFilters.length > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-[14px] text-concord-green font-semibold hover:underline"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </aside>

            {/* ====== ARTICLE GRID ====== */}
            <div className="flex-1 min-w-0">
              {/* Mobile filter pills */}
              <div className="lg:hidden mb-6 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`rounded-full px-4 py-1.5 font-semibold text-xs transition-all ${
                        activeCategories.includes(cat)
                          ? 'bg-concord-dark text-white'
                          : 'bg-white text-concord-dark border border-black/[0.08] hover:border-concord-green'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={getPostLink(post)}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        width="600"
                        height="340"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Tag pills */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-concord-green border border-concord-green/30 px-2.5 py-0.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500 border border-slate-200 px-2.5 py-0.5 rounded-full">
                          {post.serviceType}
                        </span>
                      </div>
                      <h3 className="font-heading text-[17px] font-bold leading-snug text-concord-dark mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-3 flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                        <div className="flex items-center gap-3 text-[13px] text-slate-400">
                          <span>{formatDate(post.date)}</span>
                          {post.readTime && (
                            <>
                              <span>·</span>
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>
                        <span className="text-[13px] font-bold text-concord-green flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-slate-500 text-[18px]">
                    No articles found matching your criteria.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="mt-4 text-concord-green font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <CTABanner
        headline="Need Expert Guidance?"
        description="Our team can help you navigate clean energy tax incentives and maximize your savings."
        buttonText="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
