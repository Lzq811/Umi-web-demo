import { FC } from 'react'
import styles from './index.less'
import LoginForm from './loginForm'

const Login: FC = () => {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  )
}

export default Login
