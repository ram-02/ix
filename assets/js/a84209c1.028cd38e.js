"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19914],{25425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var s=n(97458),r=n(16436),a=n(53212);const i={},o="Bar chart",c={id:"controls/charts/bar-chart",title:"Bar chart",description:"Examples",source:"@site/docs/controls/charts/bar-chart.md",sourceDirName:"controls/charts",slug:"/controls/charts/bar-chart",permalink:"/docs/controls/charts/bar-chart",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/charts/bar-chart.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"3D-Charting",permalink:"/docs/controls/charts/3d"},next:{title:"Gauge chart",permalink:"/docs/controls/charts/gauge-chart"}},l={},p=[{value:"Examples",id:"examples",level:2},{value:"Bar chart horizontal",id:"bar-chart-horizontal",level:3},{value:"Bar chart horizontal stacked",id:"bar-chart-horizontal-stacked",level:3}];function u(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bar-chart",children:"Bar chart"}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"bar-chart-horizontal",children:"Bar chart horizontal"}),"\n",(0,s.jsx)(a.Z,{height:"40rem",name:"echarts-bar-simple",noMargin:!0,examplesByName:!0}),"\n",(0,s.jsx)(t.h3,{id:"bar-chart-horizontal-stacked",children:"Bar chart horizontal stacked"}),"\n",(0,s.jsx)(a.Z,{height:"40rem",name:"echarts-bar-horizontal-stacked",noMargin:!0,examplesByName:!0})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const s=300,r="https://stackblitz.com",a=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],i=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>d("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,i),startScript:e=>h("startScript",e),terminalHeight:e=>d("terminalHeight",e),theme:e=>m("theme",e,o),view:e=>m("view",e,c),zenMode:e=>u("zenMode",e)};function p(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function d(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${y(t)}${e}${p(t)}`}function $(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${y(n)}${e}${p(n)}`}function y(e={}){return("string"==typeof e.origin?e.origin:r).replace(/\/$/,"")}function w(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function v(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}class j{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const r=f();this.pending[r]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:r,__error:a}=n;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(a?`${t}: ${a}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class x{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new j(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class A{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new x(n[0],t.payload),e(this.vm),r())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(i),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let a=0;const i=window.setInterval((()=>{if(this.vm)r();else{if(a>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,t)=>{e.id===this.id&&b.splice(t,1)}));a++,s()}}),500)})),b.push(this)}}const _=e=>{const t=e instanceof Element?"element":"id";return b.find((n=>n[t]===e))??null};function P({template:e,title:t,description:n,dependencies:s,files:r,settings:i}){if(!a.includes(e)){const e=a.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),i&&c("project[settings]",JSON.stringify(i)),Object.entries(r).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function R(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(_(e)??new A(e)).pending}const S={connect:R,embedGithubProject:function(e,t,n){const s=v(e),r=document.createElement("iframe");return r.src=$(`/github/${t}`,n),w(s,r,n),R(r)},embedProject:function(e,t,n){const s=v(e),r=function(e,t){const n=P(e);return n.action=$("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return w(s,a,n),a.contentDocument?.write(r),R(a)},embedProjectId:function(e,t,n){const s=v(e),r=document.createElement("iframe");return r.src=$(`/edit/${t}`,n),w(s,r,n),R(r)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=E(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=P(e);n.action=g("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=E(t);window.open(n,s)}}},94691:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76213),r=n(7528),a=n(2476),i=n(52983),o=n(83129),c=n(97458);function l(e){const t=(0,a.Z)(),[n]=(0,i.useState)(!1),l=(0,r.Z)("/"),[p,u]=(0,i.useState)(""),[d,m]=(0,i.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,i.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${p}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>s,nI:()=>r});let s=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function r(e){switch(e){case s.ANGULAR:return"Angular";case s.REACT:return"React";case s.JAVASCRIPT:return"JavaScript";case s.VUE:return"Vue";case s.PREVIEW:return"Preview"}}},36365:(e,t,n)=>{n.d(t,{G3:()=>l,Sy:()=>$,Td:()=>p,nq:()=>u,zx:()=>i});var s=n(14455),r=n(41124),a=n(99290);function i(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function o(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return i(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function c(e){return h(function(e){const t=o(e,/<!-- Preview code -->/g);if(t){const n=o(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return i(e)}(e),!0).source}function l(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function p(e,t,n){let s="web-components";return t===r.QJ.ANGULAR&&(s="angular"),t===r.QJ.REACT&&(s="react"),t===r.QJ.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===l(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:c(n),raw:n}:null}catch(n){console.warn(n)}})))}async function u(e,t,n,s){const a=[];return n===r.QJ.ANGULAR&&a.push(`${t}.html`,`${t}.ts`),n===r.QJ.JAVASCRIPT&&a.push(`${t}.html`),n===r.QJ.REACT&&a.push(`${t}.tsx`),n===r.QJ.VUE&&a.push(`${t}.vue`),s&&a.push(`${t}.css`),p(e,n,a)}function d(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=a.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function h(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,s){const a={},i={},o=e.map((async e=>{let{filename:o,raw:c}=e;if(o.endsWith(".css"))return;let l=c;if(o===n){s===r.QJ.JAVASCRIPT&&(l=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=h(l,s===r.QJ.ANGULAR);l=e,n&&(i[`src/${s===r.QJ.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}a[`src${s===r.QJ.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:a,styleFiles:i}}async function $(e){let{name:t,framework:n,files:a,baseUrl:i,version:o}=e;const c=o||"latest";let l=null;return n===r.QJ.REACT&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,i=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[o,c,l,p,...u]=await f([`${a}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...i.map((t=>`${e}code-runtime/react/${t}`))]),h=t[0],{files:$,styleFiles:y}=await g(t,a,h.filename,r.QJ.REACT),w={...$,...y,"src/styles/global.css":o,"index.html":m(l),"src/App.tsx":c.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${h.filename.substring(0,h.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":d(p,n)};u.forEach(((e,t)=>{w[i[t]]=e}));const v={template:"node",title:"iX React App",description:"iX react playground",files:w};return{exampleFile:`src/${h.filename}`,open:()=>{s.Z.openProject(v,{openFile:`src/${h.filename}`})},config:v}}(i,a,c)),n===r.QJ.ANGULAR&&(l=async function(e,t,n,a){const i=`${e}auto-generated/previews/styles/`,[o,c,l,p,u,h,$,y,w,v]=await f([`${i}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let E=n[0];n.length>=2&&(E=n[1]);const j=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&j.push(t)}));const x=`\n    ${j.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${j.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:b,styleFiles:A}=await g(n,i,E.filename,r.QJ.ANGULAR),_={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...b,...A,"src/app/declare-component.ts":x,"src/app/app.component.html":c,"src/app/app.component.ts":l,"src/app/app.module.ts":p,"src/index.html":m(u),"src/main.ts":h,"src/styles.css":o,"angular.json":$,"package.json":d(y,a),"tsconfig.app.json":w,"tsconfig.json":v}};return{exampleFile:`src/app/${t}.ts`,open:()=>{s.Z.openProject(_,{openFile:`src/app/${t}.ts`})},config:_}}(i,t,a,c)),n===r.QJ.JAVASCRIPT&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,[i,o,c,l]=await f([`${a}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),p=t[0],{files:u,styleFiles:m}=await g(t,a,p.filename,r.QJ.JAVASCRIPT),h={template:"node",title:"iX html app",description:"iX html playground",files:{...u,...m,"src/styles/global.css":i,"src/main.js":o,"package.json":d(c,n),"vite.config.ts":l}};return{exampleFile:"src/index.html",open:()=>{s.Z.openProject(h,{openFile:["src/index.html"]})},config:h}}(i,a,c)),n===r.QJ.VUE&&(l=async function(e,t,n){const a=`${e}auto-generated/previews/styles/`,[i,o,c,l,p,u,h,$]=await f([`${a}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),y=t[0],{files:w,styleFiles:v}=await g(t,a,y.filename,r.QJ.VUE),E={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...w,...v,"src/styles/global.css":i,"index.html":m(c),"src/main.ts":l,"src/App.vue":o.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${y.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":$,"package.json":d(p,n),"tsconfig.json":u,"vite.config.ts":h,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${y.filename}`,open:()=>{s.Z.openProject(E,{openFile:`src/${y.filename}`})},config:E}}(i,a,c)),l}},53212:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(7528),r=n(90466),a=n(43401),i=n(40749),o=n(52983),c=n(94691),l=n(41124),p=n(36365);async function u(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?(0,p.zx)(s):s}async function d(e,t,n){try{const s=await u(t);s&&(e[n]=s)}catch(s){}}function m(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}var h=n(14455);function f(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),h.Z.openProject({title:`iX ${m(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function g(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await u(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/vue/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${m(n)} from './${n}.vue';`;return r["src/App.vue"]=r["src/App.vue"].replace("import Example from './Example.vue';",a),r["src/App.vue"]=r["src/App.vue"].replace("<Example />",`<${m(n)} />`),r}(e,t,n);f("vue",r,`${n}.vue`,s)}async function $(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await u(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await u(`${e}auto-generated/previews/web-components/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s},a=t[`${n}.html`];return r["src/index.html"]=a,Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]})),delete r[`src/${n}.html`],r}(e,t,n);f("html",r,"src/index.html",s)}async function y(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await u(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/angular/global.css`);return t["src/styles.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const a=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((s=>s.endsWith(".ts")&&s!==`${t}.ts`&&n.test(e[s]))).map((e=>e.replace(".ts","")))}(t,n),i=a.map((e=>`import ${m(e)} from './../${e}';`)).join("\n");r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${m(n)} from './../${n}';`,i].join("\n"));const o=a.map((e=>m(e))).join(", ");return r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${m(n)}, ${o}],`),r}(e,t,n);f("angular",r,`src/${n}.ts`,s)}async function w(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await u(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/react/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${m(n)} from './${n}';`;return r["src/App.tsx"]=r["src/App.tsx"].replace("import Example from './Example';",a),r["src/App.tsx"]=r["src/App.tsx"].replace("<Example />",`<${m(n)} />`),r}(e,t,n);f("react",r,`src/${n}.tsx`,s)}var v=n(97458);function E(){return(0,v.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function j(e,t,n,r){const[a,i]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[p,m]=(0,o.useState)({}),h=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.QJ.ANGULAR?`${t}/angular`:e===l.QJ.REACT?`${t}/react`:e===l.QJ.VUE?`${t}/vue`:e===l.QJ.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,a=null;e!==l.QJ.PREVIEW&&(i(!0),!r&&h&&(e===l.QJ.ANGULAR&&(s=async function(e,t){const n={};return await d(n,`${e}/${t}.html`,`${t}.html`),await Promise.all([d(n,`${e}/${t}.ts`,`${t}.ts`),d(n,`${e}/${t}.css`,`${t}.css`)]),n}(h,t)),e===l.QJ.REACT&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),e===l.QJ.VUE&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.vue`);n[`${t}.vue`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),e===l.QJ.JAVASCRIPT&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.html`,!0);n[`${t}.html`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),s||(s=Promise.resolve({}))),a=n&&n[e]?new Promise(((t,s)=>{const r={};Promise.all(n[e].map((async e=>{try{const t=await u(`${h}/${e}`);r[e]=t}catch(t){s(t)}}))).then((()=>{t(r)}))})):Promise.resolve({}),Promise.all([s,a]).then((e=>{let[t,n]=e;i(!1),m({...t,...n})})))}),[e,h,n,r]),{isFetching:a,snippets:p,hasError:c}}function x(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),a=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,v.jsx)(r.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,v.jsx)(i.Z,{language:a,children:c})]})}function b(e){const t=(0,a.F)(),n=(0,s.Z)("/"),i=`${(0,s.Z)("/img")}/stackblitz.svg`,o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,v.jsx)("div",{className:"Interaction",children:e.activeFramework===l.QJ.PREVIEW?(0,v.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(r._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:r,version:a}=e;const i=a||"latest";return s===l.QJ.REACT?w(t,r,n,i):s===l.QJ.ANGULAR?y(t,r,n,i):s===l.QJ.JAVASCRIPT?$(t,r,n,i):s===l.QJ.VUE?g(t,r,n,i):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.deviantRootFileName?e.deviantRootFileName:e.name,version:"latest"}),className:"Stackblitz",icon:i,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function A(e){return e.hasError?(0,v.jsx)(E,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,v.jsx)(r.lL,{}):(0,v.jsx)(x,{snippets:e.snippets})}function _(e){const[t,n]=o.useState(l.QJ.PREVIEW),{isFetching:s,hasError:a,snippets:i}=j(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}l.QJ.PREVIEW;return(0,v.jsxs)("div",{className:"Playground",children:[(0,v.jsxs)("div",{className:"Toolbar",children:[(0,v.jsxs)(r.Vp,{layout:"auto",class:"Tabs",children:[(0,v.jsx)(r.t3,{onClick:()=>p(l.QJ.PREVIEW),children:"Preview"}),[l.QJ.ANGULAR,l.QJ.REACT,l.QJ.VUE,l.QJ.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,v.jsx)(r.t3,{onClick:()=>p(e),children:(0,l.nI)(e)},e)))]}),(0,v.jsx)(b,{name:e.name,deviantRootFileName:e.deviantRootFileName,activeFramework:t,noMargin:!1,snippets:i})]}),t===l.QJ.PREVIEW?(0,v.jsx)(c.Z,{...e}):(0,v.jsx)(A,{isFetching:s,hasError:a,snippets:i})]})}}}]);