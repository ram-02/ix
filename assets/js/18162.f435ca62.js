"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18162],{18162:(e,t,o)=>{o.r(t),o.d(t,{ix_tree_item:()=>i});var r=o(39567);const i=class{constructor(e){(0,r.r)(this,e),this.toggle=(0,r.c)(this,"toggle",7),this.itemClick=(0,r.c)(this,"itemClick",7),this.text=void 0,this.hasChildren=!1,this.context=void 0}render(){var e,t,o;return(0,r.h)(r.H,{key:"0e92eced558f94df77f6ce6ac359395ecd3b1623",class:{selected:!!(null===(e=this.context)||void 0===e?void 0:e.isSelected)}},(0,r.h)("div",{key:"51c671e62ef92b7dc7080194fd566d58261e7481",class:"icon-toggle-container",onClick:e=>{e.preventDefault(),this.toggle.emit()}},this.hasChildren?(0,r.h)("ix-icon",{name:"chevron-right",size:"16",class:{"icon-toggle-down":!!(null===(t=this.context)||void 0===t?void 0:t.isExpanded)},color:"color-"+((null===(o=this.context)||void 0===o?void 0:o.isExpanded)?"primary":"std-text")}):null),(0,r.h)("div",{key:"da22cba786a63d23dcb56cb393438b6aacbbf185",class:"tree-node-container",onClick:()=>{this.itemClick.emit()}},(0,r.h)("div",{key:"02989a25709e9d964b6ac4ddbb073b0b92347bd5",class:"tree-node-text"},this.text),(0,r.h)("slot",{key:"d9acb398b2008935e305ef145cfca52f888e2334"})))}};i.style=":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--theme-default-time) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}"}}]);