"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89170],{89170:(e,t,o)=>{o.r(t),o.d(t,{ix_tab_item:()=>a});var r=o(8823);const a=class{constructor(e){(0,r.r)(this,e),this.tabClick=(0,r.c)(this,"tabClick",7),this.selected=!1,this.disabled=!1,this.small=!1,this.icon=!1,this.rounded=!1,this.counter=void 0,this.layout="auto",this.placement="bottom"}tabItemClasses(e){return{selected:e.selected,disabled:e.disabled,"small-tab":e.small,icon:e.small,stretched:"stretched"===e.layout,bottom:"bottom"===e.placement,top:"top"===e.placement,circle:e.circle}}render(){return(0,r.h)(r.H,{class:this.tabItemClasses({selected:this.selected,disabled:this.disabled,small:this.small,icon:this.icon,layout:this.layout,placement:this.placement,circle:this.rounded}),tabIndex:0,onClick:e=>{this.tabClick.emit({nativeEvent:e}).defaultPrevented&&e.stopPropagation()}},(0,r.h)("div",{class:{circle:this.rounded,text:!this.rounded,selected:this.selected,disabled:this.disabled}},(0,r.h)("slot",null)),(0,r.h)("div",{class:{counter:!0,selected:this.selected,hidden:!(this.rounded&&void 0!==this.counter),disabled:this.disabled}},this.counter))}};a.style='@charset "UTF-8";:host{position:relative;display:flex;align-items:center;justify-content:center;height:40px;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}:host .text span,:host .text span::before{pointer-events:none}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an\u2026icon--color);cursor:pointer}:host .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.selected::after{display:none}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}:host .counter::after{display:none}:host .hidden{display:none}:host(.circle){height:72px}:host(.top) ::after{top:0}:host(.bottom) ::after{bottom:0}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:hover:not(.circle)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}:host(:hover:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--hover)}:host(:active:not(.circle)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(:active:not(.circle)) ::after{background-color:var(--theme-tab-indicator--background--active)}:host(:focus-visible){outline:0px solid var(--focus--border-color)}:host(:focus-visible) .circle{outline:1px solid var(--focus--border-color)}:host(:focus-visible:not(.circle)){outline:1px solid var(--focus--border-color)}:host(.disabled){pointer-events:none;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}:host(.disabled) ::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled)) ::after{background-color:var(--theme-tab-indicator--background--selected)}:host(.icon){padding:1.5rem 0.5rem}:host(.small-tab){height:32px;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}'}}]);