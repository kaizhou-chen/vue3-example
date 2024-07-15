import d from"./KeyPoint-BIJP3E-W.js";import{d as p,r as l,a as f,o as h,I as b,e,w as s,X as o,u as c,C as x,D as y}from"./index-D-j_Yy59.js";import{_ as m}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-Dt-0rB3p.js";const t=a=>(x("data-v-2b2864de"),a=a(),y(),a),g={class:"container"},k=t(()=>o("div",null,"flex 布局 - 左右分区",-1)),C={class:"card-body"},F=t(()=>o("div",{class:"box box-1-2"},[o("div",{style:{"background-color":"#409EFF"}}),o("div",{style:{"background-color":"#67C23A"}}),o("div",{style:{"background-color":"#E6A23C"}})],-1)),E=t(()=>o("div",null,"flex 布局 - 填满剩余空间",-1)),A={class:"card-body"},I=t(()=>o("div",{class:"box box-1-3"},[o("div",{style:{"background-color":"#409EFF"}}),o("div",{style:{"background-color":"#67C23A"}})],-1)),w=t(()=>o("div",null,"flex 布局 - 多栏",-1)),B={class:"card-body"},L=t(()=>o("div",{class:"box box-1-4"},[o("div",{style:{"background-color":"#409EFF"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),o("div",{style:{"background-color":"#67C23A"}}),o("div",{style:{"background-color":"#E6A23C"}})],-1)),S=t(()=>o("div",null,"flex 布局 - 居中对齐",-1)),N={class:"card-body"},V=t(()=>o("div",{class:"box box-1-1"},[o("span",null,"居中对齐")],-1)),j=t(()=>o("div",null,"绝对定位 - 居中对齐",-1)),D={class:"card-body"},K=t(()=>o("div",{class:"box box-2"},[o("div",null,"居中对齐")],-1)),P=p({__name:"FlexLayout",setup(a){const i=l([{code:`position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);`,desc:""}]),_=l([{code:`display: flex;
justify-content: center;
align-items: center;`,desc:""}]),r=l([{code:`.container {
  display: flex;

  > div:last-child {
    /* 最后一个元素，右对齐 */
    margin-left: auto;
  }
}`,desc:""}]),u=l([{code:`.container {
  display: flex;
  
  > div:last-child {
    /* 最后一个元素，填满剩余空间 */
    flex: 1;
  }
}`,desc:""}]),v=l([{code:`.container {
  display: flex;
  
  > div {
    /* 所有子元素，平分宽度 */
    flex: 1;
  }
}`,desc:""}]);return(X,q)=>{const n=f("el-card");return h(),b("div",g,[e(n,null,{header:s(()=>[k]),default:s(()=>[o("div",C,[F,e(d,{notes:c(r),class:"note"},null,8,["notes"])])]),_:1}),e(n,null,{header:s(()=>[E]),default:s(()=>[o("div",A,[I,e(d,{notes:c(u),class:"note"},null,8,["notes"])])]),_:1}),e(n,null,{header:s(()=>[w]),default:s(()=>[o("div",B,[L,e(d,{notes:c(v),class:"note"},null,8,["notes"])])]),_:1}),e(n,null,{header:s(()=>[S]),default:s(()=>[o("div",N,[V,e(d,{notes:c(_),class:"note"},null,8,["notes"])])]),_:1}),e(n,null,{header:s(()=>[j]),default:s(()=>[o("div",D,[K,e(d,{notes:c(i),class:"note"},null,8,["notes"])])]),_:1})])}}}),M=m(P,[["__scopeId","data-v-2b2864de"]]);export{M as default};
