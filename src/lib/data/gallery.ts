import type { GalleryItem, ProductCategorySlug } from "@/lib/types";

import cortinaVistaMar from "@/assets/images/products/cortina-de-vidro/vista-mar-01.jpg";
import cortinaVaranda from "@/assets/images/products/cortina-de-vidro/varanda-skyline-01.jpg";
import cortinaPoltrona from "@/assets/images/products/cortina-de-vidro/poltrona-rosa-01.jpg";
import cortinaEntardecer from "@/assets/images/products/cortina-de-vidro/entardecer-01.jpg";

import boxMarmore from "@/assets/images/products/boxes/marmore-dourado-01.jpg";
import boxCalacatta from "@/assets/images/products/boxes/calacatta-banheira-01.jpg";
import boxPretoBranco from "@/assets/images/products/boxes/preto-branco-moderno-01.jpg";
import boxTrilhoDourado from "@/assets/images/products/boxes/trilho-dourado-01.jpg";
import boxCobre from "@/assets/images/products/boxes/cobre-01.jpg";

import espelhoSalaJantar from "@/assets/images/products/espelhos/sala-jantar-01.jpg";
import espelhoLavabo from "@/assets/images/products/espelhos/lavabo-dourado-01.jpg";
import espelhoFragmentado from "@/assets/images/products/espelhos/fragmentado-arte-01.jpg";

import guardaCorpoEscadaVidro from "@/assets/images/products/guarda-corpo/escada-vidro-bronze-01.jpg";
import guardaCorpoEscadaPedra from "@/assets/images/products/guarda-corpo/escada-pedra-01.jpg";
import guardaCorpoFachada from "@/assets/images/products/guarda-corpo/fachada-terraco-01.jpg";

import portaSalaReuniao from "@/assets/images/products/portas-janelas/sala-reuniao-01.jpg";
import portaCanelado from "@/assets/images/products/portas-janelas/canelado-loft-01.jpg";
import portaEspelhada from "@/assets/images/products/portas-janelas/espelhada-vista-cidade-01.jpg";

import portaSalaJardim from "@/assets/images/products/fachadas/sala-jardim-01.jpg";
import fachadaJardimCeu from "@/assets/images/products/fachadas/jardim-ceu-azul-01.jpg";
import fachadaLojaFortLouro from "@/assets/images/products/fachadas/loja-fort-louro-01.jpg";
import fachadaLojaEssence from "@/assets/images/products/fachadas/loja-essence-01.jpg";
import fachadaFortLouro02 from "@/assets/images/gallery/fachada-fort-louro-02.jpg";
import fachadaCornerCidade from "@/assets/images/gallery/fachada-corner-cidade-01.jpg";

import temperadoBanheira from "@/assets/images/products/vidros-temperados/banheira-nicho-01.jpg";
import temperadoBanheiroCompleto from "@/assets/images/products/vidros-temperados/banheiro-completo-01.jpg";

import aluminioCozinha from "@/assets/images/products/estruturas-aluminio/cozinha-correr-01.jpg";
import aluminioArmario from "@/assets/images/products/estruturas-aluminio/armario-espelho-banheiro-01.jpg";
import aluminioAdega from "@/assets/images/products/estruturas-aluminio/adega-vidro-bronze-01.jpg";

import closetEspelhado from "@/assets/images/gallery/closet-espelhado-01.jpg";
import painelTvLacado from "@/assets/images/gallery/painel-tv-lacado-01.jpg";

import cristaleiraSalaJantar from "@/assets/images/products/cristaleiras/sala-jantar-luminaria-01.jpg";
import cristaleiraBranca from "@/assets/images/products/cristaleiras/branca-classica-01.jpg";
import cristaleiraMadeira from "@/assets/images/products/cristaleiras/madeira-espelho-01.jpg";
import cristaleiraDetalhePorta from "@/assets/images/gallery/cristaleira-detalhe-porta-01.jpg";
import cristaleiraDourada from "@/assets/images/gallery/cristaleira-dourada-minimal-01.jpg";
import cristaleiraColecionaveis from "@/assets/images/gallery/cristaleira-colecionaveis-01.jpg";

const categoryLabels: Record<ProductCategorySlug, string> = {
  "cortina-de-vidro": "Cortina de Vidro",
  boxes: "Box",
  espelhos: "Espelhos",
  "guarda-corpo": "Guarda-corpo",
  "portas-janelas": "Portas e Janelas",
  fachadas: "Fachadas em Vidro",
  "vidros-temperados": "Vidros Temperados",
  "estruturas-aluminio": "Estruturas em Alumínio e Vidro",
  cristaleiras: "Cristaleiras",
};

function item(
  id: string,
  image: GalleryItem["image"],
  alt: string,
  category: ProductCategorySlug
): GalleryItem {
  return { id, image, alt, category, categoryLabel: categoryLabels[category] };
}

export const galleryItems: GalleryItem[] = [
  item("cortina-vista-mar", cortinaVistaMar, "Varanda com cortina de vidro e vista para o mar", "cortina-de-vidro"),
  item("box-marmore", boxMarmore, "Banheiro com box de vidro e mármore escuro", "boxes"),
  item("espelho-sala-jantar", espelhoSalaJantar, "Parede espelhada em sala de jantar", "espelhos"),
  item("cristaleira-sala-jantar", cristaleiraSalaJantar, "Sala de jantar com cristaleira embutida e iluminação em led", "cristaleiras"),
  item("fachada-loja-fort-louro", fachadaLojaFortLouro, "Fachada de vidro em loja de shopping", "fachadas"),
  item("porta-sala-jardim", portaSalaJardim, "Sala integrada com portas de vidro e jardim", "portas-janelas"),
  item("guarda-corpo-escada-vidro", guardaCorpoEscadaVidro, "Escada com guarda-corpo de vidro e bronze", "guarda-corpo"),
  item("porta-sala-reuniao", portaSalaReuniao, "Sala de reunião com porta de vidro e alumínio preto", "portas-janelas"),
  item("box-calacatta", boxCalacatta, "Banheiro em mármore Calacatta com banheira e box de vidro", "boxes"),
  item("temperado-banheira", temperadoBanheira, "Banheira com box de vidro temperado e nicho", "vidros-temperados"),
  item("cortina-varanda", cortinaVaranda, "Varanda gourmet com cortina de vidro e vista da cidade", "cortina-de-vidro"),
  item("aluminio-adega", aluminioAdega, "Adega de vinhos em vidro e estrutura de bronze", "estruturas-aluminio"),
  item("espelho-lavabo", espelhoLavabo, "Lavabo com espelho iluminado e acabamento dourado", "espelhos"),
  item("porta-canelado", portaCanelado, "Portas de vidro canelado em ambiente estilo loft", "portas-janelas"),
  item("guarda-corpo-escada-pedra", guardaCorpoEscadaPedra, "Escada interna com guarda-corpo de vidro e pedra", "guarda-corpo"),
  item("fachada-jardim-ceu", fachadaJardimCeu, "Fachada de vidro com jardim e céu azul", "fachadas"),
  item("box-preto-branco", boxPretoBranco, "Banheiro preto e branco moderno com box de vidro", "boxes"),
  item("aluminio-cozinha", aluminioCozinha, "Cozinha com porta de vidro de correr em alumínio", "estruturas-aluminio"),
  item("espelho-fragmentado", espelhoFragmentado, "Espelho decorativo fragmentado em corredor", "espelhos"),
  item("temperado-banheiro-completo", temperadoBanheiroCompleto, "Banheiro completo com box de vidro temperado", "vidros-temperados"),
  item("espelho-porta-vista-cidade", portaEspelhada, "Porta de vidro espelhado com vista da cidade", "espelhos"),
  item("cortina-poltrona", cortinaPoltrona, "Cortina de vidro em varanda decorada", "cortina-de-vidro"),
  item("guarda-corpo-fachada", guardaCorpoFachada, "Terraço com guarda-corpo de vidro", "guarda-corpo"),
  item("box-trilho-dourado", boxTrilhoDourado, "Box de vidro com trilho dourado", "boxes"),
  item("aluminio-armario", aluminioArmario, "Armário espelhado com estrutura de alumínio", "estruturas-aluminio"),
  item("closet-espelhado", closetEspelhado, "Porta de espelho de closet refletindo quarto decorado", "estruturas-aluminio"),
  item("painel-tv-lacado", painelTvLacado, "Painel de vidro lacado para TV", "vidros-temperados"),
  item("cortina-entardecer", cortinaEntardecer, "Cortina de vidro ao entardecer", "cortina-de-vidro"),
  item("box-cobre", boxCobre, "Box de vidro com acabamento em cobre", "boxes"),
  item("cristaleira-branca", cristaleiraBranca, "Cristaleira branca clássica com louças e cristais", "cristaleiras"),
  item("cristaleira-madeira", cristaleiraMadeira, "Cristaleira de madeira com espelho e taças coloridas", "cristaleiras"),
  item("cristaleira-detalhe-porta", cristaleiraDetalhePorta, "Detalhe da porta de vidro de cristaleira", "cristaleiras"),
  item("cristaleira-dourada", cristaleiraDourada, "Cristaleiras suspensas com estrutura dourada", "cristaleiras"),
  item("cristaleira-colecionaveis", cristaleiraColecionaveis, "Cristaleira com coleção de miniaturas", "cristaleiras"),
  item("fachada-loja-essence", fachadaLojaEssence, "Fachada de vidro em loja de shopping", "fachadas"),
  item("fachada-fort-louro-detalhe", fachadaFortLouro02, "Detalhe da fachada de vidro em loja de shopping", "fachadas"),
  item("fachada-corner-cidade", fachadaCornerCidade, "Fechamento de vidro em esquina com vista da cidade", "fachadas"),
];
