// components/Header.tsx
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Job Intel
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/companies" className="hover:text-gray-600 transition-colors">
            Companies
          </Link>
          <Link href="/people" className="hover:text-gray-600 transition-colors">
            People
          </Link>
          <Link href="/signin">
          <Button variant="outline">
            Sign In

            </Button>
            </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
