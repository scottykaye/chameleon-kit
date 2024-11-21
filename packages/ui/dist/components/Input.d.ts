import type { InputHTMLAttributes, ReactElement, Ref } from "react";
declare namespace Input {
    type Props = InputHTMLAttributes<HTMLInputElement> & {
        ref?: Ref<HTMLInputElement>;
        label: ReactElement | string;
        hiddenLabel?: boolean;
    };
}
export declare function Input({ ref, type, label, hiddenLabel, ...props }: Input.Props): import("react/jsx-runtime").JSX.Element;
export {};
