import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Todos from './views/Todos'

Vue.use(Router)

const isNotAuthenticated = (to, from, next) => {
    if (!store.getters.token) {
        next()
        return
    }
    next('/')
}

const isAuthenticated = (to, from, next) => {
    if (store.getters.token) {
        next()
        return
    }
    next('/login')
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Todos,
            beforeEnter: isAuthenticated,
        },
        {
            path: '/registration',
            component: () => import('./views/Registration'),
            beforeEnter: isNotAuthenticated,
        },
        {
            path: '/login',
            component: () => import('./views/Login'),
            beforeEnter: isNotAuthenticated,
        },
    ],
})
