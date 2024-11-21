import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
var SIZES = {
    "7xl": "text-6xl",
    "6xl": "text-7xl",
    "5xl": "text-5xl",
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "2xl": "text-2xl",
    xl: "text-xl",
    lg: "text-lg",
    md: "text-md",
    sm: "text-sm",
    xs: "text-xs"
};
var HEADING = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-lg"
};
export function Heading(_param) {
    var className = _param.className, _param_is = _param.is, is = _param_is === void 0 ? "h2" : _param_is, _param_size = _param.size, size = _param_size === void 0 ? null : _param_size, props = _object_without_properties(_param, [
        "className",
        "is",
        "size"
    ]);
    var Element = is;
    var classSize = typeof Element === "string" && Object.keys(HEADING).includes(Element) ? HEADING[Element] : null;
    return /*#__PURE__*/ _jsx(Element, _object_spread({
        className: cn(size ? SIZES[size] : classSize, "text-pretty font-serif", className)
    }, props));
}
