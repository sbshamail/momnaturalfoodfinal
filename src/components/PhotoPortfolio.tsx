"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

const portfolioItems = [
   {
    id: 1,
    image: "/p1.jpg",
    title: "ORGANIC GLUTEN-FREE GRANOLA",
    description: "Crunchy and wholesome blend made with 100% organic oats.",
  },
  {
    id: 2,
    image: "/p2.jpg",
    title: "ARTISAN GRANOLA 360G",
    description: "Rich, naturally sweet carob combined with crunchy oats.",
  },
  {
    id: 3,
    image: "/p3.jpg",
    title: "GRANOLA BITES",
    description: "Snack-sized bites made from crunchy granola — perfect on the go.",
  },
  {
    id: 4,
    image: "/p4.jpg",
    title: "GRANOLA COOKIES ",
    description: "Soft-baked cookies infused with granola goodness.",
  },
]

export function PhotoPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % portfolioItems.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden pt-30">
      {/* Header */}
     
      {/* 3D Portfolio Grid */}
      <div
        className="relative w-full h-96 perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full">
            {portfolioItems.map((item, index) => {
              const isActive = index === activeIndex
              const offset = index - activeIndex
              const isCardHovered = hoveredCard === index

              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-1000 ease-out cursor-pointer group ${
                    isActive ? "z-20" : "z-10"
                  } ${isCardHovered ? "z-50" : ""}`}
                  style={{
                    transform: `
                      translateX(${offset * 200 + 50}px) 
                      translateY(${Math.abs(offset) * 20}px)
                      rotateY(${offset * -15}deg) 
                      rotateX(${Math.abs(offset) * 5}deg)
                      scale(${isActive ? 1 : 0.8 - Math.abs(offset) * 0.1})
                    `,
                    opacity: Math.max(0.3, 1 - Math.abs(offset) * 0.3),
                    left: "50%",
                    top: "50%",
                    marginLeft: "-150px",
                    marginTop: "-200px",
                  }}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Container */}
                  <div className="relative w-80 h-[430px] bg-white rounded-2xl shadow-2xl overflow-visible group-hover:shadow-3xl transition-shadow duration-300">
                    <div className="relative h-64 overflow-visible">
                      {/* Emerging Image */}
                      <div
                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                          isCardHovered
                            ? "transform -translate-y-8 scale-125 z-50"
                            : "transform translate-y-0 scale-100"
                        }`}
                      >
                        <div className="relative w-full h-full rounded-t-2xl overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          {/* Enhanced shadow for emerging effect */}
                         <div
  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 rounded-full transition-all duration-700
    ${isCardHovered ? "opacity-100 scale-110 bg-transparent" : "opacity-0 scale-100 bg-black/20 blur-xl"}
  `}
/>
                        </div>
                      </div>

                      {/* Base image container for smooth transition */}
                      <div
                        className={`relative w-full h-full rounded-t-2xl overflow-hidden transition-opacity duration-300 ${
                          isCardHovered ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-orange-500 font-bold text-sm">#{item.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Floating Elements */}
                  {isActive && (
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-16">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
