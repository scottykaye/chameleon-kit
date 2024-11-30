import type { ElementType, ReactElement, ReactNode } from "react";
import { cn } from "../utils/cn";

const SIZE = {
  default: null,
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  md: "text-md",
  sm: "text-sm",
  xs: "text-xs",
} as const;

const VARIANTS = {
  default: null,
  secondary: "font-serif",
} as const;

type SizeOption = keyof typeof SIZE;
type VariantOption = keyof typeof VARIANTS;

namespace Text {
  export type Props = {
    className?: string;
    size?: SizeOption;
    is?: ElementType;
    color?: "default" | "secondary";
    children: ReactNode;
    variant?: VariantOption;
  };
}

export function Text({
  className,
  is = "p",
  size = "default",
  variant = "default",
  ...props
}: Text.Props): ReactElement {
  const Element: ElementType = is;
  const classSize =
    size && Object.keys(SIZE).includes(size) ? SIZE[size as SizeOption] : null;
  const varantClass = VARIANTS[variant as VariantOption];

  return <p {...props} className={cn(classSize, varantClass, className)} />;
}
