import { authConfig } from '@/configs/auth.config'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

declare module 'next-auth' {
  interface Session {
    user: {
      username?: string
      password?: string
      another?: string
    } & Omit<User, 'id'>
  }
}
declare module 'next-auth' {
  interface User {
    username?: string
    password?: string
    another?: string
  }
}

const getUser = async (username: string, password: string) => {
  try {
    const user = {
      id: '1',
      username: 'sunny',
      password: '123456',
      another: 'value'
    }

    if (user.username === username && user.password === password) {
      return user
    } else {
      return null
    }
  } catch (error) {
    throw new Error('Failed to fetch user')
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().min(3), password: z.string().min(3) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data
          const user = await getUser(username, password)
          return user
        }

        return null
      }
    })
  ],
  callbacks: {
    authorized(params) {
      return !!params.auth?.user
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username
        token.password = user.password
        token.another = user.another
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username as string
        session.user.password = token.password as string
        session.user.another = token.another as string
      }
      return session
    }
  }
})
