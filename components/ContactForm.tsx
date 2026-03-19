'use client'

import { useState } from 'react';
import { submitContactForm } from '@/lib/actions';
import { Button } from '@/ui/Button';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();
  const [pending, setPending]       = useState(false);
  const [showModal, setShowModal]   = useState(false);
  const [errorMsg, setErrorMsg]     = useState<string | null>(null);

  const fieldClassName =
    'bg-transparent border-b border-foreground/30 focus:rounded-lg p-2 focus:outline-none focus:bg-highlight transition-all duration-400 text-foreground';

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setErrorMsg(null);
    try {
      await submitContactForm(formData);
      setShowModal(true);
      // Clear form fields on success
      (document.getElementById('contact-form') as HTMLFormElement)?.reset();
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : t('contact.form.error'));
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form
        id="contact-form"
        action={handleSubmit}
        className="flex flex-col gap-6 w-5/6 md:w-full max-w-lg font-sans"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm uppercase tracking-wider text-foreground/60">{t('contact.form.name')}</label>
            <input
              required
              name="name"
              id="name"
              className={fieldClassName}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="surname" className="text-sm uppercase tracking-wider text-foreground/60">{t('contact.form.surname')}</label>
            <input
              required
              name="surname"
              id="surname"
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm uppercase tracking-wider text-foreground/60">{t('contact.form.email')}</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm uppercase tracking-wider text-foreground/60">{t('contact.form.message')}</label>
          <textarea
            required
            name="message"
            id="message"
            rows={4}
            className={`${fieldClassName} resize-none`}
          />
        </div>

        {errorMsg && (
          <p className="text-red-600 text-sm font-sans">{errorMsg}</p>
        )}

        <Button
          type="submit"
          disabled={pending}
          variant="primary"
          className="self-center mt-4"
        >
          {pending ? t('contact.form.sending') : t('contact.form.submit')}
        </Button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-background p-8 max-w-md w-full shadow-xl flex flex-col gap-6 items-center text-center">
            <h3 className="text-3xl">{t('contact.form.success_title')}</h3>
            <p className="text-stone-600">
              {t('contact.form.success_message')}
            </p>
            <Button onClick={() => setShowModal(false)} variant="primary">
              {t('contact.form.close')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
