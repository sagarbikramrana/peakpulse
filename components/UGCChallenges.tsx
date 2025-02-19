import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const currentChallenge = {
  title: "Summer Vibes Challenge",
  description: "Share your best summer-themed creation!",
  prize: "$100 Gift Card",
  deadline: "July 31, 2023",
}

const winners = [
  { id: 1, name: "Alice", avatar: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Bob", avatar: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "Charlie", avatar: "/placeholder.svg?height=50&width=50" },
]

export default function UGCChallenges() {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">UGC Challenges</h2>
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Current Challenge</h3>
        <div className="bg-white/20 rounded-lg p-4">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{currentChallenge.title}</h4>
          <p className="text-sm text-gray-200 mb-2">{currentChallenge.description}</p>
          <p className="text-sm text-white font-semibold">Prize: {currentChallenge.prize}</p>
          <p className="text-sm text-gray-200">Deadline: {currentChallenge.deadline}</p>
        </div>
        <Button className="mt-4 w-full">Participate</Button>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Recent Winners</h3>
        <div className="flex justify-around">
          {winners.map((winner) => (
            <div key={winner.id} className="flex flex-col items-center">
              <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mb-2">
                <AvatarImage src={winner.avatar} alt={winner.name} />
                <AvatarFallback>{winner.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs sm:text-sm text-white">{winner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

