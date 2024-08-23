import m from"./QuestionLayout.Bw7Ucaas.2024-08-23_0855.js";import p from"./TextareaEditor.Ccd2Kzpe.2024-08-23_0855.js";import{d as u,b as i,ai as c,o as d,M as f,O as _,U as n,u as e,D as g,a as t,S as x}from"./@vue.BRKSBXdb.2024-08-23_0855.js";import"./monaco-editor.D9jPo4jf.2024-08-23_0855.js";import"./lodash-es.DvWjmQkM.2024-08-23_0855.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-08-23_0855.js";import"./VCodeHighlight.CYrFvslQ.2024-08-23_0855.js";import"./highlight.js.BSCzCgwG.2024-08-23_0855.js";import"./call-bind.DAUNaQ65.2024-08-23_0855.js";import"./get-intrinsic.DB0lrOCt.2024-08-23_0855.js";import"./es-errors.DzOT6E3C.2024-08-23_0855.js";import"./has-symbols.eVqrYdw7.2024-08-23_0855.js";import"./has-proto.JnoBQRdH.2024-08-23_0855.js";import"./function-bind.BbkWVFrm.2024-08-23_0855.js";import"./hasown.D9QVQHSI.2024-08-23_0855.js";import"./set-function-length.D_FcvHgY.2024-08-23_0855.js";import"./define-data-property.DjNWBd2S.2024-08-23_0855.js";import"./es-define-property.CFiic7Xl.2024-08-23_0855.js";import"./gopd.BJopahKq.2024-08-23_0855.js";import"./has-property-descriptors.PcPi-1-h.2024-08-23_0855.js";const b=t("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 实现 sum 函数，计算 2 个字符串格式的大整数相加的结果。 ",-1),h=t("ul",null,[x(" 解题思路 "),t("li",null,"数字对齐，在左侧补零"),t("li",null,"从最后一位数开始，从后往前计算"),t("li",null,"a[i] + b[i] + 进位，为每位数的计算结果，只保留个位数")],-1),R=u({__name:"BigIntPlus",setup(y){const o=i("sum('1234567', '3482752370238420');"),a=i(`function sum(a, b) {
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
}`);return(w,r)=>{const l=c("el-divider");return d(),f(m,{question:e(o),answer:e(a)},{default:_(()=>[b,n(p,{modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=s=>g(o)?o.value=s:null),rows:1},null,8,["modelValue"]),n(l),h]),_:1},8,["question","answer"])}}});export{R as default};
