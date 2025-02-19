"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const recentProducts = [
  {
    id: 1,
    name: "Neon Dreamscape",
    image: "/placeholder.svg?height=300&width=300",
    description: "A vibrant digital artwork exploring the intersection of nature and technology.",
  },
  {
    id: 2,
    name: "Ethereal Echoes",
    image: "/placeholder.svg?height=300&width=300",
    description: "An ambient soundscape that transports listeners to otherworldly realms.",
  },
  {
    id: 3,
    name: "Quantum Quilt",
    image: "/placeholder.svg?height=300&width=300",
    description: "A mesmerizing generative art piece that evolves based on real-time data.",
  },
  {
    id: 4,
    name: "Nebula Noir",
    image: "/placeholder.svg?height=300&width=300",
    description: "A series of monochromatic photographs capturing the beauty of deep space.",
  },
]

export default function RecentProductions() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recentProducts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recentProducts.length) % recentProducts.length)
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">Recent Productions</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
        >
          <Image
            src={recentProducts[currentIndex].image || "/placeholder.svg"}
            alt={recentProducts[currentIndex].name}
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{recentProducts[currentIndex].name}</h3>
            <p className="text-gray-200 mb-4">{recentProducts[currentIndex].description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold shadow-md hover:bg-purple-100 transition duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <motion.button
          onClick={prevSlide}
          className="bg-white/30 rounded-full p-2 text-white hover:bg-white/50 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <motion.button
          onClick={nextSlide}
          className="bg-white/30 rounded-full p-2 text-white hover:bg-white/50 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}

