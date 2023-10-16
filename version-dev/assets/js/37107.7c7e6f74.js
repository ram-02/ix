"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37107],{37107:(e,t,o)=>{o.r(t),o.d(t,{ix_group_context_menu:()=>i,ix_group_item:()=>n});var r=o(35254),s=o(84351);const i=class{constructor(e){(0,r.r)(this,e),this.showContextMenu=!1}getTrigger(){return this.hostElement}configureDropdown(e,t){e.positioningStrategy="fixed",e.trigger=t}onSlotChange(){const e=this.hostElement.shadowRoot.querySelector("slot");if(!e)return;const t=(0,s.g)(e);this.showContextMenu=0!==t.length;const o=t.find((e=>"IX-DROPDOWN"===e.tagName)),r=this.getTrigger();r&&o&&this.configureDropdown(o,r)}render(){return(0,r.h)(r.H,null,(0,r.h)("ix-icon-button",{class:{hide:!this.showContextMenu},size:"24",ghost:!0,icon:"context-menu"}),(0,r.h)("slot",{onSlotchange:()=>this.onSlotChange()}))}get hostElement(){return(0,r.g)(this)}};i.style=":host{display:block;position:relative;height:2rem;width:2rem;-webkit-margin-before:0.3125rem;margin-block-start:0.3125rem;-webkit-margin-end:0.3125rem;margin-inline-end:0.3125rem;-webkit-margin-start:auto;margin-inline-start:auto}:host .hide{visibility:collapse}";const n=class{constructor(e){(0,r.r)(this,e),this.selectedChanged=(0,r.c)(this,"selectedChanged",7),this.icon=void 0,this.text=void 0,this.secondaryText=void 0,this.suppressSelection=!1,this.selected=void 0,this.focusable=!0,this.index=void 0}clickListen(){this.suppressSelection||this.selectedChanged.emit(this.hostElement)}render(){return(0,r.h)(r.H,{class:{selected:this.selected&&!this.suppressSelection,"suppress-selection":this.suppressSelection}},(0,r.h)("button",{tabindex:this.focusable?0:-1},(0,r.h)("div",{class:"group-entry-selection-indicator"}),this.icon?(0,r.h)("ix-icon",{size:"16",name:this.icon}):null,this.text?(0,r.h)("span",{class:"group-entry-text"},(0,r.h)("span",{title:this.text},this.text)):null,this.secondaryText?(0,r.h)("span",{class:"group-entry-text-secondary"},(0,r.h)("span",{title:this.secondaryText},this.secondaryText)):null,(0,r.h)("slot",null)))}get hostElement(){return(0,r.g)(this)}};n.style=":host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);padding-left:2.5rem}:host>button:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:not(.suppress-selection):hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(:not(.suppress-selection).selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:not(.suppress-selection):active){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(:not(.suppress-selection).selected:active){background-color:var(--theme-color-ghost--selected-active)}"},84351:(e,t,o)=>{function r(e){return e.assignedElements({flatten:!0})}function s(e){return!!e&&0!==e.assignedElements({flatten:!0}).length}o.d(t,{g:()=>r,h:()=>s})}}]);