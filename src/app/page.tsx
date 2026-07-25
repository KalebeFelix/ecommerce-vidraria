import { Hero } from "@/components/hero/Hero";
import { StatsSection } from "@/components/stats/StatsSection";
import { ProductsOverview } from "@/components/products/ProductsOverview";
import { ProductsDetailed } from "@/components/products/ProductsDetailed";
import { GallerySection } from "@/components/gallery/GallerySection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AboutSection } from "@/components/about/AboutSection";
import { CtaSection } from "@/components/cta/CtaSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ProductsOverview />
      <ProductsDetailed />
      <GallerySection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
}
