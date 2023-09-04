"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91350],{30876:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},78179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/menu-layouts",id:"auto-generated/previews/web-component/menu-layouts",title:"menu-layouts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/menu-layouts.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/menu-layouts",permalink:"/version-dev/docs/auto-generated/previews/web-component/menu-layouts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/menu-layouts.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="control">\n  <input id="small" type="radio" name="layout" value="small" />\n  <label for="small">Small</label>\n\n  <input id="medium" type="radio" name="layout" value="medium" checked />\n  <label for="medium">Medium</label>\n\n  <input id="large" type="radio" name="layout" value="large" />\n  <label for="large">Large</label>\n</div>\n<div class="content">\n  <ix-basic-navigation application-name="Application name">\n    <placeholder-logo slot="logo"></placeholder-logo>\n    <ix-menu>\n      <ix-menu-item>Item 1</ix-menu-item>\n      <ix-menu-item>Item 2</ix-menu-item>\n    </ix-menu>\n    <main>Some example content</main>\n  </ix-basic-navigation>\n</div>\n')))}p.isMDXComponent=!0}}]);