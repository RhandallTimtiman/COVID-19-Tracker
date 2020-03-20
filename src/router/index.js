import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

const routes = [{
        path: '/',
        name: 'global',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Global.vue')
    },
    {
        path: '/country',
        name: 'country',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Country.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router