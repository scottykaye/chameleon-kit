"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nfunction hexToRgb(hex) {\n    // Convert hex color to RGB values\n    console.log(hex);\n    hex = hex.replace(/^#/, \"\");\n    var r, g, b;\n    if (hex.length === 3) {\n        r = parseInt(hex[0] + hex[0], 16);\n        g = parseInt(hex[1] + hex[1], 16);\n        b = parseInt(hex[2] + hex[2], 16);\n    } else if (hex.length === 6) {\n        r = parseInt(hex.substr(0, 2), 16);\n        g = parseInt(hex.substr(2, 2), 16);\n        b = parseInt(hex.substr(4, 2), 16);\n    } else {\n        throw new Error(\"Invalid hex color: \" + hex);\n    }\n    return [\n        r,\n        g,\n        b\n    ];\n}\nfunction getRelativeLuminance(rgb) {\n    // Calculate relative luminance of an RGB color\n    var srgb = rgb.map(function(value) {\n        var s = value / 255;\n        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);\n    });\n    var _srgb = _slicedToArray(srgb, 3), r = _srgb[0], g = _srgb[1], b = _srgb[2];\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\nfunction getContrastRatio(color11, color21) {\n    // Calculate contrast ratio between two colors\n    var rgb1 = hexToRgb(color11);\n    var rgb2 = hexToRgb(color21);\n    var luminance1 = getRelativeLuminance(rgb1);\n    var luminance2 = getRelativeLuminance(rgb2);\n    var contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);\n    return contrastRatio;\n}\nfunction getRandomColor() {\n    return \"#\" + Math.floor(Math.random() * 16777215).toString(16);\n}\nfunction generateAdditionalColors(color1, color2, numColors) {\n    var additionalColors = [];\n    for(var i = 0; i < numColors; i++){\n        var color = getRandomColor();\n        // while (\n        //   getContrastRatio(color, color1) < 4.5 ||\n        //   getContrastRatio(color, color2) < 4.5\n        // ) {\n        //   color = getRandomColor();\n        // }\n        additionalColors.push(color);\n    }\n    return additionalColors;\n}\nfunction adjustColors(color12, color22) {\n    var targetContrastRatio = 4.5;\n    var color1Array = hexToRgb(color12);\n    var color2Array = hexToRgb(color22);\n    var adjustedColor;\n    // Loop through the colors until they are compliant\n    while(getContrastRatio(color1Array, color2Array) < targetContrastRatio){\n        // Adjust the color with the lower luminance\n        if (getRelativeLuminance(color1Array) > getRelativeLuminance(color2Array)) {\n            adjustedColor = adjustColor(color1Array);\n            color1Array = adjustedColor;\n        } else {\n            adjustedColor = adjustColor(color2Array);\n            color2Array = adjustedColor;\n        }\n    }\n    // Convert the adjusted colors back to hex\n    var adjustedColor1 = rgbToHex(color1Array[0], color1Array[1], color1Array[2]);\n    var adjustedColor2 = rgbToHex(color2Array[0], color2Array[1], color2Array[2]);\n    return [\n        adjustedColor1,\n        adjustedColor2\n    ];\n}\nfunction generateCompliantColors(color13, color23) {\n    var numColors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    var MIN_CONTRAST_RATIO = 4.5;\n    var COLORS_TO_GENERATE = numColors - 2;\n    // Check contrast ratio between colors 1 and 2\n    var contrastRatio = getContrastRatio(color13, color23);\n    // If colors are already compliant, return the original colors\n    if (contrastRatio >= MIN_CONTRAST_RATIO) {\n        return [\n            color13,\n            color23\n        ].concat(generateAdditionalColors(color13, color23, COLORS_TO_GENERATE));\n    }\n    // Otherwise, adjust the colors to be compliant\n    var newColors = adjustColors(color13, color23);\n    // Generate additional compliant colors\n    var generatedColors = generateAdditionalColors(newColors[0], newColors[1], COLORS_TO_GENERATE);\n    return newColors.concat(generatedColors);\n}\nvar color1 = \"#000000\";\nvar color2 = \"#FFFFFF\";\nvar ref = _slicedToArray(generateCompliantColors(color1, color2), 4), compliant1 = ref[0], compliant2 = ref[1], compliant3 = ref[2], compliant4 = ref[3];\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant1\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant2\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant3\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant4\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n        lineNumber: 141,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRSxNQUFJOzs7OztvQkFBUzs7Ozs7O1lBQ3pELENBQ047Q0FDSDtBQVR1QkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAvLyBDb252ZXJ0IGhleCBjb2xvciB0byBSR0IgdmFsdWVzXG4gIGNvbnNvbGUubG9nKGhleCk7XG5cbiAgaGV4ID0gaGV4LnJlcGxhY2UoL14jLywgJycpO1xuICBsZXQgciwgZywgYjtcblxuICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgIHIgPSBwYXJzZUludChoZXhbMF0gKyBoZXhbMF0sIDE2KTtcbiAgICBnID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNik7XG4gICAgYiA9IHBhcnNlSW50KGhleFsyXSArIGhleFsyXSwgMTYpO1xuICB9IGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDYpIHtcbiAgICByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpO1xuICAgIGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNik7XG4gICAgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IGNvbG9yOiAnICsgaGV4KTtcbiAgfVxuXG4gIHJldHVybiBbciwgZywgYl07XG59XG5mdW5jdGlvbiBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IpIHtcbiAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIGx1bWluYW5jZSBvZiBhbiBSR0IgY29sb3JcbiAgY29uc3Qgc3JnYiA9IHJnYi5tYXAoKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcyA9IHZhbHVlIC8gMjU1O1xuICAgIHJldHVybiBzIDw9IDAuMDM5MjggPyBzIC8gMTIuOTIgOiAoKHMgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40O1xuICB9KTtcblxuICBjb25zdCBbciwgZywgYl0gPSBzcmdiO1xuICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xufVxuZnVuY3Rpb24gZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjEsIGNvbG9yMikge1xuICAvLyBDYWxjdWxhdGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzXG4gIGNvbnN0IHJnYjEgPSBoZXhUb1JnYihjb2xvcjEpO1xuICBjb25zdCByZ2IyID0gaGV4VG9SZ2IoY29sb3IyKTtcbiAgY29uc3QgbHVtaW5hbmNlMSA9IGdldFJlbGF0aXZlTHVtaW5hbmNlKHJnYjEpO1xuICBjb25zdCBsdW1pbmFuY2UyID0gZ2V0UmVsYXRpdmVMdW1pbmFuY2UocmdiMik7XG4gIGNvbnN0IGNvbnRyYXN0UmF0aW8gPVxuICAgIChNYXRoLm1heChsdW1pbmFuY2UxLCBsdW1pbmFuY2UyKSArIDAuMDUpIC9cbiAgICAoTWF0aC5taW4obHVtaW5hbmNlMSwgbHVtaW5hbmNlMikgKyAwLjA1KTtcblxuICByZXR1cm4gY29udHJhc3RSYXRpbztcbn1cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQWRkaXRpb25hbENvbG9ycyhjb2xvcjEsIGNvbG9yMiwgbnVtQ29sb3JzKSB7XG4gIGNvbnN0IGFkZGl0aW9uYWxDb2xvcnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yczsgaSsrKSB7XG4gICAgbGV0IGNvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcblxuICAgIC8vIHdoaWxlIChcbiAgICAvLyAgIGdldENvbnRyYXN0UmF0aW8oY29sb3IsIGNvbG9yMSkgPCA0LjUgfHxcbiAgICAvLyAgIGdldENvbnRyYXN0UmF0aW8oY29sb3IsIGNvbG9yMikgPCA0LjVcbiAgICAvLyApIHtcbiAgICAvLyAgIGNvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICAvLyB9XG5cbiAgICBhZGRpdGlvbmFsQ29sb3JzLnB1c2goY29sb3IpO1xuICB9XG5cbiAgcmV0dXJuIGFkZGl0aW9uYWxDb2xvcnM7XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvbG9ycyhjb2xvcjEsIGNvbG9yMikge1xuICBjb25zdCB0YXJnZXRDb250cmFzdFJhdGlvID0gNC41O1xuICBsZXQgY29sb3IxQXJyYXkgPSBoZXhUb1JnYihjb2xvcjEpO1xuICBsZXQgY29sb3IyQXJyYXkgPSBoZXhUb1JnYihjb2xvcjIpO1xuICBsZXQgYWRqdXN0ZWRDb2xvcjtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGNvbG9ycyB1bnRpbCB0aGV5IGFyZSBjb21wbGlhbnRcbiAgd2hpbGUgKGdldENvbnRyYXN0UmF0aW8oY29sb3IxQXJyYXksIGNvbG9yMkFycmF5KSA8IHRhcmdldENvbnRyYXN0UmF0aW8pIHtcbiAgICAvLyBBZGp1c3QgdGhlIGNvbG9yIHdpdGggdGhlIGxvd2VyIGx1bWluYW5jZVxuICAgIGlmIChnZXRSZWxhdGl2ZUx1bWluYW5jZShjb2xvcjFBcnJheSkgPiBnZXRSZWxhdGl2ZUx1bWluYW5jZShjb2xvcjJBcnJheSkpIHtcbiAgICAgIGFkanVzdGVkQ29sb3IgPSBhZGp1c3RDb2xvcihjb2xvcjFBcnJheSk7XG4gICAgICBjb2xvcjFBcnJheSA9IGFkanVzdGVkQ29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkanVzdGVkQ29sb3IgPSBhZGp1c3RDb2xvcihjb2xvcjJBcnJheSk7XG4gICAgICBjb2xvcjJBcnJheSA9IGFkanVzdGVkQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgYWRqdXN0ZWQgY29sb3JzIGJhY2sgdG8gaGV4XG4gIGNvbnN0IGFkanVzdGVkQ29sb3IxID0gcmdiVG9IZXgoXG4gICAgY29sb3IxQXJyYXlbMF0sXG4gICAgY29sb3IxQXJyYXlbMV0sXG4gICAgY29sb3IxQXJyYXlbMl1cbiAgKTtcbiAgY29uc3QgYWRqdXN0ZWRDb2xvcjIgPSByZ2JUb0hleChcbiAgICBjb2xvcjJBcnJheVswXSxcbiAgICBjb2xvcjJBcnJheVsxXSxcbiAgICBjb2xvcjJBcnJheVsyXVxuICApO1xuXG4gIHJldHVybiBbYWRqdXN0ZWRDb2xvcjEsIGFkanVzdGVkQ29sb3IyXTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb21wbGlhbnRDb2xvcnMoY29sb3IxLCBjb2xvcjIsIG51bUNvbG9ycyA9IDQpIHtcbiAgY29uc3QgTUlOX0NPTlRSQVNUX1JBVElPID0gNC41O1xuICBjb25zdCBDT0xPUlNfVE9fR0VORVJBVEUgPSBudW1Db2xvcnMgLSAyO1xuXG4gIC8vIENoZWNrIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gY29sb3JzIDEgYW5kIDJcbiAgY29uc3QgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0UmF0aW8oY29sb3IxLCBjb2xvcjIpO1xuXG4gIC8vIElmIGNvbG9ycyBhcmUgYWxyZWFkeSBjb21wbGlhbnQsIHJldHVybiB0aGUgb3JpZ2luYWwgY29sb3JzXG4gIGlmIChjb250cmFzdFJhdGlvID49IE1JTl9DT05UUkFTVF9SQVRJTykge1xuICAgIHJldHVybiBbY29sb3IxLCBjb2xvcjJdLmNvbmNhdChcbiAgICAgIGdlbmVyYXRlQWRkaXRpb25hbENvbG9ycyhjb2xvcjEsIGNvbG9yMiwgQ09MT1JTX1RPX0dFTkVSQVRFKVxuICAgICk7XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIGFkanVzdCB0aGUgY29sb3JzIHRvIGJlIGNvbXBsaWFudFxuICBjb25zdCBuZXdDb2xvcnMgPSBhZGp1c3RDb2xvcnMoY29sb3IxLCBjb2xvcjIpO1xuXG4gIC8vIEdlbmVyYXRlIGFkZGl0aW9uYWwgY29tcGxpYW50IGNvbG9yc1xuICBjb25zdCBnZW5lcmF0ZWRDb2xvcnMgPSBnZW5lcmF0ZUFkZGl0aW9uYWxDb2xvcnMoXG4gICAgbmV3Q29sb3JzWzBdLFxuICAgIG5ld0NvbG9yc1sxXSxcbiAgICBDT0xPUlNfVE9fR0VORVJBVEVcbiAgKTtcblxuICByZXR1cm4gbmV3Q29sb3JzLmNvbmNhdChnZW5lcmF0ZWRDb2xvcnMpO1xufVxuXG5jb25zdCBjb2xvcjEgPSAnIzAwMDAwMCc7XG5jb25zdCBjb2xvcjIgPSAnI0ZGRkZGRic7XG5cbmNvbnN0IFtjb21wbGlhbnQxLCBjb21wbGlhbnQyLCBjb21wbGlhbnQzLCBjb21wbGlhbnQ0XSA9XG4gIGdlbmVyYXRlQ29tcGxpYW50Q29sb3JzKGNvbG9yMSwgY29sb3IyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbXBsaWFudDEgfX0+dGVzdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbXBsaWFudDIgfX0+dGVzdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbXBsaWFudDMgfX0+dGVzdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbXBsaWFudDQgfX0+dGVzdDwvYnV0dG9uPlxuICAgIDwvQXBwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwcCIsImhleFRvUmdiIiwiaGV4IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJyIiwiZyIsImIiLCJsZW5ndGgiLCJwYXJzZUludCIsInN1YnN0ciIsIkVycm9yIiwiZ2V0UmVsYXRpdmVMdW1pbmFuY2UiLCJyZ2IiLCJzcmdiIiwibWFwIiwidmFsdWUiLCJzIiwiZ2V0Q29udHJhc3RSYXRpbyIsImNvbG9yMSIsImNvbG9yMiIsInJnYjEiLCJyZ2IyIiwibHVtaW5hbmNlMSIsImx1bWluYW5jZTIiLCJjb250cmFzdFJhdGlvIiwiTWF0aCIsIm1heCIsIm1pbiIsImdldFJhbmRvbUNvbG9yIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImdlbmVyYXRlQWRkaXRpb25hbENvbG9ycyIsIm51bUNvbG9ycyIsImFkZGl0aW9uYWxDb2xvcnMiLCJpIiwiY29sb3IiLCJwdXNoIiwiYWRqdXN0Q29sb3JzIiwidGFyZ2V0Q29udHJhc3RSYXRpbyIsImNvbG9yMUFycmF5IiwiY29sb3IyQXJyYXkiLCJhZGp1c3RlZENvbG9yIiwiYWRqdXN0Q29sb3IiLCJhZGp1c3RlZENvbG9yMSIsInJnYlRvSGV4IiwiYWRqdXN0ZWRDb2xvcjIiLCJnZW5lcmF0ZUNvbXBsaWFudENvbG9ycyIsIk1JTl9DT05UUkFTVF9SQVRJTyIsIkNPTE9SU19UT19HRU5FUkFURSIsImNvbmNhdCIsIm5ld0NvbG9ycyIsImdlbmVyYXRlZENvbG9ycyIsImNvbXBsaWFudDEiLCJjb21wbGlhbnQyIiwiY29tcGxpYW50MyIsImNvbXBsaWFudDQiLCJIb21lIiwiYnV0dG9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});