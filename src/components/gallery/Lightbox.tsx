"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type { GalleryItem } from "@/lib/types";

const SWIPE_THRESHOLD = 60;

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const open = index !== null;
  const current = open ? items[index!] : null;

  useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(((index as number) + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate(((index as number) - 1 + items.length) % items.length);
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, index, items.length, onClose, onNavigate]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-5 top-5 z-10 rounded-full p-2 text-white/80 hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + items.length) % items.length);
            }}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/70 hover:text-white sm:left-6"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % items.length);
            }}
            aria-label="Próxima"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/70 hover:text-white sm:right-6"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <motion.div
            key={current.id}
            layoutId={`gallery-${current.id}`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) onNavigate((index! + 1) % items.length);
              else if (info.offset.x > SWIPE_THRESHOLD)
                onNavigate((index! - 1 + items.length) % items.length);
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative mx-4 max-h-[82vh] max-w-4xl cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing"
          >
            <Image
              src={current.image}
              alt={current.alt}
              sizes="90vw"
              className="max-h-[82vh] w-auto object-contain"
            />
          </motion.div>

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-sans text-xs uppercase tracking-[0.2em] text-white/60">
            {String(index! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
