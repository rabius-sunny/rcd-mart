import React from 'react'

import Footer from '@/components/shared/footer'
import LogoBar from '@/components/shared/header/LogoBar'
import Navbar from '@/components/shared/header/Navbar'
import SocialBar from '@/components/shared/header/SocialBar'

export default function HomeLayout({ children }: IChildren) {
  return (
    <div>
      <SocialBar />
      <LogoBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
