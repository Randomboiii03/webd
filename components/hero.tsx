"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-dark/80 z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 z-[-1]" />

      <div className="container mx-auto text-center z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-light leading-tight text-glow title-hover">
          WEBD – Elevate Your Business with a <span className="text-gradient">Powerful Online Presence</span>
        </h1>
        <p className="text-xl md:text-2xl text-light/80 mb-10 max-w-3xl mx-auto">
          Websites, branding, and marketing solutions tailored for small businesses ready to grow.
        </p>
        <Button
          onClick={() => {
            const contactSection = document.getElementById("contact")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          size="lg"
          className="text-lg px-8 py-6 relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
          <span className="relative">Let's Talk</span>
        </Button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => {
              const servicesSection = document.getElementById("services")
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            aria-label="Scroll down"
            className="cursor-pointer"
          >
            <ChevronDown className="h-10 w-10 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}

