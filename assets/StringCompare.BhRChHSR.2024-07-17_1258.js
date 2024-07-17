import _ from"./QuestionLayout.hla_40zv.2024-07-17_1258.js";import g from"./TextareaEditor.CHlngwTD.2024-07-17_1258.js";import m from"./HighlightCode.BPT25LtC.2024-07-17_1258.js";import{d as h,e as p,j as N,ah as k,o as y,M as V,O as C,U as n,u as s,D as b,a as c,S as a}from"./@vue.DR0bNimP.2024-07-17_1258.js";import"./monaco-editor.CvxGLACk.2024-07-17_1258.js";import"./lodash-es.DvWjmQkM.2024-07-17_1258.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-07-17_1258.js";import"./VCodeHighlight.BcHf-TBC.2024-07-17_1258.js";import"./highlight.js.D0d1Vxwy.2024-07-17_1258.js";import"./call-bind.D4Qxyof_.2024-07-17_1258.js";import"./get-intrinsic.CjFK80KK.2024-07-17_1258.js";import"./es-errors.DzOT6E3C.2024-07-17_1258.js";import"./has-symbols.eVqrYdw7.2024-07-17_1258.js";import"./has-proto.JnoBQRdH.2024-07-17_1258.js";import"./function-bind.BbkWVFrm.2024-07-17_1258.js";import"./hasown.CQ6MvG1E.2024-07-17_1258.js";import"./set-function-length.9j_ZXv4y.2024-07-17_1258.js";import"./define-data-property.CsoVXVIa.2024-07-17_1258.js";import"./es-define-property.L9kauNg3.2024-07-17_1258.js";import"./gopd.BhGRosE1.2024-07-17_1258.js";import"./has-property-descriptors.CjB1m-qY.2024-07-17_1258.js";const W=h({__name:"StringCompare",setup(q){const o=p("compare('1-2-3', '1-2-4')"),v=p(`function compare(s1, s2) {
  const iter1 = walk(s1);
  const iter2 = walk(s2);

  while(1) {
    const n1 = iter1.next();
    const n2 = iter2.next();

    // 打印每次比较的数字
    console.log(n1.value, n2.value)

    if (n1.value > n2.value) {
      return 1
    } else if (n1.value < n2.value) {
      return -1
    } else if (n1.done && n2.done) {
      return 0
    } else if (n1.done) {
      return -1
    } else if (n2.done) {
      return 1
    }
  }

  /**
   * 生成器函数
   */
  function* walk(str) {
    let part = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '-') {
        part += str[i]
      } else {
        yield Number(part)
        part = ''
      }
    }

    if (part) {
      yield Number(part)
    }
  }
}`),w=p(`/**
 * 比较两个字符串的大小
 * 两个字符串都是用 - 连接的数字，比如1-2-33-4-5
 * 比较方式是从左到右，依次比较每个数字的大小
 * 遇到相等的数字继续往后比较，遇到不同的数字直接得到比较结果
 * s1 > s2 return 1
 * s1 < s2 return -1
 * s1 === s2 return 0
 */
function compare(s1, s2) {}`);function x(d,r){const i=f(d),u=f(r);for(;;){const t=i.next(),e=u.next();if(console.log(t.value,e.value),t.value>e.value)return 1;if(t.value<e.value)return-1;if(t.done&&e.done)return 0;if(t.done)return-1;if(e.done)return 1}function*f(t){let e="";for(let l=0;l<t.length;l++)t[l]!=="-"?e+=t[l]:(yield Number(e),e="");e&&(yield Number(e))}}return N(()=>{x("1-2-3","1-2-4")}),(d,r)=>{const i=k("el-divider");return y(),V(_,{question:s(o),answer:s(v)},{default:C(()=>[n(m,{code:s(w)},null,8,["code"]),n(i),n(g,{modelValue:s(o),"onUpdate:modelValue":r[0]||(r[0]=u=>b(o)?o.value=u:null),rows:1},null,8,["modelValue"]),n(i),c("ul",null,[a(" 解题思路 "),c("li",null,[a("创建生成器函数 "),n(m,{code:"function* / yield",inline:""})]),c("li",null,[a("调用 "),n(m,{code:"next()",inline:""}),a("，依次获取字符串中的数字，进行比较")])])]),_:1},8,["question","answer"])}}});export{W as default};
