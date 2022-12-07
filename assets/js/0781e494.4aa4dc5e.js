"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67242,17686,56676,51601,21771,41865,43522],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(l,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2784),r=n(6277);const i="tabItem_OMyP";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7896),r=n(2784),i=n(6277),s=n(89741),o=n(42244),l=n(78963),u=n(24126);const m="tabList_M0Dn",p="tabItem_ysIP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:c,groupId:g,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==x&&!b.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,l.U)(),[w,y]=(0,r.useState)(x),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=h[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&y(e)}const M=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==w&&(E(t),y(a),null!=g&&N(g,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},v)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:M,onClick:M},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(37949),r=n(90077),i=n(37614),s=n(2784),o=n(90943);function l(e){const t=(0,i.Z)(),[n]=(0,s.useState)(!1),l=(0,r.Z)("/"),[u,m]=(0,s.useState)(""),[p,d]=(0,s.useState)((0,o.V)(t)),{preferredVersion:c}=(0,a.J)();return(0,s.useEffect)((()=>{const t=null==c?void 0:c.name;m(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==c?void 0:c.name,e.name]),(0,s.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),s.createElement(s.Fragment,null,n?s.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==c?void 0:c.name):s.createElement("iframe",{src:`${u}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(82009),r=n(1112),i=n(2784),s=n(77942);const o={angular:1,react:2,javascript:3,preview:4};function l(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return i.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[i.createElement(a.Z,{value:"preview",key:"preview"},i.createElement(s.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>o[e.props.value]-o[t.props.value])))}},17399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/ix-menu-settings-item/props",id:"auto-generated/ix-menu-settings-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-menu-settings-item/props.md",sourceDirName:"auto-generated/ix-menu-settings-item",slug:"/auto-generated/ix-menu-settings-item/props",permalink:"/docs/auto-generated/ix-menu-settings-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-settings-item/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Label"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}p.isMDXComponent=!0},45824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/ix-menu-settings/events",id:"auto-generated/ix-menu-settings/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-menu-settings/events.md",sourceDirName:"auto-generated/ix-menu-settings",slug:"/auto-generated/ix-menu-settings/events",permalink:"/docs/auto-generated/ix-menu-settings/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-settings/events.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Popover closed"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent")),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},94069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/ix-menu-settings/props",id:"auto-generated/ix-menu-settings/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-menu-settings/props.md",sourceDirName:"auto-generated/ix-menu-settings",slug:"/auto-generated/ix-menu-settings/props",permalink:"/docs/auto-generated/ix-menu-settings/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-settings/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"activeTabLabel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"active tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"active-tab-label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Label"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Settings'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Internal"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}p.isMDXComponent=!0},79065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/angular/settings",id:"auto-generated/previews/angular/settings",title:"settings",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/settings.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/settings",permalink:"/docs/auto-generated/previews/angular/settings",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/settings.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';\n\n@Component({\n  selector: 'app-settings',\n  template: `\n    <ix-basic-navigation>\n      <ix-menu #menu>\n        <ix-menu-settings>\n          <ix-menu-settings-item\n            label=\"Example Setting 1\"\n          ></ix-menu-settings-item>\n          <ix-menu-settings-item\n            label=\"Example Setting 2\"\n          ></ix-menu-settings-item>\n        </ix-menu-settings>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport class Settings implements AfterViewInit {\n  @ViewChild('menu', { read: ElementRef })\n  menuRef!: ElementRef<HTMLIxMenuElement>;\n\n  ngAfterViewInit() {\n    const { nativeElement } = this.menuRef;\n    nativeElement.toggleSettings(true);\n  }\n}\n")))}p.isMDXComponent=!0},48798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/react/settings",id:"auto-generated/previews/react/settings",title:"settings",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/settings.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/settings",permalink:"/docs/auto-generated/previews/react/settings",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/settings.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport {\n    IxBasicNavigation,\n    IxMenu,\n    IxMenuSettings,\n    IxMenuSettingsItem\n} from '@siemens/ix-react';\nimport React, { useLayoutEffect, useRef } from 'react';\n\nexport const Settings: React.FC = () => {\n  const ref = useRef<HTMLIxMenuElement>(null);\n\n  useLayoutEffect(() => {\n    if (ref.current) {\n      ref.current.toggleSettings(true);\n    }\n  }, []);\n\n  return (\n    <IxBasicNavigation>\n      <IxMenu ref={ref}>\n        <IxMenuSettings>\n          <IxMenuSettingsItem label=\"Example Setting 1\"></IxMenuSettingsItem>\n          <IxMenuSettingsItem label=\"Example Setting 2\"></IxMenuSettingsItem>\n        </IxMenuSettings>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n")))}p.isMDXComponent=!0},80046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/web-component/settings",id:"auto-generated/previews/web-component/settings",title:"settings",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/settings.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/settings",permalink:"/docs/auto-generated/previews/web-component/settings",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/settings.md",tags:[],version:"current",frontMatter:{}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ix-basic-navigation>\n  <ix-menu>\n    <ix-menu-settings>\n      <ix-menu-settings-item\n        label=\"Example Setting 1\"\n      ></ix-menu-settings-item>\n      <ix-menu-settings-item\n        label=\"Example Setting 2\"\n      ></ix-menu-settings-item>\n    </ix-menu-settings>\n  </ix-menu>\n</ix-basic-navigation>\n<script>\n  (async function () {\n    await window.customElements.whenDefined('ix-menu');\n    const menu = document.querySelector('ix-menu');\n    await menu.toggleSettings(true);\n  })();\n<\/script>\n")))}p.isMDXComponent=!0},44486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>x,frontMatter:()=>c,metadata:()=>v,toc:()=>b});var a=n(7896),r=(n(2784),n(30876)),i=n(82009),s=n(64176),o=n(94069),l=n(45824),u=n(17399),m=n(80046),p=n(48798),d=n(79065);const c={sidebar_position:4},g="Settings",v={unversionedId:"controls/navigation/settings",id:"controls/navigation/settings",title:"Settings",description:"Usage",source:"@site/docs/controls/navigation/settings.md",sourceDirName:"controls/navigation",slug:"/controls/navigation/settings",permalink:"/docs/controls/navigation/settings",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/navigation/settings.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mySidebar",previous:{title:"About and legal",permalink:"/docs/controls/navigation/about-and-legal"},next:{title:"Map Navigation",permalink:"/docs/controls/navigation/map-navigation"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Properties (ix-menu-settings)",id:"properties-ix-menu-settings",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-menu-settings-item)",id:"properties-ix-menu-settings-item",level:2},{value:"Props",id:"props-1",level:3}],k={toc:b};function x(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"settings"},"Settings"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(s.Z,{name:"settings",height:"30rem",noMargin:!0,mdxType:"Preview"},(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"SourceSettings"})),(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"SourceReactSettings"})),(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"SourceAngularSettings"}))),(0,r.kt)("h2",{id:"properties-ix-menu-settings"},"Properties (ix-menu-settings)"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}),(0,r.kt)("h2",{id:"properties-ix-menu-settings-item"},"Properties (ix-menu-settings-item)"),(0,r.kt)("h3",{id:"props-1"},"Props"),(0,r.kt)(u.default,{mdxType:"ItemProps"}))}x.isMDXComponent=!0}}]);