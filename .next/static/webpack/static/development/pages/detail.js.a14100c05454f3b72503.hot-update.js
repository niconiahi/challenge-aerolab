webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./components/_shared/RedeemButton.jsx":
/*!*********************************************!*\
  !*** ./components/_shared/RedeemButton.jsx ***!
  \*********************************************/
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./api/index.js");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/user/context */ "./state/user/context.js");



var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/components/_shared/RedeemButton.jsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  color: #616161;\n  justify-content: center;\n  width: 14.25rem;\n  height: 2.625rem;\n  border-radius: 1.25rem;\n  background-color: white;\n  box-shadow: 1px 1px 4px 0 #25bbf1;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // State



var RedeemButton = function RedeemButton(_ref) {
  var product = _ref.product;
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var userData = userContext.userState.data;

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
              return _api__WEBPACK_IMPORTED_MODULE_5__["default"].user.redeemProduct(productId);

            case 2:
              _context.next = 4;
              return _api__WEBPACK_IMPORTED_MODULE_5__["default"].user.getData();

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

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    product: product,
    userData: userData,
    onClick: userData.points > product.cost ? function () {
      return redeemProduct(product._id);
    } : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, userData.points > product.cost ? 'Reedem now' : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "- ".concat(Math.abs(userData.points - product.cost)))));
};

var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (RedeemButton);

/***/ })

})
//# sourceMappingURL=detail.js.a14100c05454f3b72503.hot-update.js.map