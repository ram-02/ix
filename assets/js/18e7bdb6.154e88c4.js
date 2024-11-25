"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66341],{77981:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=s(97458),n=s(16436),i=s(6492);const r={},c=void 0,o={id:"auto-generated/ix-workflow-steps/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-workflow-steps/events.md",sourceDirName:"auto-generated/ix-workflow-steps",slug:"/auto-generated/ix-workflow-steps/events",permalink:"/docs/auto-generated/ix-workflow-steps/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-steps/events.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function u(e){return(0,a.jsx)(i.Z,{attributes:[{name:"stepSelected",description:"On step selected event",definition:[{name:"Detail",value:"number"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u()}},6492:(e,t,s)=>{s.d(t,{Z:()=>r});s(52983);var a=s(4173),n=s(97458);function i(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(a.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(a.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(i,{attribute:e},e.name)))]})}},4173:(e,t,s)=>{s.d(t,{Q:()=>n,h:()=>i});s(52983);var a=s(97458);function n(e){return(0,a.jsxs)("div",{className:"ApiTableTag",children:[(0,a.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,a.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function i(e){return(0,a.jsx)("div",{className:"ApiTableTag",children:(0,a.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var a=s(52983);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);