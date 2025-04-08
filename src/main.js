import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

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

createApp(App).use(router).mount('#app')
