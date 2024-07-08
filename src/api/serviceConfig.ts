// 注意 import.meta.env 不能解构，必须用完整的名称取值

// 接口地址配置
export const serviceConfig = {
  api: import.meta.env.VITE_SERVICE_API, // 接口地址
}
