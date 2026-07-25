import { siteConfig } from "@/lib/data/site-config";

export function buildWhatsAppLink(message?: string) {
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
