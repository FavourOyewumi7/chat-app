import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import MainChat from '../src/views/MainChat'


const routes = [
    { 
      path: '/', 
      component: LoginPage 
    },
    {
      path: '/chats',
      component: MainChat,
      children:[
        {
          name:'profile',
          path:'/profile',
          component:()=> import('../src/pages/ProfilePage')
        },
        {
          name:'chats',
          path:'/chats',
          component:()=> import('../src/pages/ChatsPage')
        },
        {
          name:'groups',
          path:'/groups',
          component:()=> import('../src/pages/GroupsPage')
        },
        {
          name:'contacts',
          path:'/contacts',
          component:()=> import('../src/pages/ContactsPage')
        },
        {
          name:'settings',
          path:'/settings',
          component:()=> import('../src/pages/SettingsPage')
        },


      ]
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router