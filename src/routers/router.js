import App from '../app.vue'

const jcsjk = r => require.ensure([], () => r(require('../page/jcsjk/index.vue')), 'jcsjk')
const sjgxjhpt = r => require.ensure([], () => r(require('../page/sjgxjhpt/index.vue')), 'sjgxjhpt')


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
                path:'/jcsjk',
                name:'jcsjk',
                component:jcsjk,
            },
            {
                path:'/sjgxjhpt',
                name:'sjgxjhpt',
                component:sjgxjhpt
            }
        ]
    }
]