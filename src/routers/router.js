import App from '../app.vue'

const jcsjk = r => require.ensure([], () => r(require('../page/jcsjk/index.vue')), 'jcsjk')
const sjgxjhpt = r => require.ensure([], () => r(require('../page/sjgxjhpt/index.vue')), 'sjgxjhpt')
const zhcs = r => require.ensure([], () => r(require('../page/zhcs/index.vue')), 'zhcs')


export default [
    {
        path:'/',
        component: App,
        children:[
            {
                path:'',
                redirect:{ name:'jcsjk'}
            },
            {
                path:'/1',
                name:'jcsjk',
                component:jcsjk,
            },
            {
                path:'/2',
                name:'sjgxjhpt',
                component:sjgxjhpt
            },
            {
                path: '/3',
                name: 'zhcs',
                component: zhcs
            }
        ]
    }
]