const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: '首页',
    path: '/home',
    component: './Home'
  },
  {
    path: '/login',
    layout: false,
    component: './Login'
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access'
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table'
  }
]

export default routes
