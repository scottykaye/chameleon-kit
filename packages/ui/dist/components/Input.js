import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
export function Input(_param) {
    var ref = _param.ref, type = _param.type, label = _param.label, _param_hiddenLabel = _param.hiddenLabel, hiddenLabel = _param_hiddenLabel === void 0 ? false : _param_hiddenLabel, props = _object_without_properties(_param, [
        "ref",
        "type",
        "label",
        "hiddenLabel"
    ]);
    return /*#__PURE__*/ _jsxs("label", {
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: cn({
                    "sr-only": hiddenLabel
                }),
                children: label
            }),
            /*#__PURE__*/ _jsx("input", _object_spread_props(_object_spread({}, props), {
                type: type,
                className: cn("h-12 w-full rounded border border-gray-500 px-3.5 py-2 transition-colors file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-400"),
                ref: ref
            }))
        ]
    });
}
