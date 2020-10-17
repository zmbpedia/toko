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
var _jsxFileName = "D:\\zmb\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
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
      lineNumber: 9,
      columnNumber: 2
    }
  }), __jsx("main", {
    className: "main-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "error-area pt--90 pt-xl--70 pb--120 pb-xl--100 pb-lg--95 pb-sm--90",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-xl-7 col-lg-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, " ", statusCode ? "".concat(statusCode) : ''), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "SORRY SOMETHING WAS WRONG"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, statusCode ? "An error occurred on server" : 'An error occurred on client'), __jsx("a", {
    href: "/",
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "Back to home page"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic2l0ZV9uYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUEyQjtBQUNsRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxLQUFULE9BQStCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQzdCLFNBRUMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUYsTUFBQyxnREFBRDtBQUNLLFNBQUssRUFBQyxpQ0FEWDtBQUVLLGVBQVcsRUFBQyxFQUZqQjtBQUdLLGFBQVMsRUFBQyxFQUhmO0FBSUssYUFBUyxFQUFFO0FBQ1RDLFNBQUcsRUFBRSxFQURJO0FBRVRDLFdBQUssRUFBRSx1QkFGRTtBQUdUQyxpQkFBVyxFQUFFLEVBSEo7QUFJVEMsWUFBTSxFQUFFLENBQ047QUFDRUgsV0FBRyxFQUFFLEVBRFA7QUFFRUksYUFBSyxFQUFFLEdBRlQ7QUFHRUMsY0FBTSxFQUFFLEdBSFY7QUFJRUMsV0FBRyxFQUFFO0FBSlAsT0FETSxFQU9OO0FBQ0VOLFdBQUcsRUFBRSxFQURQO0FBRUVJLGFBQUssRUFBRSxHQUZUO0FBR0VDLGNBQU0sRUFBRSxHQUhWO0FBSUdDLFdBQUcsRUFBRTtBQUpSLE9BUE0sQ0FKQztBQWtCVEMsZUFBUyxFQUFFO0FBbEJGLEtBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRSxFQTJCRTtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTVIsVUFBVSxhQUNuQ0EsVUFEbUMsSUFFdEMsRUFGc0IsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlBLFVBQVUsbUNBRXBDLDZCQUZzQixDQUxKLEVBU0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRKLENBREosQ0FESixDQURKLENBREosQ0FEUCxDQTNCRixDQUZEO0FBdUREOztLQXhEUUQsSzs7QUEwRFRBLEtBQUssQ0FBQ1UsZUFBTixHQUF3QixpQkFBa0I7QUFBQSxNQUFmQyxHQUFlLFNBQWZBLEdBQWU7QUFBQSxNQUFWQyxHQUFVLFNBQVZBLEdBQVU7QUFDeEMsTUFBTVgsVUFBVSxHQUFHVSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ1YsVUFBUCxHQUFvQlcsR0FBRyxHQUFHQSxHQUFHLENBQUNYLFVBQVAsR0FBb0IsR0FBakU7QUFDQSxTQUFPO0FBQUVBLGNBQVUsRUFBVkE7QUFBRixHQUFQO0FBQ0QsQ0FIRDs7QUFLZUQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLjIwOGE5NTUzMjFkODE1MDg1NTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkQ6XFxcXHptYlxcXFxwYWdlc1xcXFxfZXJyb3IuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcclxuICByZXR1cm4gKFxyXG5cclxuICAgPExheW91dD5cclxuXHJcbiA8TmV4dFNlb1xyXG4gICAgICB0aXRsZT1cIlBsYW50MjkgLSBFcnJvciBwYWdlIGVub3QgZm91bmRcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIlwiXHJcbiAgICAgIGNhbm9uaWNhbD1cIlwiXHJcbiAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgIHVybDogXCJcIixcclxuICAgICAgICB0aXRsZTogXCJFcnJvciBwYWdlIGVub3QgZm91bmRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgIGFsdDogJycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgICAgICB3aWR0aDogOTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwMCxcclxuICAgICAgICAgICAgIGFsdDogJycsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzaXRlX25hbWU6ICdwbGFudDI5JyxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1hcmVhIHB0LS05MCBwdC14bC0tNzAgcGItLTEyMCBwYi14bC0tMTAwIHBiLWxnLS05NSBwYi1zbS0tOTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC03IGNvbC1sZy04IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiB7c3RhdHVzQ29kZVxyXG4gICAgICAgID8gYCR7c3RhdHVzQ29kZX1gXHJcbiAgICAgICAgOiAnJ308L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TT1JSWSBTT01FVEhJTkcgV0FTIFdST05HPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RhdHVzQ29kZVxyXG4gICAgICAgID8gYEFuIGVycm9yIG9jY3VycmVkIG9uIHNlcnZlcmBcclxuICAgICAgICA6ICdBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuXCI+QmFjayB0byBob21lIHBhZ2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuXHJcbiAgXHJcbiAgKVxyXG59XHJcblxyXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XHJcbiAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDRcclxuICByZXR1cm4geyBzdGF0dXNDb2RlIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9