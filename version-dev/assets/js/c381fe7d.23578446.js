"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52757,47059],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,l={unversionedId:"auto-generated/previews/web-component/datepicker-locale",id:"auto-generated/previews/web-component/datepicker-locale",title:"datepicker-locale",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/datepicker-locale.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/datepicker-locale",permalink:"/version-dev/docs/auto-generated/previews/web-component/datepicker-locale",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/datepicker-locale.md",tags:[],version:"current",frontMatter:{}},i={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span style="margin-right: 1rem;">Language:</span>\n<ix-select style="margin: 1rem 0;">\n  <ix-select-item value="de" label="de"></ix-select-item>\n  <ix-select-item value="en" label="en"></ix-select-item>\n</ix-select>\n<ix-date-picker range="false"></ix-date-picker>\n<script>\n  const select = document.querySelector(\'ix-select\');\n  const datepicker = document.querySelector(\'ix-date-picker\');\n\n  let locale = \'de\';\n\n  function setLocale(newLocale) {\n    locale = newLocale;\n    datepicker.locale = locale;\n    select.value = locale;\n  }\n\n  setLocale(locale);\n\n  select.addEventListener(\'valueChange\', ({ detail }) => {\n    setLocale(detail);\n  })\n<\/script>\n')))}u.isMDXComponent=!0}}]);