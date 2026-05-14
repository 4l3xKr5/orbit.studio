import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "./utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";
type ContainerElement = "div" | "section" | "main" | "header" | "footer";

type ContainerProps<TElement extends ContainerElement = "div"> = Omit<
  ComponentPropsWithoutRef<TElement>,
  "as" | "children"
> & {
  as?: TElement;
  children: ReactNode;
  size?: ContainerSize;
};

const sizes: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container<TElement extends ContainerElement = "div">({
  as,
  children,
  className,
  size = "xl",
  ...props
}: ContainerProps<TElement>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
