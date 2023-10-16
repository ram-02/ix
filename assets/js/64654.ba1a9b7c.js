"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64654],{64654:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=e(7896),a=(e(2784),e(30876));const s={},r=void 0,i={unversionedId:"auto-generated/previews/react/button-loading",id:"auto-generated/previews/react/button-loading",title:"button-loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/button-loading.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/button-loading",permalink:"/docs/auto-generated/previews/react/button-loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/button-loading.md",tags:[],version:"current",frontMatter:{}},u={},l=[],g={toc:l};function c(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxIconButton } from \'@siemens/ix-react\';\nimport React, { useState } from \'react\';\n\nexport default () => {\n  const [toggle, setToggle] = useState(false);\n  const [toggle2, setToggle2] = useState(false);\n  const [toggle3, setToggle3] = useState(false);\n  return (\n    <>\n      <IxButton\n        onClick={() => {\n          setToggle(true);\n          setTimeout(() => {\n            setToggle(false);\n          }, 2500);\n        }}\n        loading={toggle}\n        class="m-1"\n        outline\n        variant="primary"\n      >\n        Button\n      </IxButton>\n\n      <IxButton\n        onClick={() => {\n          setToggle2(true);\n          setTimeout(() => {\n            setToggle2(false);\n          }, 2500);\n        }}\n        loading={toggle2}\n        class="m-1"\n        outline\n        icon="star"\n        variant="primary"\n      >\n        Button\n      </IxButton>\n\n      <IxButton\n        onClick={() => {\n          setToggle3(true);\n          setTimeout(() => {\n            setToggle3(false);\n          }, 2500);\n        }}\n        loading={toggle3}\n        class="m-1"\n        outline\n        icon="star"\n        variant="primary"\n      ></IxButton>\n\n      <IxIconButton\n        onClick={() => {\n          setToggle(true);\n          setTimeout(() => {\n            setToggle(false);\n          }, 2500);\n        }}\n        loading={toggle}\n        class="m-1"\n        outline\n        icon="star"\n        variant="primary"\n      ></IxIconButton>\n      <IxButton loading class="m-1" outline variant="primary">\n        Button\n      </IxButton>\n      <IxIconButton\n        loading\n        class="m-1"\n        outline\n        variant="primary"\n      ></IxIconButton>\n    </>\n  );\n};\n')))}c.isMDXComponent=!0}}]);