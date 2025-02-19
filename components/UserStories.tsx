"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

const dummyStories = [
  { id: 1, user: "Alice", avatar: "/placeholder.svg?height=50&width=50" },
  { id: 2, user: "Bob", avatar: "/placeholder.svg?height=50&width=50" },
  { id: 3, user: "Charlie", avatar: "/placeholder.svg?height=50&width=50" },
  { id: 4, user: "David", avatar: "/placeholder.svg?height=50&width=50" },
  { id: 5, user: "Eve", avatar: "/placeholder.svg?height=50&width=50" },
]

export default function UserStories() {
  const [stories, setStories] = useState(dummyStories)

  const handleAddStory = () => {
    // In a real app, this would open a story creation interface
    console.log("Add story clicked")
  }

  return (
    <motion.div
      className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide items-center">
        <Button
          onClick={handleAddStory}
          className="flex flex-col items-center justify-center space-y-1 min-w-[64px] h-full"
          variant="ghost"
        >
          <div className="rounded-full bg-white/50 p-3">
            <PlusCircle className="h-8 w-8 text-white" />
          </div>
          <span className="text-xs text-white">Add Story</span>
        </Button>
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 min-w-[64px]">
            <Avatar className="h-14 w-14 sm:h-16 sm:w-16 ring-2 ring-pink-500 ring-offset-2 ring-offset-transparent">
              <AvatarImage src={story.avatar} alt={story.user} />
              <AvatarFallback>{story.user[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-white">{story.user}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

