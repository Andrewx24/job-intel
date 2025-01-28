// components/company-card.tsx
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Company } from '@/lib/types';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <span className="text-sm text-gray-500">{company.industry}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">{company.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-medium">Size:</span> {company.size}
            </div>
            <div>
              <span className="font-medium">Revenue:</span> {company.revenue}
            </div>
            <div>
              <span className="font-medium">Location:</span> {company.location}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}