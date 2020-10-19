webpackHotUpdate_N_E("pages/produk",{

/***/ "./pages/produk.js":
/*!*************************!*\
  !*** ./pages/produk.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Produk; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! minify-css-string */ "./node_modules/minify-css-string/dist/index.js");
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(minify_css_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");









var _jsxFileName = "D:\\zmb\\pages\\produk.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

var Produk = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Produk, _React$Component);

  var _super = _createSuper(Produk);

  function Produk() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Produk);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePageClick", function (e) {
      var selectedPage = e.selected;
      var offset = selectedPage * _this.state.perPage;

      _this.setState({
        currentPage: selectedPage,
        offset: offset
      });

      _this.receivedData(offset);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "receivedData", function (e) {
      console.log(e);
      window.scrollTo(0, 0);
      var myArray = [];

      for (var i = 0; i < _this.props.show.data.length; i++) {
        var value = _this.props.show.data[i];
        var values = _this.props.show.data[0];
        var num = value["id"];
        var namaproduk = value["namaproduk"];
        var harga = value["harga"];
        var gambar = value["gambar"];
        var sh = values["gambar"];
        var on = value["stok"];
        var kast = value["kat"];
        var on;
        var ulr = window.location.href;
        var one = ulr.split("/")[4];
        var two = ulr.split("/")[5];
        myArray.push({
          id: num,
          nama: namaproduk,
          gambar: gambar,
          harga: harga,
          stok: on
        });
      }

      var slice = myArray.slice(e, e + _this.state.perPage);
      var postData = slice.map(function (a) {
        return __jsx("div", {
          className: "col-12 col-sm-6 col-lg-4 featureCol mb-7",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "border",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 10
          }
        }, __jsx("div", {
          className: "imgHolder position-relative w-100 overflow-hidden",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 11
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
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }
        })), __jsx("div", {
          className: "text-center py-5 px-4",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }
        }, __jsx("span", {
          className: "title d-block mb-2",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 12
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/produk/[id]/[product]",
          as: "/produk/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 12
          }
        }, __jsx("a", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 23
          }
        }, " ", truncate(a.nama)))), __jsx("span", {
          className: "price d-block fwEbold",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 12
          }
        }, a.harga), a.stok ? __jsx("span", {
          "class": "hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8 ups",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 22
          }
        }, "Tersedia") : __jsx("span", {
          "class": "hotOffer fwEbold text-uppercase text-white position-absolute d-block ml-8 abs",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 2
          }
        }, "Stok habis"))));
      });

      _this.setState({
        pageCount: Math.ceil(myArray.length / _this.state.perPage),
        postData: postData
      });
    });

    _this.state = {
      imageIndex: 0,
      data: [],
      gm: "",
      offset: 0,
      perPage: 3,
      currentPage: 0
    };
    _this.handlePageClick = _this.handlePageClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Produk, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.scrollTo(0, 0);
      var myArray = [];

      for (var i = 0; i < this.props.show.data.length; i++) {
        var value = this.props.show.data[i];
        var values = this.props.show.data[0];
        var num = value["id"];
        var namaproduk = value["namaproduk"];
        var harga = value["harga"];
        var gambar = value["gambar"];
        var sh = values["gambar"];
        var on = value["stok"];
        var kast = value["kat"];
        var stok;
        console.log(on);
        var ulr = window.location.href;
        var one = ulr.split("/")[4];
        var two = ulr.split("/")[5];
        this.setState({
          namekat: "zmbpediabogor - Katalog produk",
          ada: "yes",
          titles: "zmbpediabogor - Katalog produk",
          urls: "https://zmbpediabogor.store/product",
          gam: sh
        });
        myArray.push({
          id: num,
          nama: namaproduk,
          gambar: gambar,
          harga: harga,
          stok: on
        });
      }

      if (myArray.length) {
        var slice = myArray.slice(this.state.offset, this.state.offset + this.state.perPage);
        var postData = slice.map(function (a) {
          return __jsx("div", {
            className: "col-12 col-sm-6 col-lg-4 featureCol mb-7",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }
          }, __jsx("div", {
            className: "border",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 10
            }
          }, __jsx("div", {
            className: "imgHolder position-relative w-100 overflow-hidden",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 11
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
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 11
            }
          })), __jsx("div", {
            className: "text-center py-5 px-4",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 11
            }
          }, __jsx("span", {
            className: "title d-block mb-2",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 12
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/produk/[id]/[product]",
            as: "/produk/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 12
            }
          }, __jsx("a", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 23
            }
          }, " ", truncate(a.nama)))), __jsx("span", {
            className: "price d-block fwEbold",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 12
            }
          }, a.harga), a.stok ? __jsx("span", {
            "class": "hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8 ups",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 27
            }
          }, "Tersedia") : __jsx("span", {
            "class": "hotOffer fwEbold text-uppercase text-white position-absolute d-block ml-8 abs",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 2
            }
          }, "Stok habis"))));
        });
        this.setState({
          pageCount: Math.ceil(myArray.length / this.state.perPage),
          postData: postData
        });
      } else {
        this.setState({
          ada: "no"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var cssString = "\n  .border{  border: 1px solid #dee2e6!important}\n  .overl{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgba(255,255,255, .8);\n          }\n.productTextHolder .price {\n    font-size: 15px;\n    margin-top:20px;\n    }\n          .featureCol .price {\n    font-size: 13px;\n    line-height: 18px;\n    color: #16941a;\n}\n.featureCol .hotOffer {\n    background: #5ba515;\n    top: 30px;\n    left: 0;\n    margin-left: 0 !important;\n}\n.featureCol .hotOffer.ups {\n      top: 23px !important;\n}\n.featureCol .hotOffer.abs {\n  background:#f9861f !important;\n}\n          ";
      var currentPage = this.state.currentPage;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 2
        }
      }, __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: minify_css_string__WEBPACK_IMPORTED_MODULE_14___default()(cssString)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 5
        }
      }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_15__["NextSeo"], {
        title: "zmbpediabogor - Katalog produk",
        description: "Toko aneka macam tanaman hias",
        canonical: "https://zmbpediabogor.store/produk",
        openGraph: {
          url: "https://zmbpediabogor.store/produk",
          title: "zmbpediabogor - Katalog produk",
          description: "Toko aneka macam tanaman hias",
          images: [{
            url: this.props.gambarnya,
            width: 600,
            height: 315,
            alt: this.props.altgam
          }],
          site_name: 'zmbpediabogor'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
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
          lineNumber: 270,
          columnNumber: 1
        }
      }, __jsx("div", {
        className: "overl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 15
        }
      }), __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 5
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 6
        }
      }, __jsx("div", {
        "class": "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 7
        }
      }, __jsx("h1", {
        "class": "headingIV fwEbold playfair mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 8
        }
      }, "Katalog"), __jsx("ul", {
        "class": "list-unstyled breadCrumbs d-flex justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 8
        }
      }, __jsx("li", {
        "class": "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/",
        to: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 17
        }
      }, "Beranda"))), __jsx("li", {
        "class": "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 9
        }
      }, "/"), __jsx("li", {
        "class": "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 9
        }
      }, "Katalog")))))), __jsx("div", {
        "class": "twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 2
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 5
        }
      }, __jsx("div", {
        "class": "col-12 col-lg-12 order-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 6
        }
      }, __jsx("article", {
        id: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 7
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 8
        }
      }, this.state.postData, __jsx("div", {
        "class": "col-12 pt-3 mb-lg-0 mb-md-6 mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 9
        }
      }, __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_13___default.a, {
        previousLabel: "prev",
        nextLabel: "next",
        breakLabel: "...",
        breakClassName: "break-me",
        pageCount: this.state.pageCount,
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        onPageChange: this.handlePageClick,
        containerClassName: "pagination",
        subContainerClassName: "pages pagination",
        activeClassName: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 2
        }
      })))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, show, gambarnya, altgam;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://zmbpediabogor.store/api/catalogdata");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                show = _context.sent;
                gambarnya = '';
                altgam = '';

                if (!show.data.length) {
                  _context.next = 15;
                  break;
                }

                _context.next = 11;
                return show.ogimg;

              case 11:
                gambarnya = _context.sent;
                _context.next = 14;
                return show.alt;

              case 14:
                altgam = _context.sent;

              case 15:
                return _context.abrupt("return", {
                  show: show,
                  gambarnya: gambarnya,
                  altgam: altgam
                });

              case 16:
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

  return Produk;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVrLmpzIl0sIm5hbWVzIjpbInRydW5jYXRlIiwic3RyIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiUHJvZHVrIiwiZSIsInNlbGVjdGVkUGFnZSIsInNlbGVjdGVkIiwib2Zmc2V0Iiwic3RhdGUiLCJwZXJQYWdlIiwic2V0U3RhdGUiLCJjdXJyZW50UGFnZSIsInJlY2VpdmVkRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm15QXJyYXkiLCJpIiwicHJvcHMiLCJzaG93IiwiZGF0YSIsInZhbHVlIiwidmFsdWVzIiwibnVtIiwibmFtYXByb2R1ayIsImhhcmdhIiwiZ2FtYmFyIiwic2giLCJvbiIsImthc3QiLCJ1bHIiLCJsb2NhdGlvbiIsImhyZWYiLCJvbmUiLCJzcGxpdCIsInR3byIsInB1c2giLCJpZCIsIm5hbWEiLCJzdG9rIiwic2xpY2UiLCJwb3N0RGF0YSIsIm1hcCIsImEiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJ3aWR0aCIsInJlcGxhY2UiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsImltYWdlSW5kZXgiLCJnbSIsImhhbmRsZVBhZ2VDbGljayIsImJpbmQiLCJuYW1la2F0IiwiYWRhIiwidGl0bGVzIiwidXJscyIsImdhbSIsImNzc1N0cmluZyIsIl9faHRtbCIsIm1pbmlmeUNzc1N0cmluZyIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJnYW1iYXJueWEiLCJhbHQiLCJhbHRnYW0iLCJzaXRlX25hbWUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJmZXRjaCIsInJlcyIsImpzb24iLCJvZ2ltZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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TyxDQUxELENBRkQsQ0FGRCxDQURELENBREgsQ0F4REEsQ0FERCxDQUZFO0FBNEdBOzs7Ozs7Ozs7Ozt1QkFsVWtCcUIsMERBQUssQ0FBQyw2Q0FBRCxDOzs7QUFBakJDLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiekQsb0I7QUFDQ2dELHlCLEdBQVcsRTtBQUNkRSxzQixHQUFTLEU7O3FCQUNObEQsSUFBSSxDQUFDQyxJQUFMLENBQVVwQixNOzs7Ozs7dUJBQ0ttQixJQUFJLENBQUMwRCxLOzs7QUFBdkJWLHlCOzt1QkFDaUJoRCxJQUFJLENBQUNpRCxHOzs7QUFBcEJDLHNCOzs7aURBRUc7QUFBRWxELHNCQUFJLEVBQUpBLElBQUY7QUFBUWdELDJCQUFTLEVBQVRBLFNBQVI7QUFBbUJFLHdCQUFNLEVBQU5BO0FBQW5CLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEJ5QlMsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWsuZWE1ZTk3ZjNhMzQzNDc5NTQ0MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtaW5pZnlDc3NTdHJpbmcgfSBmcm9tIFwibWluaWZ5LWNzcy1zdHJpbmdcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuZnVuY3Rpb24gdHJ1bmNhdGUoc3RyKSB7XHJcblx0cmV0dXJuIHN0ci5sZW5ndGggPiAxMCA/IHN0ci5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIiA6IHN0cjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZUluZGV4OiAwLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgZ206IFwiXCIsXHJcbiAgICAgIG9mZnNldDogMCxcclxuICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVQYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZVBhZ2VDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL2NhdGFsb2dkYXRhXCIpO1xyXG5cdFx0Y29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHQgICBsZXQgZ2FtYmFybnlhID0nJztcclxuXHRcdGxldCBhbHRnYW0gPSAnJztcclxuICAgICAgaWYoc2hvdy5kYXRhLmxlbmd0aCl7XHJcbiAgICAgIGdhbWJhcm55YSA9IGF3YWl0IHNob3cub2dpbWc7IFxyXG4gICAgICAgIGFsdGdhbSA9IGF3YWl0IHNob3cuYWx0OyBcclxuICAgIH1cclxuXHQgICByZXR1cm4geyBzaG93LCBnYW1iYXJueWEsIGFsdGdhbSB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdCAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB2YXIgbXlBcnJheSA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3cuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnNob3cuZGF0YVtpXTtcclxuICAgICAgdmFyIHZhbHVlcyA9IHRoaXMucHJvcHMuc2hvdy5kYXRhWzBdO1xyXG4gICAgICB2YXIgbnVtID0gdmFsdWVbXCJpZFwiXTtcclxuICAgICAgdmFyIG5hbWFwcm9kdWsgPSB2YWx1ZVtcIm5hbWFwcm9kdWtcIl07XHJcbiAgICAgIHZhciBoYXJnYSA9IHZhbHVlW1wiaGFyZ2FcIl07XHJcbiAgICAgIHZhciBnYW1iYXIgPSB2YWx1ZVtcImdhbWJhclwiXTtcclxuICAgICAgdmFyIHNoID0gdmFsdWVzW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgb24gPSB2YWx1ZVtcInN0b2tcIl07XHJcbiAgICAgIHZhciBrYXN0ID0gdmFsdWVbXCJrYXRcIl07XHJcbiAgICAgIHZhciBzdG9rO1xyXG5jb25zb2xlLmxvZyhvbilcclxuICAgIFxyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbmFtZWthdDogXCJ6bWJwZWRpYWJvZ29yIC0gS2F0YWxvZyBwcm9kdWtcIixcclxuICAgICAgICBhZGE6IFwieWVzXCIsXHJcbiAgICAgICAgdGl0bGVzOiBcInptYnBlZGlhYm9nb3IgLSBLYXRhbG9nIHByb2R1a1wiLFxyXG4gICAgICAgIHVybHM6IFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL3Byb2R1Y3RcIixcclxuICAgICAgICBnYW06IHNoLFxyXG4gICAgICB9KTtcclxuICAgICAgbXlBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDogbnVtLFxyXG4gICAgICAgIG5hbWE6IG5hbWFwcm9kdWssXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIsXHJcbiAgICAgICAgaGFyZ2E6IGhhcmdhLFxyXG4gICAgICAgIHN0b2s6IG9uLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobXlBcnJheS5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgc2xpY2UgPSBteUFycmF5LnNsaWNlKFxyXG4gICAgICAgIHRoaXMuc3RhdGUub2Zmc2V0LFxyXG4gICAgICAgIHRoaXMuc3RhdGUub2Zmc2V0ICsgdGhpcy5zdGF0ZS5wZXJQYWdlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthLmdhbWJhcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMDBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwid2F4LWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2EubmFtYXByb2R1a31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1ay8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICB7YS5zdG9rID8gPHNwYW4gY2xhc3M9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04IHVwc1wiPlRlcnNlZGlhPC9zcGFuPiA6IFxyXG4gPHNwYW4gY2xhc3M9XCJob3RPZmZlciBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04IGFic1wiPlN0b2sgaGFiaXM8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgICAgcG9zdERhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkYTogXCJub1wiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGFnZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUGFnZSA9IGUuc2VsZWN0ZWQ7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RlZFBhZ2UgKiB0aGlzLnN0YXRlLnBlclBhZ2U7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRQYWdlOiBzZWxlY3RlZFBhZ2UsXHJcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlY2VpdmVkRGF0YShvZmZzZXQpO1xyXG4gIH07XHJcblxyXG4gIHJlY2VpdmVkRGF0YSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdFwiXTtcclxuICAgICAgdmFyIG9uO1xyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuXHJcbiAgICAgIG15QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IG51bSxcclxuICAgICAgICBuYW1hOiBuYW1hcHJvZHVrLFxyXG4gICAgICAgIGdhbWJhcjogZ2FtYmFyLFxyXG4gICAgICAgIGhhcmdhOiBoYXJnYSxcclxuICAgICAgICBzdG9rOiBvbixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShlLCBlICsgdGhpcy5zdGF0ZS5wZXJQYWdlKTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthLmdhbWJhcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMDBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwid2F4LWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2EubmFtYXByb2R1a31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1ay8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Euc3RvayA/IDxzcGFuIGNsYXNzPVwiaG90T2ZmZXIgZ3JlZW4gZndFYm9sZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBvc2l0aW9uLWFic29sdXRlIGQtYmxvY2sgbWwtOCB1cHNcIj5UZXJzZWRpYTwvc3Bhbj4gOiBcclxuIDxzcGFuIGNsYXNzPVwiaG90T2ZmZXIgZndFYm9sZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBvc2l0aW9uLWFic29sdXRlIGQtYmxvY2sgbWwtOCBhYnNcIj5TdG9rIGhhYmlzPC9zcGFuPlxyXG59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuICAgIFx0ICAgKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5jb25zdCBjc3NTdHJpbmcgPSBgXHJcbiAgLmJvcmRlcnsgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50fVxyXG4gIC5vdmVybHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjgpO1xyXG4gICAgICAgICAgfVxyXG4ucHJvZHVjdFRleHRIb2xkZXIgLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIH1cclxuICAgICAgICAgIC5mZWF0dXJlQ29sIC5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjMTY5NDFhO1xyXG59XHJcbi5mZWF0dXJlQ29sIC5ob3RPZmZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWJhNTE1O1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZlYXR1cmVDb2wgLmhvdE9mZmVyLnVwcyB7XHJcbiAgICAgIHRvcDogMjNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mZWF0dXJlQ29sIC5ob3RPZmZlci5hYnMge1xyXG4gIGJhY2tncm91bmQ6I2Y5ODYxZiAhaW1wb3J0YW50O1xyXG59XHJcbiAgICAgICAgICBgO1xyXG5cclxuXHRcdGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cclxuPD5cclxuXHQ8TGF5b3V0PlxyXG4gICAgPHN0eWxlXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IG1pbmlmeUNzc1N0cmluZyhjc3NTdHJpbmcpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG5cclxuIDxOZXh0U2VvXHJcbiAgICAgIHRpdGxlPVwiem1icGVkaWFib2dvciAtIEthdGFsb2cgcHJvZHVrXCJcclxuICAgICAgZGVzY3JpcHRpb249XCJUb2tvIGFuZWthIG1hY2FtIHRhbmFtYW4gaGlhc1wiXHJcbiAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9wcm9kdWtcIlxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL3Byb2R1a1wiLFxyXG4gICAgICAgIHRpdGxlOiBcInptYnBlZGlhYm9nb3IgLSBLYXRhbG9nIHByb2R1a1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRva28gYW5la2EgbWFjYW0gdGFuYW1hbiBoaWFzXCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXHJcbiAgICAgICAgICAgd2lkdGg6IDYwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMTUsXHJcbiAgICAgICAgICAgIGFsdDogdGhpcy5wcm9wcy5hbHRnYW0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiBcclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybFwiPjwvZGl2Plx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+S2F0YWxvZzwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBicmVhZENydW1icyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPkJlcmFuZGE8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwibXItMlwiPi88L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwiYWN0aXZlXCI+S2F0YWxvZzwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cclxuXHRcdFx0XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJ0d29Db2x1bW5zIGNvbnRhaW5lciBwdC1sZy0yMyBwYi1sZy0yMCBwdC1tZC0xNiBwYi1tZC00IHB0LTEwIHBiLTRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1sZy0xMiBvcmRlci1sZy0zXCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGFydGljbGUgaWQ9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cclxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wb3N0RGF0YX1cclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgcHQtMyBtYi1sZy0wIG1iLW1kLTYgbWItM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyo8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkIHBhZ2luYXRpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtZW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+MTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjI8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Li4uPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPiovfVxyXG5cclxuIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG5leHRMYWJlbD17XCJuZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17dGhpcy5zdGF0ZS5wYWdlQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQ8L0xheW91dD5cclxuXHJcbjwvPlxyXG5cclxuXHRcdCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==