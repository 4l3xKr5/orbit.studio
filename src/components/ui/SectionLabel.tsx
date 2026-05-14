import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "./utils";

type SectionLabelTone = "cyan" | "violet" | "gold" | "neutral";

type SectionLabelProps = ComponentPropsWithoutRef<"p"> & {
  children: ReactNode;
  tone?: SectionLabelTone;
};

const tones: Record<SectionLabelTone, string> = {
  cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_32px_rgba(103,232,249,0.08)]",
  violet:
    "border-violet-300/20 bg-violet-300/10 text-violet-200 shadow-[0_0_32px_rgba(196,181,253,0.08)]",
  gold: "border-amber-200/20 bg-amber-200/10 text-amber-100 shadow-[0_0_32px_rgba(253,230,138,0.08)]",
  neutral:
    "border-white/12 bg-white/[0.06] text-zinc-200 shadow-[0_0_32px_rgba(255,255,255,0.06)]",
};

export function SectionLabel({
  children,
  className,
  tone = "cyan",
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-5 inline-flex w-fit items-center rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold uppercase leading-none tracking-[0.18em] backdrop-blur-md",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
