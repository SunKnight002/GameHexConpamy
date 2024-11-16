import {createRouter, createWebHistory} from 'vue-router'
// 引入首頁
import HomeView from '../views/HomeView.vue'
// 引入前導頁
import FrontView from '../views/FrontView.vue'
// 引入公司介紹頁
import AboutView from '../views/AboutView.vue'
// 引入招募聯絡頁
import RecruitmentView from '@/views/RecruitmentView.vue'

const routes = [
    {
        path: '/',
        name: '首頁',
        component: HomeView
    }, {
        path: '/about',
        name: '關於GameHex公司',
        component: () => import ('../views/AboutView.vue')
    }, {
        path: '/front',
        name: 'GameHex公司前導頁',
        component: () => import ('../views/FrontView.vue')
    }, {
        path: '/recruitment',
        name: 'GameHex招募與聯絡頁',
        component: () => import ('../views/RecruitmentView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash};
        }
        return {x: 0, y: 0};
    }
})

export default router
