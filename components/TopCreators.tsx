"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const topCreators = [
  { id: 1, name: "Alice", followers: 1200, avatar: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Bob", followers: 980, avatar: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Charlie", followers: 850, avatar: "/placeholder.svg?height=50&width=50" },
]

export default function TopCreators() {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/30 rounded-lg shadow-lg p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Top Creators</h2>
      <div className="space-y-4">
        {topCreators.map((creator) => (
          <div key={creator.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">{creator.name}</h3>
                <p className="text-sm text-gray-200">{creator.followers} followers</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white/70 text-white">
              Follow
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

