"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/data/site-config";

export function WhatsAppFloatingButton() {
  return (
    <div
      className="fixed z-50 flex flex-col items-center gap-3"
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
    >
      <motion.a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir no Instagram"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.15, type: "spring", stiffness: 260, damping: 20 }}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg shadow-black/10 ring-1 ring-black/5"
      >
        <InstagramIcon className="h-5 w-5" />
      </motion.a>

      <motion.a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-vivid text-white shadow-xl shadow-red-vivid/30"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-red-vivid"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
        />
        <WhatsAppIcon className="relative h-7 w-7" />
      </motion.a>
    </div>
  );
}
