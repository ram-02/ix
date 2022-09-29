"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4629,2991,7148,8718],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),a=n(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),o=n(6277),i=n(89741),l=n(42244),c=n(78963),u=n(24126);const s="tabList_M0Dn",d="tabItem_ysIP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:b,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,c.U)(),[x,_]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==x&&g.some((t=>t.value===e))&&_(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==x&&(E(t),_(r),null!=b&&k(b,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),o=n(37614),i=n(2784),l=n(90943);function c(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),c=(0,a.Z)("/"),[u,s]=(0,i.useState)(""),[d,p]=(0,i.useState)((0,l.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;s(void 0===t||"current"===t?c+`webcomponent-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${u}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(82009),a=n(1112),o=n(2784),i=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function c(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Component"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(r.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},35192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/radio-button",id:"auto-generated/previews/angular/radio-button",title:"radio-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/radio-button.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/radio-button",permalink:"/ix/docs/auto-generated/previews/angular/radio-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/radio-button.md",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-radiobutton\',\n  template: `\n    <input checked id="checkbox_1_1" name="group_1" type="radio" />\n    <label for="checkbox_1_1"> Checked </label>\n\n    <input id="checkbox_1_2" name="group_1" type="radio" />\n    <label for="checkbox_1_2"> Normal </label>\n\n    <input disabled id="checkbox_1_3" name="group_1" type="radio" />\n    <label for="checkbox_1_3"> Disabled </label>\n  `,\n})\nexport class Radiobutton {}\n')))}d.isMDXComponent=!0},69482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/radio-button",id:"auto-generated/previews/react/radio-button",title:"radio-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/radio-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/radio-button",permalink:"/ix/docs/auto-generated/previews/react/radio-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/radio-button.md",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from \'react\';\n\nexport const RadioButton: React.FC = () => {\n  return (\n    <>\n      <input defaultChecked id="checkbox_1_1" name="group_1" type="radio" />\n      <label htmlFor="checkbox_1_1"> Checked </label>\n\n      <input id="checkbox_1_2" name="group_1" type="radio" />\n      <label htmlFor="checkbox_1_2"> Normal </label>\n\n      <input disabled id="checkbox_1_3" name="group_1" type="radio" />\n      <label htmlFor="checkbox_1_3"> Disabled </label>\n    </>\n  );\n};\n')))}d.isMDXComponent=!0},79014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/radio-button",id:"auto-generated/previews/web-component/radio-button",title:"radio-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/radio-button.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/radio-button",permalink:"/ix/docs/auto-generated/previews/web-component/radio-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/radio-button.md",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example-list">\n  <input checked id="checkbox_1_1" name="group_1" type="radio" />\n  <label for="checkbox_1_1"> Checked </label>\n\n  <input id="checkbox_1_2" name="group_1" type="radio" />\n  <label for="checkbox_1_2"> Normal </label>\n\n  <input disabled id="checkbox_1_3" name="group_1" type="radio" />\n  <label for="checkbox_1_3"> Disabled </label>\n</div>\n')))}d.isMDXComponent=!0},57477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>b});var r=n(7896),a=(n(2784),n(30876)),o=n(82009),i=n(64176),l=n(79014),c=n(69482),u=n(35192);const s={},d="Radiobutton",p={unversionedId:"controls/radiobutton",id:"controls/radiobutton",title:"Radiobutton",description:"Usage",source:"@site/docs/controls/radiobutton.md",sourceDirName:"controls",slug:"/controls/radiobutton",permalink:"/ix/docs/controls/radiobutton",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/radiobutton.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pill",permalink:"/ix/docs/controls/pill"},next:{title:"Select",permalink:"/ix/docs/controls/select"}},m={},b=[{value:"Usage",id:"usage",level:2}],v={toc:b};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"radiobutton"},"Radiobutton"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"radio-button",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(l.default,{mdxType:"SourceRadio"})),(0,a.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"SourceReactRadio"})),(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(u.default,{mdxType:"SourceAngularRadio"}))))}f.isMDXComponent=!0}}]);