import echarts from 'echarts';
Vue.prototype.$echarts=echarts
import Vue from 'vue'
import './styles/bootstrap.min.css'

import './config/rem.js'

import Router from 'vue-router'
import routes from './routers/router.js'
Vue.use(Router)

const router= new Router({
	routes
})

new Vue({
	router
}).$mount('#app')