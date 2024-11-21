import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";
var cardVariants = cva("p-4", {
    variants: {
        variant: {
            default: "bg-white shadow-md rounded-sm"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
export function Card(_param) {
    var _param_variant = _param.variant, variant = _param_variant === void 0 ? "default" : _param_variant, _param_is = _param.is, is = _param_is === void 0 ? "section" : _param_is, ref = _param.ref, className = _param.className, props = _object_without_properties(_param, [
        "variant",
        "is",
        "ref",
        "className"
    ]);
    var Element = is;
    return /*#__PURE__*/ _jsx(Element, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        className: cn(cardVariants({
            variant: variant
        }), className)
    }));
}
