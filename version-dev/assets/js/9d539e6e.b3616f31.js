"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31075],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(n),m=o,b=g["".concat(p,".").concat(m)]||g[m]||l[m]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/web-component/icon-toggle-button-primary-ghost",id:"auto-generated/previews/web-component/icon-toggle-button-primary-ghost",title:"icon-toggle-button-primary-ghost",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/icon-toggle-button-primary-ghost.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/icon-toggle-button-primary-ghost",permalink:"/version-dev/docs/auto-generated/previews/web-component/icon-toggle-button-primary-ghost",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/icon-toggle-button-primary-ghost.md",tags:[],version:"current",frontMatter:{}},p={},u=[],s={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <ix-icon-toggle-button\n    variant="Primary"\n    ghost\n    icon="checkboxes"\n  ></ix-icon-toggle-button>\n  <ix-icon-toggle-button\n    variant="Primary"\n    ghost\n    icon="checkboxes"\n    pressed\n  ></ix-icon-toggle-button>\n  <ix-icon-toggle-button\n    variant="Primary"\n    ghost\n    icon="checkboxes"\n    disabled\n  ></ix-icon-toggle-button>\n  <ix-icon-toggle-button\n    variant="Primary"\n    ghost\n    icon="checkboxes"\n    disabled\n    loading\n  ></ix-icon-toggle-button>\n</div>\n')))}l.isMDXComponent=!0}}]);