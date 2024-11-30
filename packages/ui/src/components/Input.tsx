import type { InputHTMLAttributes, ReactElement, Ref } from "react";
import { cn } from "../utils/cn";

namespace Input {
  export type Props = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>;
    label: ReactElement | string;
    hiddenLabel?: boolean;
  };
}

export function Input({
  ref,
  type,
  label,
  hiddenLabel = false,
  ...props
}: Input.Props): ReactElement {
  return (
    <label>
      <span className={cn({ "sr-only": hiddenLabel })}>{label}</span>
      <input
        {...props}
        type={type}
        className={cn(
          "bg-[var(--background-start-rgb)] text-current h-12 w-full rounded border border-gray-500 px-3.5 py-2 transition-colors file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-400",
        )}
        ref={ref}
      />
    </label>
  );
}
