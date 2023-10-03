/*! For license information please see 14977.94413cbe.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14977],{14977:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>K});const r="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("(-shadowcsshost"+n,"gim"),a=new RegExp("(-shadowcsscontext"+n,"gim"),i=new RegExp("(-shadowcssslotted"+n,"gim"),p="-shadowcsshost-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],d=/-shadowcsshost/gim,g=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,$=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_=/([{}])/g,b=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",O=(e,t)=>{const s=W(e);let r=0;return s.escapedString.replace(w,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{%BLOCK%")&&(o=s.blocks[r++],n=n.substring(S.length+1),l="{");const a=t({selector:c,content:o});return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`}))},W=e=>{const t=e.split(_),s=[],r=[];let c=0,o=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(S),o=[]),s.push(e)),"{"===e&&c++}o.length>0&&(r.push(o.join("")),s.push(S));return{escapedString:s.join(""),blocks:r}},k=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(p,o,e[3]))}return r.join(",")}return p+e[3]})),j=(e,t,s)=>e+t.replace(r,"")+s,C=(e,t,s)=>t.indexOf(r)>-1?j(e,t,s):e+t+s+", "+t+" "+e+s,E=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},R=(e,t)=>e.replace(b,((e,s="",r,c="",o="")=>s+t+c+o)),L=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(p)>-1)c=((e,t,s)=>{if(d.lastIndex=0,d.test(e)){const t=`.${s}`;return e.replace(h,((e,s)=>R(s,t))).replace(d,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(d,"");t.length>0&&(c=R(t,r))}return c},o=(e=>{const t=[];let s=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),placeholders:t}})(e);let n,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((e=o.content).indexOf(p)>-1);for(;null!==(n=i.exec(e));){const t=n[1],s=e.slice(a,n.index).trim();u=u||s.indexOf(p)>-1;l+=`${u?c(s):s} ${t} `,a=i.lastIndex}const g=e.substring(a);return u=u||g.indexOf(p)>-1,l+=u?c(g):g,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]));var m},T=(e,t,s,r,c)=>O(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():E(e,t)?L(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=T(e.content,t,s,r));return{selector:c.replace(/\s{2,}/g," ").trim(),content:o}})),B=(e,t,s,n,h)=>{const d=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(i,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=n+o,a=`${n.trimRight()}${o.trim()}`;if(l.trim()!==a.trim()){const e=`${a}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return p+e[3]})),{selectors:r,cssText:e}})(e=(e=>k(e,a,C))(e=(e=>k(e,l,j))(e=e.replace(f,o).replace(g,r).replace(m,c))),n);return e=(e=>u.reduce(((e,t)=>e.replace(t," ")),e))(e=d.cssText),t&&(e=T(e,t,s,n)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:d.selectors}},K=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=e.match($)||[];e=(e=>e.replace(x,""))(e);const n=[];if(s){const t=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=O(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=O(e.content,t),e):e))}const l=B(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);