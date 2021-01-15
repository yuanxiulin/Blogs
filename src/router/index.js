import Vue from 'vue'
import VueRouter from 'vue-router'
import Artical from '../components/Artical.vue'
import Blogs from '../components/Blogs.vue'
import Blog from '../components/Blog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Artical',
    component: Artical
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component:Blogs
  },
  {
    path: '/Blog/:id',
    name: 'Blog',
    component:Blog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
