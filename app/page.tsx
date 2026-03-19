'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookSection } from "@/components/BookSection";
import { CTASection } from "@/components/CTASection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import { useTranslation } from "react-i18next";
import { FlowerDivider } from "@/components/FlowerDivider";

export default function Home() {
  const { t } = useTranslation();

  // Book cover images — order matches the 'books' array in all translation files
  const BOOK_IMAGES = [
    '/imgs/elJardinKlingsor.jpeg',
    '/imgs/laCasaFox.webp',
    '/imgs/laDesaparicionDonanteFrances.jpg',
    '/imgs/laOctavaGaveta.jpg',
  ];


  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden text-foreground">
      <Header />

      {/* BOOKS SECTION */}
      <div id="books" className="bg-highlight flex flex-col w-full items-center md:gap-12 py-20 relative z-10">
        <div className="custom-shape-divider-top-1773545066">
          <img src="/wavesOpacityTop.svg" alt="" className="relative block w-[calc(175%+1.3px)] h-[79px] object-cover object-top" aria-hidden="true" />
        </div>

        {(t('books', { returnObjects: true }) as Array<{ title: string; description: string; get_it: [string, string]; link: string }>).map((book, index) => (
          <BookSection
            key={index}
            title={book.title}
            description={book.description}
            imageAlt={`Cover of ${book.title}`}
            imageSrc={BOOK_IMAGES[index] ?? ''}
            reverse={index % 2 !== 0}
            getItText={book.get_it}
            link={book.link}
          />
        ))}

        <div className="custom-shape-divider-bottom-1773545749">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* INTERVIEWS AND TRAVELS SECTION */}
      <div className="w-full py-15 relative">
        <div className="relative z-10 flex flex-col gap-16">
          <CTASection
            id="interviews"
            title={t('cta.interviews.title')}
            linkText={t('cta.interviews.link')}
            linkHref="#"
            comingSoonText={t('cta.coming_soon')}
          />

          <FlowerDivider />
          
          <CTASection
            id="travels"
            title={t('cta.travels.title')}
            linkText={t('cta.travels.link')}
            linkHref="#"
            comingSoonText={t('cta.coming_soon')}
          />
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <div className="bg-highlight w-full flex justify-center py-20 relative">
        <div className="custom-shape-divider-top-1773545066">
          <img src="/wavesOpacityTop.svg" alt="" className="relative block w-[calc(175%+1.3px)] h-[79px] object-cover object-top" aria-hidden="true" />
        </div>
        
        <AboutSection />

        <div className="custom-shape-divider-bottom-1773545749">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full max-w-2xl px-4 md:px-8 pb-10 pt-12 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl text-foreground mb-8 md:mb-12 text-center">
          {t('contact.title')}
        </h2>
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
