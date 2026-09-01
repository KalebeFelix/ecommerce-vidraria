"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/lib/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { ProductCategory, ProductVideo } from "@/lib/types";

const EASE = [0.22, 1, 0.36, 1] as const;

function HeroVideo({
  video,
  reduceMotion,
  reversed,
}: {
  video: ProductVideo;
  reduceMotion: boolean | null;
  reversed: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(!reduceMotion);
  const [isMuted, setIsMuted] = useState(true);

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        autoPlay={!reduceMotion}
        muted={isMuted}
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      <div className={`absolute top-5 z-20 flex gap-2 ${reversed ? "right-5" : "left-5"}`}>
        <button
          type="button"
          onClick={() => setIsMuted((m) => !m)}
          aria-label={isMuted ? "Ativar som do vídeo" : "Silenciar vídeo"}
          className="glass flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/30"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          className="glass flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/30"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
    </>
  );
}

function ProductBlock({ category, index }: { category: ProductCategory; index: number }) {
  const reduceMotion = useReducedMotion();
  const reversed = index % 2 === 1;
  const Icon = category.icon;

  return (
    <div
      id={`produto-${category.slug}`}
      className={`scroll-mt-24 py-20 lg:py-28 ${index % 2 === 1 ? "bg-mist" : "bg-cream"}`}
    >
      <Container>
        <div
          className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Imagem */}
          <div className="relative lg:w-1/2">
            <motion.div
              initial={{ clipPath: reduceMotion ? "inset(0 0 0% 0)" : "inset(0 0 45% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl lg:aspect-[3/4]"
            >
              {category.heroVideo ? (
                <HeroVideo video={category.heroVideo} reduceMotion={reduceMotion} reversed={reversed} />
              ) : (
                <Image
                  src={category.hero.src}
                  alt={category.hero.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              )}
              <div className="glass absolute bottom-5 left-5 flex items-center gap-2 rounded-xl px-4 py-2 text-white">
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{category.badge}</span>
              </div>
            </motion.div>

            {/* Sobrepostas — desktop */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
              {category.secondary[0] ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
                  className={`absolute -bottom-8 w-40 rotate-[-3deg] overflow-hidden rounded-xl border-4 border-white shadow-xl xl:w-48 ${
                    reversed ? "-right-6" : "-left-6"
                  }`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={category.secondary[0].src}
                      alt={category.secondary[0].alt}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ) : null}

              {category.secondary[1] ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
                  className={`absolute -top-8 w-36 rotate-[3deg] overflow-hidden rounded-xl border-4 border-white shadow-xl xl:w-44 ${
                    reversed ? "-left-4" : "-right-4"
                  }`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={category.secondary[1].src}
                      alt={category.secondary[1].alt}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ) : null}
            </div>

            {/* Sobrepostas — mobile (grid estático, sem position:absolute) */}
            {category.secondary.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 gap-4 lg:hidden">
                {category.secondary.map((img) => (
                  <div key={img.alt} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Texto */}
          <RevealOnScroll className="relative lg:w-1/2">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 left-0 select-none font-display text-[7rem] leading-none sm:text-[9rem]"
              style={{ WebkitTextStroke: "1px rgba(24,24,24,0.12)", color: "transparent" }}
            >
              {category.index}
            </span>

            <div className="relative">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-red-vivid">
                {category.tagline}
              </span>
              <h3 className="font-display text-3xl uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {category.name}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
                {category.description}
              </p>
              <div className="mt-7">
                <Button
                  href={buildWhatsAppLink(
                    `Olá! Vim pelo site e gostaria de um orçamento de ${category.name}.`
                  )}
                  target="_blank"
                  variant="ghost"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Orçar {category.name}
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </div>
  );
}

export function ProductsDetailed() {
  return (
    <div className="relative">
      {productCategories.map((category, i) => (
        <ProductBlock key={category.slug} category={category} index={i} />
      ))}
    </div>
  );
}
