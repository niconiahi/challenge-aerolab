webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.jsx");
/* harmony import */ var _components_index_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index/Product */ "./components/index/Product.jsx");
/* harmony import */ var _components_index_FiltersBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/index/FiltersBar */ "./components/index/FiltersBar.jsx");
/* harmony import */ var _state_product_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/product/context */ "./state/product/context.js");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/user/context */ "./state/user/context.js");




var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/pages/index.jsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  grid-column: 2 / -2;\n  display: grid;\n  grid-template: auto / repeat(auto-fill, minmax(260px, 1fr));\n  grid-gap: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // API

 // Components



 // State




var IndexPage = function IndexPage(_ref) {
  var products = _ref.products,
      userData = _ref.userData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      selectedFilter = _useState2[0],
      setSelectedFilter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      sortedPrice = _useState4[0],
      setSortedPrice = _useState4[1];

  var productContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_state_product_context__WEBPACK_IMPORTED_MODULE_11__["default"]);
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_12__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    productContext.updateProductList(products);
    userContext.updateUserData(userData);
  }, []);

  var filterOptions = function filterOptions() {
    return productContext.productState.products.reduce(function (acc, product) {
      if (acc.indexOf(product.category) === -1) {
        acc.push(product.category);
      }

      return acc;
    }, []);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_index_FiltersBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filterOptions: filterOptions(),
    setSelectedFilter: setSelectedFilter,
    setSortedPrice: setSortedPrice,
    sortedPrice: sortedPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ProductsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, productContext.productState.products && ramda__WEBPACK_IMPORTED_MODULE_6__["pipe"](ramda__WEBPACK_IMPORTED_MODULE_6__["filter"](function (product) {
    return product.category.includes(selectedFilter);
  }), ramda__WEBPACK_IMPORTED_MODULE_6__["ifElse"](function () {
    return sortedPrice;
  }, ramda__WEBPACK_IMPORTED_MODULE_6__["sort"](ramda__WEBPACK_IMPORTED_MODULE_6__["ascend"](ramda__WEBPACK_IMPORTED_MODULE_6__["prop"]('cost'))), ramda__WEBPACK_IMPORTED_MODULE_6__["sort"](ramda__WEBPACK_IMPORTED_MODULE_6__["descend"](ramda__WEBPACK_IMPORTED_MODULE_6__["prop"]('cost')))), ramda__WEBPACK_IMPORTED_MODULE_6__["map"](function (product) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_index_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: product._id,
      product: product,
      userData: userContext.userState.data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }))(productContext.productState.products))));
};

var ProductsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
IndexPage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var products, userData, userDataRes, productsRes;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          products = [];
          userData = {};
          _context.prev = 2;
          _context.next = 5;
          return _api__WEBPACK_IMPORTED_MODULE_7__["default"].user.getData();

        case 5:
          userDataRes = _context.sent;
          userData = userDataRes.data;
          _context.next = 9;
          return _api__WEBPACK_IMPORTED_MODULE_7__["default"].product.getAllProducts();

        case 9:
          productsRes = _context.sent;
          products = productsRes.data;
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);

        case 16:
          return _context.abrupt("return", {
            products: products,
            userData: userData
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[2, 13]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.67ff4547a60edb7b3c23.hot-update.js.map