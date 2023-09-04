"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91710],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/angular/modal-by-template.ts",id:"auto-generated/previews/angular/modal-by-template.ts",title:"modal-by-template.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal-by-template.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal-by-template.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/modal-by-template.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal-by-template.ts.md",tags:[],version:"current",frontMatter:{}},c={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ModalService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-button (click)=\"openModal()\">Show modal</ix-button>\n\n    <ng-template #customModal let-modal>\n      <div>\n        <ix-modal-header> Message headline </ix-modal-header>\n        <ix-modal-content\n          >Message text lorem ipsum: {{ modal.data }}</ix-modal-content\n        >\n        <ix-modal-footer>\n          <ix-button\n            outline\n            class=\"dismiss-modal\"\n            (click)=\"modal.dismiss('dismiss')\"\n          >\n            Cancel\n          </ix-button>\n          <ix-button class=\"close-modal\" (click)=\"modal.close('okay')\">\n            OK\n          </ix-button>\n        </ix-modal-footer>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class Modal {\n  @ViewChild('customModal', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async openModal() {\n    const instance = await this.modalService.open({\n      content: this.customModalRef,\n      data: 'Some data',\n    });\n\n    instance.onClose.on((a) => {\n      console.log(a);\n    });\n\n    instance.htmlElement.addEventListener(\n      'keydown',\n      (keyboardEvent: KeyboardEvent) => {\n        console.log(keyboardEvent.key);\n      }\n    );\n  }\n}\n")))}m.isMDXComponent=!0}}]);