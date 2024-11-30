import { type VariantProps, cva } from "class-variance-authority";
import type { ElementType, ReactElement, Ref } from "react";
import { cn } from "../utils/cn";

const VARIANTS = {
  default: "",
  inverted: "",
  destructive: "bg-red-500 text-white",
};

const SIZES = {
  default: "px-4 py-1.5",
  xs: "px-2 py-0.5",
  sm: "px-3 py-1",
  lg: "py-3 px-8",
};

const tagVariants = cva("border", {
  variants: {
    variant: VARIANTS,
    size: SIZES,
    isFullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

namespace Tag {
  export interface Props extends VariantProps<typeof tagVariants> {
    ref?: Ref<HTMLSpanElement | ElementType>;
    is?: "span" | ElementType;
    className?: string;
  }
}

export function Tag({
  variant = "default",
  size = "default",
  className,
  is = "span",
  ref,
  ...props
}: Tag.Props): ReactElement {
  let Element: ElementType = is;
  return (
    <Element
      ref={ref}
      {...props}
      className={cn(
        "inline-flex items-center rounded text-sm",
        tagVariants({ variant, size }),
        className,
      )}
    />
  );
}
