import Link from "next/link";
import VehicleImage from "@/components/VehicleImage";
import { siteConfig } from "@/lib/config";

export default function FeaturedVehicles() {
  return (
    <section
      id="vehicles"
      className="py-24 px-6"
      style={{ background: "#141414" }}
      aria-label="Featured Mazda vehicles"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C1001F" }}
            >
              Current Lineup
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              THE MAZDA LINEUP.
            </h2>
            <p className="mt-3 text-white/50 text-base leading-[1.75]">
              From first cars to family SUVs — matched to the right buyer every time.
            </p>
          </div>
          <Link
            href="/car-collections"
            className="flex-shrink-0 inline-flex items-center gap-2 border text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-200 hover:border-white/40 hover:text-white"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            View Full Collection
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Vehicle cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.featuredVehicles.map((vehicle) => (
            <article
              key={vehicle.slug}
              className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "#1E1E1E",
                borderColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {/* Vehicle image */}
              <div className="relative h-48 overflow-hidden bg-brand-slate">
                <VehicleImage
                  src={vehicle.image}
                  alt={`Mazda ${vehicle.model}`}
                  model={vehicle.model}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(14,14,14,0.75) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                {/* Model badge */}
                <div
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md"
                  style={{
                    background: "#C1001F",
                    color: "white",
                    fontFamily: "var(--font-montserrat)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {vehicle.model}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-white/60 text-xs leading-snug mb-4 italic" style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.9rem" }}>
                  {vehicle.tagline}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 mb-5">
                  {vehicle.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-white/45 text-xs">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
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
                  className="group/btn inline-flex items-center gap-2 w-full justify-center text-white text-xs font-bold py-3 px-4 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
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

        {/* Bottom nudge */}
        <div className="mt-10 text-center">
          <p className="text-white/35 text-sm mb-4">
            Not seeing what you&apos;re looking for? Ask about current availability including used and CPO inventory.
          </p>
          <Link
            href="/car-collections"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
            style={{ color: "#C1001F" }}
          >
            View the full collection
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
