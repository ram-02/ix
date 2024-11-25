"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94368],{94387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var a=n(52983),o=n(78364),i=n(13606),s=n(53002),l=n(21265),r=n(78716),c=n(93054),d=n(14092),u=n(38518);const m={backToTopButton:"backToTopButton__2Hq",backToTopButtonShow:"backToTopButtonShow_vtep"};var h=n(97458);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(75447),x=n(33729),f=n(97592),g=n(16049),j=n(88507),v=n(7528),k=n(2476),C=n(20012);function _(e){let{logo:t,alt:n,imageClassName:a}=e;const o={light:(0,v.Z)(t.src),dark:(0,v.Z)(t.srcDark||t.src)},i=(0,h.jsx)(C.Z,{className:t.className,sources:o,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,h.jsx)("div",{className:a,children:i}):i}function S(e){const{siteConfig:{title:t}}=(0,k.Z)(),{navbar:{title:n,logo:a}}=(0,g.L)(),{imageClassName:o,titleClassName:i,...s}=e,l=(0,v.Z)(a?.href||"/"),r=n?"":t,c=a?.alt??r;return(0,h.jsxs)(j.Z,{to:l,...s,...a?.target&&{target:a.target},children:[a&&(0,h.jsx)(_,{logo:a,alt:c,imageClassName:o}),null!=n&&(0,h.jsx)("b",{className:i,children:n})]})}function I(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const N={collapseSidebarButton:"collapseSidebarButton_HzrF",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_dsdp"};function Z(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",N.collapseSidebarButton),onClick:t,children:(0,h.jsx)(I,{className:N.collapseSidebarButtonIcon})})}var T=n(11156),B=n(92797);const y=Symbol("EmptyContext"),w=a.createContext(y);function L(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,h.jsx)(w.Provider,{value:i,children:t})}var A=n(14517),H=n(62832),E=n(16773),R=n(97787),M=n(90466);function F(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function W(e){let{item:t,onItemClick:n,activePath:o,level:i,index:r,...c}=e;const{items:d,label:u,collapsible:m,className:b,href:p}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,g.L)(),f=function(e){const t=(0,R.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),v=(0,l._F)(t,o),k=(0,E.Mg)(p,o),{collapsed:C,setCollapsed:_}=(0,H.u)({initialState:()=>!!m&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(w);if(e===y)throw new B.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!C),I(e?null:r),_(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,B.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:v,collapsed:C,updateCollapsed:N}),(0,a.useEffect)((()=>{m&&null!=S&&S!==r&&x&&_(!0)}),[m,S,r,_,x]),(0,h.jsxs)("li",{className:(0,A.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},b),children:[(0,h.jsxs)("div",{className:(0,A.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,h.jsxs)(j.Z,{className:(0,A.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":v}),onClick:m?e=>{n?.(t),p?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":m?!C:void 0,href:m?f??"#":f,...c,children:[C?(0,h.jsx)(M.RI,{name:"chevron-right-small"}):(0,h.jsx)(M.RI,{name:"chevron-down-small"}),u]}),p&&m&&(0,h.jsx)(F,{collapsed:C,categoryLabel:u,onClick:e=>{e.preventDefault(),N()}})]}),(0,h.jsx)(H.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,h.jsx)(J,{items:d,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:i+1})})]})}var D=n(63635),P=n(94132);const V={menuExternalLink:"menuExternalLink_AYZ2"};function z(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:b}=t,p=(0,l._F)(t,a),x=(0,D.Z)(d);return(0,h.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,h.jsxs)(j.Z,{className:(0,o.Z)("menu__link",!x&&V.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,h.jsx)(P.Z,{})]})},u)}const U={menuHtmlItem:"menuHtmlItem_atqB"};function Y(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,h.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[U.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function q(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(W,{item:t,...n});case"html":return(0,h.jsx)(Y,{item:t,...n});default:return(0,h.jsx)(z,{item:t,...n})}}function G(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,h.jsx)(L,{children:a.map(((e,t)=>(0,h.jsx)(q,{item:e,index:t,...n},t)))})}const J=(0,a.memo)(G),K={menu:"menu_CtwH",menuWithAnnouncementBar:"menuWithAnnouncementBar_VVLF"};function O(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",K.menu,l&&K.menuWithAnnouncementBar,i),children:(0,h.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(J,{items:n,activePath:t,level:1})})})}const Q="sidebar_wb_w",X="sidebarWithHideableNavbar_Z3gs",$="sidebarHidden_GCHR",ee="sidebarLogo_BJUO";function te(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,g.L)();return(0,h.jsxs)("div",{className:(0,o.Z)(Q,s&&X,i&&$),children:[s&&(0,h.jsx)(S,{tabIndex:-1,className:ee}),(0,h.jsx)(O,{path:t,sidebar:n}),l&&(0,h.jsx)(Z,{onClick:a})]})}const ne=a.memo(te);var ae=n(84176),oe=n(31912);const ie=e=>{let{sidebar:t,path:n}=e;const a=(0,oe.e)();return(0,h.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(J,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function se(e){return(0,h.jsx)(ae.Zo,{component:ie,props:e})}const le=a.memo(se);function re(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(ne,{...e}),a&&(0,h.jsx)(le,{...e})]})}const ce={expandButton:"expandButton_ksKn",expandButtonIcon:"expandButtonIcon_v4Fl"};function de(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:ce.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(I,{className:ce.expandButtonIcon})})}const ue={docSidebarContainer:"docSidebarContainer_Cb_d",docSidebarContainerHidden:"docSidebarContainerHidden_DhJd",sidebarViewport:"sidebarViewport_vxr8"};function me(e){let{children:t}=e;const n=(0,r.V)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.n)()&&c(!0),i((e=>!e))}),[i,r]);return(0,h.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&c(!0)},children:(0,h.jsx)(me,{children:(0,h.jsxs)("div",{className:(0,o.Z)(ue.sidebarViewport,r&&ue.sidebarViewportHidden),children:[(0,h.jsx)(re,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,h.jsx)(de,{toggleSidebar:d})]})})})}const be={docMainContainer:"docMainContainer_eZ8y",docMainContainerEnhanced:"docMainContainerEnhanced_b7nH",docItemWrapperEnhanced:"docItemWrapperEnhanced_o9oS"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.V)();return(0,h.jsx)("main",{className:(0,o.Z)(be.docMainContainer,(t||!a)&&be.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced),children:n})})}const xe={docRoot:"docRoot_hzdt",docsWrapper:"docsWrapper_xVuI"};function fe(e){let{children:t}=e;const n=(0,r.V)(),[o,i]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:xe.docsWrapper,children:[(0,h.jsx)(b,{}),(0,h.jsxs)("div",{className:xe.docRoot,children:[n&&(0,h.jsx)(he,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,h.jsx)(pe,{hiddenSidebarContainer:o,children:t})]})]})}var ge=n(24003);function je(e){const t=(0,l.SN)(e);if(!t)return(0,h.jsx)(ge.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,h.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,h.jsx)(r.b,{name:a,items:c,children:(0,h.jsx)(fe,{children:n})})})}},24003:(e,t,n)=>{n.d(t,{Z:()=>l});n(52983);var a=n(78364),o=n(93054),i=n(30659),s=n(97458);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);