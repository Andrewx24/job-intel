// lib/types.ts

/**
 * Basic Types
 * These are the fundamental types used throughout the application
 */

// Company size ranges that match standard industry classifications
export type CompanySize = 
  | '1-10'
  | '11-50'
  | '51-200'
  | '201-1000'
  | '1001-5000'
  | '5000+';

// Industry categories for company classification
export type Industry =
  | 'Technology'
  | 'Healthcare'
  | 'Finance'
  | 'Manufacturing'
  | 'Retail'
  | 'Education'
  | 'Other';

// Revenue ranges for company classification
export type RevenueRange =
  | 'Less than $1M'
  | '$1M-$10M'
  | '$10M-$50M'
  | '$50M-$100M'
  | '$100M-$500M'
  | '$500M-$1B'
  | '$1B+'
  | 'Unknown';

// Email verification status
export type EmailStatus = 'verified' | 'unverified' | 'invalid';

// Job level for better title classification
export type JobLevel =
  | 'C-Level'
  | 'VP'
  | 'Director'
  | 'Manager'
  | 'Senior'
  | 'Mid-Level'
  | 'Entry-Level';

/**
 * Shared Interface Components
 * These are reusable interface parts used in multiple places
 */

// Social media links structure
export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

// Location information structure
export interface Location {
  street?: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
}

// Company metrics tracking structure
export interface CompanyMetrics {
  employeeCount: number;
  yearFounded: number;
  annualRevenue?: RevenueRange;
  fundingTotal?: string;
  growthRate?: number;
  lastUpdated: Date;
}

// Contact information structure
export interface ContactInfo {
  email?: string;
  phone?: string;
  direct?: string;
  preferred?: 'email' | 'phone' | 'direct';
}

/**
 * Main Entity Interfaces
 * These are the primary data structures used in the application
 */

// Company interface representing business entities
export interface Company {
  id: string;
  name: string;
  industry: Industry;
  size: CompanySize;
  location: Location;
  revenue: RevenueRange;
  website: string;
  description: string;
  socialLinks: SocialLinks;
  metrics: CompanyMetrics;
  tags?: string[];
  status: 'active' | 'inactive';
  verificationStatus: 'verified' | 'unverified';
  createdAt: Date;
  updatedAt: Date;
}

// Person interface representing individual professionals
export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  jobLevel: JobLevel;
  companyId: string;
  company: Company;
  imageUrl?: string;
  bio?: string;
  email: string;
  emailStatus: EmailStatus;
  location: Location;
  socialProfiles: {
    linkedin?: string;
    twitter?: string;
  };
  contact: ContactInfo;
  skills?: string[];
  interests?: string[];
  lastActive?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Search and Filter Types
 * These types handle search functionality and filtering
 */

// Base search parameters interface
interface BaseSearchParams {
  query?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Company search parameters
export interface CompanySearchParams extends BaseSearchParams {
  industry?: Industry;
  size?: CompanySize;
  location?: Partial<Location>;
  revenue?: RevenueRange;
  minEmployees?: number;
  maxEmployees?: number;
  tags?: string[];
}

// Person search parameters
export interface PersonSearchParams extends BaseSearchParams {
  jobLevel?: JobLevel;
  title?: string;
  company?: string;
  location?: Partial<Location>;
  emailStatus?: EmailStatus;
  skills?: string[];
}

/**
 * API Response Types
 * These types handle API responses and pagination
 */

// Generic paginated response interface
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
  limit: number;
}

// Company search response
export interface CompanySearchResponse extends PaginatedResponse<Company> {
  filters: {
    industry?: Industry[];
    size?: CompanySize[];
    location?: Location[];
    revenue?: RevenueRange[];
  };
  meta: {
    totalCompanies: number;
    uniqueIndustries: number;
    averageEmployeeCount: number;
  };
}

// Person search response
export interface PersonSearchResponse extends PaginatedResponse<Person> {
  filters: {
    jobLevels?: JobLevel[];
    companies?: string[];
    locations?: Location[];
    emailStatus?: EmailStatus[];
  };
  meta: {
    totalPeople: number;
    verifiedEmailsCount: number;
    uniqueCompanies: number;
  };
}

/**
 * Analytics Types
 * These types handle analytics and metrics
 */

export interface CompanyGrowthMetrics {
  employeeGrowth: number;
  revenueGrowth: number;
  fundingGrowth: number;
  period: 'monthly' | 'quarterly' | 'yearly';
  timestamp: Date;
}

export interface IndustryMetrics {
  industry: Industry;
  totalCompanies: number;
  averageEmployeeCount: number;
  averageRevenue: RevenueRange;
  growthRate: number;
  timestamp: Date;
}