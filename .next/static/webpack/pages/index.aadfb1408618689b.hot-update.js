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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App/index.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button/index.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction hexToRgb(hex) {\n    // Convert hex color to RGB values\n    hex = hex.replace(/^#/, \"\");\n    var r, g, b;\n    if (hex.length === 3) {\n        r = parseInt(hex[0] + hex[0], 16);\n        g = parseInt(hex[1] + hex[1], 16);\n        b = parseInt(hex[2] + hex[2], 16);\n    } else if (hex.length === 6) {\n        r = parseInt(hex.substr(0, 2), 16);\n        g = parseInt(hex.substr(2, 2), 16);\n        b = parseInt(hex.substr(4, 2), 16);\n    } else {\n        throw new Error(\"Invalid hex color: \" + hex);\n    }\n    return [\n        r,\n        g,\n        b\n    ];\n}\nfunction getRelativeLuminance(rgb) {\n    // Calculate relative luminance of an RGB color\n    var srgb = rgb.map(function(value) {\n        var s = value / 255;\n        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);\n    });\n    var _srgb = _slicedToArray(srgb, 3), r = _srgb[0], g = _srgb[1], b = _srgb[2];\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\nfunction getContrastRatio(color11, color21) {\n    // Calculate contrast ratio between two colors\n    var rgb1 = hexToRgb(color11);\n    var rgb2 = hexToRgb(color21);\n    var luminance1 = getRelativeLuminance(rgb1);\n    var luminance2 = getRelativeLuminance(rgb2);\n    var contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);\n    return contrastRatio;\n}\nfunction getRandomColor() {\n    return \"#\" + Math.floor(Math.random() * 16777215).toString(16);\n}\nfunction generateAdditionalColors(color12, color22, numColors) {\n    var additionalColors = [];\n    for(var i = 0; i < numColors; i++){\n        var color = getRandomColor();\n        while(getContrastRatio(color, color12) < 4.5 || getContrastRatio(color, color22) < 4.5){\n            color = getRandomColor();\n        }\n        additionalColors.push(color);\n    }\n    return additionalColors;\n}\nfunction adjustColors(color13, color23) {\n    var targetContrastRatio = 4.5;\n    var color1Array = hexToRgb(color13);\n    var color2Array = hexToRgb(color23);\n    var adjustedColor;\n    // Loop through the colors until they are compliant\n    while(getContrastRatio(color1Array, color2Array) < targetContrastRatio){\n        // Adjust the color with the lower luminance\n        if (getRelativeLuminance(color1Array) > getRelativeLuminance(color2Array)) {\n            adjustedColor = adjustColor(color1Array);\n            color1Array = adjustedColor;\n        } else {\n            adjustedColor = adjustColor(color2Array);\n            color2Array = adjustedColor;\n        }\n    }\n    // Convert the adjusted colors back to hex\n    var adjustedColor1 = rgbToHex(color1Array[0], color1Array[1], color1Array[2]);\n    var adjustedColor2 = rgbToHex(color2Array[0], color2Array[1], color2Array[2]);\n    return [\n        adjustedColor1,\n        adjustedColor2\n    ];\n}\nfunction generateCompliantColors(color14, color24) {\n    var numColors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;\n    var MIN_CONTRAST_RATIO = 4.5;\n    var COLORS_TO_GENERATE = numColors - 2;\n    // Check contrast ratio between colors 1 and 2\n    var contrastRatio = getContrastRatio(color14, color24);\n    // If colors are already compliant, return the original colors\n    if (contrastRatio >= MIN_CONTRAST_RATIO) {\n        return [\n            color14,\n            color24\n        ].concat(generateAdditionalColors(color14, color24, COLORS_TO_GENERATE));\n    }\n    // Otherwise, adjust the colors to be compliant\n    var newColors = adjustColors(color14, color24);\n    // Generate additional compliant colors\n    var generatedColors = generateAdditionalColors(newColors[0], newColors[1], COLORS_TO_GENERATE);\n    return newColors.concat(generatedColors);\n}\nvar color1 = \"#212121\";\nvar color2 = \"#FFFFFF\";\nvar compliantColors = generateCompliantColors(color1, color2);\nconsole.log(compliantColors);\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: \"Test\"\n        }, void 0, false, {\n            fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n            lineNumber: 143,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUVDLE9BQU07U0FBQyxDQUFDK0IsTUFBTSxDQUM1QmxCLHdCQUF3QixDQUFDZCxPQUFNLEVBQUVDLE9BQU0sRUFBRThCLGtCQUFrQixDQUFDLENBQzdELENBQUM7S0FDSDtJQUVELCtDQUErQztJQUMvQyxJQUFNRSxTQUFTLEdBQUdiLFlBQVksQ0FBQ3BCLE9BQU0sRUFBRUMsT0FBTSxDQUFDO0lBRTlDLHVDQUF1QztJQUN2QyxJQUFNaUMsZUFBZSxHQUFHcEIsd0JBQXdCLENBQzlDbUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNaQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ1pGLGtCQUFrQixDQUNuQjtJQUVELE9BQU9FLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDRSxlQUFlLENBQUMsQ0FBQztDQUMxQztBQUVELElBQU1sQyxNQUFNLEdBQUcsU0FBUztBQUN4QixJQUFNQyxNQUFNLEdBQUcsU0FBUztBQUV4QixJQUFNa0MsZUFBZSxHQUFHTix1QkFBdUIsQ0FBQzdCLE1BQU0sRUFBRUMsTUFBTSxDQUFDO0FBQy9EbUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGVBQWUsQ0FBQyxDQUFDO0FBQ2QsU0FBU0csSUFBSSxHQUFHO0lBQzdCLHFCQUNFLDhEQUFDekQsdURBQUc7a0JBQ0YsNEVBQUNDLDBEQUFNO3NCQUFDLE1BQUk7Ozs7O2dCQUFTOzs7OztZQUNqQixDQUNOO0NBQ0g7QUFOdUJ3RCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIC8vIENvbnZlcnQgaGV4IGNvbG9yIHRvIFJHQiB2YWx1ZXNcblxuICBoZXggPSBoZXgucmVwbGFjZSgvXiMvLCAnJyk7XG5cbiAgbGV0IHIsIGcsIGI7XG5cbiAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICByID0gcGFyc2VJbnQoaGV4WzBdICsgaGV4WzBdLCAxNik7XG4gICAgZyA9IHBhcnNlSW50KGhleFsxXSArIGhleFsxXSwgMTYpO1xuICAgIGIgPSBwYXJzZUludChoZXhbMl0gKyBoZXhbMl0sIDE2KTtcbiAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA2KSB7XG4gICAgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KTtcbiAgICBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpO1xuICAgIGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBjb2xvcjogJyArIGhleCk7XG4gIH1cblxuICByZXR1cm4gW3IsIGcsIGJdO1xufVxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVMdW1pbmFuY2UocmdiKSB7XG4gIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBsdW1pbmFuY2Ugb2YgYW4gUkdCIGNvbG9yXG4gIGNvbnN0IHNyZ2IgPSByZ2IubWFwKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHMgPSB2YWx1ZSAvIDI1NTtcbiAgICByZXR1cm4gcyA8PSAwLjAzOTI4ID8gcyAvIDEyLjkyIDogKChzICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNDtcbiAgfSk7XG5cbiAgY29uc3QgW3IsIGcsIGJdID0gc3JnYjtcbiAgcmV0dXJuIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjtcbn1cbmZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oY29sb3IxLCBjb2xvcjIpIHtcbiAgLy8gQ2FsY3VsYXRlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9yc1xuICBjb25zdCByZ2IxID0gaGV4VG9SZ2IoY29sb3IxKTtcbiAgY29uc3QgcmdiMiA9IGhleFRvUmdiKGNvbG9yMik7XG4gIGNvbnN0IGx1bWluYW5jZTEgPSBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IxKTtcbiAgY29uc3QgbHVtaW5hbmNlMiA9IGdldFJlbGF0aXZlTHVtaW5hbmNlKHJnYjIpO1xuICBjb25zdCBjb250cmFzdFJhdGlvID1cbiAgICAoTWF0aC5tYXgobHVtaW5hbmNlMSwgbHVtaW5hbmNlMikgKyAwLjA1KSAvXG4gICAgKE1hdGgubWluKGx1bWluYW5jZTEsIGx1bWluYW5jZTIpICsgMC4wNSk7XG5cbiAgcmV0dXJuIGNvbnRyYXN0UmF0aW87XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzKGNvbG9yMSwgY29sb3IyLCBudW1Db2xvcnMpIHtcbiAgY29uc3QgYWRkaXRpb25hbENvbG9ycyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JzOyBpKyspIHtcbiAgICBsZXQgY29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xuXG4gICAgd2hpbGUgKFxuICAgICAgZ2V0Q29udHJhc3RSYXRpbyhjb2xvciwgY29sb3IxKSA8IDQuNSB8fFxuICAgICAgZ2V0Q29udHJhc3RSYXRpbyhjb2xvciwgY29sb3IyKSA8IDQuNVxuICAgICkge1xuICAgICAgY29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xuICAgIH1cblxuICAgIGFkZGl0aW9uYWxDb2xvcnMucHVzaChjb2xvcik7XG4gIH1cblxuICByZXR1cm4gYWRkaXRpb25hbENvbG9ycztcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29sb3JzKGNvbG9yMSwgY29sb3IyKSB7XG4gIGNvbnN0IHRhcmdldENvbnRyYXN0UmF0aW8gPSA0LjU7XG4gIGxldCBjb2xvcjFBcnJheSA9IGhleFRvUmdiKGNvbG9yMSk7XG4gIGxldCBjb2xvcjJBcnJheSA9IGhleFRvUmdiKGNvbG9yMik7XG4gIGxldCBhZGp1c3RlZENvbG9yO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgY29sb3JzIHVudGlsIHRoZXkgYXJlIGNvbXBsaWFudFxuICB3aGlsZSAoZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjFBcnJheSwgY29sb3IyQXJyYXkpIDwgdGFyZ2V0Q29udHJhc3RSYXRpbykge1xuICAgIC8vIEFkanVzdCB0aGUgY29sb3Igd2l0aCB0aGUgbG93ZXIgbHVtaW5hbmNlXG4gICAgaWYgKGdldFJlbGF0aXZlTHVtaW5hbmNlKGNvbG9yMUFycmF5KSA+IGdldFJlbGF0aXZlTHVtaW5hbmNlKGNvbG9yMkFycmF5KSkge1xuICAgICAgYWRqdXN0ZWRDb2xvciA9IGFkanVzdENvbG9yKGNvbG9yMUFycmF5KTtcbiAgICAgIGNvbG9yMUFycmF5ID0gYWRqdXN0ZWRDb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRqdXN0ZWRDb2xvciA9IGFkanVzdENvbG9yKGNvbG9yMkFycmF5KTtcbiAgICAgIGNvbG9yMkFycmF5ID0gYWRqdXN0ZWRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBhZGp1c3RlZCBjb2xvcnMgYmFjayB0byBoZXhcbiAgY29uc3QgYWRqdXN0ZWRDb2xvcjEgPSByZ2JUb0hleChcbiAgICBjb2xvcjFBcnJheVswXSxcbiAgICBjb2xvcjFBcnJheVsxXSxcbiAgICBjb2xvcjFBcnJheVsyXVxuICApO1xuICBjb25zdCBhZGp1c3RlZENvbG9yMiA9IHJnYlRvSGV4KFxuICAgIGNvbG9yMkFycmF5WzBdLFxuICAgIGNvbG9yMkFycmF5WzFdLFxuICAgIGNvbG9yMkFycmF5WzJdXG4gICk7XG5cbiAgcmV0dXJuIFthZGp1c3RlZENvbG9yMSwgYWRqdXN0ZWRDb2xvcjJdO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXBsaWFudENvbG9ycyhjb2xvcjEsIGNvbG9yMiwgbnVtQ29sb3JzID0gNCkge1xuICBjb25zdCBNSU5fQ09OVFJBU1RfUkFUSU8gPSA0LjU7XG4gIGNvbnN0IENPTE9SU19UT19HRU5FUkFURSA9IG51bUNvbG9ycyAtIDI7XG5cbiAgLy8gQ2hlY2sgY29udHJhc3QgcmF0aW8gYmV0d2VlbiBjb2xvcnMgMSBhbmQgMlxuICBjb25zdCBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjEsIGNvbG9yMik7XG5cbiAgLy8gSWYgY29sb3JzIGFyZSBhbHJlYWR5IGNvbXBsaWFudCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBjb2xvcnNcbiAgaWYgKGNvbnRyYXN0UmF0aW8gPj0gTUlOX0NPTlRSQVNUX1JBVElPKSB7XG4gICAgcmV0dXJuIFtjb2xvcjEsIGNvbG9yMl0uY29uY2F0KFxuICAgICAgZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzKGNvbG9yMSwgY29sb3IyLCBDT0xPUlNfVE9fR0VORVJBVEUpXG4gICAgKTtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSwgYWRqdXN0IHRoZSBjb2xvcnMgdG8gYmUgY29tcGxpYW50XG4gIGNvbnN0IG5ld0NvbG9ycyA9IGFkanVzdENvbG9ycyhjb2xvcjEsIGNvbG9yMik7XG5cbiAgLy8gR2VuZXJhdGUgYWRkaXRpb25hbCBjb21wbGlhbnQgY29sb3JzXG4gIGNvbnN0IGdlbmVyYXRlZENvbG9ycyA9IGdlbmVyYXRlQWRkaXRpb25hbENvbG9ycyhcbiAgICBuZXdDb2xvcnNbMF0sXG4gICAgbmV3Q29sb3JzWzFdLFxuICAgIENPTE9SU19UT19HRU5FUkFURVxuICApO1xuXG4gIHJldHVybiBuZXdDb2xvcnMuY29uY2F0KGdlbmVyYXRlZENvbG9ycyk7XG59XG5cbmNvbnN0IGNvbG9yMSA9ICcjMjEyMTIxJztcbmNvbnN0IGNvbG9yMiA9ICcjRkZGRkZGJztcblxuY29uc3QgY29tcGxpYW50Q29sb3JzID0gZ2VuZXJhdGVDb21wbGlhbnRDb2xvcnMoY29sb3IxLCBjb2xvcjIpO1xuY29uc29sZS5sb2coY29tcGxpYW50Q29sb3JzKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcD5cbiAgICAgIDxCdXR0b24+VGVzdDwvQnV0dG9uPlxuICAgIDwvQXBwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwcCIsIkJ1dHRvbiIsImhleFRvUmdiIiwiaGV4IiwicmVwbGFjZSIsInIiLCJnIiwiYiIsImxlbmd0aCIsInBhcnNlSW50Iiwic3Vic3RyIiwiRXJyb3IiLCJnZXRSZWxhdGl2ZUx1bWluYW5jZSIsInJnYiIsInNyZ2IiLCJtYXAiLCJ2YWx1ZSIsInMiLCJnZXRDb250cmFzdFJhdGlvIiwiY29sb3IxIiwiY29sb3IyIiwicmdiMSIsInJnYjIiLCJsdW1pbmFuY2UxIiwibHVtaW5hbmNlMiIsImNvbnRyYXN0UmF0aW8iLCJNYXRoIiwibWF4IiwibWluIiwiZ2V0UmFuZG9tQ29sb3IiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzIiwibnVtQ29sb3JzIiwiYWRkaXRpb25hbENvbG9ycyIsImkiLCJjb2xvciIsInB1c2giLCJhZGp1c3RDb2xvcnMiLCJ0YXJnZXRDb250cmFzdFJhdGlvIiwiY29sb3IxQXJyYXkiLCJjb2xvcjJBcnJheSIsImFkanVzdGVkQ29sb3IiLCJhZGp1c3RDb2xvciIsImFkanVzdGVkQ29sb3IxIiwicmdiVG9IZXgiLCJhZGp1c3RlZENvbG9yMiIsImdlbmVyYXRlQ29tcGxpYW50Q29sb3JzIiwiTUlOX0NPTlRSQVNUX1JBVElPIiwiQ09MT1JTX1RPX0dFTkVSQVRFIiwiY29uY2F0IiwibmV3Q29sb3JzIiwiZ2VuZXJhdGVkQ29sb3JzIiwiY29tcGxpYW50Q29sb3JzIiwiY29uc29sZSIsImxvZyIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});