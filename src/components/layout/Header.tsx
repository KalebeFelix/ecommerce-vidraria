"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { MobileNav } from "@/components/layout/MobileNav";
import { navLinks, siteConfig } from "@/lib/data/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

import logo from "@/assets/images/misc/logo.jpg";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"]);
  const headerBorder = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0)", "rgba(0,0,0,0.06)"]);
  const headerBlurPx = useTransform(scrollY, [0, 120], [0, 16]);
  const headerBlur = useTransform(headerBlurPx, (v) => `blur(${v}px)`);
  const headerPaddingY = useTransform(scrollY, [0, 120], [22, 12]);
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.88]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
          backdropFilter: headerBlur,
          WebkitBackdropFilter: headerBlur,
        }}
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
      >
        <Container>
          <motion.div
            style={{ paddingTop: headerPaddingY, paddingBottom: headerPaddingY }}
            className="flex items-center justify-between"
          >
            <motion.a
              href="/"
              style={{ scale: logoScale }}
              className="flex items-center gap-3 origin-left"
            >
              <span className="overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={logo}
                  alt="Ponto do Vidro"
                  className="h-16 w-auto sm:h-20"
                  priority
                />
              </span>
            </motion.a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative font-sans text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-vivid transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                href={buildWhatsAppLink()}
                target="_blank"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                Orçamento
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-full p-2 text-ink lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </motion.div>
        </Container>
      </motion.header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        whatsappNumber={siteConfig.whatsapp.display}
      />
    </>
  );
}
