"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Trash2, Edit2, Loader } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const clothingItems = [
  { name: "Hoodie", image: "/placeholder.svg?height=300&width=300" },
  { name: "Sweatshirt", image: "/placeholder.svg?height=300&width=300" },
  { name: "T-Shirt", image: "/placeholder.svg?height=300&width=300" },
  { name: "Trousers", image: "/placeholder.svg?height=300&width=300" },
  { name: "Pants", image: "/placeholder.svg?height=300&width=300" },
]

export default function PersonalStylist() {
  const [selectedItem, setSelectedItem] = useState(clothingItems[0])
  const [designPrompt, setDesignPrompt] = useState("")
  const [generatedImage, setGeneratedImage] = useState("")
  const [uploadedImage, setUploadedImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [aiRecommendation, setAiRecommendation] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleGenerate = async () => {
    if (!designPrompt) {
      toast({
        title: "Error",
        description: "Please enter a design prompt.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: designPrompt,
          item: selectedItem.name,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate design")
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      setAiRecommendation(data.recommendation)
      toast({
        title: "Success",
        description: "Design generated successfully!",
      })
    } catch (error) {
      console.error("Error generating image:", error)
      toast({
        title: "Error",
        description: "Failed to generate design. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size should not exceed 5MB.",
          variant: "destructive",
        })
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        toast({
          title: "Success",
          description: "Image uploaded successfully!",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Personal Stylist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            onValueChange={(value) =>
              setSelectedItem(clothingItems.find((item) => item.name === value) || clothingItems[0])
            }
          >
            <SelectTrigger className="w-full mb-4 bg-white/50 text-gray-800">
              <SelectValue placeholder="Select clothing item" />
            </SelectTrigger>
            <SelectContent>
              {clothingItems.map((item) => (
                <SelectItem key={item.name} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Describe your design idea"
            value={designPrompt}
            onChange={(e) => setDesignPrompt(e.target.value)}
            className="mb-4 bg-white/50 text-gray-800 placeholder-gray-500"
          />
          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full mb-4 bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? "Generating..." : "Generate Design"}
          </Button>
          <input type="file" accept="image/*" onChange={handleUpload} ref={fileInputRef} className="hidden" />
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Upload className="mr-2 h-4 w-4" /> Upload Image
          </Button>
        </div>
        <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={uploadedImage || generatedImage || selectedItem.image}
            alt={`${selectedItem.name} preview`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {uploadedImage && (
            <div className="absolute top-2 right-2 space-x-2">
              <Button size="sm" variant="secondary" onClick={() => fileInputRef.current?.click()}>
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" onClick={() => setUploadedImage("")}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
      {aiRecommendation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 bg-white/20 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-2">AI Recommendation:</h3>
          <p className="text-white">{aiRecommendation}</p>
        </motion.div>
      )}
      {(generatedImage || uploadedImage) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">Add to Cart</Button>
        </motion.div>
      )}
    </div>
  )
}

