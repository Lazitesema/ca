"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
]

export function NavMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Cashora
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-orange-600",
                pathname === item.href ? "text-orange-600" : "text-gray-600",
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-orange-600"
                />
              )}
            </Link>
          ))}
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border-b bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-600",
                  pathname === item.href ? "text-orange-600" : "text-gray-600",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

