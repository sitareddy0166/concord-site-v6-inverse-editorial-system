import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CaretRight,
  CalendarBlank,
  Clock,
  ArrowRight,
  LinkedinLogo,
  TwitterLogo,
  LinkSimple,
  User,
} from '@phosphor-icons/react';
import {
  SEOHead,
  SchemaScript,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from '@/utils/seo';
import { ScrollFadeIn } from '@/hooks/useScrollAnimation';
import { getBlogPost, getRecentPosts, serviceTypes } from '@/data/blogPosts';
import CTABanner from '@/components/sections/CTABanner';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function BlogPost() {
  const { id } = useParams();
  const post = getBlogPost(id);
  const recentPosts = getRecentPosts(3, id);
  const [activeSection, setActiveSection] = useState('');
  const contentRef = useRef(null);

  // Extract TOC from content
  const tocSections = [];
  if (post?.content) {
    const tempDiv = typeof document !== 'undefined' ? document.createElement('div') : null;
    if (tempDiv) {
      tempDiv.innerHTML = post.content;
      const headings = tempDiv.querySelectorAll('h2, h3');
      headings.forEach((h, i) => {
        const id = h.id || h.textContent.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase().replace(/^-|-$/g, '');
        tocSections.push({ id, title: h.textContent, level: h.tagName === 'H3' ? 3 : 2 });
      });
    }
  }

  // Add IDs to headings in content
  const processedContent = post?.content
    ? post.content.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (match, level, attrs, text) => {
        const id = text.replace(/<[^>]*>/g, '').replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase().replace(/^-|-$/g, '');
        if (attrs.includes('id=')) return match;
        return `<h${level} id="${id}"${attrs}>${text}</h${level}>`;
      })
    : '';

  // Intersection observer for TOC highlighting
  useEffect(() => {
    if (!contentRef.current || tocSections.length === 0) return;
    const headings = contentRef.current.querySelectorAll('h2[id], h3[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [processedContent]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading font-extrabold text-[36px] text-concord-dark mb-4">
            Article Not Found
          </h2>
          <p className="text-slate-500 mb-8">The article you are looking for does not exist.</p>
          <Link
            to="/resources"
            className="btn-primary"
          >
            Back to Resources <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resource Hub', url: '/resources' },
    { name: post.category, url: `/resources?content=${post.category}` },
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

  const copyLink = () => {
    navigator.clipboard?.writeText(shareUrl);
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/resources/${post.id}`}
        ogType="article"
        ogImage={post.image}
      />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={articleSchema} />

      {/* ========== BREADCRUMBS ========== */}
      <section className="bg-white border-b border-black/[0.05]">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[14px] text-slate-400 flex-wrap">
              <li>
                <Link to="/" className="hover:text-concord-green transition-colors">Home</Link>
              </li>
              <li><CaretRight size={10} /></li>
              <li>
                <Link to="/resources" className="hover:text-concord-green transition-colors">Resource Hub</Link>
              </li>
              <li><CaretRight size={10} /></li>
              <li>
                <Link to={`/resources?content=${post.category}`} className="hover:text-concord-green transition-colors">{post.category}</Link>
              </li>
              <li><CaretRight size={10} /></li>
              <li className="text-concord-dark font-medium truncate max-w-[300px]">
                {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ========== ARTICLE HEADER ========== */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-8">
          <div className="max-w-[840px]">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-semibold text-concord-dark border border-black/[0.12] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-heading font-extrabold text-[36px] md:text-[48px] tracking-[-0.03em] leading-[1.1] text-concord-dark mb-6">
              {post.title}
            </h1>

            {/* Date + Read Time */}
            <div className="flex items-center gap-4 text-[14px] text-slate-400 mb-8 flex-wrap">
              <span className="flex items-center gap-1.5">
                <CalendarBlank size={15} /> Last Updated: {formatDate(post.dateModified || post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> {post.readTime}
              </span>
            </div>
          </div>

          {/* Author row + share */}
          <div className="flex items-center justify-between border-t border-b border-black/[0.06] py-5 max-w-[840px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-concord-green flex items-center justify-center text-white font-bold text-[15px]">
                C
              </div>
              <div>
                <p className="text-[15px] font-bold text-concord-dark">{post.author}</p>
                <p className="text-[13px] text-slate-400">Concord LP: Clean Energy Tax Incentive Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-slate-400 hover:text-concord-green hover:border-concord-green transition-colors"
                aria-label="Share on LinkedIn"
              >
                <LinkedinLogo size={16} weight="bold" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-slate-400 hover:text-concord-green hover:border-concord-green transition-colors"
                aria-label="Share on Twitter"
              >
                <TwitterLogo size={16} weight="bold" />
              </a>
              <button
                onClick={copyLink}
                className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-slate-400 hover:text-concord-green hover:border-concord-green transition-colors"
                aria-label="Copy link"
              >
                <LinkSimple size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ARTICLE BODY (Content Left, Sidebar Right) ========== */}
      <section className="bg-white pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-12 relative">
            {/* MAIN CONTENT */}
            <div
              ref={contentRef}
              className="flex-1 min-w-0 max-w-[760px] article-prose prose prose-lg prose-slate"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* RIGHT SIDEBAR */}
            <aside className="hidden lg:block w-[300px] shrink-0">
              <div className="sticky top-[100px] space-y-8">
                {/* Newsletter */}
                <div className="bg-white rounded-2xl border border-black/[0.06] p-6">
                  <h3 className="font-heading font-bold text-[18px] text-concord-dark mb-2">
                    Newsletter
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed mb-4">
                    Get the latest on clean energy incentives, compliance updates, and expert insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="e.g. john.smith@gmail.com"
                    className="w-full border border-black/[0.08] rounded-lg px-4 py-2.5 text-[14px] text-concord-dark placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-concord-green mb-3"
                  />
                  <button className="w-full bg-concord-dark text-white font-bold text-[14px] py-2.5 rounded-lg hover:bg-concord-greenHover transition-colors">
                    Subscribe
                  </button>
                </div>

                {/* Table of Contents */}
                {tocSections.length > 0 && (
                  <div className="bg-white rounded-2xl border border-black/[0.06] p-6">
                    <h3 className="font-heading font-bold text-[13px] uppercase tracking-[0.1em] text-concord-dark mb-4">
                      Table of Contents
                    </h3>
                    <nav className="flex flex-col gap-1">
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`text-[14px] py-1.5 pl-3 border-l-2 transition-all leading-snug ${
                            activeSection === section.id
                              ? 'border-concord-green text-concord-green font-semibold'
                              : 'border-transparent text-slate-500 hover:text-concord-dark hover:border-slate-300'
                          } ${section.level === 3 ? 'ml-3 text-[13px]' : ''}`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Categories */}
                <div className="bg-white rounded-2xl border border-black/[0.06] p-6">
                  <h3 className="font-heading font-bold text-[13px] uppercase tracking-[0.1em] text-concord-dark mb-4">
                    Categories
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {serviceTypes.map((svc) => (
                      <Link
                        key={svc}
                        to={`/resources?content=${svc === '179D' ? '' : ''}`}
                        className="text-[14px] text-slate-500 hover:text-concord-green transition-colors"
                      >
                        {svc}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM TAGS + SHARE ========== */}
      <section className="bg-white border-t border-black/[0.06]">
        <div className="max-w-[760px] mx-auto px-6 py-8">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-semibold text-concord-dark border border-black/[0.12] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3 border-t border-black/[0.06] pt-6">
            <span className="text-[14px] text-slate-500">Share this article:</span>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-slate-400 hover:text-concord-green hover:border-concord-green transition-colors"
            >
              <LinkedinLogo size={16} weight="bold" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-slate-400 hover:text-concord-green hover:border-concord-green transition-colors"
            >
              <TwitterLogo size={16} weight="bold" />
            </a>
            <button
              onClick={copyLink}
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-slate-400 hover:text-concord-green hover:border-concord-green transition-colors"
            >
              <LinkSimple size={16} weight="bold" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== AUTHOR BIO ========== */}
      <section className="bg-white border-t border-black/[0.06]">
        <div className="max-w-[760px] mx-auto px-6 py-10">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-concord-green flex items-center justify-center text-white font-bold text-xl shrink-0">
              C
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-slate-400 mb-1">
                Concord Editorial Team
              </p>
              <p className="font-heading font-bold text-[18px] text-concord-dark mb-3">
                Concord
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                Concord specializes in helping businesses and government entities maximize clean energy tax incentives, from Section 179D to R&D Tax Credits and beyond. Our editorial team delivers timely, expert-driven content on incentive programs, compliance management, and legislative developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SIDEBAR CTA (dark card) ========== */}
      <section className="bg-concord-cream py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
            {/* Related Articles */}
            <div>
              <h2 className="font-heading font-extrabold text-[28px] text-concord-dark mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={related.link || `/resources/${related.id}`}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-concord-green mb-2">
                        {related.category}
                      </span>
                      <h3 className="font-heading text-[16px] font-bold leading-snug text-concord-dark mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 flex-1">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/[0.06]">
                        <span className="text-[12px] text-slate-400">{formatDateShort(related.date)}</span>
                        <span className="text-[13px] font-bold text-concord-green flex items-center gap-1">
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dark CTA Card */}
            <div className="bg-concord-dark rounded-2xl p-8 text-center lg:sticky lg:top-[100px]">
              <h3 className="font-heading font-bold text-[20px] text-white mb-3">
                Need help with tax incentives?
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                Talk to our experts today.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-concord-dark font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-concord-mint transition-colors"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
