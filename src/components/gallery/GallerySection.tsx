"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { Lightbox } from "@/components/gallery/Lightbox";
import { galleryItems } from "@/lib/data/gallery";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-cream py-24 lg:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            kicker="Projetos"
            title="Galeria"
            description="Uma seleção de projetos reais executados pela Ponto do Vidro em Fortaleza."
            className="mb-14"
          />
        </RevealOnScroll>

        <MasonryGrid items={galleryItems} onOpen={setActiveIndex} />
      </Container>

      <Lightbox
        items={galleryItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
