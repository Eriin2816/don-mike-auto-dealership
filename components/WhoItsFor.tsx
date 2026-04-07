// WhoItsFor.tsx — repurposed as Buyer Segments section
import Link from "next/link";
import { siteConfig } from "@/lib/config";

const SEGMENT_ICONS: React.ReactNode[] = [
  // Students
  <svg key="students" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>,
  // Professionals
  <svg key="professionals" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>,
  // Families
  <svg key="families" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Trade-ins
  <svg key="tradeins" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>,
];

export default function WhoItsFor() {
  return (
    <section
      id="buyer-segments"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#141414" }}
      aria-label="Who we serve"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 90% 10%, rgba(193,0,31,0.10) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 10% 90%, rgba(13,0,0,0.6) 0%, transparent 60%)",
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
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Gainesville&apos;s buyer market is not one-size-fits-all. Neither is our approach.
          </h2>
          <p className="mt-4 text-white/50 text-base leading-[1.75]">
            From UF students buying their first car to Alachua County families upgrading
            to a three-row SUV — we match our guidance to your actual situation and budget.
          </p>
        </div>

        {/* Segments grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {siteConfig.buyerSegments.map((segment, i) => (
            <article
              key={segment.id}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.06] cursor-default border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(193,0,31,0.12)",
                  color: "#E8182E",
                  border: "1px solid rgba(193,0,31,0.2)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C1001F" }} />
                {segment.badge}
              </div>

              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(193,0,31,0.1)", color: "#C1001F" }}
                >
                  {SEGMENT_ICONS[i]}
                </div>
                <h3 className="text-white text-lg font-bold leading-snug">{segment.title}</h3>
              </div>

              <p className="text-white/50 text-sm leading-[1.75] mb-5">
                {segment.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2">
                {segment.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-white/40 text-xs">
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
                    {h}
                  </li>
                ))}
              </ul>

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: "1px solid rgba(193,0,31,0.2)" }}
              />
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-10 flex items-start gap-3 p-5 rounded-xl max-w-2xl"
          style={{
            border: "1px solid rgba(193,0,31,0.15)",
            background: "rgba(193,0,31,0.05)",
          }}
        >
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: "#C1001F" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-white/60 text-sm leading-[1.7]">
            Not sure which category fits you? That&apos;s exactly what a quick call is for.
            We&apos;ll ask the right questions and point you toward the right vehicle.{" "}
            <Link
              href={siteConfig.cta.href}
              className="font-semibold underline underline-offset-2 transition-colors duration-200"
              style={{ color: "#C1001F" }}
            >
              Book a call now.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
