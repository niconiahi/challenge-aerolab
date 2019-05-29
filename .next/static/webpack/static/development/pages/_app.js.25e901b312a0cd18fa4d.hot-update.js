webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./state/user/reducers.js":
/*!********************************!*\
  !*** ./state/user/reducers.js ***!
  \********************************/
/*! exports provided: PRODUCT_REDEEM, USER_UPDATE, POINTS_ADD, UserReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_REDEEM", function() { return PRODUCT_REDEEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATE", function() { return USER_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS_ADD", function() { return POINTS_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReducers", function() { return UserReducers; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./api/index.js");




var PRODUCT_REDEEM = 'PRODUCT_REDEEM';
var USER_UPDATE = 'USER_UPDATE';
var POINTS_ADD = 'POINTS_ADD';

var redeemProduct =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(productId, state) {
    var userDataRes;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].user.redeemProduct(productId);

          case 2:
            _context.next = 4;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].user.getData();

          case 4:
            userDataRes = _context.sent;
            return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
              data: userDataRes.data
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function redeemProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var addPoints =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(quantity, state) {
    var userDataRes;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].user.addPoints(quantity);

          case 2:
            _context2.next = 4;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].user.getData();

          case 4:
            userDataRes = _context2.sent;
            return _context2.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
              data: userDataRes.data
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addPoints(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var UserReducers = function UserReducers(state, action) {
  switch (action.type) {
    case PRODUCT_REDEEM:
      return redeemProduct(action.productId, state);

    case USER_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        data: action.userData
      });

    case POINTS_ADD:
      return addPoints(action.quantity, state);

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.25e901b312a0cd18fa4d.hot-update.js.map