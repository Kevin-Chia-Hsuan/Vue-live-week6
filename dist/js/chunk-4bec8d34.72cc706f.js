(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),c=n("2d00"),a=r("species");e.exports=function(e){return c>=51||!o((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,n){"use strict";var o=n("c04e"),r=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var a=o(t);a in e?r.f(e,a,c(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("d039"),c=n("e8b5"),a=n("861d"),s=n("7b0b"),i=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),p=n("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",w=p>=51||!r((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=l("concat"),j=function(e){if(!a(e))return!1;var t=e[b];return void 0!==t?!!t:c(e)},O=!w||!v;o({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,o,r,c,a=s(this),l=d(a,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(c=-1===t?a:arguments[t],j(c)){if(r=i(c.length),f+r>h)throw TypeError(m);for(n=0;n<r;n++,f++)n in c&&u(l,f,c[n])}else{if(f>=h)throw TypeError(m);u(l,f++,c)}return l.length=f,l}})},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"container"},c={class:"row justify-content-center"},a=Object(o["h"])("h1",{class:"h3 mt-3 mb-3 font-weight-normal"}," 請先登入 ",-1),s={class:"col-8"},i={class:"form-floating mb-3"},u=Object(o["h"])("label",{for:"username"},"使用者名稱",-1),d={class:"form-floating"},l=Object(o["h"])("label",{for:"password"},"使用者密碼",-1),f=Object(o["h"])("button",{class:"btn btn-lg btn-primary w-100 mt-3",id:"login",type:"submit"}," 登入 ",-1),p=Object(o["h"])("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1);function b(e,t,n,b,h,m){return Object(o["t"])(),Object(o["d"])("div",r,[Object(o["h"])("div",c,[a,Object(o["h"])("div",s,[Object(o["h"])("form",{id:"form",class:"form-signin",onSubmit:t[3]||(t[3]=Object(o["K"])((function(){return m.login&&m.login.apply(m,arguments)}),["prevent"]))},[Object(o["h"])("div",i,[Object(o["J"])(Object(o["h"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.user.username=e}),class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[o["F"],h.user.username]]),u]),Object(o["h"])("div",d,[Object(o["J"])(Object(o["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return h.user.password=e}),class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[o["F"],h.user.password]]),l]),f],32)])]),p])}n("99af");var h=n("1940"),m=n.n(h),w={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var n=t.data,o=n.token,r=n.expired;console.log(o,r),document.cookie="hexToken=".concat(o,";expired=").concat(new Date(r),"; path=/"),e.$router.push("/admin/products")}else m()("出錯了!","登入失敗，請檢查帳號、密碼","error"),e.user.password=""})).catch((function(e){console.log(e)}))}},created:function(){}};w.render=b;t["default"]=w}}]);
//# sourceMappingURL=chunk-4bec8d34.72cc706f.js.map