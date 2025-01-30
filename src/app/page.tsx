// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  LineChart,
  MessageSquare,
  Target,
  
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - First impression and core value proposition */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
        {/* Subtle background grid pattern for visual interest */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category badge indicating platform type */}
            <div className="inline-block mb-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/30">
                <Sparkles className="mr-1 h-3 w-3" />
                Intelligence-Driven Job Search
              </div>
            </div>
            {/* Main headline with gradient effect */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200">
              Transform How You Find Opportunities
            </h1>
            {/* Core value proposition */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Stop sending applications into the void. Connect directly with growing companies 
              and decision-makers. Discover meaningful opportunities before they become public job postings.
            </p>
            {/* Primary call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/companies">
                <Button size="lg" className="w-full sm:w-auto gap-2 px-8">
                  <Target className="w-4 h-4" />
                  Discover Companies
                </Button>
              </Link>
              <Link href="/insights">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto gap-2 px-8 bg-white/50 dark:bg-gray-800/50"
                >
                  <LineChart className="w-4 h-4" />
                  View Market Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - How we solve user problems */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Take Control of Your Career Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Move beyond traditional job boards. Connect with companies that match your ambitions.
            </p>
          </div>
          
          {/* Feature cards highlighting main benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Company Intelligence Card */}
            <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg w-fit">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Growth Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify companies in growth phases through our AI-powered analysis of funding, 
                hiring patterns, and expansion signals.
              </p>
            </div>

            {/* Direct Access Card */}
            <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg w-fit">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Direct Connections
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect directly with decision-makers through verified contact information 
                and professional introduction tools.
              </p>
            </div>

            {/* Opportunity Discovery Card */}
            <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg w-fit">
                <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Early Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover opportunities before they're posted by identifying companies 
                actively building teams and expanding operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Detailed functionality */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              Intelligence-Driven Career Discovery
            </h2>
            
            <div className="space-y-6">
              {/* Company Analysis Feature */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Smart Company Analysis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our AI continuously monitors company growth signals, from funding rounds to 
                    hiring patterns, helping you identify companies with the best opportunities.
                  </p>
                </div>
              </div>

              {/* Verified Contacts Feature */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Verified Decision-Maker Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connect with the right people through our verified contact database, 
                    updated weekly to ensure accuracy and relevance.
                  </p>
                </div>
              </div>

              {/* Intelligent Outreach Feature */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Smart Engagement Tools
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get personalized outreach suggestions and timing recommendations to 
                    maximize your chances of making meaningful connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Convert interest to action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join professionals who are discovering meaningful opportunities through 
              intelligent company research and direct connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/companies">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto gap-2 px-8 bg-white text-blue-600 hover:bg-white/90"
                >
                  <Building2 className="w-4 h-4" />
                  Start Discovering
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto gap-2 px-8 bg-transparent border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
                >
                  <ArrowRight className="w-4 h-4" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}