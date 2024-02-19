"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29794,82289],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,y=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},82289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/vue/date-dropdown-user-range",id:"auto-generated/previews/vue/date-dropdown-user-range",title:"date-dropdown-user-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/date-dropdown-user-range.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/date-dropdown-user-range",permalink:"/docs/auto-generated/previews/vue/date-dropdown-user-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/date-dropdown-user-range.md",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { IxDateDropdown } from '@siemens/ix-vue';\n\nconst today = new Date().toLocaleDateString('en-US', {\n      year: 'numeric',\n      month: '2-digit',\n      day: '2-digit',\n});\n\nconst lastSevenDays = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst dateDropdownOptions = [\n  {\n    id: 'last-7',\n    label: 'Last 7 days',\n    from: lastSevenDays,\n    to: today,\n  },\n  {\n    id: 'today',\n    label: 'Today',\n    from: today,\n    to: today,\n  },\n];\n<\/script>\n\n<template>\n  <IxDateDropdown :dateRangeOptions=\"dateDropdownOptions\" date-range-id=\"last-7\" format=\"LL/dd/yyyy\"/>\n</template>\n\n<style scoped></style>\n\n")))}u.isMDXComponent=!0}}]);