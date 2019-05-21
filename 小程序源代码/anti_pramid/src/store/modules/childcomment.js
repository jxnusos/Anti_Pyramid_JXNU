const state={
  childcomment:[],
  total:0
}
const mutations={
   updatechildcomment(state,parentid){
     const db = wx.cloud.database()
     console.log("parent id是，马上查"+typeof (parentid))
     db.collection('child_comments').orderBy('due','desc').where({
       parent_id:parentid
     }).get().then(res=>{
       console.log("获得子评论"+JSON.stringify(res.data))
      state.childcomment=res.data
     })

   }
}
export  default {
  state,
  mutations
}
