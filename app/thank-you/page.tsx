import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Thank You | Don Mike Auto Dealership — Gainesville, FL",
  description: "Your appointment request has been received. Our team will be in touch shortly to confirm your call.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "#0D0D0D" }}>

        {/* Confirmation hero */}
        <section
          className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 overflow-hidden text-center"
          aria-label="Booking confirmation"
        >
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(193,0,31,0.15) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Checkmark icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{
                background: "rgba(193,0,31,0.1)",
                border: "1px solid rgba(193,0,31,0.25)",
              }}
            >
              <svg
                className="w-10 h-10"
                style={{ color: "#C1001F" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              YOU&apos;RE{" "}
              <span style={{ color: "#C1001F" }}>CONFIRMED.</span>
            </h1>

            <p className="text-white/65 text-lg leading-[1.75] mb-4">
              Thank you for booking a call with the Don Mike Auto team. We&apos;ve received
              your request and a member of our team will reach out to confirm your
              appointment time.
            </p>

            <p
              className="text-white/40 text-base max-w-md mx-auto mb-12"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.1rem" }}
            >
              Most appointments are confirmed within a few hours during business hours.
              We look forward to speaking with you.
            </p>

            {/* What happens next */}
            <div
              className="rounded-2xl p-7 mb-10 text-left"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h2 className="text-white font-bold text-base mb-5">What happens next</h2>
              <ol className="flex flex-col gap-4">
                {[
                  {
                    n: "1",
                    title: "Appointment confirmation",
                    desc: "You&apos;ll receive a confirmation message via email or SMS with your scheduled time and a reminder before the call.",
                  },
                  {
                    n: "2",
                    title: "Pre-call questions welcome",
                    desc: "If you have questions before the call — about a specific model, financing, or a trade-in — reply to the confirmation and we&apos;ll answer them in advance.",
                  },
                  {
                    n: "3",
                    title: "Your call",
                    desc: "We&apos;ll spend 15–20 minutes understanding your situation, walking through vehicle options, and giving you honest, real payment numbers.",
                  },
                  {
                    n: "4",
                    title: "No pressure next steps",
                    desc: "After the call, you decide what to do next — with complete information and no deadline. We&apos;re here when you&apos;re ready.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex items-start gap-4">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(193,0,31,0.1)",
                        color: "#C1001F",
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">{step.title}</p>
                      <p className="text-white/45 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: step.desc }}
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "#C1001F",
                  boxShadow: "0 4px 20px rgba(193,0,31,0.3)",
                  fontFamily: "var(--font-montserrat)",
                  letterSpacing: "0.04em",
                }}
              >
                BACK TO HOME
              </Link>
              <Link
                href="/car-collections"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/65 hover:text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                Browse the Lineup
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Contact fallback */}
            <p className="text-white/30 text-xs leading-relaxed">
              Need to reach us directly?{" "}
              <a
                href={siteConfig.business.phoneHref}
                className="underline underline-offset-2 hover:text-white/60 transition-colors duration-200"
              >
                {siteConfig.business.phone}
              </a>
              {" "}·{" "}
              <a
                href={siteConfig.business.emailHref}
                className="underline underline-offset-2 hover:text-white/60 transition-colors duration-200"
              >
                {siteConfig.business.email}
              </a>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
