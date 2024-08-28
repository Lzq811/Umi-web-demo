import { defineConfig } from '@umijs/max'
import routes from './shared/routes/index'

const resolve = (dir: string) => require('path').join(__dirname, dir)

export default defineConfig({
  antd: {
    style: 'less',
    momentPicker: true // 配置 antd 的 DatePicker、TimePicker、Calendar 组件是否使用 moment 作为日期处理库，默认为 false。
  },
  alias: {
    shared: resolve('/shared')
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
      BASE_URL: process.env.BASE_URL,
      PORT: process.env.PORT
    }
  },
  npmClient: 'yarn'
})