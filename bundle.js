!function e(t,n,r){function o(a,l){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!l&&c)return c(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("../src/slendr"),i=r(o),a=(0,i["default"])({slideshow:!0,keyboard:!0});a.on("move",function(e,t,n){}),a.on("next",function(e,t){}),a.on("prev",function(e,t){})},{"../src/slendr":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n["default"]=function(){function e(e,t){i.push({name:e,callback:t})}function t(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];i.forEach(function(n,r){n.name===e&&n.callback===t&&i.splice(r,1),n.name!==e||t||i.splice(r,1)})}function n(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];i.forEach(function(r){r.name===e&&r.callback.apply(t,n)})}var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],i=[],a=r({on:e,off:t,emit:n},o);return a},t.exports=n["default"]},{}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=e("emitus"),a=r(i);n["default"]=function(){function e(){O.forEach(function(e){return c(e)}),h(b),l(),f(),d()}function t(){w||r("prev")}function n(){w||r("next")}function r(e){var t=arguments.length<=1||void 0===arguments[1]?-1:arguments[1];w=!0,clearTimeout(C),m(O[b]),-1!==t?b=t:(b="next"===e?b+1:b-1,b>O.length-1&&(b=0),0>b&&(b=O.length-1)),N=O[b],m(N),S.classList.add(E.animationClass),s(S,"next"===e?"-"+q+"px":q+"px"),s(O[b],"next"===e?q+"px":"-"+q+"px"),setTimeout(function(){w=!1,S.classList.remove(E.animationClass),u(S,"none"),u(O[b],"none"),h(b),P.emit("move",[e,b,N]),P.emit(e,[b,N]),l()},E.animationSpeed+260)}function i(e){!w&&b!==e&&e>=0&&e<O.length&&r(0>b-e?"next":"prev",e)}function l(){E.slideshow&&(C=setTimeout(n,E.slideshowSpeed))}function c(e){var t=e.getAttribute("data-src");e.style.setProperty("background-image","url('"+t+"')")}function s(e){var t=arguments.length<=1||void 0===arguments[1]?0:arguments[1];u(e,"translateX("+t+")")}function u(e,t){e.style.setProperty("-webkit-transform",t),e.style.setProperty("-moz-transform",t),e.style.setProperty("transform",t)}function d(){E.keyboard&&p(),E.directionNavs&&v(),window.addEventListener("resize",function(){q=k.offsetWidth},!1)}function f(){if(E.controlNavs){var e=k.querySelector(E.controlNavClass),t=document.createElement("ul");g(e);for(var n=void 0,r=function(e){n=document.createElement("a"),n.addEventListener("click",function(t){i(e),t.preventDefault()},!1),t.appendChild(n)},o=0;o<O.length;o++)r(o);e.appendChild(t)}}function v(){var e=k.querySelector(E.directionNavPrev),r=k.querySelector(E.directionNavNext);e&&r&&(e.addEventListener("click",function(e){e.preventDefault(),t()},!1),r.addEventListener("click",function(e){e.preventDefault(),n()},!1))}function p(){document.addEventListener("keyup",function(e){37===e.which&&t(),39===e.which&&n()},!1)}function h(e){O.forEach(function(t,n){m(t,e===n,e===n)})}function m(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],r=E.slideActive.replace(/^\./g,""),o=E.slideShowClass.replace(/^\./g,"");t?e.classList.add(o):e.classList.remove(o),n?e.classList.add(r):e.classList.remove(r)}function y(e){var t=arguments.length<=1||void 0===arguments[1]?document:arguments[1];return Array.prototype.slice.call(t.querySelectorAll(e))}function g(){for(var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];e&&e.firstChild;)e.removeChild(e.firstChild)}var x=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],w=!1,b=0,C=0,N=null,E=o({container:".slendr",selector:".slendr-slides > .slendr-slide",animationClass:".slendr-animate",directionNavPrev:".slendr-prev",directionNavNext:".slendr-next",slideActive:".slendr-active",slideShowClass:".slendr-show",animationSpeed:900,slideshow:!0,slideshowSpeed:4e3,directionNavs:!0,controlNavs:!0,controlNavClass:".slendr-control",keyboard:!1},x),k=document.querySelector(E.container),L=E.selector.substr(0,E.selector.search(" ")),S=k.querySelector(L),O=y(E.selector,S),q=k.offsetWidth;E.animationClass=E.animationClass.replace(/^\./g,""),e();var P=(0,a["default"])({prev:t,next:n,move:function(e){return i(e)}});return P},t.exports=n["default"]},{emitus:2}]},{},[1]);
