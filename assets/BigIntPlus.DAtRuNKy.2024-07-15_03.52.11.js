import{Q as u}from"./QuestionLayout.DDmWAaDu.2024-07-15_03.52.11.js";import c from"./TextareaEditor.BBqU5drI.2024-07-15_03.52.11.js";import{d as m,r as n,a as p,o as d,b as f,w as _,e as l,u as o,l as g,X as e,Z as x}from"./index.D1eludE9.2024-07-15_03.52.11.js";import"./main.D18EzTpg.2024-07-15_03.52.11.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.52.11.js";import"./VCodeHighlight.DvkXmx_G.2024-07-15_03.52.11.js";const b=e("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 实现 sum 函数，计算 2 个字符串格式的大整数相加的结果。 ",-1),h=e("ul",null,[x(" 解题思路 "),e("li",null,"数字对齐，在左侧补零"),e("li",null,"从最后一位数开始，从后往前计算"),e("li",null,"a[i] + b[i] + 进位，为每位数的计算结果，只保留个位数")],-1),j=m({__name:"BigIntPlus",setup(y){const t=n("sum('1234567', '3482752370238420');"),a=n(`function sum(a, b) {
  // 对齐数字
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')

  // 从最后一位数开始计算
  let carry = 0; // 进位
  let result = [];
  for (let i = len - 1; i >= 0; i--) {
    // 第 i 位数相加，并加上进位
    const total = Number(a[i]) + Number(b[i]) + carry;
    carry = Math.floor(total / 10); // 计算进位

     // 计算结果，只取个位数【去掉进位】
    const digit = total % 10;
    // @ts-ignore
    result.unshift(digit) // 添加到首位，每次计算都进一位
  }

  if (carry > 0) {
    // @ts-ignore
    result.unshift(carry)
  }

  // 打印过程
  const prefix = (carry > 0 ? ' ' : '')
  const sep = new Array(len).fill('-').join('')
  console.log(prefix + a);
	console.log(prefix + b);
	console.log(prefix + sep);

  return result.join('')
}`);return(w,r)=>{const s=p("el-divider");return d(),f(u,{question:o(t),answer:o(a)},{default:_(()=>[b,l(c,{modelValue:o(t),"onUpdate:modelValue":r[0]||(r[0]=i=>g(t)?t.value=i:null),rows:1},null,8,["modelValue"]),l(s),h]),_:1},8,["question","answer"])}}});export{j as default};
