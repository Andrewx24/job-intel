// app/insights/page.tsx
"use client";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Briefcase,
  ArrowUp,

  Globe
} from "lucide-react";

// Sample data for charts
const growthData = [
  { month: "Jan", tech: 65, finance: 48, healthcare: 52 },
  { month: "Feb", tech: 72, finance: 51, healthcare: 55 },
  { month: "Mar", tech: 70, finance: 53, healthcare: 58 },
  { month: "Apr", tech: 75, finance: 52, healthcare: 57 },
  { month: "May", tech: 82, finance: 54, healthcare: 60 },
  { month: "Jun", tech: 87, finance: 57, healthcare: 63 },
];

const hiringTrends = [
  { role: "Software Engineers", count: 1240 },
  { role: "Product Managers", count: 850 },
  { role: "Data Scientists", count: 720 },
  { role: "Sales Leaders", count: 680 },
  { role: "Marketing", count: 590 },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Market Intelligence & Insights
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Data-driven insights to help you identify growing companies and emerging opportunities.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Hiring Companies
              </CardTitle>
              <Building2 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                <ArrowUp className="h-4 w-4 text-green-500 inline" />
                <span className="text-green-500 font-medium">18%</span> vs last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                New Job Opportunities
              </CardTitle>
              <Briefcase className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,654</div>
              <p className="text-xs text-muted-foreground">
                <ArrowUp className="h-4 w-4 text-green-500 inline" />
                <span className="text-green-500 font-medium">12%</span> vs last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Response Rate
              </CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32%</div>
              <p className="text-xs text-muted-foreground">
                <ArrowUp className="h-4 w-4 text-green-500 inline" />
                <span className="text-green-500 font-medium">5%</span> vs last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Companies with Growth Signals
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,423</div>
              <p className="text-xs text-muted-foreground">
                <ArrowUp className="h-4 w-4 text-green-500 inline" />
                <span className="text-green-500 font-medium">8%</span> vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Industry Growth Trends</CardTitle>
              <CardDescription>
                Monthly hiring activity by industry
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="tech" stroke="#2563eb" name="Technology" />
                  <Line type="monotone" dataKey="finance" stroke="#16a34a" name="Finance" />
                  <Line type="monotone" dataKey="healthcare" stroke="#9333ea" name="Healthcare" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Most In-Demand Roles</CardTitle>
              <CardDescription>
                Number of open positions by role
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hiringTrends} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="role" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Market Intelligence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Top Growing Industries</CardTitle>
              <CardDescription>Based on hiring activity and funding</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    Artificial Intelligence
                  </span>
                  <span className="text-green-500 flex items-center">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    32%
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    Clean Energy
                  </span>
                  <span className="text-green-500 flex items-center">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    28%
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    Digital Healthcare
                  </span>
                  <span className="text-green-500 flex items-center">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    25%
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emerging Trends</CardTitle>
              <CardDescription>Key market movements and opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Remote Work Continues to Grow</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      72% of companies now offer permanent remote positions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Startup Funding Recovery</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Q1 2025 shows 23% increase in early-stage funding
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}