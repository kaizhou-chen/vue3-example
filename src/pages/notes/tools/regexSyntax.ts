export const repeat = ref([
  {
    greedy: '*',
    lazy: '*?',
    desc: '匹配 0个或多个 字符，等价于 {0,}'
  },
  {
    greedy: '+',
    lazy: '+?',
    desc: '匹配 1个或多个 字符，等价于 {1,}'
  },
  {
    greedy: '?',
    lazy: '??',
    desc: '匹配 0个或一个 字符，等价于 {0,1}'
  },
  {
    greedy: '{n}',
    lazy: '{n}?',
    desc: '匹配 n个 字符'
  },
  {
    greedy: '{n,}',
    lazy: '{n,}?',
    desc: '匹配 至少n个 字符'
  },
  {
    greedy: '{n,m}',
    lazy: '{n,m}?',
    desc: '匹配 最少n个，最多m个 字符'
  }
])

export const meta = ref([
  {
    char: '.',
    desc: '匹配 除换行符（\\n、\\r）之外的任何单个字符'
  },
  {
    char: '\\w',
    desc: '查找单词字符 （包括字母，数字，下划线或"."）'
  },
  {
    char: '\\W',
    desc: '查找非单词字符'
  },
  {
    char: '\\d',
    range: '[0-9]',
    desc: '查找数字'
  },
  {
    char: '\\D',
    range: '[^0-9]',
    desc: '查找非数字字符'
  },
  {
    char: '\\s',
    desc: '查找空白字符'
  },
  {
    char: '\\S',
    desc: '查找非空白字符'
  },
  {
    char: '\\b',
    desc: '匹配单词边界'
  },
  {
    char: '\\B',
    desc: '匹配非单词边界'
  }
])

export const group = ref([
  {
    type: '捕获分组',
    code: '<b style="color: red;">(</b>pattern<b style="color: red;">)</b>',
    desc: '用一对小括号 (pattern) 来对文本进行分组和捕获'
  },
  {
    type: '非捕获分组',
    code: '<b style="color: red;">(</b><b style="color: tomato;">?:</b>pattern<b style="color: red;">)</b>',
    desc: '不记录捕获的内容，只进行分组，有助于提高效率'
  }
])

export const lookahead = ref([
  {
    type: '前瞻断言',
    code: 'X<b style="color: red;">(</b><b style="color: tomato;">?=</b>Y<b style="color: red;">)</b>',
    desc: 'X 后紧跟着 Y'
  },
  {
    type: '否定的 前瞻断言',
    code: 'X<b style="color: red;">(</b><b style="color: tomato;">?!</b>Y<b style="color: red;">)</b>',
    desc: 'X 后没紧跟着 Y'
  }
])