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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! minify-css-string */ "./node_modules/minify-css-string/dist/index.js");
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(minify_css_string__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "D:\\zmb\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      var settings = {
        dots: true,
        fade: true,
        nextArrow: false,
        prevArrow: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      var cssString = "\n.bgCover{\n\t\t\t\t\t\tbackground-repeate\n\t\t\t\t\t}\n\t\t\t\t\t.mainHeader {\n\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t}\n\t\t\t\t\t.overl{\n\t\t\t\t\t\twidth: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgba(255,255,255, .5);\n\t\t\t\t\t}";
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 4
        }
      }, __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: minify_css_string__WEBPACK_IMPORTED_MODULE_14___default()(cssString)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 8
        }
      }), __jsx(Nav, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 3
        }
      }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_12__["NextSeo"], {
        title: "Selamat Datang di zmbpediabogor",
        description: "Toko aneka macam tanaman hias",
        canonical: "https://zmbpediabogor.store/",
        openGraph: {
          url: "https://zmbpediabogor.store/",
          title: "Selamat Datang di zmbpediabogor",
          description: "Toko aneka macam tanaman hias",
          images: [{
            url: "https://zmbpediabogor.store/assets/img/logo.png",
            width: 600,
            height: 315,
            alt: "zmbpediabogor"
          }],
          site_name: 'zmbpediabogor'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 2
        }
      }), __jsx("section", {
        className: "bannerBlockHolder position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 1
        }
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, settings, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }), this.props.shows.map(function (a, index) {
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "align w-100 d-flex align-items-center bgCover",
          style: {
            background: "url(".concat(a.gambar, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }
        }, __jsx("div", {
          className: "overl",
          style: {
            background: 'rgba(255,255,255, .5)'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 16
          }
        }), __jsx("div", {
          className: "container position-relative holder pt-xl-10",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 8
          }
        }, __jsx("div", {
          className: "row",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "col-12 col-xl-7",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 10
          }
        }, __jsx("div", {
          className: "txtwrap pr-xl-10",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, __jsx("span", {
          className: "title d-block text-uppercase fwEbold position-relative pl-2 mb-md-5 mb-sm-3",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 12
          }
        }, a.mini), __jsx("h1", {
          className: "fwEbold position-relative mb-md-7 mb-sm-4",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 12
          }
        }, __jsx("span", {
          className: "text-break d-block",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 70
          }
        }, a.desk))))))));
      }))), __jsx("section", {
        className: "featureSec container overflow-hidden pt-xl-12 pb-xl-9 pt-lg-10 pb-lg-4 pt-md-8 pb-md-2 pt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }
      }, __jsx("header", {
        className: "col-12 mainHeader mb-4 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "headingIV playfair fwEblod mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 8
        }
      }, "Produk Baru"), __jsx("span", {
        className: "headerBorder d-block mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 8
        }
      }, __jsx("img", {
        src: "/assets/img/hbdr.png",
        alt: "Header Border",
        className: "img-fluid img-bdr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 8
        }
      }, "Beberapa koleksi tanaman hias terbaru"))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }
      }, this.props.show.map(function (a, index) {
        return __jsx("div", {
          className: "col-12 col-sm-6 col-lg-3 featureCol position-relative mb-6",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 8
          }
        }, __jsx("div", {
          className: "border",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "imgHolder position-relative w-100 overflow-hidden",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
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
            lineNumber: 129,
            columnNumber: 11
          }
        })), __jsx("div", {
          "class": "text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 10
          }
        }, __jsx("span", {
          "class": "title d-block mb-2",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 11
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/produk/[id]/[product]",
          as: "/produk/".concat(a.id, "/").concat(a.namaproduk.replace(/\s/g, "-")),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 12
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }
        }, truncate(a.namaproduk)))), __jsx("span", {
          className: "price d-block fwEbold",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 11
          }
        }, a.harga))));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ress, shows, res, show;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://zmbpediabogor.store/api/slide");

              case 2:
                ress = _context.sent;
                _context.next = 5;
                return ress.json();

              case 5:
                shows = _context.sent;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://zmbpediabogor.store/api/homie");

              case 8:
                res = _context.sent;
                _context.next = 11;
                return res.json();

              case 11:
                show = _context.sent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidHJ1bmNhdGUiLCJzdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJIb21lIiwic2V0dGluZ3MiLCJkb3RzIiwiZmFkZSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImFycm93cyIsImF1dG9wbGF5IiwiaW5maW5pdGUiLCJzcGVlZCIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNzc1N0cmluZyIsIl9faHRtbCIsIm1pbmlmeUNzc1N0cmluZyIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpdGVfbmFtZSIsInByb3BzIiwic2hvd3MiLCJtYXAiLCJhIiwiaW5kZXgiLCJiYWNrZ3JvdW5kIiwiZ2FtYmFyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5pIiwiZGVzayIsInNob3ciLCJvYmplY3RGaXQiLCJuYW1hcHJvZHVrIiwiaWQiLCJyZXBsYWNlIiwiaGFyZ2EiLCJmZXRjaCIsInJlc3MiLCJqc29uIiwicmVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ3RCLFNBQU9BLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLEVBQWIsR0FBa0JELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBaUIsRUFBakIsSUFBdUIsS0FBekMsR0FBaURGLEdBQXhEO0FBQ0E7O0lBQ29CRyxJOzs7Ozs7Ozs7Ozs7OzZCQVNYO0FBQUE7O0FBQ1AsVUFBSUMsUUFBUSxHQUFHO0FBQ1pDLFlBQUksRUFBRSxJQURNO0FBRVpDLFlB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RyxDQUFDRCxJQUFKLEU7OztBQUFiUixvQjtpREFFQztBQUFFQSxzQkFBSSxFQUFKQSxJQUFGO0FBQVFWLHVCQUFLLEVBQUxBO0FBQVIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQeUJvQiw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkYzY4NzhjYzE2NGM5YjllZmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBtaW5pZnlDc3NTdHJpbmcgfSBmcm9tIFwibWluaWZ5LWNzcy1zdHJpbmdcIjtcbmZ1bmN0aW9uIHRydW5jYXRlKHN0cikge1xuXHRyZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiIDogc3RyO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0XHRjb25zdCByZXNzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL3NsaWRlXCIpO1xuXHRcdGNvbnN0IHNob3dzID0gYXdhaXQgcmVzcy5qc29uKCk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL2hvbWllXCIpO1xuXHRcdGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcblx0XHRyZXR1cm4geyBzaG93LCBzaG93cyB9O1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHQgdmFyIHNldHRpbmdzID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGZhZGU6IHRydWUsXG4gICAgICBuZXh0QXJyb3c6IGZhbHNlLFxuICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgIH07XG5cbiAgICBjb25zdCBjc3NTdHJpbmcgPSBgXG4uYmdDb3Zlcntcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubWFpbkhlYWRlciB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQub3Zlcmx7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIC41KTtcblx0XHRcdFx0XHR9YDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0ICAgIDxzdHlsZVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IG1pbmlmeUNzc1N0cmluZyhjc3NTdHJpbmcpLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gIDxOYXYgLz5cbiA8TmV4dFNlb1xuICAgICAgdGl0bGU9XCJTZWxhbWF0IERhdGFuZyBkaSB6bWJwZWRpYWJvZ29yXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiVG9rbyBhbmVrYSBtYWNhbSB0YW5hbWFuIGhpYXNcIlxuICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL1wiXG4gICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9cIixcbiAgICAgICAgdGl0bGU6IFwiU2VsYW1hdCBEYXRhbmcgZGkgem1icGVkaWFib2dvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUb2tvIGFuZWthIG1hY2FtIHRhbmFtYW4gaGlhc1wiLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL2Fzc2V0cy9pbWcvbG9nby5wbmdcIixcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMxNSxcbiAgICAgICAgICAgIGFsdDogXCJ6bWJwZWRpYWJvZ29yXCIsXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcbiAgICAgIH19XG4gICAgLz5cblxuXHRcdFxuPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyQmxvY2tIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cblxuXHRcdFx0XHQ8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zaG93cy5tYXAoKGEsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsaWduIHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmdDb3ZlclwiIHN0eWxlPXt7YmFja2dyb3VuZDogYHVybCgke2EuZ2FtYmFyfSlgLFx0YmFja2dyb3VuZFNpemU6IGBjb3ZlcmAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IGBjZW50ZXJgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LCAuNSknfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBvc2l0aW9uLXJlbGF0aXZlIGhvbGRlciBwdC14bC0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtN1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR4dHdyYXAgcHIteGwtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkLWJsb2NrIHRleHQtdXBwZXJjYXNlIGZ3RWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgcGwtMiBtYi1tZC01IG1iLXNtLTNcIj57YS5taW5pfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZndFYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSBtYi1tZC03IG1iLXNtLTRcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJyZWFrIGQtYmxvY2tcIj57YS5kZXNrfTwvc3Bhbj48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0ICkpfVxuXHRcdFx0XHQ8L1NsaWRlcj5cblx0XHRcdCBcblx0XHRcdDwvc2VjdGlvbj5cblx0IFxuXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVTZWMgY29udGFpbmVyIG92ZXJmbG93LWhpZGRlbiBwdC14bC0xMiBwYi14bC05IHB0LWxnLTEwIHBiLWxnLTQgcHQtbWQtOCBwYi1tZC0yIHB0LTVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJjb2wtMTIgbWFpbkhlYWRlciBtYi00IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nSVYgcGxheWZhaXIgZndFYmxvZCBtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0UHJvZHVrIEJhcnVcblx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyQm9yZGVyIGQtYmxvY2sgbWItNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9hc3NldHMvaW1nL2hiZHIucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkhlYWRlciBCb3JkZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1iZHJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHA+QmViZXJhcGEga29sZWtzaSB0YW5hbWFuIGhpYXMgdGVyYmFydTwvcD5cblx0XHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zaG93Lm1hcCgoYSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTMgZmVhdHVyZUNvbCBwb3NpdGlvbi1yZWxhdGl2ZSBtYi02XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyIHBvc2l0aW9uLXJlbGF0aXZlIHctMTAwIG92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthLmdhbWJhcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwid2F4LWltZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXthLm5hbWFwcm9kdWt9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB5LXhsLTUgcHktc20tNCBweS0yIHB4LXhsLTIgcHgtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIvcHJvZHVrL1tpZF0vW3Byb2R1Y3RdXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcz17YC9wcm9kdWsvJHthLmlkfS8ke2EubmFtYXByb2R1ay5yZXBsYWNlKC9cXHMvZyxcIi1cIil9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57dHJ1bmNhdGUoYS5uYW1hcHJvZHVrKX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgZndFYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthLmhhcmdhfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=