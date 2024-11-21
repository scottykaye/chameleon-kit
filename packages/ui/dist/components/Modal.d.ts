import { type ReactNode } from "react";
declare const SIZES: {
    readonly xl: "max-w-xl";
    readonly lg: "max-w-lg";
    readonly md: "max-w-md";
    readonly sm: "max-w-sm";
    readonly xs: "max-w-xs";
};
declare namespace Modal {
    type Props = {
        children: ReactNode;
        isOpen?: boolean;
        onClose?: () => void;
        footer?: ReactNode | string;
        header?: ReactNode | string;
        size?: keyof typeof SIZES;
    };
}
export declare function Modal({ children, isOpen, onClose, footer, header, size, }: Modal.Props): import("react/jsx-runtime").JSX.Element;
export {};
