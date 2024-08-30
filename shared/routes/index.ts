/**
 * 使用约定式路由时，约定 src/pages 下所有的 (j|t)sx? 文件即路由
 * ! @/pages 指向 src/pages 目录
 * ! ./ 也默认指向 src/pages 目录
 */
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
    name: '系统管理',
    icon: 'HomeFilled', // https://ant.design/components/icon-cn
    path: '/table',
    component: './Table',
    routes: [
      { name: '系统设置', icon: 'SettingOutlined', path: '/table', component: '@/pages/Access' },
      { name: '菜单设置', path: '/table/access', component: '@/pages/Access' },
      { name: '按钮设置', path: '/table/btns', component: '@/pages/Table' }
    ]
  }
]

export default routes
