"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const soldItems = [
  { id: 1, name: "Cosmic Canvas", image: "/placeholder.svg?height=100&width=100", price: "$199.99" },
  { id: 2, name: "Harmonic Hues", image: "/placeholder.svg?height=100&width=100", price: "$149.99" },
  { id: 3, name: "Digital Dreamcatcher", image: "/placeholder.svg?height=100&width=100", price: "$89.99" },
  { id: 4, name: "Quantum Quill", image: "/placeholder.svg?height=100&width=100", price: "$129.99" },
]

export default function CurrentSoldItems() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % soldItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + soldItems.length) % soldItems.length)
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-6 relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">Recently Sold</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <Image
            src={soldItems[currentIndex].image || "/placeholder.svg"}
            alt={soldItems[currentIndex].name}
            width={100}
            height={100}
            className="rounded-lg shadow-md"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-white">{soldItems[currentIndex].name}</h3>
            <p className="text-gray-200">{soldItems[currentIndex].price}</p>
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
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <motion.button
          onClick={nextSlide}
          className="bg-white/30 rounded-full p-2 text-white hover:bg-white/50 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  )
}

