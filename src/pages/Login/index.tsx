import React from 'react'
import {Button} from 'antd'
import { history, Link } from '@umijs/max'
export default function Login () {
  return (
    <div>
      <Button type='primary' onClick={() => { history.push('/home') }}>to home</Button>
      <br />
      <br />
      <br />
      <Link to='/table'>to CRUD</Link>
    </div>
  )
}
