"use client";

// components/CompanySearch.tsx
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CompanyCard } from '@/components/Company-card';
import { Company, CompanySize, Industry } from '@/lib/types';
import { Search, Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchFilters {
  industry?: Industry;
  size?: CompanySize;
  location?: string;
}

export function CompanySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);

      // Build search parameters
      const params = new URLSearchParams();
      if (searchQuery) params.append('q', searchQuery);
      if (filters.industry) params.append('industry', filters.industry);
      if (filters.size) params.append('size', filters.size);
      if (filters.location) params.append('location', filters.location);

      // In a real application, make the API call
      // const response = await fetch(`/api/companies/search?${params}`);
      // const data = await response.json();
      // setCompanies(data.companies);

      // For demonstration, using mock data
      const mockCompany: Company = {
        id: '1',
        name: 'Example Tech',
        industry: filters.industry || 'Technology',
        size: filters.size || '51-200',
        location: filters.location || 'San Francisco, CA',
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

      await new Promise(resolve => setTimeout(resolve, 1000));
      setCompanies([mockCompany]);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Search Input and Button */}
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search companies by name..."
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

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <Select
            value={filters.industry}
            onValueChange={(value: Industry) => 
              setFilters(prev => ({ ...prev, industry: value }))
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Manufacturing">Manufacturing</SelectItem>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.size}
            onValueChange={(value: CompanySize) => 
              setFilters(prev => ({ ...prev, size: value }))
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Company Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-1000">201-1000 employees</SelectItem>
              <SelectItem value="1001-5000">1001-5000 employees</SelectItem>
              <SelectItem value="5000+">5000+ employees</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Location (City, State)"
            value={filters.location || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            className="w-[200px]"
          />
        </div>
      </form>

      {/* Results Section */}
      {companies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && companies.length === 0 && searchQuery && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            No companies found matching your search criteria.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Try adjusting your filters or search term.
          </p>
        </div>
      )}
    </div>
  );
}