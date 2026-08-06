"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  aboutHeroImage,
  aboutStory,
  mission,
  vision,
  values,
  teamMembers,
} from "@/lib/data/team";
import { siteConfig } from "@/lib/data/site-config";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="quem-somos" className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Foto */}
          <div className="relative lg:w-1/2">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] bg-mist lg:block" />

            <motion.div
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl lg:aspect-[3/4]"
            >
              <Image
                src={aboutHeroImage}
                alt="As sócias da Ponto do Vidro"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Chips flutuantes — desktop (dentro dos limites da coluna, sem invadir o texto) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-between px-4 pb-4 lg:flex">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: reduceMotion ? 0 : [0, -6, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { delay: 0.3 + i * 0.2, duration: 0.6 },
                    scale: { delay: 0.3 + i * 0.2, duration: 0.6 },
                    y: { delay: 1 + i * 0.4, duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="w-28 overflow-hidden rounded-xl border-4 border-white shadow-xl xl:w-32"
                >
                  <div className="relative aspect-square">
                    <Image src={member.image} alt={member.name} fill sizes="140px" className="object-cover" />
                  </div>
                  <div className="glass absolute inset-x-0 bottom-0 px-2 py-1.5">
                    <p className="truncate text-[11px] font-semibold text-white">{member.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chips — mobile */}
            <div className="mt-4 flex gap-4 lg:hidden">
              {teamMembers.map((member) => (
                <div key={member.role} className="flex flex-1 items-center gap-3 rounded-xl bg-mist p-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                    <Image src={member.image} alt={member.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{member.name}</p>
                    <p className="text-xs text-ink/60">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Texto */}
          <RevealOnScroll delay={0.15} className="lg:w-1/2">
            <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-red-vivid">
              Quem Somos
            </span>
            <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Tradição e cuidado em cada projeto
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70">{aboutStory}</p>

            <div className="mt-8 space-y-6">
              {[vision, mission].map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.title} className="border-l-2 border-wine/50 pl-5">
                    <div className="mb-1 flex items-center gap-2 text-ink">
                      <Icon className="h-4 w-4 text-wine" />
                      <span className="font-display text-sm uppercase tracking-wide">{block.title}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-ink/70">{block.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.name}
                    title={value.description}
                    className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Icon className="h-4 w-4 text-red-vivid" />
                    <span className="text-xs font-medium text-ink/80">{value.name}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-sm text-ink/50">
              {siteConfig.name} — desde {siteConfig.foundingYear} em {siteConfig.city}/{siteConfig.state}.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
