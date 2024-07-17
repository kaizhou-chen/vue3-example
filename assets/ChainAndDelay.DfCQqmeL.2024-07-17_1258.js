import r from"./QuestionLayout.hla_40zv.2024-07-17_1258.js";import s from"./KeyPoint.BI1NqdXY.2024-07-17_1258.js";import{v as n}from"./VCodeHighlight.BcHf-TBC.2024-07-17_1258.js";import{d as c,e as p,o,M as m,O as d,P as u,c as l,a as e,T as _,u as i,U as f,ay as h,az as x}from"./@vue.DR0bNimP.2024-07-17_1258.js";import{_ as g}from"./plugin-vueexport-helper.DlAUqK2U.2024-07-17_1258.js";import"./monaco-editor.CvxGLACk.2024-07-17_1258.js";import"./lodash-es.DvWjmQkM.2024-07-17_1258.js";import"./highlight.js.D0d1Vxwy.2024-07-17_1258.js";import"./call-bind.D4Qxyof_.2024-07-17_1258.js";import"./get-intrinsic.CjFK80KK.2024-07-17_1258.js";import"./es-errors.DzOT6E3C.2024-07-17_1258.js";import"./has-symbols.eVqrYdw7.2024-07-17_1258.js";import"./has-proto.JnoBQRdH.2024-07-17_1258.js";import"./function-bind.BbkWVFrm.2024-07-17_1258.js";import"./hasown.CQ6MvG1E.2024-07-17_1258.js";import"./set-function-length.9j_ZXv4y.2024-07-17_1258.js";import"./define-data-property.CsoVXVIa.2024-07-17_1258.js";import"./es-define-property.L9kauNg3.2024-07-17_1258.js";import"./gopd.BhGRosE1.2024-07-17_1258.js";import"./has-property-descriptors.CjB1m-qY.2024-07-17_1258.js";const v=t=>(h("data-v-840af99f"),t=t(),x(),t),w=v(()=>e("p",null,"完成 arrange 函数，执行结果如下",-1)),y={class:"question"},C={class:"javascript"},B="",D=c({__name:"ChainAndDelay",setup(t){const a=p(`arrange('William')
  .wait(5)
	.do('commit')
	.waitFirst(3)
	.execute();

// 等待3秒
// > William is notified
// 等待5秒`);return(I,S)=>(o(),m(r,{"exam-code":B},{default:d(()=>[w,u((o(),l("div",y,[e("pre",C,[e("code",null,_(i(a)),1)])])),[[i(n)]]),f(s,{style:{"margin-top":"12px"},notes:[{code:`function arrange() {
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
