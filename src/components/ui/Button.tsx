"use client";

import type { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ghost" | "white" | "ghost-light";

const VARIANT_CLASSES: Record<Variant, string> = {
  solid: "bg-red-vivid text-white hover:bg-red-vivid-dark",
  ghost: "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  white: "bg-white text-red-vivid hover:bg-white/90",
  "ghost-light": "border border-white/30 text-white hover:border-white/60 hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "solid",
  className,
  onClick,
  target,
  icon,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: MouseEventHandler;
  target?: string;
  icon?: ReactNode;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300",
    VARIANT_CLASSES[variant],
    className
  );

  const content = (
    <>
      {children}
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} whileTap={{ scale: 0.97 }}>
      {content}
    </motion.button>
  );
}
