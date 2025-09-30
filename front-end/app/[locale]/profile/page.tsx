"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Calendar, Package, Settings, Bell } from "lucide-react"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    address: "123 Main St, City, State 12345",
    joinDate: "January 2023",
  })

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    smsUpdates: false,
    promotions: true,
  })

  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      service: "iPhone 14 Screen Replacement",
      status: "Completed",
      amount: 199.99,
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      service: "Car Diagnostic Service",
      status: "Completed",
      amount: 89.99,
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      service: "Laptop Battery Replacement",
      status: "In Progress",
      amount: 149.99,
    },
  ]

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Profile updated successfully!")
  }

  const handleNotificationUpdate = () => {
    alert("Notification preferences updated!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
          <AvatarFallback className="text-lg">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-gray-600">Customer since {profile.joinDate}</p>
          <Badge variant="secondary" className="mt-1">
            Premium Member
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => setProfile((prev) => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => setProfile((prev) => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      className="pl-10"
                      value={profile.email}
                      onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      className="pl-10"
                      value={profile.phone}
                      onChange={(e) => setProfile((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="address"
                      className="pl-10"
                      value={profile.address}
                      onChange={(e) => setProfile((prev) => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                </div>

                <Button type="submit">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order History
              </CardTitle>
              <CardDescription>View your past orders and track current repairs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{order.service}</h3>
                        <p className="text-sm text-gray-600">Order #{order.id}</p>
                      </div>
                      <Badge variant={order.status === "Completed" ? "default" : "secondary"}>{order.status}</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {order.date}
                      </span>
                      <span className="font-semibold">${order.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Account Settings
              </CardTitle>
              <CardDescription>Manage your account preferences and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Password & Security</h3>
                <div className="space-y-4">
                  <Button variant="outline">Change Password</Button>
                  <Button variant="outline">Enable Two-Factor Authentication</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-4">Account Actions</h3>
                <div className="space-y-4">
                  <Button variant="outline">Download My Data</Button>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to receive updates and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Updates</h3>
                    <p className="text-sm text-gray-600">Receive order updates via email</p>
                  </div>
                  <Button
                    variant={notifications.emailUpdates ? "default" : "outline"}
                    onClick={() => setNotifications((prev) => ({ ...prev, emailUpdates: !prev.emailUpdates }))}
                  >
                    {notifications.emailUpdates ? "Enabled" : "Disabled"}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">SMS Updates</h3>
                    <p className="text-sm text-gray-600">Receive text message notifications</p>
                  </div>
                  <Button
                    variant={notifications.smsUpdates ? "default" : "outline"}
                    onClick={() => setNotifications((prev) => ({ ...prev, smsUpdates: !prev.smsUpdates }))}
                  >
                    {notifications.smsUpdates ? "Enabled" : "Disabled"}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Promotional Emails</h3>
                    <p className="text-sm text-gray-600">Receive special offers and promotions</p>
                  </div>
                  <Button
                    variant={notifications.promotions ? "default" : "outline"}
                    onClick={() => setNotifications((prev) => ({ ...prev, promotions: !prev.promotions }))}
                  >
                    {notifications.promotions ? "Enabled" : "Disabled"}
                  </Button>
                </div>
              </div>

              <Button onClick={handleNotificationUpdate}>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
