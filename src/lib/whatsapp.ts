// TODO: replace with the academy's real WhatsApp number before launch
export const WHATSAPP_NUMBER = '201018121154';

export const buildWhatsAppUrl = (message: string, number: string = WHATSAPP_NUMBER): string =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const fillTemplate = (template: string, values: Record<string, string>): string =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
