const state={
  news:[],
  limit:10,
  index:1,
  total:0,
  newOne:null,
  loadingshow:false,
  endshow:false,
  test_env:"zen-1b701c"
}
const getters={
  news:function(state){
    return state.news
  },
  newsOne:function(state) {
    return state.newOne
  }
}
const  mutations={
  updateloadingshow(state,statue){

    state.loadingshow=statue
    console.log("修改loading成功")
  },
  updateendshow(state,statue){
    state.endshow=statue
    console.log("修改end成功")
  },
  updateNews(state){
    const  db = wx.cloud.database({env:state.test_env})
    db.collection('news').orderBy('publicTime','desc').limit(state.limit).get().then(res=>{
      state.news=res.data
      state.index=1
    })
    console.log("更新新闻信息成功！")
  },
  async loadingData(state){
    const db = wx.cloud.database({env:state.test_env})
    let total=0
    await db.collection('news').count().then(res=>{
      total=res.total
      state.total=res.total
    })
    const pages=Math.ceil(total/state.limit)
    console.log("总共"+total+"页数"+pages+"现在在"+state.index)
    if(state.index<pages) {
      db.collection('news').orderBy('publicTime', 'desc').skip(state.limit * state.index).limit(state.limit).get().then(res => {

        const newdata = state.news.concat(res.data)
        state.news = newdata
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
  getOne(index){
      state.newOne=news[index]
  },
  getOneById(id){
    let newsOne=null;
    const  that= this;
    const  db = wx.cloud.database({env:state.test_env})
    db.collection('news').where({
      id:id
    }).get().then(res=>{
          that.newsOne=res.data
    })
    console.log(state.newsOne)
    return newsOne
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
