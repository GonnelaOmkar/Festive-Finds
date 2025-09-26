"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Home" },
    { href: "/auth/signup", label: "Sign up" },
    { href: "/auth/login", label: "Log in" },
  ]
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          <span className="font-serif text-xl">Festiva</span>
        </Link>
        <div className="flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hidden text-sm md:inline-block px-3 py-2 rounded-md transition-colors ${
                pathname === l.href ? "bg-secondary text-foreground" : "hover:text-foreground/80 text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/auth/signup" className="md:ml-2">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
