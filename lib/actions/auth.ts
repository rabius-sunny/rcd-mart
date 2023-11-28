'use server'

import { signIn, signOut } from '@/configs/auth'

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', Object.fromEntries(formData))
  } catch (error) {
    if ((error as any).type === 'CredentialsSignin') {
      return 'CredentialsSignin'
    }
  }
}

export const signout = async () => {
  await signOut()
}
