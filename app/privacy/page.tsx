import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Don Mike Auto Dealership",
  description: "Privacy policy for Don Mike Auto Dealership. How we collect, use, and protect your information.",
};

const EFFECTIVE_DATE = "April 7, 2025";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#0D0D0D" }}>

        {/* Header */}
        <section className="pt-36 pb-12 px-6" aria-label="Privacy header">
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
              PRIVACY POLICY
            </h1>
            <p className="text-white/40 text-sm">
              Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {siteConfig.business.name}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-24" aria-label="Privacy content">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-8 sm:p-10 mb-8"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Intro */}
              <p className="text-white/50 text-sm leading-[1.8] mb-8">
                {siteConfig.business.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and
                is committed to protecting the personal information you share with us.
                This Privacy Policy explains how we collect, use, and safeguard information
                when you interact with our website and team. Please read this policy carefully.
                By using our Site, you agree to the practices described here.
              </p>

              <LegalSection title="1. Information We Collect">
                <p>
                  We may collect the following types of information when you interact with our
                  website or contact our team:
                </p>
                <ul>
                  <li><strong className="text-white/70">Contact information:</strong> Name, phone number, email address, and any other information you voluntarily provide through forms or direct communication.</li>
                  <li><strong className="text-white/70">Inquiry details:</strong> Vehicle interest, budget range, trade-in information, and other details you share when requesting information or booking a call.</li>
                  <li><strong className="text-white/70">Technical data:</strong> IP address, browser type, referring URL, pages visited, and session duration — collected automatically through standard web analytics tools.</li>
                  <li><strong className="text-white/70">Cookies:</strong> Small data files stored on your device to improve Site functionality and track usage patterns. See Section 5 for more detail.</li>
                </ul>
                <p>
                  We do not collect sensitive personal information such as Social Security
                  numbers, driver&apos;s license numbers, or financial account details through this
                  website. Any such information required for financing would be collected
                  separately through a secure, formal credit application process with your
                  explicit written consent.
                </p>
              </LegalSection>

              <LegalSection title="2. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your inquiries and appointment requests.</li>
                  <li>Match you with appropriate vehicle options and financing guidance.</li>
                  <li>Confirm and manage scheduled calls and appointments.</li>
                  <li>Send follow-up communications related to your inquiry.</li>
                  <li>Improve the functionality and content of our website.</li>
                  <li>Comply with applicable legal obligations.</li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information to unaffiliated
                  third parties for marketing purposes without your consent.
                </p>
              </LegalSection>

              <LegalSection title="3. Lead Form and Contact Form Handling">
                <p>
                  When you submit a contact form, scheduling request, or any inquiry through
                  this Site, the information you provide is transmitted to our team for follow-up.
                  This may include routing your information through our CRM system or scheduling
                  platform to manage and track your inquiry efficiently.
                </p>
                <p>
                  By submitting a form, you consent to being contacted by our team via the
                  communication channels you provided (phone, email, or SMS) in connection
                  with your inquiry. We will not use your contact information for unrelated
                  marketing unless you separately opt in to marketing communications.
                </p>
              </LegalSection>

              <LegalSection title="4. Booking and Appointment Inquiries">
                <p>
                  When you book a call or appointment through our scheduling tool (operated
                  by a third-party service provider), the information you provide — including
                  name, contact details, and preferred appointment time — is stored and
                  processed by that provider in accordance with their own privacy policy.
                  We receive confirmation and contact details to manage your appointment.
                </p>
                <p>
                  We use this information solely to fulfill your appointment request and to
                  follow up in connection with your vehicle inquiry.
                </p>
              </LegalSection>

              <LegalSection title="5. Cookies and Analytics">
                <p>
                  Our Site uses cookies and similar technologies to understand how visitors
                  use the Site, identify returning visitors, and improve user experience. This
                  may include:
                </p>
                <ul>
                  <li><strong className="text-white/70">Session cookies:</strong> Temporary cookies that expire when you close your browser.</li>
                  <li><strong className="text-white/70">Persistent cookies:</strong> Cookies that remain on your device for a set period to recognize returning visitors.</li>
                  <li><strong className="text-white/70">Analytics cookies:</strong> Used to collect aggregated, non-personally identifiable information about site traffic and usage (e.g., Google Analytics or similar tools).</li>
                </ul>
                <p>
                  You can instruct your browser to refuse cookies or alert you when cookies
                  are being set. Disabling cookies may affect the functionality of certain
                  features on the Site.
                </p>
              </LegalSection>

              <LegalSection title="6. Communication Consent">
                <p>
                  By providing your phone number or email address through any form on this
                  Site, you consent to being contacted by {siteConfig.business.name} regarding
                  your vehicle inquiry, including by phone and email.
                </p>
                <p>
                  If you choose to opt in to text message (SMS) communications, message and
                  data rates may apply. You may opt out of SMS communications at any time by
                  replying STOP to any text message you receive from us.
                </p>
                <p>
                  You may opt out of email communications at any time by contacting us
                  directly at{" "}
                  <a
                    href={siteConfig.business.emailHref}
                    className="underline underline-offset-2 hover:text-white/80 transition-colors duration-200"
                    style={{ color: "#C1001F" }}
                  >
                    {siteConfig.business.email}
                  </a>
                  .
                </p>
              </LegalSection>

              <LegalSection title="7. Data Sharing and Third-Party Services">
                <p>
                  We may share your information with trusted third-party service providers who
                  assist us in operating our website and managing customer communications —
                  including scheduling platforms, CRM systems, and analytics tools. These
                  providers are contractually required to protect your information and may
                  only use it to perform services on our behalf.
                </p>
                <p>
                  We may also disclose information when required by law, to comply with legal
                  process, or to protect the rights, property, or safety of {siteConfig.business.name},
                  our customers, or others.
                </p>
                <p>
                  We do not share your personal information with vehicle manufacturers,
                  third-party advertisers, or data brokers for marketing purposes without
                  your express consent.
                </p>
              </LegalSection>

              <LegalSection title="8. Data Security">
                <p>
                  We implement reasonable administrative, technical, and physical safeguards
                  to protect the information we collect from unauthorized access, disclosure,
                  alteration, or destruction. However, no method of transmission over the
                  Internet or electronic storage is completely secure. We cannot guarantee
                  absolute security of your information.
                </p>
                <p>
                  If you believe your information has been compromised, please contact us
                  immediately.
                </p>
              </LegalSection>

              <LegalSection title="9. Children's Privacy">
                <p>
                  This Site is not directed to individuals under the age of 18. We do not
                  knowingly collect personal information from minors. If we become aware that
                  we have collected personal information from a person under 18 without
                  parental consent, we will take steps to delete that information.
                </p>
              </LegalSection>

              <LegalSection title="10. Your Choices and Rights">
                <p>You have the right to:</p>
                <ul>
                  <li>Request access to the personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your information, subject to any legal retention requirements.</li>
                  <li>Opt out of receiving marketing communications from us at any time.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information
                  in Section 12 below.
                </p>
              </LegalSection>

              <LegalSection title="11. Updates to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in
                  our practices or applicable law. When we make material changes, we will
                  update the effective date at the top of this page. We encourage you to
                  review this policy periodically. Your continued use of the Site after
                  changes are posted constitutes your acceptance of the updated policy.
                </p>
              </LegalSection>

              <LegalSection title="12. Contact Us" isLast>
                <p>
                  If you have questions, concerns, or requests related to this Privacy Policy
                  or how we handle your information, please contact us:
                </p>
                <div className="mt-3 flex flex-col gap-1">
                  <p className="text-white/70 font-medium">{siteConfig.business.name}</p>
                  <a
                    href={siteConfig.business.phoneHref}
                    className="hover:text-white/80 transition-colors duration-200"
                    style={{ color: "#C1001F" }}
                  >
                    {siteConfig.business.phone}
                  </a>
                  <a
                    href={siteConfig.business.emailHref}
                    className="hover:text-white/80 transition-colors duration-200"
                    style={{ color: "#C1001F" }}
                  >
                    {siteConfig.business.email}
                  </a>
                  <p>{siteConfig.business.city}</p>
                </div>
              </LegalSection>
            </div>

            {/* Back navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                Terms &amp; Conditions
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
      <div className="text-white/50 text-sm leading-[1.8] space-y-3 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:my-3 [&_ul]:ml-4 [&_li]:list-disc [&_li]:text-white/40">
        {children}
      </div>
    </div>
  );
}
