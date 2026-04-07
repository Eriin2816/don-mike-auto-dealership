import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Financing() {
  const { financing } = siteConfig;

  return (
    <section
      id="financing"
      className="py-24 px-6"
      style={{ background: "#F5F3EE" }}
      aria-label="Financing and trade-in"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C1001F" }}
            >
              Financing &amp; Trade-In
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight tracking-tight mb-5">
              {financing.headline}
            </h2>
            <p
              className="text-brand-dark/70 mb-4 leading-[1.7]"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.2rem" }}
            >
              {financing.subheadline}
            </p>
            <p className="text-brand-graphite text-base leading-[1.75] mb-8">
              {financing.body}
            </p>

            {/* Points */}
            <ul className="flex flex-col gap-3 mb-8">
              {financing.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(193,0,31,0.1)" }}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3"
                      style={{ color: "#C1001F" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-brand-dark text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={siteConfig.cta.href}
              className="inline-flex items-center gap-3 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
              style={{
                background: "#C1001F",
                boxShadow: "0 4px 20px rgba(193,0,31,0.3)",
                fontFamily: "var(--font-montserrat)",
                letterSpacing: "0.04em",
              }}
            >
              {financing.cta.toUpperCase()}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: trade-in callout card */}
          <div className="flex flex-col gap-5">
            {/* Trade-In Card */}
            <div
              className="rounded-2xl p-7 border"
              style={{
                background: "#141414",
                borderColor: "rgba(193,0,31,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(193,0,31,0.1)", color: "#C1001F" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Trade-In Appraisals</h3>
              <p className="text-white/50 text-sm leading-[1.7] mb-4">
                We appraise your current vehicle and apply the value toward your down payment.
                No pressure to accept. No mystery about the number. Just a fair, transparent offer
                explained clearly.
              </p>
              <p className="text-white/30 text-xs">All makes and models welcome.</p>
            </div>

            {/* CPO Card */}
            <div
              className="rounded-2xl p-7 border"
              style={{
                background: "#1E1E1E",
                borderColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(193,0,31,0.1)", color: "#C1001F" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Certified Pre-Owned</h3>
              <p className="text-white/50 text-sm leading-[1.7] mb-1">
                CPO Mazdas come with a thorough multi-point inspection, full vehicle history,
                and extended Mazda-backed warranty — all at a price point that makes sense for
                budget-conscious buyers.
              </p>
            </div>

            {/* First-time buyer note */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(193,0,31,0.06)",
                border: "1px solid rgba(193,0,31,0.12)",
              }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: "#C1001F" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-brand-dark text-xs leading-[1.7]">
                <strong>First-time buyer?</strong> We have lender programs specifically designed
                for buyers with limited credit history. Book a call and we&apos;ll walk through
                your options honestly — before you commit to anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
