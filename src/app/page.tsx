// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 

  Building2, 
  Users, 
  LineChart,
  
  MessageSquare,
  Target,
  Star,
  Sparkles,
  
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/30">
                <Sparkles className="mr-1 h-3 w-3" />
                Sales Intelligence Platform
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200">
              Stop Applying, Start Connecting
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Find growing companies and connect with decision-makers directly. Get insider access 
              to opportunities before they hit the job boards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/companies">
                <Button size="lg" className="w-full sm:w-auto gap-2 px-8">
                  <Target className="w-4 h-4" />
                  Find Your Target Companies
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

      {/* Value Proposition Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Find Companies That Are Ready to Hire
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stop sending applications into the void. Connect with companies that match your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg w-fit">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Smart Company Targeting
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find companies actively hiring in your industry using our advanced market intelligence.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg w-fit">
                <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Growth Indicators
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify companies with high growth potential through funding, hiring, and expansion signals.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg w-fit">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Decision Maker Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect directly with hiring managers and key decision-makers at your target companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              Intelligence-Driven Job Search
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Company Growth Insights
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our AI analyzes funding rounds, office expansions, and hiring patterns to identify 
                    companies with the highest potential for new opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Verified Contact Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access accurate, up-to-date contact information for key decision-makers, 
                    verified through multiple sources.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Intelligent Outreach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get personalized insights and timing recommendations to ensure your outreach 
                    has the highest chance of success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
<section className="py-20 bg-blue-600 dark:bg-blue-800">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Ready to Take Control of Your Career?
      </h2>
      <p className="text-xl mb-8 text-white/90">
        Join thousands of professionals who are finding their dream roles through 
        targeted company research and direct connections.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/companies">
          <Button 
            size="lg"
            className="w-full sm:w-auto gap-2 px-8 bg-white text-blue-600 hover:bg-white/90"
          >
            <Building2 className="w-4 h-4" />
            Discover Companies
          </Button>
        </Link>
        <Link href="/pricing">
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto gap-2 px-8 bg-transparent border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
          >
            <Star className="w-4 h-4" />
            View Plans
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}