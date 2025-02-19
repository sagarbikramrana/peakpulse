"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const promotions = [
  {
    id: 1,
    brand: "UrbanEdge",
    title: "Summer Collection Launch",
    description: "Discover the hottest styles for the season",
    image: "/placeholder.svg?height=400&width=1200",
    cta: "Shop Now",
  },
  {
    id: 2,
    brand: "EcoChic",
    title: "Sustainable Fashion Event",
    description: "Join us for an exclusive showcase of eco-friendly designs",
    image: "/placeholder.svg?height=400&width=1200",
    cta: "RSVP",
  },
  {
    id: 3,
    brand: "TrendSetters",
    title: "Limited Edition Collab",
    description: "Get your hands on our exclusive designer collaboration",
    image: "/placeholder.svg?height=400&width=1200",
    cta: "View Collection",
  },
]

export default function BrandPromotionBanner() {
  const [currentPromotion, setCurrentPromotion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPromotion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={promotions[currentPromotion].image || "/placeholder.svg"}
            alt={promotions[currentPromotion].title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 flex items-center justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{promotions[currentPromotion].brand}</h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{promotions[currentPromotion].title}</h3>
              <p className="text-lg mb-6">{promotions[currentPromotion].description}</p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
                {promotions[currentPromotion].cta}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentPromotion ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentPromotion(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

