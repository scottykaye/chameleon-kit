import { cva } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import { cn } from "../utils/cn";

namespace Card {
  export type Props = {
    ref?: React.Ref<HTMLElement>;
    is?: ElementType;
    variant?: "default";
    className?: string;
    children: ReactNode;
  };
}

const cardVariants = cva("p-4", {
  variants: {
    variant: {
      default: "bg-white shadow-md rounded-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Card({
  variant = "default",
  is = "section",
  ref,
  className,
  ...props
}: Card.Props) {
  let Element: ElementType = is;
  return (
    <Element
      {...props}
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
    />
  );
}
