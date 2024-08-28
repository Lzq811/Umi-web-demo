// 前后端约定参数
interface IterReqParams {
  charset: string
  biz_content: string
  method: string
  format: string
  app_id: string
  sign_type: string
  version: string
  timestamp: string
  sign: string
  [propName: string]: any
}

interface IterPath {
  [propName: string]: {
    version: string
    url: string
  }
}

export { IterPath, IterReqParams }
