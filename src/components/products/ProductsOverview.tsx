"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { productCategories } from "@/lib/data/products";

export function ProductsOverview() {
  const [active, setActive] = useState(0);
  const activeCategory = productCategories[active];

  return (
    <section id="produtos" className="bg-cream py-24 lg:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            kicker="Produtos"
            title="O que fazemos"
            description="Soluções em vidro sob medida, do projeto residencial ao comercial — explore as categorias abaixo."
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Índice editorial */}
          <div className="hidden lg:col-span-5 lg:block">
            {productCategories.map((cat, i) => (
              <RevealOnScroll key={cat.slug} delay={i * 0.05}>
                <button
                  type="button"
                  aria-pressed={active === i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative flex w-full items-center justify-between overflow-hidden border-b border-ink/10 py-6 text-left"
                >
                  <span
                    className={`absolute inset-y-0 left-0 -z-10 bg-red-vivid/5 transition-all duration-300 ease-out ${
                      active === i ? "w-full" : "w-0"
                    }`}
                  />
                  <span className="flex items-baseline gap-5">
                    <span className="font-serif text-sm italic text-ink/40">{cat.index}</span>
                    <span
                      className={`font-display text-2xl uppercase tracking-tight transition-colors xl:text-3xl ${
                        active === i ? "text-red-vivid" : "text-ink"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-colors ${
                      active === i ? "text-red-vivid" : "text-ink/30"
                    }`}
                  />
                </button>
              </RevealOnScroll>
            ))}
          </div>

          {/* Painel sticky de imagem */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-32 aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl">
              {productCategories.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  className="absolute inset-0"
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={cat.hero.src}
                    alt={cat.hero.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
              <div className="absolute bottom-6 left-6 right-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.slug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="glass inline-flex flex-col rounded-2xl px-5 py-3 text-white"
                  >
                    <span className="font-display text-lg uppercase tracking-tight">
                      {activeCategory.name}
                    </span>
                    <span className="font-serif text-xs italic text-white/80">
                      {activeCategory.tagline}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile: carrossel de chips */}
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 lg:hidden">
            {productCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#produto-${cat.slug}`}
                className="relative flex h-40 w-40 shrink-0 snap-start items-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={cat.hero.src}
                  alt={cat.hero.alt}
                  fill
                  sizes="160px"
                  className="object-cover brightness-75"
                />
                <span className="relative z-10 p-4 font-display text-sm uppercase leading-tight text-white">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
