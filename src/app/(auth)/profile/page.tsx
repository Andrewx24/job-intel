import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function ProfilePage() {
  // Get the session and redirect if not authenticated
  const session = await auth()
  if (!session) {
    redirect("/signin")
  }

  return (
    <div className="container max-w-4xl py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={session.user?.image ?? ''} />
              <AvatarFallback>{session.user?.name?.[0] ?? 'U'}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{session.user?.name}</h2>
              <p className="text-sm text-muted-foreground">{session.user?.email}</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">{session.user?.email}</p>
            </div>
            {/* Add more profile information sections as needed */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}