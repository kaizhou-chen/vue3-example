import{g as x}from"./commonUtils.B_nDf0jC.2024-07-15_03.43.55.js";import{d as y,r as u,$ as k,a as r,o as d,b as B,w as l,X as i,Z as f,e as p,I as g,L as E,M as L,u as N}from"./index.ZB1ftQx1.2024-07-15_03.43.55.js";import{_ as S}from"./plugin-vueexport-helper.DlAUqK2U.2024-07-15_03.43.55.js";const b={class:"container"},I=["src"],P=y({__name:"ShoppingCart",setup(R){const m=u([]),_=u();k(()=>{for(let e=0;e<6;e++){const o=x(`/images/0${e+1}.jpg`);m.value.push(o)}});function h(e){const o=e.target,n=_.value;v(o,n,e.clientY,e.clientX)}function v(e,o,n,s){const c=o.getBoundingClientRect(),t=document.createElement("div");t.classList.add("move-to-cart"),t.style.top=n+"px",t.style.left=s+"px",t.style.setProperty("--x",c.left-s+"px");const a=document.createElement("div");a.classList.add("item"),a.style.setProperty("--y",c.top-n+"px");const C=e.cloneNode();a.appendChild(C),t.appendChild(a),document.body.appendChild(t),requestAnimationFrame(()=>{setTimeout(()=>{t.remove()},1500)})}return(e,o)=>{const n=r("el-text"),s=r("ShoppingCart",!0),c=r("el-icon"),t=r("el-card");return d(),B(t,{style:{position:"relative"}},{header:l(()=>[i("div",null,[f(" 购物车 - "),p(n,{size:"small"},{default:l(()=>[f("点击图片，添加到购物车")]),_:1})])]),default:l(()=>[i("div",b,[(d(!0),g(E,null,L(N(m),a=>(d(),g("div",{class:"card",onClick:h},[i("img",{src:a},null,8,I)]))),256))]),i("div",{ref_key:"cartRef",ref:_,class:"shopping-card"},[p(c,null,{default:l(()=>[p(s)]),_:1})],512)]),_:1})}}}),F=S(P,[["__scopeId","data-v-7c93d525"]]);export{F as default};
