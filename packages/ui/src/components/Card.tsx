import { cva } from "class-variance-authority";
import type { ElementType, ReactElement, ReactNode } from "react";
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
      default: "bg-white dark:bg-black shadow-md rounded-sm",
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
}: Card.Props): ReactElement {
  let Element: ElementType = is;
  return (
    <Element
      {...props}
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
    />
  );
}
