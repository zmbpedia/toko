webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/slide */ "./components/slide.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "D:\\zmb\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 4
        }
      }, __jsx("section", {
        className: "bannerBlockHolder position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "slick-fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }
      }, this.props.shows.map(function (a, index) {
        return __jsx("div", {
          className: "align w-100 d-flex align-items-center bgCover",
          style: {
            background: "url(".concat(a.gambar, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }
        }, __jsx("div", {
          style: {
            background: 'rgba(0,0,0, .5)'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 16
          }
        }), __jsx("div", {
          className: "container position-relative holder pt-xl-10",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 8
          }
        }, __jsx("div", {
          className: "row",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "col-12 col-xl-7",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 10
          }
        }, __jsx("div", {
          className: "txtwrap pr-xl-10",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }
        }, __jsx("span", {
          className: "title d-block text-uppercase fwEbold position-relative pl-2 mb-md-5 mb-sm-3",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 12
          }
        }, a.mini), __jsx("h1", {
          className: "fwEbold position-relative mb-md-7 mb-sm-4",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 12
          }
        }, __jsx("span", {
          className: "text-break d-block",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 70
          }
        }, a.desk)), a.btn)))));
      }))), __jsx("div", {
        className: "slickNavigatorsWrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 5
        }
      }, __jsx("a", {
        href: "#",
        className: "slick-prev",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }
      }, __jsx("i", {
        className: "icon-leftarrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 41
        }
      })), __jsx("a", {
        href: "#",
        className: "slick-next",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }
      }, __jsx("i", {
        className: "icon-rightarrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 41
        }
      })))), __jsx("section", {
        className: "featureSec container overflow-hidden pt-xl-12 pb-xl-9 pt-lg-10 pb-lg-4 pt-md-8 pb-md-2 pt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }
      }, __jsx("header", {
        className: "col-12 mainHeader mb-4 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "headingIV playfair fwEblod mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 8
        }
      }, "Produk Baru"), __jsx("span", {
        className: "headerBorder d-block mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 8
        }
      }, __jsx("img", {
        src: "/assets/img/hbdr.png",
        alt: "Header Border",
        className: "img-fluid img-bdr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 8
        }
      }, "Beberapa koleksi tanaman hias terbaru"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }
      }, this.props.show.map(function (a, index) {
        return __jsx("div", {
          className: "col-12 col-sm-6 col-lg-3 featureCol position-relative mb-6",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 8
          }
        }, __jsx("div", {
          className: "border",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "imgHolder position-relative w-100 overflow-hidden",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 10
          }
        }, __jsx("img", {
          src: a.gambar,
          style: {
            height: "300px",
            objectFit: "cover",
            width: "100%"
          },
          id: "wax-img",
          alt: a.namaproduk,
          className: "img-fluid",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }
        })), __jsx("div", {
          "class": "text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 10
          }
        }, __jsx("span", {
          "class": "title d-block mb-2",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/produk/[id]/[product]",
          as: "/product/".concat(a.id, "/").concat(a.namaproduk.replace(/\s/g, "-")),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 12
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }
        }, truncate(a.namaproduk)))), __jsx("span", {
          className: "price d-block fwEbold",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, a.harga))));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, show, ress, shows;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://zmbpediabogor.store/api/homie");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                show = _context.sent;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://zmbpediabogor.store/api/slide");

              case 8:
                ress = _context.sent;
                _context.next = 11;
                return ress.json();

              case 11:
                shows = _context.sent;
                return _context.abrupt("return", {
                  show: show,
                  shows: shows
                });

              case 13:
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

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidHJ1bmNhdGUiLCJzdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJIb21lIiwicHJvcHMiLCJzaG93cyIsIm1hcCIsImEiLCJpbmRleCIsImJhY2tncm91bmQiLCJnYW1iYXIiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbmkiLCJkZXNrIiwiYnRuIiwic2hvdyIsImhlaWdodCIsIm9iamVjdEZpdCIsIndpZHRoIiwibmFtYXByb2R1ayIsImlkIiwicmVwbGFjZSIsImhhcmdhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVzcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ3RCLFNBQU9BLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLEVBQWIsR0FBa0JELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBaUIsRUFBakIsSUFBdUIsS0FBekMsR0FBaURGLEdBQXhEO0FBQ0E7O0lBQ29CRyxJOzs7Ozs7Ozs7Ozs7OzZCQVNYO0FBQUE7O0FBQ1IsYUFDQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSDtBQUFTLGlCQUFTLEVBQUMscUNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsZUFDdEI7QUFBSyxtQkFBUyxFQUFDLCtDQUFmO0FBQStELGVBQUssRUFBRTtBQUFDQyxzQkFBVSxnQkFBU0YsQ0FBQyxDQUFDRyxNQUFYLE1BQVg7QUFBaUNDLDBCQUFjLFNBQS9DO0FBQzdEQyw4QkFBa0I7QUFEMkMsV0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVTO0FBQUssZUFBSyxFQUFFO0FBQUNILHNCQUFVLEVBQUM7QUFBWixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGVCxFQUdDO0FBQUssbUJBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQztBQUFNLG1CQUFTLEVBQUMsNkVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBK0ZGLENBQUMsQ0FBQ00sSUFBakcsQ0FERCxFQUVDO0FBQUksbUJBQVMsRUFBQywyQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTBEO0FBQU0sbUJBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFzQ04sQ0FBQyxDQUFDTyxJQUF4QyxDQUExRCxDQUZELEVBR0tQLENBQUMsQ0FBQ1EsR0FIUCxDQURELENBREQsQ0FERCxDQUhELENBRHNCO0FBQUEsT0FBckIsQ0FERixDQURELENBREosRUF3Qkk7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksaUJBQVMsRUFBQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1DO0FBQUcsaUJBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQW5DLENBREQsRUFFQztBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksaUJBQVMsRUFBQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1DO0FBQUcsaUJBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQW5DLENBRkQsQ0F4QkosQ0FERyxFQWdDQztBQUFTLGlCQUFTLEVBQUMsNkZBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBUSxpQkFBUyxFQUFDLG9DQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxpQkFBUyxFQUFDLGlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsRUFJQztBQUFNLGlCQUFTLEVBQUMsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUNDLFdBQUcsRUFBQyxzQkFETDtBQUVDLFdBQUcsRUFBQyxlQUZMO0FBR0MsaUJBQVMsRUFBQyxtQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FKRCxFQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBWEQsQ0FERCxDQURELEVBZ0JDO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxLQUFLWCxLQUFMLENBQVdZLElBQVgsQ0FBZ0JWLEdBQWhCLENBQW9CLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLGVBQ3BCO0FBQUssbUJBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDO0FBQUssbUJBQVMsRUFBQyxtREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFDQyxhQUFHLEVBQUVELENBQUMsQ0FBQ0csTUFEUjtBQUVDLGVBQUssRUFBRTtBQUNOTyxrQkFBTSxFQUFFLE9BREY7QUFFTkMscUJBQVMsRUFBRSxPQUZMO0FBR05DLGlCQUFLLEVBQUU7QUFIRCxXQUZSO0FBT0MsWUFBRSxFQUFDLFNBUEo7QUFRQyxhQUFHLEVBQUVaLENBQUMsQ0FBQ2EsVUFSUjtBQVNDLG1CQUFTLEVBQUMsV0FUWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQsQ0FERCxFQWNDO0FBQUssbUJBQU0sK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDO0FBQU0sbUJBQU0sb0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDLE1BQUMsaURBQUQ7QUFDQyxjQUFJLEVBQUMsd0JBRE47QUFFQyxZQUFFLHFCQUNEYixDQUFDLENBQUNjLEVBREQsY0FFRWQsQ0FBQyxDQUFDYSxVQUFGLENBQWFFLE9BQWIsQ0FDSCxLQURHLEVBRUgsR0FGRyxDQUZGLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSXZCLFFBQVEsQ0FBQ1EsQ0FBQyxDQUFDYSxVQUFILENBQVosQ0FURCxDQURELENBREQsRUFjQztBQUFNLG1CQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRWIsQ0FBQyxDQUFDZ0IsS0FESixDQWRELENBZEQsQ0FERCxDQURvQjtBQUFBLE9BQXBCLENBREYsQ0FoQkQsQ0FoQ0QsQ0FERDtBQTJGQTs7Ozs7Ozs7Ozs7dUJBbkdrQkMseURBQUssQ0FBQyx1Q0FBRCxDOzs7QUFBakJDLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiVixvQjs7dUJBQ2NRLHlEQUFLLENBQUMsdUNBQUQsQzs7O0FBQWxCRyxvQjs7dUJBQ2FBLElBQUksQ0FBQ0QsSUFBTCxFOzs7QUFBZHJCLHFCO2lEQUNDO0FBQUVXLHNCQUFJLEVBQUpBLElBQUY7QUFBUVgsdUJBQUssRUFBTEE7QUFBUixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQU55QnVCLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjkwMzc3NmNlN2RjOTQ5Mjc4ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2xpZGVcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHN0cikge1xuXHRyZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiIDogc3RyO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL2hvbWllXCIpO1xuXHRcdGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0Y29uc3QgcmVzcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL2FwaS9zbGlkZVwiKTtcblx0XHRjb25zdCBzaG93cyA9IGF3YWl0IHJlc3MuanNvbigpO1xuXHRcdHJldHVybiB7IHNob3csIHNob3dzIH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG48c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJCbG9ja0hvbGRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWNrLWZhZGVcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuc2hvd3MubWFwKChhLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGlnbiB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnQ292ZXJcIiBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoJHthLmdhbWJhcn0pYCxcdGJhY2tncm91bmRTaXplOiBgY292ZXJgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgY2VudGVyYCx9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDAsMCwwLCAuNSknfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBvc2l0aW9uLXJlbGF0aXZlIGhvbGRlciBwdC14bC0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtN1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR4dHdyYXAgcHIteGwtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkLWJsb2NrIHRleHQtdXBwZXJjYXNlIGZ3RWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgcGwtMiBtYi1tZC01IG1iLXNtLTNcIj57YS5taW5pfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZndFYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSBtYi1tZC03IG1iLXNtLTRcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJyZWFrIGQtYmxvY2tcIj57YS5kZXNrfTwvc3Bhbj48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAge2EuYnRufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuKSl9XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCBcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xpY2tOYXZpZ2F0b3JzV3JhcFwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2xpY2stcHJldlwiPjxpIGNsYXNzTmFtZT1cImljb24tbGVmdGFycm93XCI+PC9pPjwvYT5cblx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNsaWNrLW5leHRcIj48aSBjbGFzc05hbWU9XCJpY29uLXJpZ2h0YXJyb3dcIj48L2k+PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0IFxuXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVTZWMgY29udGFpbmVyIG92ZXJmbG93LWhpZGRlbiBwdC14bC0xMiBwYi14bC05IHB0LWxnLTEwIHBiLWxnLTQgcHQtbWQtOCBwYi1tZC0yIHB0LTVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJjb2wtMTIgbWFpbkhlYWRlciBtYi00IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nSVYgcGxheWZhaXIgZndFYmxvZCBtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0UHJvZHVrIEJhcnVcblx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyQm9yZGVyIGQtYmxvY2sgbWItNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9hc3NldHMvaW1nL2hiZHIucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkhlYWRlciBCb3JkZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1iZHJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHA+QmViZXJhcGEga29sZWtzaSB0YW5hbWFuIGhpYXMgdGVyYmFydTwvcD5cblx0XHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zaG93Lm1hcCgoYSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTMgZmVhdHVyZUNvbCBwb3NpdGlvbi1yZWxhdGl2ZSBtYi02XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyIHBvc2l0aW9uLXJlbGF0aXZlIHctMTAwIG92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthLmdhbWJhcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwid2F4LWltZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXthLm5hbWFwcm9kdWt9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB5LXhsLTUgcHktc20tNCBweS0yIHB4LXhsLTIgcHgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL3Byb2R1ay9baWRdL1twcm9kdWN0XVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcz17YC9wcm9kdWN0LyR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGEuaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0vJHthLm5hbWFwcm9kdWsucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0L1xccy9nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIi1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPnt0cnVuY2F0ZShhLm5hbWFwcm9kdWspfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2EuaGFyZ2F9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==