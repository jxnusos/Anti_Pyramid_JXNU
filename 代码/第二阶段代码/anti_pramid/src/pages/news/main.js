import Vue from 'vue'
import App from './news'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      wemark: '../../static/wemark/wemark'
    }
  }
}

const app = new Vue(App)
app.$mount()
