import r from"./QuestionLayout.Bw7Ucaas.2024-08-23_0855.js";import s from"./KeyPoint.C1gQlRT1.2024-08-23_0855.js";import{v as n}from"./VCodeHighlight.CYrFvslQ.2024-08-23_0855.js";import{d as c,b as p,o as e,M as m,O as d,P as u,c as l,a as o,T as _,u as i,U as f,az as h,aA as x}from"./@vue.BRKSBXdb.2024-08-23_0855.js";import{_ as g}from"./plugin-vueexport-helper.DlAUqK2U.2024-08-23_0855.js";import"./monaco-editor.D9jPo4jf.2024-08-23_0855.js";import"./lodash-es.DvWjmQkM.2024-08-23_0855.js";import"./highlight.js.BSCzCgwG.2024-08-23_0855.js";import"./call-bind.DAUNaQ65.2024-08-23_0855.js";import"./get-intrinsic.DB0lrOCt.2024-08-23_0855.js";import"./es-errors.DzOT6E3C.2024-08-23_0855.js";import"./has-symbols.eVqrYdw7.2024-08-23_0855.js";import"./has-proto.JnoBQRdH.2024-08-23_0855.js";import"./function-bind.BbkWVFrm.2024-08-23_0855.js";import"./hasown.D9QVQHSI.2024-08-23_0855.js";import"./set-function-length.D_FcvHgY.2024-08-23_0855.js";import"./define-data-property.DjNWBd2S.2024-08-23_0855.js";import"./es-define-property.CFiic7Xl.2024-08-23_0855.js";import"./gopd.BJopahKq.2024-08-23_0855.js";import"./has-property-descriptors.PcPi-1-h.2024-08-23_0855.js";const v=t=>(h("data-v-840af99f"),t=t(),x(),t),w=v(()=>o("p",null,"完成 arrange 函数，执行结果如下",-1)),y={class:"question"},C={class:"javascript"},B="",D=c({__name:"ChainAndDelay",setup(t){const a=p(`arrange('William')
  .wait(5)
	.do('commit')
	.waitFirst(3)
	.execute();

// 等待3秒
// > William is notified
// 等待5秒`);return(I,S)=>(e(),m(r,{"exam-code":B},{default:d(()=>[w,u((e(),l("div",y,[o("pre",C,[o("code",null,_(i(a)),1)])])),[[i(n)]]),f(s,{style:{"margin-top":"12px"},notes:[{code:`function arrange() {
  function wait(time) {
    return this; // 返回的是链式对象本身
  }

  function execute() {
    return this; // 返回的是链式对象本身
  }

  /** 返回的对象，它包含的所有函数的 this，都是这个对象本身 */
  return {
    wait,
    execute
  }
}`,desc:"",lang:"javascript"}]})]),_:1}))}}),G=g(D,[["__scopeId","data-v-840af99f"]]);export{G as default};
