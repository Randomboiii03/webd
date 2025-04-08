"use client"
import { Button } from "@/components/ui/button"
import { services, features } from "@/constants/services"

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow title-hover">
          Our <span className="text-gradient">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-700 p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-light/70 mb-4 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-dark-700 rounded-lg p-8 mb-16 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-center mb-10 relative z-10">
            Why <span className="text-gradient">WEBD</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center md:items-start group">
                <h4 className="text-lg font-semibold mb-2 text-center md:text-left group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-light/70 text-center md:text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            size="lg"
            className="text-lg px-8 relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/50 to-primary group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
            <span className="relative">Start Your Journey With Us</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

