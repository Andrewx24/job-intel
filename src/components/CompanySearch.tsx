// components/CompanySearch.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CompanyCard } from '@/components/Company-card';
import { SearchFilters } from '@/components/Search-filter';
import { Company } from '@/lib/types';
import { Search, Loader2 } from 'lucide-react';

export function CompanySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;

    try {
      setIsLoading(true);
      // In a real application, this would be an API call
      // const response = await fetch(`/api/companies/search?q=${encodeURIComponent(searchQuery)}`);
      // const data = await response.json();
      // setCompanies(data.companies);

      // For now, we'll use mock data
      const mockCompany: Company = {
        id: '1',
        name: 'Example Tech',
        industry: 'Technology',
        size: '51-200',
        location: 'San Francisco, CA',
        revenue: '$10M-$50M',
        website: 'https://example.com',
        description: 'A leading technology company specializing in AI solutions.',
        socialLinks: {
          linkedin: 'https://linkedin.com/company/example',
        },
        metrics: {
          employeeCount: 150,
          yearFounded: 2020,
          annualRevenue: '$25M',
          fundingTotal: '$5M',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCompanies([mockCompany]);
    } catch (error) {
      console.error('Search error:', error);
      // In a real app, you'd want to show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search companies by name, industry, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            <span className="ml-2">Search</span>
          </Button>
        </div>
        <SearchFilters />
      </form>

      {companies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      )}

      {!isLoading && companies.length === 0 && searchQuery && (
        <div className="text-center py-8 text-gray-500">
          No companies found matching your search criteria.
        </div>
      )}
    </div>
  );
}