/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}var t,n=function t(n,o){function a(t,a,r){if("undefined"!=typeof document){"number"==typeof(r=e({},o,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in r)r[c]&&(i+="; "+c,!0!==r[c]&&(i+="="+r[c].split(";")[0]));return document.cookie=t+"="+n.write(a,t)+i}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},a=0;a<t.length;a++){var r=t[a].split("="),i=r.slice(1).join("=");try{var c=decodeURIComponent(r[0]);if(o[c]=n.read(i,c),e===c)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){a(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),o={clear:{key:"1",name:"default"},dark:{key:"2",name:"dark"}},a="activeThemeJson";function r(e){Object.values(o).forEach((function(t){e.key==t.key&&e.altKey&&c(t)}))}function i(){var e=JSON.stringify(t);n.set(a,e,{expires:new Date("3000-01-01")})}function c(e){document.body.setAttribute("data-theme",e.name),t=e}const d=function(){document.addEventListener("keyup",r),window.addEventListener("unload",i),function(){var e=n.get(a);if(e)try{c(JSON.parse(e))}catch(e){c(o.clear)}else c(o.clear)}()};let s={attached:[],deAttached:[]};const u=function(){return!("PointerEvent"in window)&&window.navigator,void 0!==window.orientation||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.msMaxTouchPoints||"maxTouchPoints"in window.navigator>1||"msMaxTouchPoints"in window.navigator>1?{type:"touch",start:"touchstart",end:"touchend",cancel:"touchcancel",move:"touchmove"}:{type:"mouse",start:"mousedown",end:"mouseup",cancel:"mouseleave",move:"mousemove"}};function l(e){let t=e.target,n=!1;for(const o in s.attached)if(Object.hasOwnProperty.call(s.attached,o)&&(e.target.matches(s.attached[o])||e.target.closest(s.attached[o]))){n=!0,t=e.target.closest(s.attached[o]);break}for(const e in s.deAttached)if(Object.hasOwnProperty.call(s.deAttached,e)&&t.matches(s.deAttached[e])){n=!1;break}if(!n)return;"static"==getComputedStyle(t).position&&(t.style.position="relative");let o,a=t.getBoundingClientRect(),r=t.querySelectorAll(".ripple-wrap"),i=t.querySelector(".ripple");for(const e in r)Object.hasOwnProperty.call(r,e)&&r[e].parentElement==t&&(o=r[e]);o||(o=document.createElement("span"),o.className="ripple-wrap",t.appendChild(o)),i=document.createElement("span"),i.className="ripple",i.style.height=i.style.width=2*Math.max(a.width,a.height,48)+"px",o.appendChild(i);let c=0,d=0;if(e.pageY&&e.pageX&&(c=e.pageX,d=e.pageY),e.touches)for(const n in e.touches)if(Object.hasOwnProperty.call(e.touches,n)&&(t.contains(e.touches[n].target)||t==e.touches[n].target)){c=e.touches[n].pageX,d=e.touches[n].pageY;break}let l=d-a.top-i.offsetHeight/2-window.pageYOffset,p=c-a.left-i.offsetWidth/2-window.pageXOffset;i.style.top=l+"px",i.style.left=p+"px",i.classList.add("show");let h=!1;i.addEventListener("animationend",(()=>h=!0),{once:!0}),t.style.userSelect="none";let f=!1;const m=()=>{t.style.userSelect="";const e=()=>{f=!0,i.classList.add("removed"),setTimeout((()=>i?.parentElement?.removeChild(i)),1e3)};f||(h&&i.classList.add("removed"),h?e():i.addEventListener("animationend",e,{once:!0}))};return document.addEventListener(u().end,m,{once:!0}),document.addEventListener("dragend",m,{once:!0}),document.addEventListener(u().move,m,{once:!0}),!1}const p=()=>{document.addEventListener(u().start,l)},h=e=>{s.deAttached=s.deAttached.filter((t=>t!==e)),s.attached.push(e)},f=e=>{s.attached=s.attached.filter((t=>t!==e)),s.deAttached.push(e)};window.addEventListener("DOMContentLoaded",(function(){return p(),d(),h(".btn"),h(".waved"),void f(".btn-text")}))})();
//# sourceMappingURL=index.js.map