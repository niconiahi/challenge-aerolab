webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/MainLayout.jsx":
/*!********************************!*\
  !*** ./layouts/MainLayout.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TopBar */ "./layouts/components/TopBar.jsx");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/user/context */ "./state/user/context.js");

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/layouts/MainLayout.jsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template: 10vh / 1fr repeat(auto-fill, minmax(276px, 1fr));\n  justify-content: center;\n  grid-gap: 3vh;\n  padding: 1vh;\n  background-color: #ffec5c;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // State



var MainLayout = function MainLayout(_ref) {
  var children = _ref.children;
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userData: userContext.userState.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), children);
};

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ })

})
//# sourceMappingURL=index.js.915a9c970b63fe742112.hot-update.js.map