"use client";
import { _ as _instanceof } from "@swc/helpers/_/_instanceof";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { XIcon } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../utils/cn";
var SIZES = {
    xl: "max-w-xl",
    lg: "max-w-lg",
    md: "max-w-md",
    sm: "max-w-sm",
    xs: "max-w-xs"
};
export function Modal(param) {
    var children = param.children, isOpen = param.isOpen, onClose = param.onClose, footer = param.footer, header = param.header, _param_size = param.size, size = _param_size === void 0 ? "md" : _param_size;
    var ref = useRef(null);
    var handleCloseModal = useCallback(function() {
        if (onClose) {
            onClose();
        }
    }, [
        onClose
    ]);
    function handleKeyDown(event) {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    }
    var handleBackdropClick = useCallback(function(event) {
        var target = event.target;
        if (target.nodeName === "DIALOG" && _instanceof(target, HTMLDialogElement)) {
            handleCloseModal();
        }
    }, [
        handleCloseModal
    ]);
    useEffect(function() {
        if (ref.current) {
            ref.current.addEventListener("click", handleBackdropClick);
        }
        return function() {
            if (ref.current) {
                ref.current.removeEventListener("click", handleBackdropClick);
            }
        };
    }, [
        handleBackdropClick
    ]);
    useEffect(function() {
        if (ref.current) {
            if (isOpen) {
                ref.current.showModal();
            } else {
                ref.current.close();
            }
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("dialog", {
            ref: ref,
            onKeyDown: handleKeyDown,
            className: cn("backdrop:cursor-pointer transition-opacity backdrop:transition-[backdrop-filter] backdrop:backdrop-blur grid place-items-center [&:not([open])]:pointer-events-none [&:not([open])]:opacity-0 fixed inset-0 max-w-xl backdrop:bg-black/50 p-4 z-100 m-auto", SIZES[size]),
            children: /*#__PURE__*/ _jsxs("form", {
                action: "dialog",
                children: [
                    /*#__PURE__*/ _jsxs("header", {
                        className: "flex justify-between mb-5 gap-2 text-pretty",
                        children: [
                            header,
                            /*#__PURE__*/ _jsx("button", {
                                type: "button",
                                onClick: handleCloseModal,
                                className: "w-8 h-8 grid place-items-center",
                                children: /*#__PURE__*/ _jsx(XIcon, {
                                    className: "w-4 h-4",
                                    "arial-label": "Close Modal"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("article", {
                        children: children
                    }),
                    /*#__PURE__*/ _jsx("footer", {
                        className: "mt-5",
                        children: footer
                    })
                ]
            })
        })
    });
}
