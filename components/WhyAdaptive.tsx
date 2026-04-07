// WhyAdaptive.tsx — repurposed as "Why Don Mike Auto" section
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const WHY_ICONS: React.ReactNode[] = [
  // Mazda expertise
  <svg key="expertise" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>,
  // Payment-forward
  <svg key="payment" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Segment guidance
  <svg key="segments" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  // Speed
  <svg key="speed" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Trade-in
  <svg key="tradein" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>,
  // No pressure
  <svg key="nopressure" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function WhyAdaptive() {
  return (
    <section
      id="why-don-mike"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#1A1A1A" }}
      aria-label="Why Don Mike Auto"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(193,0,31,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C1001F" }}
          >
            Why Don Mike Auto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            A dealership built around clarity, not closing tactics.
          </h2>
          <p className="mt-4 text-white/50 text-base leading-[1.75]">
            In a corridor where four competitors operate within a mile, the differentiator
            is not inventory — it is how you are treated from the first message to the day
            you drive home.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.whyDonMike.map((item, i) => (
            <article
              key={i}
              className="group rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 cursor-default border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "rgba(193,0,31,0.1)", color: "#C1001F" }}
              >
                {WHY_ICONS[i]}
              </div>

              <h3 className="text-white text-sm font-bold mb-2">{item.title}</h3>
              <p className="text-white/45 text-sm leading-[1.7]">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/[0.07]">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Ready to experience the difference?
            </p>
            <p className="text-white/45 text-sm">
              Book a call and let&apos;s match you to the right Mazda at the right price.
            </p>
          </div>
          <Link
            href={siteConfig.cta.href}
            className="flex-shrink-0 group inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "#C1001F",
              boxShadow: "0 4px 20px rgba(193,0,31,0.3)",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.03em",
            }}
          >
            {siteConfig.cta.label.toUpperCase()}
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
