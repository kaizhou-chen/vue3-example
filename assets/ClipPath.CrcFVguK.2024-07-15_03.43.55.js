import{g as n}from"./commonUtils.B_nDf0jC.2024-07-15_03.43.55.js";import u from"./KeyPoint.C322fBlc.2024-07-15_03.43.55.js";import{d as w,r as y,$ as P,a0 as C,a as x,o as m,I as v,X as e,e as o,w as c,Q as i,u as r,L as f,M as B,Y as I,Z as L,b as S,ag as j,C as M,D as z}from"./index.ZB1ftQx1.2024-07-15_03.43.55.js";import{_ as E}from"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.43.55.js";import"./VCodeHighlight.DTalzKSo.2024-07-15_03.43.55.js";const s=d=>(M("data-v-8b2a2b81"),d=d(),z(),d),F={class:"container"},N=s(()=>e("div",null,"裁剪圆形",-1)),R={class:"show-case"},Y={class:"how-to"},V=s(()=>e("div",{class:"layer",style:{"background-color":"rgba(0, 0, 0, 0.5)","--y":"75px","--scale":"0.8"}},null,-1)),$=s(()=>e("p",null,"裁剪区域设置背景，放在顶部，z-index 最大",-1)),D=s(()=>e("p",null,"通过修改半径大小，达到动画效果",-1)),T=s(()=>e("div",null,"跟随鼠标移动",-1)),X={class:"container list"},q={class:"content"},A={style:{"text-align":"right","margin-top":"20px"}},H=s(()=>e("div",null,"滚动切换文字背景",-1)),K={class:"section-box"},Q=s(()=>e("div",{class:"title"},"Forest",-1)),U=s(()=>e("div",{style:{height:"900px"}},null,-1)),Z=w({__name:"ClipPath",setup(d){const b=["London","Paris","New York","Rome"],g=y();y(!1);function k(l){requestAnimationFrame(()=>{const a=l.target,t=a.getBoundingClientRect(),_=l.clientX-t.left,p=l.clientY-t.top;a.style.setProperty("--x",_+"px"),a.style.setProperty("--y",p+"px")})}function h(l){let t=(window.scrollY-document.documentElement.clientHeight)*2;t=t>32?t:0,g.value.style.clipPath=`circle(${t}px at left center)`}return P(()=>{document.addEventListener("scroll",h)}),C(()=>{document.removeEventListener("scroll",h)}),(l,a)=>{const t=x("el-card"),_=x("el-text");return m(),v(f,null,[e("div",F,[o(t,{class:"show-case-card"},{header:c(()=>[N]),default:c(()=>[o(u,{title:" ",notes:[{code:"clip-path: circle(80px at center center);",desc:" ",lang:"css"},{code:"裁剪成圆形，circle：{半径} at 圆心{x y}",desc:"",lang:"css"}]}),e("div",R,[e("div",{class:"sample",style:i({"--image":"url("+r(n)("/images/06.jpg")+")"})},null,4),e("div",Y,[e("div",{class:"layer",style:i({"background-image":"url("+r(n)("/images/06.jpg")+")","--y":"130px","--scale":"0.7"})},null,4),V,e("div",{class:"layer",style:i({"background-image":"url("+r(n)("/images/06.jpg")+")","--y":"0","--scale":"1"})},null,4)])]),$,D]),_:1}),o(t,null,{header:c(()=>[T]),default:c(()=>[o(u,{title:" ",notes:[{code:"clip-path: circle(80px at 0px 0px);",desc:"修改圆心的坐标",lang:"css"},{code:"clip-path: circle(80px at 20px 30px);",desc:"",lang:"css"}]}),e("div",X,[(m(),v(f,null,B(4,p=>e("div",{onMousemove:k,class:"item",style:i({"--image":"url("+r(n)(`/images/0${p}.jpg`)+")"})},[e("div",q,I(b[p-1]),1)],36)),64))])]),_:1})]),e("div",A,[o(_,{type:"primary",style:{"font-size":"18px"}},{default:c(()=>[L("↓ 向下滚动，查看其他 demo ↓")]),_:1})]),(m(),S(j,{to:"body"},[o(t,{class:"scroll-card"},{header:c(()=>[H]),default:c(()=>[o(u,{title:" ",notes:[{code:"clip-path: circle(0px at left center)",desc:"监听页面滚动，修改圆的半径",lang:"css"},{code:"clip-path: circle(500px at left center)",desc:"",lang:"css"}]}),e("div",K,[Q,e("div",{class:"section",ref_key:"sectionRef",ref:g},[e("div",{class:"inner-title",style:i({"background-image":"url("+r(n)("/images/04.jpg")+")"})},"Forest",4)],512)])]),_:1}),U]))],64)}}}),te=E(Z,[["__scopeId","data-v-8b2a2b81"]]);export{te as default};
