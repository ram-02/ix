"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2751,42105],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,h=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},42105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/react/push-card",id:"auto-generated/previews/react/push-card",title:"push-card",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/push-card.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/push-card",permalink:"/docs/auto-generated/previews/react/push-card",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/push-card.md",tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxPushCard } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxPushCard\n      icon="bulb"\n      notification="99"\n      heading="Heading content"\n      subheading="Subheading"\n      variant="insight"\n    >\n      <table className="table">\n        <thead>\n          <tr>\n            <th scope="col">#</th>\n            <th scope="col">First</th>\n            <th scope="col">Last</th>\n            <th scope="col">Handle</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope="row">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope="row">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope="row">3</th>\n            <td colSpan={2}>Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n        </tbody>\n      </table>\n    </IxPushCard>\n  );\n};\n\n')))}u.isMDXComponent=!0}}]);