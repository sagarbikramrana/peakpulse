import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activeChallenges = [
  { id: 1, title: "Summer Vibes Challenge", participants: 250 },
  { id: 2, title: "Sustainable Fashion Challenge", participants: 180 },
]

const recentWinners = [
  { id: 1, name: "Alice", challenge: "Retro Revival Challenge" },
  { id: 2, name: "Bob", challenge: "Monochrome Madness" },
  { id: 3, name: "Charlie", challenge: "Accessory Artistry" },
]

export default function ChallengesSidebar() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/30 backdrop-blur-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Active Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {activeChallenges.map((challenge) => (
              <li key={challenge.id} className="flex justify-between items-center">
                <Link href={`/challenges#${challenge.id}`} className="text-white hover:underline">
                  {challenge.title}
                </Link>
                <Badge variant="secondary">{challenge.participants} participants</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white/30 backdrop-blur-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Recent Winners</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recentWinners.map((winner) => (
              <li key={winner.id} className="text-white">
                <span className="font-bold">{winner.name}</span> - {winner.challenge}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

