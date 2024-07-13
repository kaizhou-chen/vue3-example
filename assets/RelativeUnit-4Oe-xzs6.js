import e from"./KeyPoint-d-BSLPfb.js";import{d as o,o as s,I as n,e as t}from"./index-DUm034Nc.js";import{_ as i}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./VCodeHighlight-C_Jmf-qR.js";const c={class:"container"},a=o({__name:"RelativeUnit",setup(p){return(r,m)=>(s(),n("div",c,[t(e,{title:"em",notes:[{code:`/** 按就近原则，找到设置过字体大小的节点，作为相对节点 */
.parent {
  font-size: 16px;     /** 找到相对节点的字体大小 */
  line-height: 1.5em;  /** 实际行高为：1.5 * 16px，即：24px */
 
  .child {
    font-size: 2em;     /** 实际字体大小为：2 * 16px，即：32px */
  }
}`,desc:"",lang:"css"}]}),t(e,{title:"rem",notes:[{code:`/** 以根节点，即 html 节点，作为相对节点 */
html {
  font-size: 16px;  /** 根节点的字体大小 */
}

.child {
  font-size: 2rem;  /** 实际字体大小为：2 * 16px，即：32px */
}`,desc:"",lang:"css"}]})]))}}),x=i(a,[["__scopeId","data-v-7e37bbe3"]]);export{x as default};
