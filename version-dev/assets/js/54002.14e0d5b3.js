"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54002],{54002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(7896),a=(t(2784),t(30876));const i={},r=void 0,c={unversionedId:"auto-generated/previews/vue/application-header",id:"auto-generated/previews/vue/application-header",title:"application-header",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/application-header.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/application-header",permalink:"/version-dev/docs/auto-generated/previews/vue/application-header",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/application-header.md",tags:[],version:"current",frontMatter:{}},p={},s=[],d={toc:s};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  IxApplicationHeader,\n  IxAvatar,\n  IxDropdownButton,\n  IxDropdownItem,\n  IxIconButton,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxApplicationHeader name="My Application">\n    <div className="placeholder-logo" slot="logo"></div>\n\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n\n    <IxDropdownButton variant="secondary" label="Select config" ghost>\n      <IxDropdownItem label="Config 1"></IxDropdownItem>\n      <IxDropdownItem label="Config 2"></IxDropdownItem>\n      <IxDropdownItem label="Config 3"></IxDropdownItem>\n    </IxDropdownButton>\n\n    <IxAvatar username="John Doe" extra="Administrator">\n      <IxDropdownItem label="Action 1"></IxDropdownItem>\n      <IxDropdownItem label="Action 2"></IxDropdownItem>\n    </IxAvatar>\n  </IxApplicationHeader>\n</template>\n\n')))}l.isMDXComponent=!0}}]);