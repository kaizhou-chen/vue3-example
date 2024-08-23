import S from"./QuestionLayout.Bw7Ucaas.2024-08-23_0855.js";import b from"./TextareaEditor.Ccd2Kzpe.2024-08-23_0855.js";import{d as A,b as f,k as z,j as N,n as R,ai as T,o as r,M as g,O as q,U as k,u as i,D,R as E,c as u,F as w,a8 as x,J as F,a as s,T as y,az as L,aA as M,S as U}from"./@vue.BRKSBXdb.2024-08-23_0855.js";import{_ as O}from"./plugin-vueexport-helper.DlAUqK2U.2024-08-23_0855.js";import"./monaco-editor.D9jPo4jf.2024-08-23_0855.js";import"./lodash-es.DvWjmQkM.2024-08-23_0855.js";import"./VCodeHighlight.CYrFvslQ.2024-08-23_0855.js";import"./highlight.js.BSCzCgwG.2024-08-23_0855.js";import"./call-bind.DAUNaQ65.2024-08-23_0855.js";import"./get-intrinsic.DB0lrOCt.2024-08-23_0855.js";import"./es-errors.DzOT6E3C.2024-08-23_0855.js";import"./has-symbols.eVqrYdw7.2024-08-23_0855.js";import"./has-proto.JnoBQRdH.2024-08-23_0855.js";import"./function-bind.BbkWVFrm.2024-08-23_0855.js";import"./hasown.D9QVQHSI.2024-08-23_0855.js";import"./set-function-length.D_FcvHgY.2024-08-23_0855.js";import"./define-data-property.DjNWBd2S.2024-08-23_0855.js";import"./es-define-property.CFiic7Xl.2024-08-23_0855.js";import"./gopd.BJopahKq.2024-08-23_0855.js";import"./has-property-descriptors.PcPi-1-h.2024-08-23_0855.js";const I=m=>(L("data-v-19ff0a21"),m=m(),M(),m),P=I(()=>s("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 创建一个 n 行 m 列的漩涡型数组 ",-1)),Q=I(()=>s("ul",null,[U(" 解题思路 "),s("li",null,"创建 n * m 的二维数组，用 0 填充"),s("li",null,"开始一个无限循环，每次移动一格"),s("li",null,"如果下一格的值是 0，则 count++ ，并赋值"),s("li",null,"如果下一格的值不是 0，则调整移动方向"),s("li",null,"如果每一格都不是 0，则结束循环")],-1)),$={class:"row"},G={key:2},H=A({__name:"Vortex",setup(m){const d=f("vortex(4, 4);"),V=f(`function vortex(n, m) {
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
}`),_=f(),t=f([]),B=z(()=>t.value.length>0?t.value.length*t.value[0].length:0);N(()=>{const e=j(4,4);h(e)});function J(e){return`rgba(64, 158, 255, ${e/B.value})`}async function h(e){t.value=e,await R(),e.length>0&&_.value.style.setProperty("--size",e[0].length)}function j(e,p){const o=new Array(e).fill(0).map(()=>new Array(p).fill(0));let n=0,a=0,C=1,l=0,c=1;function v(){return!o[n+l]||o[n+l][a+c]!==0}for(;o[n][a]=C++,!(v()&&(l===0?(l=c,c=0):(c=-l,l=0),v()));)n+=l,a+=c;return o}return(e,p)=>{const o=T("el-divider");return r(),g(S,{question:i(d),answer:i(V),"show-result":!1,onChange:h},{default:q(()=>[P,k(b,{modelValue:i(d),"onUpdate:modelValue":p[0]||(p[0]=n=>D(d)?d.value=n:null),rows:1},null,8,["modelValue"]),k(o),Q,i(t).length>0?(r(),g(o,{key:0})):E("",!0),i(t).length<=10?(r(),u("div",{key:1,ref_key:"divRef",ref:_},[(r(!0),u(w,null,x(i(t),n=>(r(),u("div",$,[(r(!0),u(w,null,x(n,a=>(r(),u("div",{style:F({"background-color":J(a)})},[s("span",null,y(a),1)],4))),256))]))),256))],512)):(r(),u("div",G,y(i(t)),1))]),_:1},8,["question","answer"])}}}),_e=O(H,[["__scopeId","data-v-19ff0a21"]]);export{_e as default};
