"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69920],{92495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(97458),i=a(16436),s=a(6492);const r={},o=void 0,c={id:"auto-generated/ix-toast-container/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-toast-container/props.md",sourceDirName:"auto-generated/ix-toast-container",slug:"/auto-generated/ix-toast-container/props",permalink:"/docs/auto-generated/ix-toast-container/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-toast-container/props.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"containerClass",description:"",definition:[{name:"Attribute",value:"container-class"},{name:"Type",value:"string"},{name:"Default",value:"'toast-container'"}],tags:[]},{name:"containerId",description:"",definition:[{name:"Attribute",value:"container-id"},{name:"Type",value:"string"},{name:"Default",value:"'toast-container'"}],tags:[]},{name:"position",description:"",definition:[{name:"Attribute",value:"position"},{name:"Type",value:'"bottom-right" \uff5c "top-right"'},{name:"Default",value:"'bottom-right'"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},6492:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var n=a(4173),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(52983);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);