import type { NavLink } from "@/lib/types";

export const siteConfig = {
  name: "Ponto do Vidro",
  tagline: "Excelência em Vidros e Serviços",
  foundingYear: 1997,
  city: "Fortaleza",
  state: "CE",
  phone: {
    display: "(85) 3253-7073",
    href: "tel:+558532537073",
  },
  whatsapp: {
    number: "5585988936672",
    display: "+55 85 98893-6672",
    defaultMessage:
      "Olá! Vim pelo site da Ponto do Vidro e gostaria de solicitar um orçamento.",
  },
  instagram: {
    handle: "@pontodovidro",
    url: "https://www.instagram.com/pontodovidro/",
  },
  address: {
    line: "Rua J da Penha, 404 — Centro, Fortaleza/CE, 60110-120",
    mapsUrl: "https://maps.app.goo.gl/WnZM8efEctHHFv9K9",
    embedUrl:
      "https://www.google.com/maps?q=Rua+J+da+Penha,+404,+Centro,+Fortaleza,+CE,+60110-120&output=embed",
  },
} as const;

export function yearsOfExperience(referenceDate = new Date()) {
  return referenceDate.getFullYear() - siteConfig.foundingYear;
}

export const navLinks: NavLink[] = [
  { label: "Produtos", href: "/#produtos" },
  { label: "Projetos", href: "/#galeria" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Contato", href: "/#contato" },
];
