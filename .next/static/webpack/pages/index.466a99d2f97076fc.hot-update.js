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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nfunction hexToRgb(hex) {\n    // Convert hex color to RGB values\n    console.log(hex);\n    hex = hex.replace(/^#/, \"\");\n    var r, g, b;\n    if (hex.length === 3) {\n        r = parseInt(hex[0] + hex[0], 16);\n        g = parseInt(hex[1] + hex[1], 16);\n        b = parseInt(hex[2] + hex[2], 16);\n    } else if (hex.length === 6) {\n        r = parseInt(hex.substr(0, 2), 16);\n        g = parseInt(hex.substr(2, 2), 16);\n        b = parseInt(hex.substr(4, 2), 16);\n    } else {\n        throw new Error(\"Invalid hex color: \" + hex);\n    }\n    return [\n        r,\n        g,\n        b\n    ];\n}\nfunction getRelativeLuminance(rgb) {\n    // Calculate relative luminance of an RGB color\n    var srgb = rgb.map(function(value) {\n        var s = value / 255;\n        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);\n    });\n    var _srgb = _slicedToArray(srgb, 3), r = _srgb[0], g = _srgb[1], b = _srgb[2];\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\nfunction generateCompliantColors(color11, color21, numColors) {\n    var MIN_CONTRAST_RATIO = 4.5;\n    var COLORS_TO_GENERATE = numColors - 2;\n    // Check contrast ratio between colors 1 and 2\n    var contrastRatio = getContrastRatio(color11, color21);\n    // If colors are already compliant, return the original colors\n    if (contrastRatio >= MIN_CONTRAST_RATIO) {\n        return [\n            color11,\n            color21\n        ].concat(generateAdditionalColors(color11, color21, COLORS_TO_GENERATE));\n    }\n    // Otherwise, adjust the colors to be compliant\n    var newColors = adjustColors(color11, color21);\n    // Generate additional compliant colors\n    var generatedColors = generateAdditionalColors(newColors[0], newColors[1], COLORS_TO_GENERATE);\n    return newColors.concat(generatedColors);\n}\nfunction generateAdditionalColors(color12, color22, numColors) {\n    var additionalColors = [];\n    for(var i = 0; i < numColors; i++){\n        var color = getRandomColor();\n        while(getContrastRatio(color, color12) < 4.5 || getContrastRatio(color, color22) < 4.5){\n            color = getRandomColor();\n        }\n        additionalColors.push(color);\n    }\n    return additionalColors;\n}\nfunction adjustColors(color13, color23) {\n    var targetContrastRatio = 4.5;\n    var color1Array = hexToRgb(color13);\n    var color2Array = hexToRgb(color23);\n    var adjustedColor;\n    // Loop through the colors until they are compliant\n    while(getContrastRatio(color1Array, color2Array) < targetContrastRatio){\n        // Adjust the color with the lower luminance\n        if (getRelativeLuminance(color1Array) > getRelativeLuminance(color2Array)) {\n            adjustedColor = adjustColor(color1Array);\n            color1Array = adjustedColor;\n        } else {\n            adjustedColor = adjustColor(color2Array);\n            color2Array = adjustedColor;\n        }\n    }\n    // Convert the adjusted colors back to hex\n    var adjustedColor1 = rgbToHex(color1Array[0], color1Array[1], color1Array[2]);\n    var adjustedColor2 = rgbToHex(color2Array[0], color2Array[1], color2Array[2]);\n    return [\n        adjustedColor1,\n        adjustedColor2\n    ];\n}\nfunction getRandomColor() {\n    return \"#\" + Math.floor(Math.random() * 16777215).toString(16);\n}\nvar color1 = \"#000000\";\nvar color2 = \"#FFFFFF\";\nvar ref = _slicedToArray(generateCompliantColors(color1, color2), 4), compliant1 = ref[0], compliant2 = ref[1], compliant3 = ref[2], compliant4 = ref[3];\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant1\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant2\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant3\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: compliant4\n                },\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxNQURsQzRCLFVBQVUsR0FDZjlCLEdBQXVDLEdBRHhCLEVBQUUrQixVQUFVLEdBQzNCL0IsR0FBdUMsR0FEWixFQUFFZ0MsVUFBVSxHQUN2Q2hDLEdBQXVDLEdBREEsRUFBRWlDLFVBQVUsR0FDbkRqQyxHQUF1QyxHQURZO0FBR3RDLFNBQVNrQyxJQUFJLEdBQUc7SUFDN0IscUJBQ0UsOERBQUNyRCx1REFBRzs7MEJBQ0YsOERBQUNzRCxRQUFNO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLGVBQWUsRUFBRVAsVUFBVTtpQkFBRTswQkFBRSxNQUFJOzs7OztvQkFBUzswQkFDN0QsOERBQUNLLFFBQU07Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsZUFBZSxFQUFFTixVQUFVO2lCQUFFOzBCQUFFLE1BQUk7Ozs7O29CQUFTOzBCQUM3RCw4REFBQ0ksUUFBTTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxlQUFlLEVBQUVMLFVBQVU7aUJBQUU7MEJBQUUsTUFBSTs7Ozs7b0JBQVM7MEJBQzdELDhEQUFDRyxRQUFNO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLGVBQWUsRUFBRUosVUFBVTtpQkFBRTswQkFBRSxNQUFJOzs7OztvQkFBUzs7Ozs7O1lBQ3pELENBQ047Q0FDSDtBQVR1QkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAvLyBDb252ZXJ0IGhleCBjb2xvciB0byBSR0IgdmFsdWVzXG4gIGNvbnNvbGUubG9nKGhleCk7XG5cbiAgaGV4ID0gaGV4LnJlcGxhY2UoL14jLywgJycpO1xuICBsZXQgciwgZywgYjtcblxuICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgIHIgPSBwYXJzZUludChoZXhbMF0gKyBoZXhbMF0sIDE2KTtcbiAgICBnID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNik7XG4gICAgYiA9IHBhcnNlSW50KGhleFsyXSArIGhleFsyXSwgMTYpO1xuICB9IGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDYpIHtcbiAgICByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpO1xuICAgIGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNik7XG4gICAgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IGNvbG9yOiAnICsgaGV4KTtcbiAgfVxuXG4gIHJldHVybiBbciwgZywgYl07XG59XG5mdW5jdGlvbiBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IpIHtcbiAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIGx1bWluYW5jZSBvZiBhbiBSR0IgY29sb3JcbiAgY29uc3Qgc3JnYiA9IHJnYi5tYXAoKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcyA9IHZhbHVlIC8gMjU1O1xuICAgIHJldHVybiBzIDw9IDAuMDM5MjggPyBzIC8gMTIuOTIgOiAoKHMgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40O1xuICB9KTtcblxuICBjb25zdCBbciwgZywgYl0gPSBzcmdiO1xuICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXBsaWFudENvbG9ycyhjb2xvcjEsIGNvbG9yMiwgbnVtQ29sb3JzKSB7XG4gIGNvbnN0IE1JTl9DT05UUkFTVF9SQVRJTyA9IDQuNTtcbiAgY29uc3QgQ09MT1JTX1RPX0dFTkVSQVRFID0gbnVtQ29sb3JzIC0gMjtcblxuICAvLyBDaGVjayBjb250cmFzdCByYXRpbyBiZXR3ZWVuIGNvbG9ycyAxIGFuZCAyXG4gIGNvbnN0IGNvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdFJhdGlvKGNvbG9yMSwgY29sb3IyKTtcblxuICAvLyBJZiBjb2xvcnMgYXJlIGFscmVhZHkgY29tcGxpYW50LCByZXR1cm4gdGhlIG9yaWdpbmFsIGNvbG9yc1xuICBpZiAoY29udHJhc3RSYXRpbyA+PSBNSU5fQ09OVFJBU1RfUkFUSU8pIHtcbiAgICByZXR1cm4gW2NvbG9yMSwgY29sb3IyXS5jb25jYXQoXG4gICAgICBnZW5lcmF0ZUFkZGl0aW9uYWxDb2xvcnMoY29sb3IxLCBjb2xvcjIsIENPTE9SU19UT19HRU5FUkFURSlcbiAgICApO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBhZGp1c3QgdGhlIGNvbG9ycyB0byBiZSBjb21wbGlhbnRcbiAgY29uc3QgbmV3Q29sb3JzID0gYWRqdXN0Q29sb3JzKGNvbG9yMSwgY29sb3IyKTtcblxuICAvLyBHZW5lcmF0ZSBhZGRpdGlvbmFsIGNvbXBsaWFudCBjb2xvcnNcbiAgY29uc3QgZ2VuZXJhdGVkQ29sb3JzID0gZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzKFxuICAgIG5ld0NvbG9yc1swXSxcbiAgICBuZXdDb2xvcnNbMV0sXG4gICAgQ09MT1JTX1RPX0dFTkVSQVRFXG4gICk7XG5cbiAgcmV0dXJuIG5ld0NvbG9ycy5jb25jYXQoZ2VuZXJhdGVkQ29sb3JzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzKGNvbG9yMSwgY29sb3IyLCBudW1Db2xvcnMpIHtcbiAgY29uc3QgYWRkaXRpb25hbENvbG9ycyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JzOyBpKyspIHtcbiAgICBsZXQgY29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xuXG4gICAgd2hpbGUgKFxuICAgICAgZ2V0Q29udHJhc3RSYXRpbyhjb2xvciwgY29sb3IxKSA8IDQuNSB8fFxuICAgICAgZ2V0Q29udHJhc3RSYXRpbyhjb2xvciwgY29sb3IyKSA8IDQuNVxuICAgICkge1xuICAgICAgY29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xuICAgIH1cblxuICAgIGFkZGl0aW9uYWxDb2xvcnMucHVzaChjb2xvcik7XG4gIH1cblxuICByZXR1cm4gYWRkaXRpb25hbENvbG9ycztcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29sb3JzKGNvbG9yMSwgY29sb3IyKSB7XG4gIGNvbnN0IHRhcmdldENvbnRyYXN0UmF0aW8gPSA0LjU7XG4gIGxldCBjb2xvcjFBcnJheSA9IGhleFRvUmdiKGNvbG9yMSk7XG4gIGxldCBjb2xvcjJBcnJheSA9IGhleFRvUmdiKGNvbG9yMik7XG4gIGxldCBhZGp1c3RlZENvbG9yO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgY29sb3JzIHVudGlsIHRoZXkgYXJlIGNvbXBsaWFudFxuICB3aGlsZSAoZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjFBcnJheSwgY29sb3IyQXJyYXkpIDwgdGFyZ2V0Q29udHJhc3RSYXRpbykge1xuICAgIC8vIEFkanVzdCB0aGUgY29sb3Igd2l0aCB0aGUgbG93ZXIgbHVtaW5hbmNlXG4gICAgaWYgKGdldFJlbGF0aXZlTHVtaW5hbmNlKGNvbG9yMUFycmF5KSA+IGdldFJlbGF0aXZlTHVtaW5hbmNlKGNvbG9yMkFycmF5KSkge1xuICAgICAgYWRqdXN0ZWRDb2xvciA9IGFkanVzdENvbG9yKGNvbG9yMUFycmF5KTtcbiAgICAgIGNvbG9yMUFycmF5ID0gYWRqdXN0ZWRDb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRqdXN0ZWRDb2xvciA9IGFkanVzdENvbG9yKGNvbG9yMkFycmF5KTtcbiAgICAgIGNvbG9yMkFycmF5ID0gYWRqdXN0ZWRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBhZGp1c3RlZCBjb2xvcnMgYmFjayB0byBoZXhcbiAgY29uc3QgYWRqdXN0ZWRDb2xvcjEgPSByZ2JUb0hleChcbiAgICBjb2xvcjFBcnJheVswXSxcbiAgICBjb2xvcjFBcnJheVsxXSxcbiAgICBjb2xvcjFBcnJheVsyXVxuICApO1xuICBjb25zdCBhZGp1c3RlZENvbG9yMiA9IHJnYlRvSGV4KFxuICAgIGNvbG9yMkFycmF5WzBdLFxuICAgIGNvbG9yMkFycmF5WzFdLFxuICAgIGNvbG9yMkFycmF5WzJdXG4gICk7XG5cbiAgcmV0dXJuIFthZGp1c3RlZENvbG9yMSwgYWRqdXN0ZWRDb2xvcjJdO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG59XG5cbmNvbnN0IGNvbG9yMSA9ICcjMDAwMDAwJztcbmNvbnN0IGNvbG9yMiA9ICcjRkZGRkZGJztcblxuY29uc3QgW2NvbXBsaWFudDEsIGNvbXBsaWFudDIsIGNvbXBsaWFudDMsIGNvbXBsaWFudDRdID1cbiAgZ2VuZXJhdGVDb21wbGlhbnRDb2xvcnMoY29sb3IxLCBjb2xvcjIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29tcGxpYW50MSB9fT50ZXN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29tcGxpYW50MiB9fT50ZXN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29tcGxpYW50MyB9fT50ZXN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29tcGxpYW50NCB9fT50ZXN0PC9idXR0b24+XG4gICAgPC9BcHA+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXBwIiwiaGV4VG9SZ2IiLCJoZXgiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInIiLCJnIiwiYiIsImxlbmd0aCIsInBhcnNlSW50Iiwic3Vic3RyIiwiRXJyb3IiLCJnZXRSZWxhdGl2ZUx1bWluYW5jZSIsInJnYiIsInNyZ2IiLCJtYXAiLCJ2YWx1ZSIsInMiLCJnZW5lcmF0ZUNvbXBsaWFudENvbG9ycyIsImNvbG9yMSIsImNvbG9yMiIsIm51bUNvbG9ycyIsIk1JTl9DT05UUkFTVF9SQVRJTyIsIkNPTE9SU19UT19HRU5FUkFURSIsImNvbnRyYXN0UmF0aW8iLCJnZXRDb250cmFzdFJhdGlvIiwiY29uY2F0IiwiZ2VuZXJhdGVBZGRpdGlvbmFsQ29sb3JzIiwibmV3Q29sb3JzIiwiYWRqdXN0Q29sb3JzIiwiZ2VuZXJhdGVkQ29sb3JzIiwiYWRkaXRpb25hbENvbG9ycyIsImkiLCJjb2xvciIsImdldFJhbmRvbUNvbG9yIiwicHVzaCIsInRhcmdldENvbnRyYXN0UmF0aW8iLCJjb2xvcjFBcnJheSIsImNvbG9yMkFycmF5IiwiYWRqdXN0ZWRDb2xvciIsImFkanVzdENvbG9yIiwiYWRqdXN0ZWRDb2xvcjEiLCJyZ2JUb0hleCIsImFkanVzdGVkQ29sb3IyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJjb21wbGlhbnQxIiwiY29tcGxpYW50MiIsImNvbXBsaWFudDMiLCJjb21wbGlhbnQ0IiwiSG9tZSIsImJ1dHRvbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});