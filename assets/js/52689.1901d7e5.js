"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52689],{99941:(e,t,n)=>{n.d(t,{a:()=>ae});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function s(e,t,n){return Math.min(Math.max(e,t),n)}function u(e,t){return e.indexOf(t)>-1}function c(e,t){return e.apply(null,t)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return u(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return l.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function f(e,t){var n=d(e),r=s(l.und(n[0])?1:n[0],.1,100),a=s(l.und(n[1])?100:n[1],.1,100),i=s(l.und(n[2])?10:n[2],.1,100),u=s(l.und(n[3])?0:n[3],.1,100),c=Math.sqrt(a/r),f=i/(2*Math.sqrt(a*r)),h=f<1?c*Math.sqrt(1-f*f):0,m=1,p=f<1?(f*c-u)/h:-u+c;function v(e){var n=t?t*e/1e3:e;return n=f<1?Math.exp(-n*f*c)*(m*Math.cos(h*n)+p*Math.sin(h*n)):(m+p*n)*Math.exp(-n*c),0===e||1===e?e:1-n}return t?v:function(){var t=o.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===v(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[e]=i,i}}function h(e){return void 0===e&&(e=10),function(t){return Math.ceil(s(t,1e-6,1)*e)*(1/e)}}var m,p,v=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==o)for(var u=0;u<11;++u)s[u]=a(u*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(c(e),n,o)}}function c(n){for(var o=0,u=1;10!==u&&s[u]<=n;++u)o+=e;--u;var c=o+(n-s[u])/(s[u+1]-s[u])*e,l=i(c,t,r);return l>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var s=i(t,n,r);if(0===s)return t;t-=(a(t,n,r)-e)/s}return t}(n,c,t,r):0===l?c:function(e,t,n,r,i){var o,s,u=0;do{(o=a(s=t+(n-t)/2,r,i)-e)>0?n=s:t=s}while(Math.abs(o)>1e-7&&++u<10);return s}(n,o,o+e,t,r)}}}(),g=(m={linear:function(){return function(e){return e}}},p={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=s(e,1,10),r=s(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){p[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(p).forEach((function(e){var t=p[e];m["easeIn"+e]=t,m["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},m["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},m["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),m);function b(e,t){if(l.fnc(e))return e;var n=e.split("(")[0],r=g[n],a=d(e);switch(n){case"spring":return f(e,t);case"cubicBezier":return c(v,a);case"steps":return c(h,a);default:return c(r,a)}}function y(e){try{return document.querySelectorAll(e)}catch(t){return}}function x(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function k(e){return e.reduce((function(e,t){return e.concat(l.arr(t)?k(t):t)}),[])}function w(e){return l.arr(e)?e:(l.str(e)&&(e=y(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function M(e,t){return e.some((function(e){return e===t}))}function C(e){var t={};for(var n in e)t[n]=e[n];return t}function S(e,t){var n=C(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function O(e,t){var n=C(e);for(var r in t)n[r]=l.und(e[r])?t[r]:e[r];return n}function E(e){return l.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:l.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):l.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,u=a[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=s;else{var l=s<.5?s*(1+o):s+o-s*o,d=2*s-l;t=c(d,l,i+1/3),n=c(d,l,i),r=c(d,l,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+u+")"}(e):void 0;var t,n}function T(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function I(e,t){return l.fnc(e)?e(t.target,t.id,t.total):e}function P(e,t){return e.getAttribute(t)}function D(e,t,n){if(M([n,"deg","rad","turn"],T(t)))return t;var r=o.CSS[t+n];if(!l.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var s=100/a.offsetWidth;i.removeChild(a);var u=s*parseFloat(t);return o.CSS[t+n]=u,u}function L(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?D(e,a,n):a}}function A(e,t){return l.dom(e)&&!l.inp(e)&&(!l.nil(P(e,t))||l.svg(e)&&e[t])?"attribute":l.dom(e)&&M(i,t)?"transform":l.dom(e)&&"transform"!==t&&L(e,t)?"css":null!=e[t]?"object":void 0}function B(e){if(l.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function N(e,t,n,r){var a=u(t,"scale")?1:0+function(e){return u(e,"translate")||"perspective"===e?"px":u(e,"rotate")||u(e,"skew")?"deg":void 0}(t),i=B(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?D(e,i,r):i}function F(e,t,n,r){switch(A(e,t)){case"transform":return N(e,t,r,n);case"css":return L(e,t,n);case"attribute":return P(e,t);default:return e[t]||0}}function H(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=T(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function q(e,t){if(l.col(e))return E(e);if(/\s/g.test(e))return e;var n=T(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function z(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function j(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=z(t,i)),t=i}return r}function V(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*P(e,"r")}(e);case"rect":return function(e){return 2*P(e,"width")+2*P(e,"height")}(e);case"line":return function(e){return z({x:P(e,"x1"),y:P(e,"y1")},{x:P(e,"x2"),y:P(e,"y2")})}(e);case"polyline":return j(e);case"polygon":return function(e){var t=e.points;return j(e)+z(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function W(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;l.svg(t)&&l.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=P(r,"viewBox"),o=a.width,s=a.height,u=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:o,h:s,vW:u[2],vH:u[3]}}function $(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=W(e.el,e.svg),i=r(),o=r(-1),s=r(1),u=n?1:a.w/a.vW,c=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*u;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function X(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(l.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:l.str(e)||t?r.split(n):[]}}function R(e){return x(e?k(l.arr(e)?e.map(w):w(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function Y(e){var t=R(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:B(e)}}}))}function Z(e,t){var n=C(t);if(/^spring/.test(n.easing)&&(n.duration=f(n.easing)),l.arr(e)){var r=e.length;2===r&&!l.obj(e[0])?e={value:e}:l.fnc(t.duration)||(n.duration=t.duration/r)}var a=l.arr(e)?e:[e];return a.map((function(e,n){var r=l.obj(e)&&!l.pth(e)?e:{value:e};return l.und(r.delay)&&(r.delay=n?0:t.delay),l.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return O(e,n)}))}function _(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=O(function(e){for(var t=x(k(e.map((function(e){return Object.keys(e)}))),(function(e){return l.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)l.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)l.key(a)&&n.push({name:a,tweens:Z(t[a],e)});return n}function G(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=I(e[r],t);l.arr(a)&&1===(a=a.map((function(e){return I(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=l.arr(i)?i[1]:i,s=T(o),u=F(t.target,e.name,s,t),c=n?n.to.original:u,d=l.arr(i)?i[0]:c,f=T(d)||T(u),h=s||f;return l.und(o)&&(o=c),a.from=X(d,h),a.to=X(H(o,d),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=l.pth(i),a.isPathTargetInsideSVG=a.isPath&&l.svg(t.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var Q={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function J(e,t){Y(e).forEach((function(e){for(var n in t){var r=I(t[n],e),a=e.target,i=T(r),o=F(a,n,i,e),s=H(q(r,i||T(o)),o),u=A(a,n);Q[u](a,n,s,e.transforms,!0)}}))}function K(e,t){return x(k(e.map((function(e){return t.map((function(t){return function(e,t){var n=A(e.target,t.name);if(n){var r=G(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!l.und(e)}))}function U(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,a=0;a<r;){var i=te[a];i.paused?(te.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var t,n=0,i=0,o=0,u=0,c=null;function l(e){var t=window.Promise&&new Promise((function(e){return c=e}));return e.finished=t,t}var d=function(e){var t=S(r,e),n=S(a,e),i=_(n,e),o=Y(e.targets),s=K(o,i),u=U(s,n),c=ee;return ee++,O(t,{id:c,children:[],animatables:o,animations:s,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(e);function f(){var e=d.direction;"alternate"!==e&&(d.direction="normal"!==e?"normal":"reverse"),d.reversed=!d.reversed,t.forEach((function(e){return e.reversed=d.reversed}))}function h(e){return d.reversed?d.duration-e:e}function m(){n=0,i=h(d.currentTime)*(1/ae.speed)}function p(e,t){t&&t.seek(e-t.timelineOffset)}function v(e){for(var t=0,n=d.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,u=o.length-1,c=o[u];u&&(c=x(o,(function(t){return e<t.end}))[0]||c);for(var l=s(e-c.start-c.delay,0,c.duration)/c.duration,f=isNaN(l)?1:c.easing(l),h=c.to.strings,m=c.round,p=[],v=c.to.numbers.length,g=void 0,b=0;b<v;b++){var y=void 0,k=c.to.numbers[b],w=c.from.numbers[b]||0;y=c.isPath?$(c.value,f*k,c.isPathTargetInsideSVG):w+f*(k-w),m&&(c.isColor&&b>2||(y=Math.round(y*m)/m)),p.push(y)}var M=h.length;if(M){g=h[0];for(var C=0;C<M;C++){var S=h[C+1],O=p[C];isNaN(O)||(g+=S?O+S:O+" ")}}else g=p[0];Q[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,t++}}function g(e){d[e]&&!d.passThrough&&d[e](d)}function b(e){var r=d.duration,a=d.delay,m=r-d.endDelay,b=h(e);d.progress=s(b/r*100,0,100),d.reversePlayback=b<d.currentTime,t&&function(e){if(d.reversePlayback)for(var n=u;n--;)p(e,t[n]);else for(var r=0;r<u;r++)p(e,t[r])}(b),!d.began&&d.currentTime>0&&(d.began=!0,g("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,g("loopBegin")),b<=a&&0!==d.currentTime&&v(0),(b>=m&&d.currentTime!==r||!r)&&v(r),b>a&&b<m?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,g("changeBegin")),g("change"),v(b)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,g("changeComplete")),d.currentTime=s(b,0,r),d.began&&g("update"),e>=r&&(i=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=o,g("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&f()):(d.paused=!0,d.completed||(d.completed=!0,g("loopComplete"),g("complete"),!d.passThrough&&"Promise"in window&&(c(),l(d)))))}return l(d),d.reset=function(){var e=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===e,d.remaining=d.loop,t=d.children;for(var n=u=t.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===e&&1===d.loop)&&d.remaining++,v(d.reversed?d.duration:0)},d._onDocumentVisibility=m,d.set=function(e,t){return J(e,t),d},d.tick=function(e){o=e,n||(n=o),b((o+(i-n))*ae.speed)},d.seek=function(e){b(h(e))},d.pause=function(){d.paused=!0,m()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,te.push(d),m(),ne())},d.reverse=function(){f(),d.completed=!d.reversed,m()},d.restart=function(){d.reset(),d.play()},d.remove=function(e){oe(R(e),d)},d.reset(),d.autoplay&&d.play(),d}function ie(e,t){for(var n=t.length;n--;)M(e,t[n].animatable.target)&&t.splice(n,1)}function oe(e,t){var n=t.animations,r=t.children;ie(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;ie(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=te,ae.remove=function(e){for(var t=R(e),n=te.length;n--;){oe(t,te[n])}},ae.get=F,ae.set=J,ae.convertPx=D,ae.path=function(e,t){var n=l.str(e)?y(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:W(n),totalLength:V(n)*(r/100)}}},ae.setDashoffset=function(e){var t=V(e);return e.setAttribute("stroke-dasharray",t),t},ae.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?b(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,s="first"===o,u="center"===o,c="last"===o,d=l.arr(e),f=d?parseFloat(e[0]):parseFloat(e),h=d?parseFloat(e[1]):0,m=T(d?e[1]:e)||0,p=t.start||0+(d?f:0),v=[],g=0;return function(e,t,l){if(s&&(o=0),u&&(o=(l-1)/2),c&&(o=l-1),!v.length){for(var b=0;b<l;b++){if(a){var y=u?(a[0]-1)/2:o%a[0],x=u?(a[1]-1)/2:Math.floor(o/a[0]),k=y-b%a[0],w=x-Math.floor(b/a[0]),M=Math.sqrt(k*k+w*w);"x"===i&&(M=-k),"y"===i&&(M=-w),v.push(M)}else v.push(Math.abs(o-b));g=Math.max.apply(Math,v)}r&&(v=v.map((function(e){return r(e/g)*g}))),"reverse"===n&&(v=v.map((function(e){return i?e<0?-1*e:-e:Math.abs(g-e)})))}return p+(d?(h-f)/g:f)*(Math.round(100*v[t])/100)+m}},ae.timeline=function(e){void 0===e&&(e={});var t=ae(e);return t.duration=0,t.add=function(n,r){var i=te.indexOf(t),o=t.children;function s(e){e.passThrough=!0}i>-1&&te.splice(i,1);for(var u=0;u<o.length;u++)s(o[u]);var c=O(n,S(a,e));c.targets=c.targets||e.targets;var d=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=l.und(r)?d:H(r,d),s(t),t.seek(c.timelineOffset);var f=ae(c);s(f),o.push(f);var h=U(o,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ae.easing=b,ae.penner=g,ae.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},34144:(e,t,n)=>{n.d(t,{A:()=>u,a:()=>i,c:()=>s,u:()=>o});var r=n(68228);class a extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n}}function i(e,t,n,r){let i;return e.dispatchEvent(new a(t,((e,t)=>{n(e,t),i=t}),r)),{unsubscribe:()=>{i&&i()}}}function o(e,t,n){const a=new r.T,i=new r.T,o=new Set;return e.addEventListener("context-request",(e=>{const r=e;(null==r?void 0:r.context.name)===t.name&&(r.stopPropagation(),r.subscribe&&o.add(r),a.emit(r),n&&r.callback(n,(()=>{o.delete(r)})))})),i.on((e=>{o.forEach((t=>t.callback(e,(()=>{o.delete(t)}))))})),{emit:e=>{i.emit(e)}}}const s=e=>e.closest("ix-menu"),u={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},52689:(e,t,n)=>{n.r(t),n.d(t,{ix_map_navigation:()=>o});var r=n(39567),a=n(99941),i=n(34144);const o=class{constructor(e){(0,r.r)(this,e),this.navigationToggled=(0,r.c)(this,"navigationToggled",7),this.contextMenuClick=(0,r.c)(this,"contextMenuClick",7),this.applicationName=void 0,this.navigationTitle=void 0,this.hideContextMenu=!0,this.isSidebarOpen=!0,this.hasContentHeader=!1}get menu(){return this.hostElement.querySelector("ix-menu")}get menuOverlay(){return this.hostElement.querySelector("ix-menu-overlay")}get mapNavMenu(){return this.hostElement.shadowRoot.querySelector(".map-nav-menu")}get sidebar(){return this.hostElement.shadowRoot.querySelector(".map-nav-sidebar")}get overlay(){return this.hostElement.shadowRoot.querySelector("#overlay")}componentDidRender(){this.appendMenu(),this.closeOverlay()}componentWillLoad(){(0,i.u)(this.hostElement,i.A,{hideHeader:!1,host:"map-navigation"})}appendMenu(){this.menu.addEventListener("mapExpandChange",(e=>{const t=!e.detail;this.toggleSidebar(t)})),this.menu.enableMapExpand=!0}async toggleSidebar(e){this.isSidebarOpen=void 0!==e?e:!this.isSidebarOpen,this.isSidebarOpen?this.openSidebar():this.closeSidebar(),this.navigationToggled.emit(this.isSidebarOpen),this.menu.toggleMapExpand(this.isSidebarOpen)}closeSidebar(){(0,a.a)({targets:this.sidebar,duration:o.defaultTime,marginLeft:[0,"-29.75rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{this.sidebar.classList.add("d-none")}})}openSidebar(){(0,a.a)({targets:this.sidebar,duration:o.defaultTime,marginLeft:["-29.75rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.sidebar.classList.remove("d-none")}})}async openOverlay(e,t,n,r){(0,a.a)({targets:this.overlay,duration:o.slowTime,backdropFilter:[0,"blur(1rem)"],translateX:["-4rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.overlay.classList.remove("d-none")}});const i=document.createElement("ix-map-navigation-overlay");i.setAttribute("color",r),i.setAttribute("name",e),i.setAttribute("icon",n),i.setAttribute("slot","overlay"),i.addEventListener("closeClick",(()=>this.closeOverlay())),i.appendChild(t),this.hostElement.appendChild(i)}async closeOverlay(){(0,a.a)({targets:this.overlay,duration:o.slowTime,backdropFilter:["blur(1rem)",0],translateX:[0,"-4rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{var e;this.overlay&&(null===(e=this.overlay.firstChild)||void 0===e||e.remove(),this.overlay.classList.add("d-none"))}})}checkHasContentHeader(e){const t=e.currentTarget.assignedNodes({flatten:!0});this.hasContentHeader=0!==(null==t?void 0:t.length)}render(){return(0,r.h)(r.H,{key:"9b4c4bb24f19945428477be04c10c6f80868ded0"},(0,r.h)("slot",{key:"6f0db803a6755ed73737fe783e8d082a2df54f5b",name:"menu"}),(0,r.h)("div",{key:"e8c578da79eed996626ed15e959dfc7c18675bfb",class:"map-nav"},(0,r.h)("div",{key:"fb834017ce2d372bc8ec93d16dd8c1975f8b6939",class:"map-nav-sidebar"},(0,r.h)("div",{key:"e0378fb0501f8e08b4c60d4051c8f0d1a72b7104",class:"map-nav-header"},(0,r.h)("ix-application-header",{key:"c03535cc7a7739e1a072a1687ab263f8a1c77d69",name:this.applicationName,class:"map-nav-header-brand"},(0,r.h)("slot",{key:"9c4a8847d90dbdaf42bb9591b55680e547b1d52c",slot:"logo",name:"logo"}))),(0,r.h)("div",{key:"98b3542ea500a543322a84a640b839e2959cc0fe",class:"map-nav-sidebar-content"},(0,r.h)("div",{key:"a6d2f51e083a9e9b9d9839ea0b55090ee1354b42",class:"map-nav-sidebar-static-content"},(0,r.h)("div",{key:"08a2f1f9c3c3730be3b5af9f6637cf4480461cda",class:"map-nav-title"},this.navigationTitle),this.hideContextMenu?"":(0,r.h)("ix-icon-button",{icon:"context-menu",ghost:!0,size:"24",variant:"secondary",onClick:e=>this.contextMenuClick.emit()})),(0,r.h)("div",{key:"b9f9fec616e9d53a5144d651c8f33cb65bd43d6b",class:"map-nav-sidebar-user-content"},(0,r.h)("slot",{key:"affb80bf56de7fab01f7c959d37f041cf8100fd2",name:"sidebar-content"})))),(0,r.h)("div",{key:"ae33912f9c102c78d08c7e0a1e473ebbf4905a9c",class:"content"},(0,r.h)("div",{key:"2385a7c87ded8cd7a1db225b3e45c16120b43aef",class:{"map-nav-header-content":!0,"bg-2":!0,empty:!this.hasContentHeader}},(0,r.h)("slot",{key:"e230b473f2729038bc75d6b97f7a1bb5dc7b8b8e",name:"content-header",onSlotchange:e=>this.checkHasContentHeader(e)})),(0,r.h)("main",{key:"062163caaa4a2b61b48c2124d23d047041688ce2"},(0,r.h)("slot",{key:"444718852cea947e7bf581321cae89f113c474b5"}),(0,r.h)("slot",{key:"c2160f945e134d90db2820c5ba4505d85845e5d6",name:"overlay"})))))}get hostElement(){return(0,r.g)(this)}};o.defaultTime=150,o.slowTime=500,o.style=":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);padding-left:1rem;padding-right:1rem;padding-bottom:0.625rem;height:100%;width:100%;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}"}}]);