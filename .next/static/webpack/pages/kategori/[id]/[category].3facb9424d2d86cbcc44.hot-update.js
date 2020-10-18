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
      }), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 10
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
          lineNumber: 248,
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
          lineNumber: 269,
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
          lineNumber: 276,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 9
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }
      }, __jsx("div", {
        "class": "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 13
        }
      }, __jsx("h1", {
        "class": "headingIV fwEbold playfair mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }
      }, " ", this.state.namekat.replace(/\-/g, " ")), __jsx("ul", {
        "class": "list-unstyled breadCrumbs d-flex justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 15
        }
      }, __jsx("li", {
        "class": "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/",
        to: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 17
        }
      }, "Beranda"))), __jsx("li", {
        "class": "mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, "/"), __jsx("li", {
        "class": "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 17
        }
      }, "Kategori")))))), __jsx("div", {
        className: "main-content-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "shop-page-wrapper ptb--80",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "shop-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 19
        }
      }, ada === "no" ? __jsx("div", {
        id: "non",
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "img-eror icon icon-plant",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
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
          lineNumber: 304,
          columnNumber: 25
        }
      }, "Belum ada produk di kategori ini")) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "prod",
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
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
          lineNumber: 320,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2F0ZWdvcmkvL1tjYXRlZ29yeV0uanMiXSwibmFtZXMiOlsidHJ1bmNhdGUiLCJzdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJDYXRlZ29yeSIsImUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm15QXJyYXkiLCJpIiwicHJvcHMiLCJzaG93IiwiZGF0YSIsInZhbHVlIiwidmFsdWVzIiwibnVtIiwibmFtYXByb2R1ayIsImhhcmdhIiwiZ2FtYmFyIiwic2giLCJvbiIsImthc3QiLCJzdG9rIiwidWxyIiwibG9jYXRpb24iLCJocmVmIiwib25lIiwic3BsaXQiLCJ0d28iLCJwdXNoIiwiaWQiLCJuYW1hIiwia2F0cyIsInNsaWNlIiwic3RhdGUiLCJwZXJQYWdlIiwicG9zdERhdGEiLCJtYXAiLCJhIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJyZXBsYWNlIiwic2V0U3RhdGUiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInByb2R1Y3RkYXRhIiwic2VsZWN0ZWRQYWdlIiwic2VsZWN0ZWQiLCJvZmZzZXQiLCJjdXJyZW50UGFnZSIsInJlY2VpdmVkRGF0YSIsImltYWdlSW5kZXgiLCJuYW1la2F0IiwiYWRhIiwiaGFuZGxlUGFnZUNsaWNrIiwiY2F0ZWdvcnkiLCJjc3NTdHJpbmciLCJfX2h0bWwiLCJtaW5pZnlDc3NTdHJpbmciLCJ0aXRsZWhlYWQiLCJkZXMiLCJsaW5rbnlhIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImdhbWJhcm55YSIsImFsdCIsInNpdGVfbmFtZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicXVlcnkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJuYW1hdGl0bGUiLCJvZ2dhbWJhciIsImNyb25pY2FsIiwiUmVhY3QiLCJDb21w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QkFBQUEsUTs7dUJBQ01xQiwwREFBSyxDQUFDLHFEQUFxRGhELEVBQXJELEdBQXlELEdBQXpELEdBQTZEMkIsUUFBOUQsQzs7O0FBQWpCc0IsbUI7O3VCQUNhQSxHQUFHLENBQUNDLElBQUosRTs7O0FBQWJyRSxvQjtBQUVKeUQseUIsR0FBVyxFO0FBQ1BMLHVCLEdBQVMsRTtBQUNURix5QixHQUFVLGtDO0FBQ1ZDLG1CLEdBQU0sRTs7cUJBQ1BuRCxJQUFJLENBQUNDLElBQUwsQ0FBVVYsTTs7Ozs7O3VCQUV5QlMsSUFBSSxDQUFDc0UsUzs7Ozs4QkFBL0Isa0I7QUFBWnBCLHlCLGlCQUF1RCxvQjs7dUJBQ01sRCxJQUFJLENBQUNzRSxTOzs7O0FBQWxFbkIsbUIsR0FBTyw2Qzs7dUJBQ1duRCxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLEVBQWFzRSxROzs7QUFBL0JkLHlCOzt1QkFDZ0J6RCxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLEVBQWF1RSxROzs7QUFBN0JwQix1Qjs7O2lEQUdLO0FBQUVwRCxzQkFBSSxFQUFKQSxJQUFGO0FBQVE4QywwQkFBUSxFQUFSQSxRQUFSO0FBQWtCM0Isb0JBQUUsRUFBRkEsRUFBbEI7QUFBc0JzQywyQkFBUyxFQUFUQSxTQUF0QjtBQUFpQ0wseUJBQU8sRUFBUEEsT0FBakM7QUFBMENELHFCQUFHLEVBQUhBLEdBQTFDO0FBQStDRCwyQkFBUyxFQUFUQTtBQUEvQyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhDMkJ1Qiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2thdGVnb3JpL1tpZF0vW2NhdGVnb3J5XS4zZmFjYjk0MjRkMmQ4NmNiY2M0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWluaWZ5Q3NzU3RyaW5nIH0gZnJvbSBcIm1pbmlmeS1jc3Mtc3RyaW5nXCI7XHJcbmZ1bmN0aW9uIHRydW5jYXRlKHN0cikge1xyXG4gIHJldHVybiBzdHIubGVuZ3RoID4gMTAgPyBzdHIuc3Vic3RyaW5nKDAsIDEwMCkgKyBcIi4uLlwiIDogc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VJbmRleDogMCxcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIG9mZnNldDogMCxcclxuICAgICAgcGVyUGFnZTogNixcclxuICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgIG5hbWVrYXQ6IFwiXCIsXHJcbiAgICAgIGFkYTogXCJcIixcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVBhZ2VDbGljayA9IHRoaXMuaGFuZGxlUGFnZUNsaWNrO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IHsgaWQsIGNhdGVnb3J5IH0gPSBhd2FpdCBxdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL2FwaS9rYXRlZ29yeXByb2R1Y3QvXCIgKyBpZCArXCIvXCIrY2F0ZWdvcnkpO1xyXG4gICAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGxldCBnYW1iYXJueWEgPScnO1xyXG4gICAgICBsZXQgbGlua255YSA9Jyc7XHJcbiAgICAgIGxldCB0aXRsZWhlYWQ9J0JlbHVtIGFkYSBwcm9kdWsgZGkga2F0ZWdvcmkgaW5pJ1xyXG4gICAgICBsZXQgZGVzID0gJydcclxuICAgICAgaWYoc2hvdy5kYXRhLmxlbmd0aCl7XHJcbiAgXHJcbiAgICAgIHRpdGxlaGVhZCA9ICd6bWJwZWRpYWJvZ29yIHwgJysgYXdhaXQgc2hvdy5uYW1hdGl0bGUgKyAnIC0ga2F0ZWdvcmkgcHJvZHVrJ1xyXG4gICAgICBkZXMgPSAgJ0tvbGVrc2kgVGFuYW1hbiB0ZXJiYWlrIGthbWkgZGFyaSBrYXRlZ29yaSAnICsgYXdhaXQgc2hvdy5uYW1hdGl0bGVcclxuICAgICAgZ2FtYmFybnlhID0gYXdhaXQgc2hvdy5kYXRhWzBdLm9nZ2FtYmFyO1xyXG4gICAgICBsaW5rbnlhID0gYXdhaXQgc2hvdy5kYXRhWzBdLmNyb25pY2FsO1xyXG4gICAgXHJcbiAgICAgfVxyXG4gICAgcmV0dXJuIHsgc2hvdywgY2F0ZWdvcnksIGlkLCBnYW1iYXJueWEsIGxpbmtueWEsIGRlcywgdGl0bGVoZWFkIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3cuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnNob3cuZGF0YVtpXTtcclxuICAgICAgdmFyIHZhbHVlcyA9IHRoaXMucHJvcHMuc2hvdy5kYXRhWzBdO1xyXG4gICAgICB2YXIgbnVtID0gdmFsdWVbXCJpZFwiXTtcclxuICAgICAgdmFyIG5hbWFwcm9kdWsgPSB2YWx1ZVtcIm5hbWFwcm9kdWtcIl07XHJcbiAgICAgIHZhciBoYXJnYSA9IHZhbHVlW1wiaGFyZ2FcIl07XHJcbiAgICAgIHZhciBnYW1iYXIgPSB2YWx1ZVtcImdhbWJhclwiXTtcclxuICAgICAgdmFyIHNoID0gdmFsdWVzW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgb24gPSB2YWx1ZVtcInN0b2tcIl07XHJcbiAgICAgIHZhciBrYXN0ID0gdmFsdWVbXCJrYXRlZ29yaVwiXTtcclxuICAgICAgdmFyIHN0b2s7XHJcblxyXG4gICAgICBpZiAob24gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgc3RvayA9IFwic2FsZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB1bHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgdmFyIG9uZSA9IHVsci5zcGxpdChcIi9cIilbNF07XHJcbiAgICAgIHZhciB0d28gPSB1bHIuc3BsaXQoXCIvXCIpWzVdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBuYW1la2F0OiB0aGlzLnByb3BzLmNhdGVnb3J5LFxyXG4gICAgICAgIGFkYTogXCJ5ZXNcIlxyXG4gICAgICB9KTtcclxuICAgICAgbXlBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDogbnVtLFxyXG4gICAgICAgIG5hbWE6IG5hbWFwcm9kdWssXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIsXHJcbiAgICAgICAgaGFyZ2E6IGhhcmdhLFxyXG4gICAgICAgIHN0b2s6IHN0b2ssXHJcbiAgICAgICAga2F0czoga2FzdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG15QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCxcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCArIHRoaXMuc3RhdGUucGVyUGFnZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBmZWF0dXJlQ29sIG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0hvbGRlciBwb3NpdGlvbi1yZWxhdGl2ZSB3LTEwMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2EuZ2FtYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3YXgtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YS5uYW1hcHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTUgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgZC1ibG9jayBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWsvW2lkXS9bcHJvZHVjdF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcHJvZHVrLyR7YS5pZH0vJHthLm5hbWEucmVwbGFjZSgvXFxzL2csXCItXCIpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHt0cnVuY2F0ZShhLm5hbWEpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZSBkLWJsb2NrIGZ3RWJvbGRcIj57YS5oYXJnYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImhvdE9mZmVyIGdyZWVuIGZ3RWJvbGQgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBwb3NpdGlvbi1hYnNvbHV0ZSBkLWJsb2NrIG1sLThcIj5TYWxlPC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgICBwb3N0RGF0YSxcclxuICAgICAgICBwcm9kdWN0ZGF0YTogbXlBcnJheSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRhOiBcIm5vXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNlaXZlZERhdGEgPSAoZSkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdmFyIG15QXJyYXkgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0ZWdvcmlcIl07XHJcbiAgICAgIHZhciBzdG9rO1xyXG5cclxuICAgICAgaWYgKG9uID09PSBcInRydWVcIikge1xyXG4gICAgICAgIHN0b2sgPSBcInNhbGVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuXHJcbiAgICAgIG15QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IG51bSxcclxuICAgICAgICBuYW1hOiBuYW1hcHJvZHVrLFxyXG4gICAgICAgIGdhbWJhcjogZ2FtYmFyLFxyXG4gICAgICAgIGhhcmdhOiBoYXJnYSxcclxuICAgICAgICBzdG9rOiBzdG9rLFxyXG4gICAgICAgIGthdHM6IGthc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShlLCBlICsgdGhpcy5zdGF0ZS5wZXJQYWdlKTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbGctNCBmZWF0dXJlQ29sIG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0hvbGRlciBwb3NpdGlvbi1yZWxhdGl2ZSB3LTEwMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2EuZ2FtYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3YXgtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YS5uYW1hcHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTUgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgZC1ibG9jayBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWsvW2lkXS9bcHJvZHVjdF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcHJvZHVrLyR7YS5pZH0vJHthLm5hbWEucmVwbGFjZSgvXFxzL2csXCItXCIpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+IHt0cnVuY2F0ZShhLm5hbWEpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZSBkLWJsb2NrIGZ3RWJvbGRcIj57YS5oYXJnYX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImhvdE9mZmVyIGdyZWVuIGZ3RWJvbGQgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBwb3NpdGlvbi1hYnNvbHV0ZSBkLWJsb2NrIG1sLThcIj5TYWxlPC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICAgIHByb2R1Y3RkYXRhOiBteUFycmF5LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUGFnZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUGFnZSA9IGUuc2VsZWN0ZWQ7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3RlZFBhZ2UgKiB0aGlzLnN0YXRlLnBlclBhZ2U7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudFBhZ2U6IHNlbGVjdGVkUGFnZSxcclxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVjZWl2ZWREYXRhKG9mZnNldCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICBjb25zdCBjc3NTdHJpbmcgPSBgXHJcbiAgICAuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XHJcbiAgICAgICAgICAub3Zlcmx7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xyXG4gICAgICAgICAgfVxyXG4ubWFpbi1jb250ZW50LXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5pbWctZXJvcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1gO1xyXG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSwgbmFtZWthdCwgYWRhIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IG1pbmlmeUNzc1N0cmluZyhjc3NTdHJpbmcpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICA8TmF2IC8+XHJcbiA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWhlYWR9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc31cclxuICAgICAgY2Fub25pY2FsPXt0aGlzLnByb3BzLmxpbmtueWF9XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogdGhpcy5wcm9wcy5saW5rbnlhLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlaGVhZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXMsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzE1LFxyXG4gICAgICAgICAgICBhbHQ6IHRoaXMucHJvcHMuY2F0ZWdvcnksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcclxuICAgICAgfX1cclxuICAgIC8+XHJcblxyXG5cclxuPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9CYW5uZXJIb2xkZXIgZC1mbGV4IHctMTAwIGJnQ292ZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7dGhpcy5wcm9wcy5nYW1iYXJueWF9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgY292ZXJgLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgY2VudGVyYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LCAuOCknfX0+PC9kaXY+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcHQtbGctMjMgcHQtbWQtMTUgcHQtc20tMTAgcHQtNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRpbmdJViBmd0Vib2xkIHBsYXlmYWlyIG1iLTRcIj4ge3RoaXMuc3RhdGUubmFtZWthdC5yZXBsYWNlKC9cXC0vZywgXCIgXCIpfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBicmVhZENydW1icyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+QmVyYW5kYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtci0yXCI+LzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5LYXRlZ29yaTwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1wYWdlLXdyYXBwZXIgcHRiLS04MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWRhID09PSBcIm5vXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibm9uXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1lcm9yIGljb24gaWNvbi1wbGFudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCZWx1bSBhZGEgcHJvZHVrIGRpIGthdGVnb3JpIGluaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2RcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3RoaXMuc3RhdGUucGFnZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdlcyBwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9