import Rsa2048 from '@/utils/rsa2048'
import { history } from '@umijs/max'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { ReqLogin, ReqVerify } from 'shared/api/auth'
import './index.less'

type FieldType = {
  username?: string
  password?: string
  remember?: boolean
  verifyCode?: string
}

type ResVerifyCode = {
  t: string
  verifyCode: string
}

type LoginSubmit = ResVerifyCode & FieldType & { verify: number }

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const reg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&.～、,:;+–=_^：；。，？！￥~·_—`\\|/-])[A-Za-z\d$@$!%*?&#.～、,:;+–=_^：；。，？！￥~·_—`\\|/-]{8,30}/

const FormRules = {
  username: [{ required: true, message: '请输入用户名称!' }],
  password: [
    { required: true, message: '请输入密码!' },
    { pattern: reg, message: '请输入正确的密码,长度在8-30之间,必须包含大小写字母数据和特殊符号!' }
  ],
  verifyCode: [
    { required: true, message: '验证码!' },
    { pattern: /^\d{4}$/, message: '请输入4位数字验证码!' } // 匹配4位数字
  ]
}

const LoginForm: React.FC = () => {
  const [verify, setVerify] = useState<ResVerifyCode>({ verifyCode: '', t: '' })
  const [form] = Form.useForm()

  useEffect(() => {
    getVerifyCode()
    enterKeySubmit()
  }, [])

  const enterKeySubmit = () => {
    // 点击回车键出发登录事件
    window.addEventListener('keydown', (event: any) => {
      if (event.key === 'Enter') {
        // 或者 event.keyCode === 13
        form.submit()
      }
    })
  }

  const getVerifyCode = async () => {
    const res: ResVerifyCode | any = await ReqVerify()
    setVerify(res)
  }

  const onFinish: FormProps<FieldType>['onFinish'] = async (values: any) => {
    const params: LoginSubmit = {
      username: Rsa2048(values.username),
      password: Rsa2048(values.password),
      verifyCode: values.verifyCode || '',
      t: verify.t,
      verify: 3
    }

    const res: any = await ReqLogin(params)
    localStorage.setItem('token', `${res.tokenHead}${res.token}`)
    // indexConfig判断登录后进入的首页路由
    // localStorage.setItem('indexConfig', res.indexConfig)
    getUserInfo()
  }

  const getUserInfo = () => {
    // 获取用户信息
    history.replace('/home')
  }

  return (
    <Form
      className="login-form-wrapper"
      layout="vertical"
      form={form}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      validateTrigger="onBlur"
      requiredMark={false}
    >
      <Form.Item<FieldType> label="用户名" name="username" rules={FormRules.username}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="密  码" name="password" rules={FormRules.password}>
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> label="验证码" name="verifyCode" rules={FormRules.verifyCode}>
        <Space>
          <Input />
          <div className="verify-code-image" onClick={getVerifyCode}>
            <img src={verify.verifyCode} alt="" />
          </div>
        </Space>
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登 陆
        </Button>
      </Form.Item>
      <Form.Item<FieldType> wrapperCol={{ offset: 16, span: 8 }}>
        <Button type="link">忘记密码?</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
