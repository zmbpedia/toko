webpackHotUpdate_N_E("pages/index",{

/***/ "./components/slide.js":
/*!*****************************!*\
  !*** ./components/slide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slide; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\zmb\\components\\slide.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Slide = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slide, _React$Component);

  var _super = _createSuper(Slide);

  function Slide() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Slide);

    _this = _super.call(this);
    _this.state = {
      show: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Slide, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("section", {
        className: "bannerBlockHolder position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "slick-fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }
      }, this.props.show.map(function (a, index) {
        return __jsx("div", {
          className: "align w-100 d-flex align-items-center bgCover",
          style: {
            background: "url(".concat(a.gambar, ")")
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }
        }, __jsx("div", {
          className: "container position-relative holder pt-xl-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 8
          }
        }, __jsx("div", {
          className: "row",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "col-12 col-xl-7",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 10
          }
        }, __jsx("div", {
          className: "txtwrap pr-xl-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }
        }, __jsx("span", {
          className: "title d-block text-uppercase fwEbold position-relative pl-2 mb-md-5 mb-sm-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 12
          }
        }, a.mini), __jsx("h1", {
          className: "fwEbold position-relative mb-md-7 mb-sm-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 12
          }
        }, "Houseplant ", __jsx("span", {
          className: "text-break d-block",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 81
          }
        }, a.desk)), a.btn)))));
      }))), __jsx("div", {
        className: "slickNavigatorsWrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }
      }, __jsx("a", {
        href: "#",
        className: "slick-prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }
      }, __jsx("i", {
        className: "icon-leftarrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 41
        }
      })), __jsx("a", {
        href: "#",
        className: "slick-next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }
      }, __jsx("i", {
        className: "icon-rightarrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 41
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, show;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("https://zmbpediabogor.store/api/slide");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                show = _context.sent;
                return _context.abrupt("return", {
                  show: show
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Slide;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZS5qcyJdLCJuYW1lcyI6WyJTbGlkZSIsInN0YXRlIiwic2hvdyIsInByb3BzIiwibWFwIiwiYSIsImluZGV4IiwiYmFja2dyb3VuZCIsImdhbWJhciIsIm1pbmkiLCJkZXNrIiwiYnRuIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNxQkEsSzs7Ozs7QUFDakIsbUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBRlU7QUFLYjs7Ozs2QkFRUTtBQUFBOztBQUNMLGFBQ0ksbUVBQ1g7QUFBUyxpQkFBUyxFQUFDLHFDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0c7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxLQUFLQyxLQUFMLENBQVdELElBQVgsQ0FBZ0JFLEdBQWhCLENBQW9CLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLGVBQ3JCO0FBQUssbUJBQVMsRUFBQywrQ0FBZjtBQUErRCxlQUFLLEVBQUU7QUFBQ0Msc0JBQVUsZ0JBQVNGLENBQUMsQ0FBQ0csTUFBWDtBQUFYLFdBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQztBQUFLLG1CQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQztBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFBTSxtQkFBUyxFQUFDLDZFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQStGSCxDQUFDLENBQUNJLElBQWpHLENBREQsRUFFQztBQUFJLG1CQUFTLEVBQUMsMkNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBcUU7QUFBTSxtQkFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXNDSixDQUFDLENBQUNLLElBQXhDLENBQXJFLENBRkQsRUFHS0wsQ0FBQyxDQUFDTSxHQUhQLENBREQsQ0FERCxDQURELENBREQsQ0FEcUI7QUFBQSxPQUFwQixDQURGLENBREQsQ0FESCxFQXNCRztBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBWSxpQkFBUyxFQUFDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUM7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbkMsQ0FERCxFQUVDO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBWSxpQkFBUyxFQUFDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUM7QUFBRyxpQkFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbkMsQ0FGRCxDQXRCSCxDQURXLENBREo7QUFnQ0g7Ozs7Ozs7Ozs7O3VCQXZDZUMseURBQUssQ0FBQyx1Q0FBRCxDOzs7QUFBakJDLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiWixvQjtpREFFQztBQUFFQSxzQkFBSSxFQUFKQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWDBCYSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlMDJmZTZhYWJiMWEyYTMyN2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3c6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL2FwaS9zbGlkZVwiKTtcclxuXHRcdGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRcdHJldHVybiB7IHNob3cgfTtcclxuXHR9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcblx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyQmxvY2tIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWNrLWZhZGVcIj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnNob3cubWFwKChhLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsaWduIHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmdDb3ZlclwiIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgke2EuZ2FtYmFyfSlgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcG9zaXRpb24tcmVsYXRpdmUgaG9sZGVyIHB0LXhsLTEwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtN1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHh0d3JhcCBwci14bC0xMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgZC1ibG9jayB0ZXh0LXVwcGVyY2FzZSBmd0Vib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHBsLTIgbWItbWQtNSBtYi1zbS0zXCI+e2EubWluaX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZndFYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSBtYi1tZC03IG1iLXNtLTRcIj5Ib3VzZXBsYW50IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYnJlYWsgZC1ibG9ja1wiPnthLmRlc2t9PC9zcGFuPjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHthLmJ0bn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcbikpfVxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlja05hdmlnYXRvcnNXcmFwXCI+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNsaWNrLXByZXZcIj48aSBjbGFzc05hbWU9XCJpY29uLWxlZnRhcnJvd1wiPjwvaT48L2E+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNsaWNrLW5leHRcIj48aSBjbGFzc05hbWU9XCJpY29uLXJpZ2h0YXJyb3dcIj48L2k+PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0IFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=