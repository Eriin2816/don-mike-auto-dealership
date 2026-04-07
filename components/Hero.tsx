import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-hidden="true"
      />

      {/* Multi-layer overlay — dark gradient from left, atmosphere on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,6,5,0.92) 0%, rgba(13,10,8,0.80) 40%, rgba(13,10,8,0.45) 65%, rgba(8,6,5,0.20) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Carbon texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)",
        }}
        aria-hidden="true"
      />

      {/* Red glow — bottom left accent */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(193,0,31,0.18) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 w-full">
        <div className="max-w-[640px]">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 border border-white/20 text-white/70 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(193,0,31,0.12)" }}>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#C1001F", animation: "pulse 3s ease-in-out infinite" }}
            />
            Don Mike Auto Dealership
          </div>

          {/* Headline — brand guideline style */}
          <h1
            className="text-5xl sm:text-6xl lg:text-[5rem] font-black text-white leading-[1.0] tracking-[-0.03em] mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            DRIVE YOUR{" "}
            <span style={{ color: "#C1001F" }}>
              AMBITION.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-white/65 leading-[1.75] max-w-lg mb-4 font-light"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.35rem" }}
          >
            New and certified pre-owned Mazda vehicles for Gainesville&apos;s students,
            professionals, and families — guided by people who know the local market.
          </p>

          <p className="text-sm text-white/45 leading-relaxed max-w-md mb-10">
            Transparent pricing. Payment-forward financing. No pressure, no games.
            Serving all of Alachua County.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <Link
              href={siteConfig.cta.href}
              className="group inline-flex items-center gap-3 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark hover:brightness-110 active:scale-[0.98]"
              style={{
                background: "#C1001F",
                boxShadow: "0 4px 24px rgba(193,0,31,0.4)",
                fontFamily: "var(--font-montserrat)",
                letterSpacing: "0.04em",
              }}
            >
              SCHEDULE A CALL
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/car-collections"
              className="group inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white text-sm font-semibold px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              View Car Collection
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-white/[0.10]">
            {[
              "No-Pressure Process",
              "Same-Day Response",
              "CPO & New Available",
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
      </div>

      {/* Bottom fade to off-white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #F5F3EE, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
