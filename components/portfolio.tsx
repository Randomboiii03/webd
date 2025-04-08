"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { portfolioItems, categories } from "@/constants/portfolio"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  // Close lightbox when clicking outside the content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
        setSelectedItem(null)
      }
    }

    if (selectedItem !== null) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [selectedItem])

  // Close lightbox with escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null)
      }
    }

    if (selectedItem !== null) {
      window.addEventListener("keydown", handleEscKey)
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [selectedItem])

  return (
    <section id="portfolio" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow title-hover">
          Our <span className="text-gradient">Portfolio</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-dark-700 text-light/70 hover:bg-dark-600 hover:scale-105",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                <h3 className="text-xl font-bold text-white text-glow">{item.title}</h3>
                <p className="text-primary">{item.category}</p>
                {item.website && (
                  <div className="mt-2">
                    <span className="text-light/70 text-sm flex items-center gap-1">
                      <ExternalLink size={14} /> Visit website
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem !== null && (
          <div className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4">
            <div
              ref={lightboxRef}
              className="relative max-w-4xl w-full bg-dark-800 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-dark-900 border-b border-dark-700">
                <h3 className="text-xl font-bold text-white text-glow">
                  {portfolioItems.find((item) => item.id === selectedItem)?.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedItem(null)
                  }}
                  className="text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-dark-700"
                  aria-label="Close lightbox"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 flex flex-row gap-4">
                <div className="relative aspect-video w-full mb-6">
                  <Image
                    src={portfolioItems.find((item) => item.id === selectedItem)?.image || ""}
                    alt={portfolioItems.find((item) => item.id === selectedItem)?.title || ""}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Category</h4>
                    <p className="text-light/80">{portfolioItems.find((item) => item.id === selectedItem)?.category}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Description</h4>
                    <p className="text-light/80">
                      {portfolioItems.find((item) => item.id === selectedItem)?.description}
                    </p>
                  </div>

                  {portfolioItems.find((item) => item.id === selectedItem)?.website && (
                    <div className="pt-4">
                      <a
                        href={portfolioItems.find((item) => item.id === selectedItem)?.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="flex items-center gap-2">
                          Visit Website <ExternalLink size={16} />
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

