"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ShoppingCart, Star, Heart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  inStock: boolean
  isService: boolean
}

export default function ShoppingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const products: Product[] = [
    {
      id: "1",
      name: "iPhone 14 Screen Replacement",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200",
      category: "services",
      inStock: true,
      isService: true,
    },
    {
      id: "2",
      name: "Samsung Galaxy S23 Battery",
      price: 49.99,
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      category: "parts",
      inStock: true,
      isService: false,
    },
    {
      id: "3",
      name: "Car Engine Diagnostic",
      price: 89.99,
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
      category: "services",
      inStock: true,
      isService: true,
    },
    {
      id: "4",
      name: "MacBook Pro Screen Assembly",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=200",
      category: "parts",
      inStock: true,
      isService: false,
    },
    {
      id: "5",
      name: "Brake System Inspection",
      price: 59.99,
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=200&width=200",
      category: "services",
      inStock: true,
      isService: true,
    },
    {
      id: "6",
      name: "Universal Phone Charger",
      price: 24.99,
      rating: 4.4,
      reviews: 312,
      image: "/placeholder.svg?height=200&width=200",
      category: "accessories",
      inStock: false,
      isService: false,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (productId: string) => {
    console.log("Added to cart:", productId)
    alert("Item added to cart!")
  }

  const addToWishlist = (productId: string) => {
    console.log("Added to wishlist:", productId)
    alert("Item added to wishlist!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Shop Parts & Services</h1>
          <p className="text-gray-600">Find quality parts and professional services for your devices</p>
        </div>
        <Button asChild>
          <Link href="/basket">
            <ShoppingCart className="h-4 w-4 mr-2" />
            View Cart
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products and services..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="services">Services</SelectItem>
            <SelectItem value="parts">Parts</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="grid" className="mb-8">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                    {!product.inStock && (
                      <Badge variant="secondary" className="absolute top-2 right-2">
                        Out of Stock
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => addToWishlist(product.id)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.isService ? "Service" : "Product"}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  <Button className="w-full" onClick={() => addToCart(product.id)} disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {product.isService ? "Service" : "Product"}
                          </Badge>
                          <h3 className="text-xl font-semibold">{product.name}</h3>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => addToWishlist(product.id)}>
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button onClick={() => addToCart(product.id)} disabled={!product.inStock}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
