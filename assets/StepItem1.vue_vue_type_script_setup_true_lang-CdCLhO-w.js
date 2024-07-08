import{r as m,d as F,a as n,o as g,b as k,w as l,e,u as a,K as I,I as N,L as P,M as R,X as v,aa as D}from"./index-CIcVr1hx.js";import{d as O,s as T}from"./main-9VzDdX-P.js";const j=Symbol("step1").toString(),z=O(j,()=>{const C=m({email:"",alias:"",domains:[{value:""}]}),V=m({email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"},{validator:y,trigger:"blur"}],alias:[{required:!0,message:"请输入别名",trigger:"blur"},{validator:h,trigger:"blur"}]}),r=m(null),d=m(!1),t=m(!1);function y(_,s,o){if(s.trim()===""){o();return}const f=s.split("@")[1];f.substring(0,f.lastIndexOf(".")).toLowerCase()==="gmail"?o(new Error("不支持GMail")):o()}function h(_,s,o){if(s.trim()===""){o();return}if(t.value&&!d.value&&r.value!==null){r.value?o():o(new Error("别名已被使用"));return}d.value=!0,setTimeout(()=>{d.value=!1,s==="test"?(r.value=!1,o(new Error("别名已被使用"))):(r.value=!0,o())},2e3)}return{form:C,rules:V,checked:r,fieldValidating:d,formValidating:t}}),A=v("ul",{style:{"padding-inline-start":"20px"}},[v("li",null,"失去焦点后，开始校验"),v("li",null,"输入 test，会在2秒后提示别名已被使用")],-1),G={style:{display:"flex",width:"100%"}},$=F({__name:"StepItem1",setup(C,{expose:V}){const r=m(),d=m(Symbol("domain").toString()),{form:t,rules:y,fieldValidating:h,formValidating:_}=T(z());function s(){t.value.domains.push({value:""})}function o(c){if(t.value.domains.length!==1){var i=t.value.domains.indexOf(c);i>-1&&t.value.domains.splice(i,1)}}function f(){return new Promise((c,i)=>{_.value=!0,r.value.validate(p=>{_.value=!1,c(p)})})}return V({validate:f}),(c,i)=>{const p=n("el-input"),S=n("el-popover"),x=n("el-form-item"),M=n("Loading"),w=n("el-icon"),B=n("Plus"),E=n("el-button"),U=n("Minus"),q=n("el-form");return g(),k(q,{style:{width:"600px"},ref_key:"formRef",ref:r,model:a(t),rules:a(y),"label-width":"auto"},{default:l(()=>[e(x,{label:"邮箱",prop:"email"},{default:l(()=>[e(S,{width:300,effect:"dark",placement:"right",trigger:"click",title:"自定义校验",content:"输入 gmail 邮箱，会提示不支持"},{reference:l(()=>[e(p,{modelValue:a(t).email,"onUpdate:modelValue":i[0]||(i[0]=u=>a(t).email=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{label:"别名",prop:"alias"},{default:l(()=>[e(S,{width:300,effect:"dark",placement:"right",trigger:"click",title:"异步校验"},{reference:l(()=>[e(p,{modelValue:a(t).alias,"onUpdate:modelValue":i[1]||(i[1]=u=>a(t).alias=u)},{suffix:l(()=>[a(h)?(g(),k(w,{key:0,class:"is-loading",style:{"font-size":"16px",color:"#000"}},{default:l(()=>[e(M)]),_:1})):I("",!0)]),_:1},8,["modelValue"])]),default:l(()=>[A]),_:1})]),_:1}),(g(!0),N(P,null,R(a(t).domains,(u,b)=>(g(),k(x,{label:"域名"+(b+1),key:a(d)+b,prop:"domains."+b+".value",rules:[{required:!0,message:"域名不能为空",trigger:"blur"}]},{default:l(()=>[v("div",G,[e(p,{modelValue:u.value,"onUpdate:modelValue":L=>u.value=L,style:{flex:"1","margin-right":"12px"}},null,8,["modelValue","onUpdate:modelValue"]),e(E,{onClick:s},{default:l(()=>[e(w,null,{default:l(()=>[e(B)]),_:1})]),_:1}),e(E,{onClick:D(L=>o(u),["prevent"])},{default:l(()=>[e(w,null,{default:l(()=>[e(U)]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["label","prop"]))),128))]),_:1},8,["model","rules"])}}});export{$ as _};
