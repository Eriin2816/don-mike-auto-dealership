import { siteConfig } from "@/lib/config";

const TRUST_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  finance: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  trade: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  map: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
};

export default function Trust() {
  return (
    <section
      className="bg-brand-offwhite py-16 px-6 border-b border-brand-warmgray"
      aria-label="Why Don Mike Auto"
    >
      <div className="max-w-7xl mx-auto">

        {/* Market context bar */}
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C1001F" }}
          >
            Gainesville&apos;s Mazda Resource
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-tight tracking-tight mb-3">
            Built for this market. Focused on this brand.
          </h2>
          <p className="text-brand-graphite text-base leading-relaxed max-w-2xl mx-auto">
            Gainesville is a two-tier market — university-driven city buyers and
            family-oriented county commuters. We understand both, and we match our
            guidance to where you actually are in life.
          </p>
        </div>

        {/* Trust pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteConfig.trust.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center text-center gap-3 bg-white rounded-xl p-5 border border-brand-warmgray hover:border-red-200 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
              style={{
                boxShadow: "0 1px 3px rgba(13,0,0,0.04), 0 2px 8px rgba(13,0,0,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: "rgba(193,0,31,0.08)", color: "#C1001F" }}
              >
                {TRUST_ICONS[item.icon]}
              </div>
              <p className="text-brand-dark text-xs font-semibold leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Market stat strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              stat: "291,782",
              label: "Alachua County residents in our trade area",
              note: "U.S. Census ACS 2024",
            },
            {
              stat: "56,000+",
              label: "University of Florida students driving demand every year",
              note: "UF Fall 2024 enrollment",
            },
            {
              stat: "4 Competitors",
              label: "On the same street. We earn your business with clarity.",
              note: "North Main Street corridor",
            },
          ].map((s) => (
            <div
              key={s.stat}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-brand-warmgray"
              style={{ boxShadow: "0 1px 3px rgba(13,0,0,0.04)" }}
            >
              <div
                className="text-3xl font-black leading-none flex-shrink-0"
                style={{ color: "#C1001F", fontFamily: "var(--font-montserrat)" }}
              >
                {s.stat}
              </div>
              <div>
                <p className="text-brand-dark text-sm font-semibold leading-snug mb-1">{s.label}</p>
                <p className="text-brand-graphite text-xs">{s.note}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
