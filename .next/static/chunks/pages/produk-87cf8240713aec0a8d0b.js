_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"HaE+":function(e,a,t){"use strict";function r(e,a,t,r,n,o,i){try{var s=e[o](i),l=s.value}catch(c){return void t(c)}s.done?a(l):Promise.resolve(l).then(r,n)}function n(e){return function(){var a=this,t=arguments;return new Promise((function(n,o){var i=e.apply(a,t);function s(e){r(i,n,o,s,l,"next",e)}function l(e){r(i,n,o,s,l,"throw",e)}s(void 0)}))}}t.d(a,"a",(function(){return n}))},"I+5a":function(e,a,t){(function(r){var n;e.exports=(n=t("q1tI"),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:o,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(0),s=r.n(i);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,s=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),g=null;return n&&(g="page",f=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+i:i,void 0!==t?void 0!==s&&(t=t+" "+s):t=s),o.a.createElement("li",{className:a},o.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":f,"aria-current":g,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,s=t||"break";return o.a.createElement("li",{className:s},o.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),a))};d.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var f=d;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function v(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=C(e);if(a){var n=C(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return y(this,t)}}function y(e,a){return!a||"object"!==g(a)&&"function"!=typeof a?k(e):a}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var x=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(i,e);var a,t,r,n=v(i);function i(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i),P(k(a=n.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),P(k(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),P(k(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),P(k(a),"getEventListener",(function(e){return P({},a.props.eventListener,e)})),P(k(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),P(k(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),P(k(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,i=t.marginPagesDisplayed,s=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(a.getPageElement(p));else{var d,g,b,m=r/2,h=r-m;u>n-r/2?m=r-(h=n-u):u<r/2&&(h=r-(m=u));var v=function(e){return a.getPageElement(e)};for(d=0;d<n;d++)(g=d+1)<=i||g>n-i||d>=u-m&&d<=u+h?e.push(v(d)):s&&e[e.length-1]!==b&&(b=o.a.createElement(f,{key:d,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(b))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=i,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,i=t.activeClassName,s=t.activeLinkClassName,l=t.extraAriaContext;return o.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:s,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,s=e.previousLinkClassName,l=e.previousAriaLabel,c=e.nextLabel,u=e.nextClassName,p=e.nextLinkClassName,d=e.nextAriaLabel,f=this.state.selected,g=i+(0===f?" ".concat(a):""),m=u+(f===t-1?" ".concat(a):""),h=0===f?"true":"false",v=f===t-1?"true":"false";return o.a.createElement("ul",{className:r},o.a.createElement("li",{className:g},o.a.createElement("a",b({className:s,href:this.hrefBuilder(f-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":h,"aria-label":l},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),o.a.createElement("li",{className:m},o.a.createElement("a",b({className:p,href:this.hrefBuilder(f+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v,"aria-label":d},this.getEventListener(this.handleNextPage)),c)))}}])&&m(a.prototype,t),r&&m(a,r),i}(n.Component);P(x,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),P(x,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=x,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t("yLpj"))},IeuQ:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e.replace(/\n/g,"").replace(/\s\s+/g," ")}},p2U1:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var r=t("o0o1"),n=t.n(r),o=t("HaE+"),i=t("1OyB"),s=t("vuIU"),l=t("JX7q"),c=t("Ji7U"),u=t("md7G"),p=t("foSv"),d=t("rePB"),f=t("CafY"),g=t("vcXL"),b=t.n(g),m=t("q1tI"),h=t.n(m),v=t("YFqc"),y=t.n(v),k=t("I+5a"),C=t.n(k),P=t("IeuQ"),x=t.n(P),w=t("9ixD"),N=h.a.createElement;function L(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Object(p.a)(e);if(a){var n=Object(p.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(u.a)(this,t)}}function O(e){return e.length>10?e.substring(0,20)+"...":e}var j=function(e){Object(c.a)(t,e);var a=L(t);function t(){var e;return Object(i.a)(this,t),e=a.call(this),Object(d.a)(Object(l.a)(e),"handlePageClick",(function(a){var t=a.selected,r=t*e.state.perPage;e.setState({currentPage:t,offset:r}),e.receivedData(r)})),Object(d.a)(Object(l.a)(e),"receivedData",(function(a){console.log(a),window.scrollTo(0,0);for(var t=[],r=0;r<e.props.show.data.length;r++){var n=e.props.show.data[r],o=e.props.show.data[0],i=n.id,s=n.namaproduk,l=n.harga,c=n.gambar,u=(o.gambar,n.stok),p=(n.kat,o.typea),d=window.location.href;d.split("/")[4],d.split("/")[5];console.log(p),t.push({id:i,nama:s,gambar:c,harga:l,typea:p,stok:u})}var f=t.slice(a,a+e.state.perPage).map((function(e){return N("div",{className:"col-12 col-sm-6 col-lg-4 featureCol mb-7"},N("div",{className:"border"},N("div",{className:"imgHolder position-relative w-100 overflow-hidden"},N("img",{src:e.gambar,style:{height:"300px",objectFit:"cover",width:"100%"},id:"wax-img",alt:e.namaproduk,className:"img-fluid"})),N("div",{className:"text-center py-5 px-4"},N("span",{className:"title d-block mb-2"},N(y.a,{href:"/produk/[id]/[product]",as:"/produk/".concat(e.id,"/").concat(e.nama.replace(/\s/g,"-"))},N("a",null," ",O(e.nama)))),N("span",{className:"price d-block fwEbold"},e.harga),e.stok?N("span",{class:"hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8 ups"},"Tersedia"):N("span",{class:"hotOffer fwEbold text-uppercase text-white position-absolute d-block ml-8 abs"},"Stok habis"))))}));e.setState({pageCount:Math.ceil(t.length/e.state.perPage),postData:f})})),e.state={imageIndex:0,data:[],gm:"",offset:0,perPage:3,currentPage:0},e.handlePageClick=e.handlePageClick.bind(Object(l.a)(e)),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);for(var e=[],a=0;a<this.props.show.data.length;a++){var t=this.props.show.data[a],r=this.props.show.data[0],n=t.id,o=t.namaproduk,i=t.harga,s=t.gambar,l=r.gambar,c=t.stok,u=r.typea,p=(t.kat,window.location.href);p.split("/")[4],p.split("/")[5];console.log(u),this.setState({namekat:"zmbpediabogor - Katalog produk",ada:"yes",titles:"zmbpediabogor - Katalog produk",urls:"https://zmbpediabogor.store/product",gam:l}),e.push({id:n,nama:o,gambar:s,harga:i,typea:u,stok:c})}if(e.length){var d=e.slice(this.state.offset,this.state.offset+this.state.perPage).map((function(e){return N("div",{className:"col-12 col-sm-6 col-lg-4 featureCol mb-7"},N("div",{className:"border"},N("div",{className:"imgHolder position-relative w-100 overflow-hidden"},N("img",{src:e.gambar,style:{height:"300px",objectFit:"cover",width:"100%"},id:"wax-img",alt:e.namaproduk,className:"img-fluid"})),N("div",{className:"text-center py-5 px-4"},N("span",{className:"title d-block mb-2"},N(y.a,{href:"/produk/[id]/[product]",as:"/produk/".concat(e.id,"/").concat(e.nama.replace(/\s/g,"-"))},N("a",null," ",O(e.nama)))),N("span",{className:"price d-block fwEbold"},e.harga),e.stok?N("span",{class:"hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8 ups"},"Tersedia"):N("span",{class:"hotOffer fwEbold text-uppercase text-white position-absolute d-block ml-8 abs"},"Stok habis"))))}));this.setState({pageCount:Math.ceil(e.length/this.state.perPage),postData:d})}else this.setState({ada:"no"})}},{key:"render",value:function(){this.state.currentPage;return N(h.a.Fragment,null,N(f.a,null,N("style",{dangerouslySetInnerHTML:{__html:x()("\n  .border{  border: 1px solid #dee2e6!important}\n  .overl{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgba(255,255,255, .8);\n          }\n.productTextHolder .price {\n    font-size: 15px;\n    margin-top:20px;\n    }\n          .featureCol .price {\n    font-size: 13px;\n    line-height: 18px;\n    color: #16941a;\n}\n.featureCol .hotOffer {\n    background: #5ba515;\n    top: 30px;\n    left: 0;\n    margin-left: 0 !important;\n}\n.featureCol .hotOffer.ups {\n      top: 23px !important;\n}\n.featureCol .hotOffer.abs {\n  background:#f9861f !important;\n}\n          ")}}),N(w.a,{title:"zmbpediabogor - Katalog produk",description:"Toko aneka macam tanaman hias",canonical:"https://zmbpediabogor.store/produk",openGraph:{url:"https://zmbpediabogor.store/produk",title:"zmbpediabogor - Katalog produk",description:"Toko aneka macam tanaman hias",images:[{url:"https://zmbpediabogor.store/assets/img/logo.png",width:600,height:315,alt:"zmbpediabogor"}],site_name:"zmbpediabogor"}}),N("section",{className:"introBannerHolder d-flex w-100 bgCover",style:{background:"url(".concat(this.props.gambarnya,")"),backgroundSize:"cover",backgroundPosition:"center"}},N("div",{className:"overl"}),N("div",{class:"container"},N("div",{class:"row"},N("div",{class:"col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center"},N("h1",{class:"headingIV fwEbold playfair mb-4"},"Katalog"),N("ul",{class:"list-unstyled breadCrumbs d-flex justify-content-center"},N("li",{class:"mr-2"},N(y.a,{href:"/",to:"/"},N("a",null,"Beranda"))),N("li",{class:"mr-2"},"/"),N("li",{class:"active"},"Katalog")))))),N("div",{class:"twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4"},N("div",{class:"row"},N("div",{class:"col-12 col-lg-12 order-lg-3"},N("article",{id:"content"},N("div",{class:"row"},this.state.postData,N("div",{class:"col-12 pt-3 mb-lg-0 mb-md-6 mb-3"},N(C.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))))))))}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(n.a.mark((function e(){var a,t,r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://zmbpediabogor.store/api/catalogdata");case 2:return a=e.sent,e.next=5,a.json();case 5:if(t=e.sent,r="",o="",!t.data.length){e.next=15;break}return e.next=11,t.ogimg;case 11:return r=e.sent,e.next=14,t.alt;case 14:o=e.sent;case 15:return e.abrupt("return",{show:t,gambarnya:r,altgam:o});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),t}(h.a.Component)},vdJP:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/produk",function(){return t("p2U1")}])}},[["vdJP",1,2,0,3,4]]]);