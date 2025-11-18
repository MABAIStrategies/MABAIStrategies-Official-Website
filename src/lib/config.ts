export const siteConfig = {
  name: 'MAB AI Strategies LLC',
  description: 'Engineering AI systems that think, sell, and scale.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mab-ai-strategies-demo.vercel.app',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/insights', label: 'Insights' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]
};
