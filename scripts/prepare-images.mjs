// One-off/rerunnable script: copies curated real photos from /data into
// src/assets/images with descriptive slugs, normalizing EXIF orientation and
// recompressing (mozjpeg, capped width) so every asset is a consistent,
// lightweight input before Next.js optimizes it further at request time.
//
// Run with: node scripts/prepare-images.mjs

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const DEST_DIR = path.join(ROOT, "src", "assets", "images");

const MAX_WIDTH = 2000;
const JPEG_QUALITY = 82;

/** @type {{src: string, dest: string, cropBottomPercent?: number}[]} */
const MANIFEST = [
  // ---- Hero ----
  { src: "cortinas-de-vidro/WhatsApp Image 2026-07-20 at 09.37.04 (4).jpeg", dest: "hero/vista-mar-hero.jpg" },
  { src: "boxes/WhatsApp Image 2026-07-20 at 09.37.05 (4).jpeg", dest: "hero/box-marmore-dourado-float.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.08 (1).jpeg", dest: "hero/escada-guarda-corpo-float.jpg" },

  // ---- Produtos: Cortina de Vidro ----
  { src: "cortinas-de-vidro/WhatsApp Image 2026-07-20 at 09.37.04 (4).jpeg", dest: "products/cortina-de-vidro/vista-mar-01.jpg" },
  { src: "cortinas-de-vidro/WhatsApp Image 2026-07-20 at 09.37.03.jpeg", dest: "products/cortina-de-vidro/varanda-skyline-01.jpg" },
  { src: "cortinas-de-vidro/WhatsApp Image 2026-07-20 at 09.37.04 (3).jpeg", dest: "products/cortina-de-vidro/poltrona-rosa-01.jpg" },
  { src: "cortinas-de-vidro/WhatsApp Image 2026-07-20 at 09.37.04 (5).jpeg", dest: "products/cortina-de-vidro/entardecer-01.jpg" },

  // ---- Produtos: Box ----
  { src: "boxes/WhatsApp Image 2026-07-20 at 09.37.05 (4).jpeg", dest: "products/boxes/marmore-dourado-01.jpg" },
  { src: "boxes/WhatsApp Image 2026-07-20 at 09.37.05 (1).jpeg", dest: "products/boxes/calacatta-banheira-01.jpg" },
  { src: "boxes/WhatsApp Image 2026-07-20 at 09.37.06.jpeg", dest: "products/boxes/preto-branco-moderno-01.jpg" },
  { src: "boxes/WhatsApp Image 2026-07-20 at 09.37.05 (2).jpeg", dest: "products/boxes/trilho-dourado-01.jpg" },
  { src: "boxes/WhatsApp Image 2026-07-20 at 09.37.05.jpeg", dest: "products/boxes/cobre-01.jpg" },

  // ---- Produtos: Espelhos ----
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.10 (2).jpeg", dest: "products/espelhos/sala-jantar-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.09 (4).jpeg", dest: "products/espelhos/lavabo-dourado-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.09 (1).jpeg", dest: "products/espelhos/fragmentado-arte-01.jpg" },

  // ---- Produtos: Guarda-corpo ----
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.08 (1).jpeg", dest: "products/guarda-corpo/escada-vidro-bronze-01.jpg" },
  { src: "guarda-corpo/WhatsApp Image 2026-07-20 at 09.37.06 (1).jpeg", dest: "products/guarda-corpo/escada-pedra-01.jpg" },
  { src: "guarda-corpo/WhatsApp Image 2026-07-20 at 09.37.06.jpeg", dest: "products/guarda-corpo/fachada-terraco-01.jpg" },

  // ---- Produtos: Portas e Janelas ----
  { src: "porta-vidro-estrutura-aluminio/WhatsApp Image 2026-07-20 at 09.37.07 (1).jpeg", dest: "products/portas-janelas/sala-reuniao-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.11 (2).jpeg", dest: "products/portas-janelas/canelado-loft-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.11 (1).jpeg", dest: "products/portas-janelas/espelhada-vista-cidade-01.jpg" },

  // ---- Produtos: Fachadas em Vidro ----
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.12 (1).jpeg", dest: "products/fachadas/sala-jardim-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.12.jpeg", dest: "products/fachadas/jardim-ceu-azul-01.jpg" },

  // ---- Produtos: Vidros Temperados ----
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.12 (3).jpeg", dest: "products/vidros-temperados/banheira-nicho-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.13 (1).jpeg", dest: "products/vidros-temperados/banheiro-completo-01.jpg" },

  // ---- Produtos: Estruturas em Alumínio e Vidro ----
  { src: "porta-vidro-estrutura-aluminio/WhatsApp Image 2026-07-20 at 09.37.08.jpeg", dest: "products/estruturas-aluminio/cozinha-correr-01.jpg" },
  { src: "porta-vidro-estrutura-aluminio/WhatsApp Image 2026-07-20 at 09.37.07 (3).jpeg", dest: "products/estruturas-aluminio/armario-espelho-banheiro-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.09 (2).jpeg", dest: "products/estruturas-aluminio/adega-vidro-bronze-01.jpg" },

  // ---- Galeria (extras que não entram em nenhum bloco de produto) ----
  { src: "porta-vidro-estrutura-aluminio/WhatsApp Image 2026-07-20 at 09.37.08 (1).jpeg", dest: "gallery/closet-espelhado-01.jpg" },
  { src: "diversos/WhatsApp Image 2026-07-20 at 09.37.09.jpeg", dest: "gallery/painel-tv-lacado-01.jpg" },

  // ---- Quem Somos ----
  { src: "quem-somos/WhatsApp Image 2026-07-20 at 09.37.03 (1).jpeg", dest: "about/duo-principal-01.jpg" },
  { src: "quem-somos/WhatsApp Image 2026-07-20 at 09.37.02 (4).jpeg", dest: "about/socia-senior-01.jpg" },
  { src: "quem-somos/WhatsApp Image 2026-07-20 at 09.37.02 (5).jpeg", dest: "about/socia-junior-01.jpg" },

  // ---- Logo ----
  { src: "logo/logo.jpeg", dest: "misc/logo.jpg" },

  // ---- Produtos: Cristaleiras ----
  { src: "cristaleiras/WhatsApp Image 2026-08-05 at 10.49.03 (1).jpeg", dest: "products/cristaleiras/sala-jantar-luminaria-01.jpg" },
  { src: "cristaleiras/WhatsApp Image 2026-08-05 at 10.49.02.jpeg", dest: "products/cristaleiras/branca-classica-01.jpg" },
  { src: "cristaleiras/WhatsApp Image 2026-08-05 at 10.49.03 (3).jpeg", dest: "products/cristaleiras/madeira-espelho-01.jpg" },

  // ---- Galeria: Cristaleiras (extras) ----
  { src: "cristaleiras/WhatsApp Image 2026-08-05 at 10.49.02 (1).jpeg", dest: "gallery/cristaleira-detalhe-porta-01.jpg" },
  { src: "cristaleiras/WhatsApp Image 2026-08-05 at 10.49.04.jpeg", dest: "gallery/cristaleira-dourada-minimal-01.jpg", cropBottomPercent: 0.13 },
  { src: "faixadas/WhatsApp Image 2026-08-05 at 10.48.23 (3).jpeg", dest: "gallery/cristaleira-colecionaveis-01.jpg" },

  // ---- Produtos: Fachadas em Vidro (fotos novas, dedicadas) ----
  { src: "faixadas/WhatsApp Image 2026-08-05 at 10.48.22 (1).jpeg", dest: "products/fachadas/loja-fort-louro-01.jpg" },
  { src: "faixadas/WhatsApp Image 2026-08-05 at 10.48.22.jpeg", dest: "products/fachadas/loja-essence-01.jpg" },

  // ---- Galeria: Fachadas (extras) ----
  { src: "faixadas/WhatsApp Image 2026-08-05 at 10.48.22 (2).jpeg", dest: "gallery/fachada-fort-louro-02.jpg" },
  { src: "faixadas/WhatsApp Image 2026-08-05 at 10.48.23.jpeg", dest: "gallery/fachada-corner-cidade-01.jpg" },
];

async function run() {
  let ok = 0;
  for (const { src, dest, cropBottomPercent } of MANIFEST) {
    const srcPath = path.join(DATA_DIR, src);
    const destPath = path.join(DEST_DIR, dest);
    await mkdir(path.dirname(destPath), { recursive: true });

    let pipeline = sharp(srcPath).rotate(); // normalize EXIF orientation, then strip it

    if (cropBottomPercent) {
      const { width, height } = await sharp(srcPath).rotate().metadata();
      pipeline = pipeline.extract({
        left: 0,
        top: 0,
        width,
        height: Math.round(height * (1 - cropBottomPercent)),
      });
    }

    await pipeline
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(destPath);
    ok++;
    console.log(`✓ ${dest}`);
  }
  console.log(`\n${ok}/${MANIFEST.length} imagens preparadas em src/assets/images`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
