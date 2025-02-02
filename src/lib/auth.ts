import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
  debug: true, // This will help us see detailed errors in production
  callbacks: {
    async signIn({ user, account }) {
      // Add logging to help debug production issues
      console.log('Sign in attempt:', { user, account })
      return true
    }
  },
  ...authConfig,
})