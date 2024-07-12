import i from"./QuestionLayout-Bnp_S_uH.js";import r from"./KeyPoint-601k8t0w.js";import{v as n}from"./VCodeHighlight-DO0YDudZ.js";import{d as c,r as p,o as a,b as d,w as m,H as u,I as l,X as t,Y as _,u as o,e as f,C as h,D as x}from"./index-D6tOstyB.js";import{_ as g}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./TextareaEditor-CUcaWdXI.js";const v=e=>(h("data-v-840af99f"),e=e(),x(),e),w=v(()=>t("p",null,"完成 arrange 函数，执行结果如下",-1)),C={class:"question"},y={class:"javascript"},D="",I=c({__name:"ChainAndDelay",setup(e){const s=p(`arrange('William')
  .wait(5)
	.do('commit')
	.waitFirst(3)
	.execute();

// 等待3秒
// > William is notified
// 等待5秒`);return(B,S)=>(a(),d(i,{"exam-code":D},{default:m(()=>[w,u((a(),l("div",C,[t("pre",y,[t("code",null,_(o(s)),1)])])),[[o(n)]]),f(r,{style:{"margin-top":"12px"},notes:[{code:`function arrange() {
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
}`,desc:"",lang:"javascript"}]})]),_:1}))}}),V=g(I,[["__scopeId","data-v-840af99f"]]);export{V as default};
