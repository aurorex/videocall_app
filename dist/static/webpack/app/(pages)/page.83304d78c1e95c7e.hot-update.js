"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/page",{

/***/ "(app-pages-browser)/./src/app/components/Login/LoginForm.tsx":
/*!************************************************!*\
  !*** ./src/app/components/Login/LoginForm.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginForm: function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/context/GlobalContextProvider */ \"(app-pages-browser)/./src/app/context/GlobalContextProvider.tsx\");\n/* harmony import */ var _barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { token, channel, appId, setChannel, setAppId, setToken } = (0,_app_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setChannel(\"\");\n        setAppId(\"\");\n        setToken(\"\");\n    }, []);\n    const loginSession = ()=>{\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/room\");\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        elevation: 0,\n        variant: \"outlined\",\n        sx: {\n            padding: \"40px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            spacing: 2,\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"flex-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            shrink: true,\n                            htmlFor: \"bootstrap-input\",\n                            children: \" App id\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"outlined-size-small\",\n                            defaultValue: \"\",\n                            size: \"small\",\n                            onInput: (e)=>setAppId(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"flex-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            shrink: true,\n                            htmlFor: \"bootstrap-input\",\n                            children: \" Token\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"outlined-size-small\",\n                            defaultValue: \"\",\n                            size: \"small\",\n                            onInput: (e)=>setToken(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"flex-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            shrink: true,\n                            htmlFor: \"bootstrap-input\",\n                            children: \" Room\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"outlined-size-small\",\n                            defaultValue: \"\",\n                            size: \"small\",\n                            onInput: (e)=>setChannel(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    variant: \"contained\",\n                    sx: {\n                        width: 300\n                    },\n                    disabled: !token.length || !channel.length || !appId.length,\n                    onClick: loginSession,\n                    children: \"Join room\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginForm, \"OUVPpPwvX97er4RVwEuQwLQvfc0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _app_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0Qzs7QUFDQTtBQUNEO0FBQzRCO0FBRUk7QUFFcEUsTUFBTVMsWUFBWTs7SUFDckIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1XLFNBQVNWLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVXLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR2Ysb0ZBQWdCQTtJQUVsRkgsZ0RBQVNBLENBQUM7UUFDTmdCLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxTQUFTO0lBQ2IsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZTtRQUNqQlIsV0FBVztRQUNYUyxXQUFXO1lBQ1BULFdBQVc7WUFDWEMsT0FBT1MsSUFBSSxDQUFDO1FBQ2hCLEdBQUc7SUFDUDtJQUVBLHFCQUNJLDhEQUFDZixtSEFBS0E7UUFBQ2dCLFdBQVc7UUFBR0MsU0FBUTtRQUFXQyxJQUFJO1lBQUNDLFNBQVM7UUFBTTtrQkFDeEQsNEVBQUNsQixtSEFBS0E7WUFBQ21CLFNBQVM7WUFBR0MsWUFBVzs7OEJBQzFCLDhEQUFDcEIsbUhBQUtBO29CQUFDcUIsZUFBYztvQkFBTUMsZ0JBQWU7b0JBQVNGLFlBQVc7O3NDQUMxRCw4REFBQ3RCLG1IQUFVQTs0QkFBQ3lCLE1BQU07NEJBQUNDLFNBQVE7c0NBQWtCOzs7Ozs7c0NBQzdDLDhEQUFDdkIsbUhBQVNBOzRCQUNWd0IsSUFBRzs0QkFDSEMsY0FBYTs0QkFDYkMsTUFBSzs0QkFDTEMsU0FBUyxDQUFDQyxJQUFXbkIsU0FBU21CLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUVoRCw4REFBQy9CLG1IQUFLQTtvQkFBQ3FCLGVBQWM7b0JBQU1DLGdCQUFlO29CQUFTRixZQUFXOztzQ0FDMUQsOERBQUN0QixtSEFBVUE7NEJBQUN5QixNQUFNOzRCQUFDQyxTQUFRO3NDQUFrQjs7Ozs7O3NDQUM3Qyw4REFBQ3ZCLG1IQUFTQTs0QkFDVndCLElBQUc7NEJBQ0hDLGNBQWE7NEJBQ2JDLE1BQUs7NEJBQ0xDLFNBQVMsQ0FBQ0MsSUFBV2xCLFNBQVNrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFaEQsOERBQUMvQixtSEFBS0E7b0JBQUNxQixlQUFjO29CQUFNQyxnQkFBZTtvQkFBU0YsWUFBVzs7c0NBQzFELDhEQUFDdEIsbUhBQVVBOzRCQUFDeUIsTUFBTTs0QkFBQ0MsU0FBUTtzQ0FBa0I7Ozs7OztzQ0FDN0MsOERBQUN2QixtSEFBU0E7NEJBQ1Z3QixJQUFHOzRCQUNIQyxjQUFhOzRCQUNiQyxNQUFLOzRCQUNMQyxTQUFTLENBQUNDLElBQVdwQixXQUFXb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDbEMsbUhBQU1BO29CQUFDbUIsU0FBUTtvQkFBWUMsSUFBSTt3QkFBQ2UsT0FBTztvQkFBRztvQkFDM0NDLFVBQVUsQ0FBQzNCLE1BQU00QixNQUFNLElBQUksQ0FBQzNCLFFBQVEyQixNQUFNLElBQUksQ0FBQzFCLE1BQU0wQixNQUFNO29CQUMzREMsU0FBU3ZCOzhCQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QyxFQUFDO0dBcERZVjs7UUFFTVAsc0RBQVNBO1FBQzBDQyxnRkFBZ0JBOzs7S0FIekVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0udHN4P2MwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0L0dsb2JhbENvbnRleHRQcm92aWRlcic7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0TGFiZWwsIFBhcGVyLCBTdGFjaywgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyB0b2tlbiwgY2hhbm5lbCwgYXBwSWQsIHNldENoYW5uZWwsIHNldEFwcElkLCBzZXRUb2tlbiB9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBzZXRDaGFubmVsKFwiXCIpOyBcclxuICAgICAgICBzZXRBcHBJZChcIlwiKTtcclxuICAgICAgICBzZXRUb2tlbihcIlwiKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGxvZ2luU2Vzc2lvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+ICB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcm9vbScpXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN4PXt7cGFkZGluZzogJzQwcHgnfX0+XHJcbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgZmxleERpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIHNocmluayBodG1sRm9yPVwiYm9vdHN0cmFwLWlucHV0XCI+IEFwcCBpZDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zaXplLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGU6IGFueSkgPT4gc2V0QXBwSWQoZS50YXJnZXQudmFsdWUpfS8+IFxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgc2hyaW5rIGh0bWxGb3I9XCJib290c3RyYXAtaW5wdXRcIj4gVG9rZW48L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2l6ZS1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlOiBhbnkpID0+IHNldFRva2VuKGUudGFyZ2V0LnZhbHVlKX0vPiBcclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgZmxleERpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIHNocmluayBodG1sRm9yPVwiYm9vdHN0cmFwLWlucHV0XCI+IFJvb208L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2l6ZS1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlOiBhbnkpID0+IHNldENoYW5uZWwoZS50YXJnZXQudmFsdWUpfS8+IFxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7d2lkdGg6IDMwMH19IFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0b2tlbi5sZW5ndGggfHwgIWNoYW5uZWwubGVuZ3RoIHx8ICFhcHBJZC5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpblNlc3Npb259PkpvaW4gcm9vbTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VHbG9iYWxDb250ZXh0IiwiQnV0dG9uIiwiSW5wdXRMYWJlbCIsIlBhcGVyIiwiU3RhY2siLCJUZXh0RmllbGQiLCJMb2dpbkZvcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInRva2VuIiwiY2hhbm5lbCIsImFwcElkIiwic2V0Q2hhbm5lbCIsInNldEFwcElkIiwic2V0VG9rZW4iLCJsb2dpblNlc3Npb24iLCJzZXRUaW1lb3V0IiwicHVzaCIsImVsZXZhdGlvbiIsInZhcmlhbnQiLCJzeCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInNocmluayIsImh0bWxGb3IiLCJpZCIsImRlZmF1bHRWYWx1ZSIsInNpemUiLCJvbklucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJkaXNhYmxlZCIsImxlbmd0aCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Login/LoginForm.tsx\n"));

/***/ })

});