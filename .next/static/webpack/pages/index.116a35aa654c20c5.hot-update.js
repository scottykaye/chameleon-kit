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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ \"./src/components/App/index.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button/index.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction hexToRgb(hex) {\n    // Convert hex value to RGB values\n    var r = parseInt(hex.substring(0, 2), 16);\n    var g = parseInt(hex.substring(2, 4), 16);\n    var b = parseInt(hex.substring(4, 6), 16);\n    return [\n        r,\n        g,\n        b\n    ];\n}\nfunction getRelativeLuminance(rgb) {\n    // Calculate relative luminance of an RGB color\n    var srgb = rgb.map(function(value) {\n        var s = value / 255;\n        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);\n    });\n    var _srgb = _slicedToArray(srgb, 3), r = _srgb[0], g = _srgb[1], b = _srgb[2];\n    return 0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\nfunction getContrastRatio(color11, color21) {\n    // Convert color values to RGB\n    var rgb1 = hexToRgb(color11);\n    var rgb2 = hexToRgb(color21);\n    console.log(rgb1, rgb2);\n    // Calculate relative luminance of the colors\n    var luminance1 = getRelativeLuminance(rgb1);\n    var luminance2 = getRelativeLuminance(rgb2);\n    // Calculate contrast ratio using WCAG algorithm\n    var contrastRatio1 = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);\n    console.log(luminance1, luminance2);\n    return contrastRatio1.toFixed(2);\n}\nvar color1 = \"#ff0000\"; // black\nvar color2 = \"#ffffff\"; // white\nvar contrastRatio = getContrastRatio(color1, color2);\nconsole.log(contrastRatio); // Output: 21.00\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: \"Test\"\n        }, void 0, false, {\n            fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/scottkaye/code/chameleon-kit/src/pages/index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDRiw0RUFBQ0MsMERBQU07c0JBQUMsTUFBSTs7Ozs7Z0JBQVM7Ozs7O1lBQ2pCLENBQ047Q0FDSDtBQU51QjRCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGluZyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nO1xuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgLy8gQ29udmVydCBoZXggdmFsdWUgdG8gUkdCIHZhbHVlc1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LCA2KSwgMTYpO1xuXG4gIHJldHVybiBbciwgZywgYl07XG59XG5mdW5jdGlvbiBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IpIHtcbiAgLy8gQ2FsY3VsYXRlIHJlbGF0aXZlIGx1bWluYW5jZSBvZiBhbiBSR0IgY29sb3JcbiAgY29uc3Qgc3JnYiA9IHJnYi5tYXAoKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcyA9IHZhbHVlIC8gMjU1O1xuICAgIHJldHVybiBzIDw9IDAuMDM5MjggPyBzIC8gMTIuOTIgOiAoKHMgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40O1xuICB9KTtcblxuICBjb25zdCBbciwgZywgYl0gPSBzcmdiO1xuICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xufVxuXG5mdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGNvbG9yMSwgY29sb3IyKSB7XG4gIC8vIENvbnZlcnQgY29sb3IgdmFsdWVzIHRvIFJHQlxuICBjb25zdCByZ2IxID0gaGV4VG9SZ2IoY29sb3IxKTtcbiAgY29uc3QgcmdiMiA9IGhleFRvUmdiKGNvbG9yMik7XG4gIGNvbnNvbGUubG9nKHJnYjEsIHJnYjIpO1xuXG4gIC8vIENhbGN1bGF0ZSByZWxhdGl2ZSBsdW1pbmFuY2Ugb2YgdGhlIGNvbG9yc1xuICBjb25zdCBsdW1pbmFuY2UxID0gZ2V0UmVsYXRpdmVMdW1pbmFuY2UocmdiMSk7XG4gIGNvbnN0IGx1bWluYW5jZTIgPSBnZXRSZWxhdGl2ZUx1bWluYW5jZShyZ2IyKTtcblxuICAvLyBDYWxjdWxhdGUgY29udHJhc3QgcmF0aW8gdXNpbmcgV0NBRyBhbGdvcml0aG1cbiAgY29uc3QgY29udHJhc3RSYXRpbyA9XG4gICAgKE1hdGgubWF4KGx1bWluYW5jZTEsIGx1bWluYW5jZTIpICsgMC4wNSkgL1xuICAgIChNYXRoLm1pbihsdW1pbmFuY2UxLCBsdW1pbmFuY2UyKSArIDAuMDUpO1xuICBjb25zb2xlLmxvZyhsdW1pbmFuY2UxLCBsdW1pbmFuY2UyKTtcbiAgcmV0dXJuIGNvbnRyYXN0UmF0aW8udG9GaXhlZCgyKTtcbn1cblxuY29uc3QgY29sb3IxID0gJyNmZjAwMDAnOyAvLyBibGFja1xuY29uc3QgY29sb3IyID0gJyNmZmZmZmYnOyAvLyB3aGl0ZVxuXG5jb25zdCBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3RSYXRpbyhjb2xvcjEsIGNvbG9yMik7XG5jb25zb2xlLmxvZyhjb250cmFzdFJhdGlvKTsgLy8gT3V0cHV0OiAyMS4wMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8QnV0dG9uPlRlc3Q8L0J1dHRvbj5cbiAgICA8L0FwcD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcHAiLCJCdXR0b24iLCJoZXhUb1JnYiIsImhleCIsInIiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImciLCJiIiwiZ2V0UmVsYXRpdmVMdW1pbmFuY2UiLCJyZ2IiLCJzcmdiIiwibWFwIiwidmFsdWUiLCJzIiwiZ2V0Q29udHJhc3RSYXRpbyIsImNvbG9yMSIsImNvbG9yMiIsInJnYjEiLCJyZ2IyIiwiY29uc29sZSIsImxvZyIsImx1bWluYW5jZTEiLCJsdW1pbmFuY2UyIiwiY29udHJhc3RSYXRpbyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ0b0ZpeGVkIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});