// 项目的根路径
const base = import.meta.env.VITE_BASE_PATH

export function addMenuItem(menu: any[], type: 'menu' | 'js-cookbook' | 'css-cookbook') {
  if (base !== '/') {
    return;
  }

  // 本地环境，在菜单栏上添加 JavaScript 笔记
  if (type === 'menu') {
    const item = menu.find(x => x.text === '笔记')
    item?.children?.unshift({
      text: 'JavaScript 笔记',
      url: '/notes/js',
    })
  }

  // 本地环境，在JavaScript笔记里添加 自学课程
  if (type === 'js-cookbook') {
    const study = [
      {
        label: '自学课程',
        value: 'SelfStudy'
      },
      {
        label: '俄罗斯方块',
        value: 'Tetris'
      },
    ];

    menu.splice(menu.length, 0, ...study);
  }

  // 本地环境，在CSS笔记里添加 其他
  if (type === 'css-cookbook') {
    menu.push({
      label: '其他',
      value: 'other',
      children: [
        {
          label: 'CSS 笔记',
          value: 'CssNote'
        },
        {
          label: '相对单位 em/rem',
          value: 'RelativeUnit'
        },
        {
          label: '悬浮抽卡',
          value: 'GachaGame'
        },
        {
          label: '颜色转换',
          value: 'ColorTools'
        },
        {
          label: '文字转图片',
          value: 'TextToImage'
        },
      ]
    })
  }
}