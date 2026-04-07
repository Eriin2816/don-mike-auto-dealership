import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0D0D0D" }}
      aria-label="Get started"
    >
      {/* Background: red glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(193,0,31,0.20) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* Carbon texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px), repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)",
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
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#C1001F", animation: "pulse 3s ease-in-out infinite" }}
          />
          Ready to Move Forward?
        </div>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          FIND YOUR MAZDA.{" "}
          <span style={{ color: "#C1001F" }}>BOOK YOUR CALL.</span>
        </h2>

        {/* Supporting copy */}
        <p className="text-white/55 text-lg leading-[1.75] max-w-2xl mx-auto mb-4">
          A quick conversation with our team costs nothing and takes under 20 minutes.
          By the end, you&apos;ll know which vehicle fits your life, what it actually costs per
          month, and what your trade-in is worth.
        </p>

        <p
          className="text-white/35 text-base leading-relaxed max-w-xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.15rem" }}
        >
          No pressure. No commitment. Just the information you need to make a confident decision.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href={siteConfig.cta.href}
            className="group inline-flex items-center gap-3 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            style={{
              background: "#C1001F",
              boxShadow: "0 4px 32px rgba(193,0,31,0.45)",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.04em",
            }}
          >
            SCHEDULE A CALL
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/car-collections"
            className="group inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/70 hover:text-white text-sm font-semibold px-7 py-4 rounded-xl transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            Browse the Lineup
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/[0.07]">
          <a
            href={siteConfig.business.phoneHref}
            className="flex items-center gap-2.5 text-white/45 hover:text-white text-sm font-medium transition-colors duration-200 group"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-red-900/20 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            {siteConfig.business.phone}
          </a>

          <a
            href={siteConfig.business.emailHref}
            className="flex items-center gap-2.5 text-white/45 hover:text-white text-sm font-medium transition-colors duration-200 group"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-red-900/20 transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            {siteConfig.business.email}
          </a>

          <div className="flex items-center gap-2.5 text-white/35 text-sm">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            {siteConfig.business.city}
          </div>
        </div>
      </div>
    </section>
  );
}
