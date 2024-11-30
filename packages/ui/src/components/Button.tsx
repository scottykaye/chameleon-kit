import { type VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import type {
  ButtonHTMLAttributes,
  ElementType,
  ReactElement,
  Ref,
} from "react";
import { cn } from "../utils/cn";

const defaultState =
  "whitespace-nowrap rounded cursor-pointer ring-offset-background transition-[transform,background-color,color] [&:not(:disabled)]:active:translate-y-0.5 font-aspekta leading-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-200";
const disabledState =
  "disabled:text-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed";

const VARIANTS = {
  primary:
    "text-white bg-primary-500 [&:is(:hover,:focus):not(:disabled)]:bg-primary-700",
  outline:
    "text-primary-600 dark:text-primary-300 bg-transparent border border-primary-600 dark:border-primary-300 [&:is(:hover,:focus):not(:disabled)]:border-primary-900 [&:is(:hover,:focus):not(:disabled)]:dark:border-primary-100 [&:is(:hover,:focus):not(:disabled)]:text-primary-900 [&:is(:hover,:focus):not(:disabled)]:dark:text-primary-100",
  ghost:
    "text-primary-600 dark:text-primary-300 bg-transparent [&:is(:hover,:focus):not(:disabled)]:text-primary-900 [&:is(:hover,:focus):not(:disabled)]:dark:text-primary-100 [&:is(:hover,:focus):not(:disabled)]:bg-primary-300 [&:is(:hover,:focus):not(:disabled)]:dark:bg-primary-700",
};

const SIZES = {
  default: "h-12 px-4 [&:not(.button--link)]:text-md",
  xs: "h-5 px-1 [&:not(.button--link)]:text-md",
  sm: "h-7 px-1 [&:not(.button--link)]:text-md",
  md: "h-9 px-2 [&:not(.button--link)]:text-md",
  lg: "h-14 px-2 [&:not(.button--link)]:text-md",
  xl: "h-16 px-6 [&:not(.button--link)]:text-md",
};

const buttonVariants: ReturnType<typeof cva> = cva(
  `${defaultState} ${disabledState}`,
  {
    variants: {
      variant: VARIANTS,
      size: SIZES,
      isFullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

namespace Button {
  export interface Props
    extends Omit<
        ButtonHTMLAttributes<
          HTMLAnchorElement | HTMLButtonElement | typeof NextLink
        >,
        "is"
      >,
      VariantProps<typeof buttonVariants> {
    ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
    is?: "button" | "a" | typeof NextLink;
    variant?: keyof typeof VARIANTS;
    size?: keyof typeof SIZES;
    isFullWidth?: boolean;
    className?: string;
  }
}

export function Button({
  variant = "primary",
  disabled,
  is = "button",
  ref,
  type = "button",
  size,
  isFullWidth,
  className,
  ...props
}: Button.Props): ReactElement {
  let Element: ElementType = is;

  // if it's a link and disabled, render a span instead of an anchor element
  if ((is === "a" || is === NextLink) && disabled) {
    Element = "span";
  }

  // Don't pass `disabled` to the element if it's not a button
  const forwardedProps: Record<string, unknown> = {};
  if (is === "button") {
    forwardedProps.disabled = disabled;
  }

  return (
    <Element
      {...props}
      {...forwardedProps}
      type={type}
      ref={ref}
      className={cn(
        // buttonVariants({ variant, size, isFullWidth }),
        className,
      )}
    />
  );
}
