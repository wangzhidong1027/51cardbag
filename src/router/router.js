const login = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: () => import('@/components/login')
}
const settle = {
  path: '/settle',
  name: 'settle',
  meta: {
    title: '入驻'
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


export const routers = [
  login,
  settle,
  page404,
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/*',
    redirect: "/404"
  }
]
