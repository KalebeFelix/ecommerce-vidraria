"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BrandWatermark } from "@/components/ui/BrandWatermark";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-28"
      style={{ background: "linear-gradient(135deg, var(--color-red-vivid), var(--color-wine))" }}
    >
      <BrandWatermark tone="light" className="-right-32 -top-32" />

      <Container className="relative">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
            Pronto para transformar seu espaço?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/85 sm:text-lg">
            Fale agora com a nossa equipe e receba um orçamento sob medida para o seu projeto.
          </p>

          <div className="relative mt-9 inline-block">
            <motion.span
              className="absolute inset-0 rounded-full bg-white/40"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Button
              href={buildWhatsAppLink()}
              target="_blank"
              variant="white"
              className="relative overflow-hidden"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Solicitar orçamento agora
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
