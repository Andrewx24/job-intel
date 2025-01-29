// components/Header.tsx
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const navLinks = [
  { href: "/companies", label: "Companies" },
  { href: "/people", label: "People" },
];

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo.jpg" alt="Job Intel Logo" width={120} height={30} priority />
          </Link>
          <Link href="/" className="font-bold text-xl">
            Job Intel
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-gray-600 transition-colors">
              {label}
            </Link>
          ))}
          
          {/* Sign In Button */}
          <Link href="/signin" passHref>
            <Button asChild variant="outline">
              Sign In
            </Button>
          </Link>

          {/* Dark Mode Toggle */}
          <ModeToggle aria-label="Toggle Dark Mode" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
