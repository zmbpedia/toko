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
          lineNumber: 175,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "headingIV fwEbold playfair mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 15
        }
      }, " Detail Produk"), __jsx("ul", {
        className: "list-unstyled breadCrumbs d-flex justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        to: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 3
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 17
        }
      }, "Beranda"))), __jsx("li", {
        className: "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 17
        }
      }, "/"), __jsx("li", {
        className: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 17
        }
      }, "detail produk")))))), this.state["in"] === "yes" ? __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 7
        }
      }) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "img-eror icon icon-plant",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          lineNumber: 198,
          columnNumber: 7
        }
      }, "Maaf produk tidak ditemukan")), this.props.show.map(function (a) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
          className: "twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 4
          }
        }, __jsx("div", {
          className: "row mb-6",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "col-12 col-lg-6 order-lg-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "productSliderImage mb-lg-0 mb-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 7
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 8
          }
        }, __jsx("img", {
          src: a.gambar,
          alt: "image description",
          className: "img-fluid w-100",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 9
          }
        })))), __jsx("div", {
          className: "col-12 col-lg-6 order-lg-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "productTextHolder overflow-hidden",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 7
          }
        }, __jsx("h2", {
          className: "fwEbold mb-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 8
          }
        }, a.namaproduk), __jsx("strong", {
          className: "price d-block mb-5 text-green",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 8
          }
        }, _this2.props.harganya), __jsx("p", {
          className: a.it,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 8
          }
        }, a.deskripsi), __jsx("ul", {
          className: "list-unstyled socialNetwork d-flex flex-wrap mb-sm-11 mb-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 8
          }
        }, __jsx("li", {
          className: "text-uppercase mr-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 9
          }
        }, "BAGIKAN PRODUK INI KE:"), __jsx("li", {
          className: "mr-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: "https://www.facebook.com/sharer/sharer.php?u=".concat(_this2.state.urls),
          className: "fab fa-facebook-f",
          target: "_blank",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 30
          }
        })), __jsx("li", {
          className: "mr-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229,
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
            lineNumber: 229,
            columnNumber: 30
          }
        }))))))), __jsx("div", {
          className: "container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 4
          }
        }, __jsx("div", {
          className: "row",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "col-12",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 6
          }
        }, __jsx("ul", {
          className: "list-unstyled tabSetList d-flex justify-content-center mb-9",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 7
          }
        }, __jsx("li", {
          className: "mr-md-20 mr-sm-10 mr-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 8
          }
        }, __jsx("a", {
          href: "#tab1-0",
          className: "active playfair fwEbold pb-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 9
          }
        }, "Deskripsi"))), __jsx("div", {
          className: "tab-content mb-xl-11 mb-lg-10 mb-md-8 mb-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 7
          }
        }, __jsx("div", {
          id: "tab1-0",
          className: "active",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 8
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 9
          }
        }, a.deskripsi)))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVrLy9bcHJvZHVjdF0uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInN0YXRlIiwicHJvZHVjdGRhdGEiLCJ1cmxzIiwiZGVza3JpcHMiLCJ0aXRsZXgiLCJteUFycmF5IiwidWxyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2V0U3RhdGUiLCJwcm9wcyIsImlkIiwicHJvZHVjdCIsImkiLCJzaG93IiwibGVuZ3RoIiwidmFsdWUiLCJudW0iLCJuYW1hcHJvZHVrIiwiaGFyZ2Fwcm9kdWsiLCJnYW1iYXIiLCJkZXNrcmlwc2kiLCJvbiIsInN0b2tpcyIsInN0b2siLCJpbWciLCJwdXNoIiwibmFtYSIsImhhcmdhIiwiZGVza3JpcCIsImNzc1N0cmluZyIsIl9faHRtbCIsIm1pbmlmeUNzc1N0cmluZyIsInRpdGxlaGVhZCIsImRlcyIsImxpbmtueWEiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiZ2FtYmFybnlhIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImEiLCJoYXJnYW55YSIsIml0IiwicXVlcnkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkZXNpIiwiY3JvbmljYWwiLCJueXUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7OztBQUNwQixxQkFBYztBQUFBOztBQUFBOztBQUNiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGlCQUFXLEVBQUUsRUFERDtBQUVaLFlBQUksRUFGUTtBQUdaQyxVQUFJ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LFNBQXJCO0FBQWdDTCx5QkFBTyxFQUFQQSxPQUFoQztBQUF5Q0YsMkJBQVMsRUFBVEEsU0FBekM7QUFBb0RDLHFCQUFHLEVBQUhBLEdBQXBEO0FBQXlEbUIsMEJBQVEsRUFBUkEsUUFBekQ7QUFBbUVNLHNCQUFJLEVBQUpBLElBQW5FO0FBQXlFTCxvQkFBRSxFQUFGQTtBQUF6RSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDNEJRLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVrL1tpZF0vW3Byb2R1Y3RdLjBjOGMwMzMyYjNlOWQ3ODE1MWFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWluaWZ5Q3NzU3RyaW5nIH0gZnJvbSBcIm1pbmlmeS1jc3Mtc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwcm9kdWN0ZGF0YTogW10sXG5cdFx0XHRpbjogXCJcIixcblx0XHRcdHVybHM6IFwiXCIsXG5cdFx0XHRkZXNrcmlwczogXCJcIixcblx0XHRcdHRpdGxleDogXCJcIixcblx0XHR9O1xuXHR9XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG5cdFx0Y29uc3QgeyBpZCwgcHJvZHVjdCB9ID0gcXVlcnk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9hcGkvcHJvZHVjdGRhdGEvXCIgKyBpZCArIFwiL1wiICsgcHJvZHVjdFxuXHRcdCk7XG5cdFx0Y29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGxldCBnYW1iYXJueWEgPScnO1xuICAgIFx0bGV0IGxpbmtueWEgPScnO1xuICAgIFx0bGV0IHRpdGxlaGVhZD0nTWFhZiB0aWRhayBhZGEgcHJvZHVrJ1xuICAgIFx0bGV0IGRlcyA9ICcnXG4gICAgXHRsZXQgaGFyZ2FueWEgPSAnJ1xuICAgIFx0bGV0IGRlc2kgPSAnJ1xuICAgIFx0bGV0IGl0ID0gJydcblxuICAgIFx0aWYoc2hvdy5sZW5ndGgpe1xuXG4gICAgXHR0aXRsZWhlYWQgPSAnem1icGVkaWFib2dvciB8ICcrIGF3YWl0IHNob3dbMF0ubmFtYXByb2R1aysgJy0gRGV0YWlsIHByb2R1aycgICAgICAgICAgIFxuICAgIFx0Z2FtYmFybnlhID0gYXdhaXQgc2hvd1swXS5nYW1iYXI7XG4gICAgXHRsaW5rbnlhID0gYXdhaXQgc2hvd1swXS5jcm9uaWNhbDtcblx0XHRkZXMgPSBhd2FpdCBzaG93WzBdLmRlc2tyaXBzaSArICcgLSAnICsgIGF3YWl0IHNob3dbMF0ubnl1O1xuXHRcdGhhcmdhbnlhID0gYXdhaXQgc2hvd1swXS5oYXJnYTtcbiAgICAgIFx0aXQgPSBhd2FpdCBzaG93WzBdLml0O1xuIFx0XHQgfVxuXG5cblx0XHRyZXR1cm4geyBzaG93LCBwcm9kdWN0LCBpZCwgZ2FtYmFybnlhLCBsaW5rbnlhLCB0aXRsZWhlYWQsIGRlcywgaGFyZ2FueWEsIGRlc2ksIGl0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBteUFycmF5ID0gW107XG5cdFx0dmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dXJsczpcblx0XHRcdFx0XCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvcHJvZHVrL1wiICtcblx0XHRcdFx0dGhpcy5wcm9wcy5pZCArXG5cdFx0XHRcdFwiL1wiICtcblx0XHRcdFx0dGhpcy5wcm9wcy5wcm9kdWN0LFxuXG5cdFx0XHR0aXRsZXg6IHRoaXMucHJvcHMucHJvZHVjdCArIFwiIC0gRGV0YWlsIHByb2R1a1wiLFxuXHRcdH0pO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnNob3dbaV07XG5cdFx0XHR2YXIgbnVtID0gdmFsdWVbXCJpZFwiXTtcblx0XHRcdHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xuXHRcdFx0dmFyIGhhcmdhcHJvZHVrID0gdmFsdWVbXCJoYXJnYVwiXTtcblx0XHRcdHZhciBnYW1iYXIgPSB2YWx1ZVtcImdhbWJhclwiXTtcblx0XHRcdHZhciBkZXNrcmlwc2kgPSB2YWx1ZVtcImRlc2tyaXBzaVwiXTtcblx0XHRcdHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcblx0XHRcdHZhciBzdG9raXMgPSB2YWx1ZVtcInN0b2twcm9kdWtcIl07XG5cdFx0XHR2YXIgc3Rvaztcblx0XHRcdGlmIChvbikge1xuXHRcdFx0XHRzdG9rID0gXCJzYWxlXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRlc2tyaXBzOiBkZXNrcmlwc2ksIGltZzogZ2FtYmFyIH0pO1xuXG5cdFx0XHRteUFycmF5LnB1c2goe1xuXHRcdFx0XHRpZDogbnVtLFxuXHRcdFx0XHRuYW1hOiBuYW1hcHJvZHVrLFxuXHRcdFx0XHRnYW1iYXI6IGdhbWJhcixcblx0XHRcdFx0aGFyZ2E6IGhhcmdhcHJvZHVrLFxuXHRcdFx0XHRkZXNrcmlwOiBkZXNrcmlwc2ksXG5cdFx0XHRcdHN0b2s6IHN0b2ssXG5cblx0XHRcdFx0c3Rva2lzOiBzdG9raXMsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAobXlBcnJheS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0ZGF0YTogbXlBcnJheSwgaW46IFwieWVzXCIgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbjogXCJub1wiIH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNzc1N0cmluZyA9IGBcbiAgLmJvcmRlcnsgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50fVxuICAgICAgICAgIC5vdmVybHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xuICAgICAgICAgIH1cbi5tYWluLWNvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbi5pbWctZXJvcntcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdFRleHRIb2xkZXIgLnByaWNlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cblx0XHRcdFx0XHQuZmVhdHVyZUNvbCAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzE2OTQxYTtcbn1cbi5mZWF0dXJlQ29sIC5ob3RPZmZlciB7XG4gICAgYmFja2dyb3VuZDogIzViYTUxNTtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyLnVwcyB7XG5cdCAgICB0b3A6IDIzcHggIWltcG9ydGFudDtcbn1cbi5mZWF0dXJlQ29sIC5ob3RPZmZlci5hYnMge1xuXHRiYWNrZ3JvdW5kOiNmOTg2MWYgIWltcG9ydGFudDtcbn1cblxuXG4gICAgYDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cbiBcblx0XHRcdCAgICA8c3R5bGVcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBtaW5pZnlDc3NTdHJpbmcoY3NzU3RyaW5nKSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG5cbiA8TmV4dFNlb1xuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGVoZWFkfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzfVxuICAgICAgY2Fub25pY2FsPXt0aGlzLnByb3BzLmxpbmtueWF9XG4gICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgdXJsOiB0aGlzLnByb3BzLmxpbmtueWEsXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlaGVhZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuZ2FtYmFybnlhLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgYWx0OiB0aGlzLnByb3BzLnByb2R1Y3QsXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcbiAgICAgIH19XG4gICAgLz5cblxuPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9CYW5uZXJIb2xkZXIgZC1mbGV4IHctMTAwIGJnQ292ZXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IGBjb3ZlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGBjZW50ZXJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxcIiBzdHlsZT17e2JhY2tncm91bmQ6J3JnYmEoMjU1LDI1NSwyNTUsIC44KSd9fT48L2Rpdj4gIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwdC1sZy0yMyBwdC1tZC0xNSBwdC1zbS0xMCBwdC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+IERldGFpbCBQcm9kdWs8L2gxPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBicmVhZENydW1icyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0yXCI+XG4gIDxMaW5rIGhyZWY9XCIvXCIgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+QmVyYW5kYTwvYT5cbjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0yXCI+LzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPmRldGFpbCBwcm9kdWs8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmluID09PSBcInllc1wiID8gKFxuXHRcdFx0XHRcdFx0PGgxPjwvaDE+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHQgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctZXJvciBpY29uIGljb24tcGxhbnRcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxoMVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nVG9wOiBcIjEwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZ0JvdHRvbTogXCIxMDBweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRNYWFmIHByb2R1ayB0aWRhayBkaXRlbXVrYW5cblx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnNob3cubWFwKChhKSA9PiAoXG5cdFx0XHRcdDw+XHRcdFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d29Db2x1bW5zIGNvbnRhaW5lciBwdC14bC0yMyBwYi14bC0yMCBwdC1sZy0yMCBwYi1sZy0yMCBweS1tZC0xNiBweS0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgb3JkZXItbGctMVwiPlx0XHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFNsaWRlckltYWdlIG1iLWxnLTAgbWItNFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXthLmdhbWJhcn0gYWx0PVwiaW1hZ2UgZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgdy0xMDBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IG9yZGVyLWxnLTNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFRleHRIb2xkZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJmd0Vib2xkIG1iLTJcIj57YS5uYW1hcHJvZHVrfTwvaDI+XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmcgY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBtYi01IHRleHQtZ3JlZW5cIj57dGhpcy5wcm9wcy5oYXJnYW55YX08L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXthLml0fT57YS5kZXNrcmlwc2l9PC9wPlx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBzb2NpYWxOZXR3b3JrIGQtZmxleCBmbGV4LXdyYXAgbWItc20tMTEgbWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBtci01XCI+QkFHSUtBTiBQUk9EVUsgSU5JIEtFOjwvbGk+XG5cdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXItNFwiPjxhIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3RoaXMuc3RhdGUudXJsc31gfSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiIHRhcmdldD1cIl9ibGFua1wiPjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+PGEgaHJlZj17YGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vP3VybD0ke3RoaXMuc3RhdGUudXJsc31gfSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj48L2E+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgdGFiU2V0TGlzdCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi05XCI+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci1tZC0yMCBtci1zbS0xMCBtci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiN0YWIxLTBcIiBjbGFzc05hbWU9XCJhY3RpdmUgcGxheWZhaXIgZndFYm9sZCBwYi0yXCI+RGVza3JpcHNpPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC91bD5cdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50IG1iLXhsLTExIG1iLWxnLTEwIG1iLW1kLTggbWItNVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGFiMS0wXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e2EuZGVza3JpcHNpfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdFx0XHRcdCkpfVx0XHRcdCBcblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9