import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StatCounter } from "@/components/stats/StatCounter";
import { differentiators } from "@/lib/data/stats";
import { siteConfig, yearsOfExperience } from "@/lib/data/site-config";

export function StatsSection() {
  return (
    <section className="relative bg-mist py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <RevealOnScroll className="lg:col-span-5">
            <p className="font-display text-7xl leading-none text-ink sm:text-8xl lg:text-[10rem]">
              <StatCounter target={yearsOfExperience()} />
            </p>
            <p className="mt-4 max-w-xs text-lg text-ink/70">
              anos transformando espaços em {siteConfig.city}
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink/10">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={item.label} delay={i * 0.1} className="lg:px-6 lg:first:pl-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-vivid/30">
                    <Icon className="h-5 w-5 text-red-vivid" />
                  </div>
                  <p className="text-sm leading-snug text-ink/80">{item.label}</p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
