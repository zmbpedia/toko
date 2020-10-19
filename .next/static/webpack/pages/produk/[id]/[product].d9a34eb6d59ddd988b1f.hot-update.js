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
          lineNumber: 139,
          columnNumber: 4
        }
      }, __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: minify_css_string__WEBPACK_IMPORTED_MODULE_13___default()(cssString)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
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
          lineNumber: 148,
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
          lineNumber: 168,
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
          lineNumber: 198,
          columnNumber: 7
        }
      }) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "img-eror icon icon-plant",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
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
          lineNumber: 202,
          columnNumber: 7
        }
      }, "Maaf produk tidak ditemukan")), this.props.show.map(function (a) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
          className: "twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 4
          }
        }, __jsx("div", {
          className: "row mb-6",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "col-12 col-lg-6 order-lg-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "productSliderImage mb-lg-0 mb-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 7
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 8
          }
        }, __jsx("img", {
          src: a.gambar,
          alt: "image description",
          className: "img-fluid w-100",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 9
          }
        })))), __jsx("div", {
          className: "col-12 col-lg-6 order-lg-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 6
          }
        }, __jsx("div", {
          className: "productTextHolder overflow-hidden",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 7
          }
        }, __jsx("h2", {
          className: "fwEbold mb-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 8
          }
        }, a.namaproduk), __jsx("strong", {
          className: "price d-block mb-5 text-green",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 8
          }
        }, _this2.props.harganya), __jsx("p", {
          className: "mb-5 ${a.it}",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 8
          }
        }, a.deskripsi), __jsx("ul", {
          className: "list-unstyled socialNetwork d-flex flex-wrap mb-sm-11 mb-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 8
          }
        }, __jsx("li", {
          className: "text-uppercase mr-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 9
          }
        }, "BAGIKAN PRODUK INI KE:"), __jsx("li", {
          className: "mr-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 9
          }
        }, __jsx("a", {
          href: "https://www.facebook.com/sharer/sharer.php?u=".concat(_this2.state.urls),
          className: "fab fa-facebook-f",
          target: "_blank",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 30
          }
        })), __jsx("li", {
          className: "mr-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233,
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
            lineNumber: 233,
            columnNumber: 30
          }
        }))))))), __jsx("div", {
          className: "container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 4
          }
        }, __jsx("div", {
          className: "row",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "col-12",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 6
          }
        }, __jsx("ul", {
          className: "list-unstyled tabSetList d-flex justify-content-center mb-9",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 7
          }
        }, __jsx("li", {
          className: "mr-md-20 mr-sm-10 mr-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 8
          }
        }, __jsx("a", {
          href: "#tab1-0",
          className: "active playfair fwEbold pb-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 9
          }
        }, "Deskripsi"))), __jsx("div", {
          className: "tab-content mb-xl-11 mb-lg-10 mb-md-8 mb-5",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 7
          }
        }, __jsx("div", {
          id: "tab1-0",
          className: "active",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 8
          }
        }, __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 9
          }
        }, _this2.props.des)))))));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, id, product, res, show, gambarnya, linknya, titlehead, des, harganya, desi;
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

                if (!show.length) {
                  _context.next = 37;
                  break;
                }

                _context.next = 17;
                return show[0].namaproduk;

              case 17:
                _context.t0 = _context.sent;
                _context.t1 = 'zmbpediabogor | ' + _context.t0;
                titlehead = _context.t1 + '- Detail produk';
                _context.next = 22;
                return show[0].gambar;

              case 22:
                gambarnya = _context.sent;
                _context.next = 25;
                return show[0].cronical;

              case 25:
                linknya = _context.sent;
                _context.next = 28;
                return show[0].deskripsi;

              case 28:
                _context.t2 = _context.sent;
                _context.t3 = _context.t2 + ' - ';
                _context.next = 32;
                return show[0].nyu;

              case 32:
                _context.t4 = _context.sent;
                des = _context.t3 + _context.t4;
                _context.next = 36;
                return show[0].harga;

              case 36:
                harganya = _context.sent;

              case 37:
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

              case 38:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVrLy9bcHJvZHVjdF0uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInN0YXRlIiwicHJvZHVjdGRhdGEiLCJ1cmxzIiwiZGVza3JpcHMiLCJ0aXRsZXgiLCJteUFycmF5IiwidWxyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2V0U3RhdGUiLCJwcm9wcyIsImlkIiwicHJvZHVjdCIsImkiLCJzaG93IiwibGVuZ3RoIiwidmFsdWUiLCJudW0iLCJuYW1hcHJvZHVrIiwiaGFyZ2Fwcm9kdWsiLCJnYW1iYXIiLCJkZXNrcmlwc2kiLCJvbiIsInN0b2tpcyIsInN0b2siLCJpbWciLCJwdXNoIiwibmFtYSIsImhhcmdhIiwiZGVza3JpcCIsImNzc1N0cmluZyIsIl9faHRtbCIsIm1pbmlmeUNzc1N0cmluZyIsInRpdGxlaGVhZCIsImRlcyIsImxpbmtueWEiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiZ2FtYmFybnlhIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImEiLCJoYXJnYW55YSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGVzaSIsImNyb25pY2FsIiwibnl1IiwiaXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7OztBQUNwQixxQkFBYztBQUFBOztBQUFBOztBQUNiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGlCQUFXLEVBQUUsRUFERDtBQUVaLFlBQUksRUFGUTtBQUdaQyxVQUFJ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QUFIQSxHQUFwRDtBQUF5RG1CLDBCQUFRLEVBQVJBLFFBQXpEO0FBQW1FSyxzQkFBSSxFQUFKQSxJQUFuRTtBQUF5RUcsb0JBQUUsRUFBRkE7QUFBekUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQzRCQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1ay9baWRdL1twcm9kdWN0XS5kOWEzNGViNmQ1OWRkZDk4OGIxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1pbmlmeUNzc1N0cmluZyB9IGZyb20gXCJtaW5pZnktY3NzLXN0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cHJvZHVjdGRhdGE6IFtdLFxuXHRcdFx0aW46IFwiXCIsXG5cdFx0XHR1cmxzOiBcIlwiLFxuXHRcdFx0ZGVza3JpcHM6IFwiXCIsXG5cdFx0XHR0aXRsZXg6IFwiXCIsXG5cdFx0fTtcblx0fVxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuXHRcdGNvbnN0IHsgaWQsIHByb2R1Y3QgfSA9IHF1ZXJ5O1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL3Byb2R1Y3RkYXRhL1wiICsgaWQgKyBcIi9cIiArIHByb2R1Y3Rcblx0XHQpO1xuXHRcdGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBsZXQgZ2FtYmFybnlhID0nJztcbiAgICBcdGxldCBsaW5rbnlhID0nJztcbiAgICBcdGxldCB0aXRsZWhlYWQ9J01hYWYgdGlkYWsgYWRhIHByb2R1aydcbiAgICBcdGxldCBkZXMgPSAnJ1xuICAgIFx0bGV0IGhhcmdhbnlhID0gJydcbiAgICBcdGxldCBkZXNpID0gJydcblxuICAgIFx0aWYoc2hvdy5sZW5ndGgpe1xuXG4gICAgXHR0aXRsZWhlYWQgPSAnem1icGVkaWFib2dvciB8ICcrIGF3YWl0IHNob3dbMF0ubmFtYXByb2R1aysgJy0gRGV0YWlsIHByb2R1aycgICAgICAgICAgIFxuICAgIFx0Z2FtYmFybnlhID0gYXdhaXQgc2hvd1swXS5nYW1iYXI7XG4gICAgXHRsaW5rbnlhID0gYXdhaXQgc2hvd1swXS5jcm9uaWNhbDtcblx0XHRkZXMgPSBhd2FpdCBzaG93WzBdLmRlc2tyaXBzaSArICcgLSAnICsgIGF3YWl0IHNob3dbMF0ubnl1O1xuXHRcdGhhcmdhbnlhID0gYXdhaXQgc2hvd1swXS5oYXJnYTtcbiAgICAgIFxuIFx0XHQgfVxuXG5cblx0XHRyZXR1cm4geyBzaG93LCBwcm9kdWN0LCBpZCwgZ2FtYmFybnlhLCBsaW5rbnlhLCB0aXRsZWhlYWQsIGRlcywgaGFyZ2FueWEsIGRlc2ksIGl0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBteUFycmF5ID0gW107XG5cdFx0dmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dXJsczpcblx0XHRcdFx0XCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvcHJvZHVrL1wiICtcblx0XHRcdFx0dGhpcy5wcm9wcy5pZCArXG5cdFx0XHRcdFwiL1wiICtcblx0XHRcdFx0dGhpcy5wcm9wcy5wcm9kdWN0LFxuXG5cdFx0XHR0aXRsZXg6IHRoaXMucHJvcHMucHJvZHVjdCArIFwiIC0gRGV0YWlsIHByb2R1a1wiLFxuXHRcdH0pO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnNob3dbaV07XG5cdFx0XHR2YXIgbnVtID0gdmFsdWVbXCJpZFwiXTtcblx0XHRcdHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xuXHRcdFx0dmFyIGhhcmdhcHJvZHVrID0gdmFsdWVbXCJoYXJnYVwiXTtcblx0XHRcdHZhciBnYW1iYXIgPSB2YWx1ZVtcImdhbWJhclwiXTtcblx0XHRcdHZhciBkZXNrcmlwc2kgPSB2YWx1ZVtcImRlc2tyaXBzaVwiXTtcblx0XHRcdHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcblx0XHRcdHZhciBzdG9raXMgPSB2YWx1ZVtcInN0b2twcm9kdWtcIl07XG5cdFx0XHR2YXIgc3Rvaztcblx0XHRcdGlmIChvbikge1xuXHRcdFx0XHRzdG9rID0gXCJzYWxlXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRlc2tyaXBzOiBkZXNrcmlwc2ksIGltZzogZ2FtYmFyIH0pO1xuXG5cdFx0XHRteUFycmF5LnB1c2goe1xuXHRcdFx0XHRpZDogbnVtLFxuXHRcdFx0XHRuYW1hOiBuYW1hcHJvZHVrLFxuXHRcdFx0XHRnYW1iYXI6IGdhbWJhcixcblx0XHRcdFx0aGFyZ2E6IGhhcmdhcHJvZHVrLFxuXHRcdFx0XHRkZXNrcmlwOiBkZXNrcmlwc2ksXG5cdFx0XHRcdHN0b2s6IHN0b2ssXG5cblx0XHRcdFx0c3Rva2lzOiBzdG9raXMsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAobXlBcnJheS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0ZGF0YTogbXlBcnJheSwgaW46IFwieWVzXCIgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbjogXCJub1wiIH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNzc1N0cmluZyA9IGBcbiAgLmJvcmRlcnsgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50fVxuICAgICAgICAgIC5vdmVybHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xuICAgICAgICAgIH1cbi5tYWluLWNvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbi5pbWctZXJvcntcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdFRleHRIb2xkZXIgLnByaWNlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cblx0XHRcdFx0XHQuZmVhdHVyZUNvbCAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzE2OTQxYTtcbn1cbi5mZWF0dXJlQ29sIC5ob3RPZmZlciB7XG4gICAgYmFja2dyb3VuZDogIzViYTUxNTtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyLnVwcyB7XG5cdCAgICB0b3A6IDIzcHggIWltcG9ydGFudDtcbn1cbi5mZWF0dXJlQ29sIC5ob3RPZmZlci5hYnMge1xuXHRiYWNrZ3JvdW5kOiNmOTg2MWYgIWltcG9ydGFudDtcbn1cblxuXG4gICAgYDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cbiBcblx0XHRcdCAgICA8c3R5bGVcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBtaW5pZnlDc3NTdHJpbmcoY3NzU3RyaW5nKSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG5cbiA8TmV4dFNlb1xuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGVoZWFkfVxuICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzfVxuICAgICAgY2Fub25pY2FsPXt0aGlzLnByb3BzLmxpbmtueWF9XG4gICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgdXJsOiB0aGlzLnByb3BzLmxpbmtueWEsXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlaGVhZCxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuZ2FtYmFybnlhLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgYWx0OiB0aGlzLnByb3BzLnByb2R1Y3QsXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcbiAgICAgIH19XG4gICAgLz5cblxuPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9CYW5uZXJIb2xkZXIgZC1mbGV4IHctMTAwIGJnQ292ZXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IGBjb3ZlcmAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2PiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmdJViBmd0Vib2xkIHBsYXlmYWlyIG1iLTRcIj4gRGV0YWlsIFByb2R1azwvaDE+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIGJyZWFkQ3J1bWJzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgPExpbmsgaHJlZj1cIi9cIiB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5CZXJhbmRhPC9hPlxuPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTJcIj4vPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+ZGV0YWlsIHByb2R1azwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuXG5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5pbiA9PT0gXCJ5ZXNcIiA/IChcblx0XHRcdFx0XHRcdDxoMT48L2gxPlxuXHRcdFx0XHRcdCkgOiAoXG48PlxuXHRcdFx0XHRcdCAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1lcm9yIGljb24gaWNvbi1wbGFudFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGgxXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmdUb3A6IFwiMTAwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nQm90dG9tOiBcIjEwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdE1hYWYgcHJvZHVrIHRpZGFrIGRpdGVtdWthblxuXHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuc2hvdy5tYXAoKGEpID0+IChcblx0XHRcdFx0PD5cdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3b0NvbHVtbnMgY29udGFpbmVyIHB0LXhsLTIzIHBiLXhsLTIwIHB0LWxnLTIwIHBiLWxnLTIwIHB5LW1kLTE2IHB5LTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTZcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNiBvcmRlci1sZy0xXCI+XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0U2xpZGVySW1hZ2UgbWItbGctMCBtYi00XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2EuZ2FtYmFyfSBhbHQ9XCJpbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCB3LTEwMFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTYgb3JkZXItbGctM1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0VGV4dEhvbGRlciBvdmVyZmxvdy1oaWRkZW5cIj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImZ3RWJvbGQgbWItMlwiPnthLm5hbWFwcm9kdWt9PC9oMj5cblx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9XCJwcmljZSBkLWJsb2NrIG1iLTUgdGV4dC1ncmVlblwiPnt0aGlzLnByb3BzLmhhcmdhbnlhfTwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e1wibWItNSAke2EuaXR9XCJ9ID57YS5kZXNrcmlwc2l9PC9wPlx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBzb2NpYWxOZXR3b3JrIGQtZmxleCBmbGV4LXdyYXAgbWItc20tMTEgbWItNFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBtci01XCI+QkFHSUtBTiBQUk9EVUsgSU5JIEtFOjwvbGk+XG5cdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXItNFwiPjxhIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3RoaXMuc3RhdGUudXJsc31gfSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiIHRhcmdldD1cIl9ibGFua1wiPjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+PGEgaHJlZj17YGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vP3VybD0ke3RoaXMuc3RhdGUudXJsc31gfSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj48L2E+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgdGFiU2V0TGlzdCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi05XCI+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci1tZC0yMCBtci1zbS0xMCBtci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiN0YWIxLTBcIiBjbGFzc05hbWU9XCJhY3RpdmUgcGxheWZhaXIgZndFYm9sZCBwYi0yXCI+RGVza3JpcHNpPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50IG1iLXhsLTExIG1iLWxnLTEwIG1iLW1kLTggbWItNVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidGFiMS0wXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+e3RoaXMucHJvcHMuZGVzfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQgXG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==