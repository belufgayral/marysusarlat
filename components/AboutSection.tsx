'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full max-w-6xl px-4 md:px-8 py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <div className={`w-2/3 md:w-5/12 aspect-square relative shadow-xl overflow-hidden`}>
        <Image
          src="/imgs/mariaSuSarlatPerfilFotoMejorada.png"
          alt="María Susana Sarlat"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 41vw"
          priority
        />
      </div>

      <div className="w-full md:w-7/12">
        <h2 className="text-5xl md:text-6xl text-center md:text-start text-foreground mb-6">
          {t('about.title')}
        </h2>
        <p className="md:text-lg text-justify leading-relaxed text-foreground/80 mb-4">
          {t('about.desc_1')}
        </p>
        <p className="md:text-lg text-justify leading-relaxed text-foreground/80">
          {t('about.desc_2')}
        </p>
      </div>
    </section>
  );
}
