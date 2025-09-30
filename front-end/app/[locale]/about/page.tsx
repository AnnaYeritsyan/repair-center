import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechFix Pro</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for electronics and automotive repair services. With over 10 years of experience, we've
          built our reputation on quality, reliability, and exceptional customer service.
        </p>
      </section>

      {/* Company Story */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2014, TechFix Pro started as a small electronics repair shop with a simple mission: to provide
            honest, reliable, and affordable repair services to our community.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we've expanded our services to include automotive diagnostics and repairs, becoming a
            one-stop solution for all your repair needs. Our team of certified technicians brings decades of combined
            experience to every repair.
          </p>
          <p className="text-gray-600">
            Today, we're proud to serve thousands of satisfied customers and continue to grow while maintaining our
            commitment to quality and customer satisfaction.
          </p>
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Our Workshop"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-4 gap-8 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-12 w-12 text-black mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">15,000+</div>
            <div className="text-gray-600">Repairs Completed</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-gray-600">Locations</div>
          </CardContent>
        </Card>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="John Smith"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600 mb-4">Founder & Lead Technician</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Electronics Expert</Badge>
                <Badge variant="secondary">10+ Years</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Maria Garcia"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Maria Garcia</h3>
              <p className="text-gray-600 mb-4">Auto Diagnostic Specialist</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">ASE Certified</Badge>
                <Badge variant="secondary">8+ Years</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="David Chen"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">David Chen</h3>
              <p className="text-gray-600 mb-4">Mobile Device Specialist</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Apple Certified</Badge>
                <Badge variant="secondary">6+ Years</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[#FFC700] rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional repair services that extend the life of your devices and vehicles while delivering
              outstanding customer experiences. We believe in sustainable solutions that save you money and reduce
              electronic waste.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <strong>Quality:</strong> We use only genuine parts and proven techniques
              </li>
              <li>
                • <strong>Transparency:</strong> Clear communication and honest pricing
              </li>
              <li>
                • <strong>Reliability:</strong> Dependable service you can count on
              </li>
              <li>
                • <strong>Innovation:</strong> Staying current with latest technologies
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
