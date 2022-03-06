import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: procces.env.GitHUB_ID,
      clientSecret: procces.env.GitHUB_ID_SECRET
    }),
    // ...add more providers here
  ],
})
