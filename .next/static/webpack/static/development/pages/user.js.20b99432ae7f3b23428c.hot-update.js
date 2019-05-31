webpackHotUpdate("static/development/pages/user.js",{

/***/ "./components/user/UserInformation.jsx":
/*!*********************************************!*\
  !*** ./components/user/UserInformation.jsx ***!
  \*********************************************/
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

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/components/user/UserInformation.jsx";


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  color: #ffec5c;\n  align-items: center;\n  justify-content: center;\n  height: 6vh;\n  width: 12vh;\n  background-color: #d70026;\n  border-radius: 0.5vh;\n  margin-right: 3vh;\n  cursor: pointer;\n\n  :first-of-type {\n    margin-left: 3vh;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  grid-column: 3 / 5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #d70026;\n\n  > h3 {\n    border-bottom: 3px dashed #002c54;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  color: #d70026;\n\n  h3,\n  h2 {\n    border-bottom: 3px solid #002c54;\n  }\n\n  > h4 {\n    color: #002c54;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // Components

 // State



var UserInformation = function UserInformation(_ref) {
  var userData = _ref.userData;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, userData.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Joined: ".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(userData.createDate, 'DD MMMM of YYYY'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Press a button and get more points"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: function onClick() {
      return addPoints(1000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "1000"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: function onClick() {
      return addPoints(5000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "5000"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: function onClick() {
      return addPoints(7500);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "7500")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserRedeemHistoryContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Redeem History"), userData.redeemHistory.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_user_RedeemedProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  })));
};

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var UserRedeemHistoryContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var LeftContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (UserInformation);

/***/ })

})
//# sourceMappingURL=user.js.20b99432ae7f3b23428c.hot-update.js.map