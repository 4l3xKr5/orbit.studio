import type { ComponentPropsWithoutRef } from "react";

import { cn } from "./utils";

type GlowTone = "cyan" | "violet" | "gold" | "white";
type GlowSize = "sm" | "md" | "lg";

type GlowProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  size?: GlowSize;
  tone?: GlowTone;
};

const tones: Record<GlowTone, string> = {
  cyan: "bg-cyan-300/20",
  violet: "bg-violet-400/18",
  gold: "bg-amber-200/16",
  white: "bg-white/12",
};

const sizes: Record<GlowSize, string> = {
  sm: "h-40 w-40 blur-3xl",
  md: "h-72 w-72 blur-[96px]",
  lg: "h-[30rem] w-[30rem] blur-[120px]",
};

export function Glow({
  className,
  size = "md",
  tone = "cyan",
  ...props
}: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full opacity-80 mix-blend-screen",
        sizes[size],
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
