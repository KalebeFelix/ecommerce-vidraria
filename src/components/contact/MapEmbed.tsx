import { siteConfig } from "@/lib/data/site-config";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title={`Mapa — ${siteConfig.name}`}
        src={siteConfig.address.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale contrast-[1.05] filter"
        style={{ border: 0 }}
      />
    </div>
  );
}
