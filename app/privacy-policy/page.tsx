"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { companyInfo } from "@/constants/company"
import { useScrollTop } from "@/hooks/use-scroll-top"

export default function PrivacyPolicy() {
  // Use the hook to scroll to top on page load
  useScrollTop()

  return (
    <main className="min-h-screen bg-dark text-light pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          onClick={() => {
            // Ensure scroll to top when clicking back to home
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Privacy Policy</h1>

        <div className="bg-dark-700 rounded-lg p-6 md:p-8 shadow-lg">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to {companyInfo.name} ("we," "our," or "us"). We are committed to protecting your privacy and the
              information that you share with us. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways:</p>
            <h3 className="text-lg font-semibold mb-2">2.1 Personal Data</h3>
            <p className="mb-4">
              When you visit our website or use our services, we may collect personally identifiable information, such
              as your name, email address, phone number, and any other information you voluntarily provide to us.
            </p>
            <h3 className="text-lg font-semibold mb-2">2.2 Usage Data</h3>
            <p>
              We may also collect information about how you access and use our website, including your IP address,
              browser type, operating system, referring URLs, access times, and pages viewed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect about you for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features of our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>
                To provide you with news, special offers, and general information about other goods, services, and
                events which we offer
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers to monitor and analyze the use of our services</li>
              <li>With business partners to offer you certain products, services, or promotions</li>
              <li>With affiliates, in which case we will require those affiliates to honor this Privacy Policy</li>
              <li>With other users when you share personal information or otherwise interact in public areas</li>
              <li>If required to do so by law or in response to valid requests by public authorities</li>
              <li>
                If we believe disclosure is necessary to protect our rights, property, or safety, or that of our users
                or others
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct any inaccurate personal information we have about you</li>
              <li>The right to request that we delete any personal information we have about you</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <Link href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                {companyInfo.email}
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

