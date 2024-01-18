"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95946],{95946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7896),o=(t(2784),t(30876));const r={},d=void 0,i={unversionedId:"auto-generated/previews/react/date-dropdown-user-range",id:"auto-generated/previews/react/date-dropdown-user-range",title:"date-dropdown-user-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/date-dropdown-user-range.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/date-dropdown-user-range",permalink:"/version-dev/docs/auto-generated/previews/react/date-dropdown-user-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/date-dropdown-user-range.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { DateDropdownOption } from '@siemens/ix';\nimport { IxDateDropdown } from '@siemens/ix-react';\nimport React from 'react';\n\nconst today = new Date().toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst lastSevenDays = new Date(\n  new Date().getTime() - 7 * 24 * 60 * 60 * 1000\n).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst dateRangeOptions: DateDropdownOption[] = [\n  {\n    id: 'last-7',\n    label: 'Last 7 days',\n    from: lastSevenDays,\n    to: today,\n  },\n  {\n    id: 'today',\n    label: 'Today',\n    from: today,\n    to: today,\n  },\n];\n\nexport default () => {\n  return (\n    <IxDateDropdown\n      dateRangeOptions={dateRangeOptions}\n      date-range-id=\"last-7\"\n      format=\"LL/dd/yyyy\"\n    />\n  );\n};\n\n")))}u.isMDXComponent=!0}}]);