const routes = [
  {
    name: '会员优惠券',
    path: 'member', // 子路由不用加 /member 斜杠
    component: './Coupon/Member'
  },
  {
    name: '电影优惠券',
    path: 'movies',
    component: './Coupon/Movies'
  }
]

export default routes