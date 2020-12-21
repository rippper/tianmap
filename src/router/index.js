const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('@/views/home')
    },
    {
        path: '/map',
        name: 'map',
        meta: {
            title: '天地图测试'
        },
        component: () => import('@/views/map')
    }
]

export default routes
