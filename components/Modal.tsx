"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import LikeButton from "./LikeButton"

export default function Modal({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white/30 backdrop-blur-md rounded-lg p-8 max-w-lg w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={400}
          height={400}
          className="w-full h-auto rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-white">{item.title}</h2>
        <p className="text-gray-200 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="flex justify-between items-center">
          <LikeButton likes={item.likes} />
          <button
            onClick={onClose}
            className="bg-white/50 hover:bg-white/70 text-white font-semibold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

