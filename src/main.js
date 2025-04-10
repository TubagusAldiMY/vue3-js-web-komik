import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHouse, faUser, faMagnifyingGlass,
  faBookBookmark, faCompass
} from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faUser, faMagnifyingGlass, faBookBookmark, faCompass)


const router = createRouter({

  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./components/Home.vue')
        },
        {
          path: 'explore',
          name: 'explore',
          component: () => import('./components/Explore.vue')
        },
        {
          path: 'bookmark',
          name: 'bookmark',
          component: () => import('./components/Bookmark.vue')
        }
      ]
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import('./components/Login-form.vue'),
    },
    {
      path: '/Register',
      name: 'register',
      component: () => import('./components/Register-form.vue'),
    }
  ],
  history: createWebHistory(),
})

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
