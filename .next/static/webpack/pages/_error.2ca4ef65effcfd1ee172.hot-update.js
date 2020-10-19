webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Czmb%5Cpages%5C_error.js!./":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Czmb%5Cpages%5C_error.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\zmb\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: "Plant29 - Error page enot found",
    description: "",
    canonical: "",
    openGraph: {
      url: "",
      title: "Error page enot found",
      description: "",
      images: [{
        url: '',
        width: 800,
        height: 600,
        alt: ''
      }, {
        url: '',
        width: 900,
        height: 800,
        alt: ''
      }],
      site_name: 'plant29'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 2
    }
  }), __jsx("main", {
    className: "main-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "error-area pt--90 pt-xl--70 pb--120 pb-xl--100 pb-lg--95 pb-sm--90",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-xl-7 col-lg-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, " ", statusCode ? "".concat(statusCode) : ''), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "SORRY SOMETHING WAS WRONG"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, statusCode ? "An error occurred on server" : 'An error occurred on client'), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, "Back to home page")))))))));
}

_c = Error;

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic2l0ZV9uYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUEyQjtBQUNsRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxPQUErQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUM3QixTQUVDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVGLE1BQUMsZ0RBQUQ7QUFDSyxTQUFLLEVBQUMsaUNBRFg7QUFFSyxlQUFXLEVBQUMsRUFGakI7QUFHSyxhQUFTLEVBQUMsRUFIZjtBQUlLLGFBQVMsRUFBRTtBQUNUQyxTQUFHLEVBQUUsRUFESTtBQUVUQyxXQUFLLEVBQUUsdUJBRkU7QUFHVEMsaUJBQVcsRUFBRSxFQUhKO0FBSVRDLFlBQU0sRUFBRSxDQUNOO0FBQ0VILFdBQUcsRUFBRSxFQURQO0FBRUVJLGFBQUssRUFBRSxHQUZUO0FBR0VDLGNBQU0sRUFBRSxHQUhWO0FBSUVDLFdBQUcsRUFBRTtBQUpQLE9BRE0sRUFPTjtBQUNFTixXQUFHLEVBQUUsRUFEUDtBQUVFSSxhQUFLLEVBQUUsR0FGVDtBQUdFQyxjQUFNLEVBQUUsR0FIVjtBQUlHQyxXQUFHLEVBQUU7QUFKUixPQVBNLENBSkM7QUFrQlRDLGVBQVMsRUFBRTtBQWxCRixLQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkUsRUEyQkU7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTztBQUFLLGFBQVMsRUFBQyxvRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU1SLFVBQVUsYUFDbkNBLFVBRG1DLElBRXRDLEVBRnNCLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQSxVQUFVLG1DQUVwQyw2QkFGc0IsQ0FMSixFQVFHLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLE1BQUUsRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELENBUkgsQ0FESixDQURKLENBREosQ0FESixDQURQLENBM0JGLENBRkQ7QUF3REQ7O0tBekRRRCxLOztBQTJEVEEsS0FBSyxDQUFDVSxlQUFOLEdBQXdCLGlCQUFrQjtBQUFBLE1BQWZDLEdBQWUsU0FBZkEsR0FBZTtBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTtBQUN4QyxNQUFNWCxVQUFVLEdBQUdVLEdBQUcsR0FBR0EsR0FBRyxDQUFDVixVQUFQLEdBQW9CVyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ1gsVUFBUCxHQUFvQixHQUFqRTtBQUNBLFNBQU87QUFBRUEsY0FBVSxFQUFWQTtBQUFGLEdBQVA7QUFDRCxDQUhEOztBQUtlRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fZXJyb3IuMmNhNGVmNjVlZmZjZmQxZWUxNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcem1iXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgIDxMYXlvdXQ+XHJcblxyXG4gPE5leHRTZW9cclxuICAgICAgdGl0bGU9XCJQbGFudDI5IC0gRXJyb3IgcGFnZSBlbm90IGZvdW5kXCJcclxuICAgICAgZGVzY3JpcHRpb249XCJcIlxyXG4gICAgICBjYW5vbmljYWw9XCJcIlxyXG4gICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3IgcGFnZSBlbm90IGZvdW5kXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgICAgICBhbHQ6ICcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICBhbHQ6ICcnLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2l0ZV9uYW1lOiAncGxhbnQyOScsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYSBwdC0tOTAgcHQteGwtLTcwIHBiLS0xMjAgcGIteGwtLTEwMCBwYi1sZy0tOTUgcGItc20tLTkwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNyBjb2wtbGctOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ge3N0YXR1c0NvZGVcclxuICAgICAgICA/IGAke3N0YXR1c0NvZGV9YFxyXG4gICAgICAgIDogJyd9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U09SUlkgU09NRVRISU5HIFdBUyBXUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N0YXR1c0NvZGVcclxuICAgICAgICA/IGBBbiBlcnJvciBvY2N1cnJlZCBvbiBzZXJ2ZXJgXHJcbiAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPkJhY2sgdG8gaG9tZSBwYWdlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG5cclxuICBcclxuICApXHJcbn1cclxuXHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgZXJyIH0pID0+IHtcclxuICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNFxyXG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=