import Footer from '@/components/shared/footer'
import LogoBar from '@/components/shared/header/LogoBar'
import SocialBar from '@/components/shared/header/SocialBar'

export default function OthersLayout({ children }: IChildren) {
  return (
    <div>
      <SocialBar />
      <LogoBar />
      {children}
      <Footer />
    </div>
  )
}
