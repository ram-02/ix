"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22066],{22066:(o,r,t)=>{t.r(r),t.d(r,{ix_modal_content:()=>s,ix_modal_header:()=>l});var e=t(39567),a=t(37707);const s=class{constructor(o){(0,e.r)(this,o)}render(){return(0,e.h)(e.H,{key:"a9138b068e31e29e69d65a77ff670504fc80b99f"},(0,e.h)("slot",{key:"3b97af0889d2b483ad0d3b9a37da195a5aba331a"}))}};s.style=":host{display:block;position:relative;overflow:auto;padding:0 0.5rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";const l=class{constructor(o){(0,e.r)(this,o),this.closeClick=(0,e.c)(this,"closeClick",7),this.hideClose=!1,this.icon=void 0,this.iconColor=void 0}onIconChange(o){this.parentDialog&&(o?this.parentDialog.classList.add("with-icon"):this.parentDialog.classList.remove("with-icon"))}componentDidLoad(){this.parentDialog=(0,a.a)(this.hostElement,"ix-modal"),this.onIconChange(this.icon)}onCloseClick(o){this.closeClick.emit(o).defaultPrevented||o.defaultPrevented||this.parentDialog.dismissModal()}render(){return(0,e.h)(e.H,{key:"eac3267570af0578a96e5d3f229c739e22b8f71e"},this.icon?(0,e.h)("ix-icon",{name:this.icon,color:this.iconColor,size:"32"}):null,(0,e.h)("div",{key:"824929ed3b5362eaf28084d84ae87a9837f44d57",class:"modal-title"},(0,e.h)("ix-typography",{key:"97bd809f9ffd90d8d87bc6ee46c488892ae950b5",format:"h5"},(0,e.h)("slot",{key:"52b95892d06e0247096362dc40e1afd296392170"}))),this.hideClose?null:(0,e.h)("ix-icon-button",{class:"modal-close",onClick:o=>this.onCloseClick(o),ghost:!0,icon:"close"}))}get hostElement(){return(0,e.g)(this)}static get watchers(){return{icon:["onIconChange"]}}};l.style=":host{display:flex;padding:0.5rem 0 0.5rem 0.5rem;align-items:center;gap:1rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1}:host .modal-close{align-self:flex-start}"},37707:(o,r,t)=>{function e(o,r){return r?r.closest(o)||e(o,r.getRootNode().host):null}function a(o){return o.assignedElements({flatten:!0})}function s(o){return!!o&&0!==o.assignedElements({flatten:!0}).length}function l(o,r){return o?o instanceof ShadowRoot?l(o.host,r):o instanceof HTMLElement&&o.matches(r)?o:l(o.parentNode,r):null}t.d(r,{a:()=>l,c:()=>e,g:()=>a,h:()=>s})}}]);