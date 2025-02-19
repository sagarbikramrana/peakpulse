"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CommunityPost from "./CommunityPost"

const dummyPosts = [
  {
    id: 1,
    user: "Alice",
    content: "Just finished my latest project!",
    likes: 15,
    comments: 3,
    image: "/placeholder.svg?height=300&width=300",
  },
  { id: 2, user: "Bob", content: "Looking for collaborators on a new art piece", likes: 8, comments: 5 },
  {
    id: 3,
    user: "Charlie",
    content: "Check out my mood board for inspiration",
    likes: 22,
    comments: 7,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function CommunityFeed() {
  const [posts, setPosts] = useState(dummyPosts)

  const handleLike = (postId) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  return (
    <motion.div
      className="space-y-6 backdrop-blur-md bg-white/30 rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Community Feed</h2>
      {posts.map((post) => (
        <CommunityPost key={post.id} post={post} onLike={handleLike} />
      ))}
    </motion.div>
  )
}

