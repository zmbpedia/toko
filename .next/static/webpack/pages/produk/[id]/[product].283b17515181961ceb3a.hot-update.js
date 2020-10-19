webpackHotUpdate_N_E("pages/produk/[id]/[product]",{

/***/ "./pages/produk/[id]/[product].js":
/*!****************************************!*\
  !*** ./pages/produk/[id]/[product].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! minify-css-string */ "./node_modules/minify-css-string/dist/index.js");
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(minify_css_string__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "D:\\zmb\\pages\\produk\\[id]\\[product].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Product = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Product, _React$Component);

  var _super = _createSuper(Product);

  function Product() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Product);

    _this = _super.call(this);
    _this.state = {
      productdata: [],
      "in": "",
      urls: "",
      deskrips: "",
      titlex: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var myArray = [];
      var ulr = window.location.href;
      this.setState({
        urls: "https://zmbpediabogor.store/produk/" + this.props.id + "/" + this.props.product,
        titlex: this.props.product + " - Detail produk"
      });

      for (var i = 0; i < this.props.show.length; i++) {
        var value = this.props.show[i];
        var num = value["id"];
        var namaproduk = value["namaproduk"];
        var hargaproduk = value["harga"];
        var gambar = value["gambar"];
        var deskripsi = value["deskripsi"];
        var on = value["stok"];
        var stokis = value["stokproduk"];
        var stok;

        if (on) {
          stok = "sale";
        } else {
          stok = "out of stock";
        }

        this.setState({
          deskrips: deskripsi,
          img: gambar
        });
        myArray.push({
          id: num,
          nama: namaproduk,
          gambar: gambar,
          harga: hargaproduk,
          deskrip: deskripsi,
          stok: stok,
          stokis: stokis
        });
      }

      if (myArray.length) {
        this.setState({
          productdata: myArray,
          "in": "yes"
        });
      } else {
        this.setState({
          "in": "no"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cssString = "\n  .border{  border: 1px solid #dee2e6!important}\n          .overl{\n            width: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgba(255,255,255, .5);\n          }\n.main-content-wrapper {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.img-eror{\n              font-size: 130px;\n    text-align: center;\n    width: 100%;\n}\n.productTextHolder .price {\n    font-size: 15px;\n    margin-top:20px;\n    }\n\t\t\t\t\t.featureCol .price {\n    font-size: 13px;\n    line-height: 18px;\n    color: #16941a;\n}\n.featureCol .hotOffer {\n    background: #5ba515;\n    top: 30px;\n    left: 0;\n    margin-left: 0 !important;\n}\n.featureCol .hotOffer.ups {\n\t    top: 23px !important;\n}\n.featureCol .hotOffer.abs {\n\tbackground:#f9861f !important;\n}\n\n\n    ";
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 4
        }
      }, __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: minify_css_string__WEBPACK_IMPORTED_MODULE_13___default()(cssString)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 8
        }
      }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_10__["NextSeo"], {
        title: this.props.titlehead,
        description: this.props.des,
        canonical: this.props.linknya,
        openGraph: {
          url: this.props.linknya,
          title: this.props.titlehead,
          description: this.props.des,
          images: [{
            url: this.props.gambarnya,
            width: 800,
            height: 600,
            alt: this.props.product
          }],
          site_name: 'zmbpediabogor'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 2
        }
      }), __jsx("section", {
        className: "introBannerHolder d-flex w-100 bgCover",
        style: {
          background: "url(".concat(this.props.gambarnya, ")"),
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "overl",
        style: {
          background: 'rgba(255,255,255, .8)'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "headingIV fwEbold playfair mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 15
        }
      }, " Detail Produk"), __jsx("ul", {
        className: "list-unstyled breadCrumbs d-flex justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        to: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 3
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }
      }, "Beranda"))), __jsx("li", {
        className: "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 17
        }
      }, "/"), __jsx("li", {
        className: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }
      }, "detail produk")))))), this.state["in"] === "yes" ? __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 7
        }
      }) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "img-eror icon icon-plant",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }
      }), __jsx("h1", {
        style: {
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "100px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 7
        }
      }, "Maaf produk tidak ditemukan")), this.props.show.map(function (a) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
          className: "twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 4
          }
        }, __jsx("div", {
          className: "row mb-6",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "col-12 col-lg-6 order-lg-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "productSliderImage mb-lg-0 mb-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 7
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 8
          }
        }, __jsx("img", {
          src: a.gambar,
          alt: "image description",
          className: "img-fluid w-100",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 9
          }
        })))), __jsx("div", {
          className: "col-12 col-lg-6 order-lg-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "productTextHolder overflow-hidden",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 7
          }
        }, __jsx("h2", {
          className: "fwEbold mb-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 8
          }
        }, a.namaproduk), __jsx("strong", {
          className: "price d-block mb-5 text-green",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 8
          }
        }, _this2.props.harganya), __jsx("p", {
          className: "mb-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 8
          }
        }, a.deskripsi), __jsx("ul", {
          className: "list-unstyled socialNetwork d-flex flex-wrap mb-sm-11 mb-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 8
          }
        }, __jsx("li", {
          className: "text-uppercase mr-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 9
          }
        }, "BAGIKAN PRODUK INI KE:"), __jsx("li", {
          className: "mr-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: "https://www.facebook.com/sharer/sharer.php?u=".concat(_this2.state.urls),
          className: "fab fa-facebook-f",
          target: "_blank",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 30
          }
        })), __jsx("li", {
          className: "mr-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: "https://www.instagram.com/?url=".concat(_this2.state.urls),
          className: "fab fa-instagram",
          target: "_blank",
          rel: "noopener",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 30
          }
        }))))))), __jsx("div", {
          className: "container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 4
          }
        }, __jsx("div", {
          className: "row",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "col-12",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 6
          }
        }, __jsx("ul", {
          className: "list-unstyled tabSetList d-flex justify-content-center mb-9",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 7
          }
        }, __jsx("li", {
          className: "mr-md-20 mr-sm-10 mr-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 8
          }
        }, __jsx("a", {
          href: "#tab1-0",
          className: "active playfair fwEbold pb-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 9
          }
        }, "Deskripsi"))), __jsx("div", {
          className: "tab-content mb-xl-11 mb-lg-10 mb-md-8 mb-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 7
          }
        }, __jsx("div", {
          id: "tab1-0",
          className: "active",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 8
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 9
          }
        }, _this2.props.des)))))));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, id, product, res, show, gambarnya, linknya, titlehead, des, harganya, desi, it;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                id = query.id, product = query.product;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://zmbpediabogor.store/api/productdata/" + id + "/" + product);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                show = _context.sent;
                gambarnya = '';
                linknya = '';
                titlehead = 'Maaf tidak ada produk';
                des = '';
                harganya = '';
                desi = '';
                it = '';

                if (!show.length) {
                  _context.next = 41;
                  break;
                }

                _context.next = 18;
                return show[0].namaproduk;

              case 18:
                _context.t0 = _context.sent;
                _context.t1 = 'zmbpediabogor | ' + _context.t0;
                titlehead = _context.t1 + '- Detail produk';
                _context.next = 23;
                return show[0].gambar;

              case 23:
                gambarnya = _context.sent;
                _context.next = 26;
                return show[0].cronical;

              case 26:
                linknya = _context.sent;
                _context.next = 29;
                return show[0].deskripsi;

              case 29:
                _context.t2 = _context.sent;
                _context.t3 = _context.t2 + ' - ';
                _context.next = 33;
                return show[0].nyu;

              case 33:
                _context.t4 = _context.sent;
                des = _context.t3 + _context.t4;
                _context.next = 37;
                return show[0].harga;

              case 37:
                harganya = _context.sent;
                _context.next = 40;
                return show[0].it;

              case 40:
                it = _context.sent;

              case 41:
                return _context.abrupt("return", {
                  show: show,
                  product: product,
                  id: id,
                  gambarnya: gambarnya,
                  linknya: linknya,
                  titlehead: titlehead,
                  des: des,
                  harganya: harganya,
                  desi: desi,
                  it: it
                });

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Product;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVrLy9bcHJvZHVjdF0uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInN0YXRlIiwicHJvZHVjdGRhdGEiLCJ1cmxzIiwiZGVza3JpcHMiLCJ0aXRsZXgiLCJteUFycmF5IiwidWxyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2V0U3RhdGUiLCJwcm9wcyIsImlkIiwicHJvZHVjdCIsImkiLCJzaG93IiwibGVuZ3RoIiwidmFsdWUiLCJudW0iLCJuYW1hcHJvZHVrIiwiaGFyZ2Fwcm9kdWsiLCJnYW1iYXIiLCJkZXNrcmlwc2kiLCJvbiIsInN0b2tpcyIsInN0b2siLCJpbWciLCJwdXNoIiwibmFtYSIsImhhcmdhIiwiZGVza3JpcCIsImNzc1N0cmluZyIsIl9faHRtbCIsIm1pbmlmeUNzc1N0cmluZyIsInRpdGxlaGVhZCIsImRlcyIsImxpbmtueWEiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiZ2FtYmFybnlhIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImEiLCJoYXJnYW55YSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGVzaSIsIml0IiwiY3JvbmljYWwiLCJueXUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7OztBQUNwQixxQkFBYztBQUFBOztBQUFBOztBQUNiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGlCQUFXLEVBQUUsRUFERDtBQUVaLFlBQUksRUFGUTtBQUdaQyxVQUFJ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ckI7QUFBZ0NMLHlCQUFPLEVBQVBBLE9BQWhDO0FBQXlDRiwyQkFBUyxFQUFUQSxTQUF6QztBQUFvREMscUJBQUcsRUFBSEEsR0FBcEQ7QUFBeURtQiwwQkFBUSxFQUFSQSxRQUF6RDtBQUFtRUssc0JBQUksRUFBSkEsSUFBbkU7QUFBeUVDLG9CQUFFLEVBQUZBO0FBQXpFLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEM0QkcsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWsvW2lkXS9bcHJvZHVjdF0uMjgzYjE3NTE1MTgxOTYxY2ViM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBtaW5pZnlDc3NTdHJpbmcgfSBmcm9tIFwibWluaWZ5LWNzcy1zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHByb2R1Y3RkYXRhOiBbXSxcblx0XHRcdGluOiBcIlwiLFxuXHRcdFx0dXJsczogXCJcIixcblx0XHRcdGRlc2tyaXBzOiBcIlwiLFxuXHRcdFx0dGl0bGV4OiBcIlwiLFxuXHRcdH07XG5cdH1cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcblx0XHRjb25zdCB7IGlkLCBwcm9kdWN0IH0gPSBxdWVyeTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcblx0XHRcdFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL2FwaS9wcm9kdWN0ZGF0YS9cIiArIGlkICsgXCIvXCIgKyBwcm9kdWN0XG5cdFx0KTtcblx0XHRjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgbGV0IGdhbWJhcm55YSA9Jyc7XG4gICAgXHRsZXQgbGlua255YSA9Jyc7XG4gICAgXHRsZXQgdGl0bGVoZWFkPSdNYWFmIHRpZGFrIGFkYSBwcm9kdWsnXG4gICAgXHRsZXQgZGVzID0gJydcbiAgICBcdGxldCBoYXJnYW55YSA9ICcnXG4gICAgXHRsZXQgZGVzaSA9ICcnXG4gICAgXHRsZXQgaXQgPSAnJ1xuXG4gICAgXHRpZihzaG93Lmxlbmd0aCl7XG5cbiAgICBcdHRpdGxlaGVhZCA9ICd6bWJwZWRpYWJvZ29yIHwgJysgYXdhaXQgc2hvd1swXS5uYW1hcHJvZHVrKyAnLSBEZXRhaWwgcHJvZHVrJyAgICAgICAgICAgXG4gICAgXHRnYW1iYXJueWEgPSBhd2FpdCBzaG93WzBdLmdhbWJhcjtcbiAgICBcdGxpbmtueWEgPSBhd2FpdCBzaG93WzBdLmNyb25pY2FsO1xuXHRcdGRlcyA9IGF3YWl0IHNob3dbMF0uZGVza3JpcHNpICsgJyAtICcgKyAgYXdhaXQgc2hvd1swXS5ueXU7XG5cdFx0aGFyZ2FueWEgPSBhd2FpdCBzaG93WzBdLmhhcmdhO1xuICAgICAgXHRpdCA9IGF3YWl0IHNob3dbMF0uaXQ7XG4gXHRcdCB9XG5cblxuXHRcdHJldHVybiB7IHNob3csIHByb2R1Y3QsIGlkLCBnYW1iYXJueWEsIGxpbmtueWEsIHRpdGxlaGVhZCwgZGVzLCBoYXJnYW55YSwgZGVzaSwgaXR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIG15QXJyYXkgPSBbXTtcblx0XHR2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR1cmxzOlxuXHRcdFx0XHRcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9wcm9kdWsvXCIgK1xuXHRcdFx0XHR0aGlzLnByb3BzLmlkICtcblx0XHRcdFx0XCIvXCIgK1xuXHRcdFx0XHR0aGlzLnByb3BzLnByb2R1Y3QsXG5cblx0XHRcdHRpdGxleDogdGhpcy5wcm9wcy5wcm9kdWN0ICsgXCIgLSBEZXRhaWwgcHJvZHVrXCIsXG5cdFx0fSk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3cubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvd1tpXTtcblx0XHRcdHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xuXHRcdFx0dmFyIG5hbWFwcm9kdWsgPSB2YWx1ZVtcIm5hbWFwcm9kdWtcIl07XG5cdFx0XHR2YXIgaGFyZ2Fwcm9kdWsgPSB2YWx1ZVtcImhhcmdhXCJdO1xuXHRcdFx0dmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xuXHRcdFx0dmFyIGRlc2tyaXBzaSA9IHZhbHVlW1wiZGVza3JpcHNpXCJdO1xuXHRcdFx0dmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xuXHRcdFx0dmFyIHN0b2tpcyA9IHZhbHVlW1wic3Rva3Byb2R1a1wiXTtcblx0XHRcdHZhciBzdG9rO1xuXHRcdFx0aWYgKG9uKSB7XG5cdFx0XHRcdHN0b2sgPSBcInNhbGVcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGVza3JpcHM6IGRlc2tyaXBzaSwgaW1nOiBnYW1iYXIgfSk7XG5cblx0XHRcdG15QXJyYXkucHVzaCh7XG5cdFx0XHRcdGlkOiBudW0sXG5cdFx0XHRcdG5hbWE6IG5hbWFwcm9kdWssXG5cdFx0XHRcdGdhbWJhcjogZ2FtYmFyLFxuXHRcdFx0XHRoYXJnYTogaGFyZ2Fwcm9kdWssXG5cdFx0XHRcdGRlc2tyaXA6IGRlc2tyaXBzaSxcblx0XHRcdFx0c3Rvazogc3RvayxcblxuXHRcdFx0XHRzdG9raXM6IHN0b2tpcyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChteUFycmF5Lmxlbmd0aCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RkYXRhOiBteUFycmF5LCBpbjogXCJ5ZXNcIiB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGluOiBcIm5vXCIgfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG4gICAgY29uc3QgY3NzU3RyaW5nID0gYFxuICAuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XG4gICAgICAgICAgLm92ZXJse1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuNSk7XG4gICAgICAgICAgfVxuLm1haW4tY29udGVudC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmltZy1lcm9ye1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0VGV4dEhvbGRlciAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuXHRcdFx0XHRcdC5mZWF0dXJlQ29sIC5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjMTY5NDFhO1xufVxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWJhNTE1O1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4uZmVhdHVyZUNvbCAuaG90T2ZmZXIudXBzIHtcblx0ICAgIHRvcDogMjNweCAhaW1wb3J0YW50O1xufVxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyLmFicyB7XG5cdGJhY2tncm91bmQ6I2Y5ODYxZiAhaW1wb3J0YW50O1xufVxuXG5cbiAgICBgO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuIFxuXHRcdFx0ICAgIDxzdHlsZVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IG1pbmlmeUNzc1N0cmluZyhjc3NTdHJpbmcpLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cblxuIDxOZXh0U2VvXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWhlYWR9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXN9XG4gICAgICBjYW5vbmljYWw9e3RoaXMucHJvcHMubGlua255YX1cbiAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICB1cmw6IHRoaXMucHJvcHMubGlua255YSxcbiAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGVoZWFkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXMsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICBhbHQ6IHRoaXMucHJvcHMucHJvZHVjdCxcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNpdGVfbmFtZTogJ3ptYnBlZGlhYm9nb3InLFxuICAgICAgfX1cbiAgICAvPlxuXG48c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb0Jhbm5lckhvbGRlciBkLWZsZXggdy0xMDAgYmdDb3ZlclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhpcy5wcm9wcy5nYW1iYXJueWF9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgY2VudGVyYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LCAuOCknfX0+PC9kaXY+ICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHQtbGctMjMgcHQtbWQtMTUgcHQtc20tMTAgcHQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ0lWIGZ3RWJvbGQgcGxheWZhaXIgbWItNFwiPiBEZXRhaWwgUHJvZHVrPC9oMT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgYnJlYWRDcnVtYnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxuICA8TGluayBocmVmPVwiL1wiIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPkJlcmFuZGE8L2E+XG48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPi88L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5kZXRhaWwgcHJvZHVrPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmluID09PSBcInllc1wiID8gKFxuXHRcdFx0XHRcdFx0PGgxPjwvaDE+XG5cdFx0XHRcdFx0KSA6IChcbjw+XG5cdFx0XHRcdFx0ICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWVyb3IgaWNvbiBpY29uLXBsYW50XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDFcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZ1RvcDogXCIxMDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IFwiMTAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0TWFhZiBwcm9kdWsgdGlkYWsgZGl0ZW11a2FuXG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zaG93Lm1hcCgoYSkgPT4gKFxuXHRcdFx0XHQ8Plx0XHRcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdvQ29sdW1ucyBjb250YWluZXIgcHQteGwtMjMgcGIteGwtMjAgcHQtbGctMjAgcGItbGctMjAgcHktbWQtMTYgcHktMTBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IG9yZGVyLWxnLTFcIj5cdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RTbGlkZXJJbWFnZSBtYi1sZy0wIG1iLTRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17YS5nYW1iYXJ9IGFsdD1cImltYWdlIGRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHctMTAwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNiBvcmRlci1sZy0zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RUZXh0SG9sZGVyIG92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiZndFYm9sZCBtYi0yXCI+e2EubmFtYXByb2R1a308L2gyPlxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgbWItNSB0ZXh0LWdyZWVuXCI+e3RoaXMucHJvcHMuaGFyZ2FueWF9PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTVcIj57YS5kZXNrcmlwc2l9PC9wPlx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBzb2NpYWxOZXR3b3JrIGQtZmxleCBmbGV4LXdyYXAgbWItc20tMTEgbWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBtci01XCI+QkFHSUtBTiBQUk9EVUsgSU5JIEtFOjwvbGk+XG5cdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXItNFwiPjxhIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3RoaXMuc3RhdGUudXJsc31gfSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiIHRhcmdldD1cIl9ibGFua1wiPjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+PGEgaHJlZj17YGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vP3VybD0ke3RoaXMuc3RhdGUudXJsc31gfSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj48L2E+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgdGFiU2V0TGlzdCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi05XCI+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci1tZC0yMCBtci1zbS0xMCBtci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiN0YWIxLTBcIiBjbGFzc05hbWU9XCJhY3RpdmUgcGxheWZhaXIgZndFYm9sZCBwYi0yXCI+RGVza3JpcHNpPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50IG1iLXhsLTExIG1iLWxnLTEwIG1iLW1kLTggbWItNVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGFiMS0wXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e3RoaXMucHJvcHMuZGVzfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQgXG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==