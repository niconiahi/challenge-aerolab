webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/components/TopBar.jsx":
/*!***************************************!*\
  !*** ./layouts/components/TopBar.jsx ***!
  \***************************************/
/*! exports provided: PointsContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsContainer", function() { return PointsContainer; });
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
/* harmony import */ var _components_index_FiltersBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/index/FiltersBar */ "./components/index/FiltersBar.jsx");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/user/context */ "./state/user/context.js");



var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/layouts/components/TopBar.jsx";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 7rem;\n  font-size: 1.5rem;\n  height: 3rem;\n  border-radius: 20.5px;\n  background-color: #ededed;\n\n  span {\n    margin-right: 0.375rem;\n  }\n\n  div {\n    width: 24px;\n    height: 24px;\n    background-image: radial-gradient(circle at 50% 50%, #ffcf00, #f7ae15);\n    border-radius: 50%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  a {\n    color: #616161;\n    font-size: 1.5rem;\n    text-decoration: none;\n    margin-right: 1.125rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  button,\n  label {\n    margin-right: 1.5rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #f9f9f9;\n  margin: 1.5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 7rem;\n  font-size: 1.25rem;\n  height: 3rem;\n  border-radius: 20.5px;\n  border-bottom: 1px solid #d3d3d3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // Components

 // State



var TopBar = function TopBar(_ref) {
  var userData = _ref.userData;
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_8__["default"]);

  var addPoints =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(quantity) {
      var userDataRes;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _api__WEBPACK_IMPORTED_MODULE_6__["default"].user.addPoints(quantity);
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_6__["default"].user.getData();

            case 3:
              userDataRes = _context.sent;
              userContext.updateUserData(userDataRes.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addPoints(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_index_FiltersBar__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Add points: "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonClassicReloaded, {
    onClick: function onClick() {
      return addPoints(1000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "1000"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonClassicReloaded, {
    onClick: function onClick() {
      return addPoints(5000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "5000"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonClassicReloaded, {
    onClick: function onClick() {
      return addPoints(7500);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "7500")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Jonh Kite"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PointsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, userData && "".concat(userData.points)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))));
};

var ButtonClassicReloaded = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_index_FiltersBar__WEBPACK_IMPORTED_MODULE_7__["ButtonClassic"])(_templateObject());
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var LeftContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
var RightContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
var PointsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ })

})
//# sourceMappingURL=index.js.891b98647d6ba33023ee.hot-update.js.map