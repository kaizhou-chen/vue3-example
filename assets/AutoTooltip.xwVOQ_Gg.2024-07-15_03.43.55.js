import{d,r,a as f,o as l,b as _,w as u,X as c,Y as h,u as m}from"./index.ZB1ftQx1.2024-07-15_03.43.55.js";import{_ as v}from"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.43.55.js";const w=d({__name:"AutoTooltip",props:{content:String,width:{type:Number,default:300}},setup(p){const e=p,n=r(),s=r(!0);function i(){const t=n.value,a=t.parentNode.offsetWidth,o=t.offsetWidth;s.value=o<=a}return(t,a)=>{const o=f("el-popover");return l(),_(o,{content:e.content,disabled:m(s),width:e.width,effect:"dark",placement:"top",trigger:"hover"},{reference:u(()=>[c("div",{class:"ellipsis",onMouseover:i},[c("span",{ref_key:"spanRef",ref:n},h(e.content),513)],32)]),_:1},8,["content","disabled","width"])}}}),k=v(w,[["__scopeId","data-v-2a2fac83"]]);export{k as A};
