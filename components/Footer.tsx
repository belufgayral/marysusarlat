'use client';

import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-highlight w-full py-12 px-8 flex flex-col items-center justify-center gap-4 border-t border-foreground/20 mt-24">
      <h1 className="text-5xl text-foreground/50">María Su Sarlat</h1>
      <p className="text-xs text-foreground/60 uppercase tracking-widest font-sans">
        &copy; {new Date().getFullYear()} {t('footer.rights')}
      </p>
    </footer>
  );
}
