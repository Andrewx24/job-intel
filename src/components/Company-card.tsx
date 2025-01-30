// components/Company-card.tsx
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Company } from '@/lib/types';
import { MapPin, Users, Globe, TrendingUp } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  // Format the location string from the Location object
  const formattedLocation = `${company.location.city}, ${company.location.state}`;
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <p className="text-sm text-gray-500">{company.industry}</p>
          </div>
          {company.metrics.fundingTotal && (
            <span className="text-sm font-medium text-green-600">
              {company.metrics.fundingTotal} raised
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{company.description}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{formattedLocation}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-gray-500" />
              <span>{company.metrics.employeeCount} employees</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4 text-gray-500" />
              <a 
                href={company.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-gray-500" />
              <span>{company.metrics.annualRevenue}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}