
import CouponRoutes from './coupon'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '登录',
    path: '/login',
    component: './Login',
    layout: false // 添加该数据，则该路由对应的页面不会被layout，也不会自动添加到 菜单中
  },
  {
    name: '首页', // name值会被作为菜单名称
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: '优惠券',
    path: '/coupon',
    // component: '@/layouts/index', // 这样，访问 /list 和 /admin 就会带上 src/layouts/index 这个 layout 组件。
    routes: CouponRoutes
  }
]

export default routes