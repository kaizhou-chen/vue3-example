import r from"./KeyPoint-d-BSLPfb.js";import{d as o,o as e,b as t}from"./index-DUm034Nc.js";import"./VCodeHighlight-C_Jmf-qR.js";import"./plugin-vueexport-helper-DlAUqK2U.js";const p=o({__name:"ScrollBar",setup(a){return(s,c)=>(e(),t(r,{title:"滚动条样式",notes:[{code:`/** 自定义滚动条 */
.custom-scrollbar {
  &::-webkit-scrollbar {
    width : 8px;  /* 纵向滚动条的宽度 */
    height: 8px;  /* 横向滚动条的高度 */
    display: none;
  }

  /* 滚动条的滑块 (可拖拽部分) */
  &::-webkit-scrollbar-thumb {
    background: rgba(144, 147, 153, .4);
    border-radius: 4px;
  }

  /* 滚动条的轨道 */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* 鼠标移入，才显示滚动条 */
  &:hover::-webkit-scrollbar {
    display: block;
  }
}`,desc:"",lang:"less"}]}))}});export{p as default};
