import { useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';

export const BOOKING_URL = 'https://www.concordlp.com/meetings/jonathan-darnell';

export function BookingModal({ open, onClose }) {
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
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/70"
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
