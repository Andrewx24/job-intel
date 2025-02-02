import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma" // Import our singleton Prisma instance

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" }, // Using JWT strategy for better edge compatibility
  debug: process.env.NODE_ENV === "development",
  ...authConfig,
})