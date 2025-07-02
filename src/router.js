import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import CaseStudies from './views/CaseStudies.vue'
import CaseStudyDetail from './views/CaseStudyDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies
  },
  {
    path: '/case-studies/:id',
    name: 'CaseStudyDetail',
    component: CaseStudyDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 