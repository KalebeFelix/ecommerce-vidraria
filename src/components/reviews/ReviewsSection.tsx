import { Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { googleRating, testimonials } from "@/lib/data/reviews";

function Stars({ count, className }: { count: number; className?: string }) {
  return (
    <div className={className ?? "flex gap-0.5"}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-red-vivid text-red-vivid" />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="bg-mist py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-16">
          <RevealOnScroll className="lg:col-span-5">
            <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-red-vivid">
              Avaliações
            </span>
            <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
              O que dizem sobre nós
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <Stars count={5} />
              <span className="font-display text-2xl text-ink">{googleRating.score}</span>
            </div>
            <p className="mt-2 text-sm text-ink/60">
              {googleRating.count} avaliações no Google
            </p>

            <div className="mt-7">
              <Button href={googleRating.url} target="_blank" variant="ghost">
                Ver avaliações no Google
              </Button>
            </div>
          </RevealOnScroll>

          <div className="space-y-8 lg:col-span-7">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.text} delay={i * 0.1}>
                <div className="border-l-2 border-wine/50 pl-5">
                  <Stars count={t.rating} className="mb-2 flex gap-0.5" />
                  <p className="font-serif text-lg italic leading-relaxed text-ink/80">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
