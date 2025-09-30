import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"


export const metadata: Metadata = {
    title: "Electronics & Auto Repair Services",
    description:
        "Professional repair services for smartphones, laptops, cars, and more. Fast, reliable, and affordable solutions you can trust.",
    generator: 'v0.dev'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>

    )
}
