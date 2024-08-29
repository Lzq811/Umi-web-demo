import { defineConfig } from '@umijs/max'
import routes from './shared/routes/index'

const resolve = (dir: string) => require('path').join(__dirname, dir)

export default defineConfig({
  antd: {
    style: 'less'
    /**
     * ! momentPicker:true 配置后会导致 打包 失败
     */
    // momentPicker: true // 配置 antd 的 DatePicker、TimePicker、Calendar 组件是否使用 moment 作为日期处理库，默认为 false-dayjs。
  },
  alias: {
    shared: resolve('/shared')
    // umi自动配置了 '@/'指向 'src/'
  },
  outputPath: 'dist', // 打包目录名称
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max'
  },
  routes: routes,
  define: {
    'process.env': {
      BASE_URL: 'http://47.106.154.148:8081',
      UMI_ENV: 'dev',
      NODE_ENV: process.env.NODE_ENV
    }
  },
  npmClient: 'yarn'
})
