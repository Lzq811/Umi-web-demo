import { RSA } from '@/utils/rsa2048'
import { message } from 'antd'
import axios from 'axios'
import moment from 'moment' // antd已经默认引入了moment
import { IterReqParams } from 'shared/ts'
import { history } from 'umi'
import { BASE_URL } from './index'

// 请求拦截器
axios.interceptors.request.use(
  (req: any) => {
    if (localStorage.getItem('token') && !req.headers['Authorization']) {
      req.headers['Authorization'] = localStorage.getItem('token')
    }
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss')
    const content = JSON.parse(JSON.stringify(req.data))
    delete content.version
    delete content.url
    const params: IterReqParams = {
      charset: 'utf-8',
      biz_content: JSON.stringify(content),
      method: req.data.url,
      format: 'json',
      // app_id:
      //   process.env.VUE_APP_API_SERVER === 'prod'
      //     ? '202311181725790413780967424'
      //     : '20191028638440506577125376',
      app_id: '20191028638440506577125376',
      sign_type: 'RSA2',
      version: req.data.version,
      timestamp: timestamp,
      sign: RSA(JSON.stringify(content), req.data.url, timestamp)
    }
    req.data = params
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (res: any) => {
    // const currentRouteName = router.history.current.name
    const methodName = `${JSON.parse(res.config.data).method.replace(/\./g, '_')}_response`
    const resData = res.data[methodName]
    if (resData.code === '10000') {
      return resData
    } else {
      if (resData.code === '40004') {
        message.error(resData.sub_msg ? resData.sub_msg : resData.msg || '接口调用出错!')
        if (resData.sub_code && resData.sub_code === '-100') {
          history.replace('/login')
          localStorage.clear()
        }
      }
      /* if (defaultRoute.includes(currentRouteName)) return res
      if (res.data[methodName].sub_code === '-100') {
        localStorageClear()
        router.push({ name: 'LOGIN' })
      } else {
        if (currentRouteName !== routeNames.AUTHORIZATION) {
          if (res.data[methodName].sub_msg) {
            let subMsg = messageInstance(
              res.headers['x-trace-id'] &&
                res.headers['x-trace-id'] !== '00000000000000000000000000000000'
                ? `${res.data[methodName].sub_msg.replaceAll(',', '，')}</br>问题跟踪码:${
                    res.headers['x-trace-id']
                  }`
                : res.data[methodName].sub_msg.replaceAll(',', '，')
            )
            messageInstanceList.push(subMsg)
          } else {
            let msg = messageInstance(
              res.headers['x-trace-id'] &&
                res.headers['x-trace-id'] !== '00000000000000000000000000000000'
                ? `${res.data[methodName].msg}</br>问题跟踪码:${res.headers['x-trace-id']}`
                : res.data[methodName].msg
            )
            messageInstanceList.push(msg)
            // Vue.prototype.$message.error(res.data[methodName].msg)
          }
          setTimeout((res) => {
            if (messageInstanceList.length >= 6) {
              messageInstanceList[0].close()
            }
          }, 0)
        }
      } */
      return resData
    }
  },
  (err) => {
    if (err.response) {
      if (err.response.status === 401) {
        message.error(err.response.data.message || '登录信息过期!')
        history.replace('/login')
        localStorage.clear()
      } else {
        message.error(err.response.data.message || '接口调用出错')
      }
    }
    return Promise.reject(err)
  }
)

export default function ajax(path: any, data: any, type: string = 'POST') {
  return new Promise((resolve, reject) => {
    let promise: any // 返回一个 promise 对象
    if (type === 'GET') {
      promise = axios.get(BASE_URL, { params: { ...data, ...path } })
    } else if (type === 'POST') {
      promise = axios.post(BASE_URL, { ...data, ...path })
    }
    // 统一处理 response
    promise
      .then((response: any) => {
        // 如果有result对象层就返回到result,否则返回到resData
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        response
          ? response.result
            ? resolve(response.result)
            : resolve(response)
          : reject(response)
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
}
