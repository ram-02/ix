"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98401],{98401:(t,o,e)=>{e.r(o),e.d(o,{ix_card_accordion:()=>r,ix_card_title:()=>i});var n=e(8823);let a=0;const r=class{constructor(t){(0,n.r)(this,t),this.accordionExpand=(0,n.c)(this,"accordionExpand",7),this.expandContent=!1}get expandedContent(){return this.hostElement.shadowRoot.querySelector(".expand-content")}onExpandActionClick(t){t.preventDefault(),t.stopPropagation(),this.expandContent=!this.expandContent,this.accordionExpand.emit({expand:this.expandContent,nativeEvent:t}),this.expandContent&&this.scrollExpandedContentIntoView()}scrollExpandedContentIntoView(){setTimeout((()=>{this.expandedContent.getBoundingClientRect().bottom>window.innerHeight&&this.hostElement.shadowRoot.querySelector(".expand-content").scrollIntoView(!1)}),150)}render(){return(0,n.h)(n.H,{slot:"card-accordion"},(0,n.h)("button",{tabIndex:0,class:{"expand-action":!0,show:this.expandContent},onClick:t=>this.onExpandActionClick(t),role:"button",type:"button","aria-expanded":this.expandContent,"aria-controls":(void 0===t&&(t="expand-content"),[t,a++].join("-"))},(0,n.h)("ix-icon",{name:"chevron-right-small",class:{"expand-icon":!0,show:this.expandContent}})),(0,n.h)("div",{class:{"expand-content":!0,show:this.expandContent}},(0,n.h)("div",{class:"expand-content-inner"},(0,n.h)("div",{class:"expand-content-body"},(0,n.h)("slot",null)),(0,n.h)("div",{class:"expand-content-footer"}))));var t}get hostElement(){return(0,n.g)(this)}};r.style=':host{display:flex;position:relative;flex-direction:column;width:100%;transition:var(--theme-default-time) ease-in-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .expand-action{all:unset;display:flex;position:relative;-webkit-appearance:button;-moz-appearance:button;appearance:button;height:2.5rem;width:100%;background-color:var(--theme-color-component-1);align-items:center;justify-content:flex-start}:host .expand-action:not(.disabled):not(:disabled).hover,:host .expand-action:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .expand-action:not(.disabled):not(:disabled).active,:host .expand-action:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .expand-action:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .expand-action::before{content:"";position:absolute;width:100%;height:100%;background-color:var(--ix-card-background);z-index:-1}:host .expand-action:not(.show),:host .expand-action:not(.show)::before{border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}:host .expand-icon{margin-left:0.5rem;transition:var(--theme-default-time) transform ease-in-out}:host .expand-icon.show{transform:rotate(90deg)}:host .expand-content{display:grid;position:relative;grid-template-rows:0fr;transition:var(--theme-default-time) ease-in-out;width:100%;max-height:14.75rem;opacity:0;background-color:var(--theme-color-component-1)}:host .expand-content.show{grid-template-rows:14.75rem;opacity:1}:host .expand-content-inner{position:relative;height:100%;overflow:hidden}:host .expand-content.show .expand-content-body{display:none;overflow:hidden;color:var(--theme-color-std-text)}:host .expand-content.show .expand-content-body{display:block;overflow:auto;height:calc(100% - 1rem)}:host .expand-content-footer{display:block;position:relative;width:100%;height:1rem;margin-top:auto;margin-bottom:0px;background-color:var(--theme-color-component-1);border-bottom-left-radius:var(--theme-default-border-radius);border-bottom-right-radius:var(--theme-default-border-radius)}';const i=class{constructor(t){(0,n.r)(this,t)}render(){return(0,n.h)(n.H,null,(0,n.h)("slot",null),(0,n.h)("div",{class:"title-actions"},(0,n.h)("slot",{name:"title-actions"})))}};i.style=":host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.5rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0px}"}}]);