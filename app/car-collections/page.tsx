import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleImage from "@/components/VehicleImage";
import PopupForm from "@/components/PopupForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mazda Vehicle Collection | Don Mike Auto — Gainesville, FL",
  description:
    "Browse the full Mazda lineup at Don Mike Auto in Gainesville, FL. New and certified pre-owned Mazda3, CX-30, CX-5, CX-50, CX-70, and CX-90. Serving all of Alachua County.",
};

export default function CarCollectionsPage() {
  return (
    <>
      <PopupForm />
      <Navbar />
      <main style={{ background: "#0D0D0D" }}>

        {/* Page hero */}
        <section
          className="relative pt-36 pb-20 px-6 overflow-hidden"
          aria-label="Car collection hero"
        >
          {/* Hero image background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/car-collection-hero.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, rgba(8,6,5,0.95) 0%, rgba(13,10,8,0.82) 45%, rgba(8,6,5,0.55) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7"
              style={{
                background: "rgba(193,0,31,0.10)",
                border: "1px solid rgba(193,0,31,0.20)",
                color: "#E8182E",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C1001F" }} />
              The Full Lineup
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.0] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              THE MAZDA{" "}
              <span style={{ color: "#C1001F" }}>COLLECTION.</span>
            </h1>

            <p className="text-white/60 text-lg max-w-xl leading-[1.75] mb-4">
              From the daily-driver Mazda3 to the flagship CX-90 — every model in the
              current Mazda lineup, matched to the right Gainesville buyer.
            </p>
            <p className="text-white/35 text-sm max-w-lg leading-relaxed">
              Availability varies. Contact us to confirm current new and certified pre-owned
              inventory before visiting. We respond the same day.
            </p>
          </div>
        </section>

        {/* Section intro */}
        <section className="px-6 pt-16 pb-8" style={{ background: "#0D0D0D" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-2">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#C1001F" }}
                >
                  New &amp; Certified Pre-Owned
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Every model. Matched to your life.
                </h2>
              </div>
              <Link
                href={siteConfig.cta.href}
                className="flex-shrink-0 inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "#C1001F",
                  boxShadow: "0 4px 16px rgba(193,0,31,0.3)",
                  fontFamily: "var(--font-montserrat)",
                  letterSpacing: "0.04em",
                }}
              >
                SCHEDULE A CALL
              </Link>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-2xl mt-3">
              Each model below is part of the active Mazda lineup. New and certified pre-owned
              availability changes regularly. Inquire to check current stock or ask about
              incoming inventory.
            </p>
          </div>
        </section>

        {/* Vehicle collection grid */}
        <section className="px-6 py-12" style={{ background: "#0D0D0D" }} aria-label="Vehicle cards">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.vehicleCollection.map((vehicle) => (
                <article
                  key={vehicle.slug}
                  className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#1A1A1A",
                    borderColor: "rgba(255,255,255,0.07)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Vehicle image */}
                  <div className="relative h-52 overflow-hidden" style={{ background: "#141414" }}>
                    <VehicleImage
                      src={vehicle.image}
                      alt={`Mazda ${vehicle.model}`}
                      model={vehicle.model}
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(26,26,26,0.9) 0%, transparent 55%)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Model label over image */}
                    <div className="absolute bottom-3 left-4">
                      <h3
                        className="text-white text-xl font-black leading-none"
                        style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "-0.01em" }}
                      >
                        {vehicle.model}
                      </h3>
                    </div>
                    {/* Red accent top-right */}
                    <div
                      className="absolute top-0 right-0 w-12 h-1"
                      style={{ background: "#C1001F" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    {/* Buyer fit */}
                    <p
                      className="text-white/55 text-xs mb-4 leading-relaxed italic"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.9rem" }}
                    >
                      {vehicle.buyerFit}
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-col gap-2 mb-5">
                      {vehicle.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-white/45 text-xs leading-relaxed">
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: "#C1001F" }}
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={siteConfig.cta.href}
                      className="group/btn inline-flex items-center gap-2 w-full justify-center text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                      style={{
                        background: "#C1001F",
                        fontFamily: "var(--font-montserrat)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {vehicle.cta.toUpperCase()}
                      <svg
                        className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Availability disclaimer */}
            <div
              className="mt-10 p-5 rounded-xl flex items-start gap-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-white/30 text-xs leading-relaxed">
                <strong className="text-white/50">Availability note:</strong> Inventory changes frequently.
                Vehicle images shown are representative of the model. Actual trim levels, colors, and
                features may vary. Contact us to confirm current availability on new and certified
                pre-owned units before visiting. We respond the same day.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="px-6 py-20 text-center"
          style={{ background: "#141414" }}
          aria-label="Collection page CTA"
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              NOT SURE WHICH MODEL IS{" "}
              <span style={{ color: "#C1001F" }}>RIGHT FOR YOU?</span>
            </h2>
            <p className="text-white/50 text-base leading-[1.75] mb-8 max-w-lg mx-auto">
              That&apos;s exactly what our call is for. Tell us your lifestyle, budget, and priorities —
              we&apos;ll point you toward the right vehicle and the right payment.
            </p>
            <Link
              href={siteConfig.cta.href}
              className="inline-flex items-center gap-3 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              style={{
                background: "#C1001F",
                boxShadow: "0 4px 24px rgba(193,0,31,0.4)",
                fontFamily: "var(--font-montserrat)",
                letterSpacing: "0.04em",
              }}
            >
              SCHEDULE A CALL
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
