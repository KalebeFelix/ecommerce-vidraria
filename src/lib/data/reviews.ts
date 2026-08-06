import { siteConfig } from "@/lib/data/site-config";

export const googleRating = {
  score: 4.6,
  count: 158,
  url: siteConfig.address.mapsUrl,
};

export interface Testimonial {
  text: string;
  rating: number;
}

// Avaliações reais extraídas do perfil do Google Meu Negócio da empresa.
export const testimonials: Testimonial[] = [
  {
    text: "Já fiz alguns serviços de vidros, excelentes preços e pontualidade no prazo.",
    rating: 5,
  },
  {
    text: "Com uma equipe diferenciada e entrega perfeita em todas as vezes que precisei.",
    rating: 5,
  },
  {
    text: "Presteza no atendimento, montagem rápida, funcionários gentis e prestativos.",
    rating: 5,
  },
];
