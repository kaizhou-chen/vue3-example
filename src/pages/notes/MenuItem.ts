export default interface MenuItem {
  label: string;
  value: string;
  children?: Array<MenuItem>;

  /** 超链接，显示的tooltip */
  url?: string;
  tooltip?: string;

  /** 搜索节点时，可以按 tag 的内容搜索 */
  tag?: string;

  /** 未完成、重点 */
  todo?: boolean;
  primary?: boolean;
}