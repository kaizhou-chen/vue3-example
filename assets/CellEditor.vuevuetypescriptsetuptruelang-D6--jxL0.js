import f from"./InputEditor-6macuU8-.js";import v from"./NumberEditor-DoxhkF63.js";import E from"./DateEditor-XrEF1fKT.js";import V from"./SelectEditor-BSQWtW3p.js";import{d as M,a8 as m,a9 as x,r as d,c as y,$ as A,j as b,o as w,b as C,N,u as g}from"./index-Dtstn163.js";const j=M({__name:"CellEditor",props:m({type:{},scope:{},options:{}},{modelValue:{},modelModifiers:{}}),emits:m(["onAfterEdit"],["update:modelValue"]),setup(r,{emit:u}){const t=x(r,"modelValue"),n=r,i=u,s=d(),a=d(),p=y(()=>({text:f,number:v,date:E,select:V})[n.type]||null);A(()=>{s.value=t.value,a.value=t.value}),b(t,o=>{a.value=o});function c(o){const e={};e.valid=o,e.rowIndex=n.scope.$index,e.field=n.scope.column.property,e.changed=s.value!=a.value,i("onAfterEdit",e)}return(o,e)=>(w(),C(N(g(p)),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),options:o.options,onOnAfterEdit:e[1]||(e[1]=l=>c(l))},null,40,["modelValue","options"]))}});export{j as _};
