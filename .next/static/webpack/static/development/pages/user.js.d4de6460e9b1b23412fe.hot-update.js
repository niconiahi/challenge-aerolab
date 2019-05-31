webpackHotUpdate("static/development/pages/user.js",{

/***/ "./components/user/UserRedeemHistory.jsx":
/*!***********************************************!*\
  !*** ./components/user/UserRedeemHistory.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./api/index.js");
/* harmony import */ var _components_user_RedeemedProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/user/RedeemedProduct */ "./components/user/RedeemedProduct.jsx");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/user/context */ "./state/user/context.js");

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/components/user/UserRedeemHistory.jsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #d70026;\n\n  > h3 {\n    border-bottom: 3px dashed #002c54;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // Components

 // State



var UserRedeemHistory = function UserRedeemHistory(_ref) {
  var userData = _ref.userData;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserRedeemHistoryContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, userData.redeemHistory.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_user_RedeemedProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
};

var UserRedeemHistoryContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (UserRedeemHistory);

/***/ })

})
//# sourceMappingURL=user.js.d4de6460e9b1b23412fe.hot-update.js.map