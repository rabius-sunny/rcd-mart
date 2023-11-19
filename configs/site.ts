export type TSiteInfo = typeof siteInfo
export type TNavItem = {
  name: string
  href: string
}
export const siteInfo = {
  name: 'Razin Car',
  description: 'Biggest Car Decoration Accessories Shop in Rangpur City',
  navItems: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Others', href: '/others' }
  ]
}
