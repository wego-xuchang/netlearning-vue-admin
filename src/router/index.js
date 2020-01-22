import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/netlearning/index'),
    hidden: true
  },
  {
    path: '/course/detail',
    component: () => import('@/views/course/module/detail/index'),
    hidden: true
  },
  {
    path: '/course/search',
    component: () => import('@/views/search/index'),
    hidden: true
  },
  {
    path: '/person/personal',
    component: () => import('@/views/person/module/personal/index'),
    hidden: true
  },
  {
    path: '/person/favorite',
    component: () => import('@/views/person/module/favorite/index'),
    hidden: true
  },
  {
    path: '/person/setting',
    component: () => import('@/views/person/module/setting/index'),
    hidden: true
  },
  {
    path: '/admin/person',
    component: Layout,
    hidden: true,
    children: [{
      path: '/admin/person',
      name: '个人信息',
      component: () => import('@/views/person/index'),
      meta: { title: '个人信息', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin/person/password',
    component: Layout,
    hidden: true,
    children: [{
      path: '/admin/person/password',
      name: '忘记密码',
      component: () => import('@/views/person/module/password/index'),
      meta: { title: '忘记密码', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin',
    component: Layout,
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/admin/user',
    component: Layout,
    redirect: '/admin/user/student',
    name: '用户管理',
    meta: { title: '用户管理', icon: 'peoples' },
    children: [
      {
        path: 'student',
        name: 'User',
        component: () => import('@/views/user/index'),
        meta: { title: '学生管理', icon: 'user' }
      },
      {
        path: 'teacher',
        name: 'Teacher',
        component: () => import('@/views/teacher/index'),
        meta: { title: '教师管理', icon: 'education' }
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/admin/index'),
        meta: { title: '管理员管理', icon: 'people' }
      }
    ]
  },
  {
    path: '/admin/role',
    component: Layout,
    children: [{
      path: 'list',
      name: '角色管理',
      component: () => import('@/views/role/index'),
      meta: { title: '角色管理', icon: 'example' }
    }]
  },
  {
    path: '/admin/menu',
    component: Layout,
    children: [{
      path: 'list',
      name: '资源管理',
      component: () => import('@/views/menu/index'),
      meta: { title: '资源管理', icon: 'documentation' }
    }]
  },
  {
    path: '/admin/course',
    component: Layout,
    children: [{
      path: 'list',
      name: '课程管理',
      component: () => import('@/views/course/index'),
      meta: { title: '课程管理', icon: 'excel' }
    }]
  },
  {
    path: '/admin/media',
    component: Layout,
    children: [{
      path: 'list',
      name: '媒资管理',
      component: () => import('@/views/media/index'),
      meta: { title: '媒资管理', icon: 'list' }
    }]
  },
  {
    path: '/admin/setting',
    component: Layout,
    children: [{
      path: 'list',
      name: '系统管理',
      component: () => import('@/views/setting/index'),
      meta: { title: '系统管理', icon: 'table' }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
