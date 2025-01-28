export interface Company {
    id: string;
    name: string;
    industry: string;
    size: string;
    location: string;
    revenue: string;
    website: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    companyId: string;
    email: string;
    linkedin?: string;
    phone?: string;
    createdAt: Date;
    updatedAt: Date;
  }