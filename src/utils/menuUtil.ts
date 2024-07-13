// 项目的根路径
const base = import.meta.env.VITE_BASE_PATH

export function addMenuItem(menu: any[], type: 'menu' | 'js-cookbook') {
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
}