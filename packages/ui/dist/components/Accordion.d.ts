import { KeyboardNav, createKeyboardNavHook } from "accessible-navigation";
import { type ReactNode } from "react";
declare namespace Accordion {
    interface Props {
        children: ReactNode;
        className?: string;
    }
    interface PanelProps {
        children: ReactNode;
        title: ReactNode;
        label: string;
        controlledElement?: string;
        isOpen?: boolean;
        onClick?: () => void;
    }
    interface Context {
        keyboardControls?: KeyboardNav;
        useKeyboardNav?: ReturnType<typeof createKeyboardNavHook>;
    }
}
export declare function Accordion({ children, className }: Accordion.Props): import("react/jsx-runtime").JSX.Element;
export declare function Panel({ children, title, label, controlledElement, isOpen, onClick, }: Accordion.PanelProps): import("react/jsx-runtime").JSX.Element;
export {};
