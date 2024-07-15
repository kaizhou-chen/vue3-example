import{Q as j}from"./QuestionLayout.DGdBdR0c.2024-07-15_03.43.55.js";import S from"./TextareaEditor.CJMHssBz.2024-07-15_03.43.55.js";import{d as A,r as m,c as N,$ as q,n as z,a as L,o as s,b as w,w as Q,e as g,u as a,l as R,K as T,I as u,L as x,M as y,Q as D,X as l,Y as k,C as E,D as M,Z as $}from"./index.ZB1ftQx1.2024-07-15_03.43.55.js";import{_ as F}from"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.43.55.js";import"./main.Cxf_rs01.2024-07-15_03.43.55.js";import"./VCodeHighlight.DTalzKSo.2024-07-15_03.43.55.js";const I=d=>(E("data-v-19ff0a21"),d=d(),M(),d),K=I(()=>l("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 创建一个 n 行 m 列的漩涡型数组 ",-1)),P=I(()=>l("ul",null,[$(" 解题思路 "),l("li",null,"创建 n * m 的二维数组，用 0 填充"),l("li",null,"开始一个无限循环，每次移动一格"),l("li",null,"如果下一格的值是 0，则 count++ ，并赋值"),l("li",null,"如果下一格的值不是 0，则调整移动方向"),l("li",null,"如果每一格都不是 0，则结束循环")],-1)),U={class:"row"},X={key:2},Y=A({__name:"Vortex",setup(d){const f=m("vortex(4, 4);"),V=m(`function vortex(n, m) {
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
}`),_=m(),t=m([]),B=N(()=>t.value.length>0?t.value.length*t.value[0].length:0);q(()=>{const e=J(4,4);h(e)});function C(e){return`rgba(64, 158, 255, ${e/B.value})`}async function h(e){t.value=e,await z(),e.length>0&&_.value.style.setProperty("--size",e[0].length)}function J(e,c){const n=new Array(e).fill(0).map(()=>new Array(c).fill(0));let o=0,i=0,b=1,r=0,p=1;function v(){return!n[o+r]||n[o+r][i+p]!==0}for(;n[o][i]=b++,!(v()&&(r===0?(r=p,p=0):(p=-r,r=0),v()));)o+=r,i+=p;return n}return(e,c)=>{const n=L("el-divider");return s(),w(j,{question:a(f),answer:a(V),"show-result":!1,onChange:h},{default:Q(()=>[K,g(S,{modelValue:a(f),"onUpdate:modelValue":c[0]||(c[0]=o=>R(f)?f.value=o:null),rows:1},null,8,["modelValue"]),g(n),P,a(t).length>0?(s(),w(n,{key:0})):T("",!0),a(t).length<=10?(s(),u("div",{key:1,ref_key:"divRef",ref:_},[(s(!0),u(x,null,y(a(t),o=>(s(),u("div",U,[(s(!0),u(x,null,y(o,i=>(s(),u("div",{style:D({"background-color":C(i)})},[l("span",null,k(i),1)],4))),256))]))),256))],512)):(s(),u("div",X,k(a(t)),1))]),_:1},8,["question","answer"])}}}),te=F(Y,[["__scopeId","data-v-19ff0a21"]]);export{te as default};
