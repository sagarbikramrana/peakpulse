"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function LikeButton({ likes: initialLikes }) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  const handleLike = (e) => {
    e.stopPropagation()
    if (!liked) {
      setLikes(likes + 1)
      setLiked(true)
    } else {
      setLikes(likes - 1)
      setLiked(false)
    }
  }

  return (
    <motion.button
      className={`flex items-center space-x-1 ${liked ? "text-red-500" : "text-gray-500"}`}
      onClick={handleLike}
      whileTap={{ scale: 0.9 }}
    >
      <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
      <span>{likes}</span>
    </motion.button>
  )
}

