import NextAuth from "next-auth"
import GOOGLEProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GOOGLEProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
  ],
}
export default NextAuth(authOptions)