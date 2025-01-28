import { Suspense } from 'react';
import { CompanyCard } from '@/components/Company-card';
import { SearchFilters } from '@/components/Search-filter';
import { Input } from '@/components/ui/input';

export default async function CompaniesPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">Companies</h1>
        
        <div className="flex items-center space-x-4">
          <Input 
            placeholder="Search companies..." 
            className="max-w-sm"
          />
          <SearchFilters />
        </div>

        <Suspense fallback={<div>Loading companies...</div>}>
          <CompanyList />
        </Suspense>
      </div>
    </div>
  );
}

async function CompanyList() {
  // In a real app, this would fetch from your database
  const companies: Company[] = [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}