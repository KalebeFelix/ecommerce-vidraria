"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/data/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const EASE = [0.22, 1, 0.36, 1] as const;

function ContactRow({
  icon,
  label,
  href,
  target,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 py-2"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors duration-300 group-hover:bg-red-vivid group-hover:text-white">
        {icon}
      </span>
      <span className="text-sm text-ink/80 transition-transform duration-300 group-hover:translate-x-1">
        {label}
      </span>
    </a>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="bg-cream py-24 lg:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading kicker="Contato" title="Vamos conversar" className="mb-14" />
        </RevealOnScroll>

        <div className="relative">
          <RevealOnScroll>
            <MapEmbed className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl lg:aspect-[16/8]" />
          </RevealOnScroll>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            className="relative mt-6 w-full rounded-2xl bg-white p-6 shadow-xl lg:absolute lg:bottom-8 lg:left-8 lg:mt-0 lg:w-80 lg:border lg:border-white/40 lg:bg-white/25 lg:shadow-2xl lg:backdrop-blur-xl"
          >
            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label={siteConfig.phone.display}
              href={siteConfig.phone.href}
            />
            <ContactRow
              icon={<WhatsAppIcon className="h-4 w-4" />}
              label={siteConfig.whatsapp.display}
              href={buildWhatsAppLink()}
              target="_blank"
            />
            <ContactRow
              icon={<InstagramIcon className="h-4 w-4" />}
              label={siteConfig.instagram.handle}
              href={siteConfig.instagram.url}
              target="_blank"
            />
            <ContactRow
              icon={<MapPin className="h-4 w-4" />}
              label={siteConfig.address.line}
              href={siteConfig.address.mapsUrl}
              target="_blank"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
