import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, you would fetch this data from a database
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]

  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const data = await request.json()
  // In a real application, you would validate the data and save it to a database
  console.log("Creating new user:", data)

  return NextResponse.json({ message: "User created successfully" }, { status: 201 })
}

