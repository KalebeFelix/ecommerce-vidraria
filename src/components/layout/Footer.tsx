import { Container } from "@/components/ui/Container";
import { BrandWatermark } from "@/components/ui/BrandWatermark";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Phone } from "lucide-react";
import { navLinks, siteConfig, yearsOfExperience } from "@/lib/data/site-config";
import { productCategories } from "@/lib/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <BrandWatermark tone="light" className="-bottom-40 -right-40" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <p className="font-display text-xl uppercase tracking-tight">{siteConfig.name}</p>
            <p className="mt-1 font-serif text-sm italic text-white/50">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Desde {siteConfig.foundingYear} transformando espaços em {siteConfig.city}/{siteConfig.state}.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Navegação</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-red-vivid">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Produtos</p>
            <ul className="space-y-3">
              {productCategories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`/#produtos`}
                    className="text-sm text-white/70 transition-colors hover:text-red-vivid"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contato</p>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm text-white/70 hover:text-red-vivid">
                  <Phone className="h-4 w-4" /> {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-red-vivid"
                >
                  <WhatsAppIcon className="h-4 w-4" /> {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-red-vivid"
                >
                  <InstagramIcon className="h-4 w-4" /> {siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Ponto do Vidro. Todos os direitos reservados.</p>
          <p>{yearsOfExperience()}+ anos de experiência em vidraçaria</p>
        </div>
      </Container>
    </footer>
  );
}
