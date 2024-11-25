"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49725],{75250:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=t(97458),i=t(16436),s=t(6492);const l={},o=void 0,r={id:"auto-generated/ix-menu/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-menu/props.md",sourceDirName:"auto-generated/ix-menu",slug:"/auto-generated/ix-menu/props",permalink:"/docs/auto-generated/ix-menu/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu/props.md",tags:[],version:"current",frontMatter:{}},u={},m=[];function d(e){return(0,n.jsx)(s.Z,{attributes:[{name:"applicationDescription",description:"Should only be set if you use ix-menu standalone",definition:[{name:"Attribute",value:"application-description"},{name:"Type",value:"string"},{name:"Default",value:"''"}],tags:[]},{name:"applicationName",description:"Should only be set if you use ix-menu standalone",definition:[{name:"Attribute",value:"application-name"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"enableMapExpand",description:"Internal",definition:[{name:"Attribute",value:"enable-map-expand"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"enableSettings",description:"Is settings tab is visible",definition:[{name:"Attribute",value:"enable-settings"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"enableToggleTheme",description:"Show toggle between light and dark variant. Only if the provided theme have implemented both!",definition:[{name:"Attribute",value:"enable-toggle-theme"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"expand",description:"Toggle the expand state of the menu",definition:[{name:"Attribute",value:"expand"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"i18nCollapse",description:"",definition:[{name:"Attribute",value:"i-1-8n-collapse"},{name:"Type",value:"string"},{name:"Default",value:"'Collapse'"}],tags:[]},{name:"i18nExpand",description:"",definition:[{name:"Attribute",value:"i-1-8n-expand"},{name:"Type",value:"string"},{name:"Default",value:"' Expand'"}],tags:[]},{name:"i18nExpandSidebar",description:"Accessibility i18n label for the burger menu of the sidebar",definition:[{name:"Attribute",value:"i-1-8n-expand-sidebar"},{name:"Type",value:"string"},{name:"Default",value:"'Expand sidebar'"}],tags:[]},{name:"i18nLegal",description:"",definition:[{name:"Attribute",value:"i-1-8n-legal"},{name:"Type",value:"string"},{name:"Default",value:"'About & legal information'"}],tags:[]},{name:"i18nSettings",description:"",definition:[{name:"Attribute",value:"i-1-8n-settings"},{name:"Type",value:"string"},{name:"Default",value:"'Settings'"}],tags:[]},{name:"i18nToggleTheme",description:"",definition:[{name:"Attribute",value:"i-1-8n-toggle-theme"},{name:"Type",value:"string"},{name:"Default",value:"'Toggle theme'"}],tags:[]},{name:"maxVisibleMenuItems",description:"Maximum number of menu items to show in case enough vertical space is available.\nExtra menu items will be collapsed to 'show more' menu item.",definition:[{name:"Attribute",value:"max-visible-menu-items"},{name:"Type",value:"number"},{name:"Default",value:"9"}],tags:[{type:"deprecated",message:"- Has no effect on component. Will get removed with next major release (v3)"}]},{name:"pinned",description:"Menu stays pinned to the left",definition:[{name:"Attribute",value:"pinned"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showAbout",description:"Is about tab visible",definition:[{name:"Attribute",value:"show-about"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showSettings",description:"Is settings tab visible",definition:[{name:"Attribute",value:"show-settings"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"startExpanded",description:"If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.",definition:[{name:"Attribute",value:"start-expanded"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.2.0"}]}]})}function c(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d()}},6492:(e,a,t)=>{t.d(a,{Z:()=>l});t(52983);var n=t(4173),i=t(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(n.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(n.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const l=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},4173:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>s});t(52983);var n=t(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>l});var n=t(52983);const i={},s=n.createContext(i);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);