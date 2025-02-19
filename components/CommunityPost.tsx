"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CommunityPost({ post, onLike }) {
  const [isCommenting, setIsCommenting] = useState(false)
  const [comment, setComment] = useState("")

  const handleSubmitComment = (e) => {
    e.preventDefault()
    // Here you would typically send the comment to your backend
    console.log("Submitting comment:", comment)
    setComment("")
    setIsCommenting(false)
  }

  return (
    <motion.div
      className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.user}`} alt={post.user} />
          <AvatarFallback>{post.user[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-white">{post.user}</h3>
          <p className="text-sm text-gray-200">2 hours ago</p>
        </div>
      </div>
      <p className="mb-4 text-white">{post.content}</p>
      {post.image && (
        <Image
          src={post.image || "/placeholder.svg"}
          alt="Post content"
          width={500}
          height={300}
          className="rounded-lg mb-4 w-full h-auto"
        />
      )}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onLike(post.id)}
          className="text-white hover:text-white hover:bg-white/20"
        >
          <Heart className="mr-2 h-4 w-4" />
          {post.likes}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCommenting(!isCommenting)}
          className="text-white hover:text-white hover:bg-white/20"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          {post.comments}
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
      {isCommenting && (
        <form onSubmit={handleSubmitComment} className="mt-4 flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-grow bg-white/50 text-white placeholder-gray-200"
          />
          <Button type="submit" className="bg-white/50 hover:bg-white/70 text-white">
            Post
          </Button>
        </form>
      )}
    </motion.div>
  )
}

