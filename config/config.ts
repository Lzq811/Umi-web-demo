
/**
 * 根目录的 .umirc.ts 删除之后 就会 默认 使用 config/config.ts 里面的配置
 * 注意 删除 .umirc.ts 之后要 重新 yarn dev 启动服务才生效
 */

import { defineConfig } from '@umijs/max';
import routes from './routes'
export default defineConfig({
  /**
   * 配置了antd ，就可以正常使用 antd 组件了， 是按需引入
   * 对象里面可以做一些 antd 的配置
   */
  antd: {
    dark: false
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  /**
   * 如果umirc配置文件中有 routes 就会变成 配置式 路由
   * 如果不存在routes就默认是 约定式 路由
   * 我们有需要用routes自动生成菜单选项，所以使用配置式路由
   */
  routes, // 把routes拆分出来单独配置
  npmClient: 'yarn',
})
