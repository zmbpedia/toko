webpackHotUpdate_N_E("pages/produk",{

/***/ "./node_modules/minify-css-string/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/minify-css-string/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (css) {
  return css.replace(/\n/g, '').replace(/\s\s+/g, ' ');
};

/***/ }),

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! minify-css-string */ "./node_modules/minify-css-string/dist/index.js");
/* harmony import */ var minify_css_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(minify_css_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");









var _jsxFileName = "D:\\zmb\\pages\\produk.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

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
          stok: stok
        });
      }

      var slice = myArray.slice(e, e + _this.state.perPage);
      var postData = slice.map(function (a) {
        return __jsx("div", {
          className: "col-12 col-sm-6 col-lg-4 featureCol mb-7",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "border",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 10
          }
        }, __jsx("div", {
          className: "imgHolder position-relative w-100 overflow-hidden",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
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
            lineNumber: 177,
            columnNumber: 11
          }
        })), __jsx("div", {
          className: "text-center py-5 px-4",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 11
          }
        }, __jsx("span", {
          className: "title d-block mb-2",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 12
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          href: "/produk/[id]/[product]",
          as: "/produk/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 12
          }
        }, __jsx("a", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 23
          }
        }, " ", truncate(a.nama)))), __jsx("span", {
          className: "price d-block fwEbold",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 12
          }
        }, a.harga))));
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

        if (on === "true") {
          stok = "sale";
        } else {
          stok = "out of stock";
        }

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
          stok: stok
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
              lineNumber: 84,
              columnNumber: 9
            }
          }, __jsx("div", {
            className: "border",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 10
            }
          }, __jsx("div", {
            className: "imgHolder position-relative w-100 overflow-hidden",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
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
              lineNumber: 87,
              columnNumber: 11
            }
          })), __jsx("div", {
            className: "text-center py-5 px-4",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 11
            }
          }, __jsx("span", {
            className: "title d-block mb-2",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 12
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
            href: "/produk/[id]/[product]",
            as: "/produk/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 12
            }
          }, __jsx("a", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 23
            }
          }, " ", truncate(a.nama)))), __jsx("span", {
            className: "price d-block fwEbold",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 12
            }
          }, a.harga))));
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
      var currentPage = this.state.currentPage;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 2
        }
      }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_16__["NextSeo"], {
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
          lineNumber: 220,
          columnNumber: 2
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3064232136",
        __self: this
      }, ".border.jsx-3064232136{border:1px solid #dee2e6!important;}.overl.jsx-3064232136{width:100%;height:100%;position:absolute;background:rgba(255,255,255,.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx6bWJcXHBhZ2VzXFxwcm9kdWsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOE9hLEFBRWlELEFBRS9CLFdBQ0QsWUFDTSxZQUoyQixNQUtaLGdDQUNoQyIsImZpbGUiOiJEOlxcem1iXFxwYWdlc1xccHJvZHVrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1pbmlmeUNzc1N0cmluZyB9IGZyb20gXCJtaW5pZnktY3NzLXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIpIHtcclxuXHRyZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiIDogc3RyO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1ayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlSW5kZXg6IDAsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBnbTogXCJcIixcclxuICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICBwZXJQYWdlOiAzLFxyXG4gICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVBhZ2VDbGljayA9IHRoaXMuaGFuZGxlUGFnZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9hcGkvY2F0YWxvZ2RhdGFcIik7XHJcblx0XHRjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdCAgIGxldCBnYW1iYXJueWEgPScnO1xyXG5cdFx0bGV0IGFsdGdhbSA9ICcnO1xyXG4gICAgICBpZihzaG93LmRhdGEubGVuZ3RoKXtcclxuICAgICAgZ2FtYmFybnlhID0gYXdhaXQgc2hvdy5vZ2ltZzsgXHJcbiAgICAgICAgYWx0Z2FtID0gYXdhaXQgc2hvdy5hbHQ7IFxyXG4gICAgfVxyXG5cdCAgIHJldHVybiB7IHNob3csIGdhbWJhcm55YSwgYWx0Z2FtIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0ICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdFwiXTtcclxuICAgICAgdmFyIHN0b2s7XHJcblxyXG4gICAgICBpZiAob24gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgc3RvayA9IFwic2FsZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB1bHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgdmFyIG9uZSA9IHVsci5zcGxpdChcIi9cIilbNF07XHJcbiAgICAgIHZhciB0d28gPSB1bHIuc3BsaXQoXCIvXCIpWzVdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBuYW1la2F0OiBcInptYnBlZGlhYm9nb3IgLSBLYXRhbG9nIHByb2R1a1wiLFxyXG4gICAgICAgIGFkYTogXCJ5ZXNcIixcclxuICAgICAgICB0aXRsZXM6IFwiem1icGVkaWFib2dvciAtIEthdGFsb2cgcHJvZHVrXCIsXHJcbiAgICAgICAgdXJsczogXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvcHJvZHVjdFwiLFxyXG4gICAgICAgIGdhbTogc2gsXHJcbiAgICAgIH0pO1xyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG15QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCxcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCArIHRoaXMuc3RhdGUucGVyUGFnZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGZlYXR1cmVDb2wgbWItN1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyIHBvc2l0aW9uLXJlbGF0aXZlIHctMTAwIG92ZXJmbG93LWhpZGRlblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YS5nYW1iYXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzAwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cIndheC1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXthLm5hbWFwcm9kdWt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNSBweC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkLWJsb2NrIG1iLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1ay9baWRdL1twcm9kdWN0XVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wcm9kdWsvJHthLmlkfS8ke2EubmFtYS5yZXBsYWNlKC9cXHMvZyxcIi1cIil9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge3RydW5jYXRlKGEubmFtYSl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgZndFYm9sZFwiPnthLmhhcmdhfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPHNwYW4gY2xhc3NOYW1lPVwiaG90T2ZmZXIgZ3JlZW4gZndFYm9sZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBvc2l0aW9uLWFic29sdXRlIGQtYmxvY2sgbWwtOFwiPlNhbGU8L3NwYW4+Ki99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgICBwb3N0RGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRhOiBcIm5vXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQYWdlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQYWdlID0gZS5zZWxlY3RlZDtcclxuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdGVkUGFnZSAqIHRoaXMuc3RhdGUucGVyUGFnZTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudFBhZ2U6IHNlbGVjdGVkUGFnZSxcclxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVjZWl2ZWREYXRhKG9mZnNldCk7XHJcbiAgfTtcclxuXHJcbiAgcmVjZWl2ZWREYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdmFyIG15QXJyYXkgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0XCJdO1xyXG4gICAgICB2YXIgc3RvaztcclxuXHJcbiAgICAgIGlmIChvbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBzdG9rID0gXCJzYWxlXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvayA9IFwib3V0IG9mIHN0b2NrXCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgb25lID0gdWxyLnNwbGl0KFwiL1wiKVs0XTtcclxuICAgICAgdmFyIHR3byA9IHVsci5zcGxpdChcIi9cIilbNV07XHJcblxyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShlLCBlICsgdGhpcy5zdGF0ZS5wZXJQYWdlKTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthLmdhbWJhcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMDBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwid2F4LWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2EubmFtYXByb2R1a31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1ay8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG4gICAgXHQgICApKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwobXlBcnJheS5sZW5ndGggLyB0aGlzLnN0YXRlLnBlclBhZ2UpLFxyXG4gICAgICBwb3N0RGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cclxuPD5cclxuXHQ8TGF5b3V0PlxyXG4gPE5leHRTZW9cclxuICAgICAgdGl0bGU9XCJ6bWJwZWRpYWJvZ29yIC0gS2F0YWxvZyBwcm9kdWtcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIlRva28gYW5la2EgbWFjYW0gdGFuYW1hbiBoaWFzXCJcclxuICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL3Byb2R1a1wiXHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvcHJvZHVrXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiem1icGVkaWFib2dvciAtIEthdGFsb2cgcHJvZHVrXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG9rbyBhbmVrYSBtYWNhbSB0YW5hbWFuIGhpYXNcIixcclxuICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnByb3BzLmdhbWJhcm55YSxcclxuICAgICAgICAgICB3aWR0aDogNjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMxNSxcclxuICAgICAgICAgICAgYWx0OiB0aGlzLnByb3BzLmFsdGdhbSxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNpdGVfbmFtZTogJ3ptYnBlZGlhYm9nb3InLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuXHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XHJcblx0XHRcdFx0XHQub3Zlcmx7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2Plx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+S2F0YWxvZzwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBicmVhZENydW1icyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9cIj5CZXJhbmRhPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1yLTJcIj4vPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2ZVwiPkthdGFsb2c8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdFxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwidHdvQ29sdW1ucyBjb250YWluZXIgcHQtbGctMjMgcGItbGctMjAgcHQtbWQtMTYgcGItbWQtNCBwdC0xMCBwYi00XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbGctMTIgb3JkZXItbGctM1wiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxhcnRpY2xlIGlkPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHJcblx0XHRcdFx0e3RoaXMuc3RhdGUucG9zdERhdGF9XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LTMgbWItbGctMCBtYi1tZC02IG1iLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qPHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBwYWdpbmF0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWVuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjE8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj4yPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPi4uLjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD4qL31cclxuXHJcbiA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3RoaXMuc3RhdGUucGFnZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdlcyBwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0PC9MYXlvdXQ+XHJcblxyXG48Lz5cclxuXHJcblx0XHQpO1xyXG5cdH1cclxufSJdfQ== */\n/*@ sourceURL=D:\\\\zmb\\\\pages\\\\produk.js */"), __jsx("section", {
        style: {
          background: "url(".concat(this.props.gambarnya, ")"),
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        className: "jsx-3064232136" + " " + "introBannerHolder d-flex w-100 bgCover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 1
        }
      }, __jsx("div", {
        style: {
          background: 'rgba(255,255,255, .8)'
        },
        className: "jsx-3064232136" + " " + "overl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 15
        }
      }), __jsx("div", {
        "class": "container",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 5
        }
      }, __jsx("div", {
        "class": "row",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 6
        }
      }, __jsx("div", {
        "class": "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 7
        }
      }, __jsx("h1", {
        "class": "headingIV fwEbold playfair mb-4",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 8
        }
      }, "Katalog"), __jsx("ul", {
        "class": "list-unstyled breadCrumbs d-flex justify-content-center",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 8
        }
      }, __jsx("li", {
        "class": "mr-2",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 9
        }
      }, __jsx("a", {
        href: "https://zmbpediabogor.store/",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 17
        }
      }, "Beranda")), __jsx("li", {
        "class": "mr-2",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 9
        }
      }, "/"), __jsx("li", {
        "class": "active",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 9
        }
      }, "Katalog")))))), __jsx("div", {
        "class": "twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 2
        }
      }, __jsx("div", {
        "class": "row",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 5
        }
      }, __jsx("div", {
        "class": "col-12 col-lg-12 order-lg-3",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 6
        }
      }, __jsx("article", {
        id: "content",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 7
        }
      }, __jsx("div", {
        "class": "row",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 8
        }
      }, this.state.postData, __jsx("div", {
        "class": "col-12 pt-3 mb-lg-0 mb-md-6 mb-3",
        className: "jsx-3064232136",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 9
        }
      }, __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
          lineNumber: 296,
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("https://zmbpediabogor.store/api/catalogdata");

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
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pbmlmeS1jc3Mtc3RyaW5nL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1ay5qcyJdLCJuYW1lcyI6WyJ0cnVuY2F0ZSIsInN0ciIsImxlbmd0aCIsInN1YnN0cmluZyIsIlByb2R1ayIsImUiLCJzZWxlY3RlZFBhZ2UiLCJzZWxlY3RlZCIsIm9mZnNldCIsInN0YXRlIiwicGVyUGFnZSIsInNldFN0YXRlIiwiY3VycmVudFBhZ2UiLCJyZWNlaXZlZERhdGEiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsVG8iLCJteUFycmF5IiwiaSIsInByb3BzIiwic2hvdyIsImRhdGEiLCJ2YWx1ZSIsInZhbHVlcyIsIm51bSIsIm5hbWFwcm9kdWsiLCJoYXJnYSIsImdhbWJhciIsInNoIiwib24iLCJrYXN0Iiwic3RvayIsInVsciIsImxvY2F0aW9uIiwiaHJlZiIsIm9uZSIsInNwbGl0IiwidHdvIiwicHVzaCIsImlkIiwibmFtYSIsInNsaWNlIiwicG9zdERhdGEiLCJtYXAiLCJhIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJyZXBsYWNlIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJpbWFnZUluZGV4IiwiZ20iLCJoYW5kbGVQYWdlQ2xpY2siLCJiaW5kIiwibmFtZWthdCIsImFkYSIsInRpdGxlcyIsInVybHMiLCJnYW0iLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiZ2FtYmFybnlhIiwiYWx0IiwiYWx0Z2FtIiwic2l0ZV9uYW1lIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwib2dpbWciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7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Qyx5QixHQUFXLEU7QUFDZEUsc0IsR0FBUyxFOztxQkFDTi9DLElBQUksQ0FBQ0MsSUFBTCxDQUFVcEIsTTs7Ozs7O3VCQUNLbUIsSUFBSSxDQUFDdUQsSzs7O0FBQXZCVix5Qjs7dUJBQ2lCN0MsSUFBSSxDQUFDOEMsRzs7O0FBQXBCQyxzQjs7O2lEQUVHO0FBQUUvQyxzQkFBSSxFQUFKQSxJQUFGO0FBQVE2QywyQkFBUyxFQUFUQSxTQUFSO0FBQW1CRSx3QkFBTSxFQUFOQTtBQUFuQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRCeUJTLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVrLjEwODhkM2NlMTQ3YzFkZDM3OGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgcmV0dXJuIGNzcy5yZXBsYWNlKC9cXG4vZywgJycpLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKTtcbn07IiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1pbmlmeUNzc1N0cmluZyB9IGZyb20gXCJtaW5pZnktY3NzLXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIpIHtcclxuXHRyZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiIDogc3RyO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1ayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlSW5kZXg6IDAsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBnbTogXCJcIixcclxuICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICBwZXJQYWdlOiAzLFxyXG4gICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVBhZ2VDbGljayA9IHRoaXMuaGFuZGxlUGFnZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9hcGkvY2F0YWxvZ2RhdGFcIik7XHJcblx0XHRjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdCAgIGxldCBnYW1iYXJueWEgPScnO1xyXG5cdFx0bGV0IGFsdGdhbSA9ICcnO1xyXG4gICAgICBpZihzaG93LmRhdGEubGVuZ3RoKXtcclxuICAgICAgZ2FtYmFybnlhID0gYXdhaXQgc2hvdy5vZ2ltZzsgXHJcbiAgICAgICAgYWx0Z2FtID0gYXdhaXQgc2hvdy5hbHQ7IFxyXG4gICAgfVxyXG5cdCAgIHJldHVybiB7IHNob3csIGdhbWJhcm55YSwgYWx0Z2FtIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0ICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdFwiXTtcclxuICAgICAgdmFyIHN0b2s7XHJcblxyXG4gICAgICBpZiAob24gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgc3RvayA9IFwic2FsZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB1bHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgdmFyIG9uZSA9IHVsci5zcGxpdChcIi9cIilbNF07XHJcbiAgICAgIHZhciB0d28gPSB1bHIuc3BsaXQoXCIvXCIpWzVdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBuYW1la2F0OiBcInptYnBlZGlhYm9nb3IgLSBLYXRhbG9nIHByb2R1a1wiLFxyXG4gICAgICAgIGFkYTogXCJ5ZXNcIixcclxuICAgICAgICB0aXRsZXM6IFwiem1icGVkaWFib2dvciAtIEthdGFsb2cgcHJvZHVrXCIsXHJcbiAgICAgICAgdXJsczogXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvcHJvZHVjdFwiLFxyXG4gICAgICAgIGdhbTogc2gsXHJcbiAgICAgIH0pO1xyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG15QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCxcclxuICAgICAgICB0aGlzLnN0YXRlLm9mZnNldCArIHRoaXMuc3RhdGUucGVyUGFnZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGZlYXR1cmVDb2wgbWItN1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyIHBvc2l0aW9uLXJlbGF0aXZlIHctMTAwIG92ZXJmbG93LWhpZGRlblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YS5nYW1iYXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzAwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cIndheC1pbWdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXthLm5hbWFwcm9kdWt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNSBweC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkLWJsb2NrIG1iLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1ay9baWRdL1twcm9kdWN0XVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wcm9kdWsvJHthLmlkfS8ke2EubmFtYS5yZXBsYWNlKC9cXHMvZyxcIi1cIil9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge3RydW5jYXRlKGEubmFtYSl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgZndFYm9sZFwiPnthLmhhcmdhfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPHNwYW4gY2xhc3NOYW1lPVwiaG90T2ZmZXIgZ3JlZW4gZndFYm9sZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBvc2l0aW9uLWFic29sdXRlIGQtYmxvY2sgbWwtOFwiPlNhbGU8L3NwYW4+Ki99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKG15QXJyYXkubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wZXJQYWdlKSxcclxuICAgICAgICBwb3N0RGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRhOiBcIm5vXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQYWdlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQYWdlID0gZS5zZWxlY3RlZDtcclxuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdGVkUGFnZSAqIHRoaXMuc3RhdGUucGVyUGFnZTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudFBhZ2U6IHNlbGVjdGVkUGFnZSxcclxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVjZWl2ZWREYXRhKG9mZnNldCk7XHJcbiAgfTtcclxuXHJcbiAgcmVjZWl2ZWREYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdmFyIG15QXJyYXkgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0XCJdO1xyXG4gICAgICB2YXIgc3RvaztcclxuXHJcbiAgICAgIGlmIChvbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBzdG9rID0gXCJzYWxlXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvayA9IFwib3V0IG9mIHN0b2NrXCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgb25lID0gdWxyLnNwbGl0KFwiL1wiKVs0XTtcclxuICAgICAgdmFyIHR3byA9IHVsci5zcGxpdChcIi9cIilbNV07XHJcblxyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuIGNvbnN0IHNsaWNlID0gbXlBcnJheS5zbGljZShlLCBlICsgdGhpcy5zdGF0ZS5wZXJQYWdlKTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthLmdhbWJhcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMDBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwid2F4LWltZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2EubmFtYXByb2R1a31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1ay8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG4gICAgXHQgICApKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwobXlBcnJheS5sZW5ndGggLyB0aGlzLnN0YXRlLnBlclBhZ2UpLFxyXG4gICAgICBwb3N0RGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cclxuPD5cclxuXHQ8TGF5b3V0PlxyXG4gPE5leHRTZW9cclxuICAgICAgdGl0bGU9XCJ6bWJwZWRpYWJvZ29yIC0gS2F0YWxvZyBwcm9kdWtcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIlRva28gYW5la2EgbWFjYW0gdGFuYW1hbiBoaWFzXCJcclxuICAgICAgY2Fub25pY2FsPVwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL3Byb2R1a1wiXHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvcHJvZHVrXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiem1icGVkaWFib2dvciAtIEthdGFsb2cgcHJvZHVrXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG9rbyBhbmVrYSBtYWNhbSB0YW5hbWFuIGhpYXNcIixcclxuICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnByb3BzLmdhbWJhcm55YSxcclxuICAgICAgICAgICB3aWR0aDogNjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMxNSxcclxuICAgICAgICAgICAgYWx0OiB0aGlzLnByb3BzLmFsdGdhbSxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNpdGVfbmFtZTogJ3ptYnBlZGlhYm9nb3InLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuXHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XHJcblx0XHRcdFx0XHQub3Zlcmx7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2Plx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+S2F0YWxvZzwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBicmVhZENydW1icyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9cIj5CZXJhbmRhPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1yLTJcIj4vPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cImFjdGl2ZVwiPkthdGFsb2c8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdFxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwidHdvQ29sdW1ucyBjb250YWluZXIgcHQtbGctMjMgcGItbGctMjAgcHQtbWQtMTYgcGItbWQtNCBwdC0xMCBwYi00XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbGctMTIgb3JkZXItbGctM1wiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxhcnRpY2xlIGlkPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHJcblx0XHRcdFx0e3RoaXMuc3RhdGUucG9zdERhdGF9XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LTMgbWItbGctMCBtYi1tZC02IG1iLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qPHVsIGNsYXNzPVwibGlzdC11bnN0eWxlZCBwYWdpbmF0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWVuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjE8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj4yPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPi4uLjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD4qL31cclxuXHJcbiA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3RoaXMuc3RhdGUucGFnZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdlcyBwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0PC9MYXlvdXQ+XHJcblxyXG48Lz5cclxuXHJcblx0XHQpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=