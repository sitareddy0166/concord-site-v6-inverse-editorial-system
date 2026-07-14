import { useState } from 'react';
import { Calendar, VideoCamera, Clock } from '@phosphor-icons/react';
import { BookingModal } from './BookingModal';

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
