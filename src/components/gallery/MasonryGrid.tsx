"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { GalleryItem } from "@/lib/types";

export function MasonryGrid({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
      {items.map((item, i) => (
        <RevealOnScroll
          key={item.id}
          delay={(i % 4) * 0.05}
          className="mb-4 break-inside-avoid"
        >
          <motion.button
            type="button"
            onClick={() => onOpen(i)}
            layoutId={`gallery-${item.id}`}
            className="group relative block w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={item.image}
              alt={item.alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 p-4 text-white">
                <Maximize2 className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wide">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          </motion.button>
        </RevealOnScroll>
      ))}
    </div>
  );
}
