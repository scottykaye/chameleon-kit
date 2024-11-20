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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nfunction hexToRgb(hex) {\n    // Convert hex color to RGB values\n    console.log(hex);\n    hex = hex.replace(/^#/, \"\");\n    var r, g, b;\n    if (hex.length === 3) {\n        r = parseInt(hex[0] + hex[0], 16);\n        g = parseInt(hex[1] + hex[1], 16);\n        b = parseInt(hex[2] + hex[2], 16);\n    } else if (hex.length === 6) {\n        r = parseInt(hex.substr(0, 2), 16);\n        g = parseInt(hex.substr(2, 2), 16);\n        b = parseInt(hex.substr(4, 2), 16);\n    } else {\n        throw new Error(\"Invalid hex color: \" + hex);\n    }\n    return [\n        r,\n        g,\n        b\n    ];\n}\nfunction getRelativeLuminance(rgb) {\n    // Calculate relative luminance of an RGB color\n    var srgb = rgb.map(function(value) {\n        var s = value / 255;\n        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);\n    });\n    var _srgb = _slicedToArray(srgb, 3), r = _srgb[0], g = _srgb[1], b = _srgb[2];\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\nfunction getContrastRatio(color11, color21) {\n    // Calculate contrast ratio between two colors\n    var rgb1 = hexToRgb(color11);\n    var rgb2 = hexToRgb(color21);\n    var luminance1 = getRelativeLuminance(rgb1);\n    var luminance2 = getRelativeLuminance(rgb2);\n    var contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);\n    return contrastRatio;\n}\nfunction getRandomColor() {\n    return \"#\" + Math.floor(Math.random() * 16777215).toString(16);\n}\nfunction adjustColors(color12, color22) {\n    var targetContrastRatio = 4.5;\n    var color1Array = hexToRgb(color12);\n    var color2Array = hexToRgb(color22);\n    var adjustedColor;\n    // Loop through the colors until they are compliant\n    while(getContrastRatio(color1Array, color2Array) < targetContrastRatio){\n        // Adjust the color with the lower luminance\n        if (getRelativeLuminance(color1Array) > getRelativeLuminance(color2Array)) {\n            adjustedColor = adjustColor(color1Array);\n            color1Array = adjustedColor;\n        } else {\n            adjustedColor = adjustColor(color2Array);\n            color2Array = adjustedColor;\n        }\n    }\n    // Convert the adjusted colors back to hex\n    var adjustedColor1 = rgbToHex(color1Array[0], color1Array[1], color1Array[2]);\n    var adjustedColor2 = rgbToHex(color2Array[0], color2Array[1], color2Array[2]);\n    return [\n        adjustedColor1,\n        adjustedColor2\n    ];\n}\nvar generatedColors = [];\nfunction generateCompliantColors(textColor, bgColor, numColors) {\n    var MIN_CONTRAST_RATIO = 4.5;\n    var TEXT_COLORS_TO_GENERATE = 2;\n    var BG_COLORS_TO_GENERATE = 2;\n    var TOTAL_COLORS_TO_GENERATE = TEXT_COLORS_TO_GENERATE + BG_COLORS_TO_GENERATE;\n    var COLORS_TO_GENERATE = numColors - TOTAL_COLORS_TO_GENERATE;\n    // Check contrast ratio between text color and background color\n    var contrastRatio = getContrastRatio(textColor, bgColor);\n    // If text and background colors are already compliant, return the original colors\n    if (contrastRatio >= MIN_CONTRAST_RATIO) {\n        var textColors = generateAdditionalColors(textColor, bgColor, TEXT_COLORS_TO_GENERATE, \"text\");\n        var bgColors = generateAdditionalColors(textColor, bgColor, BG_COLORS_TO_GENERATE, \"bg\");\n        return {\n            textColor1: textColors[0],\n            textColor2: textColors[1],\n            bgColor1: bgColors[0],\n            bgColor2: bgColors[1]\n        };\n    }\n    // Otherwise, adjust the colors to be compliant\n    var newColors = adjustColors(textColor, bgColor);\n    // Generate additional compliant colors\n    var generatedTextColors = generateAdditionalColors(newColors[0], newColors[1], TEXT_COLORS_TO_GENERATE, \"text\");\n    var generatedBgColors = generateAdditionalColors(newColors[0], newColors[1], BG_COLORS_TO_GENERATE, \"bg\");\n    // Add the generated colors to the array and return the object with the colors\n    generatedColors = _toConsumableArray(generatedTextColors).concat(_toConsumableArray(generatedBgColors));\n    return {\n        textColor1: newColors[0],\n        textColor2: newColors[1],\n        bgColor1: generatedBgColors[0].color,\n        bgColor2: generatedBgColors[1].color\n    };\n}\nfunction generateAdditionalColors(color13, color23, numColors, type) {\n    var additionalColors = [];\n    for(var i = 0; i < numColors; i++){\n        var color = void 0;\n        if (generatedColors.length > 0) {\n            // If there are generated colors, use the first color in the array\n            var generatedColor = generatedColors.shift();\n            color = generatedColor.color;\n        } else {\n            // Otherwise, generate a new random color\n            color = getRandomColor();\n        }\n        while(getContrastRatio(color, color13) < 4.5 || getContrastRatio(color, color23) < 4.5){\n            color = getRandomColor();\n        }\n        additionalColors.push({\n            color: color,\n            type: type\n        });\n    }\n    return additionalColors;\n}\nvar color1 = \"#000000\";\nvar color2 = \"#FFFFFF\";\n// Generate compliant colors and store them in an object\nvar colors = generateCompliantColors(\"#333\", \"#f5f5f5\", 6);\n// Do something with the generated colors\nconsole.log(colors);\n// Generate more compliant colors and store them in an object\nvar moreColors = generateCompliantColors(\"#333\", \"#f5f5f5\", 6);\n// Do something with the new generated colors\nconsole.log(moreColors);\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant1\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 199,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant2\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 200,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant3\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant4\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 202,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n        lineNumber: 198,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29CQUFTOzBCQUM3RCw4REFBQ0gsUUFBTTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxlQUFlLEVBQUVFLFVBQVU7aUJBQUU7MEJBQUUsTUFBSTs7Ozs7b0JBQVM7MEJBQzdELDhEQUFDSixRQUFNO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLGVBQWUsRUFBRUcsVUFBVTtpQkFBRTswQkFBRSxNQUFJOzs7OztvQkFBUzswQkFDN0QsOERBQUNMLFFBQU07Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsZUFBZSxFQUFFSSxVQUFVO2lCQUFFOzBCQUFFLE1BQUk7Ozs7O29CQUFTOzs7Ozs7WUFDekQsQ0FDTjtDQUNIO0FBVHVCUCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIC8vIENvbnZlcnQgaGV4IGNvbG9yIHRvIFJHQiB2YWx1ZXNcbiAgY29uc29sZS5sb2coaGV4KTtcblxuICBoZXggPSBoZXgucmVwbGFjZSgvXiMvLCAnJyk7XG4gIGxldCByLCBnLCBiO1xuXG4gIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgciA9IHBhcnNlSW50KGhleFswXSArIGhleFswXSwgMTYpO1xuICAgIGcgPSBwYXJzZUludChoZXhbMV0gKyBoZXhbMV0sIDE2KTtcbiAgICBiID0gcGFyc2VJbnQoaGV4WzJdICsgaGV4WzJdLCAxNik7XG4gIH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNikge1xuICAgIHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggY29sb3I6ICcgKyBoZXgpO1xuICB9XG5cbiAgcmV0dXJuIFtyLCBnLCBiXTtcbn1cbmZ1bmN0aW9uIGdldFJlbGF0aXZlTHVtaW5hbmNlKHJnYikge1xuICAvLyBDYWxjdWxhdGUgcmVsYXRpdmUgbHVtaW5hbmNlIG9mIGFuIFJHQiBjb2xvclxuICBjb25zdCBzcmdiID0gcmdiLm1hcCgodmFsdWUpID0+IHtcbiAgICBjb25zdCBzID0gdmFsdWUgLyAyNTU7XG4gICAgcmV0dXJuIHMgPD0gMC4wMzkyOCA/IHMgLyAxMi45MiA6ICgocyArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQ7XG4gIH0pO1xuXG4gIGNvbnN0IFtyLCBnLCBiXSA9IHNyZ2I7XG4gIHJldHVybiAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGI7XG59XG5mdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGNvbG9yMSwgY29sb3IyKSB7XG4gIC8vIENhbGN1bGF0ZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnNcbiAgY29uc3QgcmdiMSA9IGhleFRvUmdiKGNvbG9yMSk7XG4gIGNvbnN0IHJnYjIgPSBoZXhUb1JnYihjb2xvcjIpO1xuICBjb25zdCBsdW1pbmFuY2UxID0gZ2V0UmVsYXRpdmVMdW1pbmFuY2UocmdiMSk7XG4gIGNvbnN0IGx1bWluYW5jZTIgPSBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IyKTtcbiAgY29uc3QgY29udHJhc3RSYXRpbyA9XG4gICAgKE1hdGgubWF4KGx1bWluYW5jZTEsIGx1bWluYW5jZTIpICsgMC4wNSkgL1xuICAgIChNYXRoLm1pbihsdW1pbmFuY2UxLCBsdW1pbmFuY2UyKSArIDAuMDUpO1xuXG4gIHJldHVybiBjb250cmFzdFJhdGlvO1xufVxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBhZGp1c3RDb2xvcnMoY29sb3IxLCBjb2xvcjIpIHtcbiAgY29uc3QgdGFyZ2V0Q29udHJhc3RSYXRpbyA9IDQuNTtcbiAgbGV0IGNvbG9yMUFycmF5ID0gaGV4VG9SZ2IoY29sb3IxKTtcbiAgbGV0IGNvbG9yMkFycmF5ID0gaGV4VG9SZ2IoY29sb3IyKTtcbiAgbGV0IGFkanVzdGVkQ29sb3I7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBjb2xvcnMgdW50aWwgdGhleSBhcmUgY29tcGxpYW50XG4gIHdoaWxlIChnZXRDb250cmFzdFJhdGlvKGNvbG9yMUFycmF5LCBjb2xvcjJBcnJheSkgPCB0YXJnZXRDb250cmFzdFJhdGlvKSB7XG4gICAgLy8gQWRqdXN0IHRoZSBjb2xvciB3aXRoIHRoZSBsb3dlciBsdW1pbmFuY2VcbiAgICBpZiAoZ2V0UmVsYXRpdmVMdW1pbmFuY2UoY29sb3IxQXJyYXkpID4gZ2V0UmVsYXRpdmVMdW1pbmFuY2UoY29sb3IyQXJyYXkpKSB7XG4gICAgICBhZGp1c3RlZENvbG9yID0gYWRqdXN0Q29sb3IoY29sb3IxQXJyYXkpO1xuICAgICAgY29sb3IxQXJyYXkgPSBhZGp1c3RlZENvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGp1c3RlZENvbG9yID0gYWRqdXN0Q29sb3IoY29sb3IyQXJyYXkpO1xuICAgICAgY29sb3IyQXJyYXkgPSBhZGp1c3RlZENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGFkanVzdGVkIGNvbG9ycyBiYWNrIHRvIGhleFxuICBjb25zdCBhZGp1c3RlZENvbG9yMSA9IHJnYlRvSGV4KFxuICAgIGNvbG9yMUFycmF5WzBdLFxuICAgIGNvbG9yMUFycmF5WzFdLFxuICAgIGNvbG9yMUFycmF5WzJdXG4gICk7XG4gIGNvbnN0IGFkanVzdGVkQ29sb3IyID0gcmdiVG9IZXgoXG4gICAgY29sb3IyQXJyYXlbMF0sXG4gICAgY29sb3IyQXJyYXlbMV0sXG4gICAgY29sb3IyQXJyYXlbMl1cbiAgKTtcblxuICByZXR1cm4gW2FkanVzdGVkQ29sb3IxLCBhZGp1c3RlZENvbG9yMl07XG59XG5cbmxldCBnZW5lcmF0ZWRDb2xvcnMgPSBbXTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb21wbGlhbnRDb2xvcnModGV4dENvbG9yLCBiZ0NvbG9yLCBudW1Db2xvcnMpIHtcbiAgY29uc3QgTUlOX0NPTlRSQVNUX1JBVElPID0gNC41O1xuICBjb25zdCBURVhUX0NPTE9SU19UT19HRU5FUkFURSA9IDI7XG4gIGNvbnN0IEJHX0NPTE9SU19UT19HRU5FUkFURSA9IDI7XG4gIGNvbnN0IFRPVEFMX0NPTE9SU19UT19HRU5FUkFURSA9XG4gICAgVEVYVF9DT0xPUlNfVE9fR0VORVJBVEUgKyBCR19DT0xPUlNfVE9fR0VORVJBVEU7XG4gIGNvbnN0IENPTE9SU19UT19HRU5FUkFURSA9IG51bUNvbG9ycyAtIFRPVEFMX0NPTE9SU19UT19HRU5FUkFURTtcblxuICAvLyBDaGVjayBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHRleHQgY29sb3IgYW5kIGJhY2tncm91bmQgY29sb3JcbiAgY29uc3QgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0UmF0aW8odGV4dENvbG9yLCBiZ0NvbG9yKTtcblxuICAvLyBJZiB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9ycyBhcmUgYWxyZWFkeSBjb21wbGlhbnQsIHJldHVybiB0aGUgb3JpZ2luYWwgY29sb3JzXG4gIGlmIChjb250cmFzdFJhdGlvID49IE1JTl9DT05UUkFTVF9SQVRJTykge1xuICAgIGNvbnN0IHRleHRDb2xvcnMgPSBnZW5lcmF0ZUFkZGl0aW9uYWxDb2xvcnMoXG4gICAgICB0ZXh0Q29sb3IsXG4gICAgICBiZ0NvbG9yLFxuICAgICAgVEVYVF9DT0xPUlNfVE9fR0VORVJBVEUsXG4gICAgICAndGV4dCdcbiAgICApO1xuICAgIGNvbnN0IGJnQ29sb3JzID0gZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzKFxuICAgICAgdGV4dENvbG9yLFxuICAgICAgYmdDb2xvcixcbiAgICAgIEJHX0NPTE9SU19UT19HRU5FUkFURSxcbiAgICAgICdiZydcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0Q29sb3IxOiB0ZXh0Q29sb3JzWzBdLFxuICAgICAgdGV4dENvbG9yMjogdGV4dENvbG9yc1sxXSxcbiAgICAgIGJnQ29sb3IxOiBiZ0NvbG9yc1swXSxcbiAgICAgIGJnQ29sb3IyOiBiZ0NvbG9yc1sxXSxcbiAgICB9O1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBhZGp1c3QgdGhlIGNvbG9ycyB0byBiZSBjb21wbGlhbnRcbiAgY29uc3QgbmV3Q29sb3JzID0gYWRqdXN0Q29sb3JzKHRleHRDb2xvciwgYmdDb2xvcik7XG5cbiAgLy8gR2VuZXJhdGUgYWRkaXRpb25hbCBjb21wbGlhbnQgY29sb3JzXG4gIGNvbnN0IGdlbmVyYXRlZFRleHRDb2xvcnMgPSBnZW5lcmF0ZUFkZGl0aW9uYWxDb2xvcnMoXG4gICAgbmV3Q29sb3JzWzBdLFxuICAgIG5ld0NvbG9yc1sxXSxcbiAgICBURVhUX0NPTE9SU19UT19HRU5FUkFURSxcbiAgICAndGV4dCdcbiAgKTtcbiAgY29uc3QgZ2VuZXJhdGVkQmdDb2xvcnMgPSBnZW5lcmF0ZUFkZGl0aW9uYWxDb2xvcnMoXG4gICAgbmV3Q29sb3JzWzBdLFxuICAgIG5ld0NvbG9yc1sxXSxcbiAgICBCR19DT0xPUlNfVE9fR0VORVJBVEUsXG4gICAgJ2JnJ1xuICApO1xuXG4gIC8vIEFkZCB0aGUgZ2VuZXJhdGVkIGNvbG9ycyB0byB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgb2JqZWN0IHdpdGggdGhlIGNvbG9yc1xuICBnZW5lcmF0ZWRDb2xvcnMgPSBbLi4uZ2VuZXJhdGVkVGV4dENvbG9ycywgLi4uZ2VuZXJhdGVkQmdDb2xvcnNdO1xuXG4gIHJldHVybiB7XG4gICAgdGV4dENvbG9yMTogbmV3Q29sb3JzWzBdLFxuICAgIHRleHRDb2xvcjI6IG5ld0NvbG9yc1sxXSxcbiAgICBiZ0NvbG9yMTogZ2VuZXJhdGVkQmdDb2xvcnNbMF0uY29sb3IsXG4gICAgYmdDb2xvcjI6IGdlbmVyYXRlZEJnQ29sb3JzWzFdLmNvbG9yLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFkZGl0aW9uYWxDb2xvcnMoY29sb3IxLCBjb2xvcjIsIG51bUNvbG9ycywgdHlwZSkge1xuICBjb25zdCBhZGRpdGlvbmFsQ29sb3JzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvcnM7IGkrKykge1xuICAgIGxldCBjb2xvcjtcblxuICAgIGlmIChnZW5lcmF0ZWRDb2xvcnMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIGdlbmVyYXRlZCBjb2xvcnMsIHVzZSB0aGUgZmlyc3QgY29sb3IgaW4gdGhlIGFycmF5XG4gICAgICBjb25zdCBnZW5lcmF0ZWRDb2xvciA9IGdlbmVyYXRlZENvbG9ycy5zaGlmdCgpO1xuICAgICAgY29sb3IgPSBnZW5lcmF0ZWRDb2xvci5jb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBnZW5lcmF0ZSBhIG5ldyByYW5kb20gY29sb3JcbiAgICAgIGNvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoXG4gICAgICBnZXRDb250cmFzdFJhdGlvKGNvbG9yLCBjb2xvcjEpIDwgNC41IHx8XG4gICAgICBnZXRDb250cmFzdFJhdGlvKGNvbG9yLCBjb2xvcjIpIDwgNC41XG4gICAgKSB7XG4gICAgICBjb2xvciA9IGdldFJhbmRvbUNvbG9yKCk7XG4gICAgfVxuXG4gICAgYWRkaXRpb25hbENvbG9ycy5wdXNoKHtcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYWRkaXRpb25hbENvbG9ycztcbn1cblxuY29uc3QgY29sb3IxID0gJyMwMDAwMDAnO1xuY29uc3QgY29sb3IyID0gJyNGRkZGRkYnO1xuLy8gR2VuZXJhdGUgY29tcGxpYW50IGNvbG9ycyBhbmQgc3RvcmUgdGhlbSBpbiBhbiBvYmplY3RcbmNvbnN0IGNvbG9ycyA9IGdlbmVyYXRlQ29tcGxpYW50Q29sb3JzKCcjMzMzJywgJyNmNWY1ZjUnLCA2KTtcblxuLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGdlbmVyYXRlZCBjb2xvcnNcbmNvbnNvbGUubG9nKGNvbG9ycyk7XG5cbi8vIEdlbmVyYXRlIG1vcmUgY29tcGxpYW50IGNvbG9ycyBhbmQgc3RvcmUgdGhlbSBpbiBhbiBvYmplY3RcbmNvbnN0IG1vcmVDb2xvcnMgPSBnZW5lcmF0ZUNvbXBsaWFudENvbG9ycygnIzMzMycsICcjZjVmNWY1JywgNik7XG5cbi8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSBuZXcgZ2VuZXJhdGVkIGNvbG9yc1xuY29uc29sZS5sb2cobW9yZUNvbG9ycyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcD5cbiAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb21wbGlhbnQxIH19PnRlc3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb21wbGlhbnQyIH19PnRlc3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb21wbGlhbnQzIH19PnRlc3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb21wbGlhbnQ0IH19PnRlc3Q8L2J1dHRvbj5cbiAgICA8L0FwcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcHAiLCJoZXhUb1JnYiIsImhleCIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiciIsImciLCJiIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJFcnJvciIsImdldFJlbGF0aXZlTHVtaW5hbmNlIiwicmdiIiwic3JnYiIsIm1hcCIsInZhbHVlIiwicyIsImdldENvbnRyYXN0UmF0aW8iLCJjb2xvcjEiLCJjb2xvcjIiLCJyZ2IxIiwicmdiMiIsImx1bWluYW5jZTEiLCJsdW1pbmFuY2UyIiwiY29udHJhc3RSYXRpbyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJnZXRSYW5kb21Db2xvciIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJhZGp1c3RDb2xvcnMiLCJ0YXJnZXRDb250cmFzdFJhdGlvIiwiY29sb3IxQXJyYXkiLCJjb2xvcjJBcnJheSIsImFkanVzdGVkQ29sb3IiLCJhZGp1c3RDb2xvciIsImFkanVzdGVkQ29sb3IxIiwicmdiVG9IZXgiLCJhZGp1c3RlZENvbG9yMiIsImdlbmVyYXRlZENvbG9ycyIsImdlbmVyYXRlQ29tcGxpYW50Q29sb3JzIiwidGV4dENvbG9yIiwiYmdDb2xvciIsIm51bUNvbG9ycyIsIk1JTl9DT05UUkFTVF9SQVRJTyIsIlRFWFRfQ09MT1JTX1RPX0dFTkVSQVRFIiwiQkdfQ09MT1JTX1RPX0dFTkVSQVRFIiwiVE9UQUxfQ09MT1JTX1RPX0dFTkVSQVRFIiwiQ09MT1JTX1RPX0dFTkVSQVRFIiwidGV4dENvbG9ycyIsImdlbmVyYXRlQWRkaXRpb25hbENvbG9ycyIsImJnQ29sb3JzIiwidGV4dENvbG9yMSIsInRleHRDb2xvcjIiLCJiZ0NvbG9yMSIsImJnQ29sb3IyIiwibmV3Q29sb3JzIiwiZ2VuZXJhdGVkVGV4dENvbG9ycyIsImdlbmVyYXRlZEJnQ29sb3JzIiwiY29sb3IiLCJ0eXBlIiwiYWRkaXRpb25hbENvbG9ycyIsImkiLCJnZW5lcmF0ZWRDb2xvciIsInNoaWZ0IiwicHVzaCIsImNvbG9ycyIsIm1vcmVDb2xvcnMiLCJIb21lIiwiYnV0dG9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb21wbGlhbnQxIiwiY29tcGxpYW50MiIsImNvbXBsaWFudDMiLCJjb21wbGlhbnQ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});