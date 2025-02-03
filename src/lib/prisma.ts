//lib/prisma.ts
import { PrismaClient } from "@prisma/client"

// This prevents multiple instances of Prisma Client in development
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// Create a single instance of Prisma Client
export const prisma = globalForPrisma.prisma || new PrismaClient()

// In development, we want to keep the same instance between hot reloads
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma