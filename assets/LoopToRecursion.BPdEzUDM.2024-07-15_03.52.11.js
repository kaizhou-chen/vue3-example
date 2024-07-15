import{Q as u}from"./QuestionLayout.DDmWAaDu.2024-07-15_03.52.11.js";import m from"./TextareaEditor.BBqU5drI.2024-07-15_03.52.11.js";import{d,r as n,a as p,o as c,b as _,w as f,e as a,u as r,l as x,X as o,Z as V}from"./index.D1eludE9.2024-07-15_03.52.11.js";import"./main.D18EzTpg.2024-07-15_03.52.11.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.52.11.js";import"./VCodeHighlight.DvkXmx_G.2024-07-15_03.52.11.js";const h=o("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 对数组进行求和，不能使用循环，不能调用数组中的方法 ",-1),v=o("ul",null,[V(" 解题思路 "),o("li",null,"将循环，转换为递归"),o("li",null,"要设置递归的结束条件")],-1),k=d({__name:"LoopToRecursion",setup(w){const e=n(`const arr = [1, 2, 3, 4, 5];
sum(arr);`),s=n(`function sum(arr, i = 0) {
  if (i === arr.length) {
    return 0;
  }

  return arr[i] + sum(arr, i + 1)
}`);return(g,t)=>{const i=p("el-divider");return c(),_(u,{question:r(e),answer:r(s)},{default:f(()=>[h,a(m,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=l=>x(e)?e.value=l:null)},null,8,["modelValue"]),a(i),v]),_:1},8,["question","answer"])}}});export{k as default};
