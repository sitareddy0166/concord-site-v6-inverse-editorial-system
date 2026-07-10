import { useState, useEffect, useMemo } from 'react';

/**
 * CountdownTimer
 *
 * Props:
 *   - deadlines: Array<{ date: string, label: string }>  (preferred)
 *   - targetDate: string  (legacy single-date fallback)
 *
 * Counts down to the NEAREST FUTURE deadline in `deadlines` and shows its
 * label. When every deadline has passed, renders a "Contact us…" message.
 */
export default function CountdownTimer({ deadlines, targetDate }) {
  const normalized = useMemo(() => {
    if (Array.isArray(deadlines) && deadlines.length > 0) return deadlines;
    if (targetDate) return [{ date: targetDate, label: '' }];
    return [];
  }, [deadlines, targetDate]);

  const pickNext = () => {
    const now = Date.now();
    const upcoming = normalized
      .map((d) => ({ ...d, ts: new Date(d.date).getTime() }))
      .filter((d) => Number.isFinite(d.ts) && d.ts > now)
      .sort((a, b) => a.ts - b.ts);
    return upcoming[0] || null;
  };

  const [next, setNext] = useState(pickNext);
  const [timeLeft, setTimeLeft] = useState(() => diff(next));

  useEffect(() => {
    setNext(pickNext());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalized]);

  useEffect(() => {
    if (!next) return;
    setTimeLeft(diff(next));
    const id = setInterval(() => {
      const t = diff(next);
      if (t.total <= 0) {
        setNext(pickNext());
      } else {
        setTimeLeft(t);
      }
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  if (!next) {
    return (
      <div className="rounded-2xl border-t-2 border-concord-green bg-white shadow-lg p-8 text-center">
        <p className="text-[15px] font-medium text-concord-dark">
          Contact us about your filing options
        </p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="rounded-2xl border-t-2 border-concord-green bg-white shadow-lg p-6 md:p-8">
      <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-concord-green mb-4">
        {next.label || 'Next Deadline'}
      </p>
      <div className="flex items-center justify-between gap-3 md:gap-4">
        {units.map((u) => (
          <div key={u.label} className="text-center flex-1">
            <div className="flex items-center justify-center mb-2">
              <span className="font-heading font-black text-[32px] md:text-[44px] leading-none text-concord-dark tabular-nums">
                {String(u.value).padStart(2, '0')}
              </span>
            </div>
            <p className="text-[11px] md:text-[12px] font-medium text-slate-500 uppercase tracking-wide">
              {u.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function diff(next) {
  if (!next) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const total = new Date(next.date).getTime() - Date.now();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}
