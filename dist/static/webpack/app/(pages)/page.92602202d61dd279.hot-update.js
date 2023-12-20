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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginForm: function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/context/GlobalContextProvider */ \"(app-pages-browser)/./src/app/context/GlobalContextProvider.tsx\");\n/* harmony import */ var _barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,CircularProgress,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,CircularProgress,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,CircularProgress,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/InputLabel/InputLabel.js\");\n/* harmony import */ var _barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,CircularProgress,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,CircularProgress,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,CircularProgress,InputLabel,Paper,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { token, channel, appId, setChannel, setAppId, setToken } = (0,_app_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setChannel(\"\");\n        setAppId(\"\");\n        setToken(\"\");\n        setLoading(false);\n    }, []);\n    const loginSession = ()=>{\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/room\");\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        elevation: 0,\n        variant: \"outlined\",\n        sx: {\n            padding: \"40px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            spacing: 2,\n            alignItems: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"flex-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            shrink: true,\n                            htmlFor: \"bootstrap-input\",\n                            children: \" App id\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"outlined-size-small\",\n                            defaultValue: \"\",\n                            size: \"small\",\n                            onInput: (e)=>setAppId(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"flex-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            shrink: true,\n                            htmlFor: \"bootstrap-input\",\n                            children: \" Token\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"outlined-size-small\",\n                            defaultValue: \"\",\n                            size: \"small\",\n                            onInput: (e)=>setToken(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    flexDirection: \"row\",\n                    justifyContent: \"center\",\n                    alignItems: \"flex-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            shrink: true,\n                            htmlFor: \"bootstrap-input\",\n                            children: \" Room\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"outlined-size-small\",\n                            defaultValue: \"\",\n                            size: \"small\",\n                            onInput: (e)=>setChannel(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    variant: \"contained\",\n                    sx: {\n                        width: 300\n                    },\n                    disabled: !token.length || !channel.length || !appId.length,\n                    onClick: loginSession,\n                    children: [\n                        \"Join room\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_CircularProgress_InputLabel_Paper_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            size: 24,\n                            sx: {\n                                // color: green[500],\n                                position: \"absolute\",\n                                top: \"50%\",\n                                left: \"50%\",\n                                marginTop: \"-12px\",\n                                marginLeft: \"-12px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Aurora V\\xe1squez\\\\Desktop\\\\videocall-reto\\\\src\\\\app\\\\components\\\\Login\\\\LoginForm.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginForm, \"OUVPpPwvX97er4RVwEuQwLQvfc0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _app_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7O0FBQ0E7QUFDRDtBQUM0QjtBQUVzQjtBQUV0RixNQUFNVSxZQUFZOztJQUNyQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVksU0FBU1gsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVksS0FBSyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHaEIsb0ZBQWdCQTtJQUVsRkgsZ0RBQVNBLENBQUM7UUFDTmlCLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxTQUFTO1FBQ1RQLFdBQVc7SUFDZixHQUFHLEVBQUU7SUFFTCxNQUFNUSxlQUFlO1FBQ2pCUixXQUFXO1FBQ1hTLFdBQVc7WUFDUFQsV0FBVztZQUNYQyxPQUFPUyxJQUFJLENBQUM7UUFDaEIsR0FBRztJQUNQO0lBRUEscUJBQ0ksOERBQUNmLG9JQUFLQTtRQUFDZ0IsV0FBVztRQUFHQyxTQUFRO1FBQVdDLElBQUk7WUFBQ0MsU0FBUztRQUFNO2tCQUN4RCw0RUFBQ2xCLG9JQUFLQTtZQUFDbUIsU0FBUztZQUFHQyxZQUFXOzs4QkFDMUIsOERBQUNwQixvSUFBS0E7b0JBQUNxQixlQUFjO29CQUFNQyxnQkFBZTtvQkFBU0YsWUFBVzs7c0NBQzFELDhEQUFDdEIsb0lBQVVBOzRCQUFDeUIsTUFBTTs0QkFBQ0MsU0FBUTtzQ0FBa0I7Ozs7OztzQ0FDN0MsOERBQUN2QixvSUFBU0E7NEJBQ1Z3QixJQUFHOzRCQUNIQyxjQUFhOzRCQUNiQyxNQUFLOzRCQUNMQyxTQUFTLENBQUNDLElBQVduQixTQUFTbUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7OEJBRWhELDhEQUFDL0Isb0lBQUtBO29CQUFDcUIsZUFBYztvQkFBTUMsZ0JBQWU7b0JBQVNGLFlBQVc7O3NDQUMxRCw4REFBQ3RCLG9JQUFVQTs0QkFBQ3lCLE1BQU07NEJBQUNDLFNBQVE7c0NBQWtCOzs7Ozs7c0NBQzdDLDhEQUFDdkIsb0lBQVNBOzRCQUNWd0IsSUFBRzs0QkFDSEMsY0FBYTs0QkFDYkMsTUFBSzs0QkFDTEMsU0FBUyxDQUFDQyxJQUFXbEIsU0FBU2tCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUVoRCw4REFBQy9CLG9JQUFLQTtvQkFBQ3FCLGVBQWM7b0JBQU1DLGdCQUFlO29CQUFTRixZQUFXOztzQ0FDMUQsOERBQUN0QixvSUFBVUE7NEJBQUN5QixNQUFNOzRCQUFDQyxTQUFRO3NDQUFrQjs7Ozs7O3NDQUM3Qyw4REFBQ3ZCLG9JQUFTQTs0QkFDVndCLElBQUc7NEJBQ0hDLGNBQWE7NEJBQ2JDLE1BQUs7NEJBQ0xDLFNBQVMsQ0FBQ0MsSUFBV3BCLFdBQVdvQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFbEQsOERBQUNuQyxvSUFBTUE7b0JBQUNvQixTQUFRO29CQUFZQyxJQUFJO3dCQUFDZSxPQUFPO29CQUFHO29CQUMzQ0MsVUFBVSxDQUFDM0IsTUFBTTRCLE1BQU0sSUFBSSxDQUFDM0IsUUFBUTJCLE1BQU0sSUFBSSxDQUFDMUIsTUFBTTBCLE1BQU07b0JBQzNEQyxTQUFTdkI7O3dCQUFjO3NDQUNuQiw4REFBQ2Ysb0lBQWdCQTs0QkFDYjhCLE1BQU07NEJBQ05WLElBQUk7Z0NBQ0wscUJBQXFCO2dDQUNwQm1CLFVBQVU7Z0NBQ1ZDLEtBQUs7Z0NBQ0xDLE1BQU07Z0NBQ05DLFdBQVc7Z0NBQ1hDLFlBQVk7NEJBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCLEVBQUM7R0FqRVl0Qzs7UUFFTVIsc0RBQVNBO1FBQzBDQyxnRkFBZ0JBOzs7S0FIekVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0udHN4P2MwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0L0dsb2JhbENvbnRleHRQcm92aWRlcic7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MsIElucHV0TGFiZWwsIFBhcGVyLCBTdGFjaywgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyB0b2tlbiwgY2hhbm5lbCwgYXBwSWQsIHNldENoYW5uZWwsIHNldEFwcElkLCBzZXRUb2tlbiB9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBzZXRDaGFubmVsKFwiXCIpOyBcclxuICAgICAgICBzZXRBcHBJZChcIlwiKTtcclxuICAgICAgICBzZXRUb2tlbihcIlwiKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgbG9naW5TZXNzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4gIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9yb29tJylcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0gdmFyaWFudD1cIm91dGxpbmVkXCIgc3g9e3twYWRkaW5nOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgc2hyaW5rIGh0bWxGb3I9XCJib290c3RyYXAtaW5wdXRcIj4gQXBwIGlkPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNpemUtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZTogYW55KSA9PiBzZXRBcHBJZChlLnRhcmdldC52YWx1ZSl9Lz4gXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIGZsZXhEaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBzaHJpbmsgaHRtbEZvcj1cImJvb3RzdHJhcC1pbnB1dFwiPiBUb2tlbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zaXplLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGU6IGFueSkgPT4gc2V0VG9rZW4oZS50YXJnZXQudmFsdWUpfS8+IFxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgc2hyaW5rIGh0bWxGb3I9XCJib290c3RyYXAtaW5wdXRcIj4gUm9vbTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zaXplLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGU6IGFueSkgPT4gc2V0Q2hhbm5lbChlLnRhcmdldC52YWx1ZSl9Lz4gXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3g9e3t3aWR0aDogMzAwfX0gXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRva2VuLmxlbmd0aCB8fCAhY2hhbm5lbC5sZW5ndGggfHwgIWFwcElkLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luU2Vzc2lvbn0+Sm9pbiByb29tIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiBncmVlbls1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0xMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJy0xMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZUdsb2JhbENvbnRleHQiLCJCdXR0b24iLCJDaXJjdWxhclByb2dyZXNzIiwiSW5wdXRMYWJlbCIsIlBhcGVyIiwiU3RhY2siLCJUZXh0RmllbGQiLCJMb2dpbkZvcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInRva2VuIiwiY2hhbm5lbCIsImFwcElkIiwic2V0Q2hhbm5lbCIsInNldEFwcElkIiwic2V0VG9rZW4iLCJsb2dpblNlc3Npb24iLCJzZXRUaW1lb3V0IiwicHVzaCIsImVsZXZhdGlvbiIsInZhcmlhbnQiLCJzeCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInNocmluayIsImh0bWxGb3IiLCJpZCIsImRlZmF1bHRWYWx1ZSIsInNpemUiLCJvbklucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJkaXNhYmxlZCIsImxlbmd0aCIsIm9uQ2xpY2siLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Login/LoginForm.tsx\n"));

/***/ })

});