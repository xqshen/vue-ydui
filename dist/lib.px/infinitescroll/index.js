/*! vue-ydui v0.5.3 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.ydui=t(require("Vue")):e.ydui=t(e.Vue)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.InfiniteScroll=void 0;var i=n(56),s=o(i);t.InfiniteScroll=s.default},1:function(e,t){e.exports=function(e,t,n,o){var i,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,s=e.default);var c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),o){var u=c.computed||(c.computed={});Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}})}return{esModule:i,exports:s,options:c}}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},s=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,i=t.getBoundingClientRect().top-o,s=i+t.offsetHeight;return i>=0&&i<n||s>0&&s<=n},r=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},c=function(e,t){r(e,t)||(e.className=""==e.className?t:e.className+" "+t)},u=function(e,t){if(r(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=o,t.getScrollview=i,t.checkInview=s,t.addClass=c,t.removeClass=u},8:function(t,n){t.exports=e},56:function(e,t,n){var o=n(1)(n(175),n(126),null,null);e.exports=o.exports},126:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("list"),e._v(" "),n("div",{ref:"tag"}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&e.isDone,expression:"!isLoading && isDone"}],staticClass:"list-donetip"},[e._t("doneTip",[e._v("没有更多数据了")])],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"list-loading"},[e._t("loadingTip",[e._v("加载中")])],2)],2)},staticRenderFns:[]}},175:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),s=(o(i),n(5));t.default={name:"yd-infinitescroll",data:function(){return{isLoading:!1,isDone:!1}},props:{onInfinite:{type:Function,required:!0}},methods:{init:function(){var e=this;this.scrollview=(0,s.getScrollview)(this.$el),this.scrollview.addEventListener("scroll",function(){e.throttle(e.scrollHandler)}),this.$on("ydui.infinitescroll.loadedDone",function(){e.isLoading=!1,e.isDone=!0}),this.$on("ydui.infinitescroll.finishLoad",function(){e.isLoading=!1})},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var e=this.scrollview,t=e==window?document.body.offsetHeight:e.offsetHeight,n=e==window?0:e.getBoundingClientRect().top;this.$refs.tag.getBoundingClientRect().top<=n+t+t/10&&(this.isLoading=!0,this.onInfinite())}},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},100)}},mounted:function(){this.$nextTick(this.init)},destroyed:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler)}}}})});