"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45980,41476,86635],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>O});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o={clickToLoad:function(e){return a("ctl",e)},devToolsHeight:function(e){return c("devtoolsheight",e)},forceEmbedLayout:function(e){return a("embed",e)},hideDevTools:function(e){return a("hidedevtools",e)},hideExplorer:function(e){return a("hideExplorer",e)},hideNavigation:function(e){return a("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return c("terminalHeight",e)},theme:function(e){return s("theme",["light","dark"],e)},view:function(e){return s("view",["preview","editor"],e)}};function i(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&o.hasOwnProperty(t)?o[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function a(e,t){return!0===t?e+"=1":""}function c(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function s(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function d(e,t){return""+p(t)+e+i(t)}function u(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+p(n)+e+i(n)}function p(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function m(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function f(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function h(e){return e&&!1===e.newWindow?"_self":"_blank"}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var g=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,o=l();return new Promise((function(e,i){t.pending[o]={resolve:e,reject:i},t.port.postMessage({type:n,payload:v({},r,{__reqid:o})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,o=n.payload,i=o.__reqid,a=o.__error;this.pending[i]&&(o.__success?this.pending[i].resolve(function(e){var t=v({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(o)):this.pending[i].reject(a?r+": "+a:r),delete this.pending[i])}},e}(),b=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new g(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),w=[],y=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new b(n.ports[0],r.payload),e(t.vm),i())},o=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function i(){window.clearInterval(c),window.removeEventListener("message",r)}window.addEventListener("message",r),o();var a=0,c=window.setInterval((function(){if(t.vm)i();else{if(a>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void w.forEach((function(e,n){e.id===t.id&&w.splice(n,1)}));a++,o()}}),500)})),w.push(this)};function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function j(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,o=document.createElement("form");return o.method="POST",o.setAttribute("style","display:none!important;"),o.appendChild(E("project[title]",e.title)),o.appendChild(E("project[description]",e.description)),o.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&o.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&o.appendChild(E("project[files]["+t+"]",e.files[t]))})),o}function _(e){var t,n,r,o;return null!=e&&e.contentWindow?(null!=(o=(n=e)instanceof Element?"element":"id",t=null!=(r=w.find((function(e){return e[o]===n})))?r:null)?t:new y(e)).pending:Promise.reject("Provided element is not an iframe.")}var O={connect:_,embedGithubProject:function(e,t,n){var r=f(e),o=document.createElement("iframe");return o.src=u("/github/"+t,n),m(r,o,n),_(o)},embedProject:function(e,t,n){var r,o=f(e),i=function(e,t){var n=j(e);return n.action=u("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),a=document.createElement("iframe");return m(o,a,n),null==(r=a.contentDocument)||r.write(i),_(a)},embedProjectId:function(e,t,n){var r=f(e),o=document.createElement("iframe");return o.src=u("/edit/"+t,n),m(r,o,n),_(o)},openGithubProject:function(e,t){var n=d("/github/"+e,t),r=h(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=j(e);n.action=d("/run",t),n.target=h(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=d("/edit/"+e,t),r=h(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>a});var r,o=n(2784);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const a=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",i({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(37949),o=n(90077),i=n(37614),a=n(2784),c=n(90943);function s(e){const t=(0,i.Z)(),[n]=(0,a.useState)(!1),s=(0,o.Z)("/"),[l,d]=(0,a.useState)(""),[u,p]=(0,a.useState)((0,c.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,a.useEffect)((()=>{const t=null==m?void 0:m.name;d(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,a.useLayoutEffect)((()=>{const e=()=>{let e=(0,c.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),a.createElement(a.Fragment,null,n?a.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):a.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>E});var r,o=n(7267),i=n(90077),a=n(53849),c=n(2176),s=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...o}=e;return s.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},o),t?s.createElement("title",{id:n},t):null,r||(r=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let p;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(p||(p={}));var m=n(14091);const f="https://github.com/siemens/ix/tree/main/packages";function h(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===p.ANGULAR?`${f}/angular-test-app/src/preview-examples/${t}.ts`:n===p.JAVASCRIPT?`${f}/html-test-app/src/preview-examples/${t}.html`:n===p.REACT?`${f}/react-test-app/src/preview-examples/${t}.tsx`:n===p.VUE?`${f}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function v(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e){let{name:t,framework:n,files:r,baseUrl:o}=e;const i=await async function(e,t,n){const r=[];return(await v(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(o,n,r);return n===p.REACT?async function(e,t){const[n,r,o,i,a]=await v([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":r,"src/index.tsx":o,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":a,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(o,i):n===p.ANGULAR?async function(e,t,n){const[r,o,i,a,c,s,l,d,u,p,f]=await v([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),h=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&h.push(t)}));const g=`\n    ${h.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${h.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;b[`src/app/${t}`]=n})),m.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":r,"src/app/app.component.html":o,"src/app/app.component.ts":i,"src/app/app.module.ts":a,"src/index.html":c,"src/main.ts":s,"src/styles.css":l,"angular.json":d,"package.json":u,"tsconfig.app.json":p,"tsconfig.json":f,...b}},{openFile:`src/app/${t}.ts`})}(o,t,i):n===p.JAVASCRIPT?async function(e,t){const[n,r,o,i]=await v([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[a,...c]=t,s={};c.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),m.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",a.sourceCode),"src/main.js":r,"package.json":o,"vite.config.ts":i}},{openFile:["src/index.html"]})}(o,i):n===p.VUE?async function(e,t){const[n,r,o,i,a,c,s]=await v([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,d={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;d[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...d,"index.html":r,"src/main.ts":o,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":s,"package.json":i,"tsconfig.json":a,"vite.config.ts":c,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(o,i):void 0}function b(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>h({name:t,framework:n})},s.createElement(c.Z,null))}function w(e){let{name:t,files:n,framework:r,baseUrl:o}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>g({name:t,files:n,framework:r,baseUrl:o})},s.createElement(d,null))}function y(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(a.Vp,null,e.files.map((e=>{e.node;return s.createElement(a.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?s.createElement(r,null):null}())}function E(e){let{name:t,height:n,noMargin:r,theme:c,frameworks:l,availableFrameworks:d}=e;const{pathname:m}=(0,o.TH)(),f=(0,i.Z)("/"),[h,v]=(0,s.useState)(!0),[g,E]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||p.PREVIEW}(d)),[j,_]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,s.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===p.REACT&&(r=r.concat(".tsx")),n===p.JAVASCRIPT&&(r=r.concat(".html")),n===p.ANGULAR&&(r=r.concat(".ts")),n===p.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),_(e))}),[l,_]);const O=e=>{E(e)};function k(e){return d?0===d.length||d.includes(e):Object.keys(l).some((t=>t===e))}return s.createElement("div",{className:"Playground"},h?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(a.Vp,null,s.createElement(a.t3,{selected:g===p.PREVIEW,onClick:()=>O(p.PREVIEW)},"Preview"),k(p.ANGULAR)?s.createElement(a.t3,{selected:g===p.ANGULAR,onClick:()=>O(p.ANGULAR)},"Angular"):null,k(p.REACT)?s.createElement(a.t3,{selected:g===p.REACT,onClick:()=>O(p.REACT)},"React"):null,k(p.JAVASCRIPT)?s.createElement(a.t3,{selected:g===p.JAVASCRIPT,onClick:()=>O(p.JAVASCRIPT)},"JavaScript"):null,k(p.VUE)?s.createElement(a.t3,{selected:g===p.VUE,onClick:()=>O(p.VUE)},"Vue"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},g!==p.PREVIEW?s.createElement(s.Fragment,null,s.createElement(b,{name:t,framework:g}),s.createElement(w,{name:t,framework:g,baseUrl:f,files:j?g===p.PREVIEW?[]:j[g].map((e=>e.filename)):[]})):null)),function(){if(g===p.PREVIEW)return s.createElement(u.Z,{name:t,height:n,noMargin:r,theme:c});if(!j||!j[g])return null;if(1===j[g].length){const[{node:e}]=j[g];return e}return s.createElement(y,{files:j[g]})}()):null)}},59166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/web-component/html-table-striped",id:"auto-generated/previews/web-component/html-table-striped",title:"html-table-striped",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table-striped.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table-striped",permalink:"/version-dev/docs/auto-generated/previews/web-component/html-table-striped",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table-striped.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table table-striped">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}u.isMDXComponent=!0},99215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/web-component/html-table",id:"auto-generated/previews/web-component/html-table",title:"html-table",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table",permalink:"/version-dev/docs/auto-generated/previews/web-component/html-table",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}u.isMDXComponent=!0},34753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876)),i=n(6404),a=n(99215),c=n(59166);const s={},l="HTML table",d={unversionedId:"controls/html-grid",id:"controls/html-grid",title:"HTML table",description:"Usage",source:"@site/docs/controls/html-grid.md",sourceDirName:"controls",slug:"/controls/html-grid",permalink:"/version-dev/docs/controls/html-grid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/html-grid.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Group",permalink:"/version-dev/docs/controls/group"},next:{title:"Input",permalink:"/version-dev/docs/controls/input"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Striped",id:"striped",level:3}],m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"html-table"},"HTML table"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.Z,{name:"html-table",height:"12rem",hideInitalCodePreview:!0,frameworks:{javascript:a.default},mdxType:"Playground"}),(0,o.kt)("h3",{id:"striped"},"Striped"),(0,o.kt)(i.Z,{name:"html-table-striped",height:"12rem",hideInitalCodePreview:!0,frameworks:{javascript:c.default},mdxType:"Playground"}))}f.isMDXComponent=!0}}]);