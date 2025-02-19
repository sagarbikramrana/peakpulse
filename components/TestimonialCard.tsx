import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="border-t-4 border-t-accent">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-accent">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

