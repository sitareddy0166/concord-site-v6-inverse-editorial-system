import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CalendarBlank, Clock, ArrowRight, ArrowUpRight,
  LinkedinLogo, TwitterLogo, LinkSimple,
} from '@phosphor-icons/react';
import {
  SEOHead, SchemaScript,
  generateBreadcrumbSchema, generateArticleSchema,
} from '@/utils/seo';
import { getBlogPost, getRecentPosts } from '@/data/blogPosts';
import PostImage from '@/components/media/PostImage';
import { ServiceFinalCTA } from '@/components/service';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPost() {
  const { id } = useParams();
  const post = getBlogPost(id);
  const recentPosts = getRecentPosts(3, id);
  const [activeSection, setActiveSection] = useState('');
  const contentRef = useRef(null);

  // Extract TOC from content (SSR-safe)
  const tocSections = [];
  if (post?.content && typeof document !== 'undefined') {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;
    tempDiv.querySelectorAll('h2, h3').forEach((h) => {
      const slug = (h.id || h.textContent).replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase().replace(/^-|-$/g, '');
      tocSections.push({ id: slug, title: h.textContent, level: h.tagName === 'H3' ? 3 : 2 });
    });
  }

  const processedContent = post?.content
    ? post.content.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (match, level, attrs, text) => {
        const slug = text.replace(/<[^>]*>/g, '').replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase().replace(/^-|-$/g, '');
        if (attrs.includes('id=')) return match;
        return `<h${level} id="${slug}"${attrs}>${text}</h${level}>`;
      })
    : '';

  useEffect(() => {
    if (!contentRef.current || tocSections.length === 0) return;
    const headings = contentRef.current.querySelectorAll('h2[id], h3[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-88px 0px -70% 0px' }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [processedContent, tocSections.length]);

  if (!post) {
    return (
      <section className="surface-ink band">
        <div className="arch text-center">
          <p className="tech-label mb-4">404 · Not Found</p>
          <h1 className="h-lead">Article Not Found</h1>
          <p className="mt-4 text-[rgb(var(--ivory))/0.7]">The article you are looking for does not exist.</p>
          <Link to="/resources" className="btn btn-primary mt-8">
            Back to Resources <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resource Hub', url: '/resources' },
    { name: post.category, url: `/resources?content=${encodeURIComponent(post.category)}` },
    { name: post.title },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/resources/${post.id}`,
    image: post.image,
    datePublished: `${post.date}T09:00:00Z`,
    dateModified: `${post.dateModified || post.date}T09:00:00Z`,
    author: post.author,
  });

  const tags = post.tags || [];
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;
  const copyLink = () => { navigator.clipboard?.writeText(shareUrl); };

  return (
    <>
      <SEOHead
        title={`${post.title} | Concord Energy Strategies`}
        description={post.excerpt}
        canonical={`/resources/${post.id}`}
        ogType="article"
        ogImage={post.image}
      />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={articleSchema} />

      {/* ARTICLE HEADER */}
      <section className="surface-ink relative overflow-hidden grain border-b border-[rgb(var(--ivory))/0.10]">
        <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="arch relative py-12 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 tech-label tech-label--dim flex-wrap">
              <li><Link to="/" className="hover:text-[rgb(var(--ivory))]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/resources" className="hover:text-[rgb(var(--ivory))]">Resources</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[rgb(var(--ivory))]">{post.category}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span key={tag} className="tech-label tech-label--dim border border-[rgb(var(--ivory))/0.14] px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-[Fraunces] font-normal text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.05] tracking-tight text-[rgb(var(--ivory))] text-balance mb-6">
              {post.title}
            </h1>
            <p className="text-[16px] lg:text-[18px] leading-relaxed text-[rgb(var(--ivory))/0.75] max-w-3xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 tech-label tech-label--dim mt-8">
              <span className="inline-flex items-center gap-1.5">
                <CalendarBlank size={14} aria-hidden="true" /> Updated {formatDate(post.dateModified || post.date)}
              </span>
              {post.readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" /> {post.readTime}
                </span>
              )}
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY on paper surface */}
      <section className="surface-paper py-14 lg:py-20">
        <div className="arch">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <article
              ref={contentRef}
              className="min-w-0 max-w-[760px] prose"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            <aside className="hidden lg:block">
              <div className="sticky top-[100px] space-y-8">
                {tocSections.length > 0 && (
                  <nav aria-label="Table of contents" className="border border-[rgb(var(--ink))/0.12] p-5">
                    <p className="tech-label mb-3" style={{ color: 'rgb(var(--concord))' }}>Contents</p>
                    <ul className="flex flex-col gap-1">
                      {tocSections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className={`block text-[14px] py-1.5 pl-3 border-l-2 leading-snug transition-colors ${
                              activeSection === s.id
                                ? 'border-[rgb(var(--concord))] text-[rgb(var(--concord))] font-semibold'
                                : 'border-transparent text-[rgb(var(--ink))/0.65] hover:text-[rgb(var(--ink))]'
                            } ${s.level === 3 ? 'ml-3 text-[13px]' : ''}`}
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                <div className="border border-[rgb(var(--ink))/0.12] p-5">
                  <p className="tech-label mb-3" style={{ color: 'rgb(var(--concord))' }}>Share</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                      target="_blank" rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="w-11 h-11 border border-[rgb(var(--ink))/0.15] flex items-center justify-center text-[rgb(var(--ink))/0.65] hover:text-[rgb(var(--concord))]"
                    >
                      <LinkedinLogo size={16} weight="bold" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank" rel="noopener noreferrer"
                      aria-label="Share on X (Twitter)"
                      className="w-11 h-11 border border-[rgb(var(--ink))/0.15] flex items-center justify-center text-[rgb(var(--ink))/0.65] hover:text-[rgb(var(--concord))]"
                    >
                      <TwitterLogo size={16} weight="bold" />
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      aria-label="Copy link"
                      className="w-11 h-11 border border-[rgb(var(--ink))/0.15] flex items-center justify-center text-[rgb(var(--ink))/0.65] hover:text-[rgb(var(--concord))]"
                    >
                      <LinkSimple size={16} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="surface-ink band border-t border-[rgb(var(--ivory))/0.10]">
        <div className="arch">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <p className="tech-label mb-4"><span className="index-num mr-2">R/02</span>Related</p>
              <h2 className="h-lead">Continue Reading</h2>
            </div>
            <Link to="/resources" className="tech-label text-[rgb(var(--concord-glow))]">
              View all resources →
            </Link>
          </div>

          <ul className="grid md:grid-cols-3 gap-px bg-[rgb(var(--ivory))/0.10] border border-[rgb(var(--ivory))/0.10]">
            {recentPosts.map((r) => (
              <li key={r.id} className="surface-ink">
                <Link
                  to={r.link || `/resources/${r.id}`}
                  className="group flex flex-col h-full hover:bg-[rgb(var(--concord))/0.06] transition-colors"
                >
                  <PostImage post={r} className="aspect-video border-b border-[rgb(var(--ivory))/0.10]" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="tech-label text-[rgb(var(--concord-glow))] mb-2">{r.category}</span>
                    <h3 className="font-[Fraunces] text-[18px] leading-snug tracking-tight text-[rgb(var(--ivory))] mb-2 group-hover:text-[rgb(var(--concord-glow))]">
                      {r.title}
                    </h3>
                    <p className="text-[13px] text-[rgb(var(--ivory))/0.7] leading-relaxed line-clamp-2 flex-1">{r.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[rgb(var(--ivory))/0.10]">
                      <span className="tech-label tech-label--dim">{formatDate(r.date)}</span>
                      <ArrowUpRight size={14} weight="bold" aria-hidden="true" className="text-[rgb(var(--ivory))/0.55] group-hover:text-[rgb(var(--concord-glow))]" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceFinalCTA
        eyebrow="Need Help"
        headline="Talk to a Concord Advisor"
        description="Our team can help you navigate clean energy tax incentives and maximize your savings."
      />
    </>
  );
}
