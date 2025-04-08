"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { detailedServices } from "@/constants/services"

export default function DetailedServices() {
  const [openService, setOpenService] = useState<string | null>("web")

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id)
  }

  return (
    <section id="detailed-services" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-800 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow title-hover">
          Our <span className="text-gradient">Services</span> in Detail
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {detailedServices.map((service) => (
            <div key={service.id} className="bg-dark-700 rounded-lg overflow-hidden shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-6 text-left relative z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
                <ChevronDown
                  className={cn(
                    "h-6 w-6 text-primary transition-transform duration-300",
                    openService === service.id ? "rotate-180" : "",
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  openService === service.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="p-6 pt-0 relative z-10">
                  <p className="text-light/80 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="group/feature">
                        <span className="text-light/90 group-hover/feature:text-primary transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center md:text-left">
                    <Button
                      onClick={() => {
                        const contactSection = document.getElementById("contact")
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="mt-4 relative overflow-hidden group/btn"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary group-hover/btn:opacity-90 opacity-0 transition-opacity duration-300"></span>
                      <span className="relative">Contact Us to Get Started</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

