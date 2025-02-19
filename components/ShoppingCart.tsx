"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
  cart: Product[]
  onRemoveItem: (productId: number) => void
  onCheckout: () => void
}

export default function ShoppingCart({ isOpen, onClose, cart, onRemoveItem, onCheckout }: ShoppingCartProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4 mb-6">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <div>
                      <span className="mr-4">${item.price.toFixed(2)}</span>
                      <Button variant="destructive" size="sm" onClick={() => onRemoveItem(item.id)}>
                        Remove
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full" onClick={onCheckout}>
                Checkout
              </Button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

