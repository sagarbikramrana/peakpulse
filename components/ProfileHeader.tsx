import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function ProfileHeader() {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4 sm:mb-0 sm:mr-6"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-white mb-2">Jane Doe</h1>
          <p className="text-gray-200 mb-4">Fashion enthusiast | Designer | Traveler</p>
          <div className="flex justify-center sm:justify-start space-x-4 mb-4">
            <div className="text-center">
              <span className="text-white font-bold">254</span>
              <p className="text-gray-200 text-sm">Posts</p>
            </div>
            <div className="text-center">
              <span className="text-white font-bold">10.2k</span>
              <p className="text-gray-200 text-sm">Followers</p>
            </div>
            <div className="text-center">
              <span className="text-white font-bold">1.5k</span>
              <p className="text-gray-200 text-sm">Following</p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start space-x-2">
            <Button variant="secondary">Edit Profile</Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

