(function(n){function e(e){for(var r,u,a=e[0],d=e[1],i=e[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r]);h&&h(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,u=1;u<t.length;u++){var d=t[u];0!==c[d]&&(r=!1)}r&&(o.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},c={app:0},o=[];function u(n){return a.p+"js/"+({}[n]||n)+"."+{"chunk-1ed5bd12":"2a3c57d9","chunk-2d0ac39a":"4846854f","chunk-06a5a03a":"de7af160","chunk-1830dc1e":"7f7ba29e","chunk-4bec8d34":"72cc706f","chunk-5a13aae2":"62c67910","chunk-68d358d4":"9d5c7993","chunk-dd2262c0":"c2952e80","chunk-2d0c89f3":"969ecec4","chunk-2d229860":"fd1cd2bc","chunk-2d22d746":"1f264c86"}[n]+".js"}function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(n){var e=[],t=c[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=c[n]=[e,r]}));e.push(t[2]=r);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(n);var i=new Error;o=function(e){d.onerror=d.onload=null,clearTimeout(l);var t=c[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,t[1](i)}c[n]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(e)},a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/Vue-live-week6/dist/",a.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var h=i;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),c=t("bc3a"),o=t.n(c),u=t("2106"),a=t.n(u),d=t("7bb1"),i=t("3aa8"),l=t("cbdf"),h=t("9457");function p(n,e){var t=Object(r["y"])("router-view");return Object(r["t"])(),Object(r["d"])(t)}t("bc53");const f={};f.render=p;var s=f,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),m=[{path:"/",component:function(){return t.e("chunk-2d229860").then(t.bind(null,"de8a"))},children:[{path:"index",component:function(){return t.e("chunk-1ed5bd12").then(t.bind(null,"d504"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-2d0ac39a"),t.e("chunk-5a13aae2")]).then(t.bind(null,"e6dc"))}},{path:"product/:id",component:function(){return Promise.all([t.e("chunk-2d0ac39a"),t.e("chunk-68d358d4")]).then(t.bind(null,"d2f1"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"cart",component:function(){return Promise.all([t.e("chunk-2d0ac39a"),t.e("chunk-1830dc1e")]).then(t.bind(null,"b789"))}},{path:"login",component:function(){return Promise.all([t.e("chunk-2d0ac39a"),t.e("chunk-4bec8d34")]).then(t.bind(null,"a55b"))}}]},{path:"/admin",component:function(){return Promise.all([t.e("chunk-2d0ac39a"),t.e("chunk-dd2262c0")]).then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-2d0ac39a"),t.e("chunk-06a5a03a")]).then(t.bind(null,"d416"))}},{path:"orders",component:function(){return t.e("chunk-2d0c89f3").then(t.bind(null,"5651"))}}]}],k=Object(b["a"])({history:Object(b["b"])(),routes:m}),v=k;Object.keys(i["a"]).forEach((function(n){Object(d["e"])(n,i["a"][n])})),Object(d["d"])({generateMessage:Object(l["a"])({zh_TW:h}),validateOnInput:!0}),Object(l["b"])("zh_TW");var y=Object(r["c"])(s);y.component("Form",d["c"]),y.component("Field",d["b"]),y.component("ErrorMessage",d["a"]),y.use(a.a,o.a),y.use(v),y.mount("#app")},"973d":function(n,e,t){},bc53:function(n,e,t){"use strict";t("973d")}});
//# sourceMappingURL=app.2aa49918.js.map