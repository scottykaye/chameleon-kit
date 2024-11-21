import type { ElementType, ReactNode } from "react";
declare namespace Card {
    type Props = {
        ref?: React.Ref<HTMLElement>;
        is?: ElementType;
        variant?: "default";
        className?: string;
        children: ReactNode;
    };
}
export declare function Card({ variant, is, ref, className, ...props }: Card.Props): import("react/jsx-runtime").JSX.Element;
export {};
