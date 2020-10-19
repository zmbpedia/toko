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
                  desi: desi
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVrLy9bcHJvZHVjdF0uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInN0YXRlIiwicHJvZHVjdGRhdGEiLCJ1cmxzIiwiZGVza3JpcHMiLCJ0aXRsZXgiLCJteUFycmF5IiwidWxyIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2V0U3RhdGUiLCJwcm9wcyIsImlkIiwicHJvZHVjdCIsImkiLCJzaG93IiwibGVuZ3RoIiwidmFsdWUiLCJudW0iLCJuYW1hcHJvZHVrIiwiaGFyZ2Fwcm9kdWsiLCJnYW1iYXIiLCJkZXNrcmlwc2kiLCJvbiIsInN0b2tpcyIsInN0b2siLCJpbWciLCJwdXNoIiwibmFtYSIsImhhcmdhIiwiZGVza3JpcCIsImNzc1N0cmluZyIsIl9faHRtbCIsIm1pbmlmeUNzc1N0cmluZyIsInRpdGxlaGVhZCIsImRlcyIsImxpbmtueWEiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiZ2FtYmFybnlhIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzaXRlX25hbWUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImEiLCJoYXJnYW55YSIsInF1ZXJ5IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGVzaSIsImNyb25pY2FsIiwibnl1IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFDcEIscUJBQWM7QUFBQTs7QUFBQTs7QUFDYjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxpQkFBVyxFQUFFLEVBREQ7QUFFWixZQUFJLEVBRlE7QUFHWkMsVUFBSSxFQUFF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R0FBcEQ7QUFBeURtQiwwQkFBUSxFQUFSQSxRQUF6RDtBQUFtRUssc0JBQUksRUFBSkE7QUFBbkUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQzRCRyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1ay9baWRdL1twcm9kdWN0XS5iZDUwMmQyYjdhOGFmMDIzMjg3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1pbmlmeUNzc1N0cmluZyB9IGZyb20gXCJtaW5pZnktY3NzLXN0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cHJvZHVjdGRhdGE6IFtdLFxuXHRcdFx0aW46IFwiXCIsXG5cdFx0XHR1cmxzOiBcIlwiLFxuXHRcdFx0ZGVza3JpcHM6IFwiXCIsXG5cdFx0XHR0aXRsZXg6IFwiXCIsXG5cdFx0fTtcblx0fVxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuXHRcdGNvbnN0IHsgaWQsIHByb2R1Y3QgfSA9IHF1ZXJ5O1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL3Byb2R1Y3RkYXRhL1wiICsgaWQgKyBcIi9cIiArIHByb2R1Y3Rcblx0XHQpO1xuXHRcdGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBsZXQgZ2FtYmFybnlhID0nJztcbiAgICBcdGxldCBsaW5rbnlhID0nJztcbiAgICBcdGxldCB0aXRsZWhlYWQ9J01hYWYgdGlkYWsgYWRhIHByb2R1aydcbiAgICBcdGxldCBkZXMgPSAnJ1xuICAgIFx0bGV0IGhhcmdhbnlhID0gJydcbiAgICBcdGxldCBkZXNpID0gJydcblxuICAgIFx0aWYoc2hvdy5sZW5ndGgpe1xuXG4gICAgXHR0aXRsZWhlYWQgPSAnem1icGVkaWFib2dvciB8ICcrIGF3YWl0IHNob3dbMF0ubmFtYXByb2R1aysgJy0gRGV0YWlsIHByb2R1aycgICAgICAgICAgIFxuICAgIFx0Z2FtYmFybnlhID0gYXdhaXQgc2hvd1swXS5nYW1iYXI7XG4gICAgXHRsaW5rbnlhID0gYXdhaXQgc2hvd1swXS5jcm9uaWNhbDtcblx0XHRkZXMgPSBhd2FpdCBzaG93WzBdLmRlc2tyaXBzaSArICcgLSAnICsgIGF3YWl0IHNob3dbMF0ubnl1O1xuXHRcdGhhcmdhbnlhID0gYXdhaXQgc2hvd1swXS5oYXJnYTtcbiAgICAgIFxuIFx0XHQgfVxuXG5cblx0XHRyZXR1cm4geyBzaG93LCBwcm9kdWN0LCBpZCwgZ2FtYmFybnlhLCBsaW5rbnlhLCB0aXRsZWhlYWQsIGRlcywgaGFyZ2FueWEsIGRlc2l9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIG15QXJyYXkgPSBbXTtcblx0XHR2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR1cmxzOlxuXHRcdFx0XHRcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9wcm9kdWsvXCIgK1xuXHRcdFx0XHR0aGlzLnByb3BzLmlkICtcblx0XHRcdFx0XCIvXCIgK1xuXHRcdFx0XHR0aGlzLnByb3BzLnByb2R1Y3QsXG5cblx0XHRcdHRpdGxleDogdGhpcy5wcm9wcy5wcm9kdWN0ICsgXCIgLSBEZXRhaWwgcHJvZHVrXCIsXG5cdFx0fSk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3cubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvd1tpXTtcblx0XHRcdHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xuXHRcdFx0dmFyIG5hbWFwcm9kdWsgPSB2YWx1ZVtcIm5hbWFwcm9kdWtcIl07XG5cdFx0XHR2YXIgaGFyZ2Fwcm9kdWsgPSB2YWx1ZVtcImhhcmdhXCJdO1xuXHRcdFx0dmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xuXHRcdFx0dmFyIGRlc2tyaXBzaSA9IHZhbHVlW1wiZGVza3JpcHNpXCJdO1xuXHRcdFx0dmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xuXHRcdFx0dmFyIHN0b2tpcyA9IHZhbHVlW1wic3Rva3Byb2R1a1wiXTtcblx0XHRcdHZhciBzdG9rO1xuXHRcdFx0aWYgKG9uKSB7XG5cdFx0XHRcdHN0b2sgPSBcInNhbGVcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGVza3JpcHM6IGRlc2tyaXBzaSwgaW1nOiBnYW1iYXIgfSk7XG5cblx0XHRcdG15QXJyYXkucHVzaCh7XG5cdFx0XHRcdGlkOiBudW0sXG5cdFx0XHRcdG5hbWE6IG5hbWFwcm9kdWssXG5cdFx0XHRcdGdhbWJhcjogZ2FtYmFyLFxuXHRcdFx0XHRoYXJnYTogaGFyZ2Fwcm9kdWssXG5cdFx0XHRcdGRlc2tyaXA6IGRlc2tyaXBzaSxcblx0XHRcdFx0c3Rvazogc3RvayxcblxuXHRcdFx0XHRzdG9raXM6IHN0b2tpcyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChteUFycmF5Lmxlbmd0aCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RkYXRhOiBteUFycmF5LCBpbjogXCJ5ZXNcIiB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGluOiBcIm5vXCIgfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG4gICAgY29uc3QgY3NzU3RyaW5nID0gYFxuICAuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XG4gICAgICAgICAgLm92ZXJse1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuNSk7XG4gICAgICAgICAgfVxuLm1haW4tY29udGVudC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmltZy1lcm9ye1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0VGV4dEhvbGRlciAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuXHRcdFx0XHRcdC5mZWF0dXJlQ29sIC5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjMTY5NDFhO1xufVxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWJhNTE1O1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4uZmVhdHVyZUNvbCAuaG90T2ZmZXIudXBzIHtcblx0ICAgIHRvcDogMjNweCAhaW1wb3J0YW50O1xufVxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyLmFicyB7XG5cdGJhY2tncm91bmQ6I2Y5ODYxZiAhaW1wb3J0YW50O1xufVxuXG5cbiAgICBgO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuIFxuXHRcdFx0ICAgIDxzdHlsZVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IG1pbmlmeUNzc1N0cmluZyhjc3NTdHJpbmcpLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cblxuIDxOZXh0U2VvXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWhlYWR9XG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXN9XG4gICAgICBjYW5vbmljYWw9e3RoaXMucHJvcHMubGlua255YX1cbiAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICB1cmw6IHRoaXMucHJvcHMubGlua255YSxcbiAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGVoZWFkLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXMsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICBhbHQ6IHRoaXMucHJvcHMucHJvZHVjdCxcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNpdGVfbmFtZTogJ3ptYnBlZGlhYm9nb3InLFxuICAgICAgfX1cbiAgICAvPlxuXG48c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb0Jhbm5lckhvbGRlciBkLWZsZXggdy0xMDAgYmdDb3ZlclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhpcy5wcm9wcy5nYW1iYXJueWF9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgY2VudGVyYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LCAuOCknfX0+PC9kaXY+ICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHQtbGctMjMgcHQtbWQtMTUgcHQtc20tMTAgcHQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ0lWIGZ3RWJvbGQgcGxheWZhaXIgbWItNFwiPiBEZXRhaWwgUHJvZHVrPC9oMT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgYnJlYWRDcnVtYnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxuICA8TGluayBocmVmPVwiL1wiIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPkJlcmFuZGE8L2E+XG48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPi88L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5kZXRhaWwgcHJvZHVrPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmluID09PSBcInllc1wiID8gKFxuXHRcdFx0XHRcdFx0PGgxPjwvaDE+XG5cdFx0XHRcdFx0KSA6IChcbjw+XG5cdFx0XHRcdFx0ICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWVyb3IgaWNvbiBpY29uLXBsYW50XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aDFcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZ1RvcDogXCIxMDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IFwiMTAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0TWFhZiBwcm9kdWsgdGlkYWsgZGl0ZW11a2FuXG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zaG93Lm1hcCgoYSkgPT4gKFxuXHRcdFx0XHQ8Plx0XHRcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdvQ29sdW1ucyBjb250YWluZXIgcHQteGwtMjMgcGIteGwtMjAgcHQtbGctMjAgcGItbGctMjAgcHktbWQtMTYgcHktMTBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02IG9yZGVyLWxnLTFcIj5cdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RTbGlkZXJJbWFnZSBtYi1sZy0wIG1iLTRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17YS5nYW1iYXJ9IGFsdD1cImltYWdlIGRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHctMTAwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNiBvcmRlci1sZy0zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RUZXh0SG9sZGVyIG92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiZndFYm9sZCBtYi0yXCI+e2EubmFtYXByb2R1a308L2gyPlxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgbWItNSB0ZXh0LWdyZWVuXCI+e3RoaXMucHJvcHMuaGFyZ2FueWF9PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17XCJtYi01ICR7YS5pdH1cIn0gPnthLmRlc2tyaXBzaX08L3A+XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIHNvY2lhbE5ldHdvcmsgZC1mbGV4IGZsZXgtd3JhcCBtYi1zbS0xMSBtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIG1yLTVcIj5CQUdJS0FOIFBST0RVSyBJTkkgS0U6PC9saT5cblx0XHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci00XCI+PGEgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dGhpcy5zdGF0ZS51cmxzfWB9IGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PC9hPjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1yLTRcIj48YSBocmVmPXtgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8/dXJsPSR7dGhpcy5zdGF0ZS51cmxzfWB9IGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCB0YWJTZXRMaXN0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTlcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1yLW1kLTIwIG1yLXNtLTEwIG1yLTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI3RhYjEtMFwiIGNsYXNzTmFtZT1cImFjdGl2ZSBwbGF5ZmFpciBmd0Vib2xkIHBiLTJcIj5EZXNrcmlwc2k8L2E+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQgbWIteGwtMTEgbWItbGctMTAgbWItbWQtOCBtYi01XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJ0YWIxLTBcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kZXN9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdCBcblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9