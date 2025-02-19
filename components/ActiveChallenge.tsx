"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ActiveChallenge() {
  const [isParticipating, setIsParticipating] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleParticipate = () => {
    setIsParticipating(true)
    setIsDialogOpen(true)
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Active Challenge</h2>
      <p className="mb-4">7-Day Creative Challenge: Post a unique creation every day for a week!</p>
      <Button
        onClick={handleParticipate}
        disabled={isParticipating}
        className="bg-accent text-white hover:bg-accent/90"
      >
        {isParticipating ? "Participating" : "Participate"}
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Your Creation</DialogTitle>
            <DialogDescription>Upload your creation for today's challenge.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="picture" className="text-right">
                Picture
              </Label>
              <Input id="picture" type="file" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input id="description" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

