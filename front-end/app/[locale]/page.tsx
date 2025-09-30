import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Wrench, Smartphone, Car, Clock, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#FFC700]  text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Repair Services for Electronics & Vehicles</h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional diagnostics and repairs for smartphones, laptops, cars, and more. Fast, reliable, and
                affordable solutions you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Link href="/services">View Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Repair Services"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Repair Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From smartphones to vehicles, we provide comprehensive repair and diagnostic services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-black mb-4" />
                <CardTitle>Electronics Repair</CardTitle>
                <CardDescription>Smartphones, tablets, laptops, gaming consoles, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Screen replacements</li>
                  <li>• Battery replacements</li>
                  <li>• Water damage repair</li>
                  <li>• Software troubleshooting</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Car className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Auto Diagnostics</CardTitle>
                <CardDescription>Professional vehicle diagnostics and repair services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Engine diagnostics</li>
                  <li>• Electrical system repair</li>
                  <li>• Brake system service</li>
                  <li>• Transmission repair</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>General Repairs</CardTitle>
                <CardDescription>Home appliances and other electronic devices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Home appliance repair</li>
                  <li>• Computer maintenance</li>
                  <li>• Audio equipment</li>
                  <li>• Custom solutions</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechFix Pro?</h2>
            <p className="text-xl text-gray-600">We're committed to providing the best repair experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-16 w-16 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Most repairs completed within 24-48 hours</p>
            </div>

            <div className="text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">90-day warranty on all repairs and parts</p>
            </div>

            <div className="text-center">
              <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service! They fixed my iPhone screen in just 2 hours. Professional and affordable."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Electronics Repair</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Great auto diagnostic service. They found the issue quickly and fixed it at a fair price."
                </p>
                <div className="font-semibold">Mike Chen</div>
                <div className="text-sm text-gray-500">Auto Repair</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Highly recommend! They repaired my laptop and it works like new. Great customer service."
                </p>
                <div className="font-semibold">Emily Davis</div>
                <div className="text-sm text-gray-500">Computer Repair</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFC700] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us today for a free diagnostic and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
              <Link href="/shopping">Browse Parts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
