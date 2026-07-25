import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrandWatermark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Gem
      aria-hidden="true"
      strokeWidth={0.6}
      className={cn(
        "pointer-events-none absolute -z-0 h-[32rem] w-[32rem] -rotate-12",
        tone === "dark" ? "text-wine/[0.06]" : "text-white/[0.08]",
        className
      )}
    />
  );
}
