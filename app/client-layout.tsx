"use client"

import type React from "react"
import "@/app/globals.css"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Hero from "@/components/hero"
import ServicesGrid from "@/components/services-grid"
import About from "@/components/about"
import DetailedServices from "@/components/detailed-services"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Check if we're on the homepage
  const isHomePage = pathname === "/"

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <div className="flex min-h-screen flex-col relative z-10">
        <Navbar />
        <div className="flex-1">
          {isHomePage ? (
            <main className="min-h-screen bg-dark text-light">
              <Hero />
              <ServicesGrid />
              <About />
              <DetailedServices />
              <Portfolio />
              <Testimonials />
              <Contact />
              <ScrollToTop />
            </main>
          ) : (
            children
          )}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

