"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73283],{354:(t,e,n)=>{n.d(e,{a:()=>lt,b:()=>R,c:()=>st,f:()=>L,i:()=>k,o:()=>C,s:()=>S});const o=Math.min,i=Math.max,r=Math.round,l=Math.floor,s=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},a={start:"end",end:"start"};function f(t,e,n){return i(t,o(e,n))}function u(t,e){return"function"==typeof t?t(e):t}function h(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function m(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(h(t))?"y":"x"}function y(t){return p(g(t))}function w(t){return t.replace(/start|end/g,(t=>a[t]))}function x(t){return t.replace(/left|right|bottom|top/g,(t=>c[t]))}function v(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function b(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function T(t,e,n){let{reference:o,floating:i}=t;const r=g(e),l=y(e),s=m(l),c=h(e),a="y"===r,f=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,p=o[s]/2-i[s]/2;let w;switch(c){case"top":w={x:f,y:o.y-i.height};break;case"bottom":w={x:f,y:o.y+o.height};break;case"right":w={x:o.x+o.width,y:u};break;case"left":w={x:o.x-i.width,y:u};break;default:w={x:o.x,y:o.y}}switch(d(e)){case"start":w[l]-=p*(n&&a?-1:1);break;case"end":w[l]+=p*(n&&a?-1:1)}return w}async function E(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=u(e,t),m=v(p),g=s[d?"floating"===h?"reference":"floating":h],y=b(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:a,rootBoundary:f,strategy:c})),w="floating"===h?{...l.floating,x:o,y:i}:l.reference,x=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),T=await(null==r.isElement?void 0:r.isElement(x))&&await(null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},E=b(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:c}):w);return{top:(y.top-E.top+m.top)/T.y,bottom:(E.bottom-y.bottom+m.bottom)/T.y,left:(y.left-E.left+m.left)/T.x,right:(E.right-y.right+m.right)/T.x}}const R=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:l,platform:s,elements:c}=e,{element:a,padding:h=0}=u(t,e)||{};if(null==a)return{};const p=v(h),g={x:n,y:i},w=y(r),x=m(w),b=await s.getDimensions(a),T="y"===w,E=T?"top":"left",R=T?"bottom":"right",L=T?"clientHeight":"clientWidth",A=l.reference[x]+l.reference[w]-g[w]-l.floating[x],k=g[w]-l.reference[w],C=await(null==s.getOffsetParent?void 0:s.getOffsetParent(a));let S=C?C[L]:0;S&&await(null==s.isElement?void 0:s.isElement(C))||(S=c.floating[L]||l.floating[x]);const P=A/2-k/2,D=S/2-b[x]/2-1,O=o(p[E],D),F=o(p[R],D),M=O,W=S-b[x]-F,B=S/2-b[x]/2+P,H=f(M,B,W),z=null!=d(r)&&B!=H&&l.reference[x]/2-(B<M?O:F)-b[x]/2<0?B<M?M-B:W-B:0;return{[w]:g[w]-z,data:{[w]:H,centerOffset:B-H+z}}}}),L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:s,elements:c}=e,{mainAxis:a=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:b=!0,...T}=u(t,e),R=h(o),L=h(l)===l,A=await(null==s.isRTL?void 0:s.isRTL(c.floating)),k=p||(L||!b?[x(l)]:function(t){const e=x(t);return[w(t),e,w(e)]}(l));p||"none"===v||k.push(...function(t,e,n,o){const i=d(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(h(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(w)))),r}(l,b,v,A));const C=[l,...k],S=await E(e,T),P=[];let D=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&P.push(S[R]),f){const t=function(t,e,n){void 0===n&&(n=!1);const o=d(t),i=y(t),r=m(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=x(l)),[l,x(l)]}(o,r,A);P.push(S[t[0]],S[t[1]])}if(D=[...D,{placement:o,overflows:P}],!P.every((t=>t<=0))){var O,F;const t=((null==(O=i.flip)?void 0:O.index)||0)+1,e=C[t];if(e)return{data:{index:t,overflows:D},reset:{placement:e}};let n=null==(F=D.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:F.placement;if(!n)switch(g){case"bestFit":{var M;const t=null==(M=D.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:M[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}};function A(t){const e=o(...t.map((t=>t.left))),n=o(...t.map((t=>t.top)));return{x:e,y:n,width:i(...t.map((t=>t.right)))-e,height:i(...t.map((t=>t.bottom)))-n}}const k=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:r,rects:l,platform:s,strategy:c}=e,{padding:a=2,x:f,y:d}=u(t,e),p=Array.from(await(null==s.getClientRects?void 0:s.getClientRects(r.reference))||[]),m=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let o=null;for(let i=0;i<e.length;i++){const t=e[i];!o||t.y-o.y>o.height/2?n.push([t]):n[n.length-1].push(t),o=t}return n.map((t=>b(A(t))))}(p),y=b(A(p)),w=v(a);const x=await s.getElementRects({reference:{getBoundingClientRect:function(){if(2===m.length&&m[0].left>m[1].right&&null!=f&&null!=d)return m.find((t=>f>t.left-w.left&&f<t.right+w.right&&d>t.top-w.top&&d<t.bottom+w.bottom))||y;if(m.length>=2){if("y"===g(n)){const t=m[0],e=m[m.length-1],o="top"===h(n),i=t.top,r=e.bottom,l=o?t.left:e.left,s=o?t.right:e.right;return{top:i,bottom:r,left:l,right:s,width:s-l,height:r-i,x:l,y:i}}const t="left"===h(n),e=i(...m.map((t=>t.right))),r=o(...m.map((t=>t.left))),l=m.filter((n=>t?n.left===r:n.right===e)),s=l[0].top,c=l[l.length-1].bottom;return{top:s,bottom:c,left:r,right:e,width:e-r,height:c-s,x:r,y:s}}return y}},floating:r.floating,strategy:c});return l.reference.x!==x.reference.x||l.reference.y!==x.reference.y||l.reference.width!==x.reference.width||l.reference.height!==x.reference.height?{reset:{rects:x}}:{}}}};const C=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=h(n),s=d(n),c="y"===g(n),a=["left","top"].includes(l)?-1:1,f=r&&c?-1:1,p=u(e,t);let{mainAxis:m,crossAxis:y,alignmentAxis:w}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return s&&"number"==typeof w&&(y="end"===s?-1*w:w),c?{x:y*f,y:m*a}:{x:m*a,y:y*f}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},S=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=u(t,e),a={x:n,y:o},d=await E(e,c),m=g(h(i)),y=p(m);let w=a[y],x=a[m];if(r){const t="y"===y?"bottom":"right";w=f(w+d["y"===y?"top":"left"],w,w-d[t])}if(l){const t="y"===m?"bottom":"right";x=f(x+d["y"===m?"top":"left"],x,x-d[t])}const v=s.fn({...e,[y]:w,[m]:x});return{...v,data:{x:v.x-n,y:v.y-o}}}}};function P(t){return F(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function O(t){var e;return null==(e=(F(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function F(t){return t instanceof Node||t instanceof D(t).Node}function M(t){return t instanceof Element||t instanceof D(t).Element}function W(t){return t instanceof HTMLElement||t instanceof D(t).HTMLElement}function B(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof D(t).ShadowRoot)}function H(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function z(t){return["table","td","th"].includes(P(t))}function V(t){const e=q(),n=N(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function q(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function I(t){return["html","body","#document"].includes(P(t))}function N(t){return D(t).getComputedStyle(t)}function U(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(t){if("html"===P(t))return t;const e=t.assignedSlot||t.parentNode||B(t)&&t.host||O(t);return B(e)?e.host:e}function j(t){const e=$(t);return I(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&H(e)?e:j(e)}function _(t,e){var n;void 0===e&&(e=[]);const o=j(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=D(o);return i?e.concat(r,r.visualViewport||[],H(o)?o:[]):e.concat(o,_(o))}function X(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=W(t),l=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=r(n)!==l||r(o)!==s;return c&&(n=l,o=s),{width:n,height:o,$:c}}function Y(t){return M(t)?t:t.contextElement}function G(t){const e=Y(t);if(!W(e))return s(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:l}=X(e);let c=(l?r(n.width):n.width)/o,a=(l?r(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const J=s(0);function K(t){const e=D(t);return q()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Q(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=Y(t);let l=s(1);e&&(o?M(o)&&(l=G(o)):l=G(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==D(t))&&e}(r,n,o)?K(r):s(0);let a=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,u=i.width/l.x,h=i.height/l.y;if(r){const t=D(r),e=o&&M(o)?D(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=G(n),e=n.getBoundingClientRect(),o=N(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,f*=t.y,u*=t.x,h*=t.y,a+=i,f+=r,n=D(n).frameElement}}return b({width:u,height:h,x:a,y:f})}function Z(t){return Q(O(t)).left+U(t).scrollLeft}function tt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=D(t),o=O(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,c=0;if(i){r=i.width,l=i.height;const t=q();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:r,height:l,x:s,y:c}}(t,n);else if("document"===e)o=function(t){const e=O(t),n=U(t),o=t.ownerDocument.body,r=i(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=i(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Z(t);const c=-n.scrollTop;return"rtl"===N(o).direction&&(s+=i(e.clientWidth,o.clientWidth)-r),{width:r,height:l,x:s,y:c}}(O(t));else if(M(e))o=function(t,e){const n=Q(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=W(t)?G(t):s(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=K(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return b(o)}function et(t,e){const n=$(t);return!(n===e||!M(n)||I(n))&&("fixed"===N(n).position||et(n,e))}function nt(t,e,n){const o=W(e),i=O(e),r="fixed"===n,l=Q(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=s(0);if(o||!o&&!r)if(("body"!==P(e)||H(i))&&(c=U(e)),o){const t=Q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=Z(i));return{x:l.left+c.scrollLeft-a.x,y:l.top+c.scrollTop-a.y,width:l.width,height:l.height}}function ot(t,e){return W(t)&&"fixed"!==N(t).position?e?e(t):t.offsetParent:null}function it(t,e){const n=D(t);if(!W(t))return n;let o=ot(t,e);for(;o&&z(o)&&"static"===N(o).position;)o=ot(o,e);return o&&("html"===P(o)||"body"===P(o)&&"static"===N(o).position&&!V(o))?n:o||function(t){let e=$(t);for(;W(e)&&!I(e);){if(V(e))return e;e=$(e)}return null}(t)||n}const rt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=W(n),r=O(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=s(1);const a=s(0);if((i||!i&&"fixed"!==o)&&(("body"!==P(n)||H(r))&&(l=U(n)),W(n))){const t=Q(n);c=G(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+a.x,y:e.y*c.y-l.scrollTop*c.y+a.y}},getDocumentElement:O,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:l}=t;const s="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=_(t).filter((t=>M(t)&&"body"!==P(t))),i=null;const r="fixed"===N(t).position;let l=r?$(t):t;for(;M(l)&&!I(l);){const e=N(l),n=V(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||H(l)&&!n&&et(t,l))?o=o.filter((t=>t!==l)):i=e,l=$(l)}return e.set(t,o),o}(e,this._c):[].concat(n),c=[...s,r],a=c[0],f=c.reduce(((t,n)=>{const r=tt(e,n,l);return t.top=i(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),tt(e,a,l));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:it,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||it,r=this.getDimensions;return{reference:nt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return X(t)},getScale:G,isElement:M,isRTL:function(t){return"rtl"===N(t).direction}};function lt(t,e,n,r){void 0===r&&(r={});const{ancestorScroll:s=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,h=Y(t),d=s||c?[...h?_(h):[],..._(e)]:[];d.forEach((t=>{s&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)}));const p=h&&f?function(t,e){let n,r=null;const s=O(t);function c(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),c();const{left:h,top:d,width:p,height:m}=t.getBoundingClientRect();if(f||e(),!p||!m)return;const g={rootMargin:-l(d)+"px "+-l(s.clientWidth-(h+p))+"px "+-l(s.clientHeight-(d+m))+"px "+-l(h)+"px",threshold:i(0,o(1,u))||1};let y=!0;function w(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return a();e?a(!1,e):n=setTimeout((()=>{a(!1,1e-7)}),100)}y=!1}try{r=new IntersectionObserver(w,{...g,root:s.ownerDocument})}catch(x){r=new IntersectionObserver(w,g)}r.observe(t)}(!0),c}(h,n):null;let m,g=-1,y=null;a&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===h&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),h&&!u&&y.observe(h),y.observe(e));let w=u?Q(t):null;return u&&function e(){const o=Q(t);!w||o.x===w.x&&o.y===w.y&&o.width===w.width&&o.height===w.height||n();w=o,m=requestAnimationFrame(e)}(),n(),()=>{d.forEach((t=>{s&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)})),p&&p(),y&&y.disconnect(),y=null,u&&cancelAnimationFrame(m)}}const st=(t,e,n)=>{const o=new Map,i={platform:rt,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=T(a,o,c),h=o,d={},p=0;for(let m=0;m<s.length;m++){const{name:n,fn:r}=s[m],{x:g,y:y,data:w,reset:x}=await r({x:f,y:u,initialPlacement:o,placement:h,strategy:i,middlewareData:d,rects:a,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,d={...d,[n]:{...d[n],...w}},x&&p<=50&&(p++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(a=!0===x.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):x.rects),({x:f,y:u}=T(a,h,c))),m=-1)}return{x:f,y:u,placement:h,strategy:i,middlewareData:d}})(t,e,{...i,platform:r})}},73283:(t,e,n)=>{n.r(e),n.d(e,{ix_tooltip:()=>l});var o=n(44530),i=n(354);const r=t=>null!=t?`${t}px`:"",l=class{constructor(t){(0,o.r)(this,t),this.onMouseEnterBind=this.showTooltip.bind(this),this.onMouseLeaveBind=this.hideTooltip.bind(this),this.tooltipCloseTimeInMS=50,this.for=void 0,this.titleContent=void 0,this.interactive=!1,this.placement="top",this.visible=!1}get arrowElement(){return this.hostElement.shadowRoot.querySelector(".arrow")}destroyAutoUpdate(){void 0!==this.disposeAutoUpdate&&this.disposeAutoUpdate()}showTooltip(t){clearTimeout(this.hideTooltipTimeout),this.visible=!0,this.computeTooltipPosition(t.target)}hideTooltip(){this.hideTooltipTimeout=setTimeout((()=>{this.visible=!1}),this.tooltipCloseTimeInMS),this.destroyAutoUpdate()}computeArrowPosition(t){let{placement:e,middlewareData:n}=t,{x:o,y:i}=n.arrow;return e.startsWith("top")?{left:r(o),top:r(i)}:e.startsWith("right")?{left:r(-4),top:r(i)}:e.startsWith("bottom")?{left:r(o),top:r(-4)}:e.startsWith("left")?{right:r(-4),top:r(i)}:void 0}async computeTooltipPosition(t){this.disposeAutoUpdate=(0,i.a)(t,this.hostElement,(async()=>{setTimeout((async()=>{const e=await(0,i.c)(t,this.hostElement,{strategy:"fixed",placement:this.placement,middleware:[(0,i.s)(),(0,i.o)(8),(0,i.b)({element:this.arrowElement}),(0,i.f)({fallbackStrategy:"initialPlacement",padding:10})]});if(e.middlewareData.arrow){const t=this.computeArrowPosition(e);Object.assign(this.arrowElement.style,t)}const{x:n,y:o}=e;Object.assign(this.hostElement.style,{left:null!==n?`${n}px`:"",top:null!==o?`${o}px`:""})}))}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0})}queryAnchorElements(){return Array.from(document.querySelectorAll(this.for))}registerTriggerListener(){this.queryAnchorElements().forEach((t=>{t.addEventListener("mouseenter",this.onMouseEnterBind),t.addEventListener("mouseleave",this.onMouseLeaveBind)}))}registerTooltipListener(){this.hostElement.addEventListener("mouseenter",(()=>{this.interactive&&clearTimeout(this.hideTooltipTimeout)})),this.hostElement.addEventListener("mouseleave",(()=>{this.hideTooltip()}))}componentDidLoad(){this.interactive&&(this.tooltipCloseTimeInMS=150),this.observer=new MutationObserver((()=>{this.registerTriggerListener()})),this.observer.observe(document.body,{attributes:!0,attributeFilter:["data-ix-tooltip"],childList:!0,subtree:!0}),this.registerTriggerListener(),this.registerTooltipListener()}disconnectedCallback(){this.observer.disconnect(),this.destroyAutoUpdate()}render(){return(0,o.h)(o.H,{class:{visible:this.visible}},(0,o.h)("div",{class:"tooltip-title"},(0,o.h)("slot",{name:"title-icon"}),(0,o.h)("ix-typography",{variant:"default-title"},this.titleContent,(0,o.h)("slot",{name:"title-content"}))),(0,o.h)("div",{class:{"tooltip-content":!0}},(0,o.h)("slot",null)),(0,o.h)("div",{class:"arrow"}))}get hostElement(){return(0,o.g)(this)}};l.style=':host{display:inline-block;position:fixed;left:0px;top:0px;z-index:var(--theme-z-index-tooltip);max-width:18.25rem;opacity:0;visibility:collapse !important;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible !important}:host(.visible) .arrow,:host(.visible) .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host(.visible) .arrow{visibility:hidden}:host(.visible) .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}'}}]);