import{v as x}from"./VCodeHighlight.CYrFvslQ.2024-08-23_0855.js";import{d as E,aD as y,aE as V,b as n,j as w,e as b,ai as k,o as c,c as d,U as T,P as S,u as m,J as D,a as f,T as M}from"./@vue.BRKSBXdb.2024-08-23_0855.js";import{_ as B}from"./plugin-vueexport-helper.DlAUqK2U.2024-08-23_0855.js";import"./highlight.js.BSCzCgwG.2024-08-23_0855.js";import"./call-bind.DAUNaQ65.2024-08-23_0855.js";import"./get-intrinsic.DB0lrOCt.2024-08-23_0855.js";import"./es-errors.DzOT6E3C.2024-08-23_0855.js";import"./has-symbols.eVqrYdw7.2024-08-23_0855.js";import"./has-proto.JnoBQRdH.2024-08-23_0855.js";import"./function-bind.BbkWVFrm.2024-08-23_0855.js";import"./hasown.D9QVQHSI.2024-08-23_0855.js";import"./set-function-length.D_FcvHgY.2024-08-23_0855.js";import"./define-data-property.DjNWBd2S.2024-08-23_0855.js";import"./es-define-property.CFiic7Xl.2024-08-23_0855.js";import"./gopd.BJopahKq.2024-08-23_0855.js";import"./has-property-descriptors.PcPi-1-h.2024-08-23_0855.js";const C={class:"editor"},H={class:"javascript"},I=E({__name:"TextareaEditor",props:y({rows:{default:2}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(h){const o=V(h,"modelValue"),i=n(),p=n(),u=n("translate(0px, 0px)");let l;w(()=>{r()}),b(()=>o.value,()=>{r()});function v(t){l=t}function r(){requestAnimationFrame(()=>{l&&l(o.value)})}function g(t){requestAnimationFrame(()=>{const a=i.value.textarea;p.value.height=a.clientHeight+"px",u.value=`translate(0px, -${a.scrollTop}px)`})}function _(t){if(t.key=="Tab"){t.preventDefault();const e=t.target;var a=e.selectionStart,s=e.selectionEnd;e.value=e.value.substring(0,a)+"	"+e.value.substring(s),e.selectionStart=e.selectionEnd=a+1}}return(t,a)=>{const s=k("el-input");return c(),d("div",C,[T(s,{ref_key:"inputEl",ref:i,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),type:"textarea",rows:t.rows,spellcheck:"false",placeholder:"请输入代码",onInput:r,onScroll:g,onKeydown:_},null,8,["modelValue","rows"]),S((c(),d("div",{ref_key:"highlightEl",ref:p,class:"code",style:D({transform:m(u)})},[f("pre",H,[f("code",null,M(o.value),1)])],4)),[[m(x),v]])])}}}),W=B(I,[["__scopeId","data-v-add21b3a"]]);export{W as default};
