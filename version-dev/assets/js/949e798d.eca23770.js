"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47167,38568,93627,37483,24568,80073,89548],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>k});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a={clickToLoad:function(e){return s("ctl",e)},devToolsHeight:function(e){return o("devtoolsheight",e)},forceEmbedLayout:function(e){return s("embed",e)},hideDevTools:function(e){return s("hidedevtools",e)},hideExplorer:function(e){return s("hideExplorer",e)},hideNavigation:function(e){return s("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return o("terminalHeight",e)},theme:function(e){return c("theme",["light","dark"],e)},view:function(e){return c("view",["preview","editor"],e)}};function i(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&a.hasOwnProperty(t)?a[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function s(e,t){return!0===t?e+"=1":""}function o(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function c(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){return""+m(t)+e+i(t)}function d(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+m(n)+e+i(n)}function m(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function p(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function g(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function f(e){return e&&!1===e.newWindow?"_self":"_blank"}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var b=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=l();return new Promise((function(e,i){t.pending[a]={resolve:e,reject:i},t.port.postMessage({type:n,payload:v({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,i=a.__reqid,s=a.__error;this.pending[i]&&(a.__success?this.pending[i].resolve(function(e){var t=v({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[i].reject(s?r+": "+s:r),delete this.pending[i])}},e}(),h=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new b(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),w=[],y=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new h(n.ports[0],r.payload),e(t.vm),i())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function i(){window.clearInterval(o),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var s=0,o=window.setInterval((function(){if(t.vm)i();else{if(s>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void w.forEach((function(e,n){e.id===t.id&&w.splice(n,1)}));s++,a()}}),500)})),w.push(this)};function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function x(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(E("project[title]",e.title)),a.appendChild(E("project[description]",e.description)),a.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(E("project[files]["+t+"]",e.files[t]))})),a}function _(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=w.find((function(e){return e[a]===n})))?r:null)?t:new y(e)).pending:Promise.reject("Provided element is not an iframe.")}var k={connect:_,embedGithubProject:function(e,t,n){var r=g(e),a=document.createElement("iframe");return a.src=d("/github/"+t,n),p(r,a,n),_(a)},embedProject:function(e,t,n){var r,a=g(e),i=function(e,t){var n=x(e);return n.action=d("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),s=document.createElement("iframe");return p(a,s,n),null==(r=s.contentDocument)||r.write(i),_(s)},embedProjectId:function(e,t,n){var r=g(e),a=document.createElement("iframe");return a.src=d("/edit/"+t,n),p(r,a,n),_(a)},openGithubProject:function(e,t){var n=u("/github/"+e,t),r=f(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=x(e);n.action=u("/run",t),n.target=f(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=u("/edit/"+e,t),r=f(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>s});var r,a=n(2784);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return a.createElement("svg",i({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},s),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2784),a=n(731);function i(e){var t,n,i,s,o,c,l,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(i=n.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(s=e.attribute)||null==(o=s.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),r.createElement("div",{className:"container-fluid"},null==e||null==(l=e.attribute)||null==(u=l.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const s=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>i});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),i=n(37614),s=n(2784),o=n(90943);function c(e){const t=(0,i.Z)(),[n]=(0,s.useState)(!1),c=(0,a.Z)("/"),[l,u]=(0,s.useState)(""),[d,m]=(0,s.useState)((0,o.V)(t)),{preferredVersion:p}=(0,r.J)();return(0,s.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==p?void 0:p.name,e.name]),(0,s.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),s.createElement(s.Fragment,null,n?s.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):s.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>E});var r,a=n(7267),i=n(90077),s=n(53849),o=n(2176),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return c.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let m;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(m||(m={}));var p=n(14091);const g="https://github.com/siemens/ix/tree/main/packages";function f(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===m.ANGULAR?`${g}/angular-test-app/src/preview-examples/${t}.ts`:n===m.JAVASCRIPT?`${g}/html-test-app/src/preview-examples/${t}.html`:n===m.REACT?`${g}/react-test-app/src/preview-examples/${t}.tsx`:n===m.VUE?`${g}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function v(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function b(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const i=await async function(e,t,n){const r=[];return(await v(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===m.REACT?async function(e,t){const[n,r,a,i,s]=await v([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[o]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${o.filename.substring(0,o.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":s,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${o.filename}`})}(a,i):n===m.ANGULAR?async function(e,t,n){const[r,a,i,s,o,c,l,u,d,m,g]=await v([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const b=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,h={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;h[`src/app/${t}`]=n})),p.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":b,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":i,"src/app/app.module.ts":s,"src/index.html":o,"src/main.ts":c,"src/styles.css":l,"angular.json":u,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":g,...h}},{openFile:`src/app/${t}.ts`})}(a,t,i):n===m.JAVASCRIPT?async function(e,t){const[n,r,a,i]=await v([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[s,...o]=t,c={};o.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),p.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",s.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":i}},{openFile:["src/index.html"]})}(a,i):n===m.VUE?async function(e,t){const[n,r,a,i,s,o,c]=await v([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,u={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;u[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...u,"index.html":r,"src/main.ts":a,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":i,"tsconfig.json":s,"vite.config.ts":o,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(a,i):void 0}function h(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>f({name:t,framework:n})},c.createElement(o.Z,null))}function w(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>b({name:t,files:n,framework:r,baseUrl:a})},c.createElement(u,null))}function y(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(s.Vp,null,e.files.map((e=>{e.node;return c.createElement(s.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function E(e){let{name:t,height:n,noMargin:r,theme:o,frameworks:l,availableFrameworks:u}=e;const{pathname:p}=(0,a.TH)(),g=(0,i.Z)("/"),[f,v]=(0,c.useState)(!0),[b,E]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||m.PREVIEW}(u)),[x,_]=(0,c.useState)();(0,c.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(p+t)),[t,p]);(0,c.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===m.REACT&&(r=r.concat(".tsx")),n===m.JAVASCRIPT&&(r=r.concat(".html")),n===m.ANGULAR&&(r=r.concat(".ts")),n===m.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),_(e))}),[l,_]);const k=e=>{E(e)};function j(e){return u?0===u.length||u.includes(e):Object.keys(l).some((t=>t===e))}return c.createElement("div",{className:"Playground"},f?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},c.createElement(s.Vp,null,c.createElement(s.t3,{selected:b===m.PREVIEW,onClick:()=>k(m.PREVIEW)},"Preview"),j(m.ANGULAR)?c.createElement(s.t3,{selected:b===m.ANGULAR,onClick:()=>k(m.ANGULAR)},"Angular"):null,j(m.REACT)?c.createElement(s.t3,{selected:b===m.REACT,onClick:()=>k(m.REACT)},"React"):null,j(m.JAVASCRIPT)?c.createElement(s.t3,{selected:b===m.JAVASCRIPT,onClick:()=>k(m.JAVASCRIPT)},"JavaScript"):null,j(m.VUE)?c.createElement(s.t3,{selected:b===m.VUE,onClick:()=>k(m.VUE)},"Vue"):null),c.createElement("div",{className:"Playground__Toolbar__Actions"},b!==m.PREVIEW?c.createElement(c.Fragment,null,c.createElement(h,{name:t,framework:b}),c.createElement(w,{name:t,framework:b,baseUrl:g,files:x?b===m.PREVIEW?[]:x[b].map((e=>e.filename)):[]})):null)),function(){if(b===m.PREVIEW)return c.createElement(d.Z,{name:t,height:n,noMargin:r,theme:o});if(!x||!x[b])return null;if(1===x[b].length){const[{node:e}]=x[b];return e}return c.createElement(y,{files:x[b]})}()):null)}},50685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const s={},o=void 0,c={unversionedId:"auto-generated/ix-message-bar/events",id:"auto-generated/ix-message-bar/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-message-bar/events.md",sourceDirName:"auto-generated/ix-message-bar",slug:"/auto-generated/ix-message-bar/events",permalink:"/version-dev/docs/auto-generated/ix-message-bar/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-message-bar/events.md",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"closedChange",description:"An event emitted when the close button is clicked",definition:[{name:"Detail",value:"any"}],tags:[]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},11446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const s={},o=void 0,c={unversionedId:"auto-generated/ix-message-bar/props",id:"auto-generated/ix-message-bar/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-message-bar/props.md",sourceDirName:"auto-generated/ix-message-bar",slug:"/auto-generated/ix-message-bar/props",permalink:"/version-dev/docs/auto-generated/ix-message-bar/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-message-bar/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"dismissible",description:"If true, close button is enabled and alert can be dismissed by the user",definition:[{name:"Attribute",value:"dismissible"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"type",description:"Specifies the type of the alert.",definition:[{name:"Attribute",value:"type"},{name:"Type",value:'"danger" \uff5c "info" \uff5c "warning"'},{name:"Default",value:"'info'"}],tags:[]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},73892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/angular/message-bar.ts",id:"auto-generated/previews/angular/message-bar.ts",title:"message-bar.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/message-bar.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/message-bar.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/message-bar.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/message-bar.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-message-bar>Message text</ix-message-bar>\n    <ix-message-bar type="warning">Message text</ix-message-bar>\n    <ix-message-bar type="danger">\n      <div class="d-flex align-items-center justify-content-between">\n        Message text <ix-button>Action</ix-button>\n      </div>\n    </ix-message-bar>\n  `,\n})\nexport default class MessageBar {}\n')))}d.isMDXComponent=!0},49290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/react/message-bar",id:"auto-generated/previews/react/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/message-bar.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/message-bar",permalink:"/version-dev/docs/auto-generated/previews/react/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/message-bar.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxMessageBar } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxMessageBar>Message text</IxMessageBar>\n      <IxMessageBar type="warning">Message text</IxMessageBar>\n      <IxMessageBar type="danger">\n        <div className="d-flex align-items-center justify-content-between">\n          Message text <IxButton>Action</IxButton>\n        </div>\n      </IxMessageBar>\n    </>\n  );\n};\n')))}d.isMDXComponent=!0},92653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/vue/message-bar",id:"auto-generated/previews/vue/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/message-bar.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/message-bar",permalink:"/version-dev/docs/auto-generated/previews/vue/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/message-bar.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxMessageBar } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxMessageBar>Message text</IxMessageBar>\n  <IxMessageBar type="warning">Message text</IxMessageBar>\n  <IxMessageBar type="danger">\n    <div className="d-flex align-items-center justify-content-between">\n      Message text <IxButton>Action</IxButton>\n    </div>\n  </IxMessageBar>\n</template>\n')))}d.isMDXComponent=!0},79491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/web-component/message-bar",id:"auto-generated/previews/web-component/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/message-bar.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/message-bar",permalink:"/version-dev/docs/auto-generated/previews/web-component/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/message-bar.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-message-bar>Message text</ix-message-bar>\n<ix-message-bar type="warning">Message text</ix-message-bar>\n<ix-message-bar type="danger">\n  <div class="d-flex align-items-center justify-content-between">\n    Message text <ix-button>Action</ix-button>\n  </div>\n</ix-message-bar>\n')))}d.isMDXComponent=!0},630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(7896),a=(n(2784),n(30876)),i=n(6404),s=n(11446),o=n(50685),c=n(79491),l=n(49290),u=n(73892),d=n(92653);const m={},p="Message bar",g={unversionedId:"controls/messagebar",id:"controls/messagebar",title:"Message bar",description:"Usage",source:"@site/docs/controls/messagebar.md",sourceDirName:"controls",slug:"/controls/messagebar",permalink:"/version-dev/docs/controls/messagebar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/messagebar.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Link button",permalink:"/version-dev/docs/controls/link-button"},next:{title:"Modal",permalink:"/version-dev/docs/controls/modal"}},f={},v=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],b={toc:v};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"message-bar"},"Message bar"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"message-bar",height:"14rem",frameworks:{react:l.default,angular:u.default,javascript:c.default,vue:d.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(s.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(o.default,{mdxType:"Events"}))}h.isMDXComponent=!0}}]);