import{Q as f}from"./QuestionLayout-8jSeo3Np.js";import n from"./HighlightCode-heYxP78F.js";import{d as y,r,a as c,o as h,b as v,w as j,e,u as t,X as o,Z as l,an as s}from"./index-DUm034Nc.js";import"./main-DmfLwbbU.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-C_Jmf-qR.js";const O=o("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 让下面的代码成立 ",-1),g=o("div",null,"解题思路：",-1),S=o("b",null,"迭代器",-1),q=y({__name:"Deconstruction",setup(x){const u=r("let [a, b] = {a: 1, b: 2}"),a=r(""),p=r(`Object.prototype[Symbol.iterator] = function() {
  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}`),b=r(`Object.prototype[Symbol.iterator] = function*() {
  return yield* Object.values(this)
}`);function d(){a.value=`Object.prototype[Symbol.iterator] = function() {
  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}
  
let [a, b] = {a: 1, b: 2}

console.log(a, b)`}function m(){a.value=`Object.prototype[Symbol.iterator] = function*() {
  return yield* Object.values(this)
}
  
let [a, b] = {a: 1, b: 2}

console.log(a, b)`}return(C,w)=>{const _=c("el-divider"),i=c("el-button");return h(),v(f,{answer:t(a)},{default:j(()=>[O,e(n,{code:t(u)},null,8,["code"]),e(_),g,o("p",null,[l("数组的解构是基于 "),S,l("，为 Object 提供迭代器 "),e(n,{code:"Symbol.iterator",inline:""})]),o("p",null,[l(" 1、返回数组的迭代器 "),e(i,{icon:t(s),circle:"",type:"info",size:"small",onClick:d},null,8,["icon"])]),e(n,{code:t(p)},null,8,["code"]),o("p",null,[l(" 2、返回生成器函数 "),e(i,{icon:t(s),circle:"",type:"info",size:"small",onClick:m},null,8,["icon"])]),e(n,{code:t(b)},null,8,["code"])]),_:1},8,["answer"])}}});export{q as default};
