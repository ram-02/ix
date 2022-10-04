import{r as t,c as e,h as i,H as n,g as r}from"./p-47ea9884.js";import{c as s,g as o,a as h}from"./p-37417714.js";import{r as a}from"./p-1c82637e.js";const c=o(s((function(t){t.exports=function t(e,i,n){function r(o,a){if(!i[o]){if(!e[o]){var c="function"==typeof h&&h;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[o]={exports:{}};e[o][0].call(u.exports,(function(t){return r(e[o][1][t]||t)}),u,u.exports,t,e,i,n)}return i[o].exports}for(var s="function"==typeof h&&h,o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,i){Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s={width:"100%",height:"100%"},o=function(t){return Number(t)==Number(t)},h="classList"in document.documentElement?function(t,e){t.classList.add(e)}:function(t,e){var i=t.getAttribute("class")||"";t.setAttribute("class",i+" "+e)},a=function(){function t(e,i){var n=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this._config={},this._lastRepaint=null,this._maxElementHeight=t.getMaxBrowserHeight(),this.refresh(e,i);var r=this._config;!function t(){var e=n._getScrollPosition(),i=n._lastRepaint;if(n._renderAnimationFrame=window.requestAnimationFrame(t),e!==i){var s=i?e-i:0;if(!i||s<0||s>n._averageHeight){var o=n._renderChunk();n._lastRepaint=e,!1!==o&&"function"==typeof r.afterRender&&r.afterRender()}}}()}return n(t,null,[{key:"create",value:function(e,i){return new t(e,i)}},{key:"mergeStyle",value:function(t,e){for(var i in e)t.style[i]!==e[i]&&(t.style[i]=e[i])}},{key:"getMaxBrowserHeight",value:function(){var e=document.createElement("div"),i=document.createElement("div");t.mergeStyle(e,{position:"absolute",height:"1px",opacity:0}),t.mergeStyle(i,{height:"1e7px"}),e.appendChild(i),document.body.appendChild(e);var n=i.offsetHeight;return document.body.removeChild(e),n}}]),n(t,[{key:"destroy",value:function(){window.cancelAnimationFrame(this._renderAnimationFrame)}},{key:"refresh",value:function(e,i){var n;if(Object.assign(this._config,s,i),!e||1!==e.nodeType)throw new Error("HyperList requires a valid DOM Node container");this._element=e;var h=this._config,a=this._scroller||h.scroller||document.createElement(h.scrollerTagName||"tr");if("boolean"!=typeof h.useFragment&&(this._config.useFragment=!0),!h.generate)throw new Error("Missing required `generate` function");if(!o(h.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(h.itemHeight)&&!o(h.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());this._itemHeights=o(h.itemHeight)?Array(h.total).fill(h.itemHeight):h.itemHeight,Object.keys(s).filter((function(t){return t in h})).forEach((function(t){var e=h[t],i=o(e);if(e&&"string"!=typeof e&&"number"!=typeof e)throw new Error("Invalid optional `"+t+"`, expected string or number");i&&(h[t]=e+"px")}));var c=Boolean(h.horizontal),l=h[c?"width":"height"];if(l){var u=o(l),d=!u&&"%"===l.slice(-1),f=u?l:parseInt(l.replace(/px|%/,""),10),v=window[c?"innerWidth":"innerHeight"];this._containerSize=d?v*f/100:o(l)?l:f}var m=h.scrollContainer,p=h.itemHeight*h.total,g=this._maxElementHeight;p>g&&console.warn(["HyperList: The maximum element height",g+"px has","been exceeded; please reduce your item height."].join(" ")),t.mergeStyle(e,{width:""+h.width,height:m?p+"px":""+h.height,overflow:m?"none":"auto",position:"relative"}),m&&t.mergeStyle(h.scrollContainer,{overflow:"auto"});var x=(r(n={opacity:"0",position:"absolute"},c?"height":"width","1px"),r(n,c?"width":"height",p+"px"),n);t.mergeStyle(a,x),this._scroller||e.appendChild(a);var w=this._computeScrollPadding();this._scrollPaddingBottom=w.bottom,this._scrollPaddingTop=w.top,this._scroller=a,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(h.total).fill(0),this._computePositions(0),this._renderChunk(null!==this._lastRepaint),"function"==typeof h.afterRender&&h.afterRender()}},{key:"_getRow",value:function(e){var i=this._config,n=i.generate(e),s=n.height;if(void 0!==s&&o(s)?(n=n.element,s!==this._itemHeights[e]&&(this._itemHeights[e]=s,this._computePositions(e),this._scrollHeight=this._computeScrollHeight(e))):s=this._itemHeights[e],!n||1!==n.nodeType)throw new Error("Generator did not return a DOM Node for index: "+e);return h(n,i.rowClassName||"vrow"),t.mergeStyle(n,r({position:"absolute"},i.horizontal?"left":"top",this._itemPositions[e]+this._scrollPaddingTop+"px")),n}},{key:"_getScrollPosition",value:function(){var t=this._config;return"function"==typeof t.overrideScrollPosition?t.overrideScrollPosition():this._element[t.horizontal?"scrollLeft":"scrollTop"]}},{key:"_renderChunk",value:function(t){var e=this._config,i=this._element,n=this._getScrollPosition(),r=e.total,s=e.reverse?this._getReverseFrom(n):this._getFrom(n)-1;if((s<0||s-this._screenItemsLen<0)&&(s=0),!t&&this._lastFrom===s)return!1;this._lastFrom=s;var o=s+this._cachedItemsLen;(o>r||o+this._cachedItemsLen>r)&&(o=r);var h=e.useFragment?document.createDocumentFragment():[];h[e.useFragment?"appendChild":"push"](this._scroller);for(var a=s;a<o;a++){var c=this._getRow(a);h[e.useFragment?"appendChild":"push"](c)}if(e.applyPatch)return e.applyPatch(i,h);i.innerHTML="",i.appendChild(h)}},{key:"_computePositions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this._config,i=e.total,n=e.reverse;t<1&&!n&&(t=1);for(var r=t;r<i;r++)n?0===r?this._itemPositions[0]=this._scrollHeight-this._itemHeights[0]:this._itemPositions[r]=this._itemPositions[r-1]-this._itemHeights[r]:this._itemPositions[r]=this._itemHeights[r-1]+this._itemPositions[r-1]}},{key:"_computeScrollHeight",value:function(){var e,i=this,n=this._config,s=Boolean(n.horizontal),o=n.total,h=this._itemHeights.reduce((function(t,e){return t+e}),0)+this._scrollPaddingBottom+this._scrollPaddingTop;t.mergeStyle(this._scroller,(r(e={opacity:0,position:"absolute",top:"0px"},s?"height":"width","1px"),r(e,s?"width":"height",h+"px"),e));var a=this._itemHeights.slice(0).sort((function(t,e){return t-e})),c=Math.floor(o/2),l=o%2==0?(a[c]+a[c-1])/2:a[c],u=s?"clientWidth":"clientHeight",d=n.scrollContainer?n.scrollContainer:this._element,f=d[u]?d[u]:this._containerSize;return this._screenItemsLen=Math.ceil(f/l),this._containerSize=f,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,3*this._screenItemsLen),this._averageHeight=l,n.reverse&&window.requestAnimationFrame((function(){s?i._element.scrollLeft=h:i._element.scrollTop=h})),h}},{key:"_computeScrollPadding",value:function(){var t=this._config,e=Boolean(t.horizontal),i=t.reverse,n=window.getComputedStyle(this._element),r=function(t){var e=n.getPropertyValue("padding-"+t);return parseInt(e,10)||0};return e&&i?{bottom:r("left"),top:r("right")}:e?{bottom:r("right"),top:r("left")}:i?{bottom:r("top"),top:r("bottom")}:{bottom:r("bottom"),top:r("top")}}},{key:"_getFrom",value:function(t){for(var e=0;this._itemPositions[e]<t;)e++;return e}},{key:"_getReverseFrom",value:function(t){for(var e=this._config.total-1;e>0&&this._itemPositions[e]<t+this._containerSize;)e--;return e}}]),t}();i.default=a,e.exports=i.default},{}]},{},[1])(1)}))),l=class{constructor(i){t(this,i),this.contextChange=e(this,"contextChange",7),this.nodeRemoved=e(this,"nodeRemoved",7),this.context={},this.toggleListener=new Map,this.itemClickListener=new Map,this.updates=new Map}getVirtualizerOptions(){const t=this.buildTreeList(this.model[this.root]);return{itemHeight:32,total:t.length,generate:e=>{const i=t[e],n=this.host.querySelector(`[data-tree-node-id="${i.id}"]`),r=this.getContext(i.id);if(n)return n.hasChildren=i.hasChildren,n.context=Object.assign({},r),this.updates.has(i.id)&&this.updates.get(i.id)(i,Object.assign({},this.context)),n;const s=t=>{this.updates.set(i.id,t)};let o=null;this.renderItem&&(o=this.renderItem(e,i,t,Object.assign({},this.context),s)),null===o&&(o=a(i,r,s));const h=o;if(h.setAttribute("data-tree-node-id",i.id),h.style.paddingLeft=i.level+"rem",h.style.paddingRight="1rem",!this.itemClickListener.has(h)){const t=t=>{t.preventDefault(),t.stopPropagation(),Object.values(this.context).forEach((t=>t.isSelected=!1));const e=this.getContext(i.id);e.isSelected=!0,this.setContext(i.id,e)};h.addEventListener("itemClick",t),this.itemClickListener.set(h,t)}if(i.hasChildren&&!this.toggleListener.has(h)){const n=n=>{n.preventDefault(),n.stopPropagation();const r=this.getContext(t[e].id);r.isExpanded=!r.isExpanded,this.setContext(i.id,r)};h.addEventListener("toggle",n),this.toggleListener.set(h,n)}return h}}}setContext(t,e){this.context=Object.assign(Object.assign({},this.context),{[t]:e}),this.contextChange.emit(this.context)}getContext(t){return this.context?(this.context[t]||(this.context[t]={isExpanded:!1,isSelected:!1}),this.context[t]):{isExpanded:!1,isSelected:!1}}buildTreeList(t,e=0){const i=[];if(null==t?void 0:t.hasChildren){const n=e+1;t.children.forEach((t=>{const r=this.model[t],s=this.getContext(t);i.push(Object.assign(Object.assign({},r),{level:e})),r.hasChildren&&s.isExpanded&&i.push(...this.buildTreeList(r,n))}))}return i}componentDidLoad(){const t=this.getVirtualizerOptions();this.hyperlist=new c(this.host,t),this.observer=new MutationObserver((t=>{let e=[];t.forEach((t=>{e=[...e,...Array.from(t.removedNodes)],t.addedNodes.forEach((t=>{const i=e.indexOf(t);i>=0&&e.splice(i,1)}))})),this.nodeRemoved.emit(e)})),this.observer.observe(this.host,{childList:!0})}componentWillRender(){this.refreshList()}disconnectedCallback(){this.hyperlist.destroy(),this.observer.disconnect()}modelChange(){this.refreshList()}refreshList(){this.hyperlist&&this.hyperlist.refresh(this.host,this.getVirtualizerOptions())}render(){return i(n,null,i("slot",null))}get host(){return r(this)}static get watchers(){return{model:["modelChange"]}}};l.style=".sc-ix-tree-h{display:block}";const u=class{constructor(i){t(this,i),this.toggle=e(this,"toggle",7),this.itemClick=e(this,"itemClick",7)}render(){var t,e,r;return i(n,{class:{selected:null===(t=this.context)||void 0===t?void 0:t.isSelected}},i("div",{class:"icon-toggle-container",onClick:t=>{t.preventDefault(),this.toggle.emit()}},this.hasChildren?i("ix-icon",{name:"chevron-right",size:"16",class:{"icon-toggle-down":null===(e=this.context)||void 0===e?void 0:e.isExpanded},color:"color-"+((null===(r=this.context)||void 0===r?void 0:r.isExpanded)?"primary":"std-text")}):null),i("div",{class:"tree-node-container",onClick:t=>{t.preventDefault(),this.itemClick.emit()}},this.text,i("slot",null)))}};u.style=".sc-ix-tree-item-h{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).hover,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):hover{background-color:var(--theme-ghost-hover)}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).active,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):active{background-color:var(--theme-ghost-pressed)}.selected.sc-ix-tree-item-h{background-color:var(--theme-ghost-selected)}.sc-ix-tree-item-h .tree-node-container.sc-ix-tree-item{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.sc-ix-tree-item{transition:transform 150ms ease-in-out}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.icon-toggle-down.sc-ix-tree-item{transform:rotate(90deg)}";export{l as ix_tree,u as ix_tree_item}