/**
 * !!! 多方查证发现不能使用功能 dev/test/prod 字眼来定义环境变量，应该是被 @umijs/max 占用了。
 * !!! 生产环境使用formal(正式)来代替。
 */
import { defineConfig } from '@umijs/max'
export default defineConfig({
  define: {
    'process.env': {
      BASE_URL: 'http://formal.com:8081',
      UMI_ENV: 'formal',
      NODE_ENV: process.env.NODE_ENV
    }
  }
})
