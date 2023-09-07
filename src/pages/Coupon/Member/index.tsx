import React from 'react'
import { useLocation } from '@umijs/max'

export default function MemberCoupon () {

  const Loca = useLocation()

  return (
    <div>Member coupon {Loca.pathname} {Loca.search}</div>
  )
}
