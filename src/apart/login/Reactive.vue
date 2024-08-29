<script setup lang="ts">
  // 原始数据
  const data: any = { name: 'demo' };
  // 对原始数据的代理
  const obj = new Proxy(data, {
    get(target, key) {
      track(target, key); // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
      return target[key];
    },
    set(target, key, newVal) {
      target[key] = newVal;
      trigger(target, key); // 把副作用函数从桶里取出并执行
      return true;
    }
  })

  // 存储副作用函数的桶
  const bucket = new WeakMap();
  // 用一个全局变量存储被注册的副作用函数
  let activeEffect: any = null;
  // effect 栈
  const effectStack: Array<any> = [];
  // effect 函数用于注册副作用函数
  function effect(fn: any) {
    const effectFn: any = () => {
      cleanup(effectFn);
      // 当 effectFn 执行时, 将其设置为当前激活的副作用函数
      activeEffect = effectFn;
      effectStack.push(effectFn)
      fn();

      effectStack.pop();
      activeEffect = effectStack[effectStack.length - 1];
    }
    
    // effectFn.deps 用来存储所有与该副作用函数关联的依赖集合
    effectFn.deps = [];
    // 执行副作用函数
    effectFn();
  }

  function cleanup(effectFn: any) {
    for(let i = 0; i < effectFn.deps.length; i++) {
      const deps = effectFn.deps[i];
      deps.delete(effectFn);
    }

    effectFn.deps.length = 0;
  }

  // 在 get 拦截函数内调用 track 函数追踪变化
  function track(target: any, key: any) {
    if (!activeEffect) return;
    let depsMap = bucket.get(target);
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key);
    if (!deps) {
      depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect);

    // 将依赖集合添加到 activeEffect.deps 数组中
    activeEffect.deps.push(deps)
  }

  // 在 set 拦截函数内部调用 trigger 函数触发变化
  function trigger(target: any, key: any) {
    const depsMap = bucket.get(target)
    if (!depsMap) return;
    const effects = depsMap.get(key);

    const effectsToRun = new Set(effects);
    effects && effects.forEach((effectFn: any) => {
      if (effectFn !== activeEffect) {
        effectsToRun.add(effectFn);
      }
    })
    effectsToRun.forEach((fn: any) => fn())
  }


  /**
   * 读取/设置 obj 的属性, 检查是否为响应式数据
   */
  effect(() => {
    let { name } = obj;
    let el = document.querySelector('#demo-text');
    el && (el.innerHTML = name)
  });

  function onChange(e: any) {
    obj.name = e.target.value;
  }
</script>

<template>
  <div>
    <h1>Vue.js 设计与实现</h1>
    <h4>响应系统的设计与实现</h4>

    <div style="margin-top: 40px;">
      <div id="demo-text"></div>
      <input type="text" @input="onChange" />
    </div>
  </div>
</template>

<style scoped></style>

<style>
  body {
    place-items: start;
  }
</style>