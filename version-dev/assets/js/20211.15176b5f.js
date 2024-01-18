"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20211],{354:(t,e,n)=>{n.d(e,{a:()=>st,b:()=>R,c:()=>lt,f:()=>L,i:()=>D,o:()=>C,s:()=>O});const o=Math.min,i=Math.max,r=Math.round,s=Math.floor,l=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},a={start:"end",end:"start"};function h(t,e,n){return i(t,o(e,n))}function d(t,e){return"function"==typeof t?t(e):t}function u(t){return t.split("-")[0]}function f(t){return t.split("-")[1]}function g(t){return"x"===t?"y":"x"}function p(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(u(t))?"y":"x"}function w(t){return g(m(t))}function y(t){return t.replace(/start|end/g,(t=>a[t]))}function v(t){return t.replace(/left|right|bottom|top/g,(t=>c[t]))}function b(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function x(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function E(t,e,n){let{reference:o,floating:i}=t;const r=m(e),s=w(e),l=p(s),c=u(e),a="y"===r,h=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let y;switch(c){case"top":y={x:h,y:o.y-i.height};break;case"bottom":y={x:h,y:o.y+o.height};break;case"right":y={x:o.x+o.width,y:d};break;case"left":y={x:o.x-i.width,y:d};break;default:y={x:o.x,y:o.y}}switch(f(e)){case"start":y[s]-=g*(n&&a?-1:1);break;case"end":y[s]+=g*(n&&a?-1:1)}return y}async function k(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=d(e,t),p=b(g),m=l[f?"floating"===u?"reference":"floating":u],w=x(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(m)))||n?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:h,strategy:c})),y="floating"===u?{...s.floating,x:o,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),E=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},k=x(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:c}):y);return{top:(w.top-k.top+p.top)/E.y,bottom:(k.bottom-w.bottom+p.bottom)/E.y,left:(w.left-k.left+p.left)/E.x,right:(k.right-w.right+p.right)/E.x}}const R=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:l,elements:c}=e,{element:a,padding:u=0}=d(t,e)||{};if(null==a)return{};const g=b(u),m={x:n,y:i},y=w(r),v=p(y),x=await l.getDimensions(a),E="y"===y,k=E?"top":"left",R=E?"bottom":"right",L=E?"clientHeight":"clientWidth",A=s.reference[v]+s.reference[y]-m[y]-s.floating[v],D=m[y]-s.reference[y],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(a));let O=C?C[L]:0;O&&await(null==l.isElement?void 0:l.isElement(C))||(O=c.floating[L]||s.floating[v]);const S=A/2-D/2,T=O/2-x[v]/2-1,P=o(g[k],T),B=o(g[R],T),F=P,_=O-x[v]-B,I=O/2-x[v]/2+S,W=h(F,I,_),M=null!=f(r)&&I!=W&&s.reference[v]/2-(I<F?P:B)-x[v]/2<0?I<F?F-I:_-I:0;return{[y]:m[y]-M,data:{[y]:W,centerOffset:I-W+M}}}}),L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:a=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:x=!0,...E}=d(t,e),R=u(o),L=u(s)===s,A=await(null==l.isRTL?void 0:l.isRTL(c.floating)),D=g||(L||!x?[v(s)]:function(t){const e=v(t);return[y(t),e,y(e)]}(s));g||"none"===b||D.push(...function(t,e,n,o){const i=f(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}(u(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(y)))),r}(s,x,b,A));const C=[s,...D],O=await k(e,E),S=[];let T=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&S.push(O[R]),h){const t=function(t,e,n){void 0===n&&(n=!1);const o=f(t),i=w(t),r=p(i);let s="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=v(s)),[s,v(s)]}(o,r,A);S.push(O[t[0]],O[t[1]])}if(T=[...T,{placement:o,overflows:S}],!S.every((t=>t<=0))){var P,B;const t=((null==(P=i.flip)?void 0:P.index)||0)+1,e=C[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n=null==(B=T.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:B.placement;if(!n)switch(m){case"bestFit":{var F;const t=null==(F=T.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0];t&&(n=t);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}};function A(t){const e=o(...t.map((t=>t.left))),n=o(...t.map((t=>t.top)));return{x:e,y:n,width:i(...t.map((t=>t.right)))-e,height:i(...t.map((t=>t.bottom)))-n}}const D=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:r,rects:s,platform:l,strategy:c}=e,{padding:a=2,x:h,y:f}=d(t,e),g=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(r.reference))||[]),p=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let o=null;for(let i=0;i<e.length;i++){const t=e[i];!o||t.y-o.y>o.height/2?n.push([t]):n[n.length-1].push(t),o=t}return n.map((t=>x(A(t))))}(g),w=x(A(g)),y=b(a);const v=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===p.length&&p[0].left>p[1].right&&null!=h&&null!=f)return p.find((t=>h>t.left-y.left&&h<t.right+y.right&&f>t.top-y.top&&f<t.bottom+y.bottom))||w;if(p.length>=2){if("y"===m(n)){const t=p[0],e=p[p.length-1],o="top"===u(n),i=t.top,r=e.bottom,s=o?t.left:e.left,l=o?t.right:e.right;return{top:i,bottom:r,left:s,right:l,width:l-s,height:r-i,x:s,y:i}}const t="left"===u(n),e=i(...p.map((t=>t.right))),r=o(...p.map((t=>t.left))),s=p.filter((n=>t?n.left===r:n.right===e)),l=s[0].top,c=s[s.length-1].bottom;return{top:l,bottom:c,left:r,right:e,width:e-r,height:c-l,x:r,y:l}}return w}},floating:r.floating,strategy:c});return s.reference.x!==v.reference.x||s.reference.y!==v.reference.y||s.reference.width!==v.reference.width||s.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};const C=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),s=u(n),l=f(n),c="y"===m(n),a=["left","top"].includes(s)?-1:1,h=r&&c?-1:1,g=d(e,t);let{mainAxis:p,crossAxis:w,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return l&&"number"==typeof y&&(w="end"===l?-1*y:y),c?{x:w*h,y:p*a}:{x:p*a,y:w*h}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},O=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=d(t,e),a={x:n,y:o},f=await k(e,c),p=m(u(i)),w=g(p);let y=a[w],v=a[p];if(r){const t="y"===w?"bottom":"right";y=h(y+f["y"===w?"top":"left"],y,y-f[t])}if(s){const t="y"===p?"bottom":"right";v=h(v+f["y"===p?"top":"left"],v,v-f[t])}const b=l.fn({...e,[w]:y,[p]:v});return{...b,data:{x:b.x-n,y:b.y-o}}}}};function S(t){return B(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function P(t){var e;return null==(e=(B(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function B(t){return t instanceof Node||t instanceof T(t).Node}function F(t){return t instanceof Element||t instanceof T(t).Element}function _(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function I(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof T(t).ShadowRoot)}function W(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function M(t){return["table","td","th"].includes(S(t))}function H(t){const e=z(),n=$(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function z(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function U(t){return["html","body","#document"].includes(S(t))}function $(t){return T(t).getComputedStyle(t)}function j(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(t){if("html"===S(t))return t;const e=t.assignedSlot||t.parentNode||I(t)&&t.host||P(t);return I(e)?e.host:e}function q(t){const e=V(t);return U(e)?t.ownerDocument?t.ownerDocument.body:t.body:_(e)&&W(e)?e:q(e)}function N(t,e){var n;void 0===e&&(e=[]);const o=q(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=T(o);return i?e.concat(r,r.visualViewport||[],W(o)?o:[]):e.concat(o,N(o))}function X(t){const e=$(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=_(t),s=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=r(n)!==s||r(o)!==l;return c&&(n=s,o=l),{width:n,height:o,$:c}}function Y(t){return F(t)?t:t.contextElement}function G(t){const e=Y(t);if(!_(e))return l(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=X(e);let c=(s?r(n.width):n.width)/o,a=(s?r(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const J=l(0);function K(t){const e=T(t);return z()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Q(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=Y(t);let s=l(1);e&&(o?F(o)&&(s=G(o)):s=G(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==T(t))&&e}(r,n,o)?K(r):l(0);let a=(i.left+c.x)/s.x,h=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const t=T(r),e=o&&F(o)?T(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=G(n),e=n.getBoundingClientRect(),o=$(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,h*=t.y,d*=t.x,u*=t.y,a+=i,h+=r,n=T(n).frameElement}}return x({width:d,height:u,x:a,y:h})}function Z(t){return Q(P(t)).left+j(t).scrollLeft}function tt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=T(t),o=P(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const t=z();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}(t,n);else if("document"===e)o=function(t){const e=P(t),n=j(t),o=t.ownerDocument.body,r=i(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=i(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+Z(t);const c=-n.scrollTop;return"rtl"===$(o).direction&&(l+=i(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:l,y:c}}(P(t));else if(F(e))o=function(t,e){const n=Q(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=_(t)?G(t):l(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=K(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return x(o)}function et(t,e){const n=V(t);return!(n===e||!F(n)||U(n))&&("fixed"===$(n).position||et(n,e))}function nt(t,e,n){const o=_(e),i=P(e),r="fixed"===n,s=Q(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=l(0);if(o||!o&&!r)if(("body"!==S(e)||W(i))&&(c=j(e)),o){const t=Q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=Z(i));return{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function ot(t,e){return _(t)&&"fixed"!==$(t).position?e?e(t):t.offsetParent:null}function it(t,e){const n=T(t);if(!_(t))return n;let o=ot(t,e);for(;o&&M(o)&&"static"===$(o).position;)o=ot(o,e);return o&&("html"===S(o)||"body"===S(o)&&"static"===$(o).position&&!H(o))?n:o||function(t){let e=V(t);for(;_(e)&&!U(e);){if(H(e))return e;e=V(e)}return null}(t)||n}const rt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=_(n),r=P(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},c=l(1);const a=l(0);if((i||!i&&"fixed"!==o)&&(("body"!==S(n)||W(r))&&(s=j(n)),_(n))){const t=Q(n);c=G(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-s.scrollLeft*c.x+a.x,y:e.y*c.y-s.scrollTop*c.y+a.y}},getDocumentElement:P,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const l="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=N(t).filter((t=>F(t)&&"body"!==S(t))),i=null;const r="fixed"===$(t).position;let s=r?V(t):t;for(;F(s)&&!U(s);){const e=$(s),n=H(s);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||W(s)&&!n&&et(t,s))?o=o.filter((t=>t!==s)):i=e,s=V(s)}return e.set(t,o),o}(e,this._c):[].concat(n),c=[...l,r],a=c[0],h=c.reduce(((t,n)=>{const r=tt(e,n,s);return t.top=i(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),tt(e,a,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:it,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||it,r=this.getDimensions;return{reference:nt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return X(t)},getScale:G,isElement:F,isRTL:function(t){return"rtl"===$(t).direction}};function st(t,e,n,r){void 0===r&&(r={});const{ancestorScroll:l=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,u=Y(t),f=l||c?[...u?N(u):[],...N(e)]:[];f.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)}));const g=u&&h?function(t,e){let n,r=null;const l=P(t);function c(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(h,d){void 0===h&&(h=!1),void 0===d&&(d=1),c();const{left:u,top:f,width:g,height:p}=t.getBoundingClientRect();if(h||e(),!g||!p)return;const m={rootMargin:-s(f)+"px "+-s(l.clientWidth-(u+g))+"px "+-s(l.clientHeight-(f+p))+"px "+-s(u)+"px",threshold:i(0,o(1,d))||1};let w=!0;function y(t){const e=t[0].intersectionRatio;if(e!==d){if(!w)return a();e?a(!1,e):n=setTimeout((()=>{a(!1,1e-7)}),100)}w=!1}try{r=new IntersectionObserver(y,{...m,root:l.ownerDocument})}catch(v){r=new IntersectionObserver(y,m)}r.observe(t)}(!0),c}(u,n):null;let p,m=-1,w=null;a&&(w=new ResizeObserver((t=>{let[o]=t;o&&o.target===u&&w&&(w.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame((()=>{w&&w.observe(e)}))),n()})),u&&!d&&w.observe(u),w.observe(e));let y=d?Q(t):null;return d&&function e(){const o=Q(t);!y||o.x===y.x&&o.y===y.y&&o.width===y.width&&o.height===y.height||n();y=o,p=requestAnimationFrame(e)}(),n(),()=>{f.forEach((t=>{l&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)})),g&&g(),w&&w.disconnect(),w=null,d&&cancelAnimationFrame(p)}}const lt=(t,e,n)=>{const o=new Map,i={platform:rt,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:d}=E(a,o,c),u=o,f={},g=0;for(let p=0;p<l.length;p++){const{name:n,fn:r}=l[p],{x:m,y:w,data:y,reset:v}=await r({x:h,y:d,initialPlacement:o,placement:u,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});h=null!=m?m:h,d=null!=w?w:d,f={...f,[n]:{...f[n],...y}},v&&g<=50&&(g++,"object"==typeof v&&(v.placement&&(u=v.placement),v.rects&&(a=!0===v.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),({x:h,y:d}=E(a,u,c))),p=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:f}})(t,e,{...i,platform:r})}},20211:(t,e,n)=>{n.r(e),n.d(e,{ix_dropdown:()=>c});var o=n(53484),i=n(354),r=n(91358);var s=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s};let l=0;const c=class{constructor(t){(0,o.r)(this,t),this.showChanged=(0,o.c)(this,"showChanged",7),this.autoUpdateCleanup=null,this.localUId="dropdown-"+l++,this.suppressAutomaticPlacement=!1,this.show=!1,this.trigger=void 0,this.anchor=void 0,this.closeBehavior="both",this.placement="bottom-start",this.positioningStrategy="fixed",this.header=void 0,this.offset=void 0,this.triggerEvent="click",this.overwriteDropdownStyle=void 0,this.toggleBind=this.toggle.bind(this),this.openBind=this.open.bind(this),this.focusInBind=this.focusIn.bind(this),this.focusOutBind=this.focusOut.bind(this)}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"))}get slotElement(){return this.hostElement.shadowRoot.querySelector("slot")}hasFocusTrigger(){return Array.isArray(this.triggerEvent)&&-1!=this.triggerEvent.indexOf("focus")}addEventListenersFor(t){switch(t){case"click":this.hasFocusTrigger()?(this.triggerElement.addEventListener("focusin",this.focusInBind),this.triggerElement.addEventListener("focusout",this.focusOutBind)):this.triggerElement.addEventListener("click",this.toggleBind);break;case"hover":this.triggerElement.addEventListener("mouseenter",this.openBind);break;case"focus":this.triggerElement.addEventListener("focusin",this.openBind)}this.triggerElement.setAttribute("data-ix-dropdown-trigger",this.localUId)}removeEventListenersFor(t,e){switch(t){case"click":this.hasFocusTrigger()?(this.triggerElement.removeEventListener("focusin",this.focusInBind),this.triggerElement.removeEventListener("focusout",this.focusOutBind)):e.removeEventListener("click",this.toggleBind);break;case"hover":e.removeEventListener("mouseenter",this.openBind);break;case"focus":e.removeEventListener("focusin",this.openBind)}this.triggerElement.removeAttribute("data-ix-dropdown-trigger")}async registerListener(t){this.triggerElement=await this.resolveElement(t),this.triggerElement&&(Array.isArray(this.triggerEvent)?this.triggerEvent.forEach((t=>{this.addEventListenersFor(t)})):this.addEventListenersFor(this.triggerEvent))}async unregisterListener(t){const e=await this.resolveElement(t);Array.isArray(this.triggerEvent)?this.triggerEvent.forEach((t=>{this.removeEventListenersFor(t,e)})):this.removeEventListenersFor(this.triggerEvent,e)}resolveElement(t){if(t instanceof Promise)return t;if("object"==typeof t)return Promise.resolve(t);const e=`#${t}`;return new Promise((t=>{if(document.querySelector(e))return t(document.querySelector(e));const n=new MutationObserver((()=>{document.querySelector(e)&&(t(document.querySelector(e)),n.disconnect())}));n.observe(document.body,{childList:!0,subtree:!0})}))}async changedShow(t){t&&(this.anchorElement=await(this.anchor?this.resolveElement(this.anchor):this.resolveElement(this.trigger)),this.anchorElement&&this.applyDropdownPosition())}changedTrigger(t,e){t&&this.registerListener(t),e&&this.unregisterListener(e)}clickOutside(t){const e=t.target;if(t.defaultPrevented)return;if(!1===this.show||!1===this.closeBehavior)return;const n=this.isClickInsideDropdown(t);switch(this.closeBehavior){case"outside":n||this.close();break;case"inside":n&&this.close();break;case"both":this.hostElement!==e&&this.close();break;default:this.close()}}keydown(t){"Escape"===t.code&&this.close()}isAnchorSubmenu(){var t;return!!(null===(t=this.anchorElement)||void 0===t?void 0:t.closest("ix-dropdown-item"))}toggle(t){const e=t.target;this.isDropdownInsideAnotherDropdown(e)&&t.preventDefault();const{defaultPrevented:n}=this.showChanged.emit(!this.show);n||(this.show=!this.show)}open(t){const e=t.target;this.isDropdownInsideAnotherDropdown(e)&&t.preventDefault();const{defaultPrevented:n}=this.showChanged.emit(!0);n||(this.show=!0)}close(){const{defaultPrevented:t}=this.showChanged.emit(!1);t||(this.show=!1)}focusIn(){this.triggerElement.addEventListener("mousedown",this.toggleBind)}focusOut(){this.triggerElement.removeEventListener("mousedown",this.toggleBind)}async applyDropdownPosition(){if(!this.anchorElement)return;if(!this.dropdownRef)return;const t=this.isAnchorSubmenu();let e={strategy:this.positioningStrategy,middleware:[]};this.suppressAutomaticPlacement||e.middleware.push((0,i.f)({fallbackStrategy:"initialPlacement"})),e.placement=t?"right-start":this.placement,e.middleware=[...e.middleware,(0,i.i)(),(0,i.s)()],this.offset&&e.middleware.push((0,i.o)(this.offset)),this.autoUpdateCleanup&&(this.autoUpdateCleanup(),this.autoUpdateCleanup=null),this.autoUpdateCleanup=(0,i.a)(this.anchorElement,this.dropdownRef,(async()=>{const t=await(0,i.c)(this.anchorElement,this.dropdownRef,e);if(Object.assign(this.dropdownRef.style,{top:"0",left:"0",transform:`translate(${Math.round(t.x)}px,${Math.round(t.y)}px)`}),this.overwriteDropdownStyle){const t=await this.overwriteDropdownStyle({dropdownRef:this.dropdownRef,triggerRef:this.triggerElement});Object.assign(this.dropdownRef.style,t)}}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0})}isDropdownInsideAnotherDropdown(t){return t.hasAttribute("data-ix-dropdown-trigger")&&!t.dispatchEvent(new CustomEvent("check-nested-dropdown",{bubbles:!0,composed:!0,cancelable:!0}))}async componentDidLoad(){this.changedTrigger(this.trigger,null),this.hostElement.addEventListener("check-nested-dropdown",(t=>{t.preventDefault(),t.stopPropagation()}))}async componentDidRender(){var t;await this.applyDropdownPosition(),this.anchorElement=await(this.anchor?this.resolveElement(this.anchor):this.resolveElement(this.trigger)),this.isAnchorSubmenu()&&"IX-DROPDOWN-ITEM"===(null===(t=this.anchorElement)||void 0===t?void 0:t.tagName)&&(this.anchorElement.isSubMenu=!0)}isClickInsideDropdown(t){const e=this.dropdownRef.getBoundingClientRect();return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}disconnectedCallback(){this.autoUpdateCleanup&&this.autoUpdateCleanup()}async updatePosition(){this.applyDropdownPosition()}render(){return(0,o.h)(o.H,{"data-ix-dropdown":this.localUId,ref:t=>this.dropdownRef=t,class:{"dropdown-menu":!0,show:this.show,overflow:!0},style:{margin:"0",minWidth:"0px",position:this.positioningStrategy},role:"list"},(0,o.h)("div",{style:{display:"contents"}},this.header&&(0,o.h)("div",{class:"dropdown-header"},this.header),(0,o.h)("slot",null)))}get hostElement(){return(0,o.g)(this)}static get watchers(){return{show:["changedShow"],trigger:["changedTrigger"]}}};s([(0,r.O)("click",(t=>t.show))],c.prototype,"clickOutside",null),s([(0,r.O)("keydown",(t=>t.show))],c.prototype,"keydown",null),c.style=":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}"},91358:(t,e,n)=>{n.d(e,{O:()=>r});var o=n(53484);const i={target:"window",defaultEnabled:!0};function r(t,e){return(n,r)=>{const{componentWillLoad:s,componentWillRender:l,disconnectedCallback:c}=n;e&&(n.componentWillRender=function(){var t;return null===(t=(0,o.g)(this)[`__ix__${r}`])||void 0===t||t.enable(e(this)),l&&l.call(this)}),n.componentWillLoad=function(){const e=function(t,e){void 0===e&&(e={});const n=Object.assign(Object.assign({},i),e);let o;const r=t=>{o(t)},s={on:t=>{o=t},isEnabled:n.defaultEnabled,enable:e=>{s.isEnabled=e,e?addEventListener(t,r):removeEventListener(t,r)},destroy:()=>{s.enable(!1)}};return s.enable(n.defaultEnabled),s}(t),n=(0,o.g)(this),l=this[r];return n[`__ix__${r}`]=e,e.on(l.bind(this)),s&&s.call(this)},n.disconnectedCallback=function(){var t;const e=(0,o.g)(this);return e&&e[`__ix__${r}`]&&(null===(t=e[`__ix__${r}`])||void 0===t||t.destroy(),e[`__ix__${r}`]=null),c&&c.call(this)}}}}}]);