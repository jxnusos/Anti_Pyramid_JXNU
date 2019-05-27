import Vue from 'vue'
import App from './App'
import  createUtils from './utils/index'
import  MyConfig from './MyConfig'
import  store from './store/index'
Vue.prototype.$store=store
Vue.prototype.$createUtils=createUtils
Vue.prototype.$MyConfig=MyConfig
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
