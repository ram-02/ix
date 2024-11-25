"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12823],{12823:(e,i,t)=>{t.r(i),t.d(i,{ix_radio_group:()=>a});var n=t(39567),s=t(72356);var l=function(e,i,t,n){var s,l=arguments.length,a=l<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,i,t,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(l<3?s(a):l>3?s(i,t,a):s(i,t))||a);return l>3&&a&&Object.defineProperty(i,t,a),a};const a=class{constructor(e){(0,n.r)(this,e),this.valueChange=(0,n.c)(this,"valueChange",7),this.observer=new MutationObserver((()=>{this.ensureOnlyLastRadioChecked()})),this.helperText=void 0,this.label=void 0,this.value=void 0,this.invalidText=void 0,this.infoText=void 0,this.warningText=void 0,this.validText=void 0,this.showTextAsTooltip=void 0,this.direction="column",this.isInvalid=!1,this.isValid=!1,this.isInfo=!1,this.isWarning=!1}get radiobuttonElements(){return Array.from(this.hostElement.querySelectorAll("ix-radio"))}connectedCallback(){this.observer.observe(this.hostElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["checked"]})}componentWillLoad(){this.selectInitialValue(),this.ensureOnlyLastRadioChecked()}disconnectedCallback(){this.observer&&this.observer.disconnect()}selectInitialValue(){this.value&&this.radiobuttonElements.forEach((e=>{e.checked=e.value===this.value}))}ensureOnlyLastRadioChecked(){const e=this.radiobuttonElements.filter((e=>e.checked));e.forEach(((i,t)=>{t!==e.length-1&&(i.checked=!1)}))}onValueChangeHandler(e){this.radiobuttonElements.forEach((i=>{i.checked=i.value===e}))}onCheckedChangeHandler(e){this.radiobuttonElements.forEach((i=>{i===e.target?(i.checked=!0,this.valueChange.emit(i.value)):i.checked=!1}))}onClassField(e){let{isInvalid:i,isInfo:t,isValid:n,isWarning:s}=e;this.isInvalid=i,this.isInfo=t,this.isValid=n,this.isWarning=s}render(){return(0,n.h)(n.H,{key:"e34f29dfa844a5d74969e0d7d4524ac0b35ed819"},(0,n.h)("ix-field-wrapper",{key:"f146673dd9ff78690cc0b52378793b0c94b20fac",label:this.label,helperText:this.helperText,invalidText:this.invalidText,infoText:this.infoText,warningText:this.warningText,validText:this.validText,showTextAsTooltip:this.showTextAsTooltip,isValid:this.isValid,isInfo:this.isInfo,isWarning:this.isWarning,isInvalid:this.isInvalid},(0,n.h)("div",{key:"9280999ed1c6630ae9500e2f73de26a12ea1c417",class:{"checkbox-container":!0,"row-layout":"row"===this.direction}},(0,n.h)("slot",{key:"7556d4a6396633bc085ebf5cb12070d7a3c673e5"}))))}get hostElement(){return(0,n.g)(this)}static get watchers(){return{value:["onValueChangeHandler"]}}};l([(0,s.H)({includeChildren:!0})],a.prototype,"onClassField",null),a.style=":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}"},72356:(e,i,t)=>{t.d(i,{H:()=>r,a:()=>o,c:()=>l,s:()=>s});var n=t(39567);async function s(e){if(e.getAssociatedFormElement&&"function"==typeof e.getAssociatedFormElement){const i=await e.getAssociatedFormElement();return!!i&&i.noValidate}return!1}function l(e,i,t){const n=new MutationObserver(i);return n.observe(e,{subtree:null==t?void 0:t.includeChildren,childList:null==t?void 0:t.includeChildren,attributes:!0,attributeFilter:["class"]}),{destroy(){n.disconnect()}}}function a(e,i,t){return e.classList.contains(`${i}`)||!!t&&!!e.querySelector(`.${i}`)}function o(e,i){return void 0===i&&(i=!1),{isInvalid:a(e,"ix-invalid",i),isInvalidByRequired:a(e,"ix-invalid--required",i),isValid:a(e,"ix-valid",i),isInfo:a(e,"ix-info",i),isWarning:a(e,"ix-warning",i)}}function r(e){return(i,t)=>{let a,r;const{componentWillLoad:c,disconnectedCallback:d,connectedCallback:h}=i;i.connectedCallback=function(){const e=(0,n.g)(this);return a=async()=>{if(!await s(e)){if(e.hasValidValue&&"function"==typeof e.hasValidValue){const i=await e.hasValidValue();e.required?e.classList.toggle("ix-invalid--required",!i):e.classList.remove("ix-invalid--required")}if(e.getValidityState&&"function"==typeof e.getValidityState){const i=await e.getValidityState();Object.keys(i).filter((e=>["patternMismatch"].includes(e))).forEach((t=>{e.classList.toggle(`ix-invalid--${t}`,i[t])}))}}},e.addEventListener("valueChange",a),setTimeout(a),null==h?void 0:h.call(this)},i.componentWillLoad=function(){const s=(0,n.g)(this);r=l(s,(()=>{const n=o(s,null==e?void 0:e.includeChildren);i[t].call(this,n)}),e);const a=o(s,null==e?void 0:e.includeChildren);return i[t].call(this,a),null==c?void 0:c.call(this)},i.disconnectedCallback=function(){const e=(0,n.g)(this);return e&&r&&(r.destroy(),r=null),e&&a&&e.removeEventListener("valueChange",a),null==d?void 0:d.call(this)}}}}}]);