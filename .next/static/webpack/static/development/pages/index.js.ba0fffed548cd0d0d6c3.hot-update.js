webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/components/NavigationBar.jsx":
/*!**********************************************!*\
  !*** ./layouts/components/NavigationBar.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _state_product_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/product/context */ "./state/product/context.js");

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/layouts/components/NavigationBar.jsx";


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  button {\n    background-color: transparent;\n    border-radius: 50%;\n    border: 1px solid #d9d9d9;\n    height: 3rem;\n    width: 3rem;\n    margin-left: 0.75rem;\n\n    :focus {\n      outline: none;\n    }\n\n    i {\n      color: #d9d9d9;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  span {\n    font-size: 1.5rem;\n    color: #616161;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  grid-column: 2 / -2;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #d9d9d9;\n  padding-bottom: 1.5rem;\n  margin-bottom: 3em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // State



var NavigationBar = function NavigationBar(_ref) {
  var userData = _ref.userData;
  var productContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_state_product_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var pagesTotal = productContext.productState.products.length / 16;
  var currentPage = productContext.productState.pageNumber + 1;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "".concat(currentPage, " of ").concat(pagesTotal))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, currentPage > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return productContext.setPageNumber(productContext.productState.pageNumber - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-angle-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return productContext.setPageNumber(productContext.productState.pageNumber + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-angle-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var LeftContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var RightContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=index.js.ba0fffed548cd0d0d6c3.hot-update.js.map