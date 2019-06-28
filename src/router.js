import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WhyUs from './views/WhyUs.vue'
import CaseStudies from './views/CaseStudies.vue'
import AboutUs from './views/AboutUs.vue'
import Payment from './views/Payment.vue'
import ResumeForm from './views/ResumeForm.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import Resume from './views/Resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/why-us',
      name: 'why-us',
      component: WhyUs
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: CaseStudies
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/resume-form',
      name: 'resume-form',
      component: ResumeForm
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
  ]
})
