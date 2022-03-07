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
      clientId: 'cc2085987fa8d870af98',
      clientSecret: 'da6a144af253445069b19995cbee217a4ae3e805'
    }),
    GoogleProvider({
      clientId:'',
      clientSecret:''
    })
    // ...add more providers here
  ],
})