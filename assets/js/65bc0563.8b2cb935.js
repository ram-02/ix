"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14963],{56120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(97458),i=n(16436);const a={},r=void 0,o={id:"auto-generated/ix-kpi/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-kpi/events.md",sourceDirName:"auto-generated/ix-kpi",slug:"/auto-generated/ix-kpi/events",permalink:"/docs/auto-generated/ix-kpi/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-kpi/events.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function p(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,s.jsx)(t.p,{children:"No events available for this component."})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},92743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(97458),i=n(16436),a=n(6492);const r={},o=void 0,c={id:"auto-generated/ix-kpi/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-kpi/props.md",sourceDirName:"auto-generated/ix-kpi",slug:"/auto-generated/ix-kpi/props",permalink:"/docs/auto-generated/ix-kpi/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-kpi/props.md",tags:[],version:"current",frontMatter:{}},l={},p=[];function u(e){return(0,s.jsx)(a.Z,{attributes:[{name:"label",description:"",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"orientation",description:"",definition:[{name:"Attribute",value:"orientation"},{name:"Type",value:'"horizontal" \uff5c "vertical"'},{name:"Default",value:"'horizontal'"}],tags:[]},{name:"state",description:"",definition:[{name:"Attribute",value:"state"},{name:"Type",value:'"alarm" \uff5c "neutral" \uff5c "warning"'},{name:"Default",value:"'neutral'"}],tags:[]},{name:"unit",description:"",definition:[{name:"Attribute",value:"unit"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"value",description:"",definition:[{name:"Attribute",value:"value"},{name:"Type",value:"number \uff5c string"},{name:"Default"}],tags:[]}]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},45518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var s=n(97458),i=n(16436),a=n(56120),r=n(92743),o=n(53212);const c={},l="KPI",p={id:"controls/kpi",title:"KPI",description:"Usage",source:"@site/docs/controls/kpi.md",sourceDirName:"controls",slug:"/controls/kpi",permalink:"/docs/controls/kpi",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/kpi.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Key value",permalink:"/docs/controls/key-value"},next:{title:"Layout auto",permalink:"/docs/controls/layout-auto"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},...r.toc,{value:"Events",id:"events",level:3},...a.toc];function m(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"kpi",children:"KPI"}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(o.Z,{name:"kpi",height:"28rem"}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>k});const s=300,i="https://stackblitz.com",a=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],r=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>d("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,r),startScript:e=>h("startScript",e),terminalHeight:e=>d("terminalHeight",e),theme:e=>m("theme",e,o),view:e=>m("view",e,c),zenMode:e=>u("zenMode",e)};function p(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function d(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${$(t)}${e}${p(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${$(n)}${e}${p(n)}`}function $(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function w(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function y(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&!1===e.newWindow?"_self":"_blank"}class x{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=f();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:a}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(a?`${t}: ${a}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class b{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new x(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const E=[];class A{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new b(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(r),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let a=0;const r=window.setInterval((()=>{if(this.vm)i();else{if(a>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void E.forEach(((e,t)=>{e.id===this.id&&E.splice(t,1)}));a++,s()}}),500)})),E.push(this)}}const _=e=>{const t=e instanceof Element?"element":"id";return E.find((n=>n[t]===e))??null};function N({template:e,title:t,description:n,dependencies:s,files:i,settings:r}){if(!a.includes(e)){const e=a.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),r&&c("project[settings]",JSON.stringify(r)),Object.entries(i).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function P(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(_(e)??new A(e)).pending}const k={connect:P,embedGithubProject:function(e,t,n){const s=y(e),i=document.createElement("iframe");return i.src=v(`/github/${t}`,n),w(s,i,n),P(i)},embedProject:function(e,t,n){const s=y(e),i=function(e,t){const n=N(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return w(s,a,n),a.contentDocument?.write(i),P(a)},embedProjectId:function(e,t,n){const s=y(e),i=document.createElement("iframe");return i.src=v(`/edit/${t}`,n),w(s,i,n),P(i)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=j(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=N(e);n.action=g("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=j(t);window.open(n,s)}}},6492:(e,t,n)=>{n.d(t,{Z:()=>r});n(52983);var s=n(4173),i=n(97458);function a(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(a,{attribute:e},e.name)))]})}},4173:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});n(52983);var s=n(97458);function i(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},94691:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76213),i=n(7528),a=n(2476),r=n(52983),o=n(83129),c=n(97458);function l(e){const t=(0,a.Z)(),[n]=(0,r.useState)(!1),l=(0,i.Z)("/"),[p,u]=(0,r.useState)(""),[d,m]=(0,r.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,r.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${p}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>s,nI:()=>i});let s=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function i(e){switch(e){case s.ANGULAR:return"Angular";case s.REACT:return"React";case s.JAVASCRIPT:return"JavaScript";case s.VUE:return"Vue";case s.PREVIEW:return"Preview"}}},36365:(e,t,n)=>{n.d(t,{G3:()=>l,Sy:()=>v,Td:()=>p,nq:()=>u,zx:()=>r});var s=n(14455),i=n(41124),a=n(99290);function r(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function o(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return r(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function c(e){return h(function(e){const t=o(e,/<!-- Preview code -->/g);if(t){const n=o(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return r(e)}(e),!0).source}function l(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function p(e,t,n){let s="web-components";return t===i.QJ.ANGULAR&&(s="angular"),t===i.QJ.REACT&&(s="react"),t===i.QJ.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===l(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:c(n),raw:n}:null}catch(n){console.warn(n)}})))}async function u(e,t,n,s){const a=[];return n===i.QJ.ANGULAR&&a.push(`${t}.html`,`${t}.ts`),n===i.QJ.JAVASCRIPT&&a.push(`${t}.html`),n===i.QJ.REACT&&a.push(`${t}.tsx`),n===i.QJ.VUE&&a.push(`${t}.vue`),s&&a.push(`${t}.css`),p(e,n,a)}function d(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=a.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function h(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,s){const a={},r={},o=e.map((async e=>{let{filename:o,raw:c}=e;if(o.endsWith(".css"))return;let l=c;if(o===n){s===i.QJ.JAVASCRIPT&&(l=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=h(l,s===i.QJ.ANGULAR);l=e,n&&(r[`src/${s===i.QJ.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}a[`src${s===i.QJ.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:a,styleFiles:r}}async function v(e){let{name:t,framework:n,files:a,baseUrl:r,version:o}=e;const c=o||"latest";let l=null;return n===i.QJ.REACT&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,r=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[o,c,l,p,...u]=await f([`${a}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...r.map((t=>`${e}code-runtime/react/${t}`))]),h=t[0],{files:v,styleFiles:$}=await g(t,a,h.filename,i.QJ.REACT),w={...v,...$,"src/styles/global.css":o,"index.html":m(l),"src/App.tsx":c.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${h.filename.substring(0,h.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":d(p,n)};u.forEach(((e,t)=>{w[r[t]]=e}));const y={template:"node",title:"iX React App",description:"iX react playground",files:w};return{exampleFile:`src/${h.filename}`,open:()=>{s.Z.openProject(y,{openFile:`src/${h.filename}`})},config:y}}(r,a,c)),n===i.QJ.ANGULAR&&(l=async function(e,t,n,a){const r=`${e}auto-generated/previews/styles/`,[o,c,l,p,u,h,v,$,w,y]=await f([`${r}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let j=n[0];n.length>=2&&(j=n[1]);const x=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&x.push(t)}));const b=`\n    ${x.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${x.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:E,styleFiles:A}=await g(n,r,j.filename,i.QJ.ANGULAR),_={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...E,...A,"src/app/declare-component.ts":b,"src/app/app.component.html":c,"src/app/app.component.ts":l,"src/app/app.module.ts":p,"src/index.html":m(u),"src/main.ts":h,"src/styles.css":o,"angular.json":v,"package.json":d($,a),"tsconfig.app.json":w,"tsconfig.json":y}};return{exampleFile:`src/app/${t}.ts`,open:()=>{s.Z.openProject(_,{openFile:`src/app/${t}.ts`})},config:_}}(r,t,a,c)),n===i.QJ.JAVASCRIPT&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,[r,o,c,l]=await f([`${a}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),p=t[0],{files:u,styleFiles:m}=await g(t,a,p.filename,i.QJ.JAVASCRIPT),h={template:"node",title:"iX html app",description:"iX html playground",files:{...u,...m,"src/styles/global.css":r,"src/main.js":o,"package.json":d(c,n),"vite.config.ts":l}};return{exampleFile:"src/index.html",open:()=>{s.Z.openProject(h,{openFile:["src/index.html"]})},config:h}}(r,a,c)),n===i.QJ.VUE&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,[r,o,c,l,p,u,h,v]=await f([`${a}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),$=t[0],{files:w,styleFiles:y}=await g(t,a,$.filename,i.QJ.VUE),j={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...w,...y,"src/styles/global.css":r,"index.html":m(c),"src/main.ts":l,"src/App.vue":o.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${$.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":v,"package.json":d(p,n),"tsconfig.json":u,"vite.config.ts":h,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${$.filename}`,open:()=>{s.Z.openProject(j,{openFile:`src/${$.filename}`})},config:j}}(r,a,c)),l}},53212:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(7528),i=n(90466),a=n(43401),r=n(40749),o=n(52983),c=n(94691),l=n(41124),p=n(36365);async function u(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?(0,p.zx)(s):s}async function d(e,t,n){try{const s=await u(t);s&&(e[n]=s)}catch(s){}}function m(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}var h=n(14455);function f(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),h.Z.openProject({title:`iX ${m(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function g(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await u(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/vue/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${m(n)} from './${n}.vue';`;return i["src/App.vue"]=i["src/App.vue"].replace("import Example from './Example.vue';",a),i["src/App.vue"]=i["src/App.vue"].replace("<Example />",`<${m(n)} />`),i}(e,t,n);f("vue",i,`${n}.vue`,s)}async function v(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await u(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await u(`${e}auto-generated/previews/web-components/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s},a=t[`${n}.html`];return i["src/index.html"]=a,Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]})),delete i[`src/${n}.html`],i}(e,t,n);f("html",i,"src/index.html",s)}async function $(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await u(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/angular/global.css`);return t["src/styles.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((s=>s.endsWith(".ts")&&s!==`${t}.ts`&&n.test(e[s]))).map((e=>e.replace(".ts","")))}(t,n),r=a.map((e=>`import ${m(e)} from './../${e}';`)).join("\n");i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${m(n)} from './../${n}';`,r].join("\n"));const o=a.map((e=>m(e))).join(", ");return i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${m(n)}, ${o}],`),i}(e,t,n);f("angular",i,`src/${n}.ts`,s)}async function w(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await u(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/react/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${m(n)} from './${n}';`;return i["src/App.tsx"]=i["src/App.tsx"].replace("import Example from './Example';",a),i["src/App.tsx"]=i["src/App.tsx"].replace("<Example />",`<${m(n)} />`),i}(e,t,n);f("react",i,`src/${n}.tsx`,s)}var y=n(97458);function j(){return(0,y.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function x(e,t,n,i){const[a,r]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[p,m]=(0,o.useState)({}),h=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.QJ.ANGULAR?`${t}/angular`:e===l.QJ.REACT?`${t}/react`:e===l.QJ.VUE?`${t}/vue`:e===l.QJ.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,a=null;e!==l.QJ.PREVIEW&&(r(!0),!i&&h&&(e===l.QJ.ANGULAR&&(s=async function(e,t){const n={};return await d(n,`${e}/${t}.html`,`${t}.html`),await Promise.all([d(n,`${e}/${t}.ts`,`${t}.ts`),d(n,`${e}/${t}.css`,`${t}.css`)]),n}(h,t)),e===l.QJ.REACT&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),e===l.QJ.VUE&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.vue`);n[`${t}.vue`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),e===l.QJ.JAVASCRIPT&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.html`,!0);n[`${t}.html`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),s||(s=Promise.resolve({}))),a=n&&n[e]?new Promise(((t,s)=>{const i={};Promise.all(n[e].map((async e=>{try{const t=await u(`${h}/${e}`);i[e]=t}catch(t){s(t)}}))).then((()=>{t(i)}))})):Promise.resolve({}),Promise.all([s,a]).then((e=>{let[t,n]=e;r(!1),m({...t,...n})})))}),[e,h,n,i]),{isFetching:a,snippets:p,hasError:c}}function b(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),a=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,y.jsx)(i.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,y.jsx)(r.Z,{language:a,children:c})]})}function E(e){const t=(0,a.F)(),n=(0,s.Z)("/"),r=`${(0,s.Z)("/img")}/stackblitz.svg`,o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,y.jsx)("div",{className:"Interaction",children:e.activeFramework===l.QJ.PREVIEW?(0,y.jsx)(i.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(i._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:i,version:a}=e;const r=a||"latest";return s===l.QJ.REACT?w(t,i,n,r):s===l.QJ.ANGULAR?$(t,i,n,r):s===l.QJ.JAVASCRIPT?v(t,i,n,r):s===l.QJ.VUE?g(t,i,n,r):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.deviantRootFileName?e.deviantRootFileName:e.name,version:"latest"}),className:"Stackblitz",icon:r,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function A(e){return e.hasError?(0,y.jsx)(j,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,y.jsx)(i.lL,{}):(0,y.jsx)(b,{snippets:e.snippets})}function _(e){const[t,n]=o.useState(l.QJ.PREVIEW),{isFetching:s,hasError:a,snippets:r}=x(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}l.QJ.PREVIEW;return(0,y.jsxs)("div",{className:"Playground",children:[(0,y.jsxs)("div",{className:"Toolbar",children:[(0,y.jsxs)(i.Vp,{layout:"auto",class:"Tabs",children:[(0,y.jsx)(i.t3,{onClick:()=>p(l.QJ.PREVIEW),children:"Preview"}),[l.QJ.ANGULAR,l.QJ.REACT,l.QJ.VUE,l.QJ.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,y.jsx)(i.t3,{onClick:()=>p(e),children:(0,l.nI)(e)},e)))]}),(0,y.jsx)(E,{name:e.name,deviantRootFileName:e.deviantRootFileName,activeFramework:t,noMargin:!1,snippets:r})]}),t===l.QJ.PREVIEW?(0,y.jsx)(c.Z,{...e}):(0,y.jsx)(A,{isFetching:s,hasError:a,snippets:r})]})}}}]);