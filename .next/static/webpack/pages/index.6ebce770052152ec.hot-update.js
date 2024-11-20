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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App/index.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button/index.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction hexToRgb(hex) {\n    var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n    return result ? {\n        r: parseInt(result[1], 16),\n        g: parseInt(result[2], 16),\n        b: parseInt(result[3], 16)\n    } : null;\n}\nfunction getRelativeLuminance(rgb) {\n    // Calculate relative luminance of an RGB color\n    var srgb = rgb.map(function(value) {\n        var s = value / 255;\n        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);\n    });\n    var _srgb = _slicedToArray(srgb, 3), r = _srgb[0], g = _srgb[1], b = _srgb[2];\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\nfunction getContrastRatio(color1, color2) {\n    // Calculate contrast ratio between two colors\n    var rgb1 = hexToRgb(color1);\n    var rgb2 = hexToRgb(color2);\n    var luminance1 = getRelativeLuminance(rgb1);\n    var luminance2 = getRelativeLuminance(rgb2);\n    var contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);\n    return contrastRatio;\n}\nfunction generateCompliantColor(color, direction) {\n    // Generate a compliant color by adjusting the color's luminance\n    var rgb = hexToRgb(color);\n    var _rgb = _slicedToArray(rgb, 3), r = _rgb[0], g = _rgb[1], b = _rgb[2];\n    if (direction === \"light\") {\n        // Lighten the color\n        r = Math.min(Math.round(r * 1.2), 255);\n        g = Math.min(Math.round(g * 1.2), 255);\n        b = Math.min(Math.round(b * 1.2), 255);\n    } else if (direction === \"dark\") {\n        // Darken the color\n        r = Math.max(Math.round(r * 0.8), 0);\n        g = Math.max(Math.round(g * 0.8), 0);\n        b = Math.max(Math.round(b * 0.8), 0);\n    }\n    return hexToRgb([\n        r,\n        g,\n        b\n    ]);\n}\nfunction generateCompliantColors(color1, color2) {\n    var contrastRatio = getContrastRatio(color1, color2);\n    if (contrastRatio >= 4.5) {\n        // The colors are already double AA compliant\n        return [\n            color1,\n            color2\n        ];\n    } else {\n        // Generate compliant colors\n        var lightColor = generateCompliantColor(color1, \"light\");\n        var darkColor = generateCompliantColor(color2, \"dark\");\n        // Check contrast ratio of new colors\n        var lightDarkContrastRatio = getContrastRatio(lightColor, darkColor);\n        if (lightDarkContrastRatio >= 4.5) {\n            // The new colors are double AA compliant\n            return [\n                lightColor,\n                darkColor\n            ];\n        } else {\n            // Generate additional compliant colors\n            var lighterColor = generateCompliantColor(lightColor, \"light\");\n            var darkerColor = generateCompliantColor(darkColor, \"dark\");\n            // Return all compliant colors\n            return [\n                lightColor,\n                darkColor,\n                lighterColor,\n                darkerColor\n            ];\n        }\n    }\n}\nconsole.log(generateCompliantColors(\"#ffffff\", \"#000000\"));\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: \"Test\"\n        }, void 0, false, {\n            fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBS007QUFFMUMsU0FBU0UsUUFBUSxDQUFDQyxHQUFHLEVBQUU7SUFDckIsSUFBTUMsTUFBTSxHQUFHLDRDQUE0Q0MsSUFBSSxDQUFDRixHQUFHLENBQUM7SUFDcEUsT0FBT0MsTUFBTSxHQUNUO1FBQ0VFLENBQUMsRUFBRUMsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFCSSxDQUFDLEVBQUVELFFBQVEsQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQkssQ0FBQyxFQUFFRixRQUFRLENBQUNILE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7S0FDM0IsR0FDRCxJQUFJLENBQUM7Q0FDVjtBQUVELFNBQVNNLG9CQUFvQixDQUFDQyxHQUFHLEVBQUU7SUFDakMsK0NBQStDO0lBQy9DLElBQU1DLElBQUksR0FBR0QsR0FBRyxDQUFDRSxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1FBQzlCLElBQU1DLENBQUMsR0FBR0QsS0FBSyxHQUFHLEdBQUc7UUFDckIsT0FBT0MsQ0FBQyxJQUFJLE9BQU8sR0FBR0EsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUE0QixDQUE1QixHQUE0QixDQUEzQixDQUFDQSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFLLEdBQUcsRUFBQztLQUNoRSxDQUFDO0lBRUYsSUFBa0JILEtBQUksa0JBQUpBLElBQUksTUFBZk4sQ0FBQyxHQUFVTSxLQUFJLEdBQWQsRUFBRUosQ0FBQyxHQUFPSSxLQUFJLEdBQVgsRUFBRUgsQ0FBQyxHQUFJRyxLQUFJLEdBQVI7SUFDZCxPQUFPLE1BQU0sR0FBR04sQ0FBQyxHQUFHLE1BQU0sR0FBR0UsQ0FBQyxHQUFHLE1BQU0sR0FBR0MsQ0FBQyxDQUFDO0NBQzdDO0FBQ0QsU0FBU08sZ0JBQWdCLENBQUNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQ3hDLDhDQUE4QztJQUM5QyxJQUFNQyxJQUFJLEdBQUdqQixRQUFRLENBQUNlLE1BQU0sQ0FBQztJQUM3QixJQUFNRyxJQUFJLEdBQUdsQixRQUFRLENBQUNnQixNQUFNLENBQUM7SUFDN0IsSUFBTUcsVUFBVSxHQUFHWCxvQkFBb0IsQ0FBQ1MsSUFBSSxDQUFDO0lBQzdDLElBQU1HLFVBQVUsR0FBR1osb0JBQW9CLENBQUNVLElBQUksQ0FBQztJQUM3QyxJQUFNRyxhQUFhLEdBQ2pCLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixVQUFVLEVBQUVDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUN6QyxDQUFDRSxJQUFJLENBQUNFLEdBQUcsQ0FBQ0wsVUFBVSxFQUFFQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFM0MsT0FBT0MsYUFBYSxDQUFDO0NBQ3RCO0FBQ0QsU0FBU0ksc0JBQXNCLENBQUNDLEtBQUssRUFBRUMsU0FBUyxFQUFFO0lBQ2hELGdFQUFnRTtJQUNoRSxJQUFNbEIsR0FBRyxHQUFHVCxRQUFRLENBQUMwQixLQUFLLENBQUM7SUFDM0IsSUFBZ0JqQixJQUFHLGtCQUFIQSxHQUFHLE1BQWRMLENBQUMsR0FBVUssSUFBRyxHQUFiLEVBQUVILENBQUMsR0FBT0csSUFBRyxHQUFWLEVBQUVGLENBQUMsR0FBSUUsSUFBRyxHQUFQO0lBRVosSUFBSWtCLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDekIsb0JBQW9CO1FBQ3BCdkIsQ0FBQyxHQUFHa0IsSUFBSSxDQUFDRSxHQUFHLENBQUNGLElBQUksQ0FBQ00sS0FBSyxDQUFDeEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDRSxDQUFDLEdBQUdnQixJQUFJLENBQUNFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDTSxLQUFLLENBQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkNDLENBQUMsR0FBR2UsSUFBSSxDQUFDRSxHQUFHLENBQUNGLElBQUksQ0FBQ00sS0FBSyxDQUFDckIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3hDLE1BQU0sSUFBSW9CLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDL0IsbUJBQW1CO1FBQ25CdkIsQ0FBQyxHQUFHa0IsSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ00sS0FBSyxDQUFDeEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDRSxDQUFDLEdBQUdnQixJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDTSxLQUFLLENBQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckNDLENBQUMsR0FBR2UsSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ00sS0FBSyxDQUFDckIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsT0FBT1AsUUFBUSxDQUFDO1FBQUNJLENBQUM7UUFBRUUsQ0FBQztRQUFFQyxDQUFDO0tBQUMsQ0FBQyxDQUFDO0NBQzVCO0FBRUQsU0FBU3NCLHVCQUF1QixDQUFDZCxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUMvQyxJQUFNSyxhQUFhLEdBQUdQLGdCQUFnQixDQUFDQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQztJQUV0RCxJQUFJSyxhQUFhLElBQUksR0FBRyxFQUFFO1FBQ3hCLDZDQUE2QztRQUM3QyxPQUFPO1lBQUNOLE1BQU07WUFBRUMsTUFBTTtTQUFDLENBQUM7S0FDekIsTUFBTTtRQUNMLDRCQUE0QjtRQUM1QixJQUFNYyxVQUFVLEdBQUdMLHNCQUFzQixDQUFDVixNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQzFELElBQU1nQixTQUFTLEdBQUdOLHNCQUFzQixDQUFDVCxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBRXhELHFDQUFxQztRQUNyQyxJQUFNZ0Isc0JBQXNCLEdBQUdsQixnQkFBZ0IsQ0FBQ2dCLFVBQVUsRUFBRUMsU0FBUyxDQUFDO1FBRXRFLElBQUlDLHNCQUFzQixJQUFJLEdBQUcsRUFBRTtZQUNqQyx5Q0FBeUM7WUFDekMsT0FBTztnQkFBQ0YsVUFBVTtnQkFBRUMsU0FBUzthQUFDLENBQUM7U0FDaEMsTUFBTTtZQUNMLHVDQUF1QztZQUN2QyxJQUFNRSxZQUFZLEdBQUdSLHNCQUFzQixDQUFDSyxVQUFVLEVBQUUsT0FBTyxDQUFDO1lBQ2hFLElBQU1JLFdBQVcsR0FBR1Qsc0JBQXNCLENBQUNNLFNBQVMsRUFBRSxNQUFNLENBQUM7WUFFN0QsOEJBQThCO1lBQzlCLE9BQU87Z0JBQUNELFVBQVU7Z0JBQUVDLFNBQVM7Z0JBQUVFLFlBQVk7Z0JBQUVDLFdBQVc7YUFBQyxDQUFDO1NBQzNEO0tBQ0Y7Q0FDRjtBQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsdUJBQXVCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsU0FBU1EsSUFBSSxHQUFHO0lBQzdCLHFCQUNFLDhEQUFDdkMsdURBQUc7a0JBQ0YsNEVBQUNDLDBEQUFNO3NCQUFDLE1BQUk7Ozs7O2dCQUFTOzs7OztZQUNqQixDQUNOO0NBQ0g7QUFOdUJzQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICB9XG4gICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IpIHtcbiAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIGx1bWluYW5jZSBvZiBhbiBSR0IgY29sb3JcbiAgY29uc3Qgc3JnYiA9IHJnYi5tYXAoKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcyA9IHZhbHVlIC8gMjU1O1xuICAgIHJldHVybiBzIDw9IDAuMDM5MjggPyBzIC8gMTIuOTIgOiAoKHMgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40O1xuICB9KTtcblxuICBjb25zdCBbciwgZywgYl0gPSBzcmdiO1xuICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xufVxuZnVuY3Rpb24gZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjEsIGNvbG9yMikge1xuICAvLyBDYWxjdWxhdGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzXG4gIGNvbnN0IHJnYjEgPSBoZXhUb1JnYihjb2xvcjEpO1xuICBjb25zdCByZ2IyID0gaGV4VG9SZ2IoY29sb3IyKTtcbiAgY29uc3QgbHVtaW5hbmNlMSA9IGdldFJlbGF0aXZlTHVtaW5hbmNlKHJnYjEpO1xuICBjb25zdCBsdW1pbmFuY2UyID0gZ2V0UmVsYXRpdmVMdW1pbmFuY2UocmdiMik7XG4gIGNvbnN0IGNvbnRyYXN0UmF0aW8gPVxuICAgIChNYXRoLm1heChsdW1pbmFuY2UxLCBsdW1pbmFuY2UyKSArIDAuMDUpIC9cbiAgICAoTWF0aC5taW4obHVtaW5hbmNlMSwgbHVtaW5hbmNlMikgKyAwLjA1KTtcblxuICByZXR1cm4gY29udHJhc3RSYXRpbztcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29tcGxpYW50Q29sb3IoY29sb3IsIGRpcmVjdGlvbikge1xuICAvLyBHZW5lcmF0ZSBhIGNvbXBsaWFudCBjb2xvciBieSBhZGp1c3RpbmcgdGhlIGNvbG9yJ3MgbHVtaW5hbmNlXG4gIGNvbnN0IHJnYiA9IGhleFRvUmdiKGNvbG9yKTtcbiAgbGV0IFtyLCBnLCBiXSA9IHJnYjtcblxuICBpZiAoZGlyZWN0aW9uID09PSAnbGlnaHQnKSB7XG4gICAgLy8gTGlnaHRlbiB0aGUgY29sb3JcbiAgICByID0gTWF0aC5taW4oTWF0aC5yb3VuZChyICogMS4yKSwgMjU1KTtcbiAgICBnID0gTWF0aC5taW4oTWF0aC5yb3VuZChnICogMS4yKSwgMjU1KTtcbiAgICBiID0gTWF0aC5taW4oTWF0aC5yb3VuZChiICogMS4yKSwgMjU1KTtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgIC8vIERhcmtlbiB0aGUgY29sb3JcbiAgICByID0gTWF0aC5tYXgoTWF0aC5yb3VuZChyICogMC44KSwgMCk7XG4gICAgZyA9IE1hdGgubWF4KE1hdGgucm91bmQoZyAqIDAuOCksIDApO1xuICAgIGIgPSBNYXRoLm1heChNYXRoLnJvdW5kKGIgKiAwLjgpLCAwKTtcbiAgfVxuXG4gIHJldHVybiBoZXhUb1JnYihbciwgZywgYl0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXBsaWFudENvbG9ycyhjb2xvcjEsIGNvbG9yMikge1xuICBjb25zdCBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjEsIGNvbG9yMik7XG5cbiAgaWYgKGNvbnRyYXN0UmF0aW8gPj0gNC41KSB7XG4gICAgLy8gVGhlIGNvbG9ycyBhcmUgYWxyZWFkeSBkb3VibGUgQUEgY29tcGxpYW50XG4gICAgcmV0dXJuIFtjb2xvcjEsIGNvbG9yMl07XG4gIH0gZWxzZSB7XG4gICAgLy8gR2VuZXJhdGUgY29tcGxpYW50IGNvbG9yc1xuICAgIGNvbnN0IGxpZ2h0Q29sb3IgPSBnZW5lcmF0ZUNvbXBsaWFudENvbG9yKGNvbG9yMSwgJ2xpZ2h0Jyk7XG4gICAgY29uc3QgZGFya0NvbG9yID0gZ2VuZXJhdGVDb21wbGlhbnRDb2xvcihjb2xvcjIsICdkYXJrJyk7XG5cbiAgICAvLyBDaGVjayBjb250cmFzdCByYXRpbyBvZiBuZXcgY29sb3JzXG4gICAgY29uc3QgbGlnaHREYXJrQ29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0UmF0aW8obGlnaHRDb2xvciwgZGFya0NvbG9yKTtcblxuICAgIGlmIChsaWdodERhcmtDb250cmFzdFJhdGlvID49IDQuNSkge1xuICAgICAgLy8gVGhlIG5ldyBjb2xvcnMgYXJlIGRvdWJsZSBBQSBjb21wbGlhbnRcbiAgICAgIHJldHVybiBbbGlnaHRDb2xvciwgZGFya0NvbG9yXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR2VuZXJhdGUgYWRkaXRpb25hbCBjb21wbGlhbnQgY29sb3JzXG4gICAgICBjb25zdCBsaWdodGVyQ29sb3IgPSBnZW5lcmF0ZUNvbXBsaWFudENvbG9yKGxpZ2h0Q29sb3IsICdsaWdodCcpO1xuICAgICAgY29uc3QgZGFya2VyQ29sb3IgPSBnZW5lcmF0ZUNvbXBsaWFudENvbG9yKGRhcmtDb2xvciwgJ2RhcmsnKTtcblxuICAgICAgLy8gUmV0dXJuIGFsbCBjb21wbGlhbnQgY29sb3JzXG4gICAgICByZXR1cm4gW2xpZ2h0Q29sb3IsIGRhcmtDb2xvciwgbGlnaHRlckNvbG9yLCBkYXJrZXJDb2xvcl07XG4gICAgfVxuICB9XG59XG5cbmNvbnNvbGUubG9nKGdlbmVyYXRlQ29tcGxpYW50Q29sb3JzKCcjZmZmZmZmJywgJyMwMDAwMDAnKSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8QnV0dG9uPlRlc3Q8L0J1dHRvbj5cbiAgICA8L0FwcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcHAiLCJCdXR0b24iLCJoZXhUb1JnYiIsImhleCIsInJlc3VsdCIsImV4ZWMiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsImdldFJlbGF0aXZlTHVtaW5hbmNlIiwicmdiIiwic3JnYiIsIm1hcCIsInZhbHVlIiwicyIsImdldENvbnRyYXN0UmF0aW8iLCJjb2xvcjEiLCJjb2xvcjIiLCJyZ2IxIiwicmdiMiIsImx1bWluYW5jZTEiLCJsdW1pbmFuY2UyIiwiY29udHJhc3RSYXRpbyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJnZW5lcmF0ZUNvbXBsaWFudENvbG9yIiwiY29sb3IiLCJkaXJlY3Rpb24iLCJyb3VuZCIsImdlbmVyYXRlQ29tcGxpYW50Q29sb3JzIiwibGlnaHRDb2xvciIsImRhcmtDb2xvciIsImxpZ2h0RGFya0NvbnRyYXN0UmF0aW8iLCJsaWdodGVyQ29sb3IiLCJkYXJrZXJDb2xvciIsImNvbnNvbGUiLCJsb2ciLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});