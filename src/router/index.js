import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/main.vue'
import app from '../App.vue'
import personal from '../views/PersonalInfoView.vue'
import contact from '../views/ContactMeView.vue'
import personalSkill from '../views/personalSkillsView.vue'
import personalWorks from '../views/worksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: app,
      children: [
        {
          path: '/',
          name: 'main',
          component: main
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal
        },
        {
          path: '/contact',
          name: 'contact',
          component: contact
        },
        {
          path: '/personalSkill',
          name: 'personalSkill',
          component: personalSkill
        },
        {
          path: '/personalWorks',
          name: 'personalWorks',
          component: personalWorks
        }
      ]
    }
  ]
})

export default router
