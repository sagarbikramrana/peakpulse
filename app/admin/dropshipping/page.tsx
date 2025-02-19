"use client"

import type React from "react"

import { useState, useEffect } from "react"
import AdminHeader from "@/components/AdminHeader"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

interface Supplier {
  id: number
  name: string
  email: string
}

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  supplierId: number
  stock: number
}

export default function DropshippingManagement() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [newSupplier, setNewSupplier] = useState({ name: "", email: "" })

  useEffect(() => {
    fetchSuppliers()
    fetchProducts()
  }, [])

  const fetchSuppliers = async () => {
    const response = await fetch("/api/shop/suppliers")
    const data = await response.json()
    setSuppliers(data)
  }

  const fetchProducts = async () => {
    const response = await fetch("/api/shop/products")
    const data = await response.json()
    setProducts(data)
  }

  const addSupplier = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/shop/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSupplier),
      })

      if (response.ok) {
        toast({
          title: "Supplier added",
          description: "The new supplier has been added successfully.",
        })
        setNewSupplier({ name: "", email: "" })
        fetchSuppliers()
      } else {
        throw new Error("Failed to add supplier")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem adding the supplier. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="p-6">
      <AdminHeader title="Dropshipping Management" />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Suppliers</h2>
        <form onSubmit={addSupplier} className="mb-4 flex gap-4">
          <Input
            placeholder="Supplier Name"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
            className="flex-grow"
          />
          <Input
            placeholder="Supplier Email"
            value={newSupplier.email}
            onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
            className="flex-grow"
          />
          <Button type="submit">Add Supplier</Button>
        </form>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell>{supplier.id}</TableCell>
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{supplier.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Supplier ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.supplierId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

