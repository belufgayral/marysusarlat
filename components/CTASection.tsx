 'use client';

import { useState } from 'react';
import { VideosCarousel } from './VideosCarousel';

interface CTASectionProps {
  id: string;
  title: string;
  linkText: string;
  linkHref: string;
  comingSoonText: string;
  className?: string; // For adding custom background shapes if needed
}

export function CTASection({ id, title, linkText, linkHref, comingSoonText, className = "" }: CTASectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className={`w-full flex flex-col items-center justify-center text-center px-4 ${className}`}>
      <h2 className="text-4xl md:text-5xl mb-6 max-w-2xl">
        {title}
      </h2>
      <button
        type="button"
        className="flex items-center gap-2 text-lg border-b border-foreground hover:scale-105 transition-all duration-300 text-foreground group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {linkText}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Deployed Content */}
      <div 
        className={`w-full max-w-5xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] mt-10 opacity-100' : 'max-h-0 mt-0 opacity-0'
        }`}
      >
        {id === 'interviews' ? (
          <VideosCarousel 
            videos={[
              "https://www.youtube.com/embed/YS2msnDwzfs",
              "https://www.youtube.com/embed/c0k75I87K-0"
            ]} 
          />
        ) : (
          <div className="w-full flex justify-center mt-4">
              <p className="text-xl md:text-2xl tracking-wide italic">{comingSoonText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
