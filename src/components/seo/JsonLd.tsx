import { siteConfig } from "@/lib/data/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description:
      "Soluções em vidros, cortinas de vidro, boxes, guarda-corpos, portas e estruturas em Fortaleza. A Ponto do Vidro atua desde 1997.",
    telephone: siteConfig.phone.display,
    foundingDate: String(siteConfig.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua J da Penha, 404",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: "60110-120",
      addressCountry: "BR",
    },
    sameAs: [siteConfig.instagram.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
