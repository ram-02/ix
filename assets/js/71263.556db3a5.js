"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71263],{34954:(t,e,n)=>{n.d(e,{a:()=>i});const i=(t,e,n)=>(t.addEventListener(e,n),()=>{t.removeEventListener(e,n)})},26822:(t,e,n)=>{function i(t){return null!==t&&void 0!==t.getDropdownItemElement&&"function"==typeof t.getDropdownItemElement}n.d(e,{d:()=>o,h:()=>i});const o=new class{constructor(){this.dropdowns=new Map,this.submenuIds={},this.isWindowListenerActive=!1}connected(t){this.isWindowListenerActive||this.addOverlayListeners(),this.dropdowns.set(t.getId(),t),t.discoverAllSubmenus&&this.discoverSubmenus()}disconnected(t){const e=t.getId();this.removeFromSubmenuIds(e),this.dropdowns.delete(e)}removeFromSubmenuIds(t){this.dropdowns.forEach((e=>{const n=this.submenuIds[e.getId()];if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1)}})),delete this.submenuIds[t]}getDropdownById(t){return this.dropdowns.get(t)}discoverSubmenus(){this.dropdowns.forEach((t=>{t.discoverSubmenu()}))}present(t){var e;!t.isPresent()&&(null===(e=t.willPresent)||void 0===e?void 0:e.call(t))&&(this.submenuIds[t.getId()]=t.getAssignedSubmenuIds(),t.present())}dismissChildren(t){const e=this.submenuIds[t]||[];for(const n of e){const t=this.dropdowns.get(n);t&&this.dismiss(t)}}dismiss(t){var e;t.isPresent()&&(null===(e=t.willDismiss)||void 0===e?void 0:e.call(t))&&(this.dismissChildren(t.getId()),t.dismiss(),delete this.submenuIds[t.getId()])}dismissAll(t,e){void 0===t&&(t=[]),void 0===e&&(e=!1),this.dropdowns.forEach((n=>{const i="inside"===n.closeBehavior||!1===n.closeBehavior,o=t.includes(n.getId()),r=this.buildComposedPath(n.getId(),new Set);if(t.length>0&&e){let e=!1;if(t.forEach((t=>{r.has(t)&&(e=!0)})),!e)return}!o&&i||this.dismiss(n)}))}dismissOthers(t){let e=this.buildComposedPath(t,new Set);e.add(t),this.dropdowns.forEach((t=>{"inside"===t.closeBehavior||!1===t.closeBehavior||e.has(t.getId())||this.dismiss(t)}))}pathIncludesTrigger(t){for(let e of t)if(e instanceof HTMLElement&&e.hasAttribute("data-ix-dropdown-trigger"))return e}pathIncludesDropdown(t){return!!t.find((t=>"IX-DROPDOWN"===t.tagName))}buildComposedPath(t,e){this.submenuIds[t]&&e.add(t);for(const n of Object.keys(this.submenuIds))this.submenuIds[n].includes(t)&&this.buildComposedPath(n,e).forEach((t=>e.add(t)));return e}addOverlayListeners(){this.isWindowListenerActive=!0,window.addEventListener("click",(t=>{const e=this.pathIncludesTrigger(t.composedPath()),n=this.pathIncludesDropdown(t.composedPath());e||n||this.dismissAll()})),window.addEventListener("keydown",(t=>{"Escape"===t.key&&this.dismissAll([...this.dropdowns.keys()])}))}}},44165:(t,e,n)=>{async function i(t,e){const n=Array.from(document.querySelectorAll(t));if(n.length>0)return Promise.resolve(n);if(void 0===e)return Promise.resolve(void 0);const i=function(t,e){void 0===e&&(e=document.body);if(!t.parentElement&&!t.parentNode)return;if(t.parentNode instanceof ShadowRoot)return t.parentNode;let n=t.parentElement;for(;n;){if(n.shadowRoot)return n.shadowRoot;if(n.parentNode instanceof ShadowRoot)return n.parentNode;n=n.parentElement}return e}(e);if(void 0===i||!(i instanceof ShadowRoot))return Promise.resolve(void 0);const o=Array.from(i.querySelectorAll(t)),r=[...Array.from(i.host.querySelectorAll(t)),...o];return r.length>0?Promise.resolve(r):Promise.resolve(void 0)}function o(t,e){if(t instanceof Promise)return t;if("object"==typeof t)return Promise.resolve(t);return function(t,e,n){return void 0===e&&(e=document),new Promise((o=>{const r=()=>{i(t,n).then((t=>{t&&t.length>0&&(o(t[0]),null==s||s.disconnect())}))};r();const s=new MutationObserver((()=>{r()}));s.observe(e.body,{childList:!0,subtree:!0})}))}(`#${t}`,document,e)}n.d(e,{f:()=>o,r:()=>i})},81779:(t,e,n)=>{n.d(e,{a:()=>at,b:()=>ft,c:()=>pt,f:()=>ht,h:()=>ut,i:()=>mt,o:()=>ct,s:()=>dt});const i=["top","right","bottom","left"],o=Math.min,r=Math.max,s=Math.round,l=Math.floor,a=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function h(t,e,n){return r(t,o(e,n))}function u(t,e){return"function"==typeof t?t(e):t}function f(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function w(t){return["top","bottom"].includes(f(t))?"y":"x"}function v(t){return p(w(t))}function y(t,e,n){void 0===n&&(n=!1);const i=m(t),o=v(t),r=g(o);let s="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=x(s)),[s,x(s)]}function b(t){return t.replace(/start|end/g,(t=>d[t]))}function x(t){return t.replace(/left|right|bottom|top/g,(t=>c[t]))}function E(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function k(t){const{x:e,y:n,width:i,height:o}=t;return{width:i,height:o,top:n,left:e,right:e+i,bottom:n+o,x:e,y:n}}function A(t,e,n){let{reference:i,floating:o}=t;const r=w(e),s=v(e),l=g(s),a=f(e),c="y"===r,d=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,u=i[l]/2-o[l]/2;let p;switch(a){case"top":p={x:d,y:i.y-o.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-o.width,y:h};break;default:p={x:i.x,y:i.y}}switch(m(e)){case"start":p[s]-=u*(n&&c?-1:1);break;case"end":p[s]+=u*(n&&c?-1:1)}return p}async function L(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=u(e,t),p=E(m),g=l[f?"floating"===h?"reference":"floating":h],w=k(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),v="floating"===h?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),b=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},x=k(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:a}):v);return{top:(w.top-x.top+p.top)/b.y,bottom:(x.bottom-w.bottom+p.bottom)/b.y,left:(w.left-x.left+p.left)/b.x,right:(x.right-w.right+p.right)/b.x}}function S(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function I(t){return i.some((e=>t[e]>=0))}function R(t){const e=o(...t.map((t=>t.left))),n=o(...t.map((t=>t.top)));return{x:e,y:n,width:r(...t.map((t=>t.right)))-e,height:r(...t.map((t=>t.bottom)))-n}}function C(t){return O(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function P(t){var e;return null==(e=(O(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function O(t){return t instanceof Node||t instanceof D(t).Node}function T(t){return t instanceof Element||t instanceof D(t).Element}function F(t){return t instanceof HTMLElement||t instanceof D(t).HTMLElement}function B(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof D(t).ShadowRoot)}function H(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=K(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function M(t){return["table","td","th"].includes(C(t))}function W(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function z(t){const e=U(),n=T(t)?K(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function U(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function N(t){return["html","body","#document"].includes(C(t))}function K(t){return D(t).getComputedStyle(t)}function q(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function V(t){if("html"===C(t))return t;const e=t.assignedSlot||t.parentNode||B(t)&&t.host||P(t);return B(e)?e.host:e}function j(t){const e=V(t);return N(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&H(e)?e:j(e)}function $(t,e,n){var i;void 0===e&&(e=[]),void 0===n&&(n=!0);const o=j(t),r=o===(null==(i=t.ownerDocument)?void 0:i.body),s=D(o);if(r){const t=X(s);return e.concat(s,s.visualViewport||[],H(o)?o:[],t&&n?$(t):[])}return e.concat(o,$(o,[],n))}function X(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _(t){const e=K(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=F(t),r=o?t.offsetWidth:n,l=o?t.offsetHeight:i,a=s(n)!==r||s(i)!==l;return a&&(n=r,i=l),{width:n,height:i,$:a}}function Y(t){return T(t)?t:t.contextElement}function G(t){const e=Y(t);if(!F(e))return a(1);const n=e.getBoundingClientRect(),{width:i,height:o,$:r}=_(e);let l=(r?s(n.width):n.width)/i,c=(r?s(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const J=a(0);function Q(t){const e=D(t);return U()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Z(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const o=t.getBoundingClientRect(),r=Y(t);let s=a(1);e&&(i?T(i)&&(s=G(i)):s=G(t));const l=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==D(t))&&e}(r,n,i)?Q(r):a(0);let c=(o.left+l.x)/s.x,d=(o.top+l.y)/s.y,h=o.width/s.x,u=o.height/s.y;if(r){const t=D(r),e=i&&T(i)?D(i):i;let n=t,o=X(n);for(;o&&i&&e!==n;){const t=G(o),e=o.getBoundingClientRect(),i=K(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,s=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;c*=t.x,d*=t.y,h*=t.x,u*=t.y,c+=r,d+=s,n=D(o),o=X(n)}}return k({width:h,height:u,x:c,y:d})}function tt(t){return Z(P(t)).left+q(t).scrollLeft}function et(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=D(t),i=P(t),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,a=0;if(o){r=o.width,s=o.height;const t=U();(!t||t&&"fixed"===e)&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:s,x:l,y:a}}(t,n);else if("document"===e)i=function(t){const e=P(t),n=q(t),i=t.ownerDocument.body,o=r(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=r(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let l=-n.scrollLeft+tt(t);const a=-n.scrollTop;return"rtl"===K(i).direction&&(l+=r(e.clientWidth,i.clientWidth)-o),{width:o,height:s,x:l,y:a}}(P(t));else if(T(e))i=function(t,e){const n=Z(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=F(t)?G(t):a(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}(e,n);else{const n=Q(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return k(i)}function nt(t,e){const n=V(t);return!(n===e||!T(n)||N(n))&&("fixed"===K(n).position||nt(n,e))}function it(t,e,n){const i=F(e),o=P(e),r="fixed"===n,s=Z(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=a(0);if(i||!i&&!r)if(("body"!==C(e)||H(o))&&(l=q(e)),i){const t=Z(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else o&&(c.x=tt(o));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function ot(t){return"static"===K(t).position}function rt(t,e){return F(t)&&"fixed"!==K(t).position?e?e(t):t.offsetParent:null}function st(t,e){const n=D(t);if(W(t))return n;if(!F(t)){let e=V(t);for(;e&&!N(e);){if(T(e)&&!ot(e))return e;e=V(e)}return n}let i=rt(t,e);for(;i&&M(i)&&ot(i);)i=rt(i,e);return i&&N(i)&&ot(i)&&!z(i)?n:i||function(t){let e=V(t);for(;F(e)&&!N(e);){if(z(e))return e;if(W(e))return null;e=V(e)}return null}(t)||n}const lt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t;const r="fixed"===o,s=P(i),l=!!e&&W(e.floating);if(i===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},d=a(1);const h=a(0),u=F(i);if((u||!u&&!r)&&(("body"!==C(i)||H(s))&&(c=q(i)),F(i))){const t=Z(i);d=G(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-c.scrollLeft*d.x+h.x,y:n.y*d.y-c.scrollTop*d.y+h.y}},getDocumentElement:P,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:s}=t;const l=[..."clippingAncestors"===n?W(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let i=$(t,[],!1).filter((t=>T(t)&&"body"!==C(t))),o=null;const r="fixed"===K(t).position;let s=r?V(t):t;for(;T(s)&&!N(s);){const e=K(s),n=z(s);n||"fixed"!==e.position||(o=null),(r?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||H(s)&&!n&&nt(t,s))?i=i.filter((t=>t!==s)):o=e,s=V(s)}return e.set(t,i),i}(e,this._c):[].concat(n),i],a=l[0],c=l.reduce(((t,n)=>{const i=et(e,n,s);return t.top=r(i.top,t.top),t.right=o(i.right,t.right),t.bottom=o(i.bottom,t.bottom),t.left=r(i.left,t.left),t}),et(e,a,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:st,getElementRects:async function(t){const e=this.getOffsetParent||st,n=this.getDimensions,i=await n(t.floating);return{reference:it(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=_(t);return{width:e,height:n}},getScale:G,isElement:T,isRTL:function(t){return"rtl"===K(t).direction}};function at(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:h=!1}=i,u=Y(t),f=s||a?[...u?$(u):[],...$(e)]:[];f.forEach((t=>{s&&t.addEventListener("scroll",n,{passive:!0}),a&&t.addEventListener("resize",n)}));const m=u&&d?function(t,e){let n,i=null;const s=P(t);function a(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function c(d,h){void 0===d&&(d=!1),void 0===h&&(h=1),a();const{left:u,top:f,width:m,height:p}=t.getBoundingClientRect();if(d||e(),!m||!p)return;const g={rootMargin:-l(f)+"px "+-l(s.clientWidth-(u+m))+"px "+-l(s.clientHeight-(f+p))+"px "+-l(u)+"px",threshold:r(0,o(1,h))||1};let w=!0;function v(t){const e=t[0].intersectionRatio;if(e!==h){if(!w)return c();e?c(!1,e):n=setTimeout((()=>{c(!1,1e-7)}),1e3)}w=!1}try{i=new IntersectionObserver(v,{...g,root:s.ownerDocument})}catch(y){i=new IntersectionObserver(v,g)}i.observe(t)}(!0),a}(u,n):null;let p,g=-1,w=null;c&&(w=new ResizeObserver((t=>{let[i]=t;i&&i.target===u&&w&&(w.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),n()})),u&&!h&&w.observe(u),w.observe(e));let v=h?Z(t):null;return h&&function e(){const i=Z(t);!v||i.x===v.x&&i.y===v.y&&i.width===v.width&&i.height===v.height||n();v=i,p=requestAnimationFrame(e)}(),n(),()=>{var t;f.forEach((t=>{s&&t.removeEventListener("scroll",n),a&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=w)||t.disconnect(),w=null,h&&cancelAnimationFrame(p)}}const ct=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=e,a=await async function(t,e){const{placement:n,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),s=f(n),l=m(n),a="y"===w(n),c=["left","top"].includes(s)?-1:1,d=r&&a?-1:1,h=u(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:v}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof v&&(g="end"===l?-1*v:v),a?{x:g*d,y:p*c}:{x:p*c,y:g*d}}(e,t);return s===(null==(n=l.offset)?void 0:n.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:o+a.x,y:r+a.y,data:{...a,placement:s}}}}},dt=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=u(t,e),c={x:n,y:i},d=await L(e,a),m=w(f(o)),g=p(m);let v=c[g],y=c[m];if(r){const t="y"===g?"bottom":"right";v=h(v+d["y"===g?"top":"left"],v,v-d[t])}if(s){const t="y"===m?"bottom":"right";y=h(y+d["y"===m?"top":"left"],y,y-d[t])}const b=l.fn({...e,[g]:v,[m]:y});return{...b,data:{x:b.x-n,y:b.y-i}}}}},ht=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:E=!0,...k}=u(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const A=f(o),S=w(l),I=f(l)===l,R=await(null==a.isRTL?void 0:a.isRTL(c.floating)),C=p||(I||!E?[x(l)]:function(t){const e=x(t);return[b(t),e,b(e)]}(l)),D="none"!==v;!p&&D&&C.push(...function(t,e,n,i){const o=m(t);let r=function(t,e,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?r:s;default:return[]}}(f(t),"start"===n,i);return o&&(r=r.map((t=>t+"-"+o)),e&&(r=r.concat(r.map(b)))),r}(l,E,v,R));const P=[l,...C],O=await L(e,k),T=[];let F=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&T.push(O[A]),h){const t=y(o,s,R);T.push(O[t[0]],O[t[1]])}if(F=[...F,{placement:o,overflows:T}],!T.every((t=>t<=0))){var B,H;const t=((null==(B=r.flip)?void 0:B.index)||0)+1,e=P[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(H=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:H.placement;if(!n)switch(g){case"bestFit":{var M;const t=null==(M=F.filter((t=>{if(D){const e=w(t.placement);return e===S||"y"===e}return!0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:M[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},ut=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...o}=u(t,e);switch(i){case"referenceHidden":{const t=S(await L(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:I(t)}}}case"escaped":{const t=S(await L(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:I(t)}}}default:return{}}}}},ft=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:l,elements:a,middlewareData:c}=e,{element:d,padding:f=0}=u(t,e)||{};if(null==d)return{};const p=E(f),w={x:n,y:i},y=v(r),b=g(y),x=await l.getDimensions(d),k="y"===y,A=k?"top":"left",L=k?"bottom":"right",S=k?"clientHeight":"clientWidth",I=s.reference[b]+s.reference[y]-w[y]-s.floating[b],R=w[y]-s.reference[y],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(d));let D=C?C[S]:0;D&&await(null==l.isElement?void 0:l.isElement(C))||(D=a.floating[S]||s.floating[b]);const P=I/2-R/2,O=D/2-x[b]/2-1,T=o(p[A],O),F=o(p[L],O),B=T,H=D-x[b]-F,M=D/2-x[b]/2+P,W=h(B,M,H),z=!c.arrow&&null!=m(r)&&M!==W&&s.reference[b]/2-(M<B?T:F)-x[b]/2<0,U=z?M<B?M-B:M-H:0;return{[y]:w[y]+U,data:{[y]:W,centerOffset:M-W-U,...z&&{alignmentOffset:U}},reset:z}}}),mt=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:i,rects:s,platform:l,strategy:a}=e,{padding:c=2,x:d,y:h}=u(t,e),m=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),p=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let i=null;for(let o=0;o<e.length;o++){const t=e[o];!i||t.y-i.y>i.height/2?n.push([t]):n[n.length-1].push(t),i=t}return n.map((t=>k(R(t))))}(m),g=k(R(m)),v=E(c);const y=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===p.length&&p[0].left>p[1].right&&null!=d&&null!=h)return p.find((t=>d>t.left-v.left&&d<t.right+v.right&&h>t.top-v.top&&h<t.bottom+v.bottom))||g;if(p.length>=2){if("y"===w(n)){const t=p[0],e=p[p.length-1],i="top"===f(n),o=t.top,r=e.bottom,s=i?t.left:e.left,l=i?t.right:e.right;return{top:o,bottom:r,left:s,right:l,width:l-s,height:r-o,x:s,y:o}}const t="left"===f(n),e=r(...p.map((t=>t.right))),i=o(...p.map((t=>t.left))),s=p.filter((n=>t?n.left===i:n.right===e)),l=s[0].top,a=s[s.length-1].bottom;return{top:l,bottom:a,left:i,right:e,width:e-i,height:a-l,x:i,y:l}}return g}},floating:i.floating,strategy:a});return s.reference.x!==y.reference.x||s.reference.y!==y.reference.y||s.reference.width!==y.reference.width||s.reference.height!==y.reference.height?{reset:{rects:y}}:{}}}},pt=(t,e,n)=>{const i=new Map,o={platform:lt,...n},r={...o.platform,_c:i};return(async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=A(c,i,a),u=i,f={},m=0;for(let p=0;p<l.length;p++){const{name:n,fn:r}=l[p],{x:g,y:w,data:v,reset:y}=await r({x:d,y:h,initialPlacement:i,placement:u,strategy:o,middlewareData:f,rects:c,platform:s,elements:{reference:t,floating:e}});d=null!=g?g:d,h=null!=w?w:h,f={...f,[n]:{...f[n],...v}},y&&m<=50&&(m++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await s.getElementRects({reference:t,floating:e,strategy:o}):y.rects),({x:d,y:h}=A(c,u,a))),p=-1)}return{x:d,y:h,placement:u,strategy:o,middlewareData:f}})(t,e,{...o,platform:r})}},81932:(t,e,n)=>{n.d(e,{A:()=>o});var i=n(34954);class o{constructor(t,e,n){this.wrap=!1,this.items=t,this.container=e,this.callback=n,this.keyListener=(0,i.a)(e,"keydown",(t=>this.onKeyDown(t)))}getActiveIndex(){return document.activeElement?this.items.indexOf(document.activeElement):-1}onKeyDown(t){var e,n,i,o;const r=this.getActiveIndex();if(!(r<0))switch(t.key){case"ArrowDown":r<this.items.length-1?(t.preventDefault(),null===(e=this.callback)||void 0===e||e.call(this,r+1)):this.wrap&&(t.preventDefault(),null===(n=this.callback)||void 0===n||n.call(this,0));break;case"ArrowUp":r>0?(t.preventDefault(),null===(i=this.callback)||void 0===i||i.call(this,r-1)):this.wrap&&0===r&&(t.preventDefault(),null===(o=this.callback)||void 0===o||o.call(this,this.items.length-1))}}disconnect(){this.keyListener&&this.keyListener(),this.container=void 0,this.callback=void 0}}},71263:(t,e,n)=>{n.r(e),n.d(e,{ix_dropdown:()=>d});var i=n(39567),o=n(81779),r=n(81932),s=n(26822),l=n(44165),a=n(34954);let c=0;const d=class{constructor(t){(0,i.r)(this,t),this.showChanged=(0,i.c)(this,"showChanged",7),this.localUId="dropdown-"+c++,this.assignedSubmenu=[],this.itemObserver=new MutationObserver((()=>{this.arrowFocusController&&(this.arrowFocusController.items=this.dropdownItems)})),this.suppressAutomaticPlacement=!1,this.show=!1,this.trigger=void 0,this.anchor=void 0,this.closeBehavior="both",this.placement="bottom-start",this.positioningStrategy="fixed",this.header=void 0,this.offset=void 0,this.overwriteDropdownStyle=void 0,this.discoverAllSubmenus=!1,this.ignoreRelatedSubmenu=!1,this.suppressOverflowBehavior=!1}connectedCallback(){s.d.connected(this),null!=this.trigger&&this.registerListener(this.trigger)}cacheSubmenuId(t){t.stopImmediatePropagation(),t.preventDefault();const{detail:e}=t;-1===this.assignedSubmenu.indexOf(e)&&this.assignedSubmenu.push(e)}disconnectedCallback(){var t;s.d.dismiss(this),s.d.disconnected(this),this.arrowFocusController&&(null===(t=this.arrowFocusController)||void 0===t||t.disconnect(),this.arrowFocusController=void 0),this.itemObserver&&(this.itemObserver.disconnect(),this.itemObserver=void 0),this.disposeClickListener&&(this.disposeClickListener(),this.disposeClickListener=void 0),this.disposeKeyListener&&(this.disposeKeyListener(),this.disposeKeyListener=void 0),this.autoUpdateCleanup&&(this.autoUpdateCleanup(),this.autoUpdateCleanup=void 0)}getAssignedSubmenuIds(){return this.assignedSubmenu}isPresent(){return this.show}present(){this.show=!0}dismiss(){this.show=!1}getId(){return this.localUId}willDismiss(){const{defaultPrevented:t}=this.showChanged.emit(!1);return!t}willPresent(){const{defaultPrevented:t}=this.showChanged.emit(!0);return!t}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"))}get slotElement(){return this.hostElement.shadowRoot.querySelector("slot")}addEventListenersFor(){var t,e,n;null===(t=this.disposeClickListener)||void 0===t||t.call(this),null===(e=this.disposeKeyListener)||void 0===e||e.call(this);const i=()=>{this.isPresent()?s.d.dismiss(this):s.d.present(this),s.d.dismissOthers(this.getId())};this.triggerElement&&(this.disposeClickListener=(0,a.a)(this.triggerElement,"click",(t=>{t.defaultPrevented||i()})),null===(n=this.triggerElement)||void 0===n||n.setAttribute("data-ix-dropdown-trigger",this.localUId))}async discoverSubmenu(){var t;null===(t=this.triggerElement)||void 0===t||t.dispatchEvent(new CustomEvent("ix-assign-sub-menu",{bubbles:!0,composed:!0,cancelable:!0,detail:this.localUId}))}registerKeyListener(){this.triggerElement&&(this.disposeKeyListener=(0,a.a)(this.triggerElement,"keydown",(t=>{"ArrowDown"===t.key&&document.activeElement===this.triggerElement&&(s.d.present(this),setTimeout((()=>{this.focusDropdownItem(0)})))})))}async registerListener(t){this.triggerElement=await this.resolveElement(t),this.triggerElement&&(this.addEventListenersFor(),this.discoverSubmenu())}async resolveElement(t){const e=await(0,l.f)(t);return this.checkForSubmenuAnchor(e)}async checkForSubmenuAnchor(t){if(t){if((0,s.h)(t)){(await t.getDropdownItemElement()).isSubMenu=!0,this.hostElement.style.zIndex="var(--theme-z-index-dropdown)"}return"IX-DROPDOWN-ITEM"===t.tagName&&(t.isSubMenu=!0,this.hostElement.style.zIndex="var(--theme-z-index-dropdown)"),t}}async resolveAnchorElement(){this.anchor?this.anchorElement=await this.resolveElement(this.anchor):this.trigger&&(this.anchorElement=await this.resolveElement(this.trigger))}async changedShow(t){var e,n,i,o;t?(await this.resolveAnchorElement(),this.anchorElement&&this.applyDropdownPosition(),this.arrowFocusController=new r.A(this.dropdownItems,this.hostElement,(t=>this.focusDropdownItem(t))),null===(e=this.itemObserver)||void 0===e||e.observe(this.hostElement,{childList:!0,subtree:!0}),this.registerKeyListener()):(this.destroyAutoUpdate(),null===(n=this.arrowFocusController)||void 0===n||n.disconnect(),null===(i=this.itemObserver)||void 0===i||i.disconnect(),null===(o=this.disposeKeyListener)||void 0===o||o.call(this))}changedTrigger(t){this.registerListener(t)}destroyAutoUpdate(){this.autoUpdateCleanup&&(this.autoUpdateCleanup(),this.autoUpdateCleanup=void 0)}isAnchorSubmenu(){var t;return!!(0,s.h)(this.anchorElement)||!!(null===(t=this.anchorElement)||void 0===t?void 0:t.closest("ix-dropdown-item"))}async applyDropdownPosition(){var t,e;if(!this.show)return;if(!this.anchorElement)return;const n=this.isAnchorSubmenu();let i={strategy:this.positioningStrategy,middleware:[]};this.suppressAutomaticPlacement||null===(t=i.middleware)||void 0===t||t.push((0,o.f)({fallbackStrategy:"initialPlacement"})),i.placement=n?"right-start":this.placement,i.middleware=[...(null===(e=i.middleware)||void 0===e?void 0:e.filter(Boolean))||[],(0,o.i)(),(0,o.s)()],this.offset&&i.middleware.push((0,o.o)(this.offset)),this.destroyAutoUpdate(),this.anchorElement&&(this.autoUpdateCleanup=(0,o.a)(this.anchorElement,this.hostElement,(async()=>{if(this.anchorElement){const t=await(0,o.c)(this.anchorElement,this.hostElement,i);Object.assign(this.hostElement.style,{top:"0",left:"0",transform:`translate(${Math.round(t.x)}px,${Math.round(t.y)}px)`})}if(this.overwriteDropdownStyle){const t=await this.overwriteDropdownStyle({dropdownRef:this.hostElement,triggerRef:this.triggerElement});Object.assign(this.hostElement.style,t)}}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0}))}focusDropdownItem(t){requestAnimationFrame((()=>{var e,n;const i=null===(n=null===(e=this.dropdownItems[t])||void 0===e?void 0:e.shadowRoot)||void 0===n?void 0:n.querySelector("button");i&&i.focus()}))}async componentDidLoad(){this.trigger&&this.changedTrigger(this.trigger)}async componentDidRender(){await this.applyDropdownPosition(),await this.resolveAnchorElement()}isTriggerElement(t){return!!t.hasAttribute("data-ix-dropdown-trigger")}onDropdownClick(t){const e=s.d.pathIncludesTrigger(t.composedPath());e&&(e!==this.triggerElement&&t.preventDefault(),this.isTriggerElement(e))?"outside"===this.closeBehavior&&t.preventDefault():t.defaultPrevented||"inside"!==this.closeBehavior&&"both"!==this.closeBehavior?s.d.dismissOthers(this.getId()):s.d.dismissAll([this.getId()],this.ignoreRelatedSubmenu)}async updatePosition(){this.applyDropdownPosition()}render(){return(0,i.h)(i.H,{key:"f0cb7a478c8b8c066a7c163e83cbc101e6f3a5ec","data-ix-dropdown":this.localUId,class:{"dropdown-menu":!0,show:this.show,overflow:!this.suppressOverflowBehavior},style:{margin:"0",minWidth:"0px",position:this.positioningStrategy},role:"list",onClick:t=>this.onDropdownClick(t)},(0,i.h)("div",{key:"5431d09d3eb6b08f357ef7202617223ab3b347bf",style:{display:"contents"}},this.header&&(0,i.h)("div",{key:"b771273fe7292d3f253690b17955f13bb95ef56a",class:"dropdown-header"},this.header),this.show&&(0,i.h)("slot",{key:"0150080d095cce23717962df423ea6b8a137841e"})))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{show:["changedShow"],trigger:["changedTrigger"]}}};d.style=":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}"}}]);