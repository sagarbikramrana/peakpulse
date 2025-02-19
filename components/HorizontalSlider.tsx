"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const sliderItems = [
  { id: 1, image: "/placeholder.svg?height=200&width=200", title: "Trending 1" },
  { id: 2, image: "/placeholder.svg?height=200&width=200", title: "Trending 2" },
  { id: 3, image: "/placeholder.svg?height=200&width=200", title: "Trending 3" },
  { id: 4, image: "/placeholder.svg?height=200&width=200", title: "Trending 4" },
  { id: 5, image: "/placeholder.svg?height=200&width=200", title: "Trending 5" },
]

export default function HorizontalSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative overflow-hidden mb-8">
      <motion.div className="flex space-x-4" drag="x" dragConstraints={{ left: -200, right: 0 }}>
        {sliderItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex-shrink-0 cursor-pointer ${index === activeIndex ? "scale-110" : "scale-100"}`}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <p className="text-white text-center mt-2">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

