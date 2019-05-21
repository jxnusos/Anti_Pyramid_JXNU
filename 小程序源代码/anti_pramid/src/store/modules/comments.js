const state={
  comments:[],
  limit:10,
  index:1,
  total:0,
  loadingshow:false,
  endshow:false
}
const getters={
  comments:function(state){
    return state.comments
  }
}
const  mutations={
  async addchildcomment(state,index){
    console.log("index是"+index)
    state.comments[index].childcomment=state.comments[index].childcomment+1
    const id= state.comments[index]._id
    const db = wx.cloud.database()
    const _ = db.command
    await db.collection('comments').doc(id).update({
      data: {
        childcomment:_.inc(1)
      },
      success(res){
        console.log("子评论数添加"+res)
      }
    })

  },
  updateloadingshow(state,statue){

    state.loadingshow=statue
    console.log("修改loading成功")
  },
  updateendshow(state,statue){
    state.endshow=statue
    console.log("修改end成功")
  },
  updateComments(state){
    const  db = wx.cloud.database()
    db.collection('comments').orderBy('due','desc').limit(state.limit).get().then(res=>{
      state.comments=res.data
      state.index=1
    })
    console.log("更新评论信息成功！")
  },
  async loadingData(state){
    const that =this
      const db = wx.cloud.database()
    let total=0
   await db.collection('comments').count().then(res=>{
        total=res.total
     state.total=res.total
    })
    const pages=Math.ceil(total/state.limit)
    console.log("总共"+total+"页数"+pages+"现在在"+state.index)
    if(state.index<pages) {
      db.collection('comments').orderBy('due', 'desc').skip(state.limit * state.index).limit(state.limit).get().then(res => {

        const newdata = state.comments.concat(res.data)
        state.comments = newdata
        state.index++
        console.log(state.index)
      })
      state.endshow=false
      state.loadingshow=true
    }else{
      state.endshow=true
      state.loadingshow=false
      console.log("到底了，展示end"+state.endshow,"隐藏loading"+state.loadingshow)
    }
  },

 async addlikers(state,index){

    console.log("添加了")
  console.log(state.comments[index])
   const  id= state.comments[index]._id
   wx.setStorageSync(id,true)
    state.comments[index].likers=state.comments[index].likers+1
    const _id=state.comments[index]._id
    const db = wx.cloud.database()
    const _ = db.command
   await db.collection('comments').doc(_id).update({
      data: {
        likers:_.inc(1)
      },
      success(res){
        console.log(res)
      }
    })
  },
 async reducelikers(state,index){
    console.log("减少了")
    console.log("减少前"+state.comments[index].likers)
   const  id= state.comments[index]._id
    wx.setStorageSync(id,false)
   state.comments[index].likers=state.comments[index].likers-1
    const _id=state.comments[index]._id
    const db = wx.cloud.database()
    const _ = db.command
    console.log("减少后"+state.comments[index].likers)
   await db.collection('comments').doc(_id).update({
      data: {
        likers: state.comments[index].likers
      },
      success(res){
        console.log(res)
      }
    })
  }
}
const  actions={

}
export default {
  state,
  getters,
  mutations,
  actions
}
