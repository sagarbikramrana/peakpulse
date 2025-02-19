"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import LikeButton from "./LikeButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TrendingItem({ item, onClick }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white font-semibold mb-2">{item.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.user}`} alt={item.user} />
              <AvatarFallback>{item.user[0]}</AvatarFallback>
            </Avatar>
            <span className="text-white text-sm">{item.user}</span>
          </div>
          <LikeButton likes={item.likes} />
        </div>
      </div>
    </motion.div>
  )
}

