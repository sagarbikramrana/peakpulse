"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface Challenge {
  id: number
  title: string
  description: string
  prize: string
  endDate: string
  participants: number
  status: "active" | "completed"
}

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [submission, setSubmission] = useState("")

  const handleParticipate = () => {
    setIsDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/challenges/${challenge.id}/participate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ submission }),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your submission has been received!",
        })
        setIsDialogOpen(false)
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your entry. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="bg-white/30 backdrop-blur-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">{challenge.title}</CardTitle>
          <CardDescription className="text-gray-200">{challenge.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-white mb-2">
            <span className="font-bold">Prize:</span> {challenge.prize}
          </p>
          <p className="text-white mb-2">
            <span className="font-bold">End Date:</span> {new Date(challenge.endDate).toLocaleDateString()}
          </p>
          <p className="text-white mb-2">
            <span className="font-bold">Participants:</span> {challenge.participants}
          </p>
          <Badge variant={challenge.status === "active" ? "default" : "secondary"} className="mt-2">
            {challenge.status === "active" ? "Active" : "Completed"}
          </Badge>
        </CardContent>
        <CardFooter>
          {challenge.status === "active" && (
            <Button onClick={handleParticipate} className="w-full">
              Participate
            </Button>
          )}
          {challenge.status === "completed" && (
            <Button variant="secondary" className="w-full">
              View Results
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Your Entry</DialogTitle>
            <DialogDescription>
              Please provide a link to your submission or describe your entry for the challenge.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="submission" className="text-right">
                  Submission
                </Label>
                <Input
                  id="submission"
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Entry</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

