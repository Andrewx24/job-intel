// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Building2, 
  Users, 
  LineChart,
  MapPin,
  Briefcase,
  Mail,
  MessageSquare
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Dynamic background that works in both modes */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200">
              Connect Directly with US Companies
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Skip the job boards. Find companies you love and connect with decision-makers directly.
              Build meaningful relationships and discover hidden opportunities.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/companies">
                <Button size="lg" className="gap-2">
                  <Search className="w-4 h-4" />
                  Find Companies
                </Button>
              </Link>
              <Link href="/people">
                <Button variant="outline" size="lg" className="gap-2 bg-white/50 dark:bg-gray-800/50">
                  <Users className="w-4 h-4" />
                  Connect with People
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Adapted for job seekers */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Your Direct Path to Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Find Dream Companies</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover companies that match your values, industry interests, and career goals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Direct Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with hiring managers and decision-makers directly. Skip the traditional application process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Hidden Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover roles before they hit job boards. Build relationships that lead to career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Coverage - Updated for job seekers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Find Opportunities Anywhere in the US
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Whether you&apos;re looking to work remotely or relocate, our platform helps you discover 
                  companies and connections across all 50 states. Find opportunities that match your 
                  location preferences.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Remote and local opportunities</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <LineChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Growing companies actively hiring</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Direct contact with decision makers</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/api/placeholder/500/400"
                    alt="US Coverage Map"
                    className="rounded-lg shadow-lg dark:opacity-80"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced for networking */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Take Control of Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who are building meaningful connections and finding 
              their dream roles through direct company engagement.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/companies">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Building2 className="w-4 h-4" />
                  Explore Companies
                </Button>
              </Link>
              <Link href="/people">
                <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                  <Users className="w-4 h-4" />
                  Find Connections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

