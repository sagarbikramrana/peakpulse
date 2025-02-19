"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const features = [
  { title: "Discover Trends", description: "Stay ahead of the fashion curve with our curated trends." },
  { title: "Shop Collections", description: "Explore and shop from exclusive streetwear collections." },
  { title: "Community Challenges", description: "Participate in style challenges and showcase your creativity." },
  { title: "Personal Stylist", description: "Get personalized style recommendations powered by AI." },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-700 to-red-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Cartoon character in vibrant streetwear"
            width={300}
            height={300}
            className="mx-auto mb-8 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Peak Pulse</h1>
          <p className="text-xl md:text-2xl">Shop smart, have fun, and style your life with every click!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/app">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block bg-white text-purple-600 rounded-full p-4 shadow-lg cursor-pointer"
            >
              <ArrowRight size={48} />
            </motion.div>
          </Link>
          <p className="mt-4 text-lg">Enter the App</p>
        </motion.div>
      </div>
    </div>
  )
}

