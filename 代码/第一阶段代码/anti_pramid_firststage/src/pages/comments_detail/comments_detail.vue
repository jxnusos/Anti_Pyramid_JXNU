<template>
<div class="wrap">
<comment :comments="comment" :index="index" @addlikers="addlikers" @reducelikers="reducelikers" @showinput="showinput"></comment>
  <div v-for="(value,index) in childcomment" :index="index" :key="value._id" >
  <childcomment :childcomment="value"></childcomment>
  </div>

    <myinput  @mysubmit="mysubmit" :focus="inputshow"  @inputblur="inputblur"></myinput>

</div>
</template>

<script>
  import comment from '@/components/comment'
  import myinput from '@/components/myinput'
  import {mapState,mapMutations} from 'vuex'
  import Childcomment from "../../components/childcomment";
  export default {
    name: "comments_detail",
    components:{
      Childcomment,
      comment,
      myinput
    },
    computed:{
      ...mapState('comments',{comments:'comments',endshow:'endshow',loadingshow:'loadingshow'}),
      ...mapState('childcomment',{childcomment:'childcomment'})
    },

    data(){
      return {
        comment:{},
        index:0,
        inputshow:false,
        myid:'',
        myindex:0
      }
    },
    onShow(){
console.log('commentdetail onshow')
      const  that = this
      that.inputshow=false
      const id= that.comment._id
      console.log("parent id是"+id)
     that.updatechildcomment(id)
    },
    onLoad(query){
      const that = this
      const index = query.index
      that.index=parseFloat(index)
      that.comment=that.comments[this.index]
      console.log("加载了"+JSON.stringify(that.comment))
    },
    methods: {
      ...mapMutations('comments', { addchildcomment:'addchildcomment',addlikers: 'addlikers', reducelikers: 'reducelikers' }),
      ...mapMutations('childcomment', { updatechildcomment: 'updatechildcomment' }),
      showinput:function(index,id){
        console.log("展示输入款")
        this.myindex=index
        this.myid=id
        this.inputshow=true
      },
      inputblur:function(){
        const  that = this
        setTimeout(()=>{
          that.inputshow=false
        },500)
      },
      mysubmit:async function(content){
        console.log("进来了")
        const that= this
        that.inputshow=false
        console.log("信息是"+content+"index是"+that.myindex)
        const id= that.comments[that.myindex]._id
        const  user= wx.getStorageSync('anti_userInfo')
        console.log("添加的id是"+id)
        let openid=''
        await   this.$createUtils.getOpenid().then(res=>{
          openid=res
        })
        const  db = wx.cloud.database()
        db.collection('child_comments').add({
          data:{
            userName:user.nickName,
            imageSrc:user.avatarUrl,
            parent_id:that.myid,
            content:content,
            due:new Date()
          }
        }).then(res=>{
          console.log("添加结束了")
          const id= that.comment._id
          that.addchildcomment(that.myindex)
          that.updatechildcomment(id)
        })
      },
    }
    };
</script>

<style scoped>

</style>
