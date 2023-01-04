(function(){"use strict";var t={7100:function(t,e,r){var n=r(6369),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"w-full my-4"}),e("section",[e("div",{staticClass:"flex"},[e("div",{staticClass:"max-w-xs"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"wallet"}},[t._v("Тикер")]),e("div",{staticClass:"mt-1 relative rounded-md shadow-md"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ticker,expression:"ticker"}],staticClass:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",attrs:{type:"text",name:"wallet",id:"wallet",placeholder:"Например DOGE"},domProps:{value:t.ticker},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.ticker=e.target.value)}}})])])]),e("button",{staticClass:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",attrs:{type:"button"},on:{click:t.add}},[e("svg",{staticClass:"-ml-0.5 mr-2 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"}},[e("path",{attrs:{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}})]),t._v(" Добавить ")])]),t.tickers.length?[e("hr",{staticClass:"w-full border-t border-gray-600 my-4"}),e("dl",{staticClass:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},t._l(t.tickers,(function(r){return e("div",{key:r.name,staticClass:"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer",class:{"border-4":t.sel===r},on:{click:function(e){return t.select(r)}}},[e("div",{staticClass:"px-4 py-5 sm:p-6 text-center"},[e("dt",{staticClass:"text-sm font-medium text-gray-500 truncate"},[t._v(" "+t._s(r.name)+" - USD ")]),e("dd",{staticClass:"mt-1 text-3xl font-semibold text-gray-900"},[t._v(" "+t._s(r.price)+" ")])]),e("div",{staticClass:"w-full border-t border-gray-200"}),e("button",{staticClass:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none",on:{click:function(e){return e.stopPropagation(),t.handleDelete(r)}}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})]),t._v("Удалить ")])])})),0),e("hr",{staticClass:"w-full border-t border-gray-600 my-4"})]:t._e(),t.sel?e("section",{staticClass:"relative"},[e("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900 my-8"},[t._v(" "+t._s(t.sel.name)+" - USD ")]),e("div",{staticClass:"flex items-end border-gray-600 border-b border-l h-64"},t._l(t.normalizeGraph(),(function(t,r){return e("div",{key:r,staticClass:"bg-purple-800 border w-10",style:{height:`${t}%`}})})),0),e("button",{staticClass:"absolute top-0 right-0",attrs:{type:"button"},on:{click:function(e){t.sel=null}}},[e("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76","xml:space":"preserve"}},[e("g",[e("path",{attrs:{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"}})])])])]):t._e()],2)])},i=[],a=(r(7658),{name:"App",data(){return{ticker:"",tickers:[],sel:null,graph:[]}},methods:{add(){const t={name:this.ticker,price:"-"};this.tickers.push(t),setInterval((async()=>{const e=await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${t.name}&tsyms=USD&api_key=ce3fd966e7a1d10d65f907b20bf000552158fd3ed1bd614110baa0ac6cb57a7e`),r=await e.json();this.tickers.find((e=>e.name===t.name)).price=r.USD>1?r.USD.toFixed(2):r.USD.toPrecision(2),this.sel?.name===t.name&&this.graph.push(r.USD)}),1e3),this.ticker=""},select(t){this.sel=t,this.graph=[]},handleDelete(t){this.tickers=this.tickers.filter((e=>e!==t))},normalizeGraph(){const t=Math.max(...this.graph),e=Math.min(...this.graph);return this.graph.map((r=>5+95*(r-e)/(t-e)))}}}),o=a,l=r(1001),c=(0,l.Z)(o,s,i,!1,null,null,null),u=c.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(u)}).$mount("#app")}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,s,i){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],i=t[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(o=!1,i<a&&(a=i));if(o){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,s,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,a=n[0],o=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(l)var u=l(r)}for(e&&e(n);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self["webpackChunkcryptonomicon"]=self["webpackChunkcryptonomicon"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7100)}));n=r.O(n)})();
//# sourceMappingURL=app.7414d9b1.js.map