import I from"./TextareaEditor-BXKUvrkT.js";import{d as W,r as v,$ as q,j as M,a as _,o as r,I as a,X as u,J as N,u as s,e as i,w as h,Y as b,K as y,L as U,M as $,Z as k,l as Q,ak as T,C as D,D as E}from"./index-DUm034Nc.js";import{_ as A}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-C_Jmf-qR.js";const F=c=>(D("data-v-2b0d71cb"),c=c(),E(),c),J={class:"container"},K={key:0},O={key:0},X=F(()=>u("div",{style:{"line-height":"32px"}},"运行结果：",-1)),Y={key:1},Z={class:"result"},z={style:{display:"flex","margin-bottom":"12px"}},G=W({__name:"QuestionLayout",props:{question:{default:""},answer:{},showResult:{type:Boolean,default:!0}},emits:["change"],setup(c,{emit:x}){const n=c,C=x,l=v(""),d=v(""),p=v([]);let L,w;q(()=>{n.answer&&(l.value=n.answer)}),M(()=>n.answer,e=>{l.value=e||""});function V(){const e=R();e.postMessage(["run"]),e.onmessage=t=>{d.value=t.data.result,p.value=t.data.logList.map(o=>T(o)?o.join(" , "):o),C("change",t.data.result)}}function R(){const e=S(),t=new Blob([e],{type:"application/javascript"});return w=URL.createObjectURL(t),L=new Worker(w),L}function S(){return`// 收到消息
self.onmessage = async (e) => {
  let result = '';
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
    ${j()}
    ${l.value}
  }
  await executor();

  setTimeout(() => {
    // 还原 console.log
    console.log = oldLog

    // 发送消息，将打印结果传递回去
    self.postMessage({result, logList})
  }, 500)
}`}function j(){if(!n.question)return"";const e=n.question.split(`
`);if(e.length===1)return"result = "+n.question;{const t=e.length-1;return e.map((m,g)=>g<t?m:"result = "+m).join(`
`)}}return(e,t)=>{const o=_("el-divider"),m=_("el-card"),g=_("el-button"),B=_("el-text");return r(),a("div",J,[u("div",null,[N(e.$slots,"default",{},void 0,!0),e.showResult&&(s(d)!==""||s(p).length>0)?(r(),a("div",K,[i(o),i(m,null,{default:h(()=>[s(d)!==""?(r(),a("div",O,[X,u("div",null,b(s(d)),1)])):y("",!0),s(p).length>0?(r(),a("div",Y,[i(o),u("div",Z,[(r(!0),a(U,null,$(s(p),f=>(r(),a("div",null,b(f),1))),256))])])):y("",!0)]),_:1})])):y("",!0)]),u("div",null,[u("div",z,[i(g,{type:"primary",onClick:V},{default:h(()=>[k("运行")]),_:1}),i(B,{type:"info",style:{"margin-left":"8px"}},{default:h(()=>[k("代码会在 Web Worker 里运行")]),_:1})]),i(I,{modelValue:s(l),"onUpdate:modelValue":t[0]||(t[0]=f=>Q(l)?l.value=f:null),class:"editor"},null,8,["modelValue"])])])}}}),oe=A(G,[["__scopeId","data-v-2b0d71cb"]]);export{oe as default};
