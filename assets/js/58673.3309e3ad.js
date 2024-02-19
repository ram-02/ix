"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58673],{15565:(n,l,i)=>{i.r(l),i.d(l,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>x});var e=i(7896),t=(i(2784),i(30876));const o={},r=void 0,a={unversionedId:"auto-generated/previews/react/pill-variants",id:"auto-generated/previews/react/pill-variants",title:"pill-variants",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/pill-variants.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/pill-variants",permalink:"/docs/auto-generated/previews/react/pill-variants",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/pill-variants.md",tags:[],version:"current",frontMatter:{}},s={},x=[],I={toc:x};function c(n){let{components:l,...i}=n;return(0,t.kt)("wrapper",(0,e.Z)({},I,i,{components:l,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxCol, IxLayoutGrid, IxPill, IxRow } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport default () => {\n  const styled: CSSProperties = {\n    minWidth: \'7rem\',\n  };\n\n  return (\n    <>\n      <IxLayoutGrid>\n        <IxRow>\n          <IxCol>\n            <IxPill variant="primary" icon="info" style={styled}>\n              Primary\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="primary" icon="info" outline style={styled}>\n              Primary\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill variant="alarm" icon="info" style={styled}>\n              Alarm\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="alarm" icon="info" outline style={styled}>\n              Alarm\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill variant="critical" icon="info" style={styled}>\n              Critical\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="critical" icon="info" outline style={styled}>\n              Critical\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill variant="warning" icon="info" style={styled}>\n              Warning\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="warning" icon="info" outline style={styled}>\n              Warning\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill variant="success" icon="info" style={styled}>\n              Success\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="success" icon="info" outline style={styled}>\n              Success\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill variant="info" icon="info" style={styled}>\n              Info\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="info" icon="info" outline style={styled}>\n              Info\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill variant="neutral" icon="info" style={styled}>\n              Neutral\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill variant="neutral" icon="info" outline style={styled}>\n              Neutral\n            </IxPill>\n          </IxCol>\n        </IxRow>\n\n        <IxRow>\n          <IxCol>\n            <IxPill\n              variant="custom"\n              color="color-soft-text"\n              background="purple"\n              icon=\'info\'\n              style={styled}\n            >\n              Custom\n            </IxPill>\n          </IxCol>\n          <IxCol>\n            <IxPill\n              variant="custom"\n              color="color-soft-text"\n              background="purple"\n              icon=\'info\'\n              outline\n              style={styled}\n            >\n              Custom\n            </IxPill>\n          </IxCol>\n        </IxRow>\n      </IxLayoutGrid>\n    </>\n  );\n};\n\n')))}c.isMDXComponent=!0}}]);