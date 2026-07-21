"use client"

import { useState, useEffect } from "react";

interface NeoAlertProps {
  message?: string;
  title?: string;
  autoCloseDuration?: number;
  onClose?: () => void;
}

export default function NeoAlert({
  message = "This web is currently being built. Some features may not be available yet.",
  title = "Under Construction",
  autoCloseDuration = 8000, //Auto close duration
  onClose,
}: NeoAlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoCloseDuration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [autoCloseDuration, onClose]);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={handleClose}
      />
      {/* Alert Card */}
      <div className="relative bg-neo-yellow border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 max-w-md w-full text-center">
        {/* Decorative corner shapes */}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-neo-pink border-[3px] border-black -z-10" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-neo-cyan border-[3px] border-black -z-10" />

        {/* Icon */}
        <div className="mx-auto mb-4 w-14 h-14 bg-black text-white flex items-center justify-center border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-[1.1] mb-3">
          {title.split(" ").map((word, i) =>
            i === 1 ? (
              <span key={i} className="bg-white px-2 border-[3px] border-black inline-block mx-1 -rotate-1">
                {word}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>

        {/* Message */}
        <p className="font-bold text-sm uppercase tracking-wider mb-6">
          {message}
        </p>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="w-full px-6 py-3 bg-white border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 cursor-pointer"
        >
          Got it!
        </button>

        {/* Auto-close hint */}
        {autoCloseDuration > 0 && (
          <p className="text-[10px] font-bold uppercase tracking-widest mt-3 opacity-50">
            Auto-closes in a few seconds
          </p>
        )}
      </div>
    </div>
  );
}