export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
}

/**
 * Verarbeitet eine validierte Kontaktanfrage.
 * Gibt vorerst nur eine Logmeldung aus und meldet Erfolg.
 */
export async function handleContactRequest(request: ContactRequest): Promise<ContactResult> {
  // Keine personenbezogenen Daten ins Log schreiben
  console.log(`[contact] Neue Anfrage erhalten (Nachricht: ${request.message.length} Zeichen)`);
  // TODO: Mailversand (Nodemailer/SMTP) hier anbinden
  return { ok: true };
}
