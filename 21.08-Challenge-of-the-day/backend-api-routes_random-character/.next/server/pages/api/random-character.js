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
exports.id = "pages/api/random-character";
exports.ids = ["pages/api/random-character"];
exports.modules = {

/***/ "chance":
/*!*************************!*\
  !*** external "chance" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("chance");

/***/ }),

/***/ "(api)/./pages/api/random-character/index.js":
/*!*********************************************!*\
  !*** ./pages/api/random-character/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ \"chance\");\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);\n\nconst chance = new (chance__WEBPACK_IMPORTED_MODULE_0___default())();\nconst person = {\n    firstName: chance.first(),\n    lastName: chance.last(),\n    age: chance.age(),\n    twitterName: chance.twitter(),\n    words: chance.sentence({\n        words: 5\n    })\n};\nfunction handler(request, response) {\n    response.status(200).json(person);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFuZG9tLWNoYXJhY3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCwrQ0FBTUE7QUFJekIsTUFBTUUsU0FBUztJQUNYQyxXQUFZRixPQUFPRyxLQUFLO0lBQ3hCQyxVQUFXSixPQUFPSyxJQUFJO0lBQ3RCQyxLQUFNTixPQUFPTSxHQUFHO0lBQ2hCQyxhQUFjUCxPQUFPUSxPQUFPO0lBQzVCQyxPQUFPVCxPQUFPVSxRQUFRLENBQUM7UUFBRUQsT0FBTztJQUFFO0FBQ3BDO0FBRWEsU0FBU0UsUUFBUUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDL0NBLFNBQVNDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNkO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWFwaS1yb3V0ZXNfcmFuZG9tLWNoYXJhY3Rlci8uL3BhZ2VzL2FwaS9yYW5kb20tY2hhcmFjdGVyL2luZGV4LmpzPzBhMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYW5jZSBmcm9tIFwiY2hhbmNlXCI7XG5cbmNvbnN0IGNoYW5jZSA9IG5ldyBDaGFuY2UoKTtcblxuXG5cbmNvbnN0IHBlcnNvbiA9IHtcbiAgICBmaXJzdE5hbWUgOiBjaGFuY2UuZmlyc3QoKSxcbiAgICBsYXN0TmFtZSA6IGNoYW5jZS5sYXN0KCksXG4gICAgYWdlIDogY2hhbmNlLmFnZSgpLFxuICAgIHR3aXR0ZXJOYW1lIDogY2hhbmNlLnR3aXR0ZXIoKSxcbiAgICB3b3JkczogY2hhbmNlLnNlbnRlbmNlKHsgd29yZHM6IDUgfSksXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHBlcnNvbik7XG4gIH0iXSwibmFtZXMiOlsiQ2hhbmNlIiwiY2hhbmNlIiwicGVyc29uIiwiZmlyc3ROYW1lIiwiZmlyc3QiLCJsYXN0TmFtZSIsImxhc3QiLCJhZ2UiLCJ0d2l0dGVyTmFtZSIsInR3aXR0ZXIiLCJ3b3JkcyIsInNlbnRlbmNlIiwiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/random-character/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/random-character/index.js"));
module.exports = __webpack_exports__;

})();