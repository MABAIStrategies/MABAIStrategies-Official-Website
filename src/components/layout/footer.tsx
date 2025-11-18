import Link from 'next/link';
import { siteConfig } from '@/lib/config';

const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="container py-10 text-sm text-slate-400">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p>{siteConfig.description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
