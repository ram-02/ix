"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22619],{22619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7896),r=(n(2784),n(30876));const o={},s=void 0,i={unversionedId:"auto-generated/previews/angular/datepicker-locale.ts",id:"auto-generated/previews/angular/datepicker-locale.ts",title:"datepicker-locale.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/datepicker-locale.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/datepicker-locale.ts",permalink:"/docs/auto-generated/previews/angular/datepicker-locale.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/datepicker-locale.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './datepicker-locale.html',\n})\nexport default class DatepickerLocale {\n  locale: 'de' \uff5c 'en' \uff5c (string & {}) = 'de';\n\n  setLocale(event: Event) {\n    const { detail } = event as CustomEvent<string>;\n\n    this.locale = detail;\n  }\n}\n\n")))}p.isMDXComponent=!0}}]);