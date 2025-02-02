import GithubSignIn from "@/components/GithubSignIn"
import GoogleSignIn from "@/components/GoogleSignIn"
 export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <GoogleSignIn />
        <GithubSignIn />
      </div>
    </div>
  )
}