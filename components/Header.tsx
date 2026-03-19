'use client';

import Link from 'next/link';
import { FlowerDivider } from './FlowerDivider';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: t('header.nav.books'), href: '#books' },
    { name: t('header.nav.interviews'), href: '#interviews' },
    { name: t('header.nav.travels'), href: '#travels' },
    { name: t('header.nav.about'), href: '#about' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="w-full pt-8 md:pt-12 pb-4 md:pb-8 px-4 flex flex-col items-center bg-transparent z-10">
      <div className="text-center mb-4">
        <h1 className="text-6xl md:text-8xl text-foreground">
          {t('header.title')}
        </h1>
      </div>

      <FlowerDivider className="mb-6 md:mb-8" />

      {/* Mobile dropdown */}
      <div className="w-full max-w-md md:hidden">
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-foreground/20 bg-highlight/40 backdrop-blur-sm text-foreground font-serif text-xl transition-colors hover:bg-highlight/60"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span>{t('header.nav.menu')}</span>
          <span
            className={`text-2xl leading-none transition-transform duration-300 ${mobileOpen ? 'rotate-45' : ''}`}
            aria-hidden="true"
          >
            +
          </span>
        </button>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="rounded-2xl border border-foreground/15 bg-background/70 backdrop-blur-md shadow-lg p-3">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-xl text-xl font-serif text-foreground/90 transition-all hover:bg-highlight/50 hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex flex-wrap justify-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-2xl font-serif text-foreground relative pb-1
                        after:absolute
                        after:left-0
                        after:bottom-0
                        after:h-[1px]
                        after:w-full
                        after:bg-foreground
                        after:origin-center
                        after:scale-x-0
                        after:transition-transform
                        after:duration-500
                        after:ease-out
                        hover:after:scale-x-100
                        hover:scale-105
                        transition-all origin-center
                        duration-300
                      "
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
