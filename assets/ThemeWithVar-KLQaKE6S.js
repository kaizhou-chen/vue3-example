import i from"./KeyPoint-CpIj7gzg.js";import{d as p,r as m,c as h,$ as v,a as f,o as g,I as x,e as d,X as t,w as V,Y as r,u as a,l as b,L as C}from"./index-Dtstn163.js";import{_ as k}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-BoUuTqez.js";const y={style:{"margin-top":"20px"}},S={class:"container"},B={class:"bg1"},N={class:"text"},w={class:"bg2"},I={class:"text"},T=p({__name:"ThemeWithVar",setup(W){const o=m(),l=m([{label:"浅色主题",value:"light"},{label:"深色主题",value:"dark"}]),c=h(()=>{const s=l.value.find(e=>e.value===o.value);return s?s.label:""});v(()=>{o.value=l.value[0].value});function u(s){const e=document.querySelector("html");s==="dark"?e.dataset.theme="dark":delete e.dataset.theme}return(s,e)=>{const _=f("el-segmented");return g(),x(C,null,[d(i,{title:"定义变量",notes:[{code:`/** --变量名 */
--text-color: #fff;`,desc:"CSS 变量是可以继承的，把变量定义在 :root 或 html 上，则页面内所有的元素都可以使用这些变量",lang:"css"}]}),d(i,{title:"使用变量",notes:[{code:`/** 使用 var 函数 */
color: var(--text-color);`,desc:""}]}),t("div",y,[d(_,{modelValue:a(o),"onUpdate:modelValue":e[0]||(e[0]=n=>b(o)?o.value=n:null),options:a(l),onChange:u},{default:V(({item:n})=>[t("div",null,r(n.label),1)]),_:1},8,["modelValue","options"])]),t("div",S,[t("div",B,[t("div",N,r(a(c)),1)]),t("div",w,[t("div",I,r(a(c)),1)])])],64)}}}),K=k(T,[["__scopeId","data-v-4c2313da"]]);export{K as default};
