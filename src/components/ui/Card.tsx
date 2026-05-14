import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "./utils";

type CardVariant = "default" | "elevated" | "outline" | "solid";
type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  interactive?: boolean;
  padding?: CardPadding;
  variant?: CardVariant;
};

const variants: Record<CardVariant, string> = {
  default:
    "border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
  elevated:
    "border-white/12 bg-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]",
  outline: "border-white/12 bg-transparent",
  solid: "border-white/8 bg-zinc-950/80 shadow-[0_20px_70px_rgba(0,0,0,0.28)]",
};

const paddings: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-7 sm:p-8",
};

export function Card({
  children,
  className,
  interactive = false,
  padding = "md",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border text-white backdrop-blur-xl",
        variants[variant],
        paddings[padding],
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
