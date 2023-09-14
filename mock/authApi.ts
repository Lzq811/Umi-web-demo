// 登录校验相关的api

export default {
  'POST /data-api/interface/api/login': (req: any, res: any) => {
    res.json({
      success: true,
      code: 200,
      msg: '登录成功!',
      data: {}
    })
  }
}