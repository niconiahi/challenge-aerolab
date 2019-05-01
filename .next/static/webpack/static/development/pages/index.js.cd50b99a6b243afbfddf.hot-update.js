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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./api/index.js");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/user/context */ "./state/user/context.js");



var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/components/index/Product.jsx";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  justify-content: center;\n  height: 8vh;\n  width: 25vh;\n  background-color: ", ";\n  cursor: ", ";\n  border-radius: 0.5vh;\n  margin: 2vh;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #d70026;\n\n  h2 {\n    color: #002c54;\n  }\n\n  h3,\n  span {\n    background-color: #002c54;\n    color: #ffec5c;\n    padding: 0.5vh;\n    border-radius: 0.5vh;\n    align-self: flex-end;\n    margin-right: 1vh;\n  }\n\n  img {\n    border: 1px dashed #d70026;\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // State



var Product = function Product(_ref) {
  var product = _ref.product,
      userData = _ref.userData;
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_7__["default"]);

  var redeemProduct =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(productId) {
      var userDataRes;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api__WEBPACK_IMPORTED_MODULE_6__["default"].user.redeemProduct();

            case 2:
              _context.next = 4;
              return _api__WEBPACK_IMPORTED_MODULE_6__["default"].user.getData();

            case 4:
              userDataRes = _context.sent;
              userContext.updateUserData(userDataRes.data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function redeemProduct(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var productNameForUrl = function productNameForUrl(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, product && userData && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, product.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: {
      pathname: "/detail",
      query: {
        id: product._id
      }
    },
    as: "/detail/".concat(productNameForUrl(product.name)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: product.img.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, product.category), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, product.cost), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    product: product,
    userData: userData,
    onClick: userData.points > product.cost ? function () {
      return redeemProduct(product._id);
    } : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, userData.points > product.cost ? "REDEEM" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "- ".concat(Math.abs(userData.points - product.cost))))));
};

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2(), function (_ref3) {
  var userData = _ref3.userData,
      product = _ref3.product;
  return userData.points > product.cost ? "#ffec5c" : "#d70026";
}, function (_ref4) {
  var userData = _ref4.userData,
      product = _ref4.product;
  return userData.points > product.cost ? "#d70026" : "#002c54";
}, function (_ref5) {
  var userData = _ref5.userData,
      product = _ref5.product;
  return userData.points > product.cost ? "pointer" : "auto";
});
/* harmony default export */ __webpack_exports__["default"] = (Product); // _id, category, cost, name, img.url

/***/ })

})
//# sourceMappingURL=index.js.cd50b99a6b243afbfddf.hot-update.js.map