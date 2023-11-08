"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22761],{22761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7896),r=(t(2784),t(30876));const a={},i=void 0,s={unversionedId:"auto-generated/previews/react/loading",id:"auto-generated/previews/react/loading",title:"loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/loading.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/loading",permalink:"/version-dev/docs/auto-generated/previews/react/loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/loading.md",tags:[],version:"current",frontMatter:{}},d={},c=[],u={toc:c};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { showModalLoading } from '@siemens/ix';\nimport { IxButton } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  const startLoading = () => {\n    let count = 0;\n    const progress = showModalLoading('Loading 0/2');\n    const interval = setInterval(() => {\n      count++;\n      progress.update(`Loading ${count}/2`);\n\n      if (count === 2) {\n        progress.finish('Done');\n        clearInterval(interval);\n      }\n    }, 1000);\n  };\n  return <IxButton onClick={() => startLoading()}>Show loading</IxButton>;\n};\n\n")))}l.isMDXComponent=!0}}]);