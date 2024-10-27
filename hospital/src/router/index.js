import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {//医院首页
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },

    {//测试页
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },
    {
      path: '/main',
      name: 'main',
      meta: {
        title: "首页"
      },
      component: () => import('@/views/MainView.vue'),
      children: [{
        path: 'center',
        name: 'center',
        meta: { title: '病人个人中心' },
        component: () => import('@/views/CenterView.vue'),
      }, {
        path: 'introduce',
        name: 'introduce',
        meta: { title: '团队介绍' },
        component: () => import('@/views/TeamIntroductionView.vue'),
      }, {
        path: 'inquiry',
        name: 'inquiry',
        meta: {
          title: "问诊页"
        },
        component: () => import('@/views/InquiryView.vue')
      }, {
        path: 'case',
        name: 'case',
        meta: { title: '病例页' },
        component: () => import('@/views/CaseView.vue'),
      },{
        path: 'Dintroduce',
        name: 'Dintroduce',
        meta: { title: '科室介绍页' },
        component: () => import('@/views/DepartmentIntroductionView.vue'),
      },
    ]
    },
  ]
})

export default router
