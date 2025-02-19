"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const stories = [
  { id: 1, user: "Alice", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, user: "Bob", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, user: "Charlie", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, user: "David", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, user: "Eve", image: "/placeholder.svg?height=300&width=300" },
]

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null)

  return (
    <>
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-8">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedStory(story)}
          >
            <Avatar className="w-16 h-16 ring-2 ring-accent p-1">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${story.user}`} alt={story.user} />
              <AvatarFallback>{story.user[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-white mt-1">{story.user}</span>
          </motion.div>
        ))}
      </div>
      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedStory?.user}'s Story</DialogTitle>
          </DialogHeader>
          {selectedStory && (
            <div className="relative aspect-[9/16] w-full">
              <Image
                src={selectedStory.image || "/placeholder.svg"}
                alt={`${selectedStory.user}'s story`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

