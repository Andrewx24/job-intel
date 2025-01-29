// lib/types.ts
export interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  location: string;
  revenue: string;
  website: string;
  description: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  metrics: {
    employeeCount: number;
    yearFounded: number;
    annualRevenue?: string;
    fundingTotal?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  companyId: string;
  company: Company;
  imageUrl?: string;
  bio?: string;
  email: string;
  emailStatus: 'verified' | 'unverified' | 'invalid';
  socialProfiles: {
    linkedin?: string;
    twitter?: string;
  };
  contact: {
    phone?: string;
    direct?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type CompanySize = 
  | '1-10'
  | '11-50'
  | '51-200'
  | '201-1000'
  | '1001-5000'
  | '5000+';

export type Industry =
  | 'Technology'
  | 'Healthcare'
  | 'Finance'
  | 'Manufacturing'
  | 'Retail'
  | 'Education'
  | 'Other';