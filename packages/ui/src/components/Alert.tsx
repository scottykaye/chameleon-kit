import { CircleCheck, InfoIcon, OctagonX, TriangleAlert } from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import { cn } from "../utils/cn";

const VARIANTS = {
  default: "border-inverted-background",
  info: "border-blue-500",
  warning: "border-yellow-500",
  success: "border-green-500",
  destructive: "border-red-500",
};

const ICON_VARIANT = {
  info: <InfoIcon aria-hidden="true" className="h-5 w-5 text-blue-500" />,
  warning: (
    <TriangleAlert aria-hidden="true" className="h-5 w-5 text-yellow-500" />
  ),
  success: (
    <CircleCheck aria-hidden="true" className="h-5 w-5 text-green-500" />
  ),
  destructive: <OctagonX aria-hidden="true" className="h-5 w-5 text-red-500" />,
};

export namespace Alert {
  export interface Props {
    children: ReactNode;
    variant?: keyof typeof VARIANTS;
    className?: string;
    title?: ReactNode;
    [key: string]: unknown;
  }
}

export function Alert({
  variant = "default",
  children,
  size = "default",
  className,
  title,
  ...props
}: Alert.Props): ReactElement {
  return (
    <section
      role="alert"
      className={cn(
        "border-l-[6px] bg-gray-100 dark:bg-gray-700 p-4",
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      <header className="mr-2 mb-2 flex items-center">
        {variant !== "default" ? (
          <span className="mr-2">{ICON_VARIANT[variant]}</span>
        ) : null}
        <h4 className="text-xl">{title}</h4>
      </header>
      {children}
    </section>
  );
}
