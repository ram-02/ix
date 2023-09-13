"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22371,35066],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},x=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),x=p(t),s=r,m=x["".concat(l,".").concat(s)]||x[s]||u[s]||i;return t?o.createElement(m,c(c({ref:n},d),{},{components:t})):o.createElement(m,c({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=x;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}x.displayName="MDXCreateElement"},35066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(7896),r=(t(2784),t(30876));const i={},c=void 0,a={unversionedId:"auto-generated/previews/web-component/grid-padding",id:"auto-generated/previews/web-component/grid-padding",title:"grid-padding",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/grid-padding.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/grid-padding",permalink:"/version-dev/docs/auto-generated/previews/web-component/grid-padding",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/grid-padding.md",tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example-parent">\n  <h4>Grid with padding</h4>\n  <ix-layout-grid>\n    <ix-row>\n      <ix-col>1</ix-col>\n      <ix-col>2</ix-col>\n      <ix-col>3</ix-col>\n      <ix-col>4</ix-col>\n      <ix-col>5</ix-col>\n      <ix-col>6</ix-col>\n      <ix-col>7</ix-col>\n      <ix-col>8</ix-col>\n      <ix-col>9</ix-col>\n      <ix-col>10</ix-col>\n      <ix-col>11</ix-col>\n      <ix-col>12</ix-col>\n    </ix-row>\n  </ix-layout-grid>\n\n  <h4>Grid without padding</h4>\n  <ix-layout-grid no-padding>\n    <ix-row>\n      <ix-col>1</ix-col>\n      <ix-col>2</ix-col>\n      <ix-col>3</ix-col>\n      <ix-col>4</ix-col>\n      <ix-col>5</ix-col>\n      <ix-col>6</ix-col>\n      <ix-col>7</ix-col>\n      <ix-col>8</ix-col>\n      <ix-col>9</ix-col>\n      <ix-col>10</ix-col>\n      <ix-col>11</ix-col>\n      <ix-col>12</ix-col>\n    </ix-row>\n  </ix-layout-grid>\n</div>\n<style>\n  .example-parent {\n    padding-top: 1rem;\n    padding-bottom: 0.25rem;\n    background-color: var(--theme-color-info-40);\n  }\n</style>\n')))}u.isMDXComponent=!0}}]);