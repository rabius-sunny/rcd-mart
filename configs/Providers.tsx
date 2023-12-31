'use client'

import { SessionProvider as AuthProvider } from 'next-auth/react'

export default function Provider({ children }: IChildren) {
  return <AuthProvider>{children}</AuthProvider>
}
