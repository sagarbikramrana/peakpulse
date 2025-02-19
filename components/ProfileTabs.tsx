"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid, Bookmark, Heart } from "lucide-react"
import Image from "next/image"

const posts = [
  { id: 1, image: "/placeholder.svg?height=300&width=300", likes: 120, comments: 15 },
  { id: 2, image: "/placeholder.svg?height=300&width=300", likes: 85, comments: 10 },
  { id: 3, image: "/placeholder.svg?height=300&width=300", likes: 200, comments: 25 },
  { id: 4, image: "/placeholder.svg?height=300&width=300", likes: 150, comments: 18 },
  { id: 5, image: "/placeholder.svg?height=300&width=300", likes: 95, comments: 12 },
  { id: 6, image: "/placeholder.svg?height=300&width=300", likes: 180, comments: 22 },
]

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <Tabs defaultValue="posts" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3 bg-white/30 backdrop-blur-md rounded-lg">
        <TabsTrigger value="posts" className="data-[state=active]:bg-white/50">
          <Grid className="h-4 w-4 mr-2" /> Posts
        </TabsTrigger>
        <TabsTrigger value="saved" className="data-[state=active]:bg-white/50">
          <Bookmark className="h-4 w-4 mr-2" /> Saved
        </TabsTrigger>
        <TabsTrigger value="liked" className="data-[state=active]:bg-white/50">
          <Heart className="h-4 w-4 mr-2" /> Liked
        </TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="mt-6">
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Post ${post.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="text-white text-center">
                  <p className="font-bold">{post.likes} likes</p>
                  <p>{post.comments} comments</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="saved" className="mt-6">
        <p className="text-white text-center">Your saved posts will appear here.</p>
      </TabsContent>
      <TabsContent value="liked" className="mt-6">
        <p className="text-white text-center">Your liked posts will appear here.</p>
      </TabsContent>
    </Tabs>
  )
}

