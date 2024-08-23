import{e as k}from"./monaco-editor.D9jPo4jf.2024-08-23_0855.js";import{b,A as U,n as I,d as z,aD as C,aE as N,k as W,j as B,e as D,o as f,c as m,J as q,ai as w,a as g,H as A,u as p,U as _,O as M,T as R,R as O,F as E,a8 as $,S as j,D as Q,az as F,aA as H}from"./@vue.BRKSBXdb.2024-08-23_0855.js";import{r as J}from"./lodash-es.DvWjmQkM.2024-08-23_0855.js";import{_ as G}from"./plugin-vueexport-helper.DlAUqK2U.2024-08-23_0855.js";function K(i="javascript"){let t=null;const s=b(null);function a(o={}){if(s.value)return t=k.create(s.value,{model:k.createModel("",i),minimap:{enabled:!1},roundedSelection:!0,theme:"vs",multiCursorModifier:"ctrlCmd",scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8},lineNumbers:"on",tabSize:2,fontSize:16,autoIndent:"advanced",automaticLayout:!0,...o}),t}async function l(){var o;await((o=t==null?void 0:t.getAction("editor.action.formatDocument"))==null?void 0:o.run())}function r(o){I(()=>{c(k.EditorOption.readOnly)&&u({readOnly:!1}),t==null||t.setValue(o),setTimeout(async()=>{await l()},10)})}function u(o){t==null||t.updateOptions(o)}function c(o){return t==null?void 0:t.getOption(o)}function h(){return t}return U(()=>{t&&t.dispose()}),{monacoEditorRef:s,createEditor:a,getEditor:h,updateVal:r,updateOptions:u,getOption:c,formatDoc:l}}const P=z({__name:"MonacoEditor",props:C({width:{default:"100%"},height:{default:"500px"},language:{default:"javascript"},editorOption:{default:()=>({})}},{modelValue:{default:""},modelModifiers:{}}),emits:C(["blur"],["update:modelValue"]),setup(i,{expose:t,emit:s}){const a=i,l=s,r=N(i,"modelValue"),u=W(()=>({width:typeof a.width=="string"?a.width:a.width+"px",height:typeof a.height=="string"?a.height:a.height+"px"})),{monacoEditorRef:c,createEditor:h,updateVal:o,updateOptions:x,getEditor:L}=K(a.language);B(()=>{const e=h(a.editorOption);v(r.value),e==null||e.onDidChangeModelContent(()=>{r.value=e.getValue()}),e==null||e.onDidBlurEditorText(()=>{l("blur")})}),D(()=>r.value,()=>{v(r.value)});function v(e){var n;e!==((n=L())==null?void 0:n.getValue())&&o(e)}return t({updateOptions:x}),(e,n)=>(f(),m("div",{ref_key:"monacoEditorRef",ref:c,style:q(u.value)},null,4))}}),X=i=>(F("data-v-8e415aab"),i=i(),H(),i),Y={class:"container"},Z={key:0},ee={key:0},te=X(()=>g("div",{style:{"line-height":"32px"}},"运行结果：",-1)),oe={key:1},ne={class:"result"},se={style:{display:"flex",margin:"0 0 12px 70px"}},ae={class:"editor"},le=z({__name:"QuestionLayout",props:{question:{default:""},answer:{},showResult:{type:Boolean,default:!0}},emits:["change"],setup(i,{emit:t}){const s=i,a=t,l=b(""),r=b(""),u=b([]);let c,h;B(()=>{s.answer&&(l.value=s.answer)}),D(()=>s.answer,e=>{l.value=e||""});function o(){const e=x();e.postMessage(["run"]),e.onmessage=n=>{r.value=n.data.result,u.value=n.data.logList.map(d=>J(d)?d.join(" , "):d),a("change",n.data.result)}}function x(){const e=L(),n=new Blob([e],{type:"application/javascript"});return h=URL.createObjectURL(n),c=new Worker(h),c}function L(){return`// 收到消息
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
    ${v()}
    ${l.value}
  }
  await executor();

  setTimeout(() => {
    // 还原 console.log
    console.log = oldLog

    // 发送消息，将打印结果传递回去
    self.postMessage({result, logList})
  }, 500)
}`}function v(){if(!s.question)return"";const e=s.question.split(`
`);if(e.length===1)return"result = "+s.question;{const n=e.length-1;return e.map((y,S)=>S<n?y:"result = "+y).join(`
`)}}return(e,n)=>{const d=w("el-divider"),y=w("el-card"),S=w("el-button"),T=w("el-text");return f(),m("div",Y,[g("div",null,[A(e.$slots,"default",{},void 0,!0),e.showResult&&(p(r)!==""||p(u).length>0)?(f(),m("div",Z,[_(d),_(y,null,{default:M(()=>[p(r)!==""?(f(),m("div",ee,[te,g("div",null,R(p(r)),1)])):O("",!0),p(u).length>0?(f(),m("div",oe,[_(d),g("div",ne,[(f(!0),m(E,null,$(p(u),V=>(f(),m("div",null,R(V),1))),256))])])):O("",!0)]),_:1})])):O("",!0)]),g("div",null,[g("div",se,[_(S,{type:"primary",onClick:o},{default:M(()=>[j("运行")]),_:1}),_(T,{type:"info",style:{"margin-left":"8px"}},{default:M(()=>[j("代码会在 Web Worker 里运行")]),_:1})]),g("div",ae,[_(P,{modelValue:p(l),"onUpdate:modelValue":n[0]||(n[0]=V=>Q(l)?l.value=V:null),height:"100%"},null,8,["modelValue"])])])])}}}),de=G(le,[["__scopeId","data-v-8e415aab"]]);export{de as default};
