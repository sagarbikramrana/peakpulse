"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "../app/api/products/route"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  featured?: boolean
}

export default function ProductCard({ product, onAddToCart, featured = false }: ProductCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className={featured ? "col-span-full" : ""}>
      <Card className={`bg-white/30 backdrop-blur-md shadow-lg ${featured ? "flex flex-col md:flex-row" : ""}`}>
        <div className={featured ? "md:w-1/2" : ""}>
          <CardHeader>
            <CardTitle className="text-white">{product.name}</CardTitle>
            <CardDescription className="text-gray-200">{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`relative w-full ${featured ? "h-64" : "h-48"} mb-4`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-xl font-bold">${product.price.toFixed(2)}</p>
              <Badge variant={product.stock > 0 ? "secondary" : "destructive"}>
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </Badge>
            </div>
          </CardContent>
        </div>
        <CardFooter className={featured ? "md:w-1/2 flex flex-col justify-center" : ""}>
          <Button onClick={() => onAddToCart(product)} className="w-full" disabled={product.stock === 0}>
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </Button>
          {featured && (
            <p className="mt-4 text-white text-center">
              This is our featured product of the day! Don't miss out on this amazing deal.
            </p>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

