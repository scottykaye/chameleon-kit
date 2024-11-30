"use client";
import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
} from "react";
import { cn } from "../utils/cn";

namespace CopyToClipboard {
  export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    copyText: string;
    children: ReactNode;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
  }
}

export function CopyToClipboard({
  copyText,
  onClick,
  className,
  ...props
}: CopyToClipboard.Props): ReactElement {
  return (
    <button
      {...props}
      type="button"
      className={cn("cursor-pointer text-left", className)}
      onClick={(e) => {
        navigator.clipboard.writeText(copyText);
        if (onClick) {
          onClick(e);
        }
      }}
    />
  );
}
