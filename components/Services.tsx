// Services.tsx — repurposed as the Mazda Lineup Highlights / Why Mazda section
import { siteConfig } from "@/lib/config";

const MAZDA_REASONS = [
  {
    id: "kodo-design",
    title: "Kodo Design Language",
    description:
      "Every Mazda is shaped by a design philosophy built around movement, emotion, and restraint. The result is a lineup that looks and feels a generation ahead of its price point.",
  },
  {
    id: "skyactiv",
    title: "SKYACTIV Technology",
    description:
      "Mazda's proprietary powertrain and chassis engineering delivers exceptional fuel efficiency without sacrificing driving dynamics — a balance few brands achieve.",
  },
  {
    id: "safety",
    title: "Top Safety Ratings",
    description:
      "Mazda vehicles consistently earn top marks from NHTSA and the IIHS. i-ACTIVSENSE driver assistance systems come standard across the lineup, not as costly add-ons.",
  },
  {
    id: "value-retention",
    title: "Strong Value Retention",
    description:
      "Mazda holds its value better than most mainstream brands. For buyers thinking about trade-in down the road, that matters — and it's built into every purchase decision.",
  },
  {
    id: "interior",
    title: "Premium Interior Quality",
    description:
      "Mazda interiors are widely recognized as class-leading at their price points. Soft-touch materials, intuitive layouts, and a refined cabin feel that punches well above its cost.",
  },
  {
    id: "awd",
    title: "i-ACTIV AWD Available",
    description:
      "North Florida weather demands confidence on wet roads. Mazda's intelligent all-wheel drive system proactively distributes power before slip occurs — not after.",
  },
  {
    id: "cpo",
    title: "Certified Pre-Owned Program",
    description:
      "Mazda's CPO program includes a thorough inspection, 12-month / 12,000-mile comprehensive coverage, and a 7-year / 75,000-mile powertrain warranty on qualifying vehicles.",
  },
  {
    id: "total-cost",
    title: "Low Total Cost of Ownership",
    description:
      "From insurance rates to maintenance costs, Mazda ownership is built to stay affordable over time. Reliable mechanicals and reasonable service costs reduce long-term financial pressure.",
  },
];

const CARD_NUMBERS = ["01", "02", "03", "04", "05", "06", "07", "08"];

const REASON_ICONS: Record<string, React.ReactNode> = {
  "kodo-design": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  skyactiv: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  safety: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "value-retention": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  interior: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  awd: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
  cpo: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  "total-cost": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="why-mazda"
      className="py-24 px-6"
      style={{ background: "#F5F3EE" }}
      aria-label="Why Mazda"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C1001F" }}
          >
            The Mazda Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight tracking-tight">
            Why Mazda stands apart from the competition on North Main Street.
          </h2>
          <p className="mt-4 text-brand-graphite text-base leading-[1.75]">
            Toyota, Kia, Hyundai, and Subaru are all within a mile. Here is what consistently
            differentiates a Mazda purchase — and why buyers who drive both rarely go back.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MAZDA_REASONS.map((reason, i) => (
            <article
              key={reason.id}
              className="group relative bg-white rounded-2xl p-6 border border-brand-warmgray transition-all duration-300 cursor-default overflow-hidden hover:-translate-y-0.5"
              style={{
                boxShadow: "0 1px 3px rgba(13,0,0,0.04), 0 4px 16px rgba(13,0,0,0.05)",
              }}
            >
              {/* Top accent bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#C1001F" }}
              />

              {/* Card number */}
              <span
                className="absolute top-5 right-5 text-xs font-bold tracking-widest"
                style={{ color: "rgba(193,0,31,0.2)" }}
                aria-hidden="true"
              >
                {CARD_NUMBERS[i]}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: "rgba(193,0,31,0.07)",
                  color: "#C1001F",
                }}
              >
                {REASON_ICONS[reason.id]}
              </div>

              <h3 className="text-brand-dark text-sm font-bold mb-2 leading-snug pr-6">
                {reason.title}
              </h3>
              <p className="text-brand-graphite text-sm leading-[1.7]">
                {reason.description}
              </p>

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 4px 12px rgba(193,0,31,0.06), 0 16px 40px rgba(13,0,0,0.08)",
                  border: "1px solid rgba(193,0,31,0.12)",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
