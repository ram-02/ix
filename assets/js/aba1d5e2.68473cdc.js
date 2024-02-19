"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40309,20944],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(t),m=o,g=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},20944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,s={unversionedId:"auto-generated/previews/angular/date-dropdown-user-range.ts",id:"auto-generated/previews/angular/date-dropdown-user-range.ts",title:"date-dropdown-user-range.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/date-dropdown-user-range.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/date-dropdown-user-range.ts",permalink:"/docs/auto-generated/previews/angular/date-dropdown-user-range.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/date-dropdown-user-range.ts.md",tags:[],version:"current",frontMatter:{}},c={},d=[],p={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { DateDropdownOption } from '@siemens/ix';\n\nconst today = new Date().toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst lastSevenDays = new Date(\n  new Date().getTime() - 7 * 24 * 60 * 60 * 1000\n).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './date-dropdown-user-range.html',\n})\nexport default class DateDropdownUserRange {\n  dateDropdownOptions: DateDropdownOption[] = [\n    {\n      id: 'last-7',\n      label: 'Last 7 days',\n      from: lastSevenDays,\n      to: today,\n    },\n    {\n      id: 'today',\n      label: 'Today',\n      from: today,\n      to: today,\n    },\n  ];\n}\n\n")))}u.isMDXComponent=!0}}]);