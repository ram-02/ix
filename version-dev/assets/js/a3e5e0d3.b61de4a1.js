"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5326],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>l});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),u=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(r),l=o,d=b["".concat(m,".").concat(l)]||b[l]||s[l]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},20263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7896),o=(r(2784),r(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/web-component/breadcrumb-next-items",id:"auto-generated/previews/web-component/breadcrumb-next-items",title:"breadcrumb-next-items",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/breadcrumb-next-items.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/breadcrumb-next-items",permalink:"/version-dev/docs/auto-generated/previews/web-component/breadcrumb-next-items",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/breadcrumb-next-items.md",tags:[],version:"current",frontMatter:{}},m={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-breadcrumb>\n  <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n</ix-breadcrumb>\n\n<script>\n  const instance = document.querySelector(\'ix-breadcrumb\');\n  instance.nextItems = [\'Next Item 1\'];\n<\/script>\n')))}s.isMDXComponent=!0}}]);