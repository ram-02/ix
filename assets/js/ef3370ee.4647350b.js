"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48973],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/blind-header-actions.ts",id:"auto-generated/previews/angular/blind-header-actions.ts",title:"blind-header-actions.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/blind-header-actions.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/blind-header-actions.ts",permalink:"/docs/auto-generated/previews/angular/blind-header-actions.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/blind-header-actions.ts.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-blind label="Example" icon="info">\n      <ix-icon-button\n        id="context-menu"\n        slot="header-actions"\n        ghost\n        icon="context-menu"\n      ></ix-icon-button>\n      <ix-dropdown trigger="context-menu">test</ix-dropdown>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n      sit amet.\n    </ix-blind>\n  `,\n})\nexport default class Blind {}\n')))}d.isMDXComponent=!0}}]);