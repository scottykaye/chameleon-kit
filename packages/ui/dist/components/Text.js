import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
var SIZE = {
    default: null,
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "2xl": "text-2xl",
    xl: "text-xl",
    lg: "text-lg",
    md: "text-md",
    sm: "text-sm",
    xs: "text-xs"
};
var VARIANTS = {
    default: null,
    secondary: "font-serif"
};
export function Text(_param) {
    var className = _param.className, _param_is = _param.is, is = _param_is === void 0 ? "p" : _param_is, _param_size = _param.size, size = _param_size === void 0 ? "default" : _param_size, _param_variant = _param.variant, variant = _param_variant === void 0 ? "default" : _param_variant, props = _object_without_properties(_param, [
        "className",
        "is",
        "size",
        "variant"
    ]);
    var Element = is;
    var classSize = size && Object.keys(SIZE).includes(size) ? SIZE[size] : null;
    var varantClass = VARIANTS[variant];
    return /*#__PURE__*/ _jsx(Element, _object_spread_props(_object_spread({}, props), {
        className: cn(classSize, varantClass, className)
    }));
}
