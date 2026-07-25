"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-vivid text-white shadow-xl shadow-red-vivid/30"
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-red-vivid"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: 1.4, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
