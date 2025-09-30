"use client"

import { useState, useTransition } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ShoppingCart, User, Phone, Wrench, Globe, ChevronDown } from "lucide-react"
import LocalSwitcher from "../language-context"
import { usePathname, useRouter} from "next/navigation"
import Link from "next/link"
import { useLocale } from "@/app/api/hooks/useLocale"



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const [currentLanguage, setCurrentLanguage] = useState(locale)

  const cartItemCount = 3 
  const pathname = usePathname();
 const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const navigation = [
    { name: "Home", href: "/"  },
    { name: "Services", href: "/services" },
    { name: "Shop", href: "/shopping" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "hy", name: "Հայերեն", flag: "🇦🇲" },
  ]

   const removeLocaleFromPathname = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (languages.some((locale) => locale.code === segments[0])) {
      segments.shift();
    }
    return `/${segments.join("/")}`;
  };

  const handleLanguageChange = (langCode: string) => {
    const newPathname = removeLocaleFromPathname();
    startTransition(() => {
      router.replace(`/${langCode}${newPathname}`);
      window.location.href = `/${langCode}${newPathname}`;
    });
    setCurrentLanguage(langCode)
  }

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-black" />
            <span className="text-xl font-bold">AV DIAGNOSTICS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${currentLang?.code}/${item.href}`}
                className="text-sm font-medium transition-colors hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Emergency Contact */}
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">(555) 123-4567</span>
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-2 cursor-pointer ${currentLanguage === lang.code ? "bg-accent" : ""
                      }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/basket">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTitle></SheetTitle>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={`/${currentLang?.code}/${item.href}`}
                      className="text-lg font-medium transition-colors hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-4 border-t">
                    <Link
                      href="/profile"
                      className="flex items-center space-x-2 text-lg font-medium transition-colors hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-5 w-5" />
                      <span>My Account</span>
                    </Link>
                  </div>

                  {/* Mobile Language Selector */}
                  <div className="pt-4 border-t">
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Language</span>
                      <div className="flex flex-wrap gap-2">
                        {/* {languages.map((lang) => (
                          <Button
                            key={lang.code}
                            variant={currentLanguage === lang.code ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              handleLanguageChange(lang.code)
                              setIsOpen(false)
                            }}
                            className="flex items-center space-x-1"
                          >
                            <span>{lang.flag}</span>
                            <span className="text-xs">{lang.code.toUpperCase()}</span>
                          </Button>
                        ))} */}
                        <LocalSwitcher />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">Emergency: (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}