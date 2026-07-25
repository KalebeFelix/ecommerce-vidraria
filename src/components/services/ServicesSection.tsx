import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { services } from "@/lib/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,62,62,0.12),transparent_60%)]" />

      <Container className="relative">
        <RevealOnScroll>
          <SectionHeading
            kicker="Serviços"
            title="Manutenção e acabamento"
            description="Além de instalar, cuidamos do que já está no seu projeto."
            tone="light"
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={service.slug} delay={i * 0.1} className="py-8 sm:px-6 sm:py-0 lg:first:pl-0">
                <div className="group mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-red-vivid/40 transition-colors duration-300 hover:bg-red-vivid">
                  <Icon className="h-6 w-6 text-red-vivid transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-display text-lg uppercase tracking-tight">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{service.description}</p>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={0.3} className="mt-14">
          <a
            href={buildWhatsAppLink("Olá! Preciso de manutenção e gostaria de mais informações.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-red-vivid"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="relative">
              Precisa de manutenção? Fale conosco
              <span className="absolute -bottom-1 left-0 h-px w-full bg-red-vivid transition-transform duration-300 group-hover:scale-x-0" />
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
