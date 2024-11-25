"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14636],{25030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(97458),s=a(16436),i=a(6492);const r={},c=void 0,d={id:"auto-generated/ix-tree/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-tree/events.md",sourceDirName:"auto-generated/ix-tree",slug:"/auto-generated/ix-tree/events",permalink:"/docs/auto-generated/ix-tree/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tree/events.md",tags:[],version:"current",frontMatter:{}},o={},l=[];function m(e){return(0,n.jsx)(i.Z,{attributes:[{name:"contextChange",description:"Context changed",definition:[{name:"Detail",value:"{ [x: string]: TreeItemContext; }"}],tags:[]},{name:"nodeClicked",description:"Node clicked event",definition:[{name:"Detail",value:"string"}],tags:[{type:"since",message:"1.5.0"}]},{name:"nodeRemoved",description:"Emits removed nodes",definition:[{name:"Detail",value:"any"}],tags:[]},{name:"nodeToggled",description:"Node toggled event",definition:[{name:"Detail",value:"{ id: string; isExpaned: boolean; }"}],tags:[{type:"since",message:"1.5.0"}]}]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},6492:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var n=a(4173),s=a(97458);function i(e){return(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,s.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,s.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Content",children:[(0,s.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,s.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,s.jsxs)("div",{className:"row Attribute",children:[(0,s.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,s.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,s.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,s.jsx)(i,{attribute:e},e.name)))]})}},4173:(e,t,a)=>{a.d(t,{Q:()=>s,h:()=>i});a(52983);var n=a(97458);function s(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function i(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var n=a(52983);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);