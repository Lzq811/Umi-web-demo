import { useModel } from '@umijs/max'
import { FC } from 'react'

export const User: FC = () => {
  const { initialState } = useModel('@@initialState')
  const { currentUser } = initialState || {}
  return <span>{currentUser?.name}</span>
}
