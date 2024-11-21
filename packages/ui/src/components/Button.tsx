import { cva } from "class-variance-authority";
import NextLink from "next/link";
import type { ButtonHTMLAttributes, ElementType, Ref } from "react";
import { cn } from "../utils/cn";

namespace Button {
  export type Props = ButtonHTMLAttributes<
    HTMLButtonElement | HTMLAnchorElement
  > & {
    ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
    is?: "button" | "a" | typeof NextLink;
    variant?: "primary" | "outline";
    size?: "default";
    isFullWidth?: boolean;
    className?: string;
  };
}

const defaultState =
  "whitespace-nowrap rounded cursor-pointer ring-offset-background transition-colorstransition-[transform,background-color,color] [&:not(:disabled)]:active:translate-y-0.5 font-aspekta leading-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2";
const disabledState =
  "disabled:text-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed";

const buttonVariants = cva(`${defaultState} ${disabledState}`, {
  variants: {
    variant: {
      primary:
        "text-white bg-blue-500 [&:is(:hover,:focus):not(:disabled)]:bg-blue-700",
      outline:
        "text-blue-600 bg-transparent border border-gray-400 [&:is(:hover,:focus):not(:disabled)]:border-blue-900 [&:is(:hover,:focus):not(:disabled)]:text-blue-900",
    },
    size: {
      default: "h-12 px-6 [&:not(.button--link)]:text-md",
    },
    isFullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

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
}: Button.Props) {
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
      className={cn(buttonVariants({ variant, size, isFullWidth }), className)}
    />
  );
}
