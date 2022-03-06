import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'cc2085987fa8d870af98',
      clientSecret: 'da6a144af253445069b19995cbee217a4ae3e805'
    }),
    // ...add more providers here
  ],
})