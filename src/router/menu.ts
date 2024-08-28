import { addMenuItem } from '../utils/menuUtil'

const menuList = [
  {
    text: 'Dashboard',
    icon: 'HomeFilled',
    url: '/'
  },
  
  {
    text: '表单页',
    icon: 'Edit',
    children: [
      {
        text: '基础表单',
        url: '/form/basic'
      },
      {
        text: '多步骤表单',
        url: '/form/steps'
      },
    ]
  },

  {
    text: '表格页',
    icon: 'Grid',
    children: [
      /*
      {
        text: '基础表格',
        url: '/table/basic',
      },
      */
      {
        text: '表格 + pinia',
        url: '/table/pinia',
      },
      {
        text: '可编辑表格',
        url: '/table/editable',
      },
    ]
  },

  {
    text: '笔记',
    icon: 'Document',
    children: [
      {
        text: 'CSS 笔记',
        url: '/notes/css',
      },
      {
        text: '小工具',
        children: [
          {
            text: 'JSON 格式化',
            url: '/notes/json-format'
          },
          {
            text: '正则表达式 预览',
            url: '/notes/regex-preview'
          },
        ]
      }
    ]
  },
]

addMenuItem(menuList, 'menu');

export default menuList