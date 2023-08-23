"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ YourComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// Define a default fetcher function that uses the default fetch\nconst defaultFetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction YourComponent() {\n    // Use useSWR with the default fetcher and the URL\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/random-character\", defaultFetcher);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading data\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, this);\n    }\n    // Render your component with the fetched data\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Character\"\n            }, void 0, false, {\n                fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Name: \",\n                            data.firstName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Last Name: \",\n                            data.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Age: \",\n                            data.age\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Twitter Name: \",\n                            data.twitterName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Words: \",\n                            data.words\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benutzer/Desktop/spiced-bootcamp/challenges/21.08-Challenge-of-the-day/backend-api-routes_random-character/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFekIsZ0VBQWdFO0FBQ2hFLE1BQU1DLGlCQUFpQixDQUFDQyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUVsRCxTQUFTQyxnQkFBZ0I7SUFDdEMsa0RBQWtEO0lBQ2xELE1BQU0sRUFBRUMsS0FBSSxFQUFHQyxNQUFLLEVBQUUsR0FBR1QsK0NBQU1BLENBQUMseUJBQXlCQztJQUV6RCxJQUFJUSxPQUFPO1FBQ1QscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDRixNQUFNO1FBQ1QscUJBQU8sOERBQUNFO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQsOENBQThDO0lBQzlDLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDSyw4REFBQ0M7OzRCQUFHOzRCQUFPTCxLQUFLTSxTQUFTOzs7Ozs7O2tDQUN6Qiw4REFBQ0Q7OzRCQUFHOzRCQUFZTCxLQUFLTyxRQUFROzs7Ozs7O2tDQUM3Qiw4REFBQ0Y7OzRCQUFHOzRCQUFNTCxLQUFLUSxHQUFHOzs7Ozs7O2tDQUNsQiw4REFBQ0g7OzRCQUFHOzRCQUFlTCxLQUFLUyxXQUFXOzs7Ozs7O2tDQUNuQyw4REFBQ0o7OzRCQUFHOzRCQUFRTCxLQUFLVSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWFwaS1yb3V0ZXNfcmFuZG9tLWNoYXJhY3Rlci8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG4vLyBEZWZpbmUgYSBkZWZhdWx0IGZldGNoZXIgZnVuY3Rpb24gdGhhdCB1c2VzIHRoZSBkZWZhdWx0IGZldGNoXG5jb25zdCBkZWZhdWx0RmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91ckNvbXBvbmVudCgpIHtcbiAgLy8gVXNlIHVzZVNXUiB3aXRoIHRoZSBkZWZhdWx0IGZldGNoZXIgYW5kIHRoZSBVUkxcbiAgY29uc3QgeyBkYXRhICwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9yYW5kb20tY2hhcmFjdGVyJywgZGVmYXVsdEZldGNoZXIpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICAvLyBSZW5kZXIgeW91ciBjb21wb25lbnQgd2l0aCB0aGUgZmV0Y2hlZCBkYXRhXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DaGFyYWN0ZXI8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPk5hbWU6IHtkYXRhLmZpcnN0TmFtZX08L2xpPlxuICAgICAgICAgICAgPGxpPkxhc3QgTmFtZToge2RhdGEubGFzdE5hbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT5BZ2U6IHtkYXRhLmFnZX08L2xpPlxuICAgICAgICAgICAgPGxpPlR3aXR0ZXIgTmFtZToge2RhdGEudHdpdHRlck5hbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT5Xb3Jkczoge2RhdGEud29yZHN9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiZGVmYXVsdEZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiWW91ckNvbXBvbmVudCIsImRhdGEiLCJlcnJvciIsImRpdiIsImgxIiwidWwiLCJsaSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWdlIiwidHdpdHRlck5hbWUiLCJ3b3JkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();