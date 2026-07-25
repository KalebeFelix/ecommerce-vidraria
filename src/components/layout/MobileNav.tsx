"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/data/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { NavLink } from "@/lib/types";

export function MobileNav({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  whatsappNumber: string;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-white/95 backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center justify-end px-6 pt-6">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="rounded-full p-2 text-ink"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl uppercase tracking-tight text-ink"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * links.length, duration: 0.4 }}
            className="flex flex-col items-center gap-4 px-6 pb-10"
          >
            <Button
              href={buildWhatsAppLink()}
              target="_blank"
              className="w-full"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Solicitar orçamento
            </Button>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink/60"
            >
              <InstagramIcon className="h-4 w-4" />
              {siteConfig.instagram.handle}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
