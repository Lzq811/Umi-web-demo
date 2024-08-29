import { defineConfig } from '@umijs/max'
export default defineConfig({
  define: {
    'process.env': {
      BASE_URL: 'http://uat.com:8081',
      UMI_ENV: 'uat',
      NODE_ENV: process.env.NODE_ENV
    }
  }
})
