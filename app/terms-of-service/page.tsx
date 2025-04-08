"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { companyInfo } from "@/constants/company"
import { useScrollTop } from "@/hooks/use-scroll-top"

export default function TermsOfService() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Terms of Service</h1>

        <div className="bg-dark-700 rounded-lg p-6 md:p-8 shadow-lg">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to {companyInfo.name} ("we," "our," or "us"). By accessing our website or using our services, you
              agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree
              with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials on our website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license
              you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by us at any time. Upon terminating your viewing of these materials or upon the termination of this
              license, you must destroy any downloaded materials in your possession whether in electronic or printed
              format.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or
              implied, and hereby disclaim and negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
            <p>
              Further, we do not warrant or make any representations concerning the accuracy, likely results, or
              reliability of the use of the materials on our website or otherwise relating to such materials or on any
              sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Limitations</h2>
            <p>
              In no event shall we or our suppliers be liable for any damages (including, without limitation, damages
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use
              the materials on our website, even if we or an authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We
              do not warrant that any of the materials on our website are accurate, complete, or current. We may make
              changes to the materials contained on our website at any time without notice. However, we do not make any
              commitment to update the materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any
              such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Modifications</h2>
            <p>
              We may revise these Terms of Service for our website at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{" "}
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

