import{a2 as c}from"./index.ZB1ftQx1.2024-07-15_03.43.55.js";const b=new WeakMap,s=new ResizeObserver(e=>{for(const o of e){const n=o.target,t=b.get(n);if(t){const r=o.borderBoxSize[0],i={width:r.inlineSize,height:r.blockSize};t(i)}}}),d={beforeMount(e,o){s.observe(e,{box:"border-box"});const n=c(o.value,200);b.set(e,n)},unmounted(e){s.unobserve(e)}};export{d as v};
