"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    device: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch for a free quote or to schedule your repair service. We're here to help with all your electronics
          and automotive needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Get a Free Quote</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="service">Service Type *</Label>
                <Select onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics Repair</SelectItem>
                    <SelectItem value="automotive">Automotive Diagnostics</SelectItem>
                    <SelectItem value="appliance">Appliance Repair</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="device">Device/Vehicle Model</Label>
                <Input
                  id="device"
                  placeholder="e.g., iPhone 14, Honda Civic 2020"
                  value={formData.device}
                  onChange={(e) => handleChange("device", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="message">Describe the Issue *</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe the problem you're experiencing..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-black mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Main Location</h3>
                  <p className="text-gray-600">
                    123 Tech Street
                    <br />
                    Downtown, CA 90210
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Call or text for quick quotes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@techfixpro.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <div className="text-gray-600 text-sm">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Need urgent repair? We offer emergency services for critical business devices and vehicles.
              </p>
              <Button variant="outline" className="w-full">
                Call Emergency Line: (555) 999-HELP
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">We provide services in the following areas:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown & Central District</li>
                <li>• North Valley</li>
                <li>• East Side</li>
                <li>• West Hills</li>
                <li>• Mobile service available</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
