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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "D:\\zmb\\pages\\kategori\\[id]\\[category].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

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
            lineNumber: 167,
            columnNumber: 5
          }
        }, __jsx("div", {
          className: "border",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 19
          }
        }, __jsx("div", {
          className: "imgHolder position-relative w-100 overflow-hidden",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
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
            lineNumber: 170,
            columnNumber: 21
          }
        })), __jsx("div", {
          className: "text-center py-5 px-4",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }
        }, __jsx("span", {
          className: "title d-block mb-2",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 23
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
          href: "/produkdetail/[id]/[product]",
          as: "/produkdetail/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 23
          }
        }, __jsx("a", {
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 23
          }
        }, " ", truncate(a.nama)))), __jsx("span", {
          className: "price d-block fwEbold",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
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
              lineNumber: 89,
              columnNumber: 7
            }
          }, __jsx("div", {
            className: "border",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 19
            }
          }, __jsx("div", {
            className: "imgHolder position-relative w-100 overflow-hidden",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91,
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
              lineNumber: 92,
              columnNumber: 21
            }
          })), __jsx("div", {
            className: "text-center py-5 px-4",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 21
            }
          }, __jsx("span", {
            className: "title d-block mb-2",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 23
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
            href: "/produkdetail/[id]/[product]",
            as: "/produkdetail/".concat(a.id, "/").concat(a.nama.replace(/\s/g, "-")),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 23
            }
          }, __jsx("a", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 23
            }
          }, " ", truncate(a.nama)))), __jsx("span", {
            className: "price d-block fwEbold",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
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
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          namekat = _this$state.namekat,
          ada = _this$state.ada;
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 7
        }
      }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_14__["NextSeo"], {
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
          lineNumber: 224,
          columnNumber: 2
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2097879180",
        __self: this
      }, ".border.jsx-2097879180{border:1px solid #dee2e6!important;}.overl.jsx-2097879180{width:100%;height:100%;position:absolute;background:rgba(255,255,255,.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx6bWJcXHBhZ2VzXFxrYXRlZ29yaVxcW2lkXVxcW2NhdGVnb3J5XS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUGMsQUFFc0QsQUFFOUIsV0FDUCxZQUNNLFlBSmdDLE1BS2pCLGdDQUMzQiIsImZpbGUiOiJEOlxcem1iXFxwYWdlc1xca2F0ZWdvcmlcXFtpZF1cXFtjYXRlZ29yeV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIpIHtcclxuICByZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAxMDApICsgXCIuLi5cIiA6IHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlSW5kZXg6IDAsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHBlclBhZ2U6IDYsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICBuYW1la2F0OiBcIlwiLFxyXG4gICAgICBhZGE6IFwiXCIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVQYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZVBhZ2VDbGljaztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBjYXRlZ29yeSB9ID0gcXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9hcGkva2F0ZWdvcnlwcm9kdWN0L1wiICsgaWQgK1wiL1wiK2NhdGVnb3J5KTtcclxuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBsZXQgZ2FtYmFybnlhID0nJztcclxuICAgICAgbGV0IGxpbmtueWEgPScnO1xyXG4gICAgICBsZXQgdGl0bGVoZWFkPSdCZWx1bSBhZGEgcHJvZHVrIGRpIGthdGVnb3JpIGluaSdcclxuICAgICAgbGV0IGRlcyA9ICcnXHJcbiAgICAgIGlmKHNob3cuZGF0YS5sZW5ndGgpe1xyXG4gIFxyXG4gICAgICB0aXRsZWhlYWQgPSAnem1icGVkaWFib2dvciB8ICcrIGF3YWl0IHNob3cubmFtYXRpdGxlICsgJyAtIGthdGVnb3JpIHByb2R1aydcclxuICAgICAgZGVzID0gICdLb2xla3NpIFRhbmFtYW4gdGVyYmFpayBrYW1pIGRhcmkga2F0ZWdvcmkgJyArIGF3YWl0IHNob3cubmFtYXRpdGxlXHJcbiAgICAgIGdhbWJhcm55YSA9IGF3YWl0IHNob3cuZGF0YVswXS5vZ2dhbWJhcjtcclxuICAgICAgbGlua255YSA9IGF3YWl0IHNob3cuZGF0YVswXS5jcm9uaWNhbDtcclxuICAgIFxyXG4gICAgIH1cclxuICAgIHJldHVybiB7IHNob3csIGNhdGVnb3J5LCBpZCwgZ2FtYmFybnlhLCBsaW5rbnlhLCBkZXMsIHRpdGxlaGVhZCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB2YXIgbXlBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0ZWdvcmlcIl07XHJcbiAgICAgIHZhciBzdG9rO1xyXG5cclxuICAgICAgaWYgKG9uID09PSBcInRydWVcIikge1xyXG4gICAgICAgIHN0b2sgPSBcInNhbGVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbmFtZWthdDogdGhpcy5wcm9wcy5jYXRlZ29yeSxcclxuICAgICAgICBhZGE6IFwieWVzXCJcclxuICAgICAgfSk7XHJcbiAgICAgIG15QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IG51bSxcclxuICAgICAgICBuYW1hOiBuYW1hcHJvZHVrLFxyXG4gICAgICAgIGdhbWJhcjogZ2FtYmFyLFxyXG4gICAgICAgIGhhcmdhOiBoYXJnYSxcclxuICAgICAgICBzdG9rOiBzdG9rLFxyXG4gICAgICAgIGthdHM6IGthc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChteUFycmF5Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBzbGljZSA9IG15QXJyYXkuc2xpY2UoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vZmZzZXQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vZmZzZXQgKyB0aGlzLnN0YXRlLnBlclBhZ2VcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSBzbGljZS5tYXAoKGEpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthLmdhbWJhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2F4LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtYXByb2R1a31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrZGV0YWlsL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1a2RldGFpbC8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgICAgcG9zdERhdGEsXHJcbiAgICAgICAgcHJvZHVjdGRhdGE6IG15QXJyYXksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkYTogXCJub1wiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZWREYXRhID0gKGUpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdGVnb3JpXCJdO1xyXG4gICAgICB2YXIgc3RvaztcclxuXHJcbiAgICAgIGlmIChvbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBzdG9rID0gXCJzYWxlXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvayA9IFwib3V0IG9mIHN0b2NrXCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgb25lID0gdWxyLnNwbGl0KFwiL1wiKVs0XTtcclxuICAgICAgdmFyIHR3byA9IHVsci5zcGxpdChcIi9cIilbNV07XHJcblxyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgICBrYXRzOiBrYXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGljZSA9IG15QXJyYXkuc2xpY2UoZSwgZSArIHRoaXMuc3RhdGUucGVyUGFnZSk7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthLmdhbWJhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2F4LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtYXByb2R1a31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrZGV0YWlsL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1a2RldGFpbC8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgIHBvc3REYXRhLFxyXG4gICAgICBwcm9kdWN0ZGF0YTogbXlBcnJheSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2VDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFBhZ2UgPSBlLnNlbGVjdGVkO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0ZWRQYWdlICogdGhpcy5zdGF0ZS5wZXJQYWdlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRQYWdlOiBzZWxlY3RlZFBhZ2UsXHJcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlY2VpdmVkRGF0YShvZmZzZXQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBuYW1la2F0LCBhZGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgXHJcbiA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWhlYWR9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc31cclxuICAgICAgY2Fub25pY2FsPXt0aGlzLnByb3BzLmxpbmtueWF9XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogdGhpcy5wcm9wcy5saW5rbnlhLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlaGVhZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXMsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzE1LFxyXG4gICAgICAgICAgICBhbHQ6IHRoaXMucHJvcHMuY2F0ZWdvcnksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcclxuICAgICAgfX1cclxuICAgIC8+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5ib3JkZXJ7ICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudH1cclxuICAgICAgICAgIC5vdmVybHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+IHt0aGlzLnN0YXRlLm5hbWVrYXQucmVwbGFjZSgvXFwtL2csIFwiIFwiKX08L2gxPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgYnJlYWRDcnVtYnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48YSBocmVmPVwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL1wiPkJlcmFuZGE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj4vPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkthdGVnb3JpPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXBhZ2Utd3JhcHBlciBwdGItLTgwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthZGEgPT09IFwibm9cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJub25cIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWVyb3IgaWNvbiBpY29uLXBsYW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJlbHVtIGFkYSBwcm9kdWsgZGkga2F0ZWdvcmkgaW5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG5leHRMYWJlbD17XCJuZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17dGhpcy5zdGF0ZS5wYWdlQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=D:\\\\zmb\\\\pages\\\\kategori\\\\[id]\\\\[category].js */"), __jsx("section", {
        style: {
          background: "url(".concat(this.props.gambarnya, ")"),
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        className: "jsx-2097879180" + " " + "introBannerHolder d-flex w-100 bgCover",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 1
        }
      }, __jsx("div", {
        style: {
          background: 'rgba(255,255,255, .8)'
        },
        className: "jsx-2097879180" + " " + "overl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 29
        }
      }), __jsx("div", {
        "class": "container",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 9
        }
      }, __jsx("div", {
        "class": "row",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }
      }, __jsx("div", {
        "class": "col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 13
        }
      }, __jsx("h1", {
        "class": "headingIV fwEbold playfair mb-4",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 15
        }
      }, " ", this.state.namekat.replace(/\-/g, " ")), __jsx("ul", {
        "class": "list-unstyled breadCrumbs d-flex justify-content-center",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 15
        }
      }, __jsx("li", {
        "class": "mr-2",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://zmbpediabogor.store/",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 34
        }
      }, "Beranda")), __jsx("li", {
        "class": "mr-2",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 17
        }
      }, "/"), __jsx("li", {
        "class": "active",
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 17
        }
      }, "Kategori")))))), __jsx("div", {
        className: "jsx-2097879180" + " " + "main-content-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2097879180" + " " + "shop-page-wrapper ptb--80",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2097879180" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2097879180" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "jsx-2097879180" + " " + "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-2097879180" + " " + "shop-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 19
        }
      }, ada === "no" ? __jsx("div", {
        id: "non",
        className: "jsx-2097879180" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "jsx-2097879180" + " " + "img-eror icon icon-plant",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 18
        }
      }), __jsx("h1", {
        style: {
          textAlign: "center",
          paddingTop: "100px",
          width: "100%",
          paddingBottom: "100px"
        },
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 25
        }
      }, "Belum ada produk di kategori ini")) : __jsx("div", {
        className: "jsx-2097879180",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "prod",
        className: "jsx-2097879180" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 23
        }
      }, this.state.postData), __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
          lineNumber: 301,
          columnNumber: 21
        }
      })))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, id, category, res, show, gambarnya, linknya, titlehead, des;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                id = query.id, category = query.category;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("https://zmbpediabogor.store/api/kategoryproduct/" + id + "/" + category);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                show = _context.sent;
                gambarnya = '';
                linknya = '';
                titlehead = 'Belum ada produk di kategori ini';
                des = '';

                if (!show.data.length) {
                  _context.next = 28;
                  break;
                }

                _context.next = 15;
                return show.namatitle;

              case 15:
                _context.t0 = _context.sent;
                _context.t1 = 'zmbpediabogor | ' + _context.t0;
                titlehead = _context.t1 + ' - kategori produk';
                _context.next = 20;
                return show.namatitle;

              case 20:
                _context.t2 = _context.sent;
                des = 'Koleksi Tanaman terbaik kami dari kategori ' + _context.t2;
                _context.next = 24;
                return show.data[0].oggambar;

              case 24:
                gambarnya = _context.sent;
                _context.next = 27;
                return show.data[0].cronical;

              case 27:
                linknya = _context.sent;

              case 28:
                return _context.abrupt("return", {
                  show: show,
                  category: category,
                  id: id,
                  gambarnya: gambarnya,
                  linknya: linknya,
                  des: des,
                  titlehead: titlehead
                });

              case 29:
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2F0ZWdvcmkvL1tjYXRlZ29yeV0uanMiXSwibmFtZXMiOlsidHJ1bmNhdGUiLCJzdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJDYXRlZ29yeSIsImUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm15QXJyYXkiLCJpIiwicHJvcHMiLCJzaG93IiwiZGF0YSIsInZhbHVlIiwidmFsdWVzIiwibnVtIiwibmFtYXByb2R1ayIsImhhcmdhIiwiZ2FtYmFyIiwic2giLCJvbiIsImthc3QiLCJzdG9rIiwidWxyIiwibG9jYXRpb24iLCJocmVmIiwib25lIiwic3BsaXQiLCJ0d28iLCJwdXNoIiwiaWQiLCJuYW1hIiwia2F0cyIsInNsaWNlIiwic3RhdGUiLCJwZXJQYWdlIiwicG9zdERhdGEiLCJtYXAiLCJhIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJyZXBsYWNlIiwic2V0U3RhdGUiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInByb2R1Y3RkYXRhIiwic2VsZWN0ZWRQYWdlIiwic2VsZWN0ZWQiLCJvZmZzZXQiLCJjdXJyZW50UGFnZSIsInJlY2VpdmVkRGF0YSIsImltYWdlSW5kZXgiLCJuYW1la2F0IiwiYWRhIiwiaGFuZGxlUGFnZUNsaWNrIiwiY2F0ZWdvcnkiLCJ0aXRsZWhlYWQiLCJkZXMiLCJsaW5rbnlhIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImdhbWJhcm55YSIsImFsdCIsInNpdGVfbmFtZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicXVlcnkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJuYW1hdGl0bGUiLCJvZ2dhbWJhciIsImNyb25pY2FsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQ21FLFM7Ozs7QUFBbEVuQixtQixHQUFPLDZDOzt1QkFDV2hELElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsRUFBYW1FLFE7OztBQUEvQmQseUI7O3VCQUNnQnRELElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsRUFBYW9FLFE7OztBQUE3QnBCLHVCOzs7aURBR0s7QUFBRWpELHNCQUFJLEVBQUpBLElBQUY7QUFBUThDLDBCQUFRLEVBQVJBLFFBQVI7QUFBa0IzQixvQkFBRSxFQUFGQSxFQUFsQjtBQUFzQm1DLDJCQUFTLEVBQVRBLFNBQXRCO0FBQWlDTCx5QkFBTyxFQUFQQSxPQUFqQztBQUEwQ0QscUJBQUcsRUFBSEEsR0FBMUM7QUFBK0NELDJCQUFTLEVBQVRBO0FBQS9DLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEMyQnVCLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva2F0ZWdvcmkvW2lkXS9bY2F0ZWdvcnldLmY1MDUyZmU4NmRmZTQ4ZTY5NTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIpIHtcclxuICByZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAxMDApICsgXCIuLi5cIiA6IHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlSW5kZXg6IDAsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHBlclBhZ2U6IDYsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICBuYW1la2F0OiBcIlwiLFxyXG4gICAgICBhZGE6IFwiXCIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVQYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZVBhZ2VDbGljaztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBjYXRlZ29yeSB9ID0gcXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9hcGkva2F0ZWdvcnlwcm9kdWN0L1wiICsgaWQgK1wiL1wiK2NhdGVnb3J5KTtcclxuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBsZXQgZ2FtYmFybnlhID0nJztcclxuICAgICAgbGV0IGxpbmtueWEgPScnO1xyXG4gICAgICBsZXQgdGl0bGVoZWFkPSdCZWx1bSBhZGEgcHJvZHVrIGRpIGthdGVnb3JpIGluaSdcclxuICAgICAgbGV0IGRlcyA9ICcnXHJcbiAgICAgIGlmKHNob3cuZGF0YS5sZW5ndGgpe1xyXG4gIFxyXG4gICAgICB0aXRsZWhlYWQgPSAnem1icGVkaWFib2dvciB8ICcrIGF3YWl0IHNob3cubmFtYXRpdGxlICsgJyAtIGthdGVnb3JpIHByb2R1aydcclxuICAgICAgZGVzID0gICdLb2xla3NpIFRhbmFtYW4gdGVyYmFpayBrYW1pIGRhcmkga2F0ZWdvcmkgJyArIGF3YWl0IHNob3cubmFtYXRpdGxlXHJcbiAgICAgIGdhbWJhcm55YSA9IGF3YWl0IHNob3cuZGF0YVswXS5vZ2dhbWJhcjtcclxuICAgICAgbGlua255YSA9IGF3YWl0IHNob3cuZGF0YVswXS5jcm9uaWNhbDtcclxuICAgIFxyXG4gICAgIH1cclxuICAgIHJldHVybiB7IHNob3csIGNhdGVnb3J5LCBpZCwgZ2FtYmFybnlhLCBsaW5rbnlhLCBkZXMsIHRpdGxlaGVhZCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB2YXIgbXlBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0ZWdvcmlcIl07XHJcbiAgICAgIHZhciBzdG9rO1xyXG5cclxuICAgICAgaWYgKG9uID09PSBcInRydWVcIikge1xyXG4gICAgICAgIHN0b2sgPSBcInNhbGVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbmFtZWthdDogdGhpcy5wcm9wcy5jYXRlZ29yeSxcclxuICAgICAgICBhZGE6IFwieWVzXCJcclxuICAgICAgfSk7XHJcbiAgICAgIG15QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IG51bSxcclxuICAgICAgICBuYW1hOiBuYW1hcHJvZHVrLFxyXG4gICAgICAgIGdhbWJhcjogZ2FtYmFyLFxyXG4gICAgICAgIGhhcmdhOiBoYXJnYSxcclxuICAgICAgICBzdG9rOiBzdG9rLFxyXG4gICAgICAgIGthdHM6IGthc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChteUFycmF5Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBzbGljZSA9IG15QXJyYXkuc2xpY2UoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vZmZzZXQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vZmZzZXQgKyB0aGlzLnN0YXRlLnBlclBhZ2VcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSBzbGljZS5tYXAoKGEpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthLmdhbWJhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2F4LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtYXByb2R1a31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrZGV0YWlsL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1a2RldGFpbC8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgICAgcG9zdERhdGEsXHJcbiAgICAgICAgcHJvZHVjdGRhdGE6IG15QXJyYXksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkYTogXCJub1wiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZWREYXRhID0gKGUpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdGVnb3JpXCJdO1xyXG4gICAgICB2YXIgc3RvaztcclxuXHJcbiAgICAgIGlmIChvbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBzdG9rID0gXCJzYWxlXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvayA9IFwib3V0IG9mIHN0b2NrXCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgb25lID0gdWxyLnNwbGl0KFwiL1wiKVs0XTtcclxuICAgICAgdmFyIHR3byA9IHVsci5zcGxpdChcIi9cIilbNV07XHJcblxyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgICBrYXRzOiBrYXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGljZSA9IG15QXJyYXkuc2xpY2UoZSwgZSArIHRoaXMuc3RhdGUucGVyUGFnZSk7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthLmdhbWJhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2F4LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtYXByb2R1a31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrZGV0YWlsL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1a2RldGFpbC8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgIHBvc3REYXRhLFxyXG4gICAgICBwcm9kdWN0ZGF0YTogbXlBcnJheSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2VDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFBhZ2UgPSBlLnNlbGVjdGVkO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0ZWRQYWdlICogdGhpcy5zdGF0ZS5wZXJQYWdlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRQYWdlOiBzZWxlY3RlZFBhZ2UsXHJcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlY2VpdmVkRGF0YShvZmZzZXQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBuYW1la2F0LCBhZGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgXHJcbiA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWhlYWR9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc31cclxuICAgICAgY2Fub25pY2FsPXt0aGlzLnByb3BzLmxpbmtueWF9XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogdGhpcy5wcm9wcy5saW5rbnlhLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlaGVhZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXMsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzE1LFxyXG4gICAgICAgICAgICBhbHQ6IHRoaXMucHJvcHMuY2F0ZWdvcnksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcclxuICAgICAgfX1cclxuICAgIC8+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5ib3JkZXJ7ICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudH1cclxuICAgICAgICAgIC5vdmVybHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+IHt0aGlzLnN0YXRlLm5hbWVrYXQucmVwbGFjZSgvXFwtL2csIFwiIFwiKX08L2gxPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgYnJlYWRDcnVtYnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48YSBocmVmPVwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL1wiPkJlcmFuZGE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj4vPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkthdGVnb3JpPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXBhZ2Utd3JhcHBlciBwdGItLTgwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthZGEgPT09IFwibm9cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJub25cIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWVyb3IgaWNvbiBpY29uLXBsYW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJlbHVtIGFkYSBwcm9kdWsgZGkga2F0ZWdvcmkgaW5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG5leHRMYWJlbD17XCJuZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17dGhpcy5zdGF0ZS5wYWdlQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=