// lib/db.ts
import { prisma } from './prisma'
import type { Company, Person } from '@prisma/client'

export async function searchCompanies(params: {
  query?: string
  industry?: string
  size?: string
  city?: string
  state?: string
}) {
  const { query, industry, size, city, state } = params

  return await prisma.company.findMany({
    where: {
      AND: [
        // Search by name or description if query provided
        query ? {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        } : {},
        // Filter by industry if provided
        industry ? { industry: industry as any } : {},
        // Filter by size if provided
        size ? { size: size as any } : {},
        // Filter by location if provided
        city || state ? {
          location: {
            path: ['city'],
            equals: city,
          },
        } : {},
      ],
    },
    include: {
      employees: true, // Include related people
    },
  })
}

// Function to get a company with all its employees
export async function getCompanyWithEmployees(companyId: string) {
  return await prisma.company.findUnique({
    where: { id: companyId },
    include: {
      employees: true,
    },
  })
}

// Function to create a new company
export async function createCompany(data: Omit<Company, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.company.create({
    data,
  })
}