// app/signin/page.tsx
import GithubSignIn from "@/components/GithubSignIn"
import GoogleSignIn from "@/components/GoogleSignIn"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-center text-2xl">Sign in</CardTitle>
            <CardDescription className="text-center">
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <GoogleSignIn />
            <GithubSignIn />
            
            {/* Terms and Privacy section */}
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <p>
                By signing in, you agree to our{' '}
                <Link 
                  href="/termsofservice" 
                  className="underline hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link 
                  href="/privacypolicy" 
                  className="underline hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Optional: Add help text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Need help?{' '}
            <a 
              href="mailto:support@jobintel.app"
              className="underline hover:text-primary transition-colors"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}