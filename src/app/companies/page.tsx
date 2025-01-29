// app/companies/page.tsx
import { Suspense } from 'react';
import { CompanyCard } from '@/components/Company-card';
import { SearchFilters } from '@/components/Search-filter';
import { Input } from '@/components/ui/input';
import { Company } from '@/lib/types';
import { Loader2 } from 'lucide-react';

// Loading component for better user experience
function LoadingCompanies() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <span className="ml-2 text-lg text-gray-600 dark:text-gray-300">
        Loading companies...
      </span>
    </div>
  );
}

// Main companies page component
export default async function CompaniesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Page Header */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Companies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover and connect with companies across the United States
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <Input 
              placeholder="Search companies..."
              className="max-w-sm"
            />
            <SearchFilters />
          </div>

          {/* Companies Grid with Loading State */}
          <Suspense fallback={<LoadingCompanies />}>
            <CompanyList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Company list component with data fetching
async function CompanyList() {
  // In a real app, fetch companies from your API
  const companies: Company[] = [];
  
  // Handle empty state
  if (companies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          No companies found. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}