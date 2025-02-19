"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TrendingItem from "./TrendingItem"
import Modal from "./Modal"

const trendingItems = [
  { id: 1, image: "/placeholder.svg?height=300&width=300", likes: 120, title: "Mountain Peak", user: "Alice" },
  { id: 2, image: "/placeholder.svg?height=300&width=300", likes: 85, title: "City Lights", user: "Bob" },
  { id: 3, image: "/placeholder.svg?height=300&width=300", likes: 200, title: "Ocean Waves", user: "Charlie" },
  { id: 4, image: "/placeholder.svg?height=300&width=300", likes: 150, title: "Forest Trail", user: "David" },
]

export default function TrendingGrid() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="backdrop-blur-md bg-white/30 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Trending Posts</h2>
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {trendingItems.map((item) => (
          <TrendingItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </motion.div>
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  )
}

