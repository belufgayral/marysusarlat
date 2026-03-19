 'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CTASectionProps {
  id: string;
  title: string;
  linkText: string;
  linkHref: string;
  comingSoonText: string;
  className?: string; // For adding custom background shapes if needed
}

export function CTASection({ id, title, linkText, linkHref, comingSoonText, className = "" }: CTASectionProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section id={id} className={`w-full flex flex-col items-center justify-center text-center px-4 ${className}`}>
        <h2 className="text-4xl md:text-5xl text-foreground mb-6 max-w-2xl">
          {title}
        </h2>
        <Link
          href={linkHref}
          className="text-lg border-b border-foreground hover:scale-105 transition-scale duration-300 text-foreground"
          onClick={(e) => {
            // The CTA is a placeholder: open the "coming soon" modal instead of navigating.
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          {linkText}
        </Link>
      </section>

      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <div className="relative bg-background text-foreground rounded-xl shadow-xl w-full max-w-sm p-8">
            <button
              type="button"
              className="absolute top-3 right-3 text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
              onClick={() => setOpenModal(false)}
              aria-label="Cerrar"
            >
              X
            </button>

            <h3 id="coming-soon-title" className="text-2xl text-center">
              {comingSoonText}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
