"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/nav/navigator.js":
/*!*************************************!*\
  !*** ./components/nav/navigator.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_nav_menu_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/nav/menu.module.css */ \"./styles/components/nav/menu.module.css\");\n/* harmony import */ var _styles_components_nav_menu_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_nav_menu_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navigator(param) {\n    var children = param.children;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.onscroll = function() {\n            var navibar = document.getElementById(\"navibar\");\n            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n                // add padding\n                navibar.style.padding = \"0.5rem 2rem\";\n                navibar.style.backgroundColor = \"rgba(255, 255, 255, 0.2)\";\n            } else {\n                navibar.style.padding = \"1.5rem 2rem\";\n                navibar.style.backgroundColor = \"transparent\";\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            id: \"navibar\",\n            className: (_styles_components_nav_menu_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/\",\n                    className: (_styles_components_nav_menu_module_css__WEBPACK_IMPORTED_MODULE_2___default().brandmark),\n                    children: \"sv3rige\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Raique\\\\sv3rige\\\\sv3rige\\\\components\\\\nav\\\\navigator.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Raique\\\\sv3rige\\\\sv3rige\\\\components\\\\nav\\\\navigator.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Raique\\\\sv3rige\\\\sv3rige\\\\components\\\\nav\\\\navigator.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Navigator, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Navigator;\nvar _c;\n$RefreshReg$(_c, \"Navigator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9uYXZpZ2F0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNhO0FBRWpELFNBQVNJLFNBQVMsQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROztJQUV4Q0gsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pJLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLFdBQU07WUFDcEIsSUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFFaEQsSUFBSUQsUUFBUSxDQUFDRSxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFLElBQUlILFFBQVEsQ0FBQ0ksZUFBZSxDQUFDRCxTQUFTLEdBQUcsRUFBRSxFQUFFO2dCQUN6RSxjQUFjO2dCQUNkSixPQUFPLENBQUNNLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLGFBQWEsQ0FBQztnQkFDdENQLE9BQU8sQ0FBQ00sS0FBSyxDQUFDRSxlQUFlLEdBQUcsMEJBQTBCLENBQUM7WUFDL0QsT0FDSztnQkFDRFIsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxhQUFhLENBQUM7Z0JBQ3RDUCxPQUFPLENBQUNNLEtBQUssQ0FBQ0UsZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNsRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0ksOERBQUNmLDJDQUFRO2tCQUNMLDRFQUFDZ0IsS0FBRztZQUFDQyxFQUFFLEVBQUMsU0FBUztZQUFDQyxTQUFTLEVBQUVoQixtRkFBVTs7OEJBQ25DLDhEQUFDaUIsR0FBQztvQkFBQ0MsSUFBSSxFQUFDLEdBQUc7b0JBQUNGLFNBQVMsRUFBRWhCLHlGQUFnQjs4QkFBRSxTQUFPOzs7Ozt3QkFBSTtnQkFDbkRFLFFBQVE7Ozs7OztnQkFDUDs7Ozs7WUFDQyxDQUNiO0FBQ04sQ0FBQztHQTFCdUJELFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9uYXZpZ2F0b3IuanM/MjRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL25hdi9tZW51Lm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0b3IoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYXZpYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmliYXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIHBhZGRpbmdcclxuICAgICAgICAgICAgICAgIG5hdmliYXIuc3R5bGUucGFkZGluZyA9IFwiMC41cmVtIDJyZW1cIjtcclxuICAgICAgICAgICAgICAgIG5hdmliYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmliYXIuc3R5bGUucGFkZGluZyA9IFwiMS41cmVtIDJyZW1cIjtcclxuICAgICAgICAgICAgICAgIG5hdmliYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPG5hdiBpZD1cIm5hdmliYXJcIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZG1hcmt9PnN2M3JpZ2U8L2E+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApOyBcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTmF2aWdhdG9yIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJvbnNjcm9sbCIsIm5hdmliYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm5hdiIsImlkIiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJicmFuZG1hcmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/navigator.js\n"));

/***/ })

});