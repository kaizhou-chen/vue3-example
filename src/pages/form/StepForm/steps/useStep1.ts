// 为了避免命名冲突，使用 Symbol 创建唯一标识
const name = Symbol('step1').toString()

export const useStep1 = defineStore(name, () => {
  const form = ref({
    email: '',
    alias: '',
    domains: [
      { value: '' }
    ]
  })

  const rules: any = ref({
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '邮箱格式不正确', trigger: 'blur'},
      { validator: checkEmail, trigger: 'blur'}
    ],
    alias: [
      { required: true, message: '请输入别名', trigger: 'blur' },
      { validator: checkAlias, trigger: 'blur'}
    ]
  })

  const checked = ref<Boolean | null>(null)
  const fieldValidating = ref(false)
  const formValidating = ref(false)

  function checkEmail(rule, value, callback) {
    if (value.trim() === '') {
      callback()
      return;
    }

    const domain = value.split('@')[1]
    const text = domain.substring(0, domain.lastIndexOf('.'))
    if (text.toLowerCase() === 'gmail') {
      callback(new Error('不支持GMail'))
    } else {
      callback()
    }
  }

  function checkAlias(rule, value, callback) {
    if (value.trim() === '') {
      callback()
      return;
    }

    // 如果正在进行表单校验，且字段的异步校验已经完成，则直接使用校验结果，不再发送异步请求
    if (formValidating.value && !fieldValidating.value && checked.value !== null) {
      (checked.value) ? callback() : callback(new Error('别名已被使用'))
      return
    }

    // 其他情况，则进行异步校验
    fieldValidating.value = true

    const delayFn = () => {
      fieldValidating.value = false
      if (value === 'test') {
        checked.value = false
        callback(new Error('别名已被使用'))
      } else {
        checked.value = true
        callback()
      }
    }

    setTimeout(delayFn, 2000) // 假设延迟是在异步调用接口，来进行校验
  }

  return { form, rules, checked, fieldValidating, formValidating }
})