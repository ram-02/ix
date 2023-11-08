"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1879],{1879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7896),i=(t(2784),t(30876));const o={},r=void 0,s={unversionedId:"auto-generated/previews/react/validation",id:"auto-generated/previews/react/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/validation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/validation",permalink:"/version-dev/docs/auto-generated/previews/react/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/validation.md",tags:[],version:"current",frontMatter:{}},d={},l=[],u={toc:l};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/*\n * COPYRIGHT (c) Siemens AG\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport {\n  IxButton,\n  IxCol,\n  IxLayoutGrid,\n  IxRow,\n  IxValidationTooltip,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\nimport { useForm } from \'react-hook-form\';\n\nexport default () => {\n  const { register, handleSubmit, formState } = useForm({\n    defaultValues: {\n      firstName: undefined,\n      lastName: undefined,\n      userName: undefined,\n    },\n    shouldFocusError: false,\n    shouldUseNativeValidation: true,\n  });\n\n  const onSubmit = (data: any) => {\n    console.log(data);\n  };\n\n  return (\n    <>\n      <form\n        className={`needs-validation ${\n          formState.isSubmitted ? \'was-validated\' : \'\'\n        }`}\n        noValidate\n        onSubmit={handleSubmit(onSubmit)}\n      >\n        <IxLayoutGrid>\n          <IxRow>\n            <IxCol size="4">\n              <label htmlFor="validationCustom01">First name</label>\n              <input\n                type="text"\n                className={`${formState.errors.firstName ? \'is-invalid\' : \'\'}`}\n                id="validationCustom01"\n                {...register(\'firstName\', {\n                  required: true,\n                })}\n              />\n              <div className="invalid-feedback">\n                Please choose a first name.\n              </div>\n              <div className="valid-feedback">Looks good!</div>\n            </IxCol>\n          </IxRow>\n\n          <IxRow>\n            <IxCol size="4">\n              <label htmlFor="validationCustomUsername">Username</label>\n              <input\n                type="text"\n                className={`${formState.errors.userName ? \'is-invalid\' : \'\'}`}\n                id="validationCustomUsername"\n                aria-describedby="inputGroupPrepend"\n                {...register(\'userName\', {\n                  required: true,\n                })}\n              />\n              <div className="invalid-feedback">Please choose a username.</div>\n            </IxCol>\n          </IxRow>\n\n          <IxRow>\n            <IxCol size="4">\n              <IxValidationTooltip message="Error hint text">\n                <label htmlFor="validationCustom02">Last name</label>\n                <input\n                  type="text"\n                  className={`${formState.errors.lastName ? \'is-invalid\' : \'\'}`}\n                  id="validationCustom02"\n                  {...register(\'lastName\', {\n                    required: true,\n                  })}\n                />\n              </IxValidationTooltip>\n            </IxCol>\n          </IxRow>\n\n          <IxRow>\n            <IxCol>\n              <IxButton type="submit">Submit form</IxButton>\n            </IxCol>\n          </IxRow>\n        </IxLayoutGrid>\n      </form>\n    </>\n  );\n};\n\n')))}m.isMDXComponent=!0}}]);