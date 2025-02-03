// app/protected/page.tsx
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function ProtectedPage() {
  // Attempt to get the session
  const session = await auth()

  // If no session exists, redirect to sign in page with a return URL
  if (!session) {
    // This is more user-friendly than showing "Not authenticated"
    redirect("/signin?callbackUrl=/protected")
  }

  // If we have a session, we can show the protected content
  return (
    <div className="container max-w-4xl py-8">
      <div className="space-y-6">
        {/* Welcome header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Protected Page</h1>
          <p className="text-muted-foreground">
            Welcome back, {session.user?.name}! This page is only visible to authenticated users.
          </p>
        </div>

        {/* Display session information in a more structured way */}
        <div className="rounded-lg border p-4 space-y-4">
          <h2 className="font-semibold">Your Session Information</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <span>{session.user?.email}</span>
            </div>
            {session.user?.image && (
              <div className="flex items-center gap-2">
                <Image 
                  src={session.user.image} 
                  alt="Profile" 
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                
              </div>
            )}
            {/* Add more user information as needed */}
          </div>
        </div>

        {/* Optional: Add actions or additional protected content */}
        <div className="space-y-4">
          <h2 className="font-semibold">Protected Actions</h2>
          <p>Add your protected content and functionality here.</p>
        </div>

        {/* For development/debugging purposes, you might want to keep the raw session data */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-slate-100 rounded-lg">
            <h3 className="font-mono text-sm mb-2">Raw Session Data:</h3>
            <pre className="text-xs overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}