import M from"./TextareaEditor-CUcaWdXI.js";import{d as B,ab as f,ac as C,r as S,$ as R,a as r,o as i,I as c,X as l,J as W,u as v,e as n,w as p,L as N,M as U,Y as $,K as q,Z as h,C as T,D as j}from"./index-D6tOstyB.js";import{_ as D}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-DO0YDudZ.js";const E=t=>(T("data-v-1e792129"),t=t(),j(),t),Q={class:"container"},F={key:0},J=E(()=>l("div",{style:{"line-height":"32px"}},"运行结果：",-1)),K={class:"result"},O={style:{display:"flex","margin-bottom":"12px"}},X=B({__name:"QuestionLayout",props:f({question:{default:""},answer:{},runImmediate:{type:Boolean},showResult:{type:Boolean,default:!0}},{modelValue:{},modelModifiers:{}}),emits:f(["change"],["update:modelValue"]),setup(t,{emit:y}){const s=t,L=y,a=C(t,"modelValue"),u=S([]);let m,g;R(()=>{s.answer&&(a.value=s.answer),s.runImmediate&&_()});function _(){const e=w();e.postMessage(["run"]),e.onmessage=o=>{u.value=o.data,L("change",o.data[0])}}function w(){const e=x(),o=new Blob([e],{type:"application/javascript"});return g=URL.createObjectURL(o),m=new Worker(g),m}function x(){return`// 收到消息
self.onmessage = async (e) => {
  const logList = []
  const oldLog = console.log;

  // 修改 console.log
  console.log = function () {
    oldLog.apply(console, arguments);

    if (arguments.length === 1) {
      logList.push(arguments[0])
    } else {
      logList.push([...arguments])
    }
  };

  // 执行代码
  const executor = async () => {
    const result = ${s.question?s.question:'"";'}
    console.log(result)

    ${a.value}
  }
  await executor();

  setTimeout(() => {
    // 还原 console.log
    console.log = oldLog

    // 发送消息，将打印结果传递回去
    self.postMessage(logList)
  }, 500)
}`}return(e,o)=>{const b=r("el-divider"),k=r("el-card"),V=r("el-button"),I=r("el-text");return i(),c("div",Q,[l("div",null,[W(e.$slots,"default",{},void 0,!0),e.showResult&&v(u).length>0?(i(),c("div",F,[n(b),n(k,null,{default:p(()=>[J,l("div",K,[(i(!0),c(N,null,U(v(u),d=>(i(),c("div",null,$(d),1))),256))])]),_:1})])):q("",!0)]),l("div",null,[l("div",O,[n(V,{type:"primary",onClick:_},{default:p(()=>[h("运行")]),_:1}),n(I,{type:"info",style:{"margin-left":"8px"}},{default:p(()=>[h("代码会在 Web Worker 里运行")]),_:1})]),n(M,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=d=>a.value=d),class:"editor"},null,8,["modelValue"])])])}}}),G=D(X,[["__scopeId","data-v-1e792129"]]);export{G as default};
