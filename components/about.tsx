import Image from "next/image"
import { workflowSteps } from "@/constants/company"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-800 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow title-hover">
              About <span className="text-gradient">WEBD</span>
            </h2>
            <p className="text-light/80 text-lg mb-6">
              At WEBD, we believe that exceptional design is the foundation of a powerful online presence. We&apos;re
              dedicated to helping small businesses stand out in a crowded digital landscape with custom solutions that
              are both beautiful and functional.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-light/80 text-lg mb-6">
              Empowering businesses through design that not only looks impressive but drives real results. We combine
              creativity with strategy to create digital experiences that engage, convert, and delight.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors cursor-default">
                Creative
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors cursor-default">
                Strategic
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors cursor-default">
                Results-Driven
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors cursor-default">
                Client-Focused
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="WEBD Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-primary rounded-lg animate-pulse"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 border-2 border-primary rounded-lg"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-glow title-hover">
            Our <span className="text-gradient">Workflow</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-dark-700 p-6 rounded-lg relative overflow-hidden group hover:bg-dark-600 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-4 -left-4 text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-light/70 relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

