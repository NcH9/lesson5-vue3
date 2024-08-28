import { createWebHistory, createRouter } from 'vue-router'

import component from '@/components/component.vue'
import rout1 from '../components/rout1.vue'
import rout2 from '../components/rout2.vue'
import parent from '../components/parent.vue'
import child from '../components/child.vue';
import unAuthenticated from '@/components/unAuthenticated.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
    { 
        path: '/', 
        component: component,
        meta: {
            requiresAuth: false,
            requiresAdmin: false
        },
    },
    { 
        path: '/rout1/:customPath', 
        name: 'rout1', 
        component: rout1,
        meta: {
            requiresAuth: true,
            requiresAdmin: false
        },
        
    },
    { 
        path: '/rout2', 
        component: rout2,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        },
    },
    {
        path: '/unAuthenticated',
        name: 'unAuthenticated',
        component: unAuthenticated,
    }

    ,
    {
        path: '/parent',
        component: parent,
        children: [
            {
                path: 'child',
                component: child,
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let isAuthenticated = true;
let isAdmin = false;

// router.beforeEach((to, from, next) => {
//     if (!isAuthenticated && to.name != 'unAuthenticated') {
//         if (to.meta.requiresAuth){
//             next('unAuthenticated');
//         }
//         else next()
//     }
//     else next()
// })

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !isAuthenticated) {
        return {
            path: '/NotFound',
        }
    } else if (to.meta.requiresAuth && isAuthenticated){
        if (to.meta.requiresAdmin && !isAdmin){
            return {
                path: '/NotFound',
            } 
        }
    }
})
export default router