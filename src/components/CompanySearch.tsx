// components/CompanySearch.tsx
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CompanyCard } from '@/components/Company-card';
import { 
  Company, 
  CompanySize, 
  Industry, 
  Location, 
  RevenueRange,
  CompanySearchParams 
} from '@/lib/types';
import { Search, Loader2, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Define our local search filters interface
interface SearchFilters {
  industry?: Industry;
  size?: CompanySize;
  city?: string;
  state?: string;
  revenue?: RevenueRange;
}

export function CompanySearch() {
  // State management for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  // Handle form submission and search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);

      // Build search parameters for API call
      const searchParams: CompanySearchParams = {
        query: searchQuery,
        industry: filters.industry,
        size: filters.size,
        location: filters.city || filters.state ? {
          city: filters.city,
          state: filters.state,
          country: 'United States' // Default for US companies
        } : undefined,
        revenue: filters.revenue,
      };

      // In production, this would be an API call
      // const response = await fetch('/api/companies/search?' + new URLSearchParams(searchParams));
      // const data = await response.json();

      // For demonstration, create a mock company with proper types
      const mockCompany: Company = {
        id: '1',
        name: 'Example Tech',
        industry: filters.industry || 'Technology',
        size: filters.size || '51-200',
        location: {
          city: filters.city || 'San Francisco',
          state: filters.state || 'CA',
          country: 'United States',
        },
        revenue: filters.revenue || '$10M-$50M',
        website: 'https://example.com',
        description: 'A leading technology company specializing in AI solutions.',
        socialLinks: {
          linkedin: 'https://linkedin.com/company/example',
        },
        metrics: {
          employeeCount: 150,
          yearFounded: 2020,
          annualRevenue: '$10M-$50M',
          fundingTotal: '$5M',
          lastUpdated: new Date(),
          growthRate: 25,
        },
        status: 'active',
        verificationStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCompanies([mockCompany]);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || Object.values(filters).some(value => value !== undefined);

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Search Bar and Submit Button */}
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

        {/* Advanced Filters Section */}
        <div className="flex flex-wrap gap-4">
          {/* Industry Filter */}
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
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Company Size Filter */}
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

          {/* Location Filters */}
          <Input
            type="text"
            placeholder="City"
            value={filters.city || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
            className="w-[150px]"
          />
          <Input
            type="text"
            placeholder="State"
            value={filters.state || ''}
            onChange={(e) => setFilters(prev => ({ ...prev, state: e.target.value }))}
            className="w-[100px]"
          />

          {/* Revenue Filter */}
          <Select
            value={filters.revenue}
            onValueChange={(value: RevenueRange) => 
              setFilters(prev => ({ ...prev, revenue: value }))
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Revenue Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Less than $1M">Less than $1M</SelectItem>
              <SelectItem value="$1M-$10M">$1M-$10M</SelectItem>
              <SelectItem value="$10M-$50M">$10M-$50M</SelectItem>
              <SelectItem value="$50M-$100M">$50M-$100M</SelectItem>
              <SelectItem value="$100M-$500M">$100M-$500M</SelectItem>
              <SelectItem value="$500M-$1B">$500M-$1B</SelectItem>
              <SelectItem value="$1B+">$1B+</SelectItem>
            </SelectContent>
          </Select>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <Button 
              type="button" 
              variant="ghost" 
              onClick={clearFilters}
              className="text-sm"
            >
              <X className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          )}
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
      {!isLoading && companies.length === 0 && hasActiveFilters && (
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