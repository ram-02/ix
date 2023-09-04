"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94077],{30876:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>g});var r=t(2784);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),p=s(t),g=a,h=p["".concat(u,".").concat(g)]||p[g]||l[g]||i;return t?r.createElement(h,o(o({ref:e},d),{},{components:t})):r.createElement(h,o({ref:e},d))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49611:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7896),a=(t(2784),t(30876));const i={},o=void 0,c={unversionedId:"auto-generated/previews/angular/card-list.html",id:"auto-generated/previews/angular/card-list.html",title:"card-list.html",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/card-list.html.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/card-list.html",permalink:"/version-dev/docs/auto-generated/previews/angular/card-list.html",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/card-list.html.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function l(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-card-list label="Stack Layout" show-all-count="12" list-style="stack">\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="bulb"\n    notification="1"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="warning"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="success"\n  ></ix-push-card>\n</ix-card-list>\n\n<ix-card-list label="Flow Layout" show-all-count="12" list-style="scroll">\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="bulb"\n    notification="1"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="warning"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n</ix-card-list>\n')))}l.isMDXComponent=!0}}]);