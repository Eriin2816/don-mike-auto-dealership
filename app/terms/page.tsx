import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Don Mike Auto Dealership",
  description: "Terms and conditions for use of the Don Mike Auto Dealership website.",
};

const EFFECTIVE_DATE = "April 7, 2025";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#0D0D0D" }}>

        {/* Header */}
        <section className="pt-36 pb-12 px-6" aria-label="Terms header">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C1001F" }}
            >
              Legal
            </p>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              TERMS &amp; CONDITIONS
            </h1>
            <p className="text-white/40 text-sm">
              Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {siteConfig.business.name}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-24" aria-label="Terms content">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <LegalSection title="1. Acceptance of Terms">
                <p>
                  By accessing or using the website operated by {siteConfig.business.name}
                  (the &ldquo;Site&rdquo;), you agree to be bound by these Terms and Conditions.
                  If you do not agree to these terms, please do not use the Site.
                  Your continued use of the Site following the posting of any changes
                  constitutes your acceptance of those changes.
                </p>
              </LegalSection>

              <LegalSection title="2. Website Use">
                <p>
                  This Site is provided for informational purposes related to the purchase,
                  lease, and service of vehicles. You agree to use the Site only for lawful
                  purposes and in a manner that does not infringe the rights of others or
                  restrict their use of the Site. You may not attempt to gain unauthorized
                  access to any portion of the Site or its related systems.
                </p>
              </LegalSection>

              <LegalSection title="3. Vehicle Information Disclaimer">
                <p>
                  Vehicle listings, descriptions, photography, and specifications on this Site
                  are provided for general informational purposes only. While we make reasonable
                  efforts to keep vehicle information accurate and current, we do not warrant
                  that all information is complete, current, or error-free. Vehicle availability,
                  trim levels, features, and configurations are subject to change without notice.
                </p>
                <p>
                  Images shown on this Site may be representative of a model or trim level and
                  may not reflect the exact vehicle available. Always confirm current inventory,
                  features, and specifications directly with our team before making a purchase
                  decision.
                </p>
              </LegalSection>

              <LegalSection title="4. Pricing and Availability Disclaimer">
                <p>
                  Prices shown on this Site, if any, are subject to change without notice and
                  do not constitute a binding offer or quote. Final pricing is determined at the
                  time of sale and is subject to applicable taxes, fees, documentation charges,
                  and any other legally required additions. Advertised prices may exclude dealer
                  fees and other charges required by law.
                </p>
                <p>
                  Vehicle availability cannot be guaranteed. Inventory is subject to prior sale
                  and changes without notice. We strongly recommend confirming availability
                  directly with our team before visiting.
                </p>
              </LegalSection>

              <LegalSection title="5. Third-Party Links">
                <p>
                  This Site may contain links to third-party websites, including financing
                  platforms, booking tools, and manufacturer resources. These links are provided
                  for your convenience only. {siteConfig.business.name} has no control over the
                  content or practices of third-party sites and is not responsible for their
                  content, privacy policies, or operations. Accessing third-party sites is at
                  your own risk.
                </p>
              </LegalSection>

              <LegalSection title="6. Financing and Credit Application Disclaimer">
                <p>
                  Any financing information, payment estimates, or rate indications presented on
                  this Site are for illustrative purposes only and do not constitute a credit
                  approval, commitment to lend, or binding financing offer. Actual financing
                  terms, rates, and monthly payment amounts are determined by lenders based on
                  your individual credit profile, down payment, term selection, and other factors.
                </p>
                <p>
                  Completing a contact form or booking a call does not constitute a credit
                  application or financing approval. Formal credit applications are processed
                  separately with your written consent.
                </p>
              </LegalSection>

              <LegalSection title="7. Intellectual Property">
                <p>
                  All content on this Site — including text, images, logos, graphics, layout,
                  and design — is the property of {siteConfig.business.name} or its licensors
                  and is protected by applicable intellectual property laws. You may not reproduce,
                  distribute, modify, or create derivative works from any Site content without
                  express written permission.
                </p>
                <p>
                  Mazda brand names, logos, and vehicle images remain the property of Mazda
                  Motor Corporation and its licensees. Use of these marks on this Site does not
                  imply any affiliation with or endorsement by Mazda Motor Corporation beyond
                  what is legally permitted.
                </p>
              </LegalSection>

              <LegalSection title="8. Limitation of Liability">
                <p>
                  To the fullest extent permitted by applicable law, {siteConfig.business.name}
                  shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages arising out of or related to your use of or inability to use
                  this Site or its content. In no event shall our total liability to you exceed
                  the greater of one hundred dollars ($100) or the amount you paid to us in the
                  preceding twelve months.
                </p>
                <p>
                  This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
                  warranties of any kind, either express or implied.
                </p>
              </LegalSection>

              <LegalSection title="9. Indemnification">
                <p>
                  You agree to indemnify and hold harmless {siteConfig.business.name}, its
                  employees, agents, and representatives from any claims, damages, losses, or
                  expenses — including reasonable legal fees — arising from your use of the Site
                  or your violation of these Terms and Conditions.
                </p>
              </LegalSection>

              <LegalSection title="10. Governing Law">
                <p>
                  These Terms and Conditions are governed by the laws of the State of Florida,
                  without regard to its conflict of law provisions. Any disputes arising under
                  these terms shall be subject to the exclusive jurisdiction of the courts
                  located in Alachua County, Florida.
                </p>
              </LegalSection>

              <LegalSection title="11. Updates to These Terms">
                <p>
                  We reserve the right to update or modify these Terms and Conditions at any
                  time without prior notice. Changes will be effective immediately upon posting
                  to this page. We encourage you to review these terms periodically. Your
                  continued use of the Site after changes are posted constitutes your acceptance
                  of the revised terms.
                </p>
              </LegalSection>

              <LegalSection title="12. Contact Information" isLast>
                <p>
                  If you have questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-3 flex flex-col gap-1">
                  <p className="text-white/70 font-medium">{siteConfig.business.name}</p>
                  <a href={siteConfig.business.phoneHref} className="hover:text-white/80 transition-colors duration-200" style={{ color: "#C1001F" }}>
                    {siteConfig.business.phone}
                  </a>
                  <a href={siteConfig.business.emailHref} className="hover:text-white/80 transition-colors duration-200" style={{ color: "#C1001F" }}>
                    {siteConfig.business.email}
                  </a>
                  <p>{siteConfig.business.city}</p>
                </div>
              </LegalSection>
            </div>

            {/* Back navigation */}
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/"
                className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function LegalSection({
  title,
  children,
  isLast = false,
}: {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className={`${isLast ? "" : "pb-8 mb-8 border-b"}`} style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <h2 className="text-white font-bold text-base mb-3">{title}</h2>
      <div className="text-white/50 text-sm leading-[1.8] space-y-3">
        {children}
      </div>
    </div>
  );
}
