"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45087],{25366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),a=n(6492);const r={},o=void 0,c={id:"auto-generated/ix-card-list/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-card-list/events.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/events",permalink:"/docs/auto-generated/ix-card-list/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function p(e){return(0,s.jsx)(a.Z,{attributes:[{name:"collapseChanged",description:"Fire event when the collapse state is changed by the user",definition:[{name:"Detail",value:"boolean"}],tags:[]},{name:"showAllClick",description:"Fire event when the collapse state is changed by the user",definition:[{name:"Detail",value:"{ nativeEvent: MouseEvent; }"}],tags:[]},{name:"showMoreCardClick",description:"Fire event when the show more card is clicked.",definition:[{name:"Detail",value:"{ nativeEvent: MouseEvent; }"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},97922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),a=n(6492);const r={},o=void 0,c={id:"auto-generated/ix-card-list/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-card-list/props.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/props",permalink:"/docs/auto-generated/ix-card-list/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function p(e){return(0,s.jsx)(a.Z,{attributes:[{name:"collapse",description:"Collapse the list",definition:[{name:"Attribute",value:"collapse"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hideShowAll",description:"Hide the show all button",definition:[{name:"Attribute",value:"hide-show-all"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.2.0"}]},{name:"i18nMoreCards",description:"i18n More cards available",definition:[{name:"Attribute",value:"i-1-8n-more-cards"},{name:"Type",value:"string"},{name:"Default",value:"'There are more cards available'"}],tags:[]},{name:"i18nShowAll",description:"i18n Show all button",definition:[{name:"Attribute",value:"i-1-8n-show-all"},{name:"Type",value:"string"},{name:"Default",value:"'Show all'"}],tags:[]},{name:"label",description:"Name the card list",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"listStyle",description:"List style",definition:[{name:"Attribute",value:"list-style"},{name:"Type",value:'"scroll" \uff5c "stack"'},{name:"Default",value:"'stack'"}],tags:[]},{name:"showAllCount",description:"Overwrite the default show all count.",definition:[{name:"Attribute",value:"show-all-count"},{name:"Type",value:"number"},{name:"Default"}],tags:[]},{name:"suppressOverflowHandling",description:"Suppress the overflow handling of child elements",definition:[{name:"Attribute",value:"suppress-overflow-handling"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},7407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(97458),i=n(16436);const a={},r=void 0,o={id:"auto-generated/ix-card-list/tags",title:"tags",description:"Since 1.6.0",source:"@site/docs/auto-generated/ix-card-list/tags.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/tags",permalink:"/docs/auto-generated/ix-card-list/tags",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/tags.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){return(0,s.jsx)("span",{className:"Api__Table Docs__Tag",children:"Since 1.6.0"})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},18183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>g,default:()=>y,frontMatter:()=>f,metadata:()=>v,toc:()=>x});var s=n(97458),i=n(16436),a=n(47834);function r(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,s.jsx)(t.p,{children:"Card lists are UI controls that display a large number of cards or items of the same type in a lightweight, grouped manner. Users can hide and reveal the card list content by clicking on a control element. We typically use card lists on dashboards to show a huge amount of information in an organized and hierarchical way."}),"\n",(0,s.jsx)(t.p,{children:"Card lists consist of a header section at the top and a content section below. The header section includes an icon button with a chevron on the left, followed by the card list's label. In the content section, items of the same type can be arranged in two different layout styles: stack and scroll."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_897_31906.png",alt:"Card list overview"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Header section"}),"\n",(0,s.jsx)(t.li,{children:"Content section"}),"\n",(0,s.jsx)(t.li,{children:'"Show all" button'}),"\n",(0,s.jsx)(t.li,{children:'"Show more" card'}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(t.p,{children:"The stack card list style displays content items from left to right next to each other and wraps them into a new line when space runs out. This means the height of the section can dynamically change."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_910_8581.png",alt:"Card list - stack style"})}),"\n",(0,s.jsx)(t.p,{children:"The scroll card list style displays the content items from left to right next to each other in a single row. When the space runs out, horizontal scrolling is enabled, indicated by a semi-transparent area on the left or right end of the content section."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_915_8647.png",alt:"Card list - scroll style"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Label"}),": Card lists can include a label in the header section. The label is positioned right next to the chevron."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Collapse"}),": By default, the card list is expanded, but this can be customized to suit your specific needs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Max visible cards"}),': By default, the card list displays a maximum of 12 items. If more items are available, a "Show more" card is displayed.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Show all button"}),": The header section can contain a button that triggers the action to show all card list items. Typically, these items are shown on a new page."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"String - Show all"}),': By default, the button to display all items is labeled "Show all".']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Show all count"}),': This represents the total number of card list items. This value is displayed on the "Show all" button.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"String - More cards"}),': By default, the card used to indicate when there are more items available is labeled "There are more cards available".']}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interaction"}),": Users expand and collapse card list content by clicking on the icon button with the chevron in the header section. When the card list is expanded, content below the card list is pushed downwards."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:'"Show all" button'}),': Sometimes card lists only need to show the most important or most recent items. Clicking on the "Show all" button in the header section shows all items. Typically, these items are displayed on a new page.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:'"Show more" card'}),': The number of visible items inside a list can be limited to reduce the user\'s cognitive load. The "Show more" card indicates that more information is available. Selecting the card either displays the next chunk of items or shows all items on a new page, similar to the "Show all" button pattern.']}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Do keep cards and items within card lists the same size"}),"\n",(0,s.jsx)(t.li,{children:"Don't place different types of components within card lists"}),"\n",(0,s.jsx)(t.li,{children:"Don't nest card lists within each other"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"related-patterns",children:"Related patterns:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/blind",children:"Blind"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/card",children:"Card"})}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var c=n(7407),l=n(97922),d=n(25366),p=n(53212);const u=[{value:"Development",id:"development",level:2},{value:"Examples",id:"examples",level:3},{value:"API",id:"api",level:3},{value:"Properties",id:"properties",level:4},...l.toc,{value:"Events",id:"events",level:4},...d.toc];function m(e){const t={h2:"h2",h3:"h3",h4:"h4",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"development",children:"Development"}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(p.Z,{height:"55rem",name:"card-list"}),"\n",(0,s.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsx)(t.h4,{id:"events",children:"Events"}),"\n",(0,s.jsx)(d.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}const f={title:"Card list"},g="Card list",v={id:"controls/card-list",title:"Card list",description:"",source:"@site/docs/controls/card-list.md",sourceDirName:"controls",slug:"/controls/card-list",permalink:"/docs/controls/card-list",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/card-list.md",tags:[],version:"current",frontMatter:{title:"Card list"},sidebar:"mySidebar",previous:{title:"Toggle buttons",permalink:"/docs/controls/buttons/toggle-buttons"},next:{title:"Card",permalink:"/docs/controls/card"}},w={},x=[...c.toc,{value:"Guidelines",id:"guidelines",level:2},{value:"Types",id:"types",level:2},{value:"Options",id:"options",level:3},{value:"Behavior in context",id:"behavior-in-context",level:3},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"Related patterns:",id:"related-patterns",level:3},...u];function j(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"card-list",children:"Card list"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.ZP,{children:[(0,s.jsx)(o,{}),(0,s.jsx)(h,{})]})]})}function y(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>N});const s=300,i="https://stackblitz.com",a=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],r=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>p("ctl",e),devToolsHeight:e=>u("devtoolsheight",e),forceEmbedLayout:e=>p("embed",e),hideDevTools:e=>p("hidedevtools",e),hideExplorer:e=>p("hideExplorer",e),hideNavigation:e=>p("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,r),startScript:e=>h("startScript",e),terminalHeight:e=>u("terminalHeight",e),theme:e=>m("theme",e,o),view:e=>m("view",e,c),zenMode:e=>p("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function p(e,t){return!0===t?`${e}=1`:""}function u(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${w(t)}${e}${d(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${w(n)}${e}${d(n)}`}function w(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function x(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function j(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function y(e){return e&&!1===e.newWindow?"_self":"_blank"}class b{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=f();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:a}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(a?`${t}: ${a}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class ${constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new b(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const E=[];class A{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new $(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(r),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let a=0;const r=window.setInterval((()=>{if(this.vm)i();else{if(a>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void E.forEach(((e,t)=>{e.id===this.id&&E.splice(t,1)}));a++,s()}}),500)})),E.push(this)}}const _=e=>{const t=e instanceof Element?"element":"id";return E.find((n=>n[t]===e))??null};function T({template:e,title:t,description:n,dependencies:s,files:i,settings:r}){if(!a.includes(e)){const e=a.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),r&&c("project[settings]",JSON.stringify(r)),Object.entries(i).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function S(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(_(e)??new A(e)).pending}const N={connect:S,embedGithubProject:function(e,t,n){const s=j(e),i=document.createElement("iframe");return i.src=v(`/github/${t}`,n),x(s,i,n),S(i)},embedProject:function(e,t,n){const s=j(e),i=function(e,t){const n=T(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return x(s,a,n),a.contentDocument?.write(i),S(a)},embedProjectId:function(e,t,n){const s=j(e),i=document.createElement("iframe");return i.src=v(`/edit/${t}`,n),x(s,i,n),S(i)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=y(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=T(e);n.action=g("/run",t),n.target=y(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=y(t);window.open(n,s)}}},6492:(e,t,n)=>{n.d(t,{Z:()=>r});n(52983);var s=n(4173),i=n(97458);function a(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(a,{attribute:e},e.name)))]})}},4173:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});n(52983);var s=n(97458);function i(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},94691:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76213),i=n(7528),a=n(2476),r=n(52983),o=n(83129),c=n(97458);function l(e){const t=(0,a.Z)(),[n]=(0,r.useState)(!1),l=(0,i.Z)("/"),[d,p]=(0,r.useState)(""),[u,m]=(0,r.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,r.useEffect)((()=>{const t=h?.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>s,nI:()=>i});let s=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function i(e){switch(e){case s.ANGULAR:return"Angular";case s.REACT:return"React";case s.JAVASCRIPT:return"JavaScript";case s.VUE:return"Vue";case s.PREVIEW:return"Preview"}}},36365:(e,t,n)=>{n.d(t,{G3:()=>d,Lp:()=>r,Sc:()=>x,Sy:()=>w,Td:()=>p,nq:()=>u,zx:()=>o});var s=n(14455),i=n(41124),a=n(99290);function r(e){let t="html";return e===i.QJ.ANGULAR&&(t="angular"),e===i.QJ.REACT&&(t="react"),e===i.QJ.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}function o(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function c(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return o(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function l(e){return f(function(e){const t=c(e,/<!-- Preview code -->/g);if(t){const n=c(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return o(e)}(e),!0).source}function d(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function p(e,t,n){let s="web-components";return t===i.QJ.ANGULAR&&(s="angular"),t===i.QJ.REACT&&(s="react"),t===i.QJ.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===d(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:l(n),raw:n}:null}catch(n){console.warn(n)}})))}async function u(e,t,n,s){const a=[];return n===i.QJ.ANGULAR&&a.push(`${t}.html`,`${t}.ts`),n===i.QJ.JAVASCRIPT&&a.push(`${t}.html`),n===i.QJ.REACT&&a.push(`${t}.tsx`),n===i.QJ.VUE&&a.push(`${t}.vue`),s&&a.push(`${t}.css`),p(e,n,a)}function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function h(e){const t=a.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function f(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function v(e,t,n,s){const a={},r={},o=e.map((async e=>{let{filename:o,raw:c}=e;if(o.endsWith(".css"))return;let l=c;if(o===n){s===i.QJ.JAVASCRIPT&&(l=h(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=f(l,s===i.QJ.ANGULAR);l=e,n&&(r[`src/${s===i.QJ.ANGULAR?"app":"styles"}/${n}`]=(await g([`${t}${n}`]))[0])}a[`src${s===i.QJ.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:a,styleFiles:r}}async function w(e){let{name:t,framework:n,files:a,baseUrl:r,version:o}=e;const c=o||"latest";let l=null;return n===i.QJ.REACT&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,r=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[o,c,l,d,...p]=await g([`${a}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...r.map((t=>`${e}code-runtime/react/${t}`))]),u=t[0],{files:f,styleFiles:w}=await v(t,a,u.filename,i.QJ.REACT),x={...f,...w,"src/styles/global.css":o,"index.html":h(l),"src/App.tsx":c.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${u.filename.substring(0,u.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(d,n)};p.forEach(((e,t)=>{x[r[t]]=e}));const j={template:"node",title:"iX React App",description:"iX react playground",files:x};return{exampleFile:`src/${u.filename}`,open:()=>{s.Z.openProject(j,{openFile:`src/${u.filename}`})},config:j}}(r,a,c)),n===i.QJ.ANGULAR&&(l=async function(e,t,n,a){const r=`${e}auto-generated/previews/styles/`,[o,c,l,d,p,u,f,w,x,j]=await g([`${r}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let y=n[0];n.length>=2&&(y=n[1]);const b=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&b.push(t)}));const $=`\n    ${b.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${b.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:E,styleFiles:A}=await v(n,r,y.filename,i.QJ.ANGULAR),_={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...E,...A,"src/app/declare-component.ts":$,"src/app/app.component.html":c,"src/app/app.component.ts":l,"src/app/app.module.ts":d,"src/index.html":h(p),"src/main.ts":u,"src/styles.css":o,"angular.json":f,"package.json":m(w,a),"tsconfig.app.json":x,"tsconfig.json":j}};return{exampleFile:`src/app/${t}.ts`,open:()=>{s.Z.openProject(_,{openFile:`src/app/${t}.ts`})},config:_}}(r,t,a,c)),n===i.QJ.JAVASCRIPT&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,[r,o,c,l]=await g([`${a}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),d=t[0],{files:p,styleFiles:u}=await v(t,a,d.filename,i.QJ.JAVASCRIPT),h={template:"node",title:"iX html app",description:"iX html playground",files:{...p,...u,"src/styles/global.css":r,"src/main.js":o,"package.json":m(c,n),"vite.config.ts":l}};return{exampleFile:"src/index.html",open:()=>{s.Z.openProject(h,{openFile:["src/index.html"]})},config:h}}(r,a,c)),n===i.QJ.VUE&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,[r,o,c,l,d,p,u,f]=await g([`${a}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),w=t[0],{files:x,styleFiles:j}=await v(t,a,w.filename,i.QJ.VUE),y={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...x,...j,"src/styles/global.css":r,"index.html":h(c),"src/main.ts":l,"src/App.vue":o.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${w.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":f,"package.json":m(d,n),"tsconfig.json":p,"vite.config.ts":u,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${w.filename}`,open:()=>{s.Z.openProject(y,{openFile:`src/${w.filename}`})},config:y}}(r,a,c)),l}async function x(e){let{name:t,framework:n,files:s,baseUrl:i,version:a}=e;const r=w({name:t,framework:n,files:s,baseUrl:i,version:a});if(await r){const{open:e}=await r;e()}}},53212:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(7528),i=n(90466),a=n(43401),r=n(40749),o=n(52983),c=n(94691),l=n(41124),d=n(36365);async function p(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?(0,d.zx)(s):s}async function u(e,t,n){try{const s=await p(t);s&&(e[n]=s)}catch(s){}}function m(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}var h=n(14455);function f(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),h.Z.openProject({title:`iX ${m(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function g(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await p(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await p(`${e}auto-generated/previews/vue/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${m(n)} from './${n}.vue';`;return i["src/App.vue"]=i["src/App.vue"].replace("import Example from './Example.vue';",a),i["src/App.vue"]=i["src/App.vue"].replace("<Example />",`<${m(n)} />`),i}(e,t,n);f("vue",i,`${n}.vue`,s)}async function v(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await p(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await p(`${e}auto-generated/previews/web-components/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s},a=t[`${n}.html`];return i["src/index.html"]=a,Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]})),delete i[`src/${n}.html`],i}(e,t,n);f("html",i,"src/index.html",s)}async function w(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await p(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await p(`${e}auto-generated/previews/angular/styles/global.css`);return t["src/styles.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((s=>s.endsWith(".ts")&&s!==`${t}.ts`&&n.test(e[s]))).map((e=>e.replace(".ts","")))}(t,n),r=a.map((e=>`import ${m(e)} from './../${e}';`)).join("\n");i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${m(n)} from './../${n}';`,r].join("\n"));const o=a.map((e=>m(e))).join(", ");return i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${m(n)}, ${o}],`),i}(e,t,n);f("angular",i,`src/${n}.ts`,s)}async function x(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await p(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await p(`${e}auto-generated/previews/react/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${m(n)} from './${n}';`;return i["src/App.tsx"]=i["src/App.tsx"].replace("import Example from './Example';",a),i["src/App.tsx"]=i["src/App.tsx"].replace("<Example />",`<${m(n)} />`),i}(e,t,n);f("react",i,`src/${n}.tsx`,s)}var j=n(97458);function y(){return(0,j.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function b(e,t,n,i){const[a,r]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[d,m]=(0,o.useState)({}),h=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.QJ.ANGULAR?`${t}/angular`:e===l.QJ.REACT?`${t}/react`:e===l.QJ.VUE?`${t}/vue`:e===l.QJ.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,a=null;e!==l.QJ.PREVIEW&&(r(!0),!i&&h&&(e===l.QJ.ANGULAR&&(s=async function(e,t){const n={};return await u(n,`${e}/${t}.html`,`${t}.html`),await Promise.all([u(n,`${e}/${t}.ts`,`${t}.ts`),u(n,`${e}/${t}.css`,`${t}.css`)]),n}(h,t)),e===l.QJ.REACT&&(s=async function(e,t){const n={},s=await p(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;try{const s=await p(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),e===l.QJ.VUE&&(s=async function(e,t){const n={},s=await p(`${e}/${t}.vue`);n[`${t}.vue`]=s;try{const s=await p(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),e===l.QJ.JAVASCRIPT&&(s=async function(e,t){const n={},s=await p(`${e}/${t}.html`,!0);n[`${t}.html`]=s;try{const s=await p(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),s||(s=Promise.resolve({}))),a=n&&n[e]?new Promise(((t,s)=>{const i={};Promise.all(n[e].map((async e=>{try{const t=await p(`${h}/${e}`);i[e]=t}catch(t){s(t)}}))).then((()=>{t(i)}))})):Promise.resolve({}),Promise.all([s,a]).then((e=>{let[t,n]=e;r(!1),m({...t,...n})})))}),[e,h,n,i]),{isFetching:a,snippets:d,hasError:c}}function $(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),a=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,j.jsx)(i.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,j.jsx)(r.Z,{language:a,children:c})]})}function E(e){const t=(0,a.F)(),n=(0,s.Z)("/"),r=`${(0,s.Z)("/img")}/stackblitz.svg`,o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,j.jsx)("div",{className:"Interaction",children:e.activeFramework===l.QJ.PREVIEW?(0,j.jsx)(i.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(i._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:i,version:a}=e;const r=a||"latest";return s===l.QJ.REACT?x(t,i,n,r):s===l.QJ.ANGULAR?w(t,i,n,r):s===l.QJ.JAVASCRIPT?v(t,i,n,r):s===l.QJ.VUE?g(t,i,n,r):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.deviantRootFileName?e.deviantRootFileName:e.name,version:"latest"}),className:"Stackblitz",icon:r,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function A(e){return e.hasError?(0,j.jsx)(y,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,j.jsx)(i.lL,{}):(0,j.jsx)($,{snippets:e.snippets})}function _(e){const[t,n]=o.useState(l.QJ.PREVIEW),{isFetching:s,hasError:a,snippets:r}=b(t,e.name,e.additionalFiles,e.preventDefaultExample);function d(e){n(e)}l.QJ.PREVIEW;return(0,j.jsxs)("div",{className:"Playground",children:[(0,j.jsxs)("div",{className:"Toolbar",children:[(0,j.jsxs)(i.Vp,{layout:"auto",class:"Tabs",children:[(0,j.jsx)(i.t3,{onClick:()=>d(l.QJ.PREVIEW),children:"Preview"}),[l.QJ.ANGULAR,l.QJ.REACT,l.QJ.VUE,l.QJ.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,j.jsx)(i.t3,{onClick:()=>d(e),children:(0,l.nI)(e)},e)))]}),(0,j.jsx)(E,{name:e.name,deviantRootFileName:e.deviantRootFileName,activeFramework:t,noMargin:!1,snippets:r})]}),t===l.QJ.PREVIEW?(0,j.jsx)(c.Z,{...e}):(0,j.jsx)(A,{isFetching:s,hasError:a,snippets:r})]})}}}]);