"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76607],{89287:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(97458),i=t(16436),s=t(6492);const r={},o=void 0,d={id:"auto-generated/ix-group/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-group/props.md",sourceDirName:"auto-generated/ix-group",slug:"/auto-generated/ix-group/props",permalink:"/docs/auto-generated/ix-group/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-group/props.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function u(e){return(0,n.jsx)(s.Z,{attributes:[{name:"collapsed",description:"Whether the group is collapsed or expanded. Defaults to true.",definition:[{name:"Attribute",value:"collapsed"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"expandOnHeaderClick",description:"Expand the group if the header is clicked",definition:[{name:"Attribute",value:"expand-on-header-click"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"header",description:"Group header",definition:[{name:"Attribute",value:"header"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"index",description:"The index of the selected group entry.\nIf undefined no group item is selected.",definition:[{name:"Attribute",value:"index"},{name:"Type",value:"number"},{name:"Default"}],tags:[]},{name:"selected",description:"Whether the group is selected.",definition:[{name:"Attribute",value:"selected"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"subHeader",description:"Group header subtitle",definition:[{name:"Attribute",value:"sub-header"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"suppressHeaderSelection",description:"Prevent header from being selectable",definition:[{name:"Attribute",value:"suppress-header-selection"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u()}},6492:(e,a,t)=>{t.d(a,{Z:()=>r});t(52983);var n=t(4173),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var n=t(52983);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);