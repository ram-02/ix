"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[947],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),v=a,g=m["".concat(l,".").concat(v)]||m[v]||s[v]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/angular/map-navigation-overlay",id:"auto-generated/previews/angular/map-navigation-overlay",title:"map-navigation-overlay",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/map-navigation-overlay.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/map-navigation-overlay",permalink:"/docs/auto-generated/previews/angular/map-navigation-overlay",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/map-navigation-overlay.md",tags:[],version:"current",frontMatter:{}},l={},p=[],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-map-navigation-overlay\',\n  template: `\n    <ix-map-navigation\n      application-name="Test Application"\n      navigation-title="Some other content"\n    >\n      <ix-icon name="rocket" slot="logo"></ix-icon>\n      <ix-menu>\n        <ix-menu-item>Item 1</ix-menu-item>\n        <ix-menu-item>Item 2</ix-menu-item>\n        <ix-menu-item>Item 3</ix-menu-item>\n      </ix-menu>\n      <div slot="sidebar-content">Sidebar content</div>\n      <ix-button (click)="showOverlay = true">Show overlay</ix-button>\n      <ix-map-navigation-overlay\n        *ngIf="showOverlay"\n        name="Custom overlay title"\n        icon="bulb"\n        slot="overlay"\n        (closeClick)="showOverlay = false"\n      ></ix-map-navigation-overlay>\n    </ix-map-navigation>\n  `,\n})\nexport class MapNavigationOverlay {\n  showOverlay = true;\n}\n')))}s.isMDXComponent=!0}}]);