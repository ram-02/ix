"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18338],{33682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(97458),s=n(16436),r=n(6492);const o={},a=void 0,l={id:"auto-generated/ix-validation-tooltip/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-validation-tooltip/props.md",sourceDirName:"auto-generated/ix-validation-tooltip",slug:"/auto-generated/ix-validation-tooltip/props",permalink:"/docs/auto-generated/ix-validation-tooltip/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-validation-tooltip/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){return(0,i.jsx)(r.Z,{attributes:[{name:"message",description:"Message of the tooltip",definition:[{name:"Attribute",value:"message"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"placement",description:"Placement of the tooltip",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom" \uff5c "left" \uff5c "right" \uff5c "top"'},{name:"Default",value:"'top'"}],tags:[]},{name:"suppressAutomaticPlacement",description:"Suppress the automatic placement of the dropdown.",definition:[{name:"Attribute",value:"suppress-automatic-placement"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.0.0"}]}]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},41677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var i=n(97458),s=n(16436),r=n(47834);function o(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,i.jsx)(t.p,{children:"A field is a form element when user input is needed. It's typically used with other form elements in a fieldset."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/../img/figma_error.png",alt:"Field"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Label"}),"\n",(0,i.jsx)(t.li,{children:"Form component"}),"\n",(0,i.jsx)(t.li,{children:"Helper text"}),"\n",(0,i.jsx)(t.li,{children:"Required indicator"}),"\n",(0,i.jsx)(t.li,{children:"Counter (input and textarea field only)"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," In this chapter, we describe the default field component. For details about ",(0,i.jsx)(t.a,{href:"/docs/controls/custom-field",children:"custom fields"}),", refer to the ",(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-layout",children:"layouts"})," chapter."]}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Label:"})," Add a label for the field that provides context to your users."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Required:"})," The asterisk states whether user input is required on the field before submitting the form."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Field:"})," Use the appropriate field based on the type of input data, e.g. use ",(0,i.jsx)(t.a,{href:"/docs/controls/input",children:"text inputs"})," for text-based data, ",(0,i.jsx)(t.a,{href:"/docs/controls/checkbox",children:"checkboxes"})," for selecting from a list of predefined options, or ",(0,i.jsx)(t.a,{href:"/docs/controls/toggle",children:"toggle switches"})," for a binary choice."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Helper text:"})," Use to help users understand the field better. We typically use this when there are input restrictions or more information is required."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Show text as tooltip:"})," Display validation feedback either below the input field or as tooltip when the user hovers or focuses on the form field. Use a different text for the individual validation states that apply (see ",(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-validation",children:"validation"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Counter:"})," Use a counter to show the number of characters entered into the field and the maximum number of characters allowed. We typically use it for ",(0,i.jsx)(t.a,{href:"/docs/controls/input",children:"text input"})," or ",(0,i.jsx)(t.a,{href:"/docs/controls/textarea",children:"textarea"})," fields."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Interaction:"})," See\xa0",(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-validation",children:"validation"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Behavior of a field as part of a form:"})," See\xa0",(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-validation",children:"behavior"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Text truncation:"})," Labels, feedback and helper texts are not truncated but break into multiple lines if they exceed the field's width."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,i.jsx)(t.p,{children:"Interaction states: Default, hover, active, disabled, readonly, focus."}),"\n",(0,i.jsx)(t.p,{children:"When a feedback tooltip is chosen over a message, the field shows a tooltip when in focus or hovered over in specific validation states."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/../img/figma_error.png",alt:"States"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," There are also several validation states (default, valid, info, warning, invalid) that are described in ",(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-validation",children:"validation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do use a label for every field"}),"\n",(0,i.jsx)(t.li,{children:"Do use a counter for fields with a character limit"}),"\n",(0,i.jsx)(t.li,{children:"Do use helper text to provide additional information or context about the field"}),"\n",(0,i.jsx)(t.li,{children:"Don\u2019t use helper text as a replacement for clear labels"}),"\n",(0,i.jsx)(t.li,{children:"Don\u2019t mix different variants of feedback text and tooltips"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-patterns",children:"Related patterns"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-validation",children:"Validation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-behavior",children:"Behavior"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/input",children:"Input"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/textarea",children:"Textarea"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/select",children:"Select"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/checkbox",children:"Checkbox"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/radio",children:"Radio button"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/toggle",children:"Toggle switch"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}n(48104),n(29442),n(75063),n(18931),n(33682);function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"development",children:"Development"}),"\n",(0,i.jsxs)(t.p,{children:["All components which are tagged via ",(0,i.jsx)(t.code,{children:"form-ready"})," are usable inside a ",(0,i.jsx)(t.code,{children:"form"})," without requiring manual integration."]}),"\n",(0,i.jsx)(t.h3,{id:"label",children:"Label"}),"\n",(0,i.jsxs)(t.p,{children:["Each ",(0,i.jsx)(t.code,{children:"form-ready"})," component includes a ",(0,i.jsx)(t.code,{children:"label"})," attribute that displays a label above the component."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<ix-select label="Demo"></ix-select>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"label"})," attribute is optional and can be left empty to display no label."]}),"\n",(0,i.jsx)(t.h3,{id:"required-indicator",children:"Required indicator"}),"\n",(0,i.jsxs)(t.p,{children:["To display an indicator whether a field is required, use the attribute ",(0,i.jsx)(t.code,{children:"required"}),". The indicator is only displayed, when a label is set."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<ix-input label="Demo" required></ix-input>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"helper-or-feedback-text",children:"Helper or feedback text"}),"\n",(0,i.jsxs)(t.p,{children:["To display a helper or feedback text below your component please refer to ",(0,i.jsx)(t.a,{href:"/docs/controls/forms/forms-validation",children:"validation"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"counter",children:"Counter"}),"\n",(0,i.jsxs)(t.p,{children:["To display a counter on inputs or textareas, use the attribute ",(0,i.jsx)(t.code,{children:"maxLength"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<ix-input max-length="128"></ix-input>\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const d={sidebar_position:1},u="Field",p={id:"controls/forms/forms-field",title:"Field",description:"",source:"@site/docs/controls/forms/forms-field.md",sourceDirName:"controls/forms",slug:"/controls/forms/forms-field",permalink:"/docs/controls/forms/forms-field",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/forms/forms-field.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"Flip",permalink:"/docs/controls/flip"},next:{title:"Layout",permalink:"/docs/controls/forms/forms-layout"}},h={},m=[{value:"Guidelines",id:"guidelines",level:2},{value:"Options",id:"options",level:2},{value:"Behavior in context",id:"behavior-in-context",level:2},{value:"States",id:"states",level:2},{value:"Dos and Don\u2019ts",id:"dos-and-donts",level:2},{value:"Related patterns",id:"related-patterns",level:2},{value:"Development",id:"development",level:2},{value:"Label",id:"label",level:3},{value:"Required indicator",id:"required-indicator",level:3},{value:"Helper or feedback text",id:"helper-or-feedback-text",level:3},{value:"Counter",id:"counter",level:3}];function f(e){const t={h1:"h1",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"field",children:"Field"}),"\n",(0,i.jsxs)(r.ZP,{children:[(0,i.jsx)(a,{}),(0,i.jsx)(c,{})]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const i=300,s="https://stackblitz.com",r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o=["project","search","ports","settings"],a=["light","dark"],l=["editor","preview"],c={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>m("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>h("sidebarView",e,o),startScript:e=>m("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>h("theme",e,a),view:e=>h("view",e,l),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&c.hasOwnProperty(e)?c[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function p(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function h(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function m(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function x(e,t){return`${j(t)}${e}${d(t)}`}function g(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${j(n)}${e}${d(n)}`}function j(e={}){return("string"==typeof e.origin?e.origin:s).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${i}`,s=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),s?e.setAttribute("width",s):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function b(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function w(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,i)=>{const s=f();this.pending[s]={resolve:n,reject:i},this.port.postMessage({type:e,payload:{...t,__reqid:s}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:i,__success:s,__error:r}=n;this.pending[i]&&(s?this.pending[i].resolve(this.cleanResult(n)):this.pending[i].reject(r?`${t}: ${r}`:t),delete this.pending[i])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class ${constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const _=[];class E{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new $(n[0],t.payload),e(this.vm),s())},i=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(o),window.removeEventListener("message",n)}window.addEventListener("message",n),i();let r=0;const o=window.setInterval((()=>{if(this.vm)s();else{if(r>=20)return s(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void _.forEach(((e,t)=>{e.id===this.id&&_.splice(t,1)}));r++,i()}}),500)})),_.push(this)}}const A=e=>{const t=e instanceof Element?"element":"id";return _.find((n=>n[t]===e))??null};function N({template:e,title:t,description:n,dependencies:i,files:s,settings:o}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],l=(e,t,n="")=>{a.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};l("project[title]",t),"string"==typeof n&&n.length>0&&l("project[description]",n),l("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):l("project[dependencies]",JSON.stringify(i))),o&&l("project[settings]",JSON.stringify(o)),Object.entries(s).forEach((([e,t])=>{l(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...a),c}function T(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(A(e)??new E(e)).pending}const S={connect:T,embedGithubProject:function(e,t,n){const i=b(e),s=document.createElement("iframe");return s.src=g(`/github/${t}`,n),v(i,s,n),T(s)},embedProject:function(e,t,n){const i=b(e),s=function(e,t){const n=N(e);return n.action=g("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),r=document.createElement("iframe");return v(i,r,n),r.contentDocument?.write(s),T(r)},embedProjectId:function(e,t,n){const i=b(e),s=document.createElement("iframe");return s.src=g(`/edit/${t}`,n),v(i,s,n),T(s)},openGithubProject:function(e,t){const n=x(`/github/${e}`,t),i=w(t);window.open(n,i)},openProject:function(e,t){!function(e,t){const n=N(e);n.action=x("/run",t),n.target=w(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=x(`/edit/${e}`,t),i=w(t);window.open(n,i)}}},6492:(e,t,n)=>{n.d(t,{Z:()=>o});n(52983);var i=n(4173),s=n(97458);function r(e){return(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,s.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,s.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Content",children:[(0,s.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,s.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,s.jsxs)("div",{className:"row Attribute",children:[(0,s.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,s.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,s.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,s.jsx)(r,{attribute:e},e.name)))]})}},4173:(e,t,n)=>{n.d(t,{Q:()=>s,h:()=>r});n(52983);var i=n(97458);function s(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function r(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},94691:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(76213),s=n(7528),r=n(2476),o=n(52983),a=n(83129),l=n(97458);function c(e){const t=(0,r.Z)(),[n]=(0,o.useState)(!1),c=(0,s.Z)("/"),[d,u]=(0,o.useState)(""),[p,h]=(0,o.useState)((0,a.V)(t)),{preferredVersion:m}=(0,i.J)();return(0,o.useEffect)((()=>{const t=m?.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,m?.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,a.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),h(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",m?.name]}):(0,l.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},41124:(e,t,n)=>{n.d(t,{QJ:()=>i,nI:()=>s});let i=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function s(e){switch(e){case i.ANGULAR:return"Angular";case i.REACT:return"React";case i.JAVASCRIPT:return"JavaScript";case i.VUE:return"Vue";case i.PREVIEW:return"Preview"}}},48104:(e,t,n)=>{n.d(t,{_:()=>m,Z:()=>f});var i=n(7528),s=n(99290),r=n(90466),o=n(40749),a=n(52983),l=n(41124),c=n(94691);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(36365),p=n(2476),h=n(97458);function m(e){const[t,n]=(0,a.useState)(!0),s=(0,i.Z)("/auto-generated"),[l,c]=(0,a.useState)([]),[d,p]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(e.examplesByName)(0,u.nq)(s,e.name,e.framework,e.includeCssFile).then((e=>{p(0),c(e.filter((e=>e))),n(!1)}));else if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),(0,u.Td)(s,e.framework,t).then((e=>{p(0),c(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,a.useEffect)((()=>{e.onSourceCodeFetched&&e.onSourceCodeFetched(l)}),[l]),t?(0,h.jsx)(r.lL,{}):0===l.length?(0,h.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,h.jsx)(o.Z,{language:(0,u.G3)(l[0].filename),children:l[0].source}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Vp,{children:l.map(((e,t)=>(0,h.jsx)(r.t3,{onClick:()=>p(t),children:e.filename},e.filename+"."+t)))}),(0,h.jsx)(o.Z,{language:(0,u.G3)(l[d].filename),children:l[d].source})]})}function f(e){const[t,n]=(0,a.useState)(l.QJ.PREVIEW),o=(0,i.Z)("/"),f=(0,i.Z)("/img"),x=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[g,j]=(0,a.useState)([]),v=(0,p.Z)().siteConfig.customFields.playgroundVersion,[b]=(0,a.useState)([{id:l.QJ.ANGULAR,label:"Angular"},{id:l.QJ.REACT,label:"React"},{id:l.QJ.VUE,label:"Vue"},{id:l.QJ.JAVASCRIPT,label:"Javascript"}]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)(r.Vp,{children:[(0,h.jsx)(r.t3,{onClick:()=>n(l.QJ.PREVIEW),children:"Preview"}),b.filter((t=>!(e.showOnly?.length>0)||e.showOnly.includes(t.id))).map((t=>{if(i=t.id,e.examplesByName||e.files[i])return(0,h.jsx)(r.t3,{onClick:()=>n(t.id),children:t.label},t.id);var i})),(0,h.jsx)("div",{className:d.Files_Toolbar,children:t===l.QJ.PREVIEW?(0,h.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=s.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${x}/${e.name}.html?theme=${t}${n}`)}}):(0,h.jsxs)(h.Fragment,{children:[!e.disableStackBlitz&&(0,h.jsx)(r.AN,{ghost:!0,size:"16",icon:`${f}/stackblitz.svg`,onClick:()=>{(0,u.Sc)({baseUrl:o,files:g,framework:t,name:e.name,version:v})}}),(0,h.jsx)(r.AN,{ghost:!0,size:"16",icon:`${f}/github.svg`,onClick:()=>{window.open(`https://github.com/${(0,u.Lp)(t)}`)}})]})})]}),t===l.QJ.PREVIEW?(0,h.jsx)(c.Z,{...e}):null,t!==l.QJ.PREVIEW?(0,h.jsx)(m,{onSourceCodeFetched:e=>j(e),framework:t,name:e.name,files:e.files,includeCssFile:e.includeCssFile,examplesByName:e.examplesByName}):null]})}},36365:(e,t,n)=>{n.d(t,{G3:()=>d,Lp:()=>o,Sc:()=>v,Sy:()=>j,Td:()=>u,nq:()=>p,zx:()=>a});var i=n(14455),s=n(41124),r=n(99290);function o(e){let t="html";return e===s.QJ.ANGULAR&&(t="angular"),e===s.QJ.REACT&&(t="react"),e===s.QJ.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}function a(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function l(e,t){const n=e.match(t);if(n&&2===n.length){const[n,i]=e.split(t);return a(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function c(e){return f(function(e){const t=l(e,/<!-- Preview code -->/g);if(t){const n=l(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return a(e)}(e),!0).source}function d(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}async function u(e,t,n){let i="web-components";return t===s.QJ.ANGULAR&&(i="angular"),t===s.QJ.REACT&&(i="react"),t===s.QJ.VUE&&(i="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){const t=await fetch(`${e}`),n=await t.text();return!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===d(t)?`${e}/previews/styles/${t}`:`${e}/previews/${i}/${t}`);return n?{filename:t,source:c(n),raw:n}:null}catch(n){console.warn(n)}})))}async function p(e,t,n,i){const r=[];return n===s.QJ.ANGULAR&&r.push(`${t}.html`,`${t}.ts`),n===s.QJ.JAVASCRIPT&&r.push(`${t}.html`),n===s.QJ.REACT&&r.push(`${t}.tsx`),n===s.QJ.VUE&&r.push(`${t}.vue`),i&&r.push(`${t}.css`),u(e,n,r)}function h(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=r.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function f(e,t){var n;void 0===t&&(t=!1);const i=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return i&&i.length>1&&(n=i[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function x(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,i){const r={},o={},a=e.map((async e=>{let{filename:a,raw:l}=e;if(a.endsWith(".css"))return;let c=l;if(a===n){i===s.QJ.JAVASCRIPT&&(c=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(c)),a="index.html");const{source:e,styleFileName:n}=f(c,i===s.QJ.ANGULAR);c=e,n&&(o[`src/${i===s.QJ.ANGULAR?"app":"styles"}/${n}`]=(await x([`${t}${n}`]))[0])}r[`src${i===s.QJ.ANGULAR?"/app":""}/${a}`]=c}));return await Promise.all(a),{files:r,styleFiles:o}}async function j(e){let{name:t,framework:n,files:r,baseUrl:o,version:a}=e;const l=a||"latest";let c=null;return n===s.QJ.REACT&&(c=async function(e,t,n){const r=`${e}auto-generated/previews/styles/`,o=["vite.config.ts","tsconfig.json","tsconfig.node.json","src/main.tsx","src/vite-env.d.ts"],[a,l,c,d,...u]=await x([`${r}global.css`,`${e}code-runtime/react/src/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/package.json`,...o.map((t=>`${e}code-runtime/react/${t}`))]),p=t[0],{files:f,styleFiles:j}=await g(t,r,p.filename,s.QJ.REACT),v={...f,...j,"src/styles/global.css":a,"index.html":m(c),"src/App.tsx":l.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${p.filename.substring(0,p.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":h(d,n)};u.forEach(((e,t)=>{v[o[t]]=e}));const b={template:"node",title:"iX React App",description:"iX react playground",files:v};return{exampleFile:`src/${p.filename}`,open:()=>{i.Z.openProject(b,{openFile:`src/${p.filename}`})},config:b}}(o,r,l)),n===s.QJ.ANGULAR&&(c=async function(e,t,n,r){const o=`${e}auto-generated/previews/styles/`,[a,l,c,d,u,p,f,j,v,b]=await x([`${o}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]);let w=n[0];n.length>=2&&(w=n[1]);const y=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&y.push(t)}));const $=`\n    ${y.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${y.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:_,styleFiles:E}=await g(n,o,w.filename,s.QJ.ANGULAR),A={template:"node",title:"iX Angular app",description:"iX Angular playground",files:{..._,...E,"src/app/declare-component.ts":$,"src/app/app.component.html":l,"src/app/app.component.ts":c,"src/app/app.module.ts":d,"src/index.html":m(u),"src/main.ts":p,"src/styles.css":a,"angular.json":f,"package.json":h(j,r),"tsconfig.app.json":v,"tsconfig.json":b}};return{exampleFile:`src/app/${t}.ts`,open:()=>{i.Z.openProject(A,{openFile:`src/app/${t}.ts`})},config:A}}(o,t,r,l)),n===s.QJ.JAVASCRIPT&&(c=async function(e,t,n){const r=`${e}auto-generated/previews/styles/`,[o,a,l,c]=await x([`${r}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),d=t[0],{files:u,styleFiles:p}=await g(t,r,d.filename,s.QJ.JAVASCRIPT),m={template:"node",title:"iX html app",description:"iX html playground",files:{...u,...p,"src/styles/global.css":o,"src/main.js":a,"package.json":h(l,n),"vite.config.ts":c}};return{exampleFile:"src/index.html",open:()=>{i.Z.openProject(m,{openFile:["src/index.html"]})},config:m}}(o,r,l)),n===s.QJ.VUE&&(c=async function(e,t,n){const r=`${e}auto-generated/previews/styles/`,[o,a,l,c,d,u,p,f]=await x([`${r}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),j=t[0],{files:v,styleFiles:b}=await g(t,r,j.filename,s.QJ.VUE),w={template:"node",title:"iX Vue App",description:"iX vue playground",files:{...v,...b,"src/styles/global.css":o,"index.html":m(l),"src/main.ts":c,"src/App.vue":a.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${j.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":f,"package.json":h(d,n),"tsconfig.json":u,"vite.config.ts":p,".stackblitzrc":'{\n        "startCommand": "npm run dev"\n      }'}};return{exampleFile:`src/${j.filename}`,open:()=>{i.Z.openProject(w,{openFile:`src/${j.filename}`})},config:w}}(o,r,l)),c}async function v(e){let{name:t,framework:n,files:i,baseUrl:s,version:r}=e;const o=j({name:t,framework:n,files:i,baseUrl:s,version:r});if(await o){const{open:e}=await o;e()}}},29442:(e,t,n)=>{var i=n(52983),s=n(14455),r=n(36365),o=n(7528),a=n(97458);function l(e){const t=(0,i.useRef)(),n=(0,o.Z)("/auto-generated"),l=(0,o.Z)("/");return(0,i.useLayoutEffect)((()=>{const i=t.current;i&&(async()=>{const t=await(0,r.nq)(n,e.exampleName,e.framework,!1),o=await(0,r.Sy)({baseUrl:l,files:t,framework:e.framework,name:e.exampleName,version:e.version??"latest"});s.Z.embedProject(i,o.config,{clickToLoad:!0,height:e.height,view:"preview",openFile:[o.exampleFile]}).then((e=>console.log(e))).catch((e=>console.error(e)))})()}),[]),(0,a.jsx)("div",{ref:t})}l.displayName="StackblitzEmbedded"}}]);