webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.jsx":
/*!**************************!*\
  !*** ./pages/detail.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.jsx");
/* harmony import */ var _components_shared_RedeemButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/_shared/RedeemButton */ "./components/_shared/RedeemButton.jsx");
/* harmony import */ var _state_product_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/product/context */ "./state/product/context.js");



var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/pages/detail.jsx";


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n\n  h2 {\n    color: #616161;\n    margin: 0;\n  }\n\n  h3 {\n    margin-top: 0;\n    color: #a3a3a3;\n  }\n\n  div:nth-child(2) {\n    margin-left: 2rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    object-fit: cover;\n    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  grid-column: 2 / -2;\n  display: flex;\n  height: 25rem;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Components


 // State



var DetailsPage = function DetailsPage(_ref) {
  var products = _ref.products,
      product = _ref.product;
  var productContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_state_product_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    productContext.updateProductList(products);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ImgContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: product.img.hdUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SpecContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, product.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, product.category), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_shared_RedeemButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "$", product.cost))));
};

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var ImgContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var SpecContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());

DetailsPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(router) {
    var products, product, productsRes;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            products = [];
            product = {};
            _context.prev = 2;
            _context.next = 5;
            return _api__WEBPACK_IMPORTED_MODULE_5__["default"].product.getAllProducts();

          case 5:
            productsRes = _context.sent;
            products = productsRes.data;
            product = products.find(function (x) {
              return x._id === router.query.id;
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);

          case 13:
            return _context.abrupt("return", {
              products: products,
              product: product
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (DetailsPage);

/***/ })

})
//# sourceMappingURL=detail.js.2320c7d6d05fb2e15182.hot-update.js.map