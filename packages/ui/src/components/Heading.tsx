import type {
  ElementType,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { cn } from "../utils/cn";

const SIZES = {
  "7xl": "text-6xl",
  "6xl": "text-7xl",
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  md: "text-md",
  sm: "text-sm",
  xs: "text-xs",
} as const;

const HEADING = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-lg",
} as const;

type HeadingOption = keyof typeof HEADING;
type SizeOption = keyof typeof SIZES;

namespace Heading {
  export type Props = HTMLAttributes<HTMLHeadingElement> & {
    className?: string;
    size?: SizeOption | null;
    is?: ElementType;
    children: ReactNode;
  };
}

export function Heading({
  className,
  is = "h2",
  size = null,
  ...props
}: Heading.Props): ReactElement {
  const Element = is;
  const classSize =
    typeof Element === "string" && Object.keys(HEADING).includes(Element)
      ? HEADING[Element as HeadingOption]
      : null;

  return (
    <Element
      className={cn(
        size ? SIZES[size as SizeOption] : classSize,
        "text-pretty",
        className,
      )}
      {...props}
    />
  );
}
