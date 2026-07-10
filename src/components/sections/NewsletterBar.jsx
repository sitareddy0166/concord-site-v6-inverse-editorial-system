import { useState } from 'react';

export default function NewsletterBar() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-concord-cream py-[60px]">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h3 className="font-heading font-bold text-[24px] text-concord-dark mb-3">Stay Informed on Incentive Updates</h3>
        <p className="text-[16px] text-slate-500 mb-8">Get the latest clean energy tax news delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-concord-dark placeholder:text-slate-400 rounded-full px-6 py-3 text-[14px] outline-none focus:ring-2 focus:ring-concord-green border border-black/[0.06]"
            aria-label="Email address"
          />
          <button type="submit" className="rounded-full bg-[#151C19] text-white px-8 py-3 font-bold text-[14px] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 shrink-0">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
