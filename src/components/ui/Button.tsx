import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "./utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "quiet";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsAnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
  };

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
  };

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-white/80 bg-white text-zinc-950 shadow-[0_16px_48px_rgba(255,255,255,0.16)] hover:bg-zinc-100 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]",
  secondary:
    "border border-white/12 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-white/20 hover:bg-white/[0.1]",
  ghost:
    "border border-transparent text-zinc-300 hover:bg-white/[0.05] hover:text-white",
  quiet:
    "border border-white/10 bg-black/20 text-zinc-300 hover:border-white/18 hover:bg-black/40 hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-sm",
};

export function Button({
  as = "a",
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classNames = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none tracking-normal outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-45",
    sizes[size],
    variants[variant],
    className,
  );

  if (as === "button") {
    return (
      <button className={classNames} {...(props as ButtonAsButtonProps)}>
        {children}
      </button>
    );
  }

  return (
    <a className={classNames} {...(props as ButtonAsAnchorProps)}>
      {children}
    </a>
  );
}
