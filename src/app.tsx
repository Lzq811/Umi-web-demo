// 运行时配置
import { SelectLang } from '@/components/Header/SelectLang'
import { User } from '@/components/Header/User'
import { RunTimeLayoutConfig } from '@umijs/max'
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string
  currentUser?: any
}> {
  return {
    name: '@umijs/max',
    currentUser: { name: '超级管理员', sex: 'male' }
  }
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    actionsRender: () => [<SelectLang key="select-lang-header" />, <User key="header-user" />],
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    layout: 'mix', // 'side' | 'top' | 'mix' 默认 side
    menu: {
      locale: false,
      defaultOpenAll: true
    },
    splitMenus: true,
    suppressSiderWhenMenuEmpty: true,
    loading: false, // 加载状态
    waterMarkProps: {
      content: ['环球控股', '系统管理员'],
      gapX: 100,
      gapY: 100,
      fontSize: 10
    }, // 配置水印： https://procomponents.ant.design/components/water-mark\
    pageTitleRender: false, // 不渲染页面标题
    breadcrumbRender: false // 不渲染页面面包屑
  }
}
