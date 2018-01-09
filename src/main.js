// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    loading: require('common/image/newicon.png')
})

fastclick.attach(document.body)

import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
