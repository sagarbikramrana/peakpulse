"use client"

import { useState, useEffect } from "react"
import AdminHeader from "@/components/AdminHeader"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface User {
  id: number
  name: string
  email: string
}

export default function UsersManagement() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch("/api/admin/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="p-6">
      <AdminHeader title="Users Management" />
      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

