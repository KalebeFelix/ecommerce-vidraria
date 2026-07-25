import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker ? (
        <span
          className={cn(
            "mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-red-vivid" : "text-red-vivid"
          )}
        >
          {kicker}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink/70" : "text-white/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
