import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/user'
import  comments from './modules/comments'
import  childcomment from './modules/childcomment'
import  news from './modules/news'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      user: {
        namespaced: true,
        ...user
      },
      comments: {
        namespaced: true,
        ...comments
      },
      childcomment:{
        namespaced:true,
        ...childcomment
      },
      news:{
        namespaced:true,
        ...news
      }
    }
  }
)
export  default  store


