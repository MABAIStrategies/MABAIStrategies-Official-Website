'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/button';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? 'text-brand-accent'
                  : 'text-slate-300 transition hover:text-white'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Book a call
          </Button>
        </div>
        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-1.5 text-sm font-medium text-white/90 transition hover:border-white/30 hover:text-white md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`border-t border-white/10 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container flex flex-col gap-4 py-4 text-sm font-medium">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? 'text-brand-accent'
                  : 'text-slate-300 transition hover:text-white'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
            Book a call
          </Button>
        </div>
      </div>
    </header>
  );
}
