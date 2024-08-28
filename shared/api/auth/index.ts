import ajax from 'shared/api/ajax'
import { IterPath } from 'shared/ts'

const path: IterPath = {
  verify: {
    // 获取验证码
    version: '1.0',
    url: 'backend.org.ums.captcha'
  },
  login: {
    // 登录接口
    version: '1.0',
    url: 'backend.org.ums.user.login.pos'
  }
}

export const ReqVerify = (params: any = {}) => ajax(path.verify, params, 'POST') // 默认是POST
export const ReqLogin = (params: any = {}) => ajax(path.login, params)
