webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./state/product/reducers.js":
/*!***********************************!*\
  !*** ./state/product/reducers.js ***!
  \***********************************/
/*! exports provided: PRODUCTS_UPDATE, ProductReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_UPDATE", function() { return PRODUCTS_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReducers", function() { return ProductReducers; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var PRODUCTS_UPDATE = "PRODUCTS_UPDATE";
var ProductReducers = function ProductReducers(state, action) {
  switch (action.type) {
    case PRODUCTS_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        products: action.products
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.9d62490b56d205a9d4fa.hot-update.js.map