import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book a Call | Don Mike Auto Dealership — Gainesville, FL",
  description:
    "Schedule a quick call with the Don Mike Auto team. We'll match you to the right Mazda, walk through real financing options, and answer every question — no pressure, no commitment.",
};

export default function BookACallPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "#0D0D0D" }}>

        {/* Hero section */}
        <section
          className="relative pt-36 pb-20 px-6 overflow-hidden"
          aria-label="Book a call hero"
        >
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(193,0,31,0.18) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(193,0,31,0.10)",
                border: "1px solid rgba(193,0,31,0.20)",
                color: "#E8182E",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C1001F" }} />
              No Commitment Required
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              LET&apos;S FIND YOUR{" "}
              <span style={{ color: "#C1001F" }}>RIGHT MAZDA.</span>
            </h1>

            {/* Supporting copy */}
            <p className="text-white/60 text-lg leading-[1.75] max-w-2xl mx-auto mb-4">
              A quick call with our team takes under 20 minutes. By the end, you&apos;ll have
              a clear picture of which vehicle fits your lifestyle, what the real monthly
              payment looks like, and what your current vehicle is worth.
            </p>
            <p
              className="text-white/40 text-base max-w-xl mx-auto mb-12"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.15rem" }}
            >
              No pressure. No obligation. Just the information you need to make a confident decision.
            </p>

            {/* Trust bullets row */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14">
              {[
                "Same-day response",
                "Real financing numbers",
                "Trade-in appraisal included",
                "No sales pressure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/45">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: "#C1001F" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking embed section */}
        <style>{`
          .booking-iframe { height: 760px; }
          @media (min-width: 1024px) {
            .booking-iframe { height: 960px; }
            .booking-outer  { max-width: 860px; }
          }
        `}</style>

        <section className="px-6 pb-24" aria-label="Booking widget">
          <div className="booking-outer max-w-3xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(193,0,31,0.15)",
                background: "#141414",
                boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
              }}
            >
              {/* Card header */}
              <div
                className="px-8 py-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <h2 className="text-white font-bold text-lg mb-1">Choose a Time That Works for You</h2>
                <p className="text-white/45 text-sm">
                  Pick any available slot. We&apos;ll confirm your appointment and reach out ahead of
                  time to answer any pre-call questions.
                </p>
              </div>

              {/* Booking iframe embed */}
              <div className="p-6">
                <iframe
                  src={siteConfig.business.bookingHref}
                  className="booking-iframe"
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    display: "block",
                  }}
                  title="Schedule a call with Don Mike Auto"
                  loading="lazy"
                />
              </div>

              {/* Fallback contact below embed */}
              <div
                className="px-8 py-6 border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <p className="text-white/35 text-sm text-center mb-4">
                  Prefer to reach out directly? We respond to every inquiry.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href={siteConfig.business.phoneHref}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 group"
                  >
                    <svg className="w-4 h-4" style={{ color: "#C1001F" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {siteConfig.business.phone}
                  </a>
                  <a
                    href={siteConfig.business.emailHref}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 group"
                  >
                    <svg className="w-4 h-4" style={{ color: "#C1001F" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {siteConfig.business.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect section */}
        <section
          className="px-6 py-20"
          style={{ background: "#141414" }}
          aria-label="What to expect on your call"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white font-bold text-2xl text-center mb-3">
              What to expect on your call
            </h2>
            <p className="text-white/45 text-sm text-center mb-10 max-w-xl mx-auto">
              No script. No agenda other than finding out what works for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "We listen first",
                  desc: "We start by understanding your situation — lifestyle, budget, timeline, and any trade-in you might have. No assumptions.",
                },
                {
                  step: "02",
                  title: "Real numbers",
                  desc: "We walk through actual financing options based on your profile. Honest monthly payment ranges — not inflated estimates designed to impress.",
                },
                {
                  step: "03",
                  title: "Clear next steps",
                  desc: "By the end, you&apos;ll know which vehicle makes sense, what it costs, and exactly what happens next — with zero pressure to commit on the call.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                    style={{
                      background: "rgba(193,0,31,0.1)",
                      color: "#C1001F",
                      fontFamily: "var(--font-montserrat)",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
