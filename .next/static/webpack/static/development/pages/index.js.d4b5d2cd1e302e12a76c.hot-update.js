webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/index/Product.jsx":
/*!**************************************!*\
  !*** ./components/index/Product.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_RedeemButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/RedeemButton */ "./components/_shared/RedeemButton.jsx");

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/components/index/Product.jsx";


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  max-height: 260px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #d70026;\n  background-color: white;\n\n  h2 {\n    color: #002c54;\n  }\n\n  h3,\n  span {\n    background-color: #002c54;\n    color: #ffec5c;\n    padding: 0.5vh;\n    border-radius: 0.5vh;\n    align-self: flex-end;\n    margin-right: 1vh;\n  }\n\n  img {\n    cursor: pointer;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-height: 180px;\n  max-width: 90%;\n  border-bottom: 1px solid #f9f9f9;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // Components



var Product = function Product(_ref) {
  var product = _ref.product,
      userData = _ref.userData;

  var productNameForUrl = function productNameForUrl(name) {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, product && userData && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/detail',
      query: {
        id: product._id
      }
    },
    as: "/detail/".concat(productNameForUrl(product.name)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: product.img.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InformationContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, product.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, product.category))));
};

var InformationContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ImageContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (Product); // _id, category, cost, name, img.url

/***/ })

})
//# sourceMappingURL=index.js.d4b5d2cd1e302e12a76c.hot-update.js.map