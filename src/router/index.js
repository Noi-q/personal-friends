import { createRouter,createWebHashHistory } from "vue-router";
import Layout from '../components/Layout/index.vue'
const syncRoutes = [
  {
    path:"/",
    redirect:"/home",
    component:Layout,
    children:[
      {
        path:'/home',
        component:()=>import('../views/Home/index.vue'),
        meta:{title:'私人朋友'}
      }
    ]
  },
  {
    path:'/plan',
    component:Layout,
    children:[
      {
        path:'/plan',
        component:()=>import('../views/Plan/index.vue'),
        meta:{title:'计划'}
      }
    ]
  },
  {
    path:'/write',
    component:Layout,
    children:[
      {
        path:'/write',
        component:()=>import('../views/Write/index.vue')
      }
    ]
  },
  {
    path:'/my',
    component:Layout,
    children:[
      {
        path:'/my',
        component:()=>import('../views/User/index.vue')
      }
    ]
  }
]

const asyncRoutes = [

]

const routes = [...syncRoutes,...asyncRoutes]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router