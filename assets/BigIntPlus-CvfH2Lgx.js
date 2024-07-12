import s from"./QuestionLayout-Bnp_S_uH.js";import l from"./TextareaEditor-CUcaWdXI.js";import{d as i,r,o as u,b as c,w as m,e as p,u as t,l as f,X as d}from"./index-D6tOstyB.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-DO0YDudZ.js";const x=d("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 实现 sum 函数，计算 2 个字符串格式的大整数相加的结果。 ",-1),B=i({__name:"BigIntPlus",setup(b){const e=r("sum('1234567', '3482752370238420');"),a=r(`function sum(a, b) {
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
    result.unshift(digit) // 添加到首位，每次计算都进一位
  }

  if (carry > 0) {
    result.unshift(carry)
  }

  // 打印过程
  const prefix = (carry > 0 ? ' ' : '')
  const sep = new Array(len).fill('-').join('')
  console.log(prefix + a);
	console.log(prefix + b);
	console.log(prefix + sep);

  return result.join('')
}`);return(g,o)=>(u(),c(s,{question:t(e),answer:t(a)},{default:m(()=>[x,p(l,{modelValue:t(e),"onUpdate:modelValue":o[0]||(o[0]=n=>f(e)?e.value=n:null),rows:1},null,8,["modelValue"])]),_:1},8,["question","answer"]))}});export{B as default};
