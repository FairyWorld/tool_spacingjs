// ==UserScript==
// @name         Spacing JS
// @version      1.0.9
// @description  Measure the spacing between elements on webpage. Hold down Alt (Windows) / Option (Mac) key, and move the cursor.
// @author       contact@stevenlei.com
// @namespace    stevenlei
// @grant        none
// @run-at       document-start
// @include      *://*
// ==/UserScript==

/*!
 * Spacing.js v1.0.9
 * Copyright (c) 2021-2024 Steven Lei
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Spacing=e():t.Spacing=e()}(this,(()=>(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,n(i.key),i)}}function n(t){var o=function(t,o){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,o||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}(t,"string");return"symbol"==e(o)?o:o+""}var i=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.top=e.top,this.left=e.left,this.width=e.width,this.height=e.height,this.right=e.right,this.bottom=e.bottom},(e=[{key:"colliding",value:function(t){return!(this.top>t.bottom||this.right<t.left||this.bottom<t.top||this.left>t.right)}},{key:"containing",value:function(t){return this.left<=t.left&&t.left<this.width&&this.top<=t.top&&t.top<this.height}},{key:"inside",value:function(t){return t.top<=this.top&&this.top<=t.bottom&&t.top<=this.bottom&&this.bottom<=t.bottom&&t.left<=this.left&&this.left<=t.right&&t.left<=this.right&&this.right<=t.right}}])&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n}();function r(t,e,o){var n=e.getBoundingClientRect(),i=n.width,r=n.height,l=n.top,a=n.left,s=window.getComputedStyle(e).fontSize,c=document.createElement("div");c.classList.add("spacing-js-".concat(t,"-placeholder")),c.style.border="2px solid ".concat(o),c.style.position="fixed",c.style.background="none",c.style.borderRadius="2px",c.style.padding="0",c.style.margin="0",c.style.width="".concat(i-2,"px"),c.style.height="".concat(r-2,"px"),c.style.top="".concat(l-1,"px"),c.style.left="".concat(a-1,"px"),c.style.pointerEvents="none",c.style.zIndex="9999",c.style.boxSizing="content-box",document.body.appendChild(c);var d=document.createElement("span");d.style.background=o,d.style.position="fixed",d.style.display="inline-block",d.style.color="#fff",d.style.padding="2px 4px",d.style.fontSize="10px";var h="",p=l;l<20?(l<0&&(p=0,h="↑ "),d.style.borderRadius="2px 0 2px 0"):(d.style.transform="translateY(calc(-100% + 2px))",d.style.borderRadius="2px 2px 0 0"),d.style.top="".concat(p-1,"px"),d.style.left="".concat(a-1,"px"),d.innerText="".concat(h," ").concat(Math.round(i),"px × ").concat(Math.round(r),"px [").concat(s?"font-size: ".concat(s,"]"):""),c.appendChild(d)}function l(t){var e;null===(e=document.querySelector(".spacing-js-".concat(t,"-placeholder")))||void 0===e||e.remove()}function a(t,e,o,n,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"none",l=document.createElement("span");l.style.backgroundColor="red",l.style.position="fixed",l.classList.add("spacing-js-marker"),l.style.width="".concat(t,"px"),l.style.height="".concat(e,"px"),"x"===r&&(l.style.borderLeft="1px solid rgba(255, 255, 255, .8)",l.style.borderRight="1px solid rgba(255, 255, 255, .8)"),"y"===r&&(l.style.borderTop="1px solid rgba(255, 255, 255, .8)",l.style.borderBottom="1px solid rgba(255, 255, 255, .8)"),l.style.pointerEvents="none",l.style.top="".concat(o,"px"),l.style.left="".concat(n,"px"),l.style.zIndex="9998",l.style.boxSizing="content-box";var a=document.createElement("span");if(a.classList.add("spacing-js-value"),a.style.backgroundColor="red",a.style.color="white",a.style.fontSize="10px",a.style.display="inline-block",a.style.fontFamily="Helvetica, sans-serif",a.style.fontWeight="bold",a.style.borderRadius="20px",a.style.position="fixed",a.style.width="42px",a.style.lineHeight="15px",a.style.height="16px",a.style.textAlign="center",a.style.zIndex="10000",a.style.pointerEvents="none",a.innerText=i,a.style.boxSizing="content-box","x"===r){var s=o+e/2-7;s>document.documentElement.clientHeight-20&&(s=document.documentElement.clientHeight-20),s<0&&(s=6),a.style.top="".concat(s,"px"),a.style.left="".concat(n+6,"px")}else if("y"===r){var c=n+t/2-20;c>document.documentElement.clientWidth-48&&(c=document.documentElement.clientWidth-48),c<0&&(c=6),a.style.top="".concat(o+6,"px"),a.style.left="".concat(c,"px")}document.body.appendChild(l),document.body.appendChild(a)}function s(t,e,o,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("top"===o){var r=Math.abs(t.top-e.top),l=Math.floor((Math.min(t.right,e.right)+Math.max(t.left,e.left))/2),s=Math.min(t.top,e.top);if(i){if(t.top<e.top)return;if(t.right<e.left||t.left>e.right)return;r=Math.abs(e.bottom-t.top),s=Math.min(e.bottom,t.top)}a(1,r,s,l,n,"x")}else if("left"===o){var c=Math.abs(t.left-e.left),d=Math.floor((Math.min(t.bottom,e.bottom)+Math.max(t.top,e.top))/2),h=Math.min(t.left,e.left);if(i){if(t.left<e.left)return;if(t.bottom<e.top||t.top>e.bottom)return;c=Math.abs(t.left-e.right),h=Math.min(e.right,t.left)}a(c,1,d,h,n,"y")}else if("right"===o){var p=Math.abs(t.right-e.right),f=Math.floor((Math.min(t.bottom,e.bottom)+Math.max(t.top,e.top))/2),u=Math.min(t.right,e.right);if(i){if(t.left>e.right)return;if(t.bottom<e.top||t.top>e.bottom)return;p=Math.abs(t.right-e.left)}a(p,1,f,u,n,"y")}else if("bottom"===o){var m=Math.abs(t.bottom-e.bottom),y=Math.min(t.bottom,e.bottom),b=Math.floor((Math.min(t.right,e.right)+Math.max(t.left,e.left))/2);if(i){if(e.bottom<t.top)return;if(t.right<e.left||t.left>e.right)return;m=Math.abs(t.bottom-e.top)}a(1,m,y,b,n,"x")}}function c(){document.querySelectorAll(".spacing-js-marker").forEach((function(t){t.remove()})),document.querySelectorAll(".spacing-js-value").forEach((function(t){t.remove()}))}var d,h,p=!1,f=null,u=!1,m=null,y=!1;function b(t){u&&(x(),m&&(clearTimeout(m),m=null)),"Alt"===t.key&&(t.preventDefault(),y=!0,!p&&f&&(p=!0,f&&f!==d&&(d=f,l("selected"),r("selected",d,"red")),M(!0))),t.shiftKey&&(u=!0)}function g(t){"Alt"===t.key&&(y=!1,p&&(m=setTimeout((function(){x()}),u?3e3:0)))}function v(t){var e=t.relatedTarget;y||e&&"HTML"!==e.nodeName||(f=null,x())}function x(){p=!1,l("selected"),l("target"),u=!1,d=null,h=null,c(),M(!1)}function w(t){f=t.composedPath?t.composedPath()[0]:t.target,p&&new Promise((function(t,e){p&&f&&f!==d&&f!==h&&(h=f,l("target"),r("target",h,"blue"),t())})).then((function(){if(null!=d&&null!=h){var t,e,o,n,r,l=d.getBoundingClientRect(),a=h.getBoundingClientRect(),p=new i(l),f=new i(a);c(),p.containing(f)||p.inside(f)||p.colliding(f)?(t=Math.round(Math.abs(l.top-a.top)),e=Math.round(Math.abs(l.bottom-a.bottom)),o=Math.round(Math.abs(l.left-a.left)),n=Math.round(Math.abs(l.right-a.right)),r=!1):(t=Math.round(Math.abs(l.top-a.bottom)),e=Math.round(Math.abs(l.bottom-a.top)),o=Math.round(Math.abs(l.left-a.right)),n=Math.round(Math.abs(l.right-a.left)),r=!0),s(p,f,"top","".concat(t,"px"),r),s(p,f,"bottom","".concat(e,"px"),r),s(p,f,"left","".concat(o,"px"),r),s(p,f,"right","".concat(n,"px"),r)}}))}function M(t){t?(window.addEventListener("DOMMouseScroll",E,!1),window.addEventListener("wheel",E,{passive:!1}),window.addEventListener("mousewheel",E,{passive:!1})):(window.removeEventListener("DOMMouseScroll",E),window.removeEventListener("wheel",E),window.removeEventListener("mousewheel",E))}function E(t){t.preventDefault()}return{start:function(){document.body?(window.addEventListener("keydown",b),window.addEventListener("keyup",g),window.addEventListener("mousemove",w),window.addEventListener("mouseout",v)):console.warn("Unable to initialise, document.body does not exist.")},stop:function(){window.removeEventListener("keydown",b),window.removeEventListener("keyup",g),window.removeEventListener("mousemove",w)}}.start(),t=t.default})()));