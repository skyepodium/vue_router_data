import VueRouter from 'vue-router'
import vue from 'vue'

vue.use(VueRouter)

import Main from '@/views/Main.vue'
import Query from '@/views/Query.vue'
import Params from '@/views/Params.vue'

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main'
        },
        {
            path: '/query',
            component: Query,
            name: 'Query'
        },
        {
            path: '/params',
            component: Params,
            name: 'Params',
            // true로 설정하면 데이터를 props로도 받습니다.
            props: true
        }     
    ]
})

export { router }