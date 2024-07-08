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
      {
        text: '基础表格',
        url: '/table/basic',
      },
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
    text: '详情页',
    icon: 'Document',
    children: [
      {
        text: '树形控件',
        url: '/detail/tree',
      },
      {
        text: '右键菜单',
        url: '/detail/context-menu',
      },
      /*
      {
        text: '虚拟滚动',
        url: '/detail/virtual-scroller',
      },
      */
    ]
  },
]

export default menuList