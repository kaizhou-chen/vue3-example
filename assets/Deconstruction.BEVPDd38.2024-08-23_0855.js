import f from"./QuestionLayout.Bw7Ucaas.2024-08-23_0855.js";import r from"./HighlightCode.JM0XjoEU.2024-08-23_0855.js";import{M as c}from"./@element-plus.CXiHu7Kc.2024-08-23_0855.js";import{d as y,b as i,ai as s,o as h,M as v,O,U as t,u as o,a as e,S as n}from"./@vue.BRKSBXdb.2024-08-23_0855.js";import"./monaco-editor.D9jPo4jf.2024-08-23_0855.js";import"./lodash-es.DvWjmQkM.2024-08-23_0855.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-08-23_0855.js";import"./VCodeHighlight.CYrFvslQ.2024-08-23_0855.js";import"./highlight.js.BSCzCgwG.2024-08-23_0855.js";import"./call-bind.DAUNaQ65.2024-08-23_0855.js";import"./get-intrinsic.DB0lrOCt.2024-08-23_0855.js";import"./es-errors.DzOT6E3C.2024-08-23_0855.js";import"./has-symbols.eVqrYdw7.2024-08-23_0855.js";import"./has-proto.JnoBQRdH.2024-08-23_0855.js";import"./function-bind.BbkWVFrm.2024-08-23_0855.js";import"./hasown.D9QVQHSI.2024-08-23_0855.js";import"./set-function-length.D_FcvHgY.2024-08-23_0855.js";import"./define-data-property.DjNWBd2S.2024-08-23_0855.js";import"./es-define-property.CFiic7Xl.2024-08-23_0855.js";import"./gopd.BJopahKq.2024-08-23_0855.js";import"./has-property-descriptors.PcPi-1-h.2024-08-23_0855.js";const j=e("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 让下面的代码成立 ",-1),S=e("div",null,"解题思路：",-1),g=e("b",null,"迭代器",-1),R=y({__name:"Deconstruction",setup(x){const p=i("let [a, b] = {a: 1, b: 2}"),l=i(""),m=i(`Object.prototype[Symbol.iterator] = function() {
  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}`),u=i(`Object.prototype[Symbol.iterator] = function*() {
  return yield* Object.values(this)
}`);function b(){l.value=`Object.prototype[Symbol.iterator] = function() {
  let arr = Object.values(this)
  return arr[Symbol.iterator]()
}
  
let [a, b] = {a: 1, b: 2}

console.log(a, b)`}function d(){l.value=`Object.prototype[Symbol.iterator] = function*() {
  return yield* Object.values(this)
}
  
let [a, b] = {a: 1, b: 2}

console.log(a, b)`}return(C,k)=>{const _=s("el-divider"),a=s("el-button");return h(),v(f,{answer:o(l)},{default:O(()=>[j,t(r,{code:o(p)},null,8,["code"]),t(_),S,e("p",null,[n("数组的解构是基于 "),g,n("，为 Object 提供迭代器 "),t(r,{code:"Symbol.iterator",inline:""})]),e("p",null,[n(" 1、返回数组的迭代器 "),t(a,{icon:o(c),circle:"",type:"info",size:"small",onClick:b},null,8,["icon"])]),t(r,{code:o(m)},null,8,["code"]),e("p",null,[n(" 2、返回生成器函数 "),t(a,{icon:o(c),circle:"",type:"info",size:"small",onClick:d},null,8,["icon"])]),t(r,{code:o(u)},null,8,["code"])]),_:1},8,["answer"])}}});export{R as default};
