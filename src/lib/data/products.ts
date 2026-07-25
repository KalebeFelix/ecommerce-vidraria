import {
  Blinds,
  ShowerHead,
  Sparkles,
  Fence,
  DoorOpen,
  Building2,
  ShieldCheck,
  Frame,
} from "lucide-react";

import type { ProductCategory } from "@/lib/types";

import cortinaHero from "@/assets/images/products/cortina-de-vidro/vista-mar-01.jpg";
import cortinaSec1 from "@/assets/images/products/cortina-de-vidro/varanda-skyline-01.jpg";
import cortinaSec2 from "@/assets/images/products/cortina-de-vidro/poltrona-rosa-01.jpg";

import boxHero from "@/assets/images/products/boxes/marmore-dourado-01.jpg";
import boxSec1 from "@/assets/images/products/boxes/calacatta-banheira-01.jpg";
import boxSec2 from "@/assets/images/products/boxes/preto-branco-moderno-01.jpg";

import espelhoHero from "@/assets/images/products/espelhos/sala-jantar-01.jpg";
import espelhoSec1 from "@/assets/images/products/espelhos/lavabo-dourado-01.jpg";
import espelhoSec2 from "@/assets/images/products/espelhos/fragmentado-arte-01.jpg";

import guardaCorpoHero from "@/assets/images/products/guarda-corpo/escada-vidro-bronze-01.jpg";
import guardaCorpoSec1 from "@/assets/images/products/guarda-corpo/escada-pedra-01.jpg";
import guardaCorpoSec2 from "@/assets/images/products/guarda-corpo/fachada-terraco-01.jpg";

import portaHero from "@/assets/images/products/portas-janelas/sala-reuniao-01.jpg";
import portaSec1 from "@/assets/images/products/portas-janelas/canelado-loft-01.jpg";
import portaSec2 from "@/assets/images/products/portas-janelas/espelhada-vista-cidade-01.jpg";

import fachadaHero from "@/assets/images/products/fachadas/sala-jardim-01.jpg";
import fachadaSec1 from "@/assets/images/products/fachadas/jardim-ceu-azul-01.jpg";

import temperadoHero from "@/assets/images/products/vidros-temperados/banheira-nicho-01.jpg";
import temperadoSec1 from "@/assets/images/products/vidros-temperados/banheiro-completo-01.jpg";

import aluminioHero from "@/assets/images/products/estruturas-aluminio/cozinha-correr-01.jpg";
import aluminioSec1 from "@/assets/images/products/estruturas-aluminio/armario-espelho-banheiro-01.jpg";
import aluminioSec2 from "@/assets/images/products/estruturas-aluminio/adega-vidro-bronze-01.jpg";

export const productCategories: ProductCategory[] = [
  {
    slug: "cortina-de-vidro",
    index: "01",
    name: "Cortina de Vidro",
    tagline: "Vista livre, conforto em qualquer clima",
    description:
      "Fechamentos de varanda e sacada em vidro temperado de correr, sem esquadrias aparentes — ganha área útil e mantém a vista aberta para a cidade ou o mar.",
    badge: "Vidro temperado 8-10mm",
    icon: Blinds,
    hero: { src: cortinaHero, alt: "Varanda com cortina de vidro e vista para o mar" },
    secondary: [
      { src: cortinaSec1, alt: "Varanda gourmet com cortina de vidro e vista da cidade" },
      { src: cortinaSec2, alt: "Cortina de vidro em varanda decorada com poltrona" },
    ],
  },
  {
    slug: "boxes",
    index: "02",
    name: "Box",
    tagline: "Banheiros com acabamento de altíssimo padrão",
    description:
      "Boxes sob medida em vidro temperado incolor ou fumê, com ferragens em diversos acabamentos — do dourado ao preto fosco — projetados para cada banheiro.",
    badge: "Sob medida",
    icon: ShowerHead,
    hero: { src: boxHero, alt: "Banheiro com box de vidro, mármore escuro e ferragens douradas" },
    secondary: [
      { src: boxSec1, alt: "Banheiro em mármore Calacatta com box de vidro e banheira" },
      { src: boxSec2, alt: "Banheiro preto e branco moderno com box de vidro" },
    ],
  },
  {
    slug: "espelhos",
    index: "03",
    name: "Espelhos",
    tagline: "Amplitude e luz para cada ambiente",
    description:
      "Espelhos sob medida, lapidados e bizotados, para salas, lavabos e closets — desde painéis inteiros de parede até formatos decorativos e recortes especiais.",
    badge: "Corte e bizote sob medida",
    icon: Sparkles,
    hero: { src: espelhoHero, alt: "Parede espelhada em sala de jantar" },
    secondary: [
      { src: espelhoSec1, alt: "Lavabo com espelho iluminado e acabamento dourado" },
      { src: espelhoSec2, alt: "Espelho decorativo fragmentado em corredor" },
    ],
  },
  {
    slug: "guarda-corpo",
    index: "04",
    name: "Guarda-corpo",
    tagline: "Segurança que não esconde a vista",
    description:
      "Guarda-corpos em vidro temperado para escadas, sacadas e piscinas, com fixação em perfil de alumínio ou pontos de fixação discretos em inox.",
    badge: "Vidro temperado 10mm",
    icon: Fence,
    hero: { src: guardaCorpoHero, alt: "Escada com guarda-corpo de vidro e detalhes em bronze" },
    secondary: [
      { src: guardaCorpoSec1, alt: "Escada interna com guarda-corpo de vidro e parede de pedra" },
      { src: guardaCorpoSec2, alt: "Terraço com guarda-corpo de vidro" },
    ],
  },
  {
    slug: "portas-janelas",
    index: "05",
    name: "Portas e Janelas",
    tagline: "Sistemas de correr, giro e mão amiga",
    description:
      "Portas e janelas em vidro temperado com sistemas M2000, Slide Door e Mão Amiga, em perfis de alumínio nas cores e acabamentos que o projeto pedir.",
    badge: "Sistemas M2000 · Slide Door",
    icon: DoorOpen,
    hero: { src: portaHero, alt: "Sala de reunião com porta de vidro e estrutura de alumínio preto" },
    secondary: [
      { src: portaSec1, alt: "Portas de vidro canelado em ambiente estilo loft" },
      { src: portaSec2, alt: "Porta de vidro espelhado com vista da cidade" },
    ],
  },
  {
    slug: "fachadas",
    index: "06",
    name: "Fachadas em Vidro",
    tagline: "A arquitetura em primeiro plano",
    description:
      "Fechamentos e fachadas inteiras em vidro temperado, integrando ambientes internos e externos com o máximo de luz natural e transparência.",
    badge: "Vidro temperado laminado",
    icon: Building2,
    hero: { src: fachadaHero, alt: "Fachada de vidro integrando sala interna e jardim" },
    secondary: [{ src: fachadaSec1, alt: "Fachada de vidro com jardim e céu azul" }],
  },
  {
    slug: "vidros-temperados",
    index: "07",
    name: "Vidros Temperados",
    tagline: "Resistência certificada para todo o projeto",
    description:
      "Vidros temperados sob medida para boxes, guarda-corpos, portas e bancadas — maior resistência a impacto e variação térmica, com fragmentação segura.",
    badge: "NBR 14698",
    icon: ShieldCheck,
    hero: { src: temperadoHero, alt: "Banheira com box de vidro temperado e nicho" },
    secondary: [{ src: temperadoSec1, alt: "Banheiro completo com box de vidro temperado" }],
  },
  {
    slug: "estruturas-aluminio",
    index: "08",
    name: "Estruturas em Alumínio e Vidro",
    tagline: "Móveis e divisórias sob medida",
    description:
      "Portas de armário, closets, adegas e divisórias de ambiente combinando estrutura de alumínio e vidro, com acabamento alinhado ao projeto de interiores.",
    badge: "Estrutura sob medida",
    icon: Frame,
    hero: { src: aluminioHero, alt: "Cozinha com porta de vidro de correr em estrutura de alumínio" },
    secondary: [
      { src: aluminioSec1, alt: "Armário espelhado com estrutura de alumínio em banheiro" },
      { src: aluminioSec2, alt: "Adega de vinhos em vidro e estrutura de bronze" },
    ],
  },
];
