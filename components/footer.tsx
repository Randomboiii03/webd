"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"
import { companyInfo, contactInfo } from "@/constants/company"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    // If we're already on the homepage, just scroll to the section
    if (pathname === "/") {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ behavior: "smooth" })
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push(`/#${id}`)
    }
  }

  return (
    <footer className="bg-dark-900 text-light/70 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-800 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 inline-block" onClick={handleScrollToTop}>
              {companyInfo.name}
            </Link>
            <p className="mb-4 max-w-md mx-auto md:mx-0">
              Building standout brands for standout businesses. We create powerful digital experiences that elevate your
              business and connect with your audience.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* <Link
                href={contactInfo.socialMedia.instagram.url}
                className="text-light/50 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link> */}
              <Link
                href={contactInfo.socialMedia.facebook.url}
                className="text-light/50 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-light/70 hover:text-primary transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-light/70 hover:text-primary transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-light/70 hover:text-primary transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-light/70 hover:text-primary transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-light/70 hover:text-primary transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-light/70 hover:text-primary transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-light">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">
                {companyInfo.location}
              </p>
              <p className="mb-2">
                <Link href={`mailto:${contactInfo.email.primary}`} className="hover:text-primary transition-colors">
                  {contactInfo.email.primary}
                </Link>
              </p>
              <p>
                <Link href={`tel:${contactInfo.phone.primary}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone.primary}
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">{companyInfo.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm hover:text-primary transition-colors"
              onClick={handleScrollToTop}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm hover:text-primary transition-colors"
              onClick={handleScrollToTop}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

