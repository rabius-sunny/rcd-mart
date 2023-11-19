import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

import { siteInfo } from '../configs/site'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteInfo.name,
    template: `%s - ${siteInfo.name}`
  },
  description: siteInfo.description,
  authors: {
    url: 'https://fb.com/rabibinsalam',
    name: 'Rabius Sunny'
  },
  generator:
    'car micro micro-bus car-decoration accessories car-accessories car-parts auto-parts automobiles parts decorate',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang='en'>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
