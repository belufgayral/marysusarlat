import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { VideosCarousel } from './VideosCarousel';

interface BookSectionProps {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
  getItText: [string, string];
  link: string;
  booktrailers: string[];
}

export function BookSection({ title, description, imageAlt, imageSrc, reverse = false, getItText, link, booktrailers }: BookSectionProps) {
  const isUnavailable = link === '#';
  const hasTrailers = booktrailers && booktrailers.length > 0 && booktrailers[0] !== '#';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-6xl px-4 md:px-8 py-16 flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full">
        {/* Image Block */}
        <div className={`w-2/3 md:w-1/3 aspect-[3/4] relative shadow-lg/50 overflow-hidden flex-shrink-0 ${reverse ? 'md:order-2' : ''}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content Block */}
        <div className={`w-full md:w-2/3 flex flex-col items-center md:items-start gap-4 ${reverse ? 'md:order-1' : ''}`}>
          <h2 className="text-5xl text-center md:text-start md:text-6xl text-foreground">{title}</h2>
          <p className="md:text-lg text-justify leading-relaxed text-foreground/80">
            {description}
          </p>
          
          <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
            {isUnavailable ? (
              <p className="text-foreground/60 italic">
                {getItText[0]}
              </p>
            ) : (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-foreground hover:scale-105 duration-300"
              >
                {getItText[1]}
              </Link>
            )}

            {hasTrailers && (
              <>
                <span className="text-foreground/40">|</span>
                <button
                  type="button"
                  className="flex items-center gap-2 text-foreground underline underline-offset-4 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                >
                  Booktrailers
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {hasTrailers && (
        <div 
          className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'
          }`}
        >
          <VideosCarousel videos={booktrailers} />
        </div>
      )}
    </section>
  );
}
