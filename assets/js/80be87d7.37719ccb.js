"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89261],{30876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(2784),r=a(731);function i(e){var t,a,i,o,l,s,c,m;return n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(i=a.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var a;return n.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(o=e.attribute)||null==(l=o.tags)?void 0:l.filter((e=>"deprecated"===e.type)).map((t=>{var a;return n.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Content"},n.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),n.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(m=c.definition)?void 0:m.filter((e=>void 0!==e.value)).map((e=>n.createElement("div",{className:"row Attribute",key:e.name},n.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),n.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return n.createElement("div",{className:"container-fluid ApiTable"},n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>n.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>r,h:()=>i});var n=a(2784);function r(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),n.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag"},"Since ",e.message))}},21651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7896),r=(a(2784),a(30876)),i=a(63483);const o={},l=void 0,s={unversionedId:"auto-generated/ix-date-picker/props",id:"auto-generated/ix-date-picker/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-date-picker/props.md",sourceDirName:"auto-generated/ix-date-picker",slug:"/auto-generated/ix-date-picker/props",permalink:"/docs/auto-generated/ix-date-picker/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-date-picker/props.md",tags:[],version:"current",frontMatter:{}},c={},m=[],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{attributes:[{name:"corners",description:"Corner style",definition:[{name:"Attribute",value:"corners"},{name:"Type",value:'"left" \uff5c "right" \uff5c "rounded" \uff5c "straight"'},{name:"Default",value:"'rounded'"}],tags:[]},{name:"eventDelimiter",description:"Default behavior of the done event is to join the two events (date and time) into one combined string output.\nThis combination can be configured over the delimiter",definition:[{name:"Attribute",value:"event-delimiter"},{name:"Type",value:"string"},{name:"Default",value:"' - '"}],tags:[{type:"since",message:"1.1.0"},{type:"deprecated",message:"Not used anymore see `this.dateChange`"}]},{name:"format",description:'Date format string.\nSee {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.',definition:[{name:"Attribute",value:"format"},{name:"Type",value:"string"},{name:"Default",value:"'yyyy/LL/dd'"}],tags:[]},{name:"from",description:"The selected starting date. If the date-picker-rework is not in range mode this is the selected date.\nFormat has to match the `format` property.",definition:[{name:"Attribute",value:"from"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"i18nDone",description:"Text of date select button",definition:[{name:"Attribute",value:"i18n-done"},{name:"Type",value:"string"},{name:"Default",value:"'Done'"}],tags:[{type:"since",message:"2.1.0"}]},{name:"individual",description:"",definition:[{name:"Attribute",value:"individual"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[{type:"deprecated",message:"Not supported since 2.0.0."}]},{name:"locale",description:'Format of time string\nSee {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.',definition:[{name:"Attribute",value:"locale"},{name:"Type",value:"string"},{name:"Default",value:"undefined"}],tags:[{type:"since",message:"2.1.0"}]},{name:"maxDate",description:"The latest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"max-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"minDate",description:"The earliest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"min-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"range",description:"If true a date-range can be selected (from/to).",definition:[{name:"Attribute",value:"range"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"textSelectDate",description:"Text of the button that confirms date selection.",definition:[{name:"Attribute",value:"text-select-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"},{type:"deprecated",message:"since 2.1.0. Use `i18nDone`"}]},{name:"to",description:"The selected end date. If the the date-picker-rework is not in range mode this property has no impact.\nFormat has to match the `format` property.",definition:[{name:"Attribute",value:"to"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"weekStartIndex",description:"The index of which day to start the week on, based on the Locale#weekdays array.\nE.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.",definition:[{name:"Attribute",value:"week-start-index"},{name:"Type",value:"number"},{name:"Default",value:"0"}],tags:[{type:"since",message:"2.1.0"}]}],mdxType:"ApiTable"}))}d.isMDXComponent=!0}}]);