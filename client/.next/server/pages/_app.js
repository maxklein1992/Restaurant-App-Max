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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/maxklein/Desktop/Restaurant-app-max/client/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_redux_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBQ2I7QUFFaEMsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUFPLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQztBQUVBLGlFQUFlSCwrREFBaUIsQ0FBQ0MsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3NyYy9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiJdLCJuYW1lcyI6WyJ3cmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": () => (/* binding */ authSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectAuthState\": () => (/* binding */ selectAuthState),\n/* harmony export */   \"setEmailState\": () => (/* binding */ setEmailState),\n/* harmony export */   \"setIsAdminState\": () => (/* binding */ setIsAdminState),\n/* harmony export */   \"setTokenState\": () => (/* binding */ setTokenState)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\n// Initial state\nconst initialState = {\n    token: null,\n    email: null,\n    isAdmin: null\n};\n// Actual Slice\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        // Action to set the authentication status\n        setIsAdminState (state, action) {\n            state.isAdmin = action.payload;\n        },\n        setEmailState (state, action) {\n            state.email = action.payload;\n        },\n        setTokenState (state, action) {\n            state.token = action.payload;\n        }\n    }\n});\nconst { setIsAdminState , setEmailState , setTokenState  } = authSlice.actions;\nconst selectAuthState = (state)=>state.auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQztBQUUvQyxnQkFBZ0I7QUFDaEIsTUFBTUMsZUFBZTtJQUNuQkMsT0FBTyxJQUFJO0lBQ1hDLE9BQU8sSUFBSTtJQUNYQyxTQUFTLElBQUk7QUFDZjtBQUVBLGVBQWU7QUFDUixNQUFNQyxZQUFZTCw2REFBV0EsQ0FBQztJQUNuQ00sTUFBTTtJQUNOTDtJQUNBTSxVQUFVO1FBQ1IsMENBQTBDO1FBQzFDQyxpQkFBZ0JDLEtBQUssRUFBRUMsTUFBTSxFQUFFO1lBQzdCRCxNQUFNTCxPQUFPLEdBQUdNLE9BQU9DLE9BQU87UUFDaEM7UUFDQUMsZUFBY0gsS0FBSyxFQUFFQyxNQUFNLEVBQUU7WUFDM0JELE1BQU1OLEtBQUssR0FBR08sT0FBT0MsT0FBTztRQUM5QjtRQUNBRSxlQUFjSixLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUMzQkQsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPO1FBQzlCO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFSCxnQkFBZSxFQUFFSSxjQUFhLEVBQUVDLGNBQWEsRUFBRSxHQUM1RFIsVUFBVVMsT0FBTyxDQUFDO0FBRWIsTUFBTUMsa0JBQWtCLENBQUNOLFFBQVVBLE1BQU1PLElBQUksQ0FBQztBQUVyRCxpRUFBZVgsVUFBVVksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGguanM/YjcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbi8vIEluaXRpYWwgc3RhdGVcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdG9rZW46IG51bGwsXG4gIGVtYWlsOiBudWxsLFxuICBpc0FkbWluOiBudWxsLFxufTtcblxuLy8gQWN0dWFsIFNsaWNlXG5leHBvcnQgY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImF1dGhcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vIEFjdGlvbiB0byBzZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHN0YXR1c1xuICAgIHNldElzQWRtaW5TdGF0ZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5pc0FkbWluID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRFbWFpbFN0YXRlKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRUb2tlblN0YXRlKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRJc0FkbWluU3RhdGUsIHNldEVtYWlsU3RhdGUsIHNldFRva2VuU3RhdGUgfSA9XG4gIGF1dGhTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gKHN0YXRlKSA9PiBzdGF0ZS5hdXRoO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwiZW1haWwiLCJpc0FkbWluIiwiYXV0aFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0SXNBZG1pblN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0RW1haWxTdGF0ZSIsInNldFRva2VuU3RhdGUiLCJhY3Rpb25zIiwic2VsZWN0QXV0aFN0YXRlIiwiYXV0aCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducers/auth.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/auth */ \"./src/redux/reducers/auth.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst store = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [_reducers_auth__WEBPACK_IMPORTED_MODULE_1__.authSlice.name]: _reducers_auth__WEBPACK_IMPORTED_MODULE_1__.authSlice.reducer\n        },\n        devTools: true\n    });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQUMzQjtBQUNPO0FBRW5ELE1BQU1LLFFBQVEsSUFDWkwsZ0VBQWNBLENBQUM7UUFDYk0sU0FBUztZQUNQLENBQUNILDBEQUFjLENBQUMsRUFBRUEsNkRBQWlCO1FBQ3JDO1FBQ0FLLFVBQVUsSUFBSTtJQUNoQjtBQUVGLGlFQUFlSCxLQUFLQSxFQUFDO0FBRWQsTUFBTUksVUFBVUwsaUVBQWFBLENBQUNDLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanM/ZGQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBhdXRoU2xpY2UgfSBmcm9tIFwiLi9yZWR1Y2Vycy9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG5jb25zdCBzdG9yZSA9ICgpID0+XG4gIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICBbYXV0aFNsaWNlLm5hbWVdOiBhdXRoU2xpY2UucmVkdWNlcixcbiAgICB9LFxuICAgIGRldlRvb2xzOiB0cnVlLFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihzdG9yZSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJUaHVua0FjdGlvbiIsIkFjdGlvbiIsImF1dGhTbGljZSIsImNyZWF0ZVdyYXBwZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJuYW1lIiwiZGV2VG9vbHMiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();