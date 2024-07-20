import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layouts/ChattLayout.vue'),
      children: [
        {
          name: "home",
          path: "",
          component: () => import("../views/home/index.vue")
        }
      ]
    },
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layouts/ChattLayout.vue'),
      children: [
        {
          name: "users",
          path: "users",
          component: () => import("../views/users/index.vue")
        },
        {
          name: "users-create",
          path: "users/create",
          component: () => import("../views/users/form.vue")
        }
      ]
    },
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layouts/ChattLayout.vue'),
      children: [
        {
          name: "question",
          path: "question",
          component: () => import("../views/question/index.vue")
        },
        {
          name: "question-create",
          path: "question/create",
          component: () => import("../views/question/form.vue")
        }
      ]
    },
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layouts/ChattLayout.vue'),
      children: [
        {
          name: "video",
          path: "video",
          component: () => import("../views/video/index.vue")
        },
        {
          name: "video-create",
          path: "video/create",
          component: () => import("../views/video/form.vue")
        }
      ]
    },
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layouts/ChattLayout.vue'),
      children: [
        {
          name: "camera",
          path: "camera",
          component: () => import("../views/camera/index.vue")
        }
      ]
    },
  ]
})

export default router
