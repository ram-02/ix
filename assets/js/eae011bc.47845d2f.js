"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8515,4384,29,9441,9389,4317,2504,1349,2912],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,w=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(w,i(i({ref:t},u),{},{components:r})):n.createElement(w,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(2784),a=r(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},1112:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7896),a=r(2784),o=r(6277),i=r(89741),l=r(42244),s=r(78963),d=r(24126);const u="tabList_M0Dn",c="tabItem_ysIP";function p(e){var t;const{lazy:r,block:i,defaultValue:p,values:m,groupId:w,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:x}=(0,s.U)(),[N,y]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,d.o5)();if(null!=w){const e=b[w];null!=e&&e!==N&&f.some((t=>t.value===e))&&y(e)}const C=e=>{const t=e.currentTarget,r=T.indexOf(t),n=f[r].value;n!==N&&(D(t),y(n),null!=w&&x(w,String(n)))},M=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:M,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},77942:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(37949),a=r(90077),o=r(37614),i=r(2784),l=r(90943);function s(e){const t=(0,o.Z)(),[r]=(0,i.useState)(!1),s=(0,a.Z)("/"),[d,u]=(0,i.useState)(""),[c,p]=(0,i.useState)((0,l.V)(t)),{preferredVersion:m}=(0,n.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;u(void 0===t||"current"===t?s+`webcomponent-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},r=new MutationObserver((()=>e()));return r.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{r.disconnect()}}),[]),i.createElement(i.Fragment,null,r?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:c}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(82009),a=r(1112),o=r(2784),i=r(77942);const l={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],r=Array.isArray(t)?t:[t];return o.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Component"}].filter((e=>r.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(n.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...r].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},3125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-drawer/events",id:"auto-generated/ix-drawer/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-drawer/events.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/events",permalink:"/ix/docs/auto-generated/ix-drawer/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/events.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drawerClose"),(0,a.kt)("td",{parentName:"tr",align:null},"Fire event after drawer is close"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"open"),(0,a.kt)("td",{parentName:"tr",align:null},"Fire event after drawer is open"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-drawer/props",id:"auto-generated/ix-drawer/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-drawer/props.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/props",permalink:"/ix/docs/auto-generated/ix-drawer/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/props.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"closeOnClickOutside"),(0,a.kt)("td",{parentName:"tr",align:null},"Fired in case of an outside click during drawer showed state"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"close-on-click-outside")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fullHeight"),(0,a.kt)("td",{parentName:"tr",align:null},"Render the drawer with maximum height"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"full-height")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxWidth"),(0,a.kt)("td",{parentName:"tr",align:null},"Max width interpreted as REM"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"max-width")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"28"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minWidth"),(0,a.kt)("td",{parentName:"tr",align:null},"Min width interpreted as REM"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"min-width")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"16"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"Show or hide the drawer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"show")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"width"),(0,a.kt)("td",{parentName:"tr",align:null},"Width interpreted as REM if not set to 'auto'"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c number')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"this.minWidth"))))))}c.isMDXComponent=!0},75315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/drawer-full-height",id:"auto-generated/previews/angular/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/drawer-full-height.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/drawer-full-height",permalink:"/ix/docs/auto-generated/previews/angular/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-drawer-full-height\',\n  template: `\n    <ix-drawer [fullHeight]="true" [closeOnClickOutside]="true" [show]="show">\n      <span>Some content of drawer</span>\n    </ix-drawer>\n\n    <ix-button (click)="show = !show">Toggle drawer</ix-button>\n  `,\n})\nexport class DrawerFullHeight {\n  show = false;\n}\n')))}c.isMDXComponent=!0},90678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/drawer",id:"auto-generated/previews/angular/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/drawer.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/drawer",permalink:"/ix/docs/auto-generated/previews/angular/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/drawer.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-drawer\',\n  template: `\n    <ix-drawer [closeOnClickOutside]="true" [show]="show">\n      <span>Some content of drawer</span>\n    </ix-drawer>\n\n    <ix-button (click)="show = !show">Toggle drawer</ix-button>\n  `,\n})\nexport class Drawer {\n  show = false;\n}\n')))}c.isMDXComponent=!0},90169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/drawer-full-height",id:"auto-generated/previews/react/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/drawer-full-height.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/drawer-full-height",permalink:"/ix/docs/auto-generated/previews/react/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxDrawer } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport const DrawerFullHeight: React.FC = () => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <IxDrawer\n        closeOnClickOutside={true}\n        fullHeight={true}\n        show={show}\n        onDrawerClose={() => setShow(false)}\n      >\n        <span>Some content of drawer</span>\n      </IxDrawer>\n      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>\n    </>\n  );\n};\n")))}c.isMDXComponent=!0},90499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/drawer",id:"auto-generated/previews/react/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/drawer.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/drawer",permalink:"/ix/docs/auto-generated/previews/react/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/drawer.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxDrawer } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport const DrawerFullHeight: React.FC = () => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <IxDrawer\n        closeOnClickOutside={true}\n        show={show}\n        onDrawerClose={() => setShow(false)}\n      >\n        <span>Some content of drawer</span>\n      </IxDrawer>\n      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>\n    </>\n  );\n};\n")))}c.isMDXComponent=!0},74850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/drawer-full-height",id:"auto-generated/previews/web-component/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/drawer-full-height.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/drawer-full-height",permalink:"/ix/docs/auto-generated/previews/web-component/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<ix-drawer>\n  <span>Some content of drawer</span>\n</ix-drawer>\n\n<ix-button>Toggle drawer</ix-button>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined('ix-drawer');\n    const drawer = document.querySelector('ix-drawer');\n    drawer.fullHeight = true;\n    drawer.closeOnClickOutside = true;\n\n    const button = document.querySelector('ix-button');\n    button.addEventListener('click', () => {\n      drawer.show = !drawer.show;\n    });\n  })();\n<\/script>\n")))}c.isMDXComponent=!0},20258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/drawer",id:"auto-generated/previews/web-component/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/drawer.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/drawer",permalink:"/ix/docs/auto-generated/previews/web-component/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/drawer.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<ix-drawer>\n  <span>Some content of drawer</span>\n</ix-drawer>\n\n<ix-button>Toggle drawer</ix-button>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined('ix-drawer');\n\n    const drawer = document.querySelector('ix-drawer');\n    drawer.fullHeight = false;\n    drawer.closeOnClickOutside = true;\n\n    const button = document.querySelector('ix-button');\n    button.addEventListener('click', () => {\n      drawer.show = !drawer.show;\n    });\n  })();\n<\/script>\n")))}c.isMDXComponent=!0},21319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>x,frontMatter:()=>g,metadata:()=>f,toc:()=>k});var n=r(7896),a=(r(2784),r(30876)),o=r(82009),i=r(64176),l=r(123),s=r(3125),d=r(20258),u=r(74850),c=r(90499),p=r(90169),m=r(90678),w=r(75315);const g={},h="Drawer",f={unversionedId:"controls/drawer",id:"controls/drawer",title:"Drawer",description:"Usage",source:"@site/docs/controls/drawer.md",sourceDirName:"controls",slug:"/controls/drawer",permalink:"/ix/docs/controls/drawer",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/drawer.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Datetimepicker",permalink:"/ix/docs/controls/date-time-picker"},next:{title:"Dropdown",permalink:"/ix/docs/controls/dropdown"}},v={},k=[{value:"Usage",id:"usage",level:2},{value:"Auto height",id:"auto-height",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],b={toc:k};function x(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drawer"},"Drawer"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"drawer-full-height",height:"24rem",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(d.default,{mdxType:"SourceDrawer"})),(0,a.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"SourceReactDrawer"})),(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"SourceAngularDrawer"}))),(0,a.kt)("h3",{id:"auto-height"},"Auto height"),(0,a.kt)(i.Z,{name:"drawer",height:"24rem",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(u.default,{mdxType:"SourceDrawerFullHeight"})),(0,a.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(p.default,{mdxType:"SourceReactDrawerFullHeight"})),(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(w.default,{mdxType:"SourceAngularDrawerFullHeight"}))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(l.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}x.isMDXComponent=!0}}]);