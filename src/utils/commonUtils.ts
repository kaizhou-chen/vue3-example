// 项目的根路径
const base = import.meta.env.VITE_BASE_PATH

/**
 * 获取 public 目录下的图片路径
 */
export function getPublicImage(path: string) {
  if (path.indexOf('/') == 0) {
    path = path.substring(1)
  }
  return base + path
}

/**
 * 获取 assets 目录下的图片路径
 */
export function getAssetsImage(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

const x2n = (x) => parseInt(x, 16); // convert hexa value to number 
const n2x = (n) => `0${n.toString(16)}`.slice(-2).toUpperCase(); // convert n to 2digits Hexa
const rgb2hex = (rgb) => rgb.match(/\d+/g).reduce((s, x) => s + n2x(Number(x)),'#');
const hex2rgb = (hexa) => 'rgb(' + hexa.match(/([\da-f]{2})/gi).map(x2n).join(', ') + ')';

/**
 * RGB 与 HEX 颜色互相转换
 * @param color 
 * @returns 
 */
export function colorConvert(color) {
  if (color.includes('#')) {
    return hex2rgb(color);
  } else if (color.includes(',')) {
    return rgb2hex(color);
  } else {
    return 'unknown input value';
  }
}

/**
 * 获取 query 参数
 * @param url 
 * @returns 
 */
export function parseQuery(url) {
  const q = {};
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
}

/**
 * 配合 v-click-outside 使用
 * @param child 检查触发点击的元素，是否在某个父元素下
 * @param parentClass 
 * @returns 
 */
export function checkParent(child, parentClass: string | Array<string>) {
  let node = child;

  let classes: any[] = []
  if (typeof(parentClass) === "string") {
    classes.push(parentClass)
  } else {
    classes = [... parentClass]
  }

  // keep iterating unless null
  while (node != null) {
    let match = classes.some(x => node.classList?.contains(x))
    if (match) {
      return true;
    }
   node = node.parentNode;
  }

  return false;
}

/**
 * element 根节点
 * value 要匹配的值
 * field 要查找的字段
 */
function searchTree(element, value, field) {
  if (element[field || 'id'] == value) {
    return element;
  } else if (element.children != null) {
    let result = null;
    for(let i = 0; result == null && i < element.children.length; i++) {
      result = searchTree(element.children[i], value, field);
    }
    return result;
  }
  return null;
}

export function searchTreeList(list, value, field?) {
  for (const item of list) {
    let result = searchTree(item, value, field);
    if (result) {
      return result
    }
  }
  return null;
}