"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78914],{18509:(e,o,t)=>{t.d(o,{a:()=>r,b:()=>a,g:()=>n});const r=e=>e?"true":"false",n=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let o;try{o=new URL(e)}catch(t){return!1}return"http:"===o.protocol||"https:"===o.protocol})(e))return"Unknown";if((o=e)&&"string"==typeof o&&o.startsWith("data:image/svg+xml"))return"Unknown";var o;const t=e.replace("-filled","").split("-").map((e=>{const o=e.trim(),t=o.replace(/\d+/g,"");return 0===t.length?o:t})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===t.length?"Unknown":t},a=function(e,o){void 0===o&&(o=[]);const t={};return i.forEach((r=>{var n;if(e.hasAttribute(r)){null===e.getAttribute(r)||o.includes(r)||(t[r]=null!==(n=e.getAttribute(r))&&void 0!==n?n:"",e.removeAttribute(r))}})),t},i=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},39815:(e,o,t)=>{t.d(o,{B:()=>s,g:()=>l});var r=t(39567);const n=e=>e.toUpperCase()==="Danger".toUpperCase(),a=e=>e.toUpperCase()==="Primary".toUpperCase(),i=e=>e.toUpperCase()==="Secondary".toUpperCase(),l=function(e,o,t,r,l,d,s){return void 0===r&&(r=!1),void 0===l&&(l=!1),{btn:!0,"btn-danger":n(e)&&!o&&!t,"btn-outline-danger":n(e)&&o&&!t,"btn-invisible-danger":n(e)&&!o&&t,"btn-primary":a(e)&&!o&&!t,"btn-outline-primary":a(e)&&o&&!t,"btn-invisible-primary":a(e)&&!o&&t,"btn-secondary":i(e)&&!o&&!t,"btn-outline-secondary":i(e)&&o&&!t,"btn-invisible-secondary":i(e)&&!o&&t,"btn-icon":r,"btn-oval":l,selected:d,disabled:s}},d=e=>{if(!e.icon)return"small";switch(e.iconSize){case"12":return"xx-small";case"16":return"x-small";default:return"small"}},s=(e,o)=>{var t,n,a;const i=null!==(t=e.extraClasses)&&void 0!==t?t:{},s=null!==(n=e.ariaAttributes)&&void 0!==n?n:{};return!s["aria-disabled"]&&e.disabled&&(s["aria-disabled"]="true"),(0,r.h)("button",Object.assign({},s,{onClick:o=>e.onClick?e.onClick(o):void 0,tabindex:e.disabled?-1:null!==(a=e.tabIndex)&&void 0!==a?a:0,type:e.type,class:Object.assign(Object.assign({},l(e.variant,e.outline,e.ghost,e.iconOnly,e.iconOval,e.selected,e.disabled||e.loading)),i)}),e.loading?(0,r.h)("ix-spinner",{size:d(e),hideTrack:!0}):null,e.icon&&!e.loading?(0,r.h)("ix-icon",{class:"icon",name:e.icon,size:e.iconSize,color:e.iconColor}):null,(0,r.h)("div",{class:{content:!0,[`content-${e.alignment}`]:!!e.alignment}},o),e.afterContent?e.afterContent:null)}},78914:(e,o,t)=>{t.r(o),t.d(o,{ix_pagination:()=>i});var r=t(39567),n=t(39815),a=t(18509);const i=class{constructor(e){(0,r.r)(this,e),this.pageSelected=(0,r.c)(this,"pageSelected",7),this.itemCountChanged=(0,r.c)(this,"itemCountChanged",7),this.baseButtonConfig={variant:"secondary",outline:!1,ghost:!0,iconOnly:!0,iconOval:!1,disabled:!1,icon:"",loading:!1,selected:!1,type:"button",extraClasses:{"w-auto":!0}},this.maxCountPages=7,this.advanced=!1,this.itemCount=15,this.showItemCount=!0,this.count=void 0,this.selectedPage=0,this.i18nPage="Page",this.i18nOf="of",this.i18nItems="Items"}selectPage(e){e<0?this.selectedPage=0:e>this.count-1?this.selectedPage=this.count-1:this.selectedPage=e,this.pageSelected.emit(this.selectedPage)}increase(){this.selectedPage!==this.count-1&&this.selectPage(this.selectedPage+1)}decrease(){0!==this.selectedPage&&this.selectPage(this.selectedPage-1)}getPageButton(e){const o=Object.assign(Object.assign({},this.baseButtonConfig),{onClick:()=>this.selectPage(e),selected:this.selectedPage===e,ariaAttributes:{"aria-pressed":(0,a.a)(this.selectedPage===e)}});return(0,r.h)(n.B,Object.assign({},o),e+1)}renderPageButtons(){const e=Math.floor(this.maxCountPages/2),o=this.count>this.maxCountPages,t=o&&this.selectedPage>e,a=o&&this.selectedPage<this.count-e-1,i=[];let l=0,d=Math.min(this.count,this.maxCountPages),s=Math.floor((this.maxCountPages-4)/2);if(t){const e=Object.assign(Object.assign({},this.baseButtonConfig),{onClick:()=>{a?this.selectPage(this.selectedPage-Math.max(0,2*s+1)):this.selectPage(this.count-this.maxCountPages)}});i.push(this.getPageButton(0)),i.push((0,r.h)(n.B,Object.assign({},e),"...")),a?l=this.count-this.maxCountPages+2:(l=this.count-this.maxCountPages+2,d=this.count)}a&&(t?(l=this.selectedPage-s,d=this.selectedPage+s+1):d=this.maxCountPages-2);for(let r=l;r<d;r++)i.push(this.getPageButton(r));if(a){const e=Object.assign(Object.assign({},this.baseButtonConfig),{onClick:()=>{t?this.selectPage(this.selectedPage+Math.max(0,2*s+1)):this.selectPage(this.maxCountPages-1)}});i.push((0,r.h)(n.B,Object.assign({},e),"...")),i.push(this.getPageButton(this.count-1))}return(0,r.h)("span",{class:"page-buttons"},i)}render(){return(0,r.h)(r.H,{key:"26c89fb826fd57be72c1dad05750c8ea5b3e740b"},(0,r.h)("ix-icon-button",{key:"9d9a40a6064232632a35b27716e392d9cd9ba790",disabled:!this.count||0===this.selectedPage,ghost:!0,icon:"chevron-left-small",onClick:()=>this.decrease()}),this.advanced?(0,r.h)("div",{class:"advanced-pagination"},(0,r.h)("ix-typography",{format:"body"},this.i18nPage),(0,r.h)("input",{class:"form-control page-selection",type:"number",min:"1",max:this.count,value:this.selectedPage+1,onChange:e=>{const o=Number.parseInt(e.target.value);this.selectPage(o-1)}}),(0,r.h)("span",{class:"total-count"},(0,r.h)("ix-typography",{format:"body"},this.i18nOf," ",this.count))):(0,r.h)("span",{class:"basic-pagination"},this.renderPageButtons()," "),(0,r.h)("ix-icon-button",{key:"f07f5031a9a4638f03a1fc880950ed357533e06a",disabled:!this.count||this.selectedPage===this.count-1,ghost:!0,icon:"chevron-right-small",onClick:()=>this.increase()}),this.advanced&&this.showItemCount?(0,r.h)("span",{class:"item-count"},(0,r.h)("ix-typography",{format:"body"},this.i18nItems),(0,r.h)("ix-select",{hideListHeader:!0,i18nPlaceholder:"",i18nSelectListHeader:"",value:`${this.itemCount}`,onValueChange:e=>{const o=Number.parseInt(Array.isArray(e.detail)?e.detail[0]:e.detail);this.itemCountChanged.emit(o)}},(0,r.h)("ix-select-item",{label:"10",value:"10"}),(0,r.h)("ix-select-item",{label:"15",value:"15"}),(0,r.h)("ix-select-item",{label:"20",value:"20"}),(0,r.h)("ix-select-item",{label:"40",value:"40"}),(0,r.h)("ix-select-item",{label:"100",value:"100"}))):"")}get hostElement(){return(0,r.g)(this)}};i.style=".form-control,.form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}.form-control::-moz-placeholder,.form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}.form-control::placeholder,.form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control:focus-visible{color:var(--theme-input--color)}.form-control[type=number]{text-align:right}.form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.form-control.readonly,.form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}.form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control:read-only,.form-control[readonly],.form-control[readOnly],.form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control:read-only::-moz-placeholder,.form-control[readonly]::-moz-placeholder,.form-control[readOnly]::-moz-placeholder,.form-control.readonly::-moz-placeholder{color:transparent}.form-control:-moz-read-only::placeholder{color:transparent}.form-control:read-only::placeholder,.form-control[readonly]::placeholder,.form-control[readOnly]::placeholder,.form-control.readonly::placeholder{color:transparent}.form-control:disabled,.form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.form-control:disabled::-moz-placeholder,.form-control.disabled::-moz-placeholder{color:transparent}.form-control:disabled::placeholder,.form-control.disabled::placeholder{color:transparent}.form-control-plaintext{outline:0}.form-group{position:relative}.input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper>input{padding-inline-start:2.2rem}select.form-control{padding:0 0.312rem}textarea.form-control{padding:0.375rem 0.5rem}input.disabled,input:disabled{color:var(--theme-input--color--disabled)}input:-moz-read-only{cursor:default}input:read-only,input.readonly{cursor:default}:host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}*,*::after,*::before{box-sizing:border-box}::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){*{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}::-webkit-scrollbar{width:0.5rem;height:0.5rem}::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}::-webkit-scrollbar-corner{display:none}:host .btn-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-danger,:host .btn-danger.focus,:host .btn-danger:focus-visible{background-color:var(--theme-btn-danger--background);color:var(--theme-btn-danger--color);--ix-button-color:var(--theme-btn-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger--border-color);border-style:solid}:host .btn-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):active,:host .btn-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-danger--border-color--hover);background-color:var(--theme-btn-danger--background--hover);color:var(--theme-btn-danger--color--hover)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):active,:host .btn-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger--border-color--active);background-color:var(--theme-btn-danger--background--active);color:var(--theme-btn-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger.disabled,:host(.disabled) .btn-danger:disabled{pointer-events:none;border-color:var(--theme-btn-danger--border-color--disabled);background-color:var(--theme-btn-danger--background--disabled);color:var(--theme-btn-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger--color--disabled)}:host .btn-outline-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-danger,:host .btn-outline-danger.focus,:host .btn-outline-danger:focus-visible{background-color:var(--theme-btn-outline-danger--background);color:var(--theme-btn-outline-danger--color);--ix-button-color:var(--theme-btn-outline-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-danger--border-color);border-style:solid}:host .btn-outline-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):active,:host .btn-outline-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-danger--border-color--hover);background-color:var(--theme-btn-outline-danger--background--hover);color:var(--theme-btn-outline-danger--color--hover)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):active,:host .btn-outline-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-danger--border-color--active);background-color:var(--theme-btn-outline-danger--background--active);color:var(--theme-btn-outline-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-danger.disabled,:host(.disabled) .btn-outline-danger:disabled{pointer-events:none;border-color:var(--theme-btn-outline-danger--border-color--disabled);background-color:var(--theme-btn-outline-danger--background--disabled);color:var(--theme-btn-outline-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-danger--color--disabled)}:host .btn-invisible-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-danger,:host .btn-invisible-danger.focus,:host .btn-invisible-danger:focus-visible{background-color:var(--theme-btn-invisible-danger--background);color:var(--theme-btn-invisible-danger--color);--ix-button-color:var(--theme-btn-invisible-danger--color);border-color:transparent}:host .btn-invisible-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-danger--background--hover);color:var(--theme-btn-invisible-danger--color--hover)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):active,:host .btn-invisible-danger:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-danger--background--active);color:var(--theme-btn-invisible-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-danger.disabled,:host(.disabled) .btn-invisible-danger:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-danger--background--disabled);color:var(--theme-btn-invisible-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-danger--color--disabled)}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{display:inline-flex;justify-content:center;align-items:center}:host button{width:100%;height:100%;overflow:hidden;padding:0}:host button.btn-oval{border-radius:6.25rem}:host ix-icon{color:var(--ix-icon-button-color, currentColor);margin:0}:host ix-spinner{margin:0}:host(.btn-icon-12){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host(.btn-icon-16){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host(.btn-icon-32){height:2rem;width:2rem;min-width:2rem;min-height:2rem}:host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host,:host .advanced-pagination,:host .item-count{display:inline-flex;align-items:center}:host .basic-pagination{padding:0 0.125rem}:host .advanced-pagination{padding:0 0.75rem}:host .page-selection{width:4.125rem;text-align:center;margin:0 0.5rem;-moz-appearance:textfield;-webkit-appearance:textfield}:host .page-buttons{white-space:nowrap}:host .total-count{white-space:nowrap}:host .item-count{flex-grow:1;justify-content:flex-end;margin-inline-start:1.5rem}:host .item-count ix-select{width:4.5rem;margin-inline-start:1.5rem}:host button{width:auto;min-width:2rem;height:2rem;padding:0 0.5rem}:host button+button{margin-inline-start:0.125rem}"}}]);