import type { ElementType, ReactNode } from "react";
declare const SIZE: {
    readonly default: null;
    readonly "4xl": "text-4xl";
    readonly "3xl": "text-3xl";
    readonly "2xl": "text-2xl";
    readonly xl: "text-xl";
    readonly lg: "text-lg";
    readonly md: "text-md";
    readonly sm: "text-sm";
    readonly xs: "text-xs";
};
declare const VARIANTS: {
    readonly default: null;
    readonly secondary: "font-serif";
};
type SizeOption = keyof typeof SIZE;
type VariantOption = keyof typeof VARIANTS;
declare namespace Text {
    type Props = {
        className?: string;
        size?: SizeOption;
        is?: ElementType;
        color?: "default" | "secondary";
        children: ReactNode;
        variant?: VariantOption;
    };
}
export declare function Text({ className, is, size, variant, ...props }: Text.Props): import("react/jsx-runtime").JSX.Element;
export {};
