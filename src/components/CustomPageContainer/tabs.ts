// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tabsList = new Array(50).fill(null).map((_item, index) => ({
  tab: '基本信息' + index,
  key: 'base' + index,
  icon: 'CloseOutlined'
}))
/* const tabsList = [
  {
    tab: '基本信息',
    key: 'base',
    icon: 'CloseOutlined'
  },
  {
    tab: '详细信息',
    key: 'info',
    icon: 'CloseOutlined'
  }
] */

const tabsOpts = {
  tabsList: tabsList
}

export default tabsOpts
