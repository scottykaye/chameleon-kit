import NextLink from "next/link";
import type { ButtonHTMLAttributes, Ref } from "react";
declare namespace Button {
    type Props = ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
        ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
        is?: "button" | "a" | typeof NextLink;
        variant?: "primary" | "outline";
        size?: "default";
        isFullWidth?: boolean;
        className?: string;
    };
}
export declare function Button({ variant, disabled, is, ref, type, size, isFullWidth, className, ...props }: Button.Props): import("react/jsx-runtime").JSX.Element;
export {};
