import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise  from '../../../lib/mongod'


export default NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: procces.ENV.GITHUB_ID,
      clientSecret: procces.ENV.GITHUB_ID_SECRET
    }),
    GoogleProvider({
      clientId:'',
      clientSecret:''
    })
    // ...add more providers here
  ],
})
