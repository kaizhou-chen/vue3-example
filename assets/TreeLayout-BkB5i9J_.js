import{d as $,aa as j,r as m,j as g,a as d,o as _,I as y,e as u,w as i,X as b,u as f,l as x,ab as D,J as C,Y as k,L as F,M as J,b as K}from"./index-Dtstn163.js";import{_ as P}from"./plugin-vueexport-helper-DlAUqK2U.js";const X={style:{display:"flex","min-height":"100%","max-width":"100%"}},Y={style:{"max-height":"calc(100vh - 175px)"}},q={key:1},z={style:{flex:"1","margin-left":"20px","max-width":"calc(100% - 300px)"}},A=$({__name:"TreeLayout",props:{menu:{default:[]},placeholder:{default:"搜索"},showTooltip:{type:Boolean},filterMethod:{},selectNode:{}},emits:["tabChange"],setup(w,{emit:V}){const c=w,L=V,N=!!j().node,v=m(),r=m([]),p=m(""),s=m(""),B={children:"children",label:"label"};g(p,e=>{v.value.filter(e)}),g(s,e=>{var a;(a=v.value)==null||a.setCurrentKey(e);const l=M(c.menu,e,"value");L("tabChange",l)});function M(e,l,a){for(const t of e){let n=T(t,l,a);if(n)return n}return null}function T(e,l,a){if(e[a]==l)return e;if(e.children!=null){let t=null;for(let n=0;t==null&&n<e.children.length;n++)t=T(e.children[n],l,a);return t}return null}function R(e,l){return e?c.filterMethod?c.filterMethod(e,l):l.label.includes(e):!0}function S(e,l){if(!l.isLeaf||c.selectNode&&!c.selectNode(e,l))return;r.value.find(t=>t.name===e.value)||r.value.push({name:e.value,title:e.label}),s.value!==e.value&&(s.value=e.value)}function E(e){const l=r.value;let a=s.value;a===e&&l.forEach((t,n)=>{if(t.name===e){const h=l[n+1]||l[n-1];h&&(a=h.name)}}),s.value=a,r.value=l.filter(t=>t.name!==e)}return(e,l)=>{const a=d("el-input"),t=d("el-card"),n=d("el-tooltip"),h=d("el-tab-pane"),I=d("el-tabs");return _(),y("div",X,[u(t,{class:"tree-card"},{default:i(()=>[u(a,{class:"tree-filter",modelValue:f(p),"onUpdate:modelValue":l[0]||(l[0]=o=>x(p)?p.value=o:null),placeholder:e.placeholder},null,8,["modelValue","placeholder"]),b("div",Y,[u(f(D),{class:"filter-tree",style:{"max-width":"600px"},ref_key:"treeRef",ref:v,"node-key":"value","default-expand-all":"",data:e.menu,props:B,"highlight-current":!0,"filter-node-method":R,onCurrentChange:S},{default:i(({node:o,data:U})=>[b("div",null,[N?C(e.$slots,"node",{key:0,data:U},void 0,!0):(_(),y("span",q,k(o.label),1))])]),_:3},8,["data"])])]),_:3}),b("div",z,[u(I,{type:"card",class:"demo-tabs",modelValue:f(s),"onUpdate:modelValue":l[1]||(l[1]=o=>x(s)?s.value=o:null),closable:f(r).length>1,onTabRemove:E},{default:i(()=>[(_(!0),y(F,null,J(f(r),o=>(_(),K(h,{key:o.name,label:o.title,name:o.name},{label:i(()=>[u(n,{content:o.name,disabled:!e.showTooltip,placement:"bottom"},{default:i(()=>[b("div",null,k(o.title),1)]),_:2},1032,["content","disabled"])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","closable"]),u(t,{style:{"min-height":"calc(100% - 42px)"}},{default:i(()=>[C(e.$slots,"default",{},void 0,!0)]),_:3})])])}}}),Q=P(A,[["__scopeId","data-v-7996e2af"]]);export{Q as T};
