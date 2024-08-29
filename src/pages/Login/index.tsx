import { FormattedMessage, getLocale, setLocale, useIntl } from '@umijs/max'
import { FC } from 'react'
import styles from './index.less'
import LoginForm from './loginForm'

const Login: FC = () => {
  // console.log('ENV', process.env)
  const intl = useIntl()
  const msg = intl.formatMessage({ id: 'username' })
  const toggleI18N = () => {
    const curr = getLocale() // 当前的
    const lang = curr === 'en-US' ? 'zh-CN' : 'en-US'
    setLocale(lang, false) // 第二个参数表示是否刷新页面，默认true.
  }
  return (
    <div className={styles.page}>
      <h1>
        <FormattedMessage id="welcome" />
        {msg}
      </h1>
      <div onClick={toggleI18N} style={{ cursor: 'pointer' }}>
        change i18N
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
