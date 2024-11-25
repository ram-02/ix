"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17132],{40061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=n(97458),r=n(16436),i=n(53212);const o={sidebar_position:1},a="Functionalities",c={id:"controls/charts/special-chart",title:"Functionalities",description:"ECharts offers a wide variety of different chart types and features. Following page deals with some more special chart types and chart features, which might become handy in some use cases.",source:"@site/docs/controls/charts/special-chart.md",sourceDirName:"controls/charts",slug:"/controls/charts/special-chart",permalink:"/docs/controls/charts/special-chart",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/charts/special-chart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"Basics",permalink:"/docs/controls/charts/overview"},next:{title:"3D-Charting",permalink:"/docs/controls/charts/3d"}},l={},p=[{value:"Examples",id:"examples",level:2},{value:"Interactive toolbox",id:"interactive-toolbox",level:3},{value:"Advanced zoom and pan",id:"advanced-zoom-and-pan",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"functionalities",children:"Functionalities"}),"\n",(0,s.jsx)(t.p,{children:"ECharts offers a wide variety of different chart types and features. Following page deals with some more special chart types and chart features, which might become handy in some use cases."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"interactive-toolbox",children:"Interactive toolbox"}),"\n",(0,s.jsxs)(t.p,{children:["Apache ECharts offers a versatile toolbox that enables users to interact with and manipulate charts effectively.\nBy default, the toolbox appears in the top right corner of the chart.\nYou can customize this toolbox using the ",(0,s.jsx)(t.code,{children:"toolbox"})," option within the option object."]}),"\n",(0,s.jsx)(t.p,{children:"The toolbox includes various interactive tools (like download, zoom, change type), each designed to enhance the user experience.\nBelow is an example demonstrating some of the most commonly used tools and how to configure them to suit your needs."}),"\n",(0,s.jsx)(i.Z,{height:"40rem",name:"echarts-special-toolbox",noMargin:!0,examplesByName:!0}),"\n",(0,s.jsx)(t.h3,{id:"advanced-zoom-and-pan",children:"Advanced zoom and pan"}),"\n",(0,s.jsx)(t.p,{children:"In addition to the toolbox, ECharts provides zoom and pan functionality for a more interactive chart experience.\nUsers can zoom in and out using the mouse wheel, and pan the chart by clicking and dragging.\nThese features offer a seamless way to explore detailed data within the chart."}),"\n",(0,s.jsx)(i.Z,{height:"40rem",name:"echarts-special-zoom",noMargin:!0,examplesByName:!0})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const s=300,r="https://stackblitz.com",i=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o=["project","search","ports","settings"],a=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>d("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,o),startScript:e=>h("startScript",e),terminalHeight:e=>d("terminalHeight",e),theme:e=>m("theme",e,a),view:e=>m("view",e,c),zenMode:e=>u("zenMode",e)};function p(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function d(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${w(t)}${e}${p(t)}`}function $(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${w(n)}${e}${p(n)}`}function w(e={}){return("string"==typeof e.origin?e.origin:r).replace(/\/$/,"")}function y(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function v(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function x(e){return e&&!1===e.newWindow?"_self":"_blank"}class E{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const r=f();this.pending[r]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:r,__error:i}=n;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(i?`${t}: ${i}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class j{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new E(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class A{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new j(n[0],t.payload),e(this.vm),r())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(o),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let i=0;const o=window.setInterval((()=>{if(this.vm)r();else{if(i>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,t)=>{e.id===this.id&&b.splice(t,1)}));i++,s()}}),500)})),b.push(this)}}const _=e=>{const t=e instanceof Element?"element":"id";return b.find((n=>n[t]===e))??null};function P({template:e,title:t,description:n,dependencies:s,files:r,settings:o}){if(!i.includes(e)){const e=i.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,t,n="")=>{a.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),o&&c("project[settings]",JSON.stringify(o)),Object.entries(r).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function R(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(_(e)??new A(e)).pending}const S={connect:R,embedGithubProject:function(e,t,n){const s=v(e),r=document.createElement("iframe");return r.src=$(`/github/${t}`,n),y(s,r,n),R(r)},embedProject:function(e,t,n){const s=v(e),r=function(e,t){const n=P(e);return n.action=$("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),i=document.createElement("iframe");return y(s,i,n),i.contentDocument?.write(r),R(i)},embedProjectId:function(e,t,n){const s=v(e),r=document.createElement("iframe");return r.src=$(`/edit/${t}`,n),y(s,r,n),R(r)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=x(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=P(e);n.action=g("/run",t),n.target=x(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=x(t);window.open(n,s)}}},94691:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76213),r=n(7528),i=n(2476),o=n(52983),a=n(83129),c=n(97458);function l(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),l=(0,r.Z)("/"),[p,u]=(0,o.useState)(""),[d,m]=(0,o.useState)((0,a.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,o.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,a.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${p}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>s,nI:()=>r});let s=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function r(e){switch(e){case s.ANGULAR:return"Angular";case s.REACT:return"React";case s.JAVASCRIPT:return"JavaScript";case s.VUE:return"Vue";case s.PREVIEW:return"Preview"}}},36365:(e,t,n)=>{n.d(t,{G3:()=>p,Lp:()=>o,Sc:()=>y,Sy:()=>w,Td:()=>u,nq:()=>d,zx:()=>a});var s=n(14455),r=n(41124),i=n(99290);function o(e){let t="html";return e===r.QJ.ANGULAR&&(t="angular"),e===r.QJ.REACT&&(t="react"),e===r.QJ.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}function a(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function c(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return a(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function l(e){return f(function(e){const t=c(e,/<!-- Preview code -->/g);if(t){const n=c(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return a(e)}(e),!0).source}function p(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function u(e,t,n){let s="web-components";return t===r.QJ.ANGULAR&&(s="angular"),t===r.QJ.REACT&&(s="react"),t===r.QJ.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===p(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:l(n),raw:n}:null}catch(n){console.warn(n)}})))}async function d(e,t,n,s){const i=[];return n===r.QJ.ANGULAR&&i.push(`${t}.html`,`${t}.ts`),n===r.QJ.JAVASCRIPT&&i.push(`${t}.html`),n===r.QJ.REACT&&i.push(`${t}.tsx`),n===r.QJ.VUE&&i.push(`${t}.vue`),s&&i.push(`${t}.css`),u(e,n,i)}function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function h(e){const t=i.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function f(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function $(e,t,n,s){const i={},o={},a=e.map((async e=>{let{filename:a,raw:c}=e;if(a.endsWith(".css"))return;let l=c;if(a===n){s===r.QJ.JAVASCRIPT&&(l=h(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),a="index.html");const{source:e,styleFileName:n}=f(l,s===r.QJ.ANGULAR);l=e,n&&(o[`src/${s===r.QJ.ANGULAR?"app":"styles"}/${n}`]=(await g([`${t}${n}`]))[0])}i[`src${s===r.QJ.ANGULAR?"/app":""}/${a}`]=l}));return await Promise.all(a),{files:i,styleFiles:o}}async function w(e){let{name:t,framework:n,files:i,baseUrl:o,version:a}=e;const c=a||"latest";let l=null;return n===r.QJ.REACT&&(l=async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,o=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[a,c,l,p,...u]=await g([`${i}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...o.map((t=>`${e}code-runtime/react/${t}`))]),d=t[0],{files:f,styleFiles:w}=await $(t,i,d.filename,r.QJ.REACT),y={...f,...w,"src/styles/global.css":a,"index.html":h(l),"src/App.tsx":c.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename.substring(0,d.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(p,n)};u.forEach(((e,t)=>{y[o[t]]=e}));const v={template:"node",title:"iX React App",description:"iX react playground",files:y};return{exampleFile:`src/${d.filename}`,open:()=>{s.Z.openProject(v,{openFile:`src/${d.filename}`})},config:v}}(o,i,c)),n===r.QJ.ANGULAR&&(l=async function(e,t,n,i){const o=`${e}auto-generated/previews/styles/`,[a,c,l,p,u,d,f,w,y,v]=await g([`${o}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let x=n[0];n.length>=2&&(x=n[1]);const E=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&E.push(t)}));const j=`\n    ${E.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${E.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:b,styleFiles:A}=await $(n,o,x.filename,r.QJ.ANGULAR),_={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...b,...A,"src/app/declare-component.ts":j,"src/app/app.component.html":c,"src/app/app.component.ts":l,"src/app/app.module.ts":p,"src/index.html":h(u),"src/main.ts":d,"src/styles.css":a,"angular.json":f,"package.json":m(w,i),"tsconfig.app.json":y,"tsconfig.json":v}};return{exampleFile:`src/app/${t}.ts`,open:()=>{s.Z.openProject(_,{openFile:`src/app/${t}.ts`})},config:_}}(o,t,i,c)),n===r.QJ.JAVASCRIPT&&(l=async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[o,a,c,l]=await g([`${i}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),p=t[0],{files:u,styleFiles:d}=await $(t,i,p.filename,r.QJ.JAVASCRIPT),h={template:"node",title:"iX html app",description:"iX html playground",files:{...u,...d,"src/styles/global.css":o,"src/main.js":a,"package.json":m(c,n),"vite.config.ts":l}};return{exampleFile:"src/index.html",open:()=>{s.Z.openProject(h,{openFile:["src/index.html"]})},config:h}}(o,i,c)),n===r.QJ.VUE&&(l=async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[o,a,c,l,p,u,d,f]=await g([`${i}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),w=t[0],{files:y,styleFiles:v}=await $(t,i,w.filename,r.QJ.VUE),x={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...y,...v,"src/styles/global.css":o,"index.html":h(c),"src/main.ts":l,"src/App.vue":a.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${w.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":f,"package.json":m(p,n),"tsconfig.json":u,"vite.config.ts":d,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${w.filename}`,open:()=>{s.Z.openProject(x,{openFile:`src/${w.filename}`})},config:x}}(o,i,c)),l}async function y(e){let{name:t,framework:n,files:s,baseUrl:r,version:i}=e;const o=w({name:t,framework:n,files:s,baseUrl:r,version:i});if(await o){const{open:e}=await o;e()}}},53212:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(7528),r=n(90466),i=n(43401),o=n(40749),a=n(52983),c=n(94691),l=n(41124),p=n(36365);async function u(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?(0,p.zx)(s):s}async function d(e,t,n){try{const s=await u(t);s&&(e[n]=s)}catch(s){}}function m(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}var h=n(14455);function f(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),h.Z.openProject({title:`iX ${m(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function g(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await u(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/vue/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const i=`import ${m(n)} from './${n}.vue';`;return r["src/App.vue"]=r["src/App.vue"].replace("import Example from './Example.vue';",i),r["src/App.vue"]=r["src/App.vue"].replace("<Example />",`<${m(n)} />`),r}(e,t,n);f("vue",r,`${n}.vue`,s)}async function $(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await u(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await u(`${e}auto-generated/previews/web-components/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s},i=t[`${n}.html`];return r["src/index.html"]=i,Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]})),delete r[`src/${n}.html`],r}(e,t,n);f("html",r,"src/index.html",s)}async function w(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await u(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/angular/styles/global.css`);return t["src/styles.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const i=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((s=>s.endsWith(".ts")&&s!==`${t}.ts`&&n.test(e[s]))).map((e=>e.replace(".ts","")))}(t,n),o=i.map((e=>`import ${m(e)} from './../${e}';`)).join("\n");r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${m(n)} from './../${n}';`,o].join("\n"));const a=i.map((e=>m(e))).join(", ");return r["src/app/app.module.ts"]=r["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${m(n)}, ${a}],`),r}(e,t,n);f("angular",r,`src/${n}.ts`,s)}async function y(e,t,n,s){const r=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await u(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await u(`${e}auto-generated/previews/react/global.css`);return t["src/styles/global.css"]=s,t}(e),r={...s};Object.keys(t).forEach((e=>{r[`src/${e.replace("./","")}`]=t[e]}));const i=`import ${m(n)} from './${n}';`;return r["src/App.tsx"]=r["src/App.tsx"].replace("import Example from './Example';",i),r["src/App.tsx"]=r["src/App.tsx"].replace("<Example />",`<${m(n)} />`),r}(e,t,n);f("react",r,`src/${n}.tsx`,s)}var v=n(97458);function x(){return(0,v.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function E(e,t,n,r){const[i,o]=(0,a.useState)(!1),[c]=(0,a.useState)(!1),[p,m]=(0,a.useState)({}),h=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.QJ.ANGULAR?`${t}/angular`:e===l.QJ.REACT?`${t}/react`:e===l.QJ.VUE?`${t}/vue`:e===l.QJ.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,a.useEffect)((()=>{let s=null,i=null;e!==l.QJ.PREVIEW&&(o(!0),!r&&h&&(e===l.QJ.ANGULAR&&(s=async function(e,t){const n={};return await d(n,`${e}/${t}.html`,`${t}.html`),await Promise.all([d(n,`${e}/${t}.ts`,`${t}.ts`),d(n,`${e}/${t}.css`,`${t}.css`)]),n}(h,t)),e===l.QJ.REACT&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),e===l.QJ.VUE&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.vue`);n[`${t}.vue`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),e===l.QJ.JAVASCRIPT&&(s=async function(e,t){const n={},s=await u(`${e}/${t}.html`,!0);n[`${t}.html`]=s;try{const s=await u(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(r){}return n}(h,t)),s||(s=Promise.resolve({}))),i=n&&n[e]?new Promise(((t,s)=>{const r={};Promise.all(n[e].map((async e=>{try{const t=await u(`${h}/${e}`);r[e]=t}catch(t){s(t)}}))).then((()=>{t(r)}))})):Promise.resolve({}),Promise.all([s,i]).then((e=>{let[t,n]=e;o(!1),m({...t,...n})})))}),[e,h,n,r]),{isFetching:i,snippets:p,hasError:c}}function j(e){(0,s.Z)("/");const[t,n]=(0,a.useState)(Object.keys(e.snippets)[0]),i=(0,a.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,a.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,a.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,v.jsx)(r.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,v.jsx)(o.Z,{language:i,children:c})]})}function b(e){const t=(0,i.F)(),n=(0,s.Z)("/"),o=`${(0,s.Z)("/img")}/stackblitz.svg`,a=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,v.jsx)("div",{className:"Interaction",children:e.activeFramework===l.QJ.PREVIEW?(0,v.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${a}/${e.name}.html?theme=${t}${n}`)}}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(r._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:r,version:i}=e;const o=i||"latest";return s===l.QJ.REACT?y(t,r,n,o):s===l.QJ.ANGULAR?w(t,r,n,o):s===l.QJ.JAVASCRIPT?$(t,r,n,o):s===l.QJ.VUE?g(t,r,n,o):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.deviantRootFileName?e.deviantRootFileName:e.name,version:"latest"}),className:"Stackblitz",icon:o,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function A(e){return e.hasError?(0,v.jsx)(x,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,v.jsx)(r.lL,{}):(0,v.jsx)(j,{snippets:e.snippets})}function _(e){const[t,n]=a.useState(l.QJ.PREVIEW),{isFetching:s,hasError:i,snippets:o}=E(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}l.QJ.PREVIEW;return(0,v.jsxs)("div",{className:"Playground",children:[(0,v.jsxs)("div",{className:"Toolbar",children:[(0,v.jsxs)(r.Vp,{layout:"auto",class:"Tabs",children:[(0,v.jsx)(r.t3,{onClick:()=>p(l.QJ.PREVIEW),children:"Preview"}),[l.QJ.ANGULAR,l.QJ.REACT,l.QJ.VUE,l.QJ.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,v.jsx)(r.t3,{onClick:()=>p(e),children:(0,l.nI)(e)},e)))]}),(0,v.jsx)(b,{name:e.name,deviantRootFileName:e.deviantRootFileName,activeFramework:t,noMargin:!1,snippets:o})]}),t===l.QJ.PREVIEW?(0,v.jsx)(c.Z,{...e}):(0,v.jsx)(A,{isFetching:s,hasError:i,snippets:o})]})}}}]);