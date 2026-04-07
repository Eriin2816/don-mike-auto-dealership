"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/poCFh1jwiLN8SwSsSgom";
const DELAY_MS = 10000;
const SESSION_KEY = "popup_dismissed";

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data === "object" &&
        (event.data?.type === "form_submitted" ||
          event.data?.event === "form_submitted" ||
          event.data?.action === "submitForm" ||
          event.data?.message === "form_submitted")
      ) {
        dismiss();
        router.push("/book-a-call");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998]"
        style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(6px)" }}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal centering wrapper */}
      <div
        className="fixed z-[9999] inset-0 flex items-center justify-center px-4 py-6"
        role="dialog"
        aria-modal="true"
        aria-label="Quick inquiry form"
      >
        {/* Modal container — 650px on desktop, full width on mobile */}
        <div
          className="relative w-full rounded-2xl flex flex-col"
          style={{
            maxWidth: "650px",
            background: "#141414",
            border: "1px solid rgba(193,0,31,0.22)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.75), 0 0 60px rgba(193,0,31,0.07)",
            maxHeight: "92vh",
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-start justify-between px-8 pt-7 pb-5 flex-shrink-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C1001F" }}
                  aria-hidden="true"
                />
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest"
                  style={{ color: "#C1001F" }}
                >
                  Quick Inquiry — No Pressure
                </p>
              </div>
              <h2
                className="text-white font-black text-2xl leading-tight"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  letterSpacing: "-0.02em",
                }}
              >
                Find Your Mazda Today
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mt-1.5 max-w-sm">
                Tell us what you&apos;re looking for — we&apos;ll match you with the right model and the right payment.
              </p>
            </div>

            {/* Close */}
            <button
              onClick={dismiss}
              className="flex-shrink-0 ml-4 flex items-center justify-center w-9 h-9 rounded-xl text-white/35 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              style={{ background: "rgba(255,255,255,0.05)" }}
              aria-label="Close form"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── GHL iframe body ── */}
          <div
            className="overflow-y-auto flex-1"
            style={{ padding: "0 8px" }}
          >
            <iframe
              src={GHL_FORM_URL}
              title="Don Mike Auto Inquiry Form"
              style={{
                width: "100%",
                height: "640px",
                border: "none",
                display: "block",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
