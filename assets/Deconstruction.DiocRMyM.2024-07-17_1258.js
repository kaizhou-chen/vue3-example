import f from"./QuestionLayout.hla_40zv.2024-07-17_1258.js";import r from"./HighlightCode.BPT25LtC.2024-07-17_1258.js";import{M as c}from"./@element-plus.CMqxRFBv.2024-07-17_1258.js";import{d as y,e as i,ah as s,o as h,M as v,O,U as t,u as o,a as e,S as n}from"./@vue.DR0bNimP.2024-07-17_1258.js";import"./monaco-editor.CvxGLACk.2024-07-17_1258.js";import"./lodash-es.DvWjmQkM.2024-07-17_1258.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-07-17_1258.js";import"./VCodeHighlight.BcHf-TBC.2024-07-17_1258.js";import"./highlight.js.D0d1Vxwy.2024-07-17_1258.js";import"./call-bind.D4Qxyof_.2024-07-17_1258.js";import"./get-intrinsic.CjFK80KK.2024-07-17_1258.js";import"./es-errors.DzOT6E3C.2024-07-17_1258.js";import"./has-symbols.eVqrYdw7.2024-07-17_1258.js";import"./has-proto.JnoBQRdH.2024-07-17_1258.js";import"./function-bind.BbkWVFrm.2024-07-17_1258.js";import"./hasown.CQ6MvG1E.2024-07-17_1258.js";import"./set-function-length.9j_ZXv4y.2024-07-17_1258.js";import"./define-data-property.CsoVXVIa.2024-07-17_1258.js";import"./es-define-property.L9kauNg3.2024-07-17_1258.js";import"./gopd.BhGRosE1.2024-07-17_1258.js";import"./has-property-descriptors.CjB1m-qY.2024-07-17_1258.js";const j=e("div",{style:{"min-height":"32px","margin-bottom":"12px"}}," 让下面的代码成立 ",-1),S=e("div",null,"解题思路：",-1),g=e("b",null,"迭代器",-1),R=y({__name:"Deconstruction",setup(x){const p=i("let [a, b] = {a: 1, b: 2}"),l=i(""),m=i(`Object.prototype[Symbol.iterator] = function() {
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
