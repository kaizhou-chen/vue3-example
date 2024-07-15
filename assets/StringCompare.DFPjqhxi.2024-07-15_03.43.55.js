import{Q as _}from"./QuestionLayout.DGdBdR0c.2024-07-15_03.43.55.js";import g from"./TextareaEditor.CJMHssBz.2024-07-15_03.43.55.js";import c from"./HighlightCode.CLhKZwxk.2024-07-15_03.43.55.js";import{d as N,r as d,$ as h,a as k,o as y,b as V,w as b,e as t,u as s,l as C,X as f,Z as a}from"./index.ZB1ftQx1.2024-07-15_03.43.55.js";import"./main.Cxf_rs01.2024-07-15_03.43.55.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.43.55.js";import"./VCodeHighlight.DTalzKSo.2024-07-15_03.43.55.js";const R=N({__name:"StringCompare",setup(q){const r=d("compare('1-2-3', '1-2-4')"),v=d(`function compare(s1, s2) {
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
}`),w=d(`/**
 * 比较两个字符串的大小
 * 两个字符串都是用 - 连接的数字，比如1-2-33-4-5
 * 比较方式是从左到右，依次比较每个数字的大小
 * 遇到相等的数字继续往后比较，遇到不同的数字直接得到比较结果
 * s1 > s2 return 1
 * s1 < s2 return -1
 * s1 === s2 return 0
 */
function compare(s1, s2) {}`);function x(m,o){const l=p(m),u=p(o);for(;;){const n=l.next(),e=u.next();if(console.log(n.value,e.value),n.value>e.value)return 1;if(n.value<e.value)return-1;if(n.done&&e.done)return 0;if(n.done)return-1;if(e.done)return 1}function*p(n){let e="";for(let i=0;i<n.length;i++)n[i]!=="-"?e+=n[i]:(yield Number(e),e="");e&&(yield Number(e))}}return h(()=>{x("1-2-3","1-2-4")}),(m,o)=>{const l=k("el-divider");return y(),V(_,{question:s(r),answer:s(v)},{default:b(()=>[t(c,{code:s(w)},null,8,["code"]),t(l),t(g,{modelValue:s(r),"onUpdate:modelValue":o[0]||(o[0]=u=>C(r)?r.value=u:null),rows:1},null,8,["modelValue"]),t(l),f("ul",null,[a(" 解题思路 "),f("li",null,[a("创建生成器函数 "),t(c,{code:"function* / yield",inline:""})]),f("li",null,[a("调用 "),t(c,{code:"next()",inline:""}),a("，依次获取字符串中的数字，进行比较")])])]),_:1},8,["question","answer"])}}});export{R as default};
