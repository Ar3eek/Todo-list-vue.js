const routes = [
    { path: '/', component: () => import('./pages/Index.vue') },    // https://router.vuejs.org/guide/advanced/lazy-loading.html
    { path: '/users/:id', component: () => import('./pages/User.vue') },
]

export default routes;