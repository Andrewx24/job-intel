// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Job Intel</h3>
            <p className="text-sm text-gray-600">
              Your source for comprehensive business intelligence
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>Company Search</li>
              <li>People Search</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>API</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <Link href="/privacypolicy">
              <li>Privacy Policy</li>
              </Link>
              <Link href="/termsofservice">
              <li>Terms of Service</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
