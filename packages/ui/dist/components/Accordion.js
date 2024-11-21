"use client";
import { _ as _sliced_to_array } from "@swc/helpers/_/_sliced_to_array";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KeyboardNav, createKeyboardNavHook } from "accessible-navigation";
import { ChevronDown } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { cn } from "../utils/cn";
var AccordionContext = /*#__PURE__*/ createContext({});
export function Accordion(param) {
    var children = param.children, className = param.className;
    var _useState = _sliced_to_array(useState(function() {
        return new KeyboardNav("vertical");
    }), 1), keyboardControls = _useState[0];
    var _useState1 = _sliced_to_array(useState(function() {
        return createKeyboardNavHook(keyboardControls);
    }), 1), useKeyboardNav = _useState1[0];
    return /*#__PURE__*/ _jsx(AccordionContext.Provider, {
        value: {
            keyboardControls: keyboardControls,
            useKeyboardNav: useKeyboardNav
        },
        children: /*#__PURE__*/ _jsx("div", {
            id: "accordionGroup",
            className: cn("bg-white rounded-sm", className),
            children: children
        })
    });
}
export function Panel(param) {
    var children = param.children, title = param.title, label = param.label, controlledElement = param.controlledElement, _param_isOpen = param.isOpen, isOpen = _param_isOpen === void 0 ? false : _param_isOpen, _param_onClick = param.onClick, onClick = _param_onClick === void 0 ? function() {} : _param_onClick;
    var _useContext = useContext(AccordionContext), keyboardControls = _useContext.keyboardControls, useKeyboardNav = _useContext.useKeyboardNav;
    if (typeof useKeyboardNav === "undefined" || typeof keyboardControls === "undefined") {
        throw new Error("`useKeyboardNav` and `keyboardControls` props must be defined.");
    }
    var ref = useKeyboardNav(label);
    function onKeyDown(event) {
        if (keyboardControls) {
            keyboardControls.update(event.nativeEvent, label);
        }
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: "border-b border-gray-400 p-2",
        children: [
            /*#__PURE__*/ _jsx("h3", {
                children: /*#__PURE__*/ _jsxs("button", {
                    type: "button",
                    // lets us know if the panel is expanded
                    "aria-expanded": isOpen,
                    // Points to the ID of the panel which the header controls.
                    "aria-controls": controlledElement,
                    id: label,
                    onClick: onClick,
                    className: "px-4 py-2 w-full text-left flex gap-2 items-center",
                    ref: ref,
                    onKeyDown: onKeyDown,
                    children: [
                        title,
                        /*#__PURE__*/ _jsx(ChevronDown, {
                            className: cn("ml-auto w-4 h-4 text-gray-500", {
                                "rotate-180": isOpen
                            }),
                            "aria-label": "".concat(title, " content is ").concat(isOpen ? "expanded" : "collapsed")
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ _jsx("section", {
                id: controlledElement,
                // Defines the accessible name for the region element.
                "aria-labelledby": label,
                className: "p-4",
                children: children
            })
        ]
    });
}
