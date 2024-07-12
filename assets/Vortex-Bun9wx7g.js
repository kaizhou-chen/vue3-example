import k from"./QuestionLayout-Bnp_S_uH.js";import I from"./TextareaEditor-CUcaWdXI.js";import{d as C,r as l,c as V,a as B,o as t,b as m,w as J,e as S,u as s,l as b,K as j,I as o,L as f,M as _,Q as q,X as v,Y as h,n as z,C as L,D as N}from"./index-D6tOstyB.js";import{_ as R}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-DO0YDudZ.js";const A=r=>(L("data-v-6978a9c6"),r=r(),N(),r),D=A(()=>v("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 创建一个 n 行 m 列的漩涡型数组 ",-1)),E={class:"row"},Q={key:2},T=C({__name:"Vortex",setup(r){const c=l(),e=l([]),g=V(()=>e.value.length>0?e.value.length*e.value[0].length:0);function w(n){return`rgba(64, 158, 255, ${n/g.value})`}async function x(n){e.value=n,await z(),n.length>0&&c.value.style.setProperty("--size",n[0].length)}const a=l("vortex(4, 4);"),y=l(`function vortex(n, m) {
  // 创建二维数组，用 0 填充
  const nums = new Array(n).fill(0).map(() => {
    return new Array(m).fill(0)
  })

  let i = 0; // row index
  let j = 0; // column index
  let count = 1;

  let stepI = 0; // i 的变化，纵向移动
  let stepJ = 1; // j 的变化，横向移动

  // 如果下一格的数字不是 0，则表示到达边缘
  function _hasBlock() {
    return !nums[i + stepI] || nums[i + stepI][j + stepJ] !== 0;
  }

  while(1) {
    nums[i][j] = count++;
    if (_hasBlock()) {    // 到达边缘
      if (stepI === 0) {  // 如果是横向移动，则变为纵向移动
        stepI = stepJ
        stepJ = 0
      } else {            // 如果是纵向移动，则变为横向移动
        stepJ = -stepI
        stepI = 0
      }

      // 如果变换移动方向后，依然到达边缘，则表示所有数字都不是 0，则结束
      if (_hasBlock()) {
        break;
      }
    }

    i += stepI;
    j += stepJ;
  }

  return nums;
}`);return(n,i)=>{const p=B("el-divider");return t(),m(k,{question:s(a),answer:s(y),"run-immediate":!0,"show-result":!1,onChange:x},{default:J(()=>[D,S(I,{modelValue:s(a),"onUpdate:modelValue":i[0]||(i[0]=u=>b(a)?a.value=u:null),rows:1},null,8,["modelValue"]),s(e).length>0?(t(),m(p,{key:0})):j("",!0),s(e).length<=10?(t(),o("div",{key:1,ref_key:"divRef",ref:c},[(t(!0),o(f,null,_(s(e),u=>(t(),o("div",E,[(t(!0),o(f,null,_(u,d=>(t(),o("div",{style:q({"background-color":w(d)})},[v("span",null,h(d),1)],4))),256))]))),256))],512)):(t(),o("div",Q,h(s(e)),1))]),_:1},8,["question","answer"])}}}),X=R(T,[["__scopeId","data-v-6978a9c6"]]);export{X as default};
