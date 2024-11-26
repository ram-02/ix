"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12901],{8267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=n(97458),r=n(16436),i=n(53212);const a={sidebar_position:0},o="Basics",c={id:"controls/charts/overview",title:"Basics",description:"Siemens Industrial Experience provides a theme for the popular chart library ECharts.",source:"@site/docs/controls/charts/overview.md",sourceDirName:"controls/charts",slug:"/controls/charts/overview",permalink:"/docs/controls/charts/overview",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/charts/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"mySidebar",previous:{title:"Category filter",permalink:"/docs/controls/category-filter"},next:{title:"Functionalities",permalink:"/docs/controls/charts/special-chart"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Angular",id:"angular",level:3},{value:"Examples",id:"examples",level:2},{value:"Empty state",id:"empty-state",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"basics",children:"Basics"}),"\n",(0,s.jsxs)(t.p,{children:["Siemens Industrial Experience provides a theme for the popular chart library ",(0,s.jsx)(t.a,{href:"https://echarts.apache.org/handbook/en/get-started",children:"ECharts"}),".\nThis lets you harness the power of ECharts with seamless integration into the Siemens Industrial Experience styleguide."]}),"\n",(0,s.jsx)("div",{className:"siemens-brand-section",children:(0,s.jsxs)(t.p,{children:["ECharts is a third party library distributed under ",(0,s.jsx)(t.a,{href:"https://www.apache.org/licenses",children:"Apache License 2.0"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install --save @siemens/ix-echarts\n"})}),"\n",(0,s.jsxs)(t.p,{children:["First, import the ",(0,s.jsx)(t.code,{children:"registerTheme"})," function from our module. Then, invoke this function, passing in your ",(0,s.jsx)(t.code,{children:"echarts"})," instance as an argument. You don't need to provide the ",(0,s.jsx)(t.code,{children:"echarts"})," instance if it is provided globally in your ",(0,s.jsx)(t.code,{children:"window"})," object when using vanilla Javascript. Once this is done, you\u2019ll be able to utilize the ",(0,s.jsx)(t.code,{children:"brand-dark"}),", ",(0,s.jsx)(t.code,{children:"brand-light"}),", ",(0,s.jsx)(t.code,{children:"classic-dark"}),", and ",(0,s.jsx)(t.code,{children:"classic-light"})," themes for your chart."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { registerTheme } from '@siemens/ix-echarts';\n\nregisterTheme(echarts);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"angular",children:"Angular"}),"\n",(0,s.jsxs)(t.p,{children:["Please make sure to correctly add ",(0,s.jsx)(t.code,{children:"NgxEcharts"})," in your module file."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.Z,{height:"40rem",name:"echarts",noMargin:!0}),"\n",(0,s.jsx)(t.h2,{id:"empty-state",children:"Empty state"}),"\n",(0,s.jsx)(i.Z,{height:"40rem",name:"echarts-empty-state",noMargin:!0})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>R});const s=300,r="https://stackblitz.com",i=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>d("ctl",e),devToolsHeight:e=>u("devtoolsheight",e),forceEmbedLayout:e=>d("embed",e),hideDevTools:e=>d("hidedevtools",e),hideExplorer:e=>d("hideExplorer",e),hideNavigation:e=>d("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,a),startScript:e=>h("startScript",e),terminalHeight:e=>u("terminalHeight",e),theme:e=>m("theme",e,o),view:e=>m("view",e,c),zenMode:e=>d("zenMode",e)};function p(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function d(e,t){return!0===t?`${e}=1`:""}function u(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${y(t)}${e}${p(t)}`}function $(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${y(n)}${e}${p(n)}`}function y(e={}){return("string"==typeof e.origin?e.origin:r).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function w(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&!1===e.newWindow?"_self":"_blank"}class x{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const r=f();this.pending[r]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:r,__error:i}=n;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(i?`${t}: ${i}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class E{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new x(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class A{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new E(n[0],t.payload),e(this.vm),r())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(a),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let i=0;const a=window.setInterval((()=>{if(this.vm)r();else{if(i>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,t)=>{e.id===this.id&&b.splice(t,1)}));i++,s()}}),500)})),b.push(this)}}const _=e=>{const t=e instanceof Element?"element":"id";return b.find((n=>n[t]===e))??null};function P({template:e,title:t,description:n,dependencies:s,files:r,settings:a}){if(!i.includes(e)){const e=i.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),a&&c("project[settings]",JSON.stringify(a)),Object.entries(r).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function S(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(_(e)??new A(e)).pending}const R={connect:S,embedGithubProject:function(e,t,n){const s=w(e),r=document.createElement("iframe");return r.src=$(`/github/${t}`,n),v(s,r,n),S(r)},embedProject:function(e,t,n){const s=w(e),r=function(e,t){const n=P(e);return n.action=$("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),i=document.createElement("iframe");return v(s,i,n),i.contentDocument?.write(r),S(i)},embedProjectId:function(e,t,n){const s=w(e),r=document.createElement("iframe");return r.src=$(`/edit/${t}`,n),v(s,r,n),S(r)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=j(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=P(e);n.action=g("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=j(t);window.open(n,s)}}},94691:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76213),r=n(7528),i=n(2476),a=n(52983),o=n(83129),c=n(97458);function l(e){const t=(0,i.Z)(),[n]=(0,a.useState)(!1),l=(0,r.Z)("/"),[p,d]=(0,a.useState)(""),[u,m]=(0,a.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,a.useEffect)((()=>{const t=h?.name;d(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,a.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>s,nI:()=>r});let s=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function r(e){switch(e){case s.ANGULAR:return"Angular";case s.REACT:return"React";case s.JAVASCRIPT:return"JavaScript";case s.VUE:return"Vue";case s.PREVIEW:return"Preview"}}},36365:(e,t,n)=>{n.d(t,{G3:()=>l,Sy:()=>$,Td:()=>p,nq:()=>d,zx:()=>a});var s=n(14455),r=n(41124),i=n(99290);function a(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function o(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return a(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function c(e){return h(function(e){const t=o(e,/<!-- Preview code -->/g);if(t){const n=o(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return a(e)}(e),!0).source}function l(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function p(e,t,n){let s="web-components";return t===r.QJ.ANGULAR&&(s="angular"),t===r.QJ.REACT&&(s="react"),t===r.QJ.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===l(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:c(n),raw:n}:null}catch(n){console.warn(n)}})))}async function d(e,t,n,s){const i=[];return n===r.QJ.ANGULAR&&i.push(`${t}.html`,`${t}.ts`),n===r.QJ.JAVASCRIPT&&i.push(`${t}.html`),n===r.QJ.REACT&&i.push(`${t}.tsx`),n===r.QJ.VUE&&i.push(`${t}.vue`),s&&i.push(`${t}.css`),p(e,n,i)}function u(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=i.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function h(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,s){const i={},a={},o=e.map((async e=>{let{filename:o,raw:c}=e;if(o.endsWith(".css"))return;let l=c;if(o===n){s===r.QJ.JAVASCRIPT&&(l=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=h(l,s===r.QJ.ANGULAR);l=e,n&&(a[`src/${s===r.QJ.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}i[`src${s===r.QJ.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:i,styleFiles:a}}async function $(e){let{name:t,framework:n,files:i,baseUrl:a,version:o}=e;const c=o||"latest";let l=null;return n===r.QJ.REACT&&(l=async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,a=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[o,c,l,p,...d]=await f([`${i}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...a.map((t=>`${e}code-runtime/react/${t}`))]),h=t[0],{files:$,styleFiles:y}=await g(t,i,h.filename,r.QJ.REACT),v={...$,...y,"src/styles/global.css":o,"index.html":m(l),"src/App.tsx":c.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${h.filename.substring(0,h.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":u(p,n)};d.forEach(((e,t)=>{v[a[t]]=e}));const w={template:"node",title:"iX React App",description:"iX react playground",files:v};return{exampleFile:`src/${h.filename}`,open:()=>{s.Z.openProject(w,{openFile:`src/${h.filename}`})},config:w}}(a,i,c)),n===r.QJ.ANGULAR&&(l=async function(e,t,n,i){const a=`${e}auto-generated/previews/styles/`,[o,c,l,p,d,h,$,y,v,w]=await f([`${a}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let j=n[0];n.length>=2&&(j=n[1]);const x=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&x.push(t)}));const E=`\n    ${x.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${x.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:b,styleFiles:A}=await g(n,a,j.filename,r.QJ.ANGULAR),_={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...b,...A,"src/app/declare-component.ts":E,"src/app/app.component.html":c,"src/app/app.component.ts":l,"src/app/app.module.ts":p,"src/index.html":m(d),"src/main.ts":h,"src/styles.css":o,"angular.json":$,"package.json":u(y,i),"tsconfig.app.json":v,"tsconfig.json":w}};return{exampleFile:`src/app/${t}.ts`,open:()=>{s.Z.openProject(_,{openFile:`src/app/${t}.ts`})},config:_}}(a,t,i,c)),n===r.QJ.JAVASCRIPT&&(l=async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[a,o,c,l]=await f([`${i}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),p=t[0],{files:d,styleFiles:m}=await g(t,i,p.filename,r.QJ.JAVASCRIPT),h={template:"node",title:"iX html app",description:"iX html playground",files:{...d,...m,"src/styles/global.css":a,"src/main.js":o,"package.json":u(c,n),"vite.config.ts":l}};return{exampleFile:"src/index.html",open:()=>{s.Z.openProject(h,{openFile:["src/index.html"]})},config:h}}(a,i,c)),n===r.QJ.VUE&&(l=async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[a,o,c,l,p,d,h,$]=await f([`${i}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),y=t[0],{files:v,styleFiles:w}=await g(t,i,y.filename,r.QJ.VUE),j={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...v,...w,"src/styles/global.css":a,"index.html":m(c),"src/main.ts":l,"src/App.vue":o.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${y.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":$,"package.json":u(p,n),"tsconfig.json":d,"vite.config.ts":h,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${y.filename}`,open:()=>{s.Z.openProject(j,{openFile:`src/${y.filename}`})},config:j}}(a,i,c)),l}},53212:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(7528),r=n(90466),i=n(43401),a=n(40749),o=n(52983),c=n(94691),l=n(41124),p=n(36365);async function d(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?(0,p.zx)(s):s}async function u(e,t,n){try{const s=await d(t);s&&(e[n]=s)}catch(s){}}function m(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}var h=n(14455);function f(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),h.Z.openProject({title:`iX ${m(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function g(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await d(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await d(`${e}auto-generated/previews/vue/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const i=`import ${m(n)} from './${n}.vue';`;return r["src/App.vue"]=r["src/App.vue"].replace("import Example from './Example.vue';",i),r["src/App.vue"]=r["src/App.vue"].replace("<Example />",`<${m(n)} />`),r}(e,t,n);f("vue",r,`${n}.vue`,s)}async function $(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await d(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await d(`${e}auto-generated/previews/web-components/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s},i=t[`${n}.html`];return r["src/index.html"]=i,Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]})),delete r[`src/${n}.html`],r}(e,t,n);f("html",r,"src/index.html",s)}async function y(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await d(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await d(`${e}auto-generated/previews/angular/global.css`);return t["src/styles.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const i=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((s=>s.endsWith(".ts")&&s!==`${t}.ts`&&n.test(e[s]))).map((e=>e.replace(".ts","")))}(t,n),a=i.map((e=>`import ${m(e)} from './../${e}';`)).join("\n");r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${m(n)} from './../${n}';`,a].join("\n"));const o=i.map((e=>m(e))).join(", ");return r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${m(n)}, ${o}],`),r}(e,t,n);f("angular",r,`src/${n}.ts`,s)}async function v(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await d(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await d(`${e}auto-generated/previews/react/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const i=`import ${m(n)} from './${n}';`;return r["src/App.tsx"]=r["src/App.tsx"].replace("import Example from './Example';",i),r["src/App.tsx"]=r["src/App.tsx"].replace("<Example />",`<${m(n)} />`),r}(e,t,n);f("react",r,`src/${n}.tsx`,s)}var w=n(97458);function j(){return(0,w.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function x(e,t,n,r){const[i,a]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[p,m]=(0,o.useState)({}),h=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.QJ.ANGULAR?`${t}/angular`:e===l.QJ.REACT?`${t}/react`:e===l.QJ.VUE?`${t}/vue`:e===l.QJ.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,i=null;e!==l.QJ.PREVIEW&&(a(!0),!r&&h&&(e===l.QJ.ANGULAR&&(s=async function(e,t){const n={};return await u(n,`${e}/${t}.html`,`${t}.html`),await Promise.all([u(n,`${e}/${t}.ts`,`${t}.ts`),u(n,`${e}/${t}.css`,`${t}.css`)]),n}(h,t)),e===l.QJ.REACT&&(s=async function(e,t){const n={},s=await d(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;try{const s=await d(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),e===l.QJ.VUE&&(s=async function(e,t){const n={},s=await d(`${e}/${t}.vue`);n[`${t}.vue`]=s;try{const s=await d(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),e===l.QJ.JAVASCRIPT&&(s=async function(e,t){const n={},s=await d(`${e}/${t}.html`,!0);n[`${t}.html`]=s;try{const s=await d(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),s||(s=Promise.resolve({}))),i=n&&n[e]?new Promise(((t,s)=>{const r={};Promise.all(n[e].map((async e=>{try{const t=await d(`${h}/${e}`);r[e]=t}catch(t){s(t)}}))).then((()=>{t(r)}))})):Promise.resolve({}),Promise.all([s,i]).then((e=>{let[t,n]=e;a(!1),m({...t,...n})})))}),[e,h,n,r]),{isFetching:i,snippets:p,hasError:c}}function E(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),i=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,w.jsx)(r.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,w.jsx)(a.Z,{language:i,children:c})]})}function b(e){const t=(0,i.F)(),n=(0,s.Z)("/"),a=`${(0,s.Z)("/img")}/stackblitz.svg`,o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,w.jsx)("div",{className:"Interaction",children:e.activeFramework===l.QJ.PREVIEW?(0,w.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(r._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:r,version:i}=e;const a=i||"latest";return s===l.QJ.REACT?v(t,r,n,a):s===l.QJ.ANGULAR?y(t,r,n,a):s===l.QJ.JAVASCRIPT?$(t,r,n,a):s===l.QJ.VUE?g(t,r,n,a):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.deviantRootFileName?e.deviantRootFileName:e.name,version:"latest"}),className:"Stackblitz",icon:a,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function A(e){return e.hasError?(0,w.jsx)(j,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,w.jsx)(r.lL,{}):(0,w.jsx)(E,{snippets:e.snippets})}function _(e){const[t,n]=o.useState(l.QJ.PREVIEW),{isFetching:s,hasError:i,snippets:a}=x(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}l.QJ.PREVIEW;return(0,w.jsxs)("div",{className:"Playground",children:[(0,w.jsxs)("div",{className:"Toolbar",children:[(0,w.jsxs)(r.Vp,{layout:"auto",class:"Tabs",children:[(0,w.jsx)(r.t3,{onClick:()=>p(l.QJ.PREVIEW),children:"Preview"}),[l.QJ.ANGULAR,l.QJ.REACT,l.QJ.VUE,l.QJ.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,w.jsx)(r.t3,{onClick:()=>p(e),children:(0,l.nI)(e)},e)))]}),(0,w.jsx)(b,{name:e.name,deviantRootFileName:e.deviantRootFileName,activeFramework:t,noMargin:!1,snippets:a})]}),t===l.QJ.PREVIEW?(0,w.jsx)(c.Z,{...e}):(0,w.jsx)(A,{isFetching:s,hasError:i,snippets:a})]})}}}]);