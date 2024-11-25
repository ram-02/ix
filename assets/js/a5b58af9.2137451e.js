"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65899],{10189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=n(97458),i=n(16436),r=n(53212);const a={},o="Grid (AG Grid)",c={id:"controls/grid",title:"Grid (AG Grid)",description:"Siemens Industrial Experience provides a theme for the popular data grid library AG Grid.",source:"@site/docs/controls/grid.md",sourceDirName:"controls",slug:"/controls/grid",permalink:"/docs/controls/grid",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/grid.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Behavior",permalink:"/docs/controls/forms/forms-behavior"},next:{title:"Group",permalink:"/docs/controls/group"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"React",id:"react",level:3},{value:"Angular",id:"angular",level:3},{value:"Vue",id:"vue",level:3},{value:"Javascript",id:"javascript",level:3},{value:"Siemens Industrial Experience theme for AG Grid",id:"siemens-industrial-experience-theme-for-ag-grid",level:3},{value:"Usage",id:"usage",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"grid-ag-grid",children:"Grid (AG Grid)"}),"\n",(0,s.jsxs)(t.p,{children:["Siemens Industrial Experience provides a theme for the popular data grid library ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com",children:"AG Grid"}),".\nThis lets you harness the power of AG Grid with seamless integration into the Siemens Industrial Experience styleguide."]}),"\n",(0,s.jsxs)("div",{className:"siemens-brand-section",children:[(0,s.jsx)(t.p,{children:"AG Grid is a third party library that provides a feature rich data grid implementation."}),(0,s.jsxs)(t.p,{children:["Its basic functionality is free and open source (distributed under the ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com/eula/AG-Grid-Community-License.html",children:"MIT license"}),")."]}),(0,s.jsx)(t.p,{children:"Please note that more advanced features like e.g. Row Grouping are only available with AG Grid Enterprise which is a commercial product."}),(0,s.jsxs)(t.p,{children:["More information can be found on the ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com/license-pricing",children:"AG Grid licenses page"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.h3,{id:"react",children:"React"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the official AG Grid ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com/react-data-grid/getting-started/",children:"installation instructions"})," for React."]}),"\n",(0,s.jsx)(t.h3,{id:"angular",children:"Angular"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the official AG Grid ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com/angular-data-grid/getting-started/",children:"installation instructions"})," for Angular."]}),"\n",(0,s.jsx)(t.h3,{id:"vue",children:"Vue"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the official AG Grid ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com/vue-data-grid/getting-started/",children:"installation instructions"})," for Vue."]}),"\n",(0,s.jsx)(t.h3,{id:"javascript",children:"Javascript"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the official AG Grid ",(0,s.jsx)(t.a,{href:"https://www.ag-grid.com/javascript-data-grid/getting-started/",children:"installation instruction"})," for JavaScript."]}),"\n",(0,s.jsx)(t.h3,{id:"siemens-industrial-experience-theme-for-ag-grid",children:"Siemens Industrial Experience theme for AG Grid"}),"\n",(0,s.jsxs)(t.p,{children:["Install the ",(0,s.jsx)(t.code,{children:"@siemens/ix-aggrid"})," package."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"npm install @siemens/ix-aggrid\n"})}),"\n",(0,s.jsx)(t.p,{children:"and apply the style file in one of your project's style files e.g. styles.scss"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scss",children:"@import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Siemens Industrial Experience theming for AG Grid (",(0,s.jsx)(t.code,{children:"ag-theme-ix"}),") is based on ",(0,s.jsx)(t.code,{children:"ag-theme-alpine-dark"}),".\nTherefore it is vital to apply the two CSS theme classes in the correct order:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"ag-theme-alpine-dark"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"ag-theme-ix"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"e.g.:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<div class="ag-theme-alpine-dark ag-theme-ix"></div>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.Z,{name:"aggrid",height:"14rem"})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>R});const s=300,i="https://stackblitz.com",r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>d("ctl",e),devToolsHeight:e=>u("devtoolsheight",e),forceEmbedLayout:e=>d("embed",e),hideDevTools:e=>d("hidedevtools",e),hideExplorer:e=>d("hideExplorer",e),hideNavigation:e=>d("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,a),startScript:e=>h("startScript",e),terminalHeight:e=>u("terminalHeight",e),theme:e=>m("theme",e,o),view:e=>m("view",e,c),zenMode:e=>d("zenMode",e)};function p(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function d(e,t){return!0===t?`${e}=1`:""}function u(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${$(t)}${e}${p(t)}`}function w(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${$(n)}${e}${p(n)}`}function $(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function y(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&!1===e.newWindow?"_self":"_blank"}class x{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=f();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:r}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(r?`${t}: ${r}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class E{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new x(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class A{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new E(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(a),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let r=0;const a=window.setInterval((()=>{if(this.vm)i();else{if(r>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,t)=>{e.id===this.id&&b.splice(t,1)}));r++,s()}}),500)})),b.push(this)}}const _=e=>{const t=e instanceof Element?"element":"id";return b.find((n=>n[t]===e))??null};function S({template:e,title:t,description:n,dependencies:s,files:i,settings:a}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),a&&c("project[settings]",JSON.stringify(a)),Object.entries(i).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function P(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(_(e)??new A(e)).pending}const R={connect:P,embedGithubProject:function(e,t,n){const s=y(e),i=document.createElement("iframe");return i.src=w(`/github/${t}`,n),v(s,i,n),P(i)},embedProject:function(e,t,n){const s=y(e),i=function(e,t){const n=S(e);return n.action=w("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),r=document.createElement("iframe");return v(s,r,n),r.contentDocument?.write(i),P(r)},embedProjectId:function(e,t,n){const s=y(e),i=document.createElement("iframe");return i.src=w(`/edit/${t}`,n),v(s,i,n),P(i)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=j(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=S(e);n.action=g("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=j(t);window.open(n,s)}}},94691:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76213),i=n(7528),r=n(2476),a=n(52983),o=n(83129),c=n(97458);function l(e){const t=(0,r.Z)(),[n]=(0,a.useState)(!1),l=(0,i.Z)("/"),[p,d]=(0,a.useState)(""),[u,m]=(0,a.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,a.useEffect)((()=>{const t=h?.name;d(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,a.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>s,nI:()=>i});let s=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function i(e){switch(e){case s.ANGULAR:return"Angular";case s.REACT:return"React";case s.JAVASCRIPT:return"JavaScript";case s.VUE:return"Vue";case s.PREVIEW:return"Preview"}}},36365:(e,t,n)=>{n.d(t,{G3:()=>p,Lp:()=>a,Sc:()=>v,Sy:()=>$,Td:()=>d,nq:()=>u,zx:()=>o});var s=n(14455),i=n(41124),r=n(99290);function a(e){let t="html";return e===i.QJ.ANGULAR&&(t="angular"),e===i.QJ.REACT&&(t="react"),e===i.QJ.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}function o(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function c(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return o(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function l(e){return f(function(e){const t=c(e,/<!-- Preview code -->/g);if(t){const n=c(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return o(e)}(e),!0).source}function p(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function d(e,t,n){let s="web-components";return t===i.QJ.ANGULAR&&(s="angular"),t===i.QJ.REACT&&(s="react"),t===i.QJ.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===p(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:l(n),raw:n}:null}catch(n){console.warn(n)}})))}async function u(e,t,n,s){const r=[];return n===i.QJ.ANGULAR&&r.push(`${t}.html`,`${t}.ts`),n===i.QJ.JAVASCRIPT&&r.push(`${t}.html`),n===i.QJ.REACT&&r.push(`${t}.tsx`),n===i.QJ.VUE&&r.push(`${t}.vue`),s&&r.push(`${t}.css`),d(e,n,r)}function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function h(e){const t=r.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function f(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function w(e,t,n,s){const r={},a={},o=e.map((async e=>{let{filename:o,raw:c}=e;if(o.endsWith(".css"))return;let l=c;if(o===n){s===i.QJ.JAVASCRIPT&&(l=h(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=f(l,s===i.QJ.ANGULAR);l=e,n&&(a[`src/${s===i.QJ.ANGULAR?"app":"styles"}/${n}`]=(await g([`${t}${n}`]))[0])}r[`src${s===i.QJ.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:r,styleFiles:a}}async function $(e){let{name:t,framework:n,files:r,baseUrl:a,version:o}=e;const c=o||"latest";let l=null;return n===i.QJ.REACT&&(l=async function(e,t,n){const r=`${e}auto-generated/previews/styles/`,a=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[o,c,l,p,...d]=await g([`${r}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...a.map((t=>`${e}code-runtime/react/${t}`))]),u=t[0],{files:f,styleFiles:$}=await w(t,r,u.filename,i.QJ.REACT),v={...f,...$,"src/styles/global.css":o,"index.html":h(l),"src/App.tsx":c.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${u.filename.substring(0,u.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(p,n)};d.forEach(((e,t)=>{v[a[t]]=e}));const y={template:"node",title:"iX React App",description:"iX react playground",files:v};return{exampleFile:`src/${u.filename}`,open:()=>{s.Z.openProject(y,{openFile:`src/${u.filename}`})},config:y}}(a,r,c)),n===i.QJ.ANGULAR&&(l=async function(e,t,n,r){const a=`${e}auto-generated/previews/styles/`,[o,c,l,p,d,u,f,$,v,y]=await g([`${a}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let j=n[0];n.length>=2&&(j=n[1]);const x=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&x.push(t)}));const E=`\n    ${x.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${x.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:b,styleFiles:A}=await w(n,a,j.filename,i.QJ.ANGULAR),_={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{...b,...A,"src/app/declare-component.ts":E,"src/app/app.component.html":c,"src/app/app.component.ts":l,"src/app/app.module.ts":p,"src/index.html":h(d),"src/main.ts":u,"src/styles.css":o,"angular.json":f,"package.json":m($,r),"tsconfig.app.json":v,"tsconfig.json":y}};return{exampleFile:`src/app/${t}.ts`,open:()=>{s.Z.openProject(_,{openFile:`src/app/${t}.ts`})},config:_}}(a,t,r,c)),n===i.QJ.JAVASCRIPT&&(l=async function(e,t,n){const r=`${e}auto-generated/previews/styles/`,[a,o,c,l]=await g([`${r}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),p=t[0],{files:d,styleFiles:u}=await w(t,r,p.filename,i.QJ.JAVASCRIPT),h={template:"node",title:"iX html app",description:"iX html playground",files:{...d,...u,"src/styles/global.css":a,"src/main.js":o,"package.json":m(c,n),"vite.config.ts":l}};return{exampleFile:"src/index.html",open:()=>{s.Z.openProject(h,{openFile:["src/index.html"]})},config:h}}(a,r,c)),n===i.QJ.VUE&&(l=async function(e,t,n){const r=`${e}auto-generated/previews/styles/`,[a,o,c,l,p,d,u,f]=await g([`${r}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),$=t[0],{files:v,styleFiles:y}=await w(t,r,$.filename,i.QJ.VUE),j={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...v,...y,"src/styles/global.css":a,"index.html":h(c),"src/main.ts":l,"src/App.vue":o.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${$.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":f,"package.json":m(p,n),"tsconfig.json":d,"vite.config.ts":u,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${$.filename}`,open:()=>{s.Z.openProject(j,{openFile:`src/${$.filename}`})},config:j}}(a,r,c)),l}async function v(e){let{name:t,framework:n,files:s,baseUrl:i,version:r}=e;const a=$({name:t,framework:n,files:s,baseUrl:i,version:r});if(await a){const{open:e}=await a;e()}}},53212:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(7528),i=n(90466),r=n(43401),a=n(40749),o=n(52983),c=n(94691),l=n(41124),p=n(36365);async function d(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?(0,p.zx)(s):s}async function u(e,t,n){try{const s=await d(t);s&&(e[n]=s)}catch(s){}}function m(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}var h=n(14455);function f(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),h.Z.openProject({title:`iX ${m(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function g(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await d(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await d(`${e}auto-generated/previews/vue/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const r=`import ${m(n)} from './${n}.vue';`;return i["src/App.vue"]=i["src/App.vue"].replace("import Example from './Example.vue';",r),i["src/App.vue"]=i["src/App.vue"].replace("<Example />",`<${m(n)} />`),i}(e,t,n);f("vue",i,`${n}.vue`,s)}async function w(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await d(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await d(`${e}auto-generated/previews/web-components/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s},r=t[`${n}.html`];return i["src/index.html"]=r,Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]})),delete i[`src/${n}.html`],i}(e,t,n);f("html",i,"src/index.html",s)}async function $(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await d(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await d(`${e}auto-generated/previews/angular/styles/global.css`);return t["src/styles.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const r=function(e,t){const n=/@Component\(/;return Object.keys(e).filter((s=>s.endsWith(".ts")&&s!==`${t}.ts`&&n.test(e[s]))).map((e=>e.replace(".ts","")))}(t,n),a=r.map((e=>`import ${m(e)} from './../${e}';`)).join("\n");i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",[`import ${m(n)} from './../${n}';`,a].join("\n"));const o=r.map((e=>m(e))).join(", ");return i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${m(n)}, ${o}],`),i}(e,t,n);f("angular",i,`src/${n}.ts`,s)}async function v(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await d(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await d(`${e}auto-generated/previews/react/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const r=`import ${m(n)} from './${n}';`;return i["src/App.tsx"]=i["src/App.tsx"].replace("import Example from './Example';",r),i["src/App.tsx"]=i["src/App.tsx"].replace("<Example />",`<${m(n)} />`),i}(e,t,n);f("react",i,`src/${n}.tsx`,s)}var y=n(97458);function j(){return(0,y.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function x(e,t,n,i){const[r,a]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[p,m]=(0,o.useState)({}),h=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.QJ.ANGULAR?`${t}/angular`:e===l.QJ.REACT?`${t}/react`:e===l.QJ.VUE?`${t}/vue`:e===l.QJ.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,r=null;e!==l.QJ.PREVIEW&&(a(!0),!i&&h&&(e===l.QJ.ANGULAR&&(s=async function(e,t){const n={};return await u(n,`${e}/${t}.html`,`${t}.html`),await Promise.all([u(n,`${e}/${t}.ts`,`${t}.ts`),u(n,`${e}/${t}.css`,`${t}.css`)]),n}(h,t)),e===l.QJ.REACT&&(s=async function(e,t){const n={},s=await d(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;try{const s=await d(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),e===l.QJ.VUE&&(s=async function(e,t){const n={},s=await d(`${e}/${t}.vue`);n[`${t}.vue`]=s;try{const s=await d(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),e===l.QJ.JAVASCRIPT&&(s=async function(e,t){const n={},s=await d(`${e}/${t}.html`,!0);n[`${t}.html`]=s;try{const s=await d(`${e}/${t}.css`);s&&(n[`./${t}.css`]=s)}catch(i){}return n}(h,t)),s||(s=Promise.resolve({}))),r=n&&n[e]?new Promise(((t,s)=>{const i={};Promise.all(n[e].map((async e=>{try{const t=await d(`${h}/${e}`);i[e]=t}catch(t){s(t)}}))).then((()=>{t(i)}))})):Promise.resolve({}),Promise.all([s,r]).then((e=>{let[t,n]=e;a(!1),m({...t,...n})})))}),[e,h,n,i]),{isFetching:r,snippets:p,hasError:c}}function E(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),r=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,y.jsx)(i.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,y.jsx)(a.Z,{language:r,children:c})]})}function b(e){const t=(0,r.F)(),n=(0,s.Z)("/"),a=`${(0,s.Z)("/img")}/stackblitz.svg`,o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,y.jsx)("div",{className:"Interaction",children:e.activeFramework===l.QJ.PREVIEW?(0,y.jsx)(i.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(i._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:i,version:r}=e;const a=r||"latest";return s===l.QJ.REACT?v(t,i,n,a):s===l.QJ.ANGULAR?$(t,i,n,a):s===l.QJ.JAVASCRIPT?w(t,i,n,a):s===l.QJ.VUE?g(t,i,n,a):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.deviantRootFileName?e.deviantRootFileName:e.name,version:"latest"}),className:"Stackblitz",icon:a,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function A(e){return e.hasError?(0,y.jsx)(j,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,y.jsx)(i.lL,{}):(0,y.jsx)(E,{snippets:e.snippets})}function _(e){const[t,n]=o.useState(l.QJ.PREVIEW),{isFetching:s,hasError:r,snippets:a}=x(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}l.QJ.PREVIEW;return(0,y.jsxs)("div",{className:"Playground",children:[(0,y.jsxs)("div",{className:"Toolbar",children:[(0,y.jsxs)(i.Vp,{layout:"auto",class:"Tabs",children:[(0,y.jsx)(i.t3,{onClick:()=>p(l.QJ.PREVIEW),children:"Preview"}),[l.QJ.ANGULAR,l.QJ.REACT,l.QJ.VUE,l.QJ.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,y.jsx)(i.t3,{onClick:()=>p(e),children:(0,l.nI)(e)},e)))]}),(0,y.jsx)(b,{name:e.name,deviantRootFileName:e.deviantRootFileName,activeFramework:t,noMargin:!1,snippets:a})]}),t===l.QJ.PREVIEW?(0,y.jsx)(c.Z,{...e}):(0,y.jsx)(A,{isFetching:s,hasError:r,snippets:a})]})}}}]);