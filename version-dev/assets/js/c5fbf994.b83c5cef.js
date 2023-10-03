"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27508,40715],{30876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/aggrid.ts",id:"auto-generated/previews/angular/aggrid.ts",title:"aggrid.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/aggrid.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/aggrid.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/aggrid.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/aggrid.ts.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\nimport { GridOptions } from 'ag-grid-community';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ag-grid-angular\n      style=\"height: 12rem; width: 100%\"\n      class=\"ag-theme-alpine-dark ag-theme-ix\"\n      [gridOptions]=\"gridOptions\"\n    ></ag-grid-angular>\n  `,\n})\nexport default class AGGrid {\n  gridOptions = {\n    columnDefs: [\n      {\n        field: 'type',\n        headerName: 'Type',\n        resizable: true,\n        checkboxSelection: true,\n      },\n      {\n        field: 'status',\n        headerName: 'Status',\n        resizable: true,\n        sortable: true,\n        filter: true,\n      },\n      { field: 'hwVersion', headerName: 'HW version', resizable: true },\n    ],\n    rowData: [\n      {\n        type: 'Equipment',\n        status: 'Normal',\n        hwVersion: '2.0',\n        checked: false,\n      },\n      {\n        type: 'Positioner',\n        status: 'Maintenance',\n        hwVersion: '1.0',\n        checked: true,\n      },\n      {\n        type: 'Pressure sensor',\n        status: 'Unknown',\n        hwVersion: 'N/A',\n        checked: false,\n      },\n    ],\n    rowSelection: 'multiple',\n    suppressCellFocus: true,\n    checkboxSelection: true,\n  } as GridOptions;\n}\n")))}p.isMDXComponent=!0}}]);