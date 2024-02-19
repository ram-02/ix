"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65074],{65074:(t,e,l)=>{l.r(e),l.d(e,{ix_card_list:()=>r});var i=l(92398),s=l(90450);function o(t){return""===t.label?null:(0,i.h)("div",{class:"CardList_Title"},(0,i.h)("ix-icon-button",{ghost:!0,icon:"chevron-down",onClick:t.onClick,color:"color-primary",class:{CardList__Title__Button:!0,CardList__Title__Button__Collapsed:t.isCollapsed}}),(0,i.h)("ix-typography",{variant:"large-single"},t.label),(0,i.h)("ix-button",{class:"CardList__Title__Show__All",ghost:!0,onClick:t.onShowAllClick},(0,i.h)("span",null,t.showAllLabel),(0,i.h)("span",null,isNaN(t.showAllCounter)?null:` (${t.showAllCounter})`)))}const r=class{constructor(t){(0,i.r)(this,t),this.collapseChanged=(0,i.c)(this,"collapseChanged",7),this.showAllClick=(0,i.c)(this,"showAllClick",7),this.showMoreCardClick=(0,i.c)(this,"showMoreCardClick",7),this.label=void 0,this.collapse=!1,this.listStyle="stack",this.maxVisibleCards=12,this.showAllCount=void 0,this.suppressOverflowHandling=!1,this.i18nShowAll="Show all",this.i18nMoreCards="There are more cards available",this.hasOverflowingElements=!1,this.numberOfOverflowingElements=0,this.numberOfAllChildElements=0,this.leftScrollDistance=0,this.rightScrollDistance=0}onCardListVisibilityToggle(){this.collapse=!this.collapse,this.collapseChanged.emit(this.collapse)}onShowAllClick(t){this.showAllClick.emit({nativeEvent:t})}getListChildren(){return this.hostElement.shadowRoot.querySelector(".CardList__Content > slot").assignedElements({flatten:!0})}changeVisibilityOfSlotChildren(){const t=this.getListChildren();t.forEach(((t,e)=>{if(t instanceof HTMLElement){if(e>this.maxVisibleCards-1)return void t.classList.add("d-none");t.classList.remove("d-none")}})),this.hasOverflowingElements=t.length>this.maxVisibleCards,this.numberOfOverflowingElements=t.length-this.maxVisibleCards,this.numberOfAllChildElements=t.length,this.detectOverflow()}registerOverflowHandler(){this.observer=(0,s.c)((()=>{this.changeVisibilityOfSlotChildren()})),this.observer.observe(this.hostElement.shadowRoot.querySelector(".CardList__Content"),{childList:!0,subtree:!0}),requestAnimationFrame((()=>{this.changeVisibilityOfSlotChildren()}))}shouldHandleOverflow(){return!this.suppressOverflowHandling&&("stack"===this.listStyle||"scroll"===this.listStyle||void 0)}get listElement(){return this.hostElement.shadowRoot.querySelector(".CardList__Content")}onCardListScroll(){this.detectOverflow()}isShowMoreCardVisible(){return!1===this.suppressOverflowHandling&&this.hasOverflowingElements}getOpacityFromScrollDistance(t){return this.listElement?0===t?0:t>100?1:t/100:0}computeMaskLayer(){return{"--ix-card-list-overflow":`linear-gradient(\n      90deg,\n      transparent 0px,\n      black ${80*(this.getOpacityFromScrollDistance(this.leftScrollDistance)>0?1:0)}px,\n      black calc(100% - ${80*(this.getOpacityFromScrollDistance(this.rightScrollDistance)>0?1:0)}px),\n      transparent 100%\n    )`}}detectOverflow(){const{clientWidth:t,scrollWidth:e,scrollLeft:l}=this.listElement;this.leftScrollDistance=l,this.rightScrollDistance=e-l-t}componentDidLoad(){this.shouldHandleOverflow()&&this.registerOverflowHandler()}disconnectedCallback(){this.observer&&this.observer.disconnect()}render(){return(0,i.h)(i.H,{key:"c328d27069ea738a47d5887b8fc92026eb41ed41"},(0,i.h)(o,{key:"846c7c0a11d45da394795bec62a345daa1c44cf0",isCollapsed:this.collapse,label:this.label,showAllLabel:this.i18nShowAll,showAllCounter:void 0===this.showAllCount?this.numberOfAllChildElements:this.showAllCount,onClick:()=>this.onCardListVisibilityToggle(),onShowAllClick:t=>this.onShowAllClick(t)}),(0,i.h)("div",{key:"56889ca9212e46c12653179c8a981b2e43277231",class:{CardList__Overflow:!0},style:this.computeMaskLayer()},(0,i.h)("div",{key:"9befdceda0ca5ba093f170e3e0e4e58ddbd06113",class:{CardList__Content:!0,CardList__Content__Collapsed:this.collapse,CardList__Style__Flexbox__Scroll:"stack"===this.listStyle,CardList__Style__Infinite__Scroll:"scroll"===this.listStyle},onScroll:()=>this.onCardListScroll()},(0,i.h)("slot",{key:"36c242f6e1400a7e0258b005b5a558db5c9fe210",onSlotchange:()=>this.changeVisibilityOfSlotChildren()}),this.isShowMoreCardVisible()?(0,i.h)("ix-card",{class:{Show__All__Card:!0},onClick:t=>this.showMoreCardClick.emit({nativeEvent:t})},(0,i.h)("ix-card-content",{class:"Show__All__Card__Content"},(0,i.h)("ix-icon",{name:"more-menu",size:"32",class:"Show__All__Card__Icon"}),(0,i.h)("span",{class:"Show__All__Card__Text"},this.i18nMoreCards," (",this.numberOfOverflowingElements,")"))):null)))}get hostElement(){return(0,i.g)(this)}};r.style=":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;margin:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .CardList_Title{display:flex;position:relative;height:1.5rem;align-items:center;width:100%;margin-bottom:0.5rem}:host .CardList__Title__Button{margin-right:1rem;transition:var(--theme-default-time) transform ease-in-out}:host .CardList__Title__Button__Collapsed{transform:rotate(-90deg)}:host .CardList__Title__Show__All{align-self:center;margin-left:auto;margin-right:0px}:host .CardList__Content{display:flex;position:relative;height:calc(100% - 1.5rem);width:100%;gap:1.5rem;transition:var(--theme-default-time) ease-in-out;overflow:auto}:host .CardList__Content__Collapsed{min-height:0px;max-height:0px;overflow:hidden;opacity:0}:host .CardList__Style__Flexbox__Scroll{flex-wrap:wrap}:host .CardList__Style__Infinite__Scroll{flex-wrap:nowrap;-ms-overflow-style:none;scrollbar-width:none}:host .CardList__Style__Infinite__Scroll::-webkit-scrollbar{display:none}:host .CardList__Overflow{display:block;position:relative;height:100%;width:100%;pointer-events:all;-webkit-mask-image:var(--ix-card-list-overflow, none);mask-image:var(--ix-card-list-overflow, none)}:host .Show__All__Card{display:flex;position:relative;align-self:flex-start;justify-self:center;max-width:11.25rem;min-width:11.25rem;width:11.25rem;min-height:11.25rem;max-height:11.25rem;height:11.25rem;--ix-card-border-color:var(--theme-color-primary);color:var(--theme-color-primary)}:host .CardList__Style__Infinite__Scroll .Show__All__Card{margin-top:2.375rem}:host .CardList__Style__Flexbox__Scroll .Show__All__Card{margin-bottom:2.375rem}:host .Show__All__Card:hover{background-color:var(--theme-color-ghost--hover)}:host .Show__All__Card:active{background-color:var(--theme-color-ghost--active)}:host .Show__All__Card__Content{display:flex;justify-content:center;align-items:center}:host .Show__All__Card__Icon{display:flex;position:absolute;height:4rem;width:4rem;justify-content:center;align-items:center}:host .Show__All__Card__Text{margin-bottom:0px;margin-top:auto}"},90450:(t,e,l)=>{l.d(e,{c:()=>i});const i=t=>new MutationObserver(t)}}]);