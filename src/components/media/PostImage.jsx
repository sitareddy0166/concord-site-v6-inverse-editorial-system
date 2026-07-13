import { useState } from 'react';
import EditorialMedia from '@/components/media/EditorialMedia';

/**
 * <PostImage> — renders a resource/blog thumbnail with:
 * - 16:9 aspect container (consistent crop) via caller-provided className
 * - Lazy loading + explicit dimensions
 * - onError fallback to a category-appropriate EditorialMedia SVG
 * - When post.image is null/empty, renders EditorialMedia directly (no blank rectangle)
 *
 * De-duplicates the widespread stock "person consulting"/"person chatting" placeholders
 * by preferring the category illustration whenever the source URL fails or is missing.
 */
const CATEGORY_VARIANT = {
  News: 'tech-docs',
  'Case Studies': 'building-179d',
  Whitepapers: 'document-stack',
  Deadlines: 'compliance-records',
  'Press Releases': 'tech-docs',
  Events: 'office-map',
};

const SERVICE_VARIANT = {
  '179D': 'building-179d',
  'R&D': 'laboratory',
  PWA: 'workforce-pwa',
  'Direct Pay': 'public-infra',
  'Transferable Credits': 'transaction',
};

// URL substrings that indicate the shared stock photo pool used on many unrelated posts.
const OVERUSED_STOCK = [
  'consulting%20with%20a%20client',
  'chatting%20with%20a%20another%20person',
  'working%20together%20around%20a%20laptop',
  'architect%20working%20on%20drawings',
];

function pickVariant(post) {
  return (
    SERVICE_VARIANT[post?.serviceType] ||
    CATEGORY_VARIANT[post?.category] ||
    'tech-docs'
  );
}

function isOverusedStock(url) {
  if (!url) return true;
  return OVERUSED_STOCK.some((s) => url.includes(s));
}

export default function PostImage({ post, className = '', variant = 'auto' }) {
  const [broken, setBroken] = useState(false);
  const shouldFallback = broken || !post?.image || isOverusedStock(post?.image);
  const fallbackVariant = variant === 'auto' ? pickVariant(post) : variant;
  const alt = post?.title || '';

  if (shouldFallback) {
    return (
      <div className={`relative overflow-hidden bg-[rgb(var(--ink))] ${className}`}>
        <EditorialMedia variant={fallbackVariant} alt={alt} className="w-full h-full" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[rgb(var(--ink))] ${className}`}>
      <img
        src={post.image}
        alt={alt}
        loading="lazy"
        width="800"
        height="450"
        onError={() => setBroken(true)}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export function resolvePostVariant(post) {
  return pickVariant(post);
}

export function isPlaceholderImage(url) {
  return isOverusedStock(url);
}
