import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

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
      name: 'Home',
      component: Home,
    }
  ],
  history: createWebHistory(),
})

createApp(App)
    .use(router)
    // .use(pinia)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
