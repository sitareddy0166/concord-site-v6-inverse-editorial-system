import { useEffect, useRef, useState } from 'react';
import { X, Calendar, VideoCamera, Clock } from '@phosphor-icons/react';

const BOOKING_URL = 'https://www.concordlp.com/meetings/jonathan-darnell';

function BookingModal({ open, onClose }) {
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], iframe, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    setTimeout(() => closeBtnRef.current?.focus(), 30);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Discovery Call"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={dialogRef} className="relative w-full max-w-[900px] h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close booking dialog"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white text-concord-dark border border-black/10 flex items-center justify-center hover:bg-slate-50"
        >
          <X size={18} weight="bold" />
        </button>
        <iframe
          title="Book a discovery call with Concord Energy Strategies"
          src={BOOKING_URL}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}

const sampleDays = Array.from({ length: 30 }, (_, i) => i + 1);
const availableDays = new Set([9, 10, 15, 16, 17, 22, 23]);
const selectedDay = 16;
const sampleSlots = ['9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '1:00 pm'];

export default function BookingCard({ className = '' }) {
  const [open, setOpen] = useState(false);
  const monthLabel = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return (
    <>
      <div className={`bg-white rounded-2xl shadow-xl p-6 lg:p-7 border border-black/[0.04] text-concord-dark ${className}`}>
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-concord-mint flex items-center justify-center shrink-0">
            <Calendar size={20} weight="bold" className="text-concord-green" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-[16px] leading-tight">Find a time to meet with Concord Energy Strategies</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-500">
              <span className="inline-flex items-center gap-1"><VideoCamera size={13} weight="bold" /> Microsoft Teams</span>
              <span className="inline-flex items-center gap-1"><Clock size={13} weight="bold" /> 30 mins</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] font-semibold text-concord-dark">{monthLabel}</p>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Select a day</p>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-slate-400 mb-1">
            {['S','M','T','W','T','F','S'].map((d, i) => <span key={i}>{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {sampleDays.map((d) => {
              const isSelected = d === selectedDay;
              const isAvailable = availableDays.has(d);
              return (
                <button
                  key={d}
                  type="button"
                  disabled={!isAvailable && !isSelected}
                  onClick={() => setOpen(true)}
                  className={`h-8 rounded-md text-[12px] font-semibold transition-colors ${
                    isSelected
                      ? 'bg-concord-green text-white'
                      : isAvailable
                      ? 'bg-white text-concord-green border border-concord-green/40 hover:bg-concord-mint'
                      : 'text-slate-300'
                  }`}
                  aria-label={`Day ${d}${isAvailable ? ' available' : ''}`}
                >{d}</button>
              );
            })}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-2">Available times</p>
          <div className="grid grid-cols-2 gap-2">
            {sampleSlots.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md border border-concord-green/40 py-2 text-[13px] font-semibold text-concord-green hover:bg-concord-mint transition-colors"
              >{t}</button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#151C19] text-white px-6 py-3 font-bold text-[14px] hover:-translate-y-[1px] hover:shadow-lg transition-all"
        >
          Book a Discovery Call
        </button>
      </div>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
