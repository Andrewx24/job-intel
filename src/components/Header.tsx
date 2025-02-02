// components/Header.tsx
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import UserMenu from "./UserMenu"
import { auth } from "@/lib/auth"

// Navigation links are defined outside the component for reusability and easier maintenance
const navLinks = [
  { href: "/companies", label: "Companies" },
  { href: "/people", label: "People" },
]

const Header = async () => {
  // Fetch authentication session to determine if user is logged in
  const session = await auth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand Name Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image 
                  src="/logo.jpg" 
                  alt="Job Intel Logo" 
                  width={32} 
                  height={32} 
                  className="object-cover"
                  priority // Prioritize loading for above-the-fold content
                />
              </div>
              {/* Brand name - hidden on mobile, shown on larger screens */}
              <span className="hidden font-bold sm:inline-block">
                Job Intel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile screens */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Map through navigation links */}
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
            {/* Conditionally render UserMenu or Sign In button based on auth state */}
            {session ? (
              <UserMenu />
            ) : (
              <Link href="/signin">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
            {/* Theme toggle button */}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation - Sheet/Drawer component */}
          <Sheet>
            {/* Sheet trigger button - only visible on mobile */}
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            {/* Sheet content - slides in from the right */}
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              {/* Mobile navigation menu */}
              <nav className="flex flex-col gap-4 mt-6">
                {/* Map through navigation links */}
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
                  >
                    {label}
                  </Link>
                ))}
                {/* Authentication and theme controls section */}
                <div className="flex flex-col gap-4 mt-4">
                  {session ? (
                    <div className="px-2">
                      <UserMenu />
                    </div>
                  ) : (
                    <Link href="/signin" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                  )}
                  {/* Theme toggle in mobile menu */}
                  <div className="px-2">
                    <ModeToggle />
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header