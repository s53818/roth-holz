import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { handleContactRequest } from '../lib/contact';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().trim().min(2, 'Bitte geben Sie Ihren Namen an.').max(100),
      email: z.email('Bitte geben Sie eine gültige E-Mail-Adresse an.').max(200),
      phone: z
        .string()
        .trim()
        .max(40)
        .regex(/^[0-9+()\/\-\s]*$/, 'Bitte geben Sie eine gültige Telefonnummer an.')
        .optional(),
      message: z
        .string()
        .trim()
        .min(10, 'Bitte schreiben Sie mindestens 10 Zeichen.')
        .max(5000, 'Die Nachricht ist zu lang (max. 5000 Zeichen).'),
      privacy: z.literal('on', {
        error: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
      }),
      // Honeypot: für Menschen unsichtbar, Bots füllen es aus
      website: z.string().max(500).optional(),
    }),
    handler: async (input) => {
      if (input.website) {
        // Bot: stillschweigend Erfolg vortäuschen, nichts verarbeiten
        return { ok: true };
      }
      const result = await handleContactRequest({
        name: input.name,
        email: input.email,
        phone: input.phone || undefined,
        message: input.message,
      });
      if (!result.ok) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
        });
      }
      return { ok: true };
    },
  }),
};
