import { signIn } from "@/lib/auth"

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        try {
          await signIn("google", {
            redirect: true,
            callbackUrl: "/",
          })
        } catch (error) {
          console.error("Google sign-in error:", error)
          // You might want to handle this error appropriately
          throw error // This will help us see the error in logs
        }
      }}
    >
      <button className="w-full" type="submit">
        Sign in with Google
      </button>
    </form>
  )
}