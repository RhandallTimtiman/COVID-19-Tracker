(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var i=r("fc6a"),n=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):n(i(t))}},"159b":function(t,e,r){var i=r("da84"),n=r("fdbc"),o=r("17c2"),a=r("9112");for(var s in n){var c=i[s],l=c&&c.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(u){l.forEach=o}}},"16ea":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Active Cases")]),t.loading?r("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}):r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.reports.cases).toLocaleString())+" ")]),r("v-list-item-subtitle",[t._v("Number of Active Cases of Corona Virus")])],1),r("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[r("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-plus ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{dark:"",elevation:"5",outlined:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Deaths")]),t.loading?r("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}):r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.reports.deaths).toLocaleString())+" ")]),r("v-list-item-subtitle",[t._v("People died from the Corona Virus")])],1),r("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[r("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-emoticon-dead ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto",attrs:{dark:"",outlined:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Recovered")]),t.loading?r("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}):r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.reports.recovered).toLocaleString())+" ")]),r("v-list-item-subtitle",[t._v("People recovered from Corona Virus")])],1),r("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[r("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-heart ")])],1)],1)],1)],1)],1)],1)},n=[],o={name:"HelloWorld",created:function(){this.fetchCovidResults()},data:function(){return{loading:!1,reports:{cases:0,deaths:0,recovered:0}}},methods:{fetchCovidResults:function(){var t=this;this.loading=!0,this.$axios.get("https://coronavirus-19-api.herokuapp.com/all").then((function(e){t.loading=!1,t.reports=e.data})).catch((function(e){t.loading=!1,console.warn(e)}))}}},a=o,s=r("2877"),c=Object(s["a"])(a,i,n,!1,null,null,null);e["default"]=c.exports},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,n=r("a640"),o=r("ae40"),a=n("forEach"),s=o("forEach");t.exports=a&&s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var i=r("d039"),n=r("b622"),o=r("2d00"),a=n("species");t.exports=function(t){return o>=51||!i((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var i=r("23e7"),n=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(t,e,r){"use strict";var i=r("23e7"),n=r("b727").filter,o=r("1dde"),a=r("ae40"),s=o("filter"),c=a("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"588f":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-combobox",{attrs:{solo:"",loading:t.loading,elevation:"5",color:"info",items:t.countries,label:t.loading?"Fetching Countries....":"Select a Country"},model:{value:t.selectedCountry,callback:function(e){t.selectedCountry=e},expression:"selectedCountry"}})],1),t.selectedCountry?[r("v-col",{attrs:{cols:"12"}},[t.selectedCountry?r("p",{staticClass:"display-1 font-weight-light"},[t._v(" "+t._s(t.selectedCountry.text)+" ")]):t._e()]),r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Total Cases")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.cases).toLocaleString())+" ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-card",{staticClass:"mx-auto",attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Active")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.active).toLocaleString())+" ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-card",{staticClass:"mx-auto",attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Deaths")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.deaths).toLocaleString())+" ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-card",{attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Critical")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.critical).toLocaleString())+" ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-card",{attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Recovered")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.recovered).toLocaleString())+" ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-card",{staticClass:"mb-10",attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Cases Today")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.todayCases).toLocaleString())+" ")])],1)],1)],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-card",{staticClass:"mb-10",attrs:{elevation:"5",outlined:"",dark:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[t._v("Deaths Today")]),r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" "+t._s(Number(t.selectedCountry.todayDeaths).toLocaleString())+" ")])],1)],1)],1)],1)]:t._e()],2)],1)},n=[];r("d81d"),r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={name:"HelloWorld",created:function(){this.fetchCountries()},data:function(){return{loading:!1,countries:[],selectedCountry:null}},methods:{fetchCountries:function(){var t=this;this.loading=!0,this.countries=[],this.$axios.get("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){t.loading=!1,t.countries=e.data.map((function(t){return s({text:t.country,value:t.country},t)}))})).catch((function(t){console.warn(t)}))}}},l=c,u=r("2877"),f=Object(u["a"])(l,i,n,!1,null,null,null);e["default"]=f.exports},"65f0":function(t,e,r){var i=r("861d"),n=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?i(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var i=r("428f"),n=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var i=r("c04e"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=i(e);a in t?n.f(t,a,o(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var i=r("23e7"),n=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),f=r("5135"),v=r("e8b5"),d=r("861d"),b=r("825a"),m=r("7b0b"),h=r("fc6a"),p=r("c04e"),y=r("5c6c"),g=r("7c73"),C=r("df75"),S=r("241c"),O=r("057f"),w=r("7418"),_=r("06cf"),x=r("9bf2"),L=r("d1e7"),j=r("9112"),k=r("6eeb"),P=r("5692"),E=r("f772"),N=r("d012"),T=r("90e3"),A=r("b622"),D=r("e538"),M=r("746f"),R=r("d44e"),V=r("69f3"),G=r("b727").forEach,H=E("hidden"),F="Symbol",J="prototype",$=A("toPrimitive"),z=V.set,I=V.getterFor(F),W=Object[J],B=n.Symbol,q=o("JSON","stringify"),Q=_.f,K=x.f,U=O.f,X=L.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),rt=P("wks"),it=n.QObject,nt=!it||!it[J]||!it[J].findChild,ot=s&&u((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=Q(W,e);i&&delete W[e],K(t,e,r),i&&t!==W&&K(W,e,i)}:K,at=function(t,e){var r=Y[t]=g(B[J]);return z(r,{type:F,tag:t,description:e}),s||(r.description=e),r},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,r){t===W&&ct(Z,e,r),b(t);var i=p(e,!0);return b(r),f(Y,i)?(r.enumerable?(f(t,H)&&t[H][i]&&(t[H][i]=!1),r=g(r,{enumerable:y(0,!1)})):(f(t,H)||K(t,H,y(1,{})),t[H][i]=!0),ot(t,i,r)):K(t,i,r)},lt=function(t,e){b(t);var r=h(e),i=C(r).concat(bt(r));return G(i,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?g(t):lt(g(t),e)},ft=function(t){var e=p(t,!0),r=X.call(this,e);return!(this===W&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,H)&&this[H][e])||r)},vt=function(t,e){var r=h(t),i=p(e,!0);if(r!==W||!f(Y,i)||f(Z,i)){var n=Q(r,i);return!n||!f(Y,i)||f(r,H)&&r[H][i]||(n.enumerable=!0),n}},dt=function(t){var e=U(h(t)),r=[];return G(e,(function(t){f(Y,t)||f(N,t)||r.push(t)})),r},bt=function(t){var e=t===W,r=U(e?Z:h(t)),i=[];return G(r,(function(t){!f(Y,t)||e&&!f(W,t)||i.push(Y[t])})),i};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===W&&r.call(Z,t),f(this,H)&&f(this[H],e)&&(this[H][e]=!1),ot(this,e,y(1,t))};return s&&nt&&ot(W,e,{configurable:!0,set:r}),at(e,t)},k(B[J],"toString",(function(){return I(this).tag})),k(B,"withoutSetter",(function(t){return at(T(t),t)})),L.f=ft,x.f=ct,_.f=vt,S.f=O.f=dt,w.f=bt,D.f=function(t){return at(A(t),t)},s&&(K(B[J],"description",{configurable:!0,get:function(){return I(this).description}}),a||k(W,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),G(C(rt),(function(t){M(t)})),i({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:vt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(m(t))}}),q){var mt=!c||u((function(){var t=B();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));i({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var i,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(i=e,(d(e)||void 0!==t)&&!st(t))return v(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),n[1]=e,q.apply(null,n)}})}B[J][$]||j(B[J],$,B[J].valueOf),R(B,F),N[H]=!0},a640:function(t,e,r){"use strict";var i=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var i=r("83ab"),n=r("d039"),o=r("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var r=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:c,f=o(e,1)?e[1]:void 0;return s[t]=!!r&&!n((function(){if(l&&!i)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,f)}))}},b64b:function(t,e,r){var i=r("23e7"),n=r("7b0b"),o=r("df75"),a=r("d039"),s=a((function(){o(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(t){return o(n(t))}})},b727:function(t,e,r){var i=r("0366"),n=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,v=5==t||f;return function(d,b,m,h){for(var p,y,g=o(d),C=n(g),S=i(b,m,3),O=a(C.length),w=0,_=h||s,x=e?_(d,O):r?_(d,0):void 0;O>w;w++)if((v||w in C)&&(p=C[w],y=S(p,w,g),t))if(e)x[w]=y;else if(y)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:c.call(x,p)}else if(u)return!1;return f?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d81d:function(t,e,r){"use strict";var i=r("23e7"),n=r("b727").map,o=r("1dde"),a=r("ae40"),s=o("map"),c=a("map");i({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,r){var i=r("23e7"),n=r("83ab"),o=r("56ef"),a=r("fc6a"),s=r("06cf"),c=r("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,i=a(t),n=s.f,l=o(i),u={},f=0;while(l.length>f)r=n(i,e=l[f++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var i=r("23e7"),n=r("d039"),o=r("fc6a"),a=r("06cf").f,s=r("83ab"),c=n((function(){a(1)})),l=!s||c;i({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var i=r("b622");e.f=i},e8b5:function(t,e,r){var i=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.1ac829bc.js.map