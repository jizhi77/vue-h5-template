(function(e){function t(t){for(var a,r,u=t[0],i=t[1],s=t[2],l=0,m=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return i.p+"static/js/"+({home:"home",message:"message",my:"my"}[e]||e)+"."+{"chunk-18f3a005":"b30d071e","chunk-4f92b250":"b94f1d7d","chunk-bda4dd16":"29d0ac0a",home:"1adbc5f7",message:"bba2e094",my:"74079ec1"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-18f3a005":1,"chunk-4f92b250":1,"chunk-bda4dd16":1,home:1,message:1,my:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="static/css/"+({home:"home",message:"message",my:"my"}[e]||e)+"."+{"chunk-18f3a005":"170f17f4","chunk-4f92b250":"2b61e5cd","chunk-bda4dd16":"38e3b6a1",home:"eafa9c1a",message:"178ba4c6",my:"ed8114a5"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var m=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u=n("2877"),i={},s=Object(u["a"])(i,o,c,!1,null,null,null),l=s.exports,m=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-layout-wrap"},[n("router-view"),e.$route.fullPath.includes("active")?e._e():n("van-tabbar",{attrs:{"safe-area-inset-bottom":""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{replace:"",to:"/",name:"home",icon:"home-o"}},[n("span",[e._v("主页")])]),n("van-tabbar-item",{attrs:{replace:"",to:"/message",name:"message",badge:"5",icon:"chat-o"}},[n("span",[e._v("消息")])]),n("van-tabbar-item",{attrs:{replace:"",to:"/my",name:"my",icon:"contact"}},[n("span",[e._v("我的信息")])])],1)],1)},f=[],p=(n("b0c0"),n("ac1f"),n("5319"),n("ade3")),h=(n("4627"),n("2ed4")),b=(n("1318"),n("ac28")),v={name:"Layout",components:(a={},Object(p["a"])(a,b["a"].name,b["a"]),Object(p["a"])(a,h["a"].name,h["a"]),a),data:function(){return{active:"home"}},watch:{$route:function(){this.active=this.$route.fullPath.replace("/",""),""===this.active&&(this.active="home")}},mounted:function(){document.body.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1})}},g=v,y=Object(u["a"])(g,d,f,!1,null,null,null),w=y.exports,k={path:"/my",component:w,children:[{path:"",component:function(){return n.e("my").then(n.bind(null,"9639"))},meta:{title:"我的"}},{path:"message",name:"myMessage",component:function(){return n.e("chunk-18f3a005").then(n.bind(null,"65fd"))},meta:{title:"我的信息"}},{path:"upload-face",name:"myUploadFace",component:function(){return n.e("chunk-bda4dd16").then(n.bind(null,"2d79"))},meta:{title:" 上传人脸"}}]},_={path:"/message",component:w,children:[{path:"",component:function(){return n.e("message").then(n.bind(null,"1d11"))},meta:{title:"消息主页"}}]};r["a"].use(m["a"]);var O=[{path:"/",name:"Home",component:w,children:[{path:"",component:function(){return n.e("home").then(n.bind(null,"bb51"))}}]},k,_,{path:"*",name:"NotFound",component:function(){return n.e("chunk-4f92b250").then(n.bind(null,"8cdb"))}}],j=new m["a"]({routes:O}),E=j,P=n("2f62");r["a"].use(P["a"]);var x=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:E,store:x,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.afa560f6.js.map