import { Link } from 'react-router-dom';
import { SEOHead } from '@/utils/seo';

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <section className="py-[120px] lg:py-[160px]">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-[80px] font-heading font-black text-concord-green mb-4">404</p>
          <h1 className="font-heading font-extrabold text-[36px] text-concord-dark mb-4">Page Not Found</h1>
          <p className="text-[16px] text-slate-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-[#151C19] text-white px-8 py-4 font-bold text-[15px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
