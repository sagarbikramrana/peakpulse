"use client"

import { motion } from "framer-motion"

const floatingElements = [
  { id: 1, shape: "circle", size: 20, color: "bg-purple-300", x: [0, 100], y: [0, 50] },
  { id: 2, shape: "square", size: 30, color: "bg-pink-300", x: [100, 0], y: [50, 0] },
  { id: 3, shape: "triangle", size: 25, color: "bg-red-300", x: [50, 150], y: [100, 0] },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color} opacity-50`}
          style={{
            width: element.size,
            height: element.size,
            borderRadius: element.shape === "circle" ? "50%" : element.shape === "square" ? "0" : "0 50% 50% 50%",
            transform: element.shape === "triangle" ? "rotate(45deg)" : "none",
          }}
          animate={{
            x: element.x,
            y: element.y,
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

