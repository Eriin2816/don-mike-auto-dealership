import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6"
      style={{ background: "#F5F3EE" }}
      aria-label="How to buy"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C1001F" }}
          >
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight tracking-tight">
            How buying at Don Mike Auto actually works.
          </h2>
          <p className="mt-4 text-brand-graphite text-base leading-[1.75]">
            Three steps. No surprises. Designed to make the buying process feel like
            it should — clear, efficient, and on your terms.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, #E5E2D8, transparent)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {siteConfig.howItWorks.map((step, i) => (
              <article key={i} className="relative flex flex-col">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(193,0,31,0.08)",
                      border: "1px solid rgba(193,0,31,0.15)",
                    }}
                  >
                    <span
                      className="text-lg font-extrabold tracking-[-0.04em]"
                      style={{ color: "#C1001F", fontFamily: "var(--font-montserrat)" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div className="hidden lg:flex items-center gap-2 flex-1" aria-hidden="true">
                    {i < siteConfig.howItWorks.length - 1 && (
                      <div className="flex-1 h-px bg-brand-warmgray" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-brand-graphite text-base leading-[1.75]">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {i < siteConfig.howItWorks.length - 1 && (
                  <div
                    className="lg:hidden absolute -bottom-5 left-7 w-px h-10 bg-gradient-to-b from-brand-warmgray to-transparent"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl bg-white border border-brand-warmgray"
          style={{ boxShadow: "0 1px 3px rgba(13,0,0,0.04), 0 4px 16px rgba(13,0,0,0.05)" }}
        >
          <div className="flex-1">
            <h3 className="text-brand-dark font-bold text-lg mb-1">
              Ready to see what this looks like for your situation?
            </h3>
            <p className="text-brand-graphite text-sm leading-relaxed">
              A quick call is the best first step. We&apos;ll match you to the right vehicle
              and walk through real financing numbers before you set foot on a lot.
            </p>
          </div>
          <Link
            href={siteConfig.cta.href}
            className="flex-shrink-0 inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "#C1001F",
              boxShadow: "0 4px 20px rgba(193,0,31,0.3)",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.03em",
            }}
          >
            SCHEDULE A CALL
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
