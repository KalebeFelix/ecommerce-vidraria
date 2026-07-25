"use client";

import { useEffect, useRef, useState } from "react";
import { animate, type AnimationPlaybackControls } from "framer-motion";
import { cn } from "@/lib/utils";

export function StatCounter({
  target,
  suffix = "+",
  duration = 1.8,
  className,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let controls: AnimationPlaybackControls | undefined;
    let started = false;

    function start() {
      if (started) return;
      started = true;
      controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
    }

    // threshold: 0 (dispara assim que 1px estiver visível) em vez de rootMargin
    // negativo — em alguns navegadores (Safari/iOS em especial, com scroll rápido
    // por inércia) uma margem negativa some sem nunca cruzar o threshold.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);

    // Rede de segurança: se o IntersectionObserver não disparar por qualquer
    // motivo, garante que o contador nunca fique travado em 0 para sempre.
    const fallback = window.setTimeout(start, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      controls?.stop();
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {suffix}
    </span>
  );
}
