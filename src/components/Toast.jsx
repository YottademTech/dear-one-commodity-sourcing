import { useEffect } from "react";
import { CloseCircle } from "@solar-icons/react";

export default function Toast({ open, tone = "success", title, children, onClose, duration = 5500 }) {
  useEffect(() => {
    if (!open || !duration) return undefined;
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  const isSuccess = tone === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-16 z-[80] flex justify-center p-4 sm:justify-end sm:p-5"
    >
      <div
        className={`toast-enter pointer-events-auto flex w-full max-w-md gap-3 rounded-[1.4rem] border px-5 py-4 shadow-lg shadow-deep/20 ${
          isSuccess
            ? "border-gold/30 bg-deep text-ivory"
            : "border-forest/20 bg-paper text-deep"
        }`}
      >
        <span
          className={`mt-1 size-2.5 shrink-0 rounded-full ${isSuccess ? "bg-gold" : "bg-forest"}`}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          {title && (
            <p className={`text-base font-medium ${isSuccess ? "text-gold-soft" : "text-forest"}`}>
              {title}
            </p>
          )}
          <div className={`text-base leading-relaxed ${title ? "mt-1" : ""} ${isSuccess ? "text-ivory/90" : "text-ink/80"}`}>
            {children}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={`shrink-0 rounded-full p-1 transition ${
            isSuccess ? "text-ivory/60 hover:text-ivory" : "text-ink/40 hover:text-deep"
          }`}
          aria-label="Dismiss"
        >
          <CloseCircle className="size-5" weight="Linear" />
        </button>
      </div>
    </div>
  );
}
