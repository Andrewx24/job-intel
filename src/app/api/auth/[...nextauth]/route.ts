import { handlers } from "@/lib/auth"

// Export the handlers but don't force edge runtime
export const { GET, POST } = handlers