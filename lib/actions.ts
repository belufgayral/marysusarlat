'use server'

import { Resend } from 'resend';

// Correo destino — modificar aquí si cambia en el futuro
const TEST_EMAIL = 'mrmanuelalvarez@gmail.com';
const TEST_EMAIL2 = 'belenfernandezgayral@gmail.com';
const TEST_EMAIL3 = 'aletandil32@gmail.com'
const RECIPIENT_EMAIL = 'sarlatmariasusana@gmail.com';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name    = formData.get('name')    as string;
  const surname = formData.get('surname') as string;
  const email   = formData.get('email')   as string;
  const message = formData.get('message') as string;

  const { error } = await resend.emails.send({
    from:     'Web <contacto@mailer.marysusarlat.com>',
    to:       [RECIPIENT_EMAIL],
    replyTo:  email,
    subject:  `Nuevo mensaje de contacto — ${name} ${surname}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #6b5340; border-bottom: 1px solid #e0d5c8; padding-bottom: 12px;">
          Nuevo mensaje desde el sitio web
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #6b5340;">Nombre:</td>
            <td style="padding: 8px 0;">${name} ${surname}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b5340;">Correo:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6b5340;">${email}</a></td>
          </tr>
        </table>
        <div style="background: #f9f6f2; border-left: 3px solid #6b5340; padding: 16px 20px; border-radius: 0 4px 4px 0;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Podés responder directamente a este correo y tu respuesta llegará a ${email}.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error('No se pudo enviar el correo. Por favor intentá de nuevo.');
  }

  return { success: true };
}
