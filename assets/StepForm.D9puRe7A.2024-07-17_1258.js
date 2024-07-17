import{e as a,d as q,ah as c,o as g,M as R,O as l,U as t,u as e,R as S,c as $,F as H,a7 as W,a as w,a2 as Z,n as ee,j as Y,S as z,T as P,D as A,k as X,Q as te,aB as le}from"./@vue.DR0bNimP.2024-07-17_1258.js";import{d as oe,s as ne}from"./pinia.Bj3eNWlw.2024-07-17_1258.js";import{d as ae}from"./lodash-es.DvWjmQkM.2024-07-17_1258.js";import{s as J,l as ie,r as se,u as re,d as ue}from"./marketingApi.CpdHMJCU.2024-07-17_1258.js";import{a as N}from"./element-plus.CSfJK5WV.2024-07-17_1258.js";import"./qs.Dk5Xq4N8.2024-07-17_1258.js";import"./call-bind.D4Qxyof_.2024-07-17_1258.js";import"./get-intrinsic.CjFK80KK.2024-07-17_1258.js";import"./es-errors.DzOT6E3C.2024-07-17_1258.js";import"./has-symbols.eVqrYdw7.2024-07-17_1258.js";import"./has-proto.JnoBQRdH.2024-07-17_1258.js";import"./function-bind.BbkWVFrm.2024-07-17_1258.js";import"./hasown.CQ6MvG1E.2024-07-17_1258.js";import"./set-function-length.9j_ZXv4y.2024-07-17_1258.js";import"./define-data-property.CsoVXVIa.2024-07-17_1258.js";import"./es-define-property.L9kauNg3.2024-07-17_1258.js";import"./gopd.BhGRosE1.2024-07-17_1258.js";import"./has-property-descriptors.CjB1m-qY.2024-07-17_1258.js";import"./side-channel.CdPVQs2j.2024-07-17_1258.js";import"./object-inspect.DJpltaLG.2024-07-17_1258.js";import"./axios.B4uVmeYG.2024-07-17_1258.js";import"./http.C1TganUN.2024-07-17_1258.js";import"./@vueuse.AtDz_kXm.2024-07-17_1258.js";import"./@element-plus.CMqxRFBv.2024-07-17_1258.js";import"./@popperjs.D9SI2xQl.2024-07-17_1258.js";import"./@ctrl.r5W6hzzQ.2024-07-17_1258.js";import"./dayjs.DJMltt-O.2024-07-17_1258.js";import"./async-validator.DKvM95Vc.2024-07-17_1258.js";import"./memoize-one.BdPwpGay.2024-07-17_1258.js";import"./normalize-wheel-es.B6fDCfyv.2024-07-17_1258.js";import"./@floating-ui.DgZhbb76.2024-07-17_1258.js";const ce=Symbol("step1").toString(),de=oe(ce,()=>{const U=a({email:"",alias:"",domains:[{value:""}]}),b=a({email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"},{validator:m,trigger:"blur"}],alias:[{required:!0,message:"请输入别名",trigger:"blur"},{validator:d,trigger:"blur"}]}),f=a(null),i=a(!1),s=a(!1);function m(r,h,u){if(h.trim()===""){u();return}const _=h.split("@")[1];_.substring(0,_.lastIndexOf(".")).toLowerCase()==="gmail"?u(new Error("不支持GMail")):u()}function d(r,h,u){if(h.trim()===""){u();return}if(s.value&&!i.value&&f.value!==null){f.value?u():u(new Error("别名已被使用"));return}i.value=!0,setTimeout(()=>{i.value=!1,h==="test"?(f.value=!1,u(new Error("别名已被使用"))):(f.value=!0,u())},2e3)}return{form:U,rules:b,checked:f,fieldValidating:i,formValidating:s}}),pe=w("ul",{style:{"padding-inline-start":"20px"}},[w("li",null,"失去焦点后，开始校验"),w("li",null,"输入 test，会在2秒后提示别名已被使用")],-1),me={style:{display:"flex",width:"100%"}},fe=q({__name:"StepItem1",setup(U,{expose:b}){const f=a(),i=a(Symbol("domain").toString()),{form:s,rules:m,fieldValidating:d,formValidating:r}=ne(de());function h(){s.value.domains.push({value:""})}function u(k){if(s.value.domains.length!==1){var o=s.value.domains.indexOf(k);o>-1&&s.value.domains.splice(o,1)}}function _(){return new Promise((k,o)=>{r.value=!0,f.value.validate(v=>{r.value=!1,k(v)})})}return b({validate:_}),(k,o)=>{const v=c("el-input"),x=c("el-popover"),F=c("el-form-item"),C=c("Loading"),y=c("el-icon"),L=c("Plus"),E=c("el-button"),D=c("Minus"),M=c("el-form");return g(),R(M,{style:{width:"600px"},ref_key:"formRef",ref:f,model:e(s),rules:e(m),"label-width":"auto"},{default:l(()=>[t(F,{label:"邮箱",prop:"email"},{default:l(()=>[t(x,{width:300,effect:"dark",placement:"right",trigger:"click",title:"自定义校验",content:"输入 gmail 邮箱，会提示不支持"},{reference:l(()=>[t(v,{modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=I=>e(s).email=I)},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{label:"别名",prop:"alias"},{default:l(()=>[t(x,{width:300,effect:"dark",placement:"right",trigger:"click",title:"异步校验"},{reference:l(()=>[t(v,{modelValue:e(s).alias,"onUpdate:modelValue":o[1]||(o[1]=I=>e(s).alias=I)},{suffix:l(()=>[e(d)?(g(),R(y,{key:0,class:"is-loading",style:{"font-size":"16px",color:"#000"}},{default:l(()=>[t(C)]),_:1})):S("",!0)]),_:1},8,["modelValue"])]),default:l(()=>[pe]),_:1})]),_:1}),(g(!0),$(H,null,W(e(s).domains,(I,T)=>(g(),R(F,{label:"域名"+(T+1),key:e(i)+T,prop:"domains."+T+".value",rules:[{required:!0,message:"域名不能为空",trigger:"blur"}]},{default:l(()=>[w("div",me,[t(v,{modelValue:I.value,"onUpdate:modelValue":p=>I.value=p,style:{flex:"1","margin-right":"12px"}},null,8,["modelValue","onUpdate:modelValue"]),t(E,{onClick:h},{default:l(()=>[t(y,null,{default:l(()=>[t(L)]),_:1})]),_:1}),t(E,{onClick:Z(p=>u(I),["prevent"])},{default:l(()=>[t(y,null,{default:l(()=>[t(D)]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["label","prop"]))),128))]),_:1},8,["model","rules"])}}}),_e=w("ul",{style:{"padding-inline-start":"20px"}},[w("li",null,"输入工号，比如：abc123456"),w("li",null,"如果能精确匹配，即只有一个选项，则默认选中")],-1),ve=q({__name:"StepItem2",setup(U,{expose:b}){const f=a(),i=a({handler:"",city:"",state:[]}),s=a({handler:[{required:!0,message:"请选择联系人"}],city:[{required:!0,message:"请选择城市"}],state:[{required:!0,message:"请选择数据"}]}),m=a(),d=a(!1),r=a(),h=[{label:"abc123456 张三 （部门一）",value:"abc123456"},{label:"abc345678 李四 （部门二）",value:"abc345678"}],u=[{value:"south",label:"华南",children:[{value:"guangdong",label:"广东",children:[{value:"shenzhen",label:"深圳"},{value:"guangzhou",label:"广州"}]}]}],_=["California","Illinois","Maryland","Texas","Florida","Colorado","Connecticut "],k=["CA","IL","MD","TX","FL","CO","CT"],o=_.map((C,y)=>({label:C,key:y,initial:k[y]}));function v(C,y){return y.initial.toLowerCase().includes(C.toLowerCase())}const x=ae(C=>{C!==""?(d.value=!0,setTimeout(()=>{d.value=!1,r.value=h.filter(y=>y.value.toLowerCase().indexOf(C)>-1),ee(function(){r.value.length==1&&m.value.$refs.menuRef.$el.querySelector(".el-select-dropdown__item").click()})})):r.value=[]},1e3);function F(){return new Promise((C,y)=>{f.value.validate(L=>{C(L)})})}return b({validate:F}),(C,y)=>{const L=c("el-option"),E=c("el-select"),D=c("el-popover"),M=c("el-form-item"),I=c("el-cascader"),T=c("el-transfer"),p=c("el-form");return g(),R(p,{style:{width:"650px"},ref_key:"formRef",ref:f,model:e(i),rules:e(s),"label-width":"auto"},{default:l(()=>[t(M,{label:"联系人",prop:"handler"},{default:l(()=>[t(D,{width:350,effect:"dark",placement:"right",trigger:"click",title:"人员联想"},{reference:l(()=>[t(E,{ref_key:"selectRef",ref:m,modelValue:e(i).handler,"onUpdate:modelValue":y[0]||(y[0]=n=>e(i).handler=n),"remote-method":e(x),loading:e(d),remote:"",filterable:"","reserve-keyword":"",placeholder:"请输入联系人"},{default:l(()=>[(g(!0),$(H,null,W(e(r),n=>(g(),R(L,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","loading"])]),default:l(()=>[_e]),_:1})]),_:1}),t(M,{label:"城市",prop:"city"},{default:l(()=>[t(I,{modelValue:e(i).city,"onUpdate:modelValue":y[1]||(y[1]=n=>e(i).city=n),options:u,style:{width:"100%"}},null,8,["modelValue"])]),_:1}),t(M,{label:"穿梭框",prop:"state"},{default:l(()=>[t(T,{modelValue:e(i).state,"onUpdate:modelValue":y[2]||(y[2]=n=>e(i).state=n),filterable:"",titles:["Source","Target"],"filter-method":v,data:e(o)},null,8,["modelValue","data"])]),_:1})]),_:1},8,["model","rules"])}}}),ge={style:{width:"600px"}},he={key:0,class:"el-upload__tip"},ye={key:1,class:"el-upload__tip"},ke={key:2,class:"el-upload__tip"},xe={key:0,class:"el-upload__tip"},be={key:1,class:"el-upload__tip"},we={key:2,class:"el-upload__tip"},Ce=["src"],Ve=w("div",{style:{height:"30px"}},null,-1),Se=q({__name:"StepItem3",setup(U,{expose:b}){const f=a(),i=a(J.api+"/marketing/upload"),s=a(J.api+"/marketing/download"),m=a(".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx"),d=a(10),r=a(""),h=a(""),u=a(""),_=a(""),k=a(!1),o=a([]),v=a([]);Y(async()=>{const p=await ie({});let{list:n}=p.data;n=n.map(V=>({name:V,url:s.value+"/"+V})),o.value=[...n],v.value=[...n]});function x(p,n){L();let V=`最多只能选择${d.value}个文件`;n.length>0&&(V=`最多只能选择${d.value-n.length}个文件 (已经上传过${n.length}个文件)`),r.value=V,N.warning({message:V})}function F(p){y(p,o)}function C(p){y(p,v)}function y(p,n){L();const V=10,j=m.value.split(","),B=p.name.substring(p.name.lastIndexOf(".")),G=j.indexOf(B.toLowerCase())>-1,K=p.size/1024/1024>V;if(!G){const Q=m.value.replace(/\./g,"").replace(",",", ");return h.value=`上传文件只能是 ${Q} 类型`,E(p,h.value,n),!1}return K?(u.value=`文件大小不能超过${V}M`,E(p,u.value,n),!1):!0}function L(){r.value="",h.value="",u.value=""}function E(p,n,V){N.warning({message:n});const j=V.value.indexOf(p);V.value.splice(j,1)}function D(){f.value.submit()}function M(p){_.value=p.url,k.value=!0}function I(p,n){console.log("handleRemove",p),se({filename:p.name})}function T(){return new Promise((p,n)=>{p(!0)})}return b({validate:T}),(p,n)=>{const V=c("el-divider"),j=c("el-button"),B=c("el-upload"),G=c("Plus"),K=c("el-icon"),Q=c("el-dialog");return g(),$("div",ge,[t(V,{"content-position":"left"},{default:l(()=>[z("手动上传")]),_:1}),t(B,{ref_key:"uploadRef",ref:f,"file-list":e(v),"onUpdate:fileList":n[0]||(n[0]=O=>A(v)?v.value=O:null),action:e(i),"on-preview":M,"on-remove":I,multiple:"",limit:e(d),"on-exceed":x,accept:e(m),"auto-upload":!1,"on-change":C},{trigger:l(()=>[t(j,{type:"primary"},{default:l(()=>[z("选择文件")]),_:1})]),tip:l(()=>[e(r)!==""?(g(),$("div",he,P(e(r)),1)):S("",!0),e(h)!==""?(g(),$("div",ye,P(e(h)),1)):S("",!0),e(u)!==""?(g(),$("div",ke,P(e(u)),1)):S("",!0)]),default:l(()=>[t(j,{class:"ml-3",type:"success",style:{"margin-left":"12px"},onClick:D},{default:l(()=>[z("点击上传")]),_:1})]),_:1},8,["file-list","action","limit","accept"]),t(V,{"content-position":"left"},{default:l(()=>[z("自动上传")]),_:1}),t(B,{"file-list":e(o),"onUpdate:fileList":n[1]||(n[1]=O=>A(o)?o.value=O:null),action:e(i),"list-type":"picture-card","on-preview":M,"on-remove":I,multiple:"",limit:e(d),"on-exceed":x,accept:e(m),"before-upload":F},{tip:l(()=>[e(r)!==""?(g(),$("div",xe,P(e(r)),1)):S("",!0),e(h)!==""?(g(),$("div",be,P(e(h)),1)):S("",!0),e(u)!==""?(g(),$("div",we,P(e(u)),1)):S("",!0)]),default:l(()=>[t(K,null,{default:l(()=>[t(G)]),_:1})]),_:1},8,["file-list","action","limit","accept"]),t(Q,{modelValue:e(k),"onUpdate:modelValue":n[2]||(n[2]=O=>A(k)?k.value=O:null)},{default:l(()=>[w("img",{"w-full":"",src:e(_),alt:"Preview Image",style:{width:"100%",height:"100%"}},null,8,Ce)]),_:1},8,["modelValue"]),Ve])}}}),$e=()=>{const U=a({filename:"",fileSize:0,loaded:0}),b=5*1024*1024;function f(m){U.value={filename:m.name,fileSize:m.size,loaded:0};const d=i(m);for(const r of d)s(r,d.length)}function i(m){const d=[];let r=0;for(;r<m.size;)d.push({chunk:m.slice(r,r+b)}),r+=b;return d.map(({chunk:u},_)=>({filename:m.name,chunk:u,index:_}))}function s(m,d){const{chunk:r,filename:h,index:u}=m,_=new FormData;_.append("filename",h),_.append("chunk",r),_.append("index",u),_.append("total",d),re(_,k=>{U.value.loaded+=k})}return{fileInfo:U,uploadFile:f}},Fe={style:{width:"600px"}},Ie={key:0},Re={key:0,style:{"margin-top":"20px"}},Ue=q({__name:"StepItem4",setup(U,{expose:b}){const{fileInfo:f,uploadFile:i}=$e(),s=a(),m=a(),d=X(()=>{const{loaded:o,fileSize:v}=f.value;return _(o,v)});function r(){s.value.click()}function h(o){const v=o.target.files[0];i(v)}function u(){ue(f.value.filename,(o,v)=>{m.value=_(o,v)})}function _(o,v){let x=o/v*100;return x=Math.min(x,100),parseInt(String(x))}function k(){return new Promise((o,v)=>{o(!0)})}return b({validate:k}),(o,v)=>{const x=c("el-button"),F=c("el-progress");return g(),$("div",Fe,[w("div",null,[t(x,{type:"primary",onClick:r},{default:l(()=>[z("上传文件")]),_:1}),w("input",{ref_key:"fileInput",ref:s,type:"file",onChange:h,style:{display:"none"}},null,544),e(f).filename!==""?(g(),$("div",Ie,[w("h3",null,P(e(f).filename),1),t(F,{"text-inside":!0,"stroke-width":26,percentage:e(d)},null,8,["percentage"])])):S("",!0)]),e(d)>=100?(g(),$("div",Re,[t(x,{type:"primary",onClick:u},{default:l(()=>[z("下载文件")]),_:1}),w("div",null,[t(F,{type:"dashboard",percentage:e(m)},null,8,["percentage"])])])):S("",!0)])}}}),ze={style:{display:"flex","justify-content":"center","margin-top":"20px"}},Le={style:{"margin-top":"12px",display:"flex","justify-content":"center"}},dt=q({__name:"StepForm",setup(U){const b=a(),f=a(4),i=a(0),s=a(!0),m=X(()=>[fe,ve,Se,Ue][i.value]),d=X(()=>!0);Y(()=>{d.value&&(f.value=2)});async function r(){if(!s.value){i.value++;return}await b.value.validate()?i.value++:N.error({message:"校验未通过！"})}function h(){i.value--}async function u(){if(!s.value)return;if(!await b.value.validate()){N.error({message:"校验未通过！"});return}N.success({message:"操作成功！"})}return(_,k)=>{const o=c("el-step"),v=c("el-steps"),x=c("el-button"),F=c("el-checkbox");return g(),$(H,null,[t(v,{active:e(i),"align-center":""},{default:l(()=>[t(o,{title:"动态表单",description:"自定义校验、动态创建表单项"}),t(o,{title:"各种选择框",description:"联想输入、级联选择，穿梭框"}),e(d)?S("",!0):(g(),R(o,{key:0,title:"文件上传",description:"校验文件类型、数量、大小"})),e(d)?S("",!0):(g(),R(o,{key:1,title:"大文件上传/下载",description:"文件切片上传、进度条"}))]),_:1},8,["active"]),w("div",ze,[(g(),R(le,null,[(g(),R(te(e(m)),{ref_key:"formRef",ref:b},null,512))],1024))]),w("div",Le,[e(i)>0?(g(),R(x,{key:0,onClick:h},{default:l(()=>[z("上一步")]),_:1})):S("",!0),e(i)<e(f)-1?(g(),R(x,{key:1,onClick:r,type:"primary"},{default:l(()=>[z("下一步")]),_:1})):S("",!0),e(i)==e(f)-1?(g(),R(x,{key:2,onClick:u,type:"primary"},{default:l(()=>[z("提交")]),_:1})):S("",!0),t(F,{modelValue:e(s),"onUpdate:modelValue":k[0]||(k[0]=C=>A(s)?s.value=C:null),style:{"margin-left":"20px"}},{default:l(()=>[w("span",null,P(e(s)?"开启":"关闭")+"校验",1)]),_:1},8,["modelValue"])])],64)}}});export{dt as default};
