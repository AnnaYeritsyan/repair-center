import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Laptop,
  Car,
  Wrench,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Tablet,
  Monitor,
  Gamepad2,
} from "lucide-react"

export default function ServicesPage() {
  const electronicsServices = [
    {
      icon: Smartphone,
      title: "Smartphone Repair",
      description: "Screen replacements, battery changes, water damage repair",
      services: ["Screen Replacement", "Battery Replacement", "Water Damage", "Charging Port", "Camera Repair"],
      price: "Starting at $49",
      duration: "1-2 hours",
      warranty: "90 days",
    },
    {
      icon: Laptop,
      title: "Laptop & Computer Repair",
      description: "Hardware and software issues for all laptop brands",
      services: [
        "Screen Repair",
        "Keyboard Replacement",
        "Hard Drive Upgrade",
        "Virus Removal",
        "Performance Optimization",
      ],
      price: "Starting at $79",
      duration: "2-4 hours",
      warranty: "90 days",
    },
    {
      icon: Tablet,
      title: "Tablet Repair",
      description: "iPad and Android tablet repair services",
      services: ["Screen Replacement", "Battery Service", "Charging Issues", "Software Problems", "Home Button Repair"],
      price: "Starting at $89",
      duration: "1-3 hours",
      warranty: "90 days",
    },
    {
      icon: Gamepad2,
      title: "Gaming Console Repair",
      description: "PlayStation, Xbox, Nintendo Switch repairs",
      services: ["HDMI Port Repair", "Controller Issues", "Overheating", "Disc Drive Problems", "Software Updates"],
      price: "Starting at $69",
      duration: "2-5 hours",
      warranty: "90 days",
    },
  ]

  const automotiveServices = [
    {
      icon: Car,
      title: "Engine Diagnostics",
      description: "Complete engine analysis and troubleshooting",
      services: ["Check Engine Light", "Performance Issues", "Emission Problems", "Fuel System", "Ignition System"],
      price: "Starting at $89",
      duration: "1-2 hours",
      warranty: "30 days",
    },
    {
      icon: Wrench,
      title: "Electrical System Repair",
      description: "Automotive electrical diagnostics and repair",
      services: ["Battery Testing", "Alternator Repair", "Starter Issues", "Wiring Problems", "Lighting Systems"],
      price: "Starting at $99",
      duration: "2-4 hours",
      warranty: "60 days",
    },
    {
      icon: Shield,
      title: "Brake System Service",
      description: "Complete brake inspection and repair services",
      services: ["Brake Pad Replacement", "Rotor Resurfacing", "Brake Fluid Change", "ABS Diagnostics", "Brake Lines"],
      price: "Starting at $129",
      duration: "2-3 hours",
      warranty: "90 days",
    },
    {
      icon: Monitor,
      title: "Transmission Diagnostics",
      description: "Automatic and manual transmission services",
      services: ["Transmission Scan", "Fluid Service", "Clutch Repair", "Gear Problems", "Performance Issues"],
      price: "Starting at $149",
      duration: "3-6 hours",
      warranty: "90 days",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Repair Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Professional repair services for electronics and vehicles. Expert technicians, quality parts, and fast
          turnaround times guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/shopping">Browse Parts</Link>
          </Button>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="h-12 w-12 text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">Most repairs completed same day or within 24-48 hours</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">90-day warranty on all repairs with genuine parts</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
            <p className="text-gray-600">Certified technicians with years of experience</p>
          </CardContent>
        </Card>
      </section>

      {/* Services Tabs */}
      <Tabs defaultValue="electronics" className="mb-16">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="electronics">Electronics Repair</TabsTrigger>
          <TabsTrigger value="automotive">Automotive Services</TabsTrigger>
        </TabsList>

        <TabsContent value="electronics" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {electronicsServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-12 w-12 text-black" />
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Price:</span>
                        <p className="text-green-600">{service.price}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Duration:</span>
                        <p>{service.duration}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Warranty:</span>
                        <p>{service.warranty}</p>
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href="/contact">Book Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="automotive" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {automotiveServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-12 w-12 text-green-600" />
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Price:</span>
                        <p className="text-green-600">{service.price}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Duration:</span>
                        <p>{service.duration}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Warranty:</span>
                        <p>{service.warranty}</p>
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href="/contact">Book Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Process Section */}
      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-[#FFC700] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Diagnosis</h3>
            <p className="text-sm text-gray-600">Free diagnostic to identify the issue and provide accurate quote</p>
          </div>

          <div className="text-center">
            <div className="bg-[#FFC700] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Approval</h3>
            <p className="text-sm text-gray-600">We explain the issue and get your approval before starting any work</p>
          </div>

          <div className="text-center">
            <div className="bg-[#FFC700] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Repair</h3>
            <p className="text-sm text-gray-600">Expert technicians perform the repair using quality parts</p>
          </div>

          <div className="text-center">
            <div className="bg-[#FFC700] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">Testing</h3>
            <p className="text-sm text-gray-600">Thorough testing to ensure everything works perfectly</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-[#FFC700] text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Contact us today for a free diagnostic and quote on your repair needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            <Phone className="h-4 w-4 mr-2" />
            Call (555) 123-4567
          </Button>
        </div>
      </section>
    </div>
  )
}
