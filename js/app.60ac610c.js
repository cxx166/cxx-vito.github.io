(function(){var e={8433:function(e,t,n){"use strict";var a=n(2140),o=n.n(a),r=n(7881),u=n.n(r),i=n(6830),l=n.n(i),s=n(3959),d=n.n(s),c=n(2244),m=n.n(c),f=n(7342),p=n.n(f),h=n(8037),g=n.n(h),v=n(2572),y=n.n(v),b=n(5981),k=n.n(b),x=n(1168),w=n.n(x),O=n(8319),B=n.n(O),M=n(3256),S=n.n(M),T=n(107),C=n.n(T),U=n(4889),N=n.n(U),E=n(3480),R=n.n(E),j=n(2086),L=n.n(j),_=n(4514),Z=n.n(_),A=n(5583),D=n.n(A),P=n(9371),J=n.n(P),$=n(4438),F=n.n($),I=n(6213),q=n.n(I),H=n(4327),K=n.n(H),z=n(7796),G=n.n(z),Q=n(2969),V=n.n(Q),W=n(5436),X=n.n(W),Y=n(923),ee=n.n(Y),te=n(8172),ne=n.n(te),ae=n(1393),oe=n.n(ae),re=n(3729),ue=n.n(re),ie=n(1407),le=n.n(ie),se=n(8192),de=n.n(se),ce=n(1540),me=n.n(ce),fe=n(6369),pe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},he=[],ge={name:"App",components:{}},ve=ge,ye=n(1001),be=(0,ye.Z)(ve,pe,he,!1,null,null,null),ke=be.exports,xe=n(2631);fe["default"].use(xe.Z);const we=[{path:"/",name:"Main",component:()=>n.e(694).then(n.bind(n,649)),redirect:"/home",children:[]},{path:"/login",name:"login",component:()=>n.e(145).then(n.bind(n,6145))}],Oe=new xe.Z({mode:"history",routes:we});var Be=Oe,Me=n(3822),Se=n(680),Te={state:{isCollapse:!1,tabsList:[{path:"/",name:"home",label:"首页",icon:"home"}],currentMenu:null,menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if("home"!==t.name){e.currentMenu=t;const n=e.tabsList.findIndex((e=>e.name===t.name));-1===n?e.tabsList.push(t):e.currentMenu=null}},closeTag(e,t){const n=e.tabsList.findIndex((e=>e.name===t.name));e.tabsList.splice(n,1)},setMenu(e,t){e.menu=t,Se.Z.set("menu",JSON.stringify(t))},clearMenu(e){e.menu=[],Se.Z.remove("menu")},addMenu(e,t){if(!Se.Z.get("menu"))return;const a=JSON.parse(Se.Z.get("menu"));e.menu=a;const o=[];a.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>n(6968)(`./${e.url}`),e))),o.push(...e.children)):(e.component=()=>n(6968)(`./${e.url}`),o.push(e))})),o.forEach((e=>{t.addRoute("Main",e)})),console.log(o,"menuArray")}}},Ce={state:{token:""},mutations:{setToken(e,t){e.token=t,Se.Z.set("token",t)},clearToken(e){e.token="",Se.Z.remove("token")},getToken(e){e.token=e.token||Se.Z.get("token")}}};fe["default"].use(Me.ZP);var Ue=new Me.ZP.Store({modules:{tab:Te,user:Ce}}),Ne=n(6265),Ee=n.n(Ne),Re=n(7634),je=n.n(Re);let Le=[];var _e={getStatisticalData:()=>{for(let e=0;e<7;e++)Le.push(je().mock({"苹果":je().Random.float(100,8e3,0,0),vivo:je().Random.float(100,8e3,0,0),oppo:je().Random.float(100,8e3,0,0),"魅族":je().Random.float(100,8e3,0,0),"小米":je().Random.float(100,8e3,0,0),"三星":je().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2990},{name:"苹果",value:5990},{name:"vivo",value:2990},{name:"魅族",value:2990},{name:"vivo",value:2990},{name:"oppo",value:2990},{name:"三星",value:2990}],userData:[{data:"周一",new:5,active:200},{data:"周二",new:10,active:200},{data:"周三",new:12,active:500},{data:"周四",new:60,active:800},{data:"周五",new:5,active:200},{data:"周六",new:52,active:200},{data:"周天",new:5,active:200}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Le},tableData:[{name:"oppo",todayBuy:100,monthBuy:300,totalBuy:800},{name:"vivo",todayBuy:100,monthBuy:300,totalBuy:800},{name:"苹果",todayBuy:100,monthBuy:300,totalBuy:800},{name:"三星",todayBuy:100,monthBuy:300,totalBuy:800},{name:"小米",todayBuy:100,monthBuy:300,totalBuy:800},{name:"魅族",todayBuy:100,monthBuy:300,totalBuy:800}]}}}};function Ze(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let Ae=[];const De=200;for(let $e=0;$e<De;$e++)Ae.push(je().mock({id:je().Random.guid(),name:je().Random.cname(),addr:je().mock("@county(true)"),"age|18-60":1,birth:je().Random.date(),sex:je().Random.integer(0,1)}));var Pe={getUserList:e=>{const{name:t,page:n=1,limit:a=20}=Ze(e.url);console.log("name:"+t,"page:"+n,"分页大小limit:"+a);const o=Ae.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=o.filter(((e,t)=>t<a*n&&t>=a*(n-1)));return{code:2e4,count:o.length,list:r}},createUser:e=>{const{name:t,addr:n,age:a,birth:o,sex:r}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),Ae.unshift({id:je().Random.guid(),name:t,addr:n,age:a,birth:o,sex:r}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=Ze(e.url);return t?(Ae=Ae.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=Ze(e.url);return t=t.split(","),Ae=Ae.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:n,addr:a,age:o,birth:r,sex:u}=JSON.parse(e.body),i=parseInt(u);return Ae.some((e=>{if(e.id===t)return e.name=n,e.addr=a,e.age=o,e.birth=r,e.sex=i,!0})),{code:2e4,data:{message:"编辑成功"}}}},Je={getMenu:e=>{console.log(e);const{username:t,password:n}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),"admin"===t&&"admin"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"home/index"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"mall/index"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User/index"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"other/pageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"other/pageTwo.vue"}]}],token:je().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"home/index"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"mall/index"}],token:je().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};je().mock("/home/getData",_e.getStatisticalData),je().mock(/user\/getUser/,"get",Pe.getUserList),je().mock(/permission\/getMenu/,"post",Je.getMenu),je().mock(/user\/add/,"post",Pe.createUser),je().mock(/user\/edit/,"post",Pe.updateUser),je().mock(/user\/del/,"get",Pe.deleteUser),fe["default"].config.productionTip=!1,fe["default"].use(me()),fe["default"].use(de()),fe["default"].use(le()),fe["default"].use(ue()),fe["default"].use(oe()),fe["default"].use(ne()),fe["default"].use(ee()),fe["default"].use(X()),fe["default"].use(V()),fe["default"].use(G()),fe["default"].use(K()),fe["default"].use(q()),fe["default"].use(F()),fe["default"].use(J()),fe["default"].use(D()),fe["default"].use(Z()),fe["default"].use(L()),fe["default"].use(R()),fe["default"].use(N()),fe["default"].use(C()),fe["default"].use(S()),fe["default"].use(B()),fe["default"].use(w()),fe["default"].use(k()),fe["default"].use(y()),fe["default"].use(g()),fe["default"].use(p()),fe["default"].use(m()),fe["default"].use(d()),fe["default"].use(l()),fe["default"].use(u()),fe["default"].use(o()),Be.beforeEach(((e,t,n)=>{Ue.commit("getToken");const a=Ue.state.user.token;a||"login"===e.name?a&&"login"===e.name?n({name:"home"}):n():n({name:"login"})})),fe["default"].prototype.$http=Ee(),fe["default"].prototype.$confirm=u().confirm,fe["default"].prototype.$message=o(),new fe["default"]({store:Ue,router:Be,render:e=>e(ke),created(){Ue.commit("addMenu",Be)}}).$mount("#app")},6968:function(e,t,n){var a={"./Main":[649,694],"./Main.vue":[649,694],"./User":[2272,272],"./User/":[2272,272],"./User/index":[2272,272],"./User/index.vue":[2272,272],"./home":[6767,767],"./home/":[6767,767],"./home/index":[6767,767],"./home/index.vue":[6767,767],"./login":[6145,145],"./login/":[6145,145],"./login/index":[6145,145],"./login/index.vue":[6145,145],"./mall":[3790,790],"./mall/":[3790,790],"./mall/index":[3790,790],"./mall/index.vue":[3790,790],"./other/pageOne":[2110,110],"./other/pageOne.vue":[2110,110],"./other/pageTwo":[1107,107],"./other/pageTwo.vue":[1107,107]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id=6968,e.exports=o}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var u=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||u>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<u&&(u=r));if(i){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{107:"74d0678d",110:"9ff02e1c",145:"0eb9a733",272:"aa69daad",694:"74f77b2b",767:"6301aed6",790:"c555c6d1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{145:"2a119e61",272:"48962f03",694:"91836ddd"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-manage:";n.l=function(a,o,r,u){if(e[a])e[a].push(o);else{var i,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){i=c;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=a),e[a]=[o];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=i,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){o=u[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var u=n.miniCssF(a),i=n.p+u;if(t(u,i))return o();e(a,i,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={145:1,272:1,694:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var u=n.p+n.u(t),i=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",i.name="ChunkLoadError",i.type=r,i.request=u,o[1](i)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,u=a[0],i=a[1],l=a[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var d=l(n)}for(t&&t(a);s<u.length;s++)r=u[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8433)}));a=n.O(a)})();
//# sourceMappingURL=app.60ac610c.js.map