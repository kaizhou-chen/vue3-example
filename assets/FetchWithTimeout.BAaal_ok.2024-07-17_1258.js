import n from"./QuestionLayout.hla_40zv.2024-07-17_1258.js";import{d as l,e as s,ah as i,o as u,M as c,O as a,U as m,u as p,a as e,S as t}from"./@vue.DR0bNimP.2024-07-17_1258.js";import"./monaco-editor.CvxGLACk.2024-07-17_1258.js";import"./lodash-es.DvWjmQkM.2024-07-17_1258.js";import"./plugin-vueexport-helper.DlAUqK2U.2024-07-17_1258.js";const _=e("div",null,"给 fetch 添加超时功能",-1),f=e("ul",null,[t(" 解题思路 "),e("li",null,"创建一个高阶函数，返回一个有默认超时时间的函数"),e("li",null,"返回一个 Promise，用 setTimeout 定时，如果超时则 reject"),e("li",null,"调用 fetch，并使用 Promise 的 resolve 和 reject"),e("li",null,[e("p",null,[e("b",null,"Promise 的状态一旦确定，就不会再修改")]),e("p",null,[t("fetch 正常执行然后 resolve，"),e("b",null," 状态已确定 "),t("，到达超时时间调用 reject，被忽略")]),e("p",null,[t("请求超时然后 reject，"),e("b",null," 状态已经确定 "),t("，当 fetch 请求结束调用 resolve，被忽略")]),e("p",null,"所以，Promise 的状态和结果不受影响")])],-1),b=l({__name:"FetchWithTimeout",setup(d){const o=s(`function createRequestWithTimeout(timeout = 5000) {
  return function(url, options) {
    return new Promise((resolve, reject) => {
      // 发送请求
      fetch(url, options).then(resolve, reject)

      // 添加超时功能
      setTimeout(() => {
        reject(new Error('request timeout'))
      }, timeout)
    })
  }
}`);return(h,v)=>{const r=i("el-divider");return u(),c(n,{answer:p(o)},{default:a(()=>[_,m(r),f]),_:1},8,["answer"])}}});export{b as default};
