"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { testimonials } from "@/constants/testimonials"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
  }

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section id="testimonials" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-800 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow title-hover">
          Client <span className="text-gradient">Testimonials</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="bg-dark-700 rounded-lg p-8 md:p-10 shadow-lg relative overflow-hidden group"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Quote className="h-12 w-12 text-primary/30 mb-6 relative z-10 mx-auto md:mx-0" />
            <p className="text-lg md:text-xl text-light/90 mb-8 relative z-10 text-center md:text-left">
              {testimonials[currentIndex].quote}
            </p>
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-xl font-bold text-glow">{testimonials[currentIndex].name}</h4>
              <p className="text-primary">{testimonials[currentIndex].business}</p>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-dark-700 hover:bg-primary/20 transition-colors transform hover:scale-110 duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === index ? "bg-primary scale-125" : "bg-dark-700 hover:bg-primary/50 hover:scale-110",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-dark-700 hover:bg-primary/20 transition-colors transform hover:scale-110 duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

