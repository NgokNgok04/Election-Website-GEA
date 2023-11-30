import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

import type { NextAuthConfig } from "next-auth"
import { User } from "lucide-react"

const DataSet = [
  {
      voter_id: 0, // voters[0].id
      NIM: "13522001",
      token: "abcdef",
      status: 0,
  },
  {
      voter_id: 1, // voters[0].id
      NIM: "13522002",
      token: "abcdef",
      status: 0,
  },
  {
      voter_id: 2, // voters[0].id
      NIM: "13522003",
      token: "abcdef",
      status: 0,
  },
  {
      voter_id: 3, // voters[0].id
      NIM: "13522004",
      token: "abcdef",
      status: 0,
  },
  {
      voter_id: 4, // voters[0].id
      NIM: "13522005",
      token: "abcdef",
      status: 0,
  },
  {
      voter_id: 5, // voters[0].id
      NIM: "13522006",
      token: "abcdef",
      status: 0,
  }
]

export const config = {

    pages: {
        signIn: '/signin'
    },
  providers: [
    CredentialsProvider({
      id:'credentials',
      name:'Credentials',
      credentials: {
        username: {label: "Username", type: "text"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials, req) : Promise <any | undefined> {
        if (!credentials.password || !credentials.username)
        {
          return null;
        }
        const user = DataSet.find((elmt) => elmt.NIM === credentials.username);
        if (!user)
        {
          return null;
        }
        const isToken = credentials.password === user.token;
        if (!isToken)
        {
          return null;
        }
        return {
          NIM: credentials.username,
          token: credentials.password
        }
      }
    })
  ],
  callbacks: {
    authorized({ request, auth }: any) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
