"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandWatermark } from "@/components/ui/BrandWatermark";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/data/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

import heroMain from "@/assets/images/hero/vista-mar-hero.jpg";
import heroFloat1 from "@/assets/images/hero/box-marmore-dourado-float.jpg";
import heroFloat2 from "@/assets/images/hero/escada-guarda-corpo-float.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  const lines = ["Excelência em vidro.", "Transformando espaços"];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pb-0"
    >
      <BrandWatermark className="-bottom-32 -left-40" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative z-10 lg:col-span-5"
          >
            <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-red-vivid">
              Desde {siteConfig.foundingYear} em {siteConfig.city}
            </span>

            <h1 className="font-display text-5xl uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl xl:text-7xl">
              {lines.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.7, ease: EASE }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + lines.length * 0.08, duration: 0.7, ease: EASE }}
                className="block font-serif italic text-red-vivid"
              >
                desde {siteConfig.foundingYear}.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
              className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
            >
              Cortinas de vidro, boxes, guarda-corpos, fachadas e estruturas sob medida —
              projetos reais de {siteConfig.city}, com o acabamento de uma vidraçaria que
              atua no mercado há {new Date().getFullYear() - siteConfig.foundingYear}+ anos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href={buildWhatsAppLink()} target="_blank" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Solicitar orçamento
              </Button>
              <Button href="/#produtos" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
                Conheça nossas soluções
              </Button>
            </motion.div>
          </motion.div>

          {/* Colagem de imagens */}
          <div className="relative lg:col-span-7">
            <motion.div
              style={{ y: parallaxY }}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md -rotate-2 overflow-hidden rounded-[2rem] shadow-2xl sm:max-w-lg lg:aspect-[3/4] lg:max-w-none lg:-mr-10 xl:-mr-16 lg:rounded-[2.5rem]"
            >
              <Image
                src={heroMain}
                alt="Varanda com cortina de vidro e vista para o mar em Fortaleza"
                fill
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Card flutuante 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: reduceMotion ? 0 : [0, -8, 0],
              }}
              transition={{
                opacity: { delay: 0.5, duration: 0.6 },
                scale: { delay: 0.5, duration: 0.6 },
                y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -left-4 top-6 hidden aspect-[4/5] w-36 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block xl:w-44"
            >
              <Image
                src={heroFloat1}
                alt="Banheiro com box de vidro e mármore escuro"
                fill
                sizes="180px"
                className="object-cover"
              />
            </motion.div>

            {/* Card flutuante 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: reduceMotion ? 0 : [0, -8, 0],
              }}
              transition={{
                opacity: { delay: 0.7, duration: 0.6 },
                scale: { delay: 0.7, duration: 0.6 },
                y: { delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-2 bottom-4 hidden aspect-[4/5] w-32 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block xl:w-40 lg:right-6"
            >
              <Image
                src={heroFloat2}
                alt="Escada com guarda-corpo de vidro e bronze"
                fill
                sizes="160px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-6 hidden origin-left -rotate-90 items-center gap-3 lg:flex lg:left-20"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-ink/30"
        />
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink/50">
          Role para descobrir
        </span>
      </motion.div>
    </section>
  );
}
