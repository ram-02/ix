"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62671,93306],{30876:(n,i,e)=>{e.d(i,{Zo:()=>x,kt:()=>f});var r=e(2784);function t(n,i,e){return i in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function o(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){t(n,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))}))}return n}function a(n,i){if(null==n)return{};var e,r,t=function(n,i){if(null==n)return{};var e,r,t={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],i.indexOf(e)>=0||(t[e]=n[e]);return t}(n,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}var c=r.createContext({}),p=function(n){var i=r.useContext(c),e=i;return n&&(e="function"==typeof n?n(i):l(l({},i),n)),e},x=function(n){var i=p(n.components);return r.createElement(c.Provider,{value:i},n.children)},u={inlineCode:"code",wrapper:function(n){var i=n.children;return r.createElement(r.Fragment,{},i)}},s=r.forwardRef((function(n,i){var e=n.components,t=n.mdxType,o=n.originalType,c=n.parentName,x=a(n,["components","mdxType","originalType","parentName"]),s=p(e),f=t,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return e?r.createElement(m,l(l({ref:i},x),{},{components:e})):r.createElement(m,l({ref:i},x))}));function f(n,i){var e=arguments,t=i&&i.mdxType;if("string"==typeof n||t){var o=e.length,l=new Array(o);l[0]=s;var a={};for(var c in i)hasOwnProperty.call(i,c)&&(a[c]=i[c]);a.originalType=n,a.mdxType="string"==typeof n?n:t,l[1]=a;for(var p=2;p<o;p++)l[p]=e[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}s.displayName="MDXCreateElement"},93306:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=e(7896),t=(e(2784),e(30876));const o={},l=void 0,a={unversionedId:"auto-generated/previews/web-component/pill-variants",id:"auto-generated/previews/web-component/pill-variants",title:"pill-variants",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/pill-variants.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/pill-variants",permalink:"/docs/auto-generated/previews/web-component/pill-variants",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/pill-variants.md",tags:[],version:"current",frontMatter:{}},c={},p=[],x={toc:p};function u(n){let{components:i,...e}=n;return(0,t.kt)("wrapper",(0,r.Z)({},x,e,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<ix-layout-grid>\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="primary" icon="info" >\n        Primary\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="primary" icon="info" outline >\n        Primary\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="alarm" icon="info" >\n        Alarm\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="alarm" icon="info" outline >\n        Alarm\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="critical" icon="info" >\n        Critical\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="critical" icon="info" outline >\n        Critical\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="warning" icon="info" >\n        Warning\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="warning" icon="info" outline >\n        Warning\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="success" icon="info" >\n        Success\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="success" icon="info" outline >\n        Success\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="info" icon="info" >\n        Info\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="info" icon="info" outline >\n        Info\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill variant="neutral" icon="info" >\n        Neutral\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill variant="neutral" icon="info" outline >\n        Neutral\n      </ix-pill>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col>\n      <ix-pill\n        variant="custom"\n        color="color-soft-text"\n        background="purple"\n        icon=\'info\'\n      >\n        Custom\n      </ix-pill>\n    </ix-col>\n    <ix-col>\n      <ix-pill\n        variant="custom"\n        color="color-soft-text"\n        background="purple"\n        icon=\'info\'\n        outline\n      >\n        Custom\n      </ix-pill>\n    </ix-col>\n\n  </ix-row>\n</ix-layout-grid>\n')))}u.isMDXComponent=!0}}]);