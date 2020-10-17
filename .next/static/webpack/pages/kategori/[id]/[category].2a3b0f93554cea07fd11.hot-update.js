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
      }, ".border.jsx-2097879180{border:1px solid #dee2e6!important;}.overl.jsx-2097879180{width:100%;height:100%;position:absolute;background:rgba(255,255,255,.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx6bWJcXHBhZ2VzXFxrYXRlZ29yaVxcW2lkXVxcW2NhdGVnb3J5XS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUGMsQUFFc0QsQUFFOUIsV0FDUCxZQUNNLFlBSmdDLE1BS2pCLGdDQUMzQiIsImZpbGUiOiJEOlxcem1iXFxwYWdlc1xca2F0ZWdvcmlcXFtpZF1cXFtjYXRlZ29yeV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIpIHtcclxuICByZXR1cm4gc3RyLmxlbmd0aCA+IDEwID8gc3RyLnN1YnN0cmluZygwLCAxMDApICsgXCIuLi5cIiA6IHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlSW5kZXg6IDAsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHBlclBhZ2U6IDYsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICBuYW1la2F0OiBcIlwiLFxyXG4gICAgICBhZGE6IFwiXCIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVQYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZVBhZ2VDbGljaztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBrYXRlZ29yaSB9ID0gcXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9hcGkva2F0ZWdvcnlwcm9kdWN0L1wiICsgaWQgK1wiL1wiK2thdGVnb3JpKTtcclxuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBsZXQgZ2FtYmFybnlhID0nJztcclxuICAgICAgbGV0IGxpbmtueWEgPScnO1xyXG4gICAgICBsZXQgdGl0bGVoZWFkPSdCZWx1bSBhZGEgcHJvZHVrIGRpIGthdGVnb3JpIGluaSdcclxuICAgICAgbGV0IGRlcyA9ICcnXHJcbiAgICAgIGlmKHNob3cuZGF0YS5sZW5ndGgpe1xyXG4gIFxyXG4gICAgICB0aXRsZWhlYWQgPSAnem1icGVkaWFib2dvciB8ICcrIGF3YWl0IHNob3cubmFtYXRpdGxlICsgJyAtIGthdGVnb3JpIHByb2R1aydcclxuICAgICAgZGVzID0gICdLb2xla3NpIFRhbmFtYW4gdGVyYmFpayBrYW1pIGRhcmkga2F0ZWdvcmkgJyArIGF3YWl0IHNob3cubmFtYXRpdGxlXHJcbiAgICAgIGdhbWJhcm55YSA9IGF3YWl0IHNob3cuZGF0YVswXS5vZ2dhbWJhcjtcclxuICAgICAgbGlua255YSA9IGF3YWl0IHNob3cuZGF0YVswXS5jcm9uaWNhbDtcclxuICAgIFxyXG4gICAgIH1cclxuICAgIHJldHVybiB7IHNob3csIGthdGVnb3JpLCBpZCwgZ2FtYmFybnlhLCBsaW5rbnlhLCBkZXMsIHRpdGxlaGVhZCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB2YXIgbXlBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaG93LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbaV07XHJcbiAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnByb3BzLnNob3cuZGF0YVswXTtcclxuICAgICAgdmFyIG51bSA9IHZhbHVlW1wiaWRcIl07XHJcbiAgICAgIHZhciBuYW1hcHJvZHVrID0gdmFsdWVbXCJuYW1hcHJvZHVrXCJdO1xyXG4gICAgICB2YXIgaGFyZ2EgPSB2YWx1ZVtcImhhcmdhXCJdO1xyXG4gICAgICB2YXIgZ2FtYmFyID0gdmFsdWVbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBzaCA9IHZhbHVlc1tcImdhbWJhclwiXTtcclxuICAgICAgdmFyIG9uID0gdmFsdWVbXCJzdG9rXCJdO1xyXG4gICAgICB2YXIga2FzdCA9IHZhbHVlW1wia2F0ZWdvcmlcIl07XHJcbiAgICAgIHZhciBzdG9rO1xyXG5cclxuICAgICAgaWYgKG9uID09PSBcInRydWVcIikge1xyXG4gICAgICAgIHN0b2sgPSBcInNhbGVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdG9rID0gXCJvdXQgb2Ygc3RvY2tcIjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdWxyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciBvbmUgPSB1bHIuc3BsaXQoXCIvXCIpWzRdO1xyXG4gICAgICB2YXIgdHdvID0gdWxyLnNwbGl0KFwiL1wiKVs1XTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbmFtZWthdDogdGhpcy5wcm9wcy5jYXRlZ29yeSxcclxuICAgICAgICBhZGE6IFwieWVzXCJcclxuICAgICAgfSk7XHJcbiAgICAgIG15QXJyYXkucHVzaCh7XHJcbiAgICAgICAgaWQ6IG51bSxcclxuICAgICAgICBuYW1hOiBuYW1hcHJvZHVrLFxyXG4gICAgICAgIGdhbWJhcjogZ2FtYmFyLFxyXG4gICAgICAgIGhhcmdhOiBoYXJnYSxcclxuICAgICAgICBzdG9rOiBzdG9rLFxyXG4gICAgICAgIGthdHM6IGthc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChteUFycmF5Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBzbGljZSA9IG15QXJyYXkuc2xpY2UoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vZmZzZXQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vZmZzZXQgKyB0aGlzLnN0YXRlLnBlclBhZ2VcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSBzbGljZS5tYXAoKGEpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthLmdhbWJhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2F4LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtYXByb2R1a31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrZGV0YWlsL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1a2RldGFpbC8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgICAgcG9zdERhdGEsXHJcbiAgICAgICAgcHJvZHVjdGRhdGE6IG15QXJyYXksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkYTogXCJub1wiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZWREYXRhID0gKGUpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIHZhciBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdGVnb3JpXCJdO1xyXG4gICAgICB2YXIgc3RvaztcclxuXHJcbiAgICAgIGlmIChvbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBzdG9rID0gXCJzYWxlXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvayA9IFwib3V0IG9mIHN0b2NrXCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgb25lID0gdWxyLnNwbGl0KFwiL1wiKVs0XTtcclxuICAgICAgdmFyIHR3byA9IHVsci5zcGxpdChcIi9cIilbNV07XHJcblxyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgICBrYXRzOiBrYXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGljZSA9IG15QXJyYXkuc2xpY2UoZSwgZSArIHRoaXMuc3RhdGUucGVyUGFnZSk7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHNsaWNlLm1hcCgoYSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTQgZmVhdHVyZUNvbCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdIb2xkZXIgcG9zaXRpb24tcmVsYXRpdmUgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthLmdhbWJhcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2F4LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtYXByb2R1a31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS01IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIGQtYmxvY2sgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVrZGV0YWlsL1tpZF0vW3Byb2R1Y3RdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1a2RldGFpbC8ke2EuaWR9LyR7YS5uYW1hLnJlcGxhY2UoL1xccy9nLFwiLVwiKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPiB7dHJ1bmNhdGUoYS5uYW1hKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UgZC1ibG9jayBmd0Vib2xkXCI+e2EuaGFyZ2F9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJob3RPZmZlciBncmVlbiBmd0Vib2xkIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgcG9zaXRpb24tYWJzb2x1dGUgZC1ibG9jayBtbC04XCI+U2FsZTwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChteUFycmF5Lmxlbmd0aCAvIHRoaXMuc3RhdGUucGVyUGFnZSksXHJcbiAgICAgIHBvc3REYXRhLFxyXG4gICAgICBwcm9kdWN0ZGF0YTogbXlBcnJheSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2VDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFBhZ2UgPSBlLnNlbGVjdGVkO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0ZWRQYWdlICogdGhpcy5zdGF0ZS5wZXJQYWdlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRQYWdlOiBzZWxlY3RlZFBhZ2UsXHJcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlY2VpdmVkRGF0YShvZmZzZXQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBuYW1la2F0LCBhZGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgXHJcbiA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZWhlYWR9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc31cclxuICAgICAgY2Fub25pY2FsPXt0aGlzLnByb3BzLmxpbmtueWF9XHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogdGhpcy5wcm9wcy5saW5rbnlhLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlaGVhZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXMsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5nYW1iYXJueWEsXHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzE1LFxyXG4gICAgICAgICAgICBhbHQ6IHRoaXMucHJvcHMuY2F0ZWdvcnksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaXRlX25hbWU6ICd6bWJwZWRpYWJvZ29yJyxcclxuICAgICAgfX1cclxuICAgIC8+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5ib3JkZXJ7ICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudH1cclxuICAgICAgICAgIC5vdmVybHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvQmFubmVySG9sZGVyIGQtZmxleCB3LTEwMCBiZ0NvdmVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3RoaXMucHJvcHMuZ2FtYmFybnlhfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYGNvdmVyYCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYGNlbnRlcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybFwiIHN0eWxlPXt7YmFja2dyb3VuZDoncmdiYSgyNTUsMjU1LDI1NSwgLjgpJ319PjwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB0LWxnLTIzIHB0LW1kLTE1IHB0LXNtLTEwIHB0LTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nSVYgZndFYm9sZCBwbGF5ZmFpciBtYi00XCI+IHt0aGlzLnN0YXRlLm5hbWVrYXQucmVwbGFjZSgvXFwtL2csIFwiIFwiKX08L2gxPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWQgYnJlYWRDcnVtYnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48YSBocmVmPVwiaHR0cHM6Ly96bWJwZWRpYWJvZ29yLnN0b3JlL1wiPkJlcmFuZGE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1yLTJcIj4vPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkthdGVnb3JpPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXBhZ2Utd3JhcHBlciBwdGItLTgwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthZGEgPT09IFwibm9cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJub25cIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWVyb3IgaWNvbiBpY29uLXBsYW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJlbHVtIGFkYSBwcm9kdWsgZGkga2F0ZWdvcmkgaW5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZFwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG5leHRMYWJlbD17XCJuZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17dGhpcy5zdGF0ZS5wYWdlQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=D:\\\\zmb\\\\pages\\\\kategori\\\\[id]\\\\[category].js */"), __jsx("section", {
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
        var query, id, kategori, res, show, gambarnya, linknya, titlehead, des;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                id = query.id, kategori = query.kategori;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("https://zmbpediabogor.store/api/kategoryproduct/" + id + "/" + kategori);

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
                  kategori: kategori,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2F0ZWdvcmkvL1tjYXRlZ29yeV0uanMiXSwibmFtZXMiOlsidHJ1bmNhdGUiLCJzdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJDYXRlZ29yeSIsImUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm15QXJyYXkiLCJpIiwicHJvcHMiLCJzaG93IiwiZGF0YSIsInZhbHVlIiwidmFsdWVzIiwibnVtIiwibmFtYXByb2R1ayIsImhhcmdhIiwiZ2FtYmFyIiwic2giLCJvbiIsImthc3QiLCJzdG9rIiwidWxyIiwibG9jYXRpb24iLCJocmVmIiwib25lIiwic3BsaXQiLCJ0d28iLCJwdXNoIiwiaWQiLCJuYW1hIiwia2F0cyIsInNsaWNlIiwic3RhdGUiLCJwZXJQYWdlIiwicG9zdERhdGEiLCJtYXAiLCJhIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJyZXBsYWNlIiwic2V0U3RhdGUiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInByb2R1Y3RkYXRhIiwic2VsZWN0ZWRQYWdlIiwic2VsZWN0ZWQiLCJvZmZzZXQiLCJjdXJyZW50UGFnZSIsInJlY2VpdmVkRGF0YSIsImltYWdlSW5kZXgiLCJuYW1la2F0IiwiYWRhIiwiaGFuZGxlUGFnZUNsaWNrIiwiY2F0ZWdvcnkiLCJ0aXRsZWhlYWQiLCJkZXMiLCJsaW5rbnlhIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImdhbWJhcm55YSIsImFsdCIsInNpdGVfbmFtZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicXVlcnkiLCJrYXRlZ29yaSIsImZldGNoIiwicmVzIiwianNvbiIsIm5hbWF0aXRsZSIsIm9nZ2FtYmFyIiwiY3JvbmljYWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QyxJQUFJLENBQUNvRSxTOzs7O0FBQWxFcEIsbUIsR0FBTyw2Qzs7dUJBQ1doRCxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLEVBQWFvRSxROzs7QUFBL0JmLHlCOzt1QkFDZ0J0RCxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFWLEVBQWFxRSxROzs7QUFBN0JyQix1Qjs7O2lEQUdLO0FBQUVqRCxzQkFBSSxFQUFKQSxJQUFGO0FBQVFnRSwwQkFBUSxFQUFSQSxRQUFSO0FBQWtCN0Msb0JBQUUsRUFBRkEsRUFBbEI7QUFBc0JtQywyQkFBUyxFQUFUQSxTQUF0QjtBQUFpQ0wseUJBQU8sRUFBUEEsT0FBakM7QUFBMENELHFCQUFHLEVBQUhBLEdBQTFDO0FBQStDRCwyQkFBUyxFQUFUQTtBQUEvQyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhDMkJ3Qiw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2thdGVnb3JpL1tpZF0vW2NhdGVnb3J5XS4yYTNiMGY5MzU1NGNlYTA3ZmQxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuZnVuY3Rpb24gdHJ1bmNhdGUoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5sZW5ndGggPiAxMCA/IHN0ci5zdWJzdHJpbmcoMCwgMTAwKSArIFwiLi4uXCIgOiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZUluZGV4OiAwLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICBwZXJQYWdlOiA2LFxyXG4gICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgICAgbmFtZWthdDogXCJcIixcclxuICAgICAgYWRhOiBcIlwiLFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlUGFnZUNsaWNrID0gdGhpcy5oYW5kbGVQYWdlQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgeyBpZCwga2F0ZWdvcmkgfSA9IHF1ZXJ5O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3ptYnBlZGlhYm9nb3Iuc3RvcmUvYXBpL2thdGVnb3J5cHJvZHVjdC9cIiArIGlkICtcIi9cIitrYXRlZ29yaSk7XHJcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgbGV0IGdhbWJhcm55YSA9Jyc7XHJcbiAgICAgIGxldCBsaW5rbnlhID0nJztcclxuICAgICAgbGV0IHRpdGxlaGVhZD0nQmVsdW0gYWRhIHByb2R1ayBkaSBrYXRlZ29yaSBpbmknXHJcbiAgICAgIGxldCBkZXMgPSAnJ1xyXG4gICAgICBpZihzaG93LmRhdGEubGVuZ3RoKXtcclxuICBcclxuICAgICAgdGl0bGVoZWFkID0gJ3ptYnBlZGlhYm9nb3IgfCAnKyBhd2FpdCBzaG93Lm5hbWF0aXRsZSArICcgLSBrYXRlZ29yaSBwcm9kdWsnXHJcbiAgICAgIGRlcyA9ICAnS29sZWtzaSBUYW5hbWFuIHRlcmJhaWsga2FtaSBkYXJpIGthdGVnb3JpICcgKyBhd2FpdCBzaG93Lm5hbWF0aXRsZVxyXG4gICAgICBnYW1iYXJueWEgPSBhd2FpdCBzaG93LmRhdGFbMF0ub2dnYW1iYXI7XHJcbiAgICAgIGxpbmtueWEgPSBhd2FpdCBzaG93LmRhdGFbMF0uY3JvbmljYWw7XHJcbiAgICBcclxuICAgICB9XHJcbiAgICByZXR1cm4geyBzaG93LCBrYXRlZ29yaSwgaWQsIGdhbWJhcm55YSwgbGlua255YSwgZGVzLCB0aXRsZWhlYWQgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdmFyIG15QXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuc2hvdy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuc2hvdy5kYXRhW2ldO1xyXG4gICAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5zaG93LmRhdGFbMF07XHJcbiAgICAgIHZhciBudW0gPSB2YWx1ZVtcImlkXCJdO1xyXG4gICAgICB2YXIgbmFtYXByb2R1ayA9IHZhbHVlW1wibmFtYXByb2R1a1wiXTtcclxuICAgICAgdmFyIGhhcmdhID0gdmFsdWVbXCJoYXJnYVwiXTtcclxuICAgICAgdmFyIGdhbWJhciA9IHZhbHVlW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgc2ggPSB2YWx1ZXNbXCJnYW1iYXJcIl07XHJcbiAgICAgIHZhciBvbiA9IHZhbHVlW1wic3Rva1wiXTtcclxuICAgICAgdmFyIGthc3QgPSB2YWx1ZVtcImthdGVnb3JpXCJdO1xyXG4gICAgICB2YXIgc3RvaztcclxuXHJcbiAgICAgIGlmIChvbiA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBzdG9rID0gXCJzYWxlXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RvayA9IFwib3V0IG9mIHN0b2NrXCI7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHVsciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICB2YXIgb25lID0gdWxyLnNwbGl0KFwiL1wiKVs0XTtcclxuICAgICAgdmFyIHR3byA9IHVsci5zcGxpdChcIi9cIilbNV07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG5hbWVrYXQ6IHRoaXMucHJvcHMuY2F0ZWdvcnksXHJcbiAgICAgICAgYWRhOiBcInllc1wiXHJcbiAgICAgIH0pO1xyXG4gICAgICBteUFycmF5LnB1c2goe1xyXG4gICAgICAgIGlkOiBudW0sXHJcbiAgICAgICAgbmFtYTogbmFtYXByb2R1ayxcclxuICAgICAgICBnYW1iYXI6IGdhbWJhcixcclxuICAgICAgICBoYXJnYTogaGFyZ2EsXHJcbiAgICAgICAgc3Rvazogc3RvayxcclxuICAgICAgICBrYXRzOiBrYXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobXlBcnJheS5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgc2xpY2UgPSBteUFycmF5LnNsaWNlKFxyXG4gICAgICAgIHRoaXMuc3RhdGUub2Zmc2V0LFxyXG4gICAgICAgIHRoaXMuc3RhdGUub2Zmc2V0ICsgdGhpcy5zdGF0ZS5wZXJQYWdlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0gc2xpY2UubWFwKChhKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGZlYXR1cmVDb2wgbWItN1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyIHBvc2l0aW9uLXJlbGF0aXZlIHctMTAwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YS5nYW1iYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIndheC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXthLm5hbWFwcm9kdWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNSBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkLWJsb2NrIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1a2RldGFpbC9baWRdL1twcm9kdWN0XVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wcm9kdWtkZXRhaWwvJHthLmlkfS8ke2EubmFtYS5yZXBsYWNlKC9cXHMvZyxcIi1cIil9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge3RydW5jYXRlKGEubmFtYSl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgZndFYm9sZFwiPnthLmhhcmdhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiaG90T2ZmZXIgZ3JlZW4gZndFYm9sZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBvc2l0aW9uLWFic29sdXRlIGQtYmxvY2sgbWwtOFwiPlNhbGU8L3NwYW4+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwobXlBcnJheS5sZW5ndGggLyB0aGlzLnN0YXRlLnBlclBhZ2UpLFxyXG4gICAgICAgIHBvc3REYXRhLFxyXG4gICAgICAgIHByb2R1Y3RkYXRhOiBteUFycmF5LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGE6IFwibm9cIiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY2VpdmVkRGF0YSA9IChlKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB2YXIgbXlBcnJheSA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNob3cuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnNob3cuZGF0YVtpXTtcclxuICAgICAgdmFyIHZhbHVlcyA9IHRoaXMucHJvcHMuc2hvdy5kYXRhWzBdO1xyXG4gICAgICB2YXIgbnVtID0gdmFsdWVbXCJpZFwiXTtcclxuICAgICAgdmFyIG5hbWFwcm9kdWsgPSB2YWx1ZVtcIm5hbWFwcm9kdWtcIl07XHJcbiAgICAgIHZhciBoYXJnYSA9IHZhbHVlW1wiaGFyZ2FcIl07XHJcbiAgICAgIHZhciBnYW1iYXIgPSB2YWx1ZVtcImdhbWJhclwiXTtcclxuICAgICAgdmFyIHNoID0gdmFsdWVzW1wiZ2FtYmFyXCJdO1xyXG4gICAgICB2YXIgb24gPSB2YWx1ZVtcInN0b2tcIl07XHJcbiAgICAgIHZhciBrYXN0ID0gdmFsdWVbXCJrYXRlZ29yaVwiXTtcclxuICAgICAgdmFyIHN0b2s7XHJcblxyXG4gICAgICBpZiAob24gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgc3RvayA9IFwic2FsZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b2sgPSBcIm91dCBvZiBzdG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB1bHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgdmFyIG9uZSA9IHVsci5zcGxpdChcIi9cIilbNF07XHJcbiAgICAgIHZhciB0d28gPSB1bHIuc3BsaXQoXCIvXCIpWzVdO1xyXG5cclxuICAgICAgbXlBcnJheS5wdXNoKHtcclxuICAgICAgICBpZDogbnVtLFxyXG4gICAgICAgIG5hbWE6IG5hbWFwcm9kdWssXHJcbiAgICAgICAgZ2FtYmFyOiBnYW1iYXIsXHJcbiAgICAgICAgaGFyZ2E6IGhhcmdhLFxyXG4gICAgICAgIHN0b2s6IHN0b2ssXHJcbiAgICAgICAga2F0czoga2FzdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2xpY2UgPSBteUFycmF5LnNsaWNlKGUsIGUgKyB0aGlzLnN0YXRlLnBlclBhZ2UpO1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSBzbGljZS5tYXAoKGEpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGZlYXR1cmVDb2wgbWItN1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nSG9sZGVyIHBvc2l0aW9uLXJlbGF0aXZlIHctMTAwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YS5nYW1iYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIndheC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXthLm5hbWFwcm9kdWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktNSBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkLWJsb2NrIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1a2RldGFpbC9baWRdL1twcm9kdWN0XVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wcm9kdWtkZXRhaWwvJHthLmlkfS8ke2EubmFtYS5yZXBsYWNlKC9cXHMvZyxcIi1cIil9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge3RydW5jYXRlKGEubmFtYSl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlIGQtYmxvY2sgZndFYm9sZFwiPnthLmhhcmdhfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiaG90T2ZmZXIgZ3JlZW4gZndFYm9sZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBvc2l0aW9uLWFic29sdXRlIGQtYmxvY2sgbWwtOFwiPlNhbGU8L3NwYW4+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnZUNvdW50OiBNYXRoLmNlaWwobXlBcnJheS5sZW5ndGggLyB0aGlzLnN0YXRlLnBlclBhZ2UpLFxyXG4gICAgICBwb3N0RGF0YSxcclxuICAgICAgcHJvZHVjdGRhdGE6IG15QXJyYXksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQYWdlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQYWdlID0gZS5zZWxlY3RlZDtcclxuICAgIGNvbnN0IG9mZnNldCA9IHNlbGVjdGVkUGFnZSAqIHRoaXMuc3RhdGUucGVyUGFnZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50UGFnZTogc2VsZWN0ZWRQYWdlLFxyXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZWNlaXZlZERhdGEob2Zmc2V0KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSwgbmFtZWthdCwgYWRhIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgIFxyXG4gPE5leHRTZW9cclxuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGVoZWFkfVxyXG4gICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXN9XHJcbiAgICAgIGNhbm9uaWNhbD17dGhpcy5wcm9wcy5saW5rbnlhfVxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICB1cmw6IHRoaXMucHJvcHMubGlua255YSxcclxuICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZWhlYWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzLFxyXG4gICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuZ2FtYmFybnlhLFxyXG4gICAgICAgICAgICB3aWR0aDogNjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMxNSxcclxuICAgICAgICAgICAgYWx0OiB0aGlzLnByb3BzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2l0ZV9uYW1lOiAnem1icGVkaWFib2dvcicsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG5cclxuICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYm9yZGVyeyAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnR9XHJcbiAgICAgICAgICAub3Zlcmx7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIFxyXG48c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb0Jhbm5lckhvbGRlciBkLWZsZXggdy0xMDAgYmdDb3ZlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHt0aGlzLnByb3BzLmdhbWJhcm55YX0pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IGBjb3ZlcmAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGBjZW50ZXJgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxcIiBzdHlsZT17e2JhY2tncm91bmQ6J3JnYmEoMjU1LDI1NSwyNTUsIC44KSd9fT48L2Rpdj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBwdC1sZy0yMyBwdC1tZC0xNSBwdC1zbS0xMCBwdC02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGluZ0lWIGZ3RWJvbGQgcGxheWZhaXIgbWItNFwiPiB7dGhpcy5zdGF0ZS5uYW1la2F0LnJlcGxhY2UoL1xcLS9nLCBcIiBcIil9PC9oMT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkIGJyZWFkQ3J1bWJzIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtci0yXCI+PGEgaHJlZj1cImh0dHBzOi8vem1icGVkaWFib2dvci5zdG9yZS9cIj5CZXJhbmRhPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtci0yXCI+LzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5LYXRlZ29yaTwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1wYWdlLXdyYXBwZXIgcHRiLS04MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWRhID09PSBcIm5vXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibm9uXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1lcm9yIGljb24gaWNvbi1wbGFudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCZWx1bSBhZGEgcHJvZHVrIGRpIGthdGVnb3JpIGluaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2RcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3RoaXMuc3RhdGUucGFnZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMuaGFuZGxlUGFnZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdlcyBwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9