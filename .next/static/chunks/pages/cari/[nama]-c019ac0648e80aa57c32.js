_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"7as6":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return k}));var a=e("o0o1"),r=e.n(a),o=e("HaE+"),i=e("1OyB"),c=e("vuIU"),s=e("Ji7U"),u=e("md7G"),l=e("foSv"),p=e("CafY"),d=e("vcXL"),f=e.n(d),g=e("q1tI"),m=e.n(g),h=e("YFqc"),b=e.n(h),v=e("IeuQ"),x=e.n(v),y=e("9ixD"),_=m.a.createElement;function w(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,a=Object(l.a)(n);if(t){var r=Object(l.a)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return Object(u.a)(this,e)}}var k=function(n){Object(s.a)(e,n);var t=w(e);function e(){var n;return Object(i.a)(this,e),(n=t.call(this)).state={imageIndex:0,about:[],img:""},n}return Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return _(p.a,null,_(y.a,{title:"Plant29 - Search Result Page",description:"Best place to find some decorative plants",canonical:this.props.cro,openGraph:{url:this.props.cro,title:"Plant29 - Search Result Page",description:"Find some best decorative plants in our catalog product",site_name:"plant29"}}),_("style",{dangerouslySetInnerHTML:{__html:x()("\n.product-gallery__image {\n        width: 100%;\n        height:500px;\n       border-radius: 100%;\n}\n.product-gallery__large-image {\n  padding-left:0px !important;\n}\n\n.listname li {\n  padding-top: 20px;\n}\n .product-main-details {\n  margin-left: 0;\n }\n.breadcrumb {\n    background-color: none !important;\n}\n .breadcrumb li {\n    font-size: 15px;\n\n }\n .higlight {\n \tbackground-color: yellow;\n \tpadding: 3px;\n }\n .img {\n \twidth:100px;\n \theight: 100px;\n \tborder-radius: 5px;\n \tposition: relative;\n }\n .cont {\nposition: relative;\nmargin-top: 30px;\nmargin-bottom: 30px;\n }\n .textname{\n \t    position: absolute;\n    top: 0;\n    left: 150px;\n    font-size: 15px;\n    font-weight: 700;\n    margin-bottom: 5px;\n }\n .pa {\n \tpadding-top:5px;\n \tmargin-bottom: 0;\n }\n .notfon {\n \t    font-size: 15px;\n    text-align: center;\n    padding-top: 50px;\n    padding-bottom: 50px;\n }\n@media only screen and (max-width: 999px) {\n\n.product-gallery__image {\n    width: 100%;\n    height: 500px;\n    border-radius: 0;\n}\n\n}\n    ")}}),_("section",{class:"page-title-area bg-color","data-bg-color":"#f4f4f4",style:{backgroundColor:"rgb(244, 248, 250)",paddingTop:"150px"}},_("div",{class:"container"},_("div",{class:"row"},_("div",{class:"col-12 text-center"},_("h1",{class:"page-title"},"SEARCH RESULT"),_("ul",{class:"breadcrumb",style:{backgroundColor:"transparent"}},_("li",null,_("a",{href:"/"},"Home")),_("li",{class:"current"},_("span",null,"Search Result"))))))),_("div",{class:"container"},_("div",{class:"row"},_("div",{class:"col-12"},this.props.datas.data.length?"":_("p",{className:"notfon"},"Result Not found Whit keyword"," ",_("b",null,this.props.nama)),this.props.datas.data.map((function(n){return _("div",{className:"cont"},_(b.a,{href:"/product/[id]/[product]",as:"/product/".concat(n.id,"/").concat(n.namaproduks.replace(/\s/g,"-"))},_("a",null,_("div",{className:"img",style:{background:"url(".concat(n.gambar,")"),backgroundSize:"cover",backgroundPosition:"center"}}))),_("div",{className:"textname"},_("div",{dangerouslySetInnerHTML:{__html:n.namaproduk}}),_("p",{className:"pa"},n.deskripsi),_("p",{className:"pa"},n.harga," USD")))}))))))}}],[{key:"getInitialProps",value:function(){var n=Object(o.a)(r.a.mark((function n(t){var e,a,o,i,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,a=e.nama,n.next=4,f()("https://plant29.store/api/caridata/"+a);case 4:return o=n.sent,n.next=7,o.json();case 7:return i=n.sent,c="",i.length&&(c="https://plant29.store/cari/"+this.props.nama),n.abrupt("return",{datas:i,nama:a,cro:c});case 11:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()}]),e}(m.a.Component)},GZXR:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cari/[nama]",function(){return e("7as6")}])},"HaE+":function(n,t,e){"use strict";function a(n,t,e,a,r,o,i){try{var c=n[o](i),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(a,r)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(n){a(i,r,o,c,s,"next",n)}function s(n){a(i,r,o,c,s,"throw",n)}c(void 0)}))}}e.d(t,"a",(function(){return r}))},IeuQ:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return n.replace(/\n/g,"").replace(/\s\s+/g," ")}}},[["GZXR",1,2,0,3,4]]]);