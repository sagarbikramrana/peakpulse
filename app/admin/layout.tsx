import type React from "react"
import { Inter } from "next/font/google"
import AdminSidebar from "@/components/AdminSidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Peak Pulse Admin",
  description: "Admin dashboard for Peak Pulse",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <AdminSidebar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  )
}

