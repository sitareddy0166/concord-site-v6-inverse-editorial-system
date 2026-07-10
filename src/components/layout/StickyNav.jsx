import { Link } from 'react-router-dom';

export default function StickyNav({ items }) {
  return (
    <div className="sticky top-[72px] z-[999] bg-white/90 backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-hide">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-slate-500 hover:text-concord-green whitespace-nowrap transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
