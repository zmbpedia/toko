webpackHotUpdate_N_E("pages/kategori/[id]/[category]",{

/***/ "./pages/kategori/[id]/[category].js":
/*!*******************************************!*\
  !*** ./pages/kategori/[id]/[category].js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! minify-css-string */ "./node_modules/minify-css-string/dist/index.js");
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(minify_css_string__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "D:\\zmb\\pages\\kategori\\[id]\\[category].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








function truncate(str) {
  return str.length > 10 ? str.substring(0, 100) + "..." : str;
}

var Category = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Category, _React$Component);

  var _super = _createSuper(Category);

  function Category() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Category);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "receivedData", function (e) {
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
        var kast = value["kategori"];
        var stok;

        if (on === "true") {
          stok = "sale";
        } else {
          stok = "out of stock";
        }

        var ulr = window.location.href;
        var one = ulr.split("/")[4];
        var two = ulr.split("/")[5];
        myArray.push({
          id: num,
          nama: namaproduk,
          gambar: gambar,
          harga: harga,
          stok: stok,
          kats: kast
        });
      }

      var slice = myArray.slice(e, e + _this.state.perPage);
      var postData = slice.map(function (a) {
        return __jsx("div", {
          className: "col-12 col-sm-6 col-lg-4 featureCol mb-7",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "border",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 19
          }
        }, __jsx("div", {
          className: "imgHolder position-relative w-100 overflow-hidden",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
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
            lineNumber: 173,
            columnNumber: 21
          }
        })), __jsx("div", {
          className: "text-center py-5 px-4",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 21
          }
        }, __jsx("span", {
          className: "title d-block mb-2",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 23
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/produk/[id]/[product]",
          as: "/produk/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 23
          }
        }, " ", truncate(a.nama)))), __jsx("span", {
          className: "price d-block fwEbold",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 23
          }
        }, a.harga))));
      });

      _this.setState({
        pageCount: Math.ceil(myArray.length / _this.state.perPage),
        postData: postData,
        productdata: myArray
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePageClick", function (e) {
      var selectedPage = e.selected;
      var offset = selectedPage * _this.state.perPage;

      _this.setState({
        currentPage: selectedPage,
        offset: offset
      });

      _this.receivedData(offset);
    });

    _this.state = {
      imageIndex: 0,
      data: [],
      offset: 0,
      perPage: 6,
      currentPage: 0,
      namekat: "",
      ada: ""
    };
    _this.handlePageClick = _this.handlePageClick;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Category, [{
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
        var kast = value["kategori"];
        var stok;

        if (on === "true") {
          stok = "sale";
        } else {
          stok = "out of stock";
        }

        var ulr = window.location.href;
        var one = ulr.split("/")[4];
        var two = ulr.split("/")[5];
        this.setState({
          namekat: this.props.category,
          ada: "yes"
        });
        myArray.push({
          id: num,
          nama: namaproduk,
          gambar: gambar,
          harga: harga,
          stok: stok,
          kats: kast
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
              lineNumber: 92,
              columnNumber: 7
            }
          }, __jsx("div", {
            className: "border",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }
          }, __jsx("div", {
            className: "imgHolder position-relative w-100 overflow-hidden",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
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
              lineNumber: 95,
              columnNumber: 21
            }
          })), __jsx("div", {
            className: "text-center py-5 px-4",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 21
            }
          }, __jsx("span", {
            className: "title d-block mb-2",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 23
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
            href: "/produk/[id]/[product]",
            as: "/produk/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 23
            }
          }, __jsx("a", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 23
            }
          }, " ", truncate(a.nama)))), __jsx("span", {
            className: "price d-block fwEbold",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 23
            }
          }, a.harga))));
        });
        this.setState({
          pageCount: Math.ceil(myArray.length / this.state.perPage),
          postData: postData,
          productdata: myArray
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
      var cssString = "\n    .border{  border: 1px solid #dee2e6!important}\n          .overl{\n            width: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgba(255,255,255, .5);\n          }\n.main-content-wrapper {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.img-eror{\n              font-size: 130px;\n    text-align: center;\n    width: 100%;\n}";
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          namekat = _this$state.namekat,
          ada = _this$state.ada;
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 7
        }
      }, __jsx("style", {
        dangerouslySetInnerHTML: {
          __html: minify_css_string__WEBPACK_IMPORTED_MODULE_15___default()(cssString)
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 13
        }
      }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_13__["NextSeo"], {
        title: this.props.titlehead,
        description: this.props.des,
        canonical: this.props.linknya,
        openGraph: {
          url: this.props.linknya,
          title: this.props.titlehead,
          description: this.props.des,
          images: [{
            url: this.props.gambarnya,
            width: 600,
            height: 315,
            alt: this.props.category
          }],
          site_name: 'zmbpediabogor'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
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
          lineNumber: 268,
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
          lineNumber: 275,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 9
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }
      }, __jsx("div", {
        "class": "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }
      }, __jsx("h1", {
        "class": "headingIV fwEbold playfair mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 15
        }
      }, " ", this.state.namekat.replace(/\-/g, " ")), __jsx("ul", {
        "class": "list-unstyled breadCrumbs d-flex justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }
      }, __jsx("li", {
        "class": "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        to: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 17
        }
      }, "Beranda"))), __jsx("li", {
        "class": "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 17
        }
      }, "/"), __jsx("li", {
        "class": "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, "Kategori")))))), __jsx("div", {
        className: "main-content-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "shop-page-wrapper ptb--80",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "shop-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 19
        }
      }, ada === "no" ? __jsx("div", {
        id: "non",
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "img-eror icon icon-plant",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 18
        }
      }), __jsx("h1", {
        style: {
          textAlign: "center",
          paddingTop: "100px",
          width: "100%",
          paddingBottom: "100px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 25
        }
      }, "Belum ada produk di kategori ini")) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "prod",
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 23
        }
      }, this.state.postData), __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
          columnNumber: 21
        }
      })))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, _yield$query, id, category, res, show, gambarnya, linknya, titlehead, des;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return query;

              case 3:
                _yield$query = _context.sent;
                id = _yield$query.id;
                category = _yield$query.category;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://zmbpediabogor.store/api/kategoryproduct/" + id + "/" + category);

              case 8:
                res = _context.sent;
                _context.next = 11;
                return res.json();

              case 11:
                show = _context.sent;
                gambarnya = '';
                linknya = '';
                titlehead = 'Belum ada produk di kategori ini';
                des = '';

                if (!show.data.length) {
                  _context.next = 32;
                  break;
                }

                _context.next = 19;
                return show.namatitle;

              case 19:
                _context.t0 = _context.sent;
                _context.t1 = 'zmbpediabogor | ' + _context.t0;
                titlehead = _context.t1 + ' - kategori produk';
                _context.next = 24;
                return show.namatitle;

              case 24:
                _context.t2 = _context.sent;
                des = 'Koleksi Tanaman terbaik kami dari kategori ' + _context.t2;
                _context.next = 28;
                return show.data[0].oggambar;

              case 28:
                gambarnya = _context.sent;
                _context.next = 31;
                return show.data[0].cronical;

              case 31:
                linknya = _context.sent;

              case 32:
                return _context.abrupt("return", {
                  show: show,
                  category: category,
                  id: id,
                  gambarnya: gambarnya,
                  linknya: linknya,
                  des: des,
                  titlehead: titlehead
                });

              case 33:
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

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2F0ZWdvcmkvL1tjYXRlZ29yeV0uanMiXSwibmFtZXMiOlsidHJ1bmNhdGUiLCJzdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJDYXRlZ29yeSIsImUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm15QXJyYXkiLCJpIiwicHJvcHMiLCJzaG93IiwiZGF0YSIsInZhbHVlIiwidmFsdWVzIiwibnVtIiwibmFtYXByb2R1ayIsImhhcmdhIiwiZ2FtYmFyIiwic2giLCJvbiIsImthc3QiLCJzdG9rIiwidWxyIiwibG9jYXRpb24iLCJocmVmIiwib25lIiwic3BsaXQiLCJ0d28iLCJwdXNoIiwiaWQiLCJuYW1hIiwia2F0cyIsInNsaWNlIiwic3RhdGUiLCJwZXJQYWdlIiwicG9zdERhdGEiLCJtYXAiLCJhIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJyZXBsYWNlIiwic2V0U3RhdGUiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInByb2R1Y3RkYXRhIiwic2VsZWN0ZWRQYWdlIiwic2VsZWN0ZWQiLCJvZmZzZXQiLCJjdXJyZW50UGFnZSIsInJlY2VpdmVkRGF0YSIsImltYWdlSW5kZXgiLCJuYW1la2F0IiwiYWRhIiwiaGFuZGxlUGFnZUNsaWNrIiwiY2F0ZWdvcnkiLCJjc3NTdHJpbmciLCJfX2h0bWwiLCJtaW5pZnlDc3NTdHJpbmciLCJ0aXRsZWhlYWQiLCJkZXMiLCJsaW5rbnlhIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImdhbWJhcm55YSIsImFsdCIsInNpdGVfbmFtZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicXVlcnkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJuYW1hdGl0bGUiLCJvZ2dhbWJhciIsImNyb25pY2FsIiwiUmVhY3QiLCJDb21w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QixRQUE5RCxDOzs7QUFBakJzQixtQjs7dUJBQ2FBLEdBQUcsQ0FBQ0MsSUFBSixFOzs7QUFBYnJFLG9CO0FBRUp5RCx5QixHQUFXLEU7QUFDUEwsdUIsR0FBUyxFO0FBQ1RGLHlCLEdBQVUsa0M7QUFDVkMsbUIsR0FBTSxFOztxQkFDUG5ELElBQUksQ0FBQ0MsSUFBTCxDQUFVVixNOzs7Ozs7dUJBRXlCUyxJQUFJLENBQUNzRSxTOzs7OzhCQUEvQixrQjtBQUFacEIseUIsaUJBQXVELG9COzt1QkFDTWxELElBQUksQ0FBQ3NFLFM7Ozs7QUFBbEVuQixtQixHQUFPLDZDOzt1QkFDV25ELElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsRUFBYXNFLFE7OztBQUEvQmQseUI7O3VCQUNnQnpELElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsRUFBYXVFLFE7OztBQUE3QnBCLHVCOzs7aURBR0s7QUFBRXBELHNCQUFJLEVBQUpBLElBQUY7QUFBUThDLDBCQUFRLEVBQVJBLFFBQVI7QUFBa0IzQixvQkFBRSxFQUFGQSxFQUFsQjtBQUFzQnNDLDJCQUFTLEVBQVRBLFNBQXRCO0FBQWlDTCx5QkFBTyxFQUFQQSxPQUFqQztBQUEwQ0QscUJBQUcsRUFBSEEsR0FBMUM7QUFBK0NELDJCQUFTLEVBQVRBO0FBQS9DLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEMyQnVCLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva2F0ZWdvcmkvW2lkXS9bY2F0ZWdvcnldLmM3Y2MzMTA2NjNjOGU5ODM2MWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1pbmlmeUNzc1N0cmluZyB9IGZyb20gXCJtaW5pZnktY3NzLXN0cmluZ1wiO1xyXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIpIHtcclxuICByZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAxMDApICsgXCIuLi5cIiA6IHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlSW5kZXg6IDAsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHBlclBhZ2U6IDYsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICBuYW1la2F0OiBcIlwiLFxyXG4gICAgICBhZGE6IFwiXCIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVQYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZVBhZ2VDbGljaztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBjYXRlZ29yeSB9ID0gYXdhaXQgcXVlcnk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL2FwaS9rYXRlZ29yeXByb2R1Y3QvXCIgKyBpZCArXCIvXCIrY2F0ZWdvcnkpO1xyXG4gICAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGxldCBnYW1iYXJueWEgPScnO1xyXG4gICAgICBsZXQgbGlua255YSA9Jyc7XHJcbiAgICAgIGxldCB0aXRsZWhlYWQ9J0JlbHVtIGFkYSBwcm9kdWsgZGkga2F0ZWdvcmkgaW5pJ1xyXG4gICAgICBsZXQgZGVzID0gJydcclxuICAgICAgaWYoc2hvdy5kYXRhLmxlbmd0aCl7XHJcbiAgXHJcbiAgICAgIHRpdGxlaGVhZCA9ICd6bWJwZWRpYWJvZ29yIHwgJysgYXdhaXQgc2hvdy5uYW1hdGl0bGUgKyAnIC0ga2F0ZWdvcmkgcHJvZHVrJ1xyXG4gICAgICBkZXMgPSAgJ0tvbGVrc2kgVGFuYW1hbiB0ZXJiYWlrIGthbWkgZGFyaSBrYXRlZ29yaSAnICsgYXdhaXQgc2hvdy5uYW1hdGl0bGVcclxuICAgICAgZ2FtYmFybnlhID0gYXdhaXQgc2hvdy5kYXRhWzBdLm9nZ2FtYmFyO1xyXG4gICAgICBsaW5rbnlhID0gYXdhaXQgc2hvdy5kYXRhWzBdLmNyb25pY2FsO1xyXG4gICAgXHJcbiAgICAgfVxyXG4gICAgcmV0dXJuIHsgc2hvdywgY2F0ZWdvcnksIGlkLCBnYW1iYXJueWEsIGxpbmtueWEsIGRlcywgdGl0bGVoZWFkIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3cuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnNob3cuZGF0YVtpXTtcclxuICAgICAgdmFyIHZhbHVlcyA9IHRoaXMucHJvcHMuc2hvdy5kYXRhWzBdO1xyXG4gICAgICB2YXIgbnVtID0gdmFsdWVbXCJpZFwiXTtcclxuICAgICAgdmFyIG5hbWFwcm9kdWsgPSB2YWx1ZVtcIm5hbWFwcm9kdWtcIl07XHJcbiAgICAgIHZhciBoYXJnYSA9IHZhbHVlW1wiaGFyZ2FcIl07XHJcbiAgICAgIHZhciBnYW1iYXIgPSB2YWx1ZVtcImdhbWJhclwiXTtcclxuICAgICAgdmFyIHNoID0gdmFsdWVzW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgb24gPSB2YWx1ZVtcInN0b2tcIl07XHJcbiAgICAgIHZhciBrYXN0ID0gdmFsdWVbXCJrYXRlZ29yaVwiXTtcclxuICAgICAgdmFyIHN0b2s7XHJcblxyXG4gICAgICBpZiAob24gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgc3RvayA9IFwic2FsZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB1bHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgdmFyIG9uZSA9IHVsci5zcGxpdChcIi9cIilbNF07XHJcbiAgICAgIHZhciB0d28gPSB1bHIuc3BsaXQoXCIvXCIpWzVdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBuYW1la2F0OiB0aGlzLnByb3BzLmNhdGVnb3J5LFxyXG4gICAgICAgIGFkYTogXCJ5ZXNcIlxyXG4gICAgICB9KTtcclxuICAgICAgbXlBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDogbnVtLFxyXG4gICAgICAgIG5hbWE6IG5hbWFwcm9kdWssXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIsXHJcbiAgICAgICAgaGFyZ2E6IGhhcmdhLFxyXG4gICAgICAgIHN0b2s6IHN0b2ssXHJcbiAgICAgICAga2F0czoga2FzdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG15QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCxcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCArIHRoaXMuc3RhdGUucGVyUGFnZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBmZWF0dXJlQ29sIG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0hvbGRlciBwb3NpdGlvbi1yZWxhdGl2ZSB3LTEwMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2EuZ2FtYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3YXgtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YS5uYW1hcHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTUgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgZC1ibG9jayBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWsvW2lkXS9bcHJvZHVjdF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcHJvZHVrLyR7YS5pZH0vJHthLm5hbWEucmVwbGFjZSgvXFxzL2csXCItXCIpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHt0cnVuY2F0ZShhLm5hbWEpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZSBkLWJsb2NrIGZ3RWJvbGRcIj57YS5oYXJnYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImhvdE9mZmVyIGdyZWVuIGZ3RWJvbGQgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBwb3NpdGlvbi1hYnNvbHV0ZSBkLWJsb2NrIG1sLThcIj5TYWxlPC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgICBwb3N0RGF0YSxcclxuICAgICAgICBwcm9kdWN0ZGF0YTogbXlBcnJheSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRhOiBcIm5vXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNlaXZlZERhdGEgPSAoZSkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdmFyIG15QXJyYXkgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0ZWdvcmlcIl07XHJcbiAgICAgIHZhciBzdG9rO1xyXG5cclxuICAgICAgaWYgKG9uID09PSBcInRydWVcIikge1xyXG4gICAgICAgIHN0b2sgPSBcInNhbGVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuXHJcbiAgICAgIG15QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IG51bSxcclxuICAgICAgICBuYW1hOiBuYW1hcHJvZHVrLFxyXG4gICAgICAgIGdhbWJhcjogZ2FtYmFyLFxyXG4gICAgICAgIGhhcmdhOiBoYXJnYSxcclxuICAgICAgICBzdG9rOiBzdG9rLFxyXG4gICAgICAgIGthdHM6IGthc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShlLCBlICsgdGhpcy5zdGF0ZS5wZXJQYWdlKTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBmZWF0dXJlQ29sIG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0hvbGRlciBwb3NpdGlvbi1yZWxhdGl2ZSB3LTEwMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2EuZ2FtYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3YXgtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YS5uYW1hcHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTUgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgZC1ibG9jayBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWsvW2lkXS9bcHJvZHVjdF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcHJvZHVrLyR7YS5pZH0vJHthLm5hbWEucmVwbGFjZSgvXFxzL2csXCItXCIpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHt0cnVuY2F0ZShhLm5hbWEpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZSBkLWJsb2NrIGZ3RWJvbGRcIj57YS5oYXJnYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImhvdE9mZmVyIGdyZWVuIGZ3RWJvbGQgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBwb3NpdGlvbi1hYnNvbHV0ZSBkLWJsb2NrIG1sLThcIj5TYWxlPC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICAgIHByb2R1Y3RkYXRhOiBteUFycmF5LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUGFnZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUGFnZSA9IGUuc2VsZWN0ZWQ7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RlZFBhZ2UgKiB0aGlzLnN0YXRlLnBlclBhZ2U7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudFBhZ2U6IHNlbGVjdGVkUGFnZSxcclxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVjZWl2ZWREYXRhKG9mZnNldCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICBjb25zdCBjc3NTdHJpbmcgPSBgXHJcbiAgICAuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XHJcbiAgICAgICAgICAub3Zlcmx7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xyXG4gICAgICAgICAgfVxyXG4ubWFpbi1jb250ZW50LXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5pbWctZXJvcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1gO1xyXG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSwgbmFtZWthdCwgYWRhIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IG1pbmlmeUNzc1N0cmluZyhjc3NTdHJpbmcpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gPE5leHRTZW9cclxuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGVoZWFkfVxyXG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXN9XHJcbiAgICAgIGNhbm9uaWNhbD17dGhpcy5wcm9wcy5saW5rbnlhfVxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICB1cmw6IHRoaXMucHJvcHMubGlua255YSxcclxuICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZWhlYWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzLFxyXG4gICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuZ2FtYmFybnlhLFxyXG4gICAgICAgICAgICB3aWR0aDogNjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMxNSxcclxuICAgICAgICAgICAgYWx0OiB0aGlzLnByb3BzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2l0ZV9uYW1lOiAnem1icGVkaWFib2dvcicsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+IHt0aGlzLnN0YXRlLm5hbWVrYXQucmVwbGFjZSgvXFwtL2csIFwiIFwiKX08L2gxPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgYnJlYWRDcnVtYnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPkJlcmFuZGE8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXItMlwiPi88L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+S2F0ZWdvcmk8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtcGFnZS13cmFwcGVyIHB0Yi0tODBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FkYSA9PT0gXCJub1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5vblwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctZXJvciBpY29uIGljb24tcGxhbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmVsdW0gYWRhIHByb2R1ayBkaSBrYXRlZ29yaSBpbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3REYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9e1wicHJldlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV4dExhYmVsPXtcIm5leHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9e1wiLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVha0NsYXNzTmFtZT17XCJicmVhay1tZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50PXt0aGlzLnN0YXRlLnBhZ2VDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9e1wicGFnZXMgcGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtcImFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==