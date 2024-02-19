"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35779],{56960:(o,e,r)=>{r.d(e,{a:()=>t,b:()=>a,g:()=>i});const t=o=>o?"true":"false",i=o=>{if(!o)return"Unknown";if((o=>{if(!o)return!1;let e;try{e=new URL(o)}catch(r){return!1}return"http:"===e.protocol||"https:"===e.protocol})(o))return"Unknown";if((e=o)&&"string"==typeof e&&e.startsWith("data:image/svg+xml"))return"Unknown";var e;const r=o.replace("-filled","").split("-").map((o=>{const e=o.trim(),r=e.replace(/\d+/g,"");return 0===r.length?e:r})).map((o=>o.charAt(0).toUpperCase()+o.slice(1))).join(" ");return 0===r.length?"Unknown":r},a=function(o,e){void 0===e&&(e=[]);const r={};return n.forEach((t=>{if(o.hasAttribute(t)){null===o.getAttribute(t)||e.includes(t)||(r[t]=o.getAttribute(t),o.removeAttribute(t))}})),r},n=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},44959:(o,e,r)=>{r.d(e,{B:()=>l,g:()=>n});var t=r(92398);const i=o=>o.toUpperCase()==="Primary".toUpperCase(),a=o=>o.toUpperCase()==="Secondary".toUpperCase(),n=function(o,e,r,t,n,l,s){return void 0===t&&(t=!1),void 0===n&&(n=!1),{btn:!0,"btn-primary":i(o)&&!e&&!r,"btn-outline-primary":i(o)&&e&&!r,"btn-invisible-primary":i(o)&&!e&&r,"btn-secondary":a(o)&&!e&&!r,"btn-outline-secondary":a(o)&&e&&!r,"btn-invisible-secondary":a(o)&&!e&&r,"btn-icon":t,"btn-oval":n,selected:l,disabled:s}};function l(o,e){var r,i;const a=null!==(r=o.extraClasses)&&void 0!==r?r:{};return(0,t.h)("button",Object.assign({},o.ariaAttributes,{onClick:e=>o.onClick?o.onClick(e):void 0,tabindex:o.disabled?-1:null!==(i=o.tabIndex)&&void 0!==i?i:0,type:o.type,class:Object.assign(Object.assign({},n(o.variant,o.outline,o.ghost,o.iconOnly,o.iconOval,o.selected,o.disabled||o.loading)),a)}),o.loading?(0,t.h)("ix-spinner",{size:"small",hideTrack:!0}):null,o.icon&&!o.loading?(0,t.h)("ix-icon",{class:"icon",name:o.icon,size:o.iconSize,color:o.iconColor}):null,(0,t.h)("div",{class:{content:!0,[`content-${o.alignment}`]:!!o.alignment}},e),o.afterContent?o.afterContent:null)}},26715:(o,e,r)=>{r.d(e,{B:()=>a});var t=r(92398),i=r(44959);function a(o){return(0,t.h)(i.B,Object.assign({},o,{type:"button"}))}},35779:(o,e,r)=>{r.r(e),r.d(e,{ix_icon_button:()=>n,ix_spinner:()=>l});var t=r(92398),i=r(26715),a=r(56960);r(44959);const n=class{constructor(o){(0,t.r)(this,o),this.a11yLabel=void 0,this.variant="secondary",this.outline=void 0,this.ghost=void 0,this.oval=void 0,this.icon=void 0,this.size="24",this.color=void 0,this.iconColor=void 0,this.disabled=!1,this.type="button",this.loading=!1}componentDidLoad(){if("submit"===this.type){const o=document.createElement("button");o.style.display="none",o.type="submit",o.tabIndex=-1,this.hostElement.appendChild(o),this.submitButtonElement=o}}dispatchFormEvents(){"submit"===this.type&&this.submitButtonElement&&this.submitButtonElement.click()}getIconSizeClass(){return{"btn-icon-12":"12"===this.size,"btn-icon-16":"16"===this.size,"btn-icon-32":"32"===this.size||"24"===this.size||!this.size}}render(){var o;const e={ariaAttributes:{"aria-label":this.a11yLabel?this.a11yLabel:(0,a.g)(this.icon)},variant:this.variant,outline:this.outline,ghost:this.ghost,iconOnly:!0,iconOval:this.oval,selected:!1,disabled:this.disabled||this.loading,icon:this.icon,iconColor:null!==(o=this.iconColor)&&void 0!==o?o:this.color,iconSize:this.size,loading:this.loading,onClick:()=>this.dispatchFormEvents(),type:this.type,extraClasses:this.getIconSizeClass()};return(0,t.h)(t.H,{key:"7da24896eae7dce5de64057e70c6d996681d60b7",class:Object.assign(Object.assign({},this.getIconSizeClass()),{disabled:this.disabled||this.loading})},(0,t.h)(i.B,Object.assign({key:"067f21e0afca8fb01ea374d60fe51560ec203228"},e)))}get hostElement(){return(0,t.g)(this)}};n.style=":host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}*,*::after,*::before{box-sizing:border-box}::-webkit-scrollbar-button{display:none}::-webkit-scrollbar{width:0.5rem;height:0.5rem}::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}::-webkit-scrollbar-corner{display:none}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{display:inline-flex;justify-content:center;align-items:center}:host button{width:100%;height:100%;overflow:hidden;padding:0}:host button.btn-oval{border-radius:6.25rem}:host ix-icon{color:var(--ix-icon-button-color, currentColor);margin:0}:host ix-spinner{margin:0}:host(.btn-icon-12){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host(.btn-icon-16){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host(.btn-icon-32){height:2rem;width:2rem;min-width:2rem;min-height:2rem}:host(.btn-icon-12) ix-spinner{height:12px;width:12px}:host(.btn-icon-16) ix-spinner{height:16px;width:16px}:host(.btn-icon-32) ix-spinner{height:24px;width:24px}";const l=class{constructor(o){(0,t.r)(this,o),this.variant="secondary",this.size="medium",this.hideTrack=!1}render(){return(0,t.h)(t.H,{key:"6ca735841b5d203cf8ef66f8675f73d2988d7518",class:{primary:"primary"===this.variant,"xx-small":"xx-small"===this.size,"x-small":"x-small"===this.size,small:"small"===this.size,medium:"medium"===this.size,large:"large"===this.size,"hide-track":this.hideTrack}})}get hostElement(){return(0,t.g)(this)}};l.style=':host(.xx-small){display:block;position:relative;width:0.75rem;height:0.75rem;min-width:0.75rem;min-height:0.75rem;max-width:0.75rem;max-height:0.75rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.xx-small) *,:host(.xx-small) *::after,:host(.xx-small) *::before{box-sizing:border-box}:host(.xx-small) ::-webkit-scrollbar-button{display:none}:host(.xx-small) ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host(.xx-small) ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host(.xx-small) ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host(.xx-small) ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host(.xx-small) ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host(.xx-small) ::-webkit-scrollbar-corner{display:none}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.xx-small)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:1px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.xx-small)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:1px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}:host(.x-small){display:block;position:relative;width:1.25rem;height:1.25rem;min-width:1.25rem;min-height:1.25rem;max-width:1.25rem;max-height:1.25rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.x-small) *,:host(.x-small) *::after,:host(.x-small) *::before{box-sizing:border-box}:host(.x-small) ::-webkit-scrollbar-button{display:none}:host(.x-small) ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host(.x-small) ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host(.x-small) ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host(.x-small) ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host(.x-small) ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host(.x-small) ::-webkit-scrollbar-corner{display:none}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.x-small)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.x-small)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}:host(.small){display:block;position:relative;width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem;max-width:1.5rem;max-height:1.5rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.small) *,:host(.small) *::after,:host(.small) *::before{box-sizing:border-box}:host(.small) ::-webkit-scrollbar-button{display:none}:host(.small) ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host(.small) ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host(.small) ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host(.small) ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host(.small) ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host(.small) ::-webkit-scrollbar-corner{display:none}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.small)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.small)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}:host(.medium){display:block;position:relative;width:2rem;height:2rem;min-width:2rem;min-height:2rem;max-width:2rem;max-height:2rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.medium) *,:host(.medium) *::after,:host(.medium) *::before{box-sizing:border-box}:host(.medium) ::-webkit-scrollbar-button{display:none}:host(.medium) ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host(.medium) ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host(.medium) ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host(.medium) ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host(.medium) ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host(.medium) ::-webkit-scrollbar-corner{display:none}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.medium)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.medium)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}:host(.large){display:block;position:relative;width:6rem;height:6rem;min-width:6rem;min-height:6rem;max-width:6rem;max-height:6rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.large) *,:host(.large) *::after,:host(.large) *::before{box-sizing:border-box}:host(.large) ::-webkit-scrollbar-button{display:none}:host(.large) ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host(.large) ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host(.large) ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host(.large) ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host(.large) ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host(.large) ::-webkit-scrollbar-corner{display:none}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.large)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:4px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.large)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:4px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}'}}]);