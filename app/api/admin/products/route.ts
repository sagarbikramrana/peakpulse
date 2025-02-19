import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, you would fetch this data from a database
  const products = [
    { id: 1, name: "T-Shirt", price: 19.99 },
    { id: 2, name: "Hoodie", price: 39.99 },
  ]

  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const data = await request.json()
  // In a real application, you would validate the data and save it to a database
  console.log("Creating new product:", data)

  return NextResponse.json({ message: "Product created successfully" }, { status: 201 })
}

