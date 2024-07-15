import{d as b,r as h,a as n,o as t,b as c,w as e,u as a,N as w,K as v,X as f,Y as B,I as g,M as C,L as k,j as L,Z as S,g as A,c as G,e as s,_ as P,J as Z,Q as j,C as z,D as F}from"./index-D-j_Yy59.js";import{u as O,a as D}from"./main-D2Rn1tdF.js";import{_ as J}from"./plugin-vueexport-helper-DlAUqK2U.js";const Q="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='512px'%20height='512px'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath%20style='opacity:0.989'%20fill='%23000000'%20d='M%200.5,-0.5%20C%2041.8333,-0.5%2083.1667,-0.5%20124.5,-0.5C%20186.853,166.048%20248.52,332.881%20309.5,500C%20308.576,504.006%20307.243,507.839%20305.5,511.5C%20272.167,511.5%20238.833,511.5%20205.5,511.5C%20136.773,340.986%2068.44,170.319%200.5,-0.5%20Z'/%3e%3c/g%3e%3cg%3e%3cpath%20style='opacity:0.986'%20fill='%23000000'%20d='M%20388.5,-0.5%20C%20429.167,-0.5%20469.833,-0.5%20510.5,-0.5C%20455.97,136.584%20401.137,273.584%20346,410.5C%20327.293,361.743%20309.126,312.743%20291.5,263.5C%20323.851,175.473%20356.184,87.4734%20388.5,-0.5%20Z'/%3e%3c/g%3e%3cg%3e%3cpath%20style='opacity:0.936'%20fill='%23000000'%20d='M%20279.5,294.5%20C%20281.117,296.121%20282.284,298.121%20283,300.5C%20299.667,345.833%20316.333,391.167%20333,436.5C%20333.667,438.5%20333.667,440.5%20333,442.5C%20329.61,451.614%20325.943,460.614%20322,469.5C%20303.95,422.689%20286.283,375.689%20269,328.5C%20268.333,326.833%20268.333,325.167%20269,323.5C%20272.514,313.812%20276.014,304.146%20279.5,294.5%20Z'/%3e%3c/g%3e%3c/svg%3e",U=b({__name:"MenuItem",props:{item:Object},setup(i){const u=i;let l=h(""),r=h(""),o=u.item;return l.value=o.children?"el-sub-menu":"el-menu-item",r.value=o.url?o.url:o.text,(d,p)=>{const _=n("el-icon"),x=n("menu-item",!0);return t(),c(w(a(l)),{index:a(r)},{title:e(()=>[a(o).icon?(t(),c(_,{key:0},{default:e(()=>[(t(),c(w(a(o).icon)))]),_:1})):v("",!0),f("span",null,B(a(o).text),1)]),default:e(()=>[(t(!0),g(k,null,C(a(o).children,(y,m)=>(t(),c(x,{key:m,item:y},null,8,["item"]))),128))]),_:1},8,["index"])}}}),Y=[{text:"Dashboard",icon:"HomeFilled",url:"/"},{text:"表单页",icon:"Edit",children:[{text:"基础表单",url:"/form/create"},{text:"多步骤表单",url:"/form/steps"}]},{text:"表格页",icon:"Grid",children:[{text:"基础表格",url:"/table/basic"},{text:"表格 + pinia",url:"/table/pinia"},{text:"可编辑表格",url:"/table/editable"}]},{text:"笔记",icon:"Document",children:[{text:"CSS 笔记",url:"/notes/css"},{text:"小工具",children:[{text:"JSON 格式化",url:"/notes/json-format"},{text:"正则表达式 预览",url:"/notes/regex-preview"}]}]}],q=b({__name:"LayoutMenu",props:{collapse:Boolean},setup(i){let u=h(Y);return(l,r)=>{const o=n("el-menu");return t(),c(o,{"default-active":l.$route.path,"unique-opened":!0,collapse:i.collapse,router:""},{default:e(()=>[(t(!0),g(k,null,C(a(u),(d,p)=>(t(),c(U,{item:d,key:p},null,8,["item"]))),128))]),_:1},8,["default-active","collapse"])}}}),H=b({__name:"LayoutBreadcrumb",setup(i){O();const u=D();let l=h([]);L(u,(o,d)=>{r()},{immediate:!0});function r(){let o=u.matched.filter(d=>d.meta&&d.meta.title);l.value=o}return(o,d)=>{const p=n("el-breadcrumb-item"),_=n("el-breadcrumb");return t(),c(_,{separator:"/"},{default:e(()=>[(t(!0),g(k,null,C(a(l),x=>(t(),c(p,{key:x.path},{default:e(()=>[S(B(x.meta.title),1)]),_:2},1024))),128))]),_:1})}}}),K=i=>(z("data-v-c687bffb"),i=i(),F(),i),W={style:{display:"flex"}},X={style:{display:"inline-flex"}},ee=K(()=>f("img",{src:Q,style:{width:"45px",height:"45px"}},null,-1)),te={key:0,class:"logo-text"},oe={style:{"align-self":"center"}},ne={key:0,class:"ux-main",style:{width:"100%"}},le=b({__name:"MainLayout",setup(i){const u=D(),l=h(!1),r=h("div");A({color:"rgba(0, 0, 0, .15)"});const o=G(()=>r.value==="div"?"inline":"block");function d(){l.value=!l.value}L(()=>u.path,_=>{u.meta.plain?r.value="div":r.value="el-card"},{immediate:!0});function p(){window.open("https://kaizhou-chen.github.io/docsify-blog/")}return(_,x)=>{const y=n("el-header"),m=n("el-container"),M=n("el-button"),I=n("el-scrollbar"),N=n("ArrowLeftBold"),V=n("ArrowRightBold"),R=n("el-icon"),T=n("el-aside"),$=n("router-view"),E=n("el-main");return t(),c(m,{class:"fixed-layout"},{default:e(()=>[s(y,{class:"ux-head"},{default:e(()=>[f("div",W,[f("div",X,[ee,a(l)?v("",!0):(t(),g("div",te,"Vue 3 Example"))]),s(m,null,{default:e(()=>[s(y,{style:{height:"auto",padding:"20px"}},{default:e(()=>[s(H)]),_:1})]),_:1}),f("div",oe,[s(M,{type:"primary",round:"",onClick:p},{default:e(()=>[S("我的博客")]),_:1})])])]),_:1}),s(m,null,{default:e(()=>[s(T,{class:"ux-side"},{default:e(()=>[s(P,{name:"fade",mode:"out-in",appear:""},{default:e(()=>[s(I,null,{default:e(()=>[s(q,{class:"ux-menu",collapse:a(l)},null,8,["collapse"])]),_:1})]),_:1}),f("div",{class:"toggle-button",onClick:d},[s(R,null,{default:e(()=>[a(l)?v("",!0):(t(),c(N,{key:0})),a(l)?(t(),c(V,{key:1})):v("",!0)]),_:1})])]),_:1}),s(m,{class:"ux-center"},{default:e(()=>[_.$slots.error?(t(),g("div",ne,[Z(_.$slots,"error",{},void 0,!0)])):(t(),c(E,{key:1,class:"ux-main"},{default:e(()=>[(t(),c(w(a(r)),{style:j([{"min-height":"calc(100% - 2px)"},{display:a(o)}])},{default:e(()=>[s($)]),_:1},8,["style"]))]),_:1}))]),_:3})]),_:3})]),_:3})}}}),re=J(le,[["__scopeId","data-v-c687bffb"]]);export{re as default};
