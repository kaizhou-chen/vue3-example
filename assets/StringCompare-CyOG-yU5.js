import x from"./QuestionLayout-C3JjRPBR.js";import g from"./TextareaEditor-BXKUvrkT.js";import d from"./HighlightCode-heYxP78F.js";import{d as V,r as c,$ as C,a as N,o as h,b as y,w as b,e as o,u as i,l as k,X as m,Z as a}from"./index-DUm034Nc.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-C_Jmf-qR.js";const M=V({__name:"StringCompare",setup(q){const t=c("compare('1-2-3', '1-2-4')"),_=c(f.toString()),w=c(`/**
 * 比较两个字符串的大小
 * 两个字符串都是用 - 连接的数字，比如1-2-33-4-5
 * 比较方式是从左到右，依次比较每个数字的大小
 * 遇到相等的数字继续往后比较，遇到不同的数字直接得到比较结果
 * s1 > s2 return 1
 * s1 < s2 return -1
 * s1 === s2 return 0
 */
function compare(s1, s2) {}`);function f(p,r){const l=v(p),u=v(r);for(;;){const n=l.next(),e=u.next();if(console.log(n.value,e.value),n.value>e.value)return 1;if(n.value<e.value)return-1;if(n.done&&e.done)return 0;if(n.done)return-1;if(e.done)return 1}function*v(n){let e="";for(let s=0;s<n.length;s++)n[s]!=="-"?e+=n[s]:(yield Number(e),e="");e&&(yield Number(e))}}return C(()=>{f("1-2-3","1-2-4")}),(p,r)=>{const l=N("el-divider");return h(),y(x,{question:i(t),answer:i(_)},{default:b(()=>[o(d,{code:i(w)},null,8,["code"]),o(l),o(g,{modelValue:i(t),"onUpdate:modelValue":r[0]||(r[0]=u=>k(t)?t.value=u:null),rows:1},null,8,["modelValue"]),o(l),m("ul",null,[a(" 解题思路 "),m("li",null,[a("创建生成器函数 "),o(d,{code:"function* / yield",inline:""})]),m("li",null,[a("调用 "),o(d,{code:"next()",inline:""}),a("，依次获取字符串中的数字，进行比较")])])]),_:1},8,["question","answer"])}}});export{M as default};
