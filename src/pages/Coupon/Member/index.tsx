import React from 'react'
import { useLocation } from '@umijs/max'

export default function MemberCoupon () {

  const Loca:any = useLocation()

  console.log(Loca)

  return (
    <div>Member coupon {Loca.pathname} search:{Loca.search}</div>
  )
}
