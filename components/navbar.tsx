"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle hash navigation when page loads
  useEffect(() => {
    // Check if there's a hash in the URL
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1) // Remove the # character
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100) // Small delay to ensure the page is fully loaded
    }
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu()

    // If we're already on the homepage, just scroll to the section
    if (pathname === "/") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push(`/#${id}`)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-dark/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          WEBD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-light hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-light hover:text-primary transition-colors">
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-light hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-light hover:text-primary transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-light hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <Button onClick={() => scrollToSection("contact")} className="ml-4">
            Let&apos;s Talk
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-light hover:text-primary" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ top: "0", height: "100vh" }} // Ensure full height and starts from top
      >
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-medium text-light hover:text-primary transition-colors w-full text-center"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-xl font-medium text-light hover:text-primary transition-colors w-full text-center"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className="text-xl font-medium text-light hover:text-primary transition-colors w-full text-center"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="text-xl font-medium text-light hover:text-primary transition-colors w-full text-center"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection("testimonials")}
          className="text-xl font-medium text-light hover:text-primary transition-colors w-full text-center"
        >
          Testimonials
        </button>
        <Button onClick={() => scrollToSection("contact")} className="mt-4">
          Let&apos;s Talk
        </Button>
      </div>
    </header>
  )
}

