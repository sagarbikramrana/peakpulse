import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandPromotion() {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Featured Brand</h2>
      <div className="flex flex-col sm:flex-row items-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Brand Logo"
          width={200}
          height={200}
          className="rounded-lg mb-4 sm:mb-0 sm:mr-6"
        />
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Brand Name</h3>
          <p className="text-gray-200 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

