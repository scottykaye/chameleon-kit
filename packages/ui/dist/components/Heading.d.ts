import type { ElementType, HTMLAttributes, ReactNode } from "react";
declare const SIZES: {
    readonly "7xl": "text-6xl";
    readonly "6xl": "text-7xl";
    readonly "5xl": "text-5xl";
    readonly "4xl": "text-4xl";
    readonly "3xl": "text-3xl";
    readonly "2xl": "text-2xl";
    readonly xl: "text-xl";
    readonly lg: "text-lg";
    readonly md: "text-md";
    readonly sm: "text-sm";
    readonly xs: "text-xs";
};
type SizeOption = keyof typeof SIZES;
declare namespace Heading {
    type Props = HTMLAttributes<HTMLHeadingElement> & {
        className?: string;
        size?: SizeOption | null;
        is?: ElementType;
        children: ReactNode;
    };
}
export declare function Heading({ className, is, size, ...props }: Heading.Props): import("react/jsx-runtime").JSX.Element;
export {};
