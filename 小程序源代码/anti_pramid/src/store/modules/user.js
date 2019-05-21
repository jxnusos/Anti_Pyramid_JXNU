const  state={
      userInfo:{}
}
const  getters={
    userInfo(state){
      return state.userInfo
    }
}
const mutations={
    userInfo(state,userInfo){
      state.userInfo=userInfo
    }
}
const actions={

}

export  default {
  state,
  getters,
  mutations,
  actions

}
