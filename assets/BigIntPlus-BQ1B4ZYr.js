import h from"./QuestionLayout-C3JjRPBR.js";import x from"./TextareaEditor-BXKUvrkT.js";import{d as w,r as c,a as V,o as v,b as N,w as y,e as d,u,l as B,X as s,Z as q}from"./index-DUm034Nc.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-C_Jmf-qR.js";const C=s("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 实现 sum 函数，计算 2 个字符串格式的大整数相加的结果。 ",-1),S=s("ul",null,[q(" 解题思路 "),s("li",null,"数字对齐，在左侧补零"),s("li",null,"从最后一位数开始，从后往前计算"),s("li",null,"a[i] + b[i] + 进位，为每位数的计算结果，只保留个位数")],-1),E=w({__name:"BigIntPlus",setup(j){const l=c("sum('1234567', '3482752370238420');"),p=c(f.toString());function f(o,e){const n=Math.max(o.length,e.length);o=o.padStart(n,"0"),e=e.padStart(n,"0");let t=0,i=[];for(let r=n-1;r>=0;r--){const m=Number(o[r])+Number(e[r])+t;t=Math.floor(m/10);const g=m%10;i.unshift(g)}t>0&&i.unshift(t);const a=t>0?" ":"",_=new Array(n).fill("-").join("");return console.log(a+o),console.log(a+e),console.log(a+_),i.join("")}return(o,e)=>{const n=V("el-divider");return v(),N(h,{question:u(l),answer:u(p)},{default:y(()=>[C,d(x,{modelValue:u(l),"onUpdate:modelValue":e[0]||(e[0]=t=>B(l)?l.value=t:null),rows:1},null,8,["modelValue"]),d(n),S]),_:1},8,["question","answer"])}}});export{E as default};
