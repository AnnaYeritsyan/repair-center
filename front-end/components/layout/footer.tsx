"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Wrench, Phone, Mail, MapPin, Clock,
  Facebook, Twitter, Instagram, Youtube
} from "lucide-react"
import { useLocale } from "@/app/api/hooks/useLocale"

export default function Footer() {
  const locale = useLocale()
  const dateYear = new Date().getFullYear()

  // Quick Links
  const quickLinks = [
    { name: "Our Services", href: "/services" },
    { name: "Shop Parts", href: "/shopping" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "My Account", href: "/profile" },
  ]

  // Services
  const services = [
    { name: "Phone Repair", href: "/services" },
    { name: "Laptop Repair", href: "/services" },
    { name: "Auto Diagnostics", href: "/services" },
    { name: "Tablet Repair", href: "/services" },
    { name: "Gaming Console", href: "/services" },
  ]

  // Policies
  const policies = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">TechFix Pro</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for electronics and automotive repair services. 
              Quality repairs, fast service, guaranteed results.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Tech Street</p>
                  <p className="text-gray-300">Downtown, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300">info@techfixpro.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 9AM-7PM</p>
                  <p className="text-gray-300">Sat: 10AM-6PM</p>
                  <p className="text-gray-300">Sun: 12PM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Newsletter */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-300 mb-4">Subscribe to get special offers and repair tips</p>
          <div className="flex max-w-md mx-auto">
            <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
            <Button className="ml-2">Subscribe</Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {dateYear} TechFix Pro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {policies.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
