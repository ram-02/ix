"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67636,8844],{30876:(e,r,o)=>{o.d(r,{Zo:()=>c,kt:()=>d});var t=o(2784);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function y(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),l=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},c=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},x={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=y(e,["components","mdxType","originalType","parentName"]),s=l(o),d=n,I=s["".concat(i,".").concat(d)]||s[d]||x[d]||a;return o?t.createElement(I,p(p({ref:r},c),{},{components:o})):t.createElement(I,p({ref:r},c))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=s;var y={};for(var i in r)hasOwnProperty.call(r,i)&&(y[i]=r[i]);y.originalType=e,y.mdxType="string"==typeof e?e:n,p[1]=y;for(var l=2;l<a;l++)p[l]=o[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}s.displayName="MDXCreateElement"},47187:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>x,frontMatter:()=>a,metadata:()=>y,toc:()=>l});var t=o(7896),n=(o(2784),o(30876));const a={},p=void 0,y={unversionedId:"auto-generated/previews/vue/grid",id:"auto-generated/previews/vue/grid",title:"grid",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/grid.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/grid",permalink:"/docs/auto-generated/previews/vue/grid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/grid.md",tags:[],version:"current",frontMatter:{}},i={},l=[],c={toc:l};function x(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxCol, IxLayoutGrid, IxRow, IxTypography } from \'@siemens/ix-vue\';\n<\/script>\n\n<style scoped>\nix-layout-grid {\n  margin-bottom: 1rem;\n}\n\nix-col {\n  background-color: var(--theme-color-primary);\n  border: var(--theme-std-bdr-2);\n  text-align: center;\n  color: var(--theme-color-inv-contrast-text);\n}\n\n.example-parent {\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n  background-color: var(--theme-color-info-40);\n}\n</style>\n\n<template>\n  <IxLayoutGrid>\n    <IxRow>\n      <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">6</IxTypography></IxCol>\n    </IxRow>\n  </IxLayoutGrid>\n\n  <IxLayoutGrid>\n    <IxRow>\n      <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">6</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">7</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">8</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">9</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">10</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">11</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">12</IxTypography></IxCol>\n    </IxRow>\n  </IxLayoutGrid>\n</template>\n\n\n')))}x.isMDXComponent=!0}}]);