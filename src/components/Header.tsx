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

const navLinks = [
  { href: "/companies", label: "Companies" },
  { href: "/people", label: "People" },
]

const Header = async () => {
  const session = await auth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section - unchanged */}
          <div className="flex items-center gap-2">
            {/* ... existing logo code ... */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
            {session ? (
              <UserMenu />
            ) : (
              <Link href="/signin">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
                  >
                    {label}
                  </Link>
                ))}
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