const login = {
  path: '/login',
  name: 'login',
  meta: {
    title: '商户登录'
  },
  component: () => import('@/components/login')
}
const settle = {
  path: '/settle',
  name: 'settle',
  meta: {
    title: '商户入驻'
  },
  component: () => import('@/components/settle/settle')
}
const page404 = {
  path: '/404',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/components/error-page/page404')
}
const index = {
  path: '/index',
  name: 'index',
  meta: {
    title: '卡宝管家'
  },
  component: () => import('@/components/index')
}
const publish = {
  path: '/publish',
  name: 'publish',
  meta: {
    title: '发布商品'
  },
  component: () => import('@/components/publish/publish')
}
const main = {
  path: '/main',
  name: 'main',
  meta: {
    title: '个人中心'
  },
  component: () => import('@/components/main')
}
export const routers = [
  login,
  settle,
  page404,
  index,
  publish,
  main,
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/*',
    redirect: '/404'
  }
]
