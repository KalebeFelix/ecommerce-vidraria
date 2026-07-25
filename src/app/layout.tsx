import type { Metadata } from "next";
import { Oswald, Inter, Fraunces } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { JsonLd } from "@/components/seo/JsonLd";

import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pontodovidro.com.br"),
  title: "Ponto do Vidro | Excelência em Vidros e Serviços",
  description:
    "Soluções em vidros, cortinas de vidro, boxes, guarda-corpos, portas e estruturas em Fortaleza. A Ponto do Vidro atua desde 1997.",
  openGraph: {
    title: "Ponto do Vidro | Excelência em Vidros e Serviços",
    description:
      "Soluções em vidros, cortinas de vidro, boxes, guarda-corpos, portas e estruturas em Fortaleza. A Ponto do Vidro atua desde 1997.",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${inter.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
