import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import NextLink from "next/link";
import { cn } from "../utils/cn";
var defaultState = "whitespace-nowrap rounded cursor-pointer ring-offset-background transition-colorstransition-[transform,background-color,color] [&:not(:disabled)]:active:translate-y-0.5 font-aspekta leading-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2";
var disabledState = "disabled:text-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed";
var buttonVariants = cva("".concat(defaultState, " ").concat(disabledState), {
    variants: {
        variant: {
            primary: "text-white bg-blue-500 [&:is(:hover,:focus):not(:disabled)]:bg-blue-700",
            outline: "text-blue-600 bg-transparent border border-gray-400 [&:is(:hover,:focus):not(:disabled)]:border-blue-900 [&:is(:hover,:focus):not(:disabled)]:text-blue-900"
        },
        size: {
            default: "h-12 px-6 [&:not(.button--link)]:text-md"
        },
        isFullWidth: {
            true: "w-full"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "default"
    }
});
export function Button(_param) {
    var _param_variant = _param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, disabled = _param.disabled, _param_is = _param.is, is = _param_is === void 0 ? "button" : _param_is, ref = _param.ref, _param_type = _param.type, type = _param_type === void 0 ? "button" : _param_type, size = _param.size, isFullWidth = _param.isFullWidth, className = _param.className, props = _object_without_properties(_param, [
        "variant",
        "disabled",
        "is",
        "ref",
        "type",
        "size",
        "isFullWidth",
        "className"
    ]);
    var Element = is;
    // if it's a link and disabled, render a span instead of an anchor element
    if ((is === "a" || is === NextLink) && disabled) {
        Element = "span";
    }
    // Don't pass `disabled` to the element if it's not a button
    var forwardedProps = {};
    if (is === "button") {
        forwardedProps.disabled = disabled;
    }
    return /*#__PURE__*/ _jsx(Element, _object_spread_props(_object_spread({}, props, forwardedProps), {
        type: type,
        ref: ref,
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            isFullWidth: isFullWidth
        }), className)
    }));
}
