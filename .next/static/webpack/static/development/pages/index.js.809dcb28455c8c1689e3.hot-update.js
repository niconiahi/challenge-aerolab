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
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Banner */ "./layouts/components/Banner.jsx");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/user/context */ "./state/user/context.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavigationBar */ "./layouts/components/NavigationBar.jsx");

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/layouts/MainLayout.jsx";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: #f9f9f9;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // State




var MainLayout = function MainLayout(_ref) {
  var children = _ref.children;
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var userData = userContext.userState.data;
  var addPoints = userContext.addPoints;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userData: userData,
    addPoints: addPoints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
};

var BottomContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ })

})
//# sourceMappingURL=index.js.809dcb28455c8c1689e3.hot-update.js.map