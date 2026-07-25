import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

export type ProductCategorySlug =
  | "cortina-de-vidro"
  | "boxes"
  | "espelhos"
  | "guarda-corpo"
  | "portas-janelas"
  | "fachadas"
  | "vidros-temperados"
  | "estruturas-aluminio";

export interface ProductImage {
  src: StaticImageData;
  alt: string;
}

export interface ProductCategory {
  slug: ProductCategorySlug;
  index: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  hero: ProductImage;
  secondary: ProductImage[];
}

export interface GalleryItem {
  id: string;
  image: StaticImageData;
  alt: string;
  category: ProductCategorySlug;
  categoryLabel: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

export interface ValueItem {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Differentiator {
  label: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}
