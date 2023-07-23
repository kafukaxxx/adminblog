import { createRouter } from 'vue-router'
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
const Admin = () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue')

const routes = [
 
  {
    path:'/login',
    name:'login',
    meta:{
      title:'请登录'
    },
    component: Login
  },
  {
    path:'/',
    name: 'admin',
    meta: {
      title:"blog 管理页面"
    },
    component:Admin
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  routes
})

router.beforeEach((to,from,next)=> {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  const userToken = window.sessionStorage.getItem('token')
  if (to.path === '/login') return next()
  if (!userToken) {
    next('/login')
  }else {
    next()
  }
})

export default router
