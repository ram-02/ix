"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36459,72636,2607,87344,58214,37942,98249,65874,12177,61505,91478],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>_});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a={clickToLoad:function(e){return o("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return o("embed",e)},hideDevTools:function(e){return o("hidedevtools",e)},hideExplorer:function(e){return o("hideExplorer",e)},hideNavigation:function(e){return o("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return l("theme",["light","dark"],e)},view:function(e){return l("view",["preview","editor"],e)}};function i(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&a.hasOwnProperty(t)?a[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function o(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function l(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function c(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){return""+p(t)+e+i(t)}function d(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+p(n)+e+i(n)}function p(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function m(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function f(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function v(e){return e&&!1===e.newWindow?"_self":"_blank"}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var b=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=c();return new Promise((function(e,i){t.pending[a]={resolve:e,reject:i},t.port.postMessage({type:n,payload:g({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,i=a.__reqid,o=a.__error;this.pending[i]&&(a.__success?this.pending[i].resolve(function(e){var t=g({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[i].reject(o?r+": "+o:r),delete this.pending[i])}},e}(),h=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new b(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),w=[],k=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=c(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new h(n.ports[0],r.payload),e(t.vm),i())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function i(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var o=0,s=window.setInterval((function(){if(t.vm)i();else{if(o>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void w.forEach((function(e,n){e.id===t.id&&w.splice(n,1)}));o++,a()}}),500)})),w.push(this)};function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function E(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(y("project[title]",e.title)),a.appendChild(y("project[description]",e.description)),a.appendChild(y("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(y("project[files]["+t+"]",e.files[t]))})),a}function x(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=w.find((function(e){return e[a]===n})))?r:null)?t:new k(e)).pending:Promise.reject("Provided element is not an iframe.")}var _={connect:x,embedGithubProject:function(e,t,n){var r=f(e),a=document.createElement("iframe");return a.src=d("/github/"+t,n),m(r,a,n),x(a)},embedProject:function(e,t,n){var r,a=f(e),i=function(e,t){var n=E(e);return n.action=d("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),o=document.createElement("iframe");return m(a,o,n),null==(r=o.contentDocument)||r.write(i),x(o)},embedProjectId:function(e,t,n){var r=f(e),a=document.createElement("iframe");return a.src=d("/edit/"+t,n),m(r,a,n),x(a)},openGithubProject:function(e,t){var n=u("/github/"+e,t),r=v(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=E(e);n.action=u("/run",t),n.target=v(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=u("/edit/"+e,t),r=v(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>o});var r,a=n(2784);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",i({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(731);function i(e){var t,n,i,o,s,l,c,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(i=n.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(o=e.attribute)||null==(s=o.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(l=e.attribute)?void 0:l.description),r.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>i});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),s=n(90943);function l(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),l=(0,a.Z)("/"),[c,u]=(0,o.useState)(""),[d,p]=(0,o.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>y});var r,a=n(7267),i=n(90077),o=n(53849),s=n(2176),l=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let p;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(p||(p={}));var m=n(14091);const f="https://github.com/siemens/ix/tree/main/packages";function v(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===p.ANGULAR?`${f}/angular-test-app/src/preview-examples/${t}.ts`:n===p.JAVASCRIPT?`${f}/html-test-app/src/preview-examples/${t}.html`:n===p.REACT?`${f}/react-test-app/src/preview-examples/${t}.tsx`:n===p.VUE?`${f}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function b(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const i=await async function(e,t,n){const r=[];return(await g(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===p.REACT?async function(e,t){const[n,r,a,i,o]=await g([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,i):n===p.ANGULAR?async function(e,t,n){const[r,a,i,o,s,l,c,u,d,p,f]=await g([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),v=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&v.push(t)}));const b=`\n    ${v.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${v.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,h={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;h[`src/app/${t}`]=n})),m.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":b,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":l,"src/styles.css":c,"angular.json":u,"package.json":d,"tsconfig.app.json":p,"tsconfig.json":f,...h}},{openFile:`src/app/${t}.ts`})}(a,t,i):n===p.JAVASCRIPT?async function(e,t){const[n,r,a,i]=await g([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,l={};s.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),m.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":i}},{openFile:["src/index.html"]})}(a,i):n===p.VUE?async function(e,t){const[n,r,a,i,o,s,l]=await g([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[c]=t,u={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;u[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...u,"index.html":r,"src/main.ts":a,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":i,"tsconfig.json":o,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${c.filename}`})}(a,i):void 0}function h(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>v({name:t,framework:n})},l.createElement(s.Z,null))}function w(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>b({name:t,files:n,framework:r,baseUrl:a})},l.createElement(u,null))}function k(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(o.Vp,null,e.files.map((e=>{e.node;return l.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?l.createElement(r,null):null}())}function y(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:c,availableFrameworks:u}=e;const{pathname:m}=(0,a.TH)(),f=(0,i.Z)("/"),[v,g]=(0,l.useState)(!0),[b,y]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||p.PREVIEW}(u)),[E,x]=(0,l.useState)();(0,l.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,l.useEffect)((()=>{const e={};c&&(Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let r=t;n===p.REACT&&(r=r.concat(".tsx")),n===p.JAVASCRIPT&&(r=r.concat(".html")),n===p.ANGULAR&&(r=r.concat(".ts")),n===p.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),x(e))}),[c,x]);const _=e=>{y(e)};function T(e){return u?0===u.length||u.includes(e):Object.keys(c).some((t=>t===e))}return l.createElement("div",{className:"Playground"},v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},l.createElement(o.Vp,null,l.createElement(o.t3,{selected:b===p.PREVIEW,onClick:()=>_(p.PREVIEW)},"Preview"),T(p.ANGULAR)?l.createElement(o.t3,{selected:b===p.ANGULAR,onClick:()=>_(p.ANGULAR)},"Angular"):null,T(p.REACT)?l.createElement(o.t3,{selected:b===p.REACT,onClick:()=>_(p.REACT)},"React"):null,T(p.JAVASCRIPT)?l.createElement(o.t3,{selected:b===p.JAVASCRIPT,onClick:()=>_(p.JAVASCRIPT)},"JavaScript"):null,T(p.VUE)?l.createElement(o.t3,{selected:b===p.VUE,onClick:()=>_(p.VUE)},"Vue"):null),l.createElement("div",{className:"Playground__Toolbar__Actions"},b!==p.PREVIEW?l.createElement(l.Fragment,null,l.createElement(h,{name:t,framework:b}),l.createElement(w,{name:t,framework:b,baseUrl:f,files:E?b===p.PREVIEW?[]:E[b].map((e=>e.filename)):[]})):null)),function(){if(b===p.PREVIEW)return l.createElement(d.Z,{name:t,height:n,noMargin:r,theme:s});if(!E||!E[b])return null;if(1===E[b].length){const[{node:e}]=E[b];return e}return l.createElement(k,{files:E[b]})}()):null)}},99994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const o={},s=void 0,l={unversionedId:"auto-generated/ix-link-button/props",id:"auto-generated/ix-link-button/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-link-button/props.md",sourceDirName:"auto-generated/ix-link-button",slug:"/auto-generated/ix-link-button/props",permalink:"/version-dev/docs/auto-generated/ix-link-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-link-button/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"disabled",description:"Disable the link button",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"target",description:"Specifies where to open the link\n\nhttps://www.w3schools.com/html/html_links.asp",definition:[{name:"Attribute",value:"target"},{name:"Type",value:'"_blank" \uff5c "_parent" \uff5c "_self" \uff5c "_top"'},{name:"Default",value:"'_self'"}],tags:[]},{name:"url",description:"Url for the link button",definition:[{name:"Attribute",value:"url"},{name:"Type",value:"string"},{name:"Default"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},12179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-link-button/tags",id:"auto-generated/ix-link-button/tags",title:"tags",description:"Since: 2.0.0",source:"@site/docs/auto-generated/ix-link-button/tags.md",sourceDirName:"auto-generated/ix-link-button",slug:"/auto-generated/ix-link-button/tags",permalink:"/version-dev/docs/auto-generated/ix-link-button/tags",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-link-button/tags.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 2.0.0"))}d.isMDXComponent=!0},60110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/link-button-disabled.ts",id:"auto-generated/previews/angular/link-button-disabled.ts",title:"link-button-disabled.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/link-button-disabled.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/link-button-disabled.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/link-button-disabled.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/link-button-disabled.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-link-button url=\"https://ix.siemens.io/\" disabled\n      >Link text</ix-link-button\n    >\n  `,\n})\nexport default class LinkButtonDisabled {}\n")))}d.isMDXComponent=!0},90362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/link-button.ts",id:"auto-generated/previews/angular/link-button.ts",title:"link-button.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/link-button.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/link-button.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/link-button.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/link-button.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-link-button url=\"https://ix.siemens.io/\">Link text</ix-link-button>\n  `,\n})\nexport default class LinkButton {}\n")))}d.isMDXComponent=!0},95218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/link-button-disabled",id:"auto-generated/previews/react/link-button-disabled",title:"link-button-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/link-button-disabled.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/link-button-disabled",permalink:"/version-dev/docs/auto-generated/previews/react/link-button-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/link-button-disabled.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxLinkButton } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <IxLinkButton url=\"https://ix.siemens.io/\" disabled>\n      Link text\n    </IxLinkButton>\n  );\n};\n")))}d.isMDXComponent=!0},59770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/link-button",id:"auto-generated/previews/react/link-button",title:"link-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/link-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/link-button",permalink:"/version-dev/docs/auto-generated/previews/react/link-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/link-button.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxLinkButton } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxLinkButton url=\"https://ix.siemens.io/\">Link text</IxLinkButton>;\n};\n")))}d.isMDXComponent=!0},38614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/vue/link-button-disabled",id:"auto-generated/previews/vue/link-button-disabled",title:"link-button-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/link-button-disabled.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/link-button-disabled",permalink:"/version-dev/docs/auto-generated/previews/vue/link-button-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/link-button-disabled.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxLinkButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxLinkButton url="https://ix.siemens.io/" disabled>Link text</IxLinkButton>\n</template>\n')))}d.isMDXComponent=!0},39107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/vue/link-button",id:"auto-generated/previews/vue/link-button",title:"link-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/link-button.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/link-button",permalink:"/version-dev/docs/auto-generated/previews/vue/link-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/link-button.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxLinkButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxLinkButton url="https://ix.siemens.io/">Link text</IxLinkButton>\n</template>\n')))}d.isMDXComponent=!0},90310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/link-button-disabled",id:"auto-generated/previews/web-component/link-button-disabled",title:"link-button-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/link-button-disabled.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/link-button-disabled",permalink:"/version-dev/docs/auto-generated/previews/web-component/link-button-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/link-button-disabled.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'  <ix-link-button url="https://ix.siemens.io/" disabled>Link text</ix-link-button>\n')))}d.isMDXComponent=!0},25751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/link-button",id:"auto-generated/previews/web-component/link-button",title:"link-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/link-button.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/link-button",permalink:"/version-dev/docs/auto-generated/previews/web-component/link-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/link-button.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'  <ix-link-button url="https://ix.siemens.io/">Link text</ix-link-button>\n')))}d.isMDXComponent=!0},57531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>E,frontMatter:()=>g,metadata:()=>h,toc:()=>k});var r=n(7896),a=(n(2784),n(30876)),i=n(12179),o=n(6404),s=n(99994),l=n(25751),c=n(59770),u=n(90362),d=n(39107),p=n(90310),m=n(95218),f=n(60110),v=n(38614);const g={},b="Link button",h={unversionedId:"controls/link-button",id:"controls/link-button",title:"Link button",description:"Usage",source:"@site/docs/controls/link-button.md",sourceDirName:"controls",slug:"/controls/link-button",permalink:"/version-dev/docs/controls/link-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/link-button.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"KPI",permalink:"/version-dev/docs/controls/kpi"},next:{title:"Message bar",permalink:"/version-dev/docs/controls/messagebar"}},w={},k=[{value:"Usage",id:"usage",level:2},{value:"Disabled",id:"disabled",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3}],y={toc:k};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"link-button"},"Link button"),(0,a.kt)(i.default,{mdxType:"Tags"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"link-button",frameworks:{react:c.default,angular:u.default,javascript:l.default,vue:d.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"disabled"},"Disabled"),(0,a.kt)(o.Z,{name:"link-button-disabled",frameworks:{react:m.default,angular:f.default,javascript:p.default,vue:v.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(s.default,{mdxType:"Props"}))}E.isMDXComponent=!0}}]);