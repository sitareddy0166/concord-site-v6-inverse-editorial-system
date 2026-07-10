import { Link } from 'react-router-dom';

export default function StickyNav({ items }) {
  return (
    <nav aria-label="On this page" className="subnav">
      <div className="arch">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          <span className="tech-label tech-label--brass shrink-0 py-3.5">On This Page</span>
          {items.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0">{item.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
