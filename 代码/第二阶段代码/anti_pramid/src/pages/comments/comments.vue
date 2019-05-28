
<template>

<div class="container">
  <div class="fly" @click.stop="linktoaddcomment"><img src="/static/images/fly.png"></div>

<div  v-for="(value ,index) in comments"  :key="value._id" @click.stop="linkToDetail(value,index)" @longpress.stop="long(value._id,value._openid)">
      <comment :comments="value" :index="index" @addlikers="addlikers" @reducelikers="reducelikers" @showinput="showinput"></comment>
</div>
  <div v-if="loadingshow">
  <myloading ></myloading>
  </div>
  <div v-if="endshow">
    <end :total="total"></end>
  </div>

  <myinput  @mysubmit="mysubmit" :focus="inputshow"  @inputblur="inputblur"></myinput>

</div>

</template>

<script>
  import  comment from '@/components/comment'
  import  myloading from '@/components/myloading'
  import  end from '@/components/end'
  import myinput from '@/components/myinput'
  import {mapMutations,mapState} from 'vuex'
  export default {
    name: 'comments',
    data(){
      return {
        myid:'',
        myindex:0,
        inputshow:false
      }
    },
    computed:{
      ...mapState('comments',{comments:'comments',endshow:'endshow',loadingshow:'loadingshow',total:'total'})
    },
    components: {
      comment,
      myloading,
      end,
      myinput
    },
    created() {
      console.log('comments created', this)
    },
    onShow(){
      this.inputshow=false
     this.updateComments()
      console.log('comments onshow', this)
    },
   async onReachBottom() {
      const that = this
       await that.loadingData()
       if(that.endshow==true){
         that.updateloadingshow(false)
         console.log("到头了")
       }else{
         that.updateloadingshow(true)
       }
      console.log("loading"+that.loadingshow+"end"+that.endshow)
    },
    onPullDownRefresh(){
      this.inputshow=false
     this.pullDownRefesh()
    },
    methods:{
      ...mapMutations('comments',{addchildcomment:'addchildcomment',updateComments:'updateComments',addlikers:'addlikers',reducelikers:'reducelikers',loadingData:'loadingData',updateloadingshow:'updateloadingshow',updateendshow:"updateendshow"}),
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

          that.addchildcomment(that.myindex)
          that.pullDownRefesh()
        })
      },
      linkToDetail:function(value,index){
        const that = this
            let url='../comments_detail/main?_id='+value._id+'&index='+index+'&Ilike='+this.Ilike
            wx.navigateTo({
              url
            })
        },
      linktoaddcomment:function(){
        let url='../add_comment/main'
        wx.navigateTo({
          url
        })
      },
      long:async function(id,_openid) {
        const that =this
            let myopenid=''
        const openid=_openid
        console.log("信息的openid是"+openid)
       await this.$createUtils.getOpenid().then(res=>{
              myopenid=res

        })
        console.log("获得openid"+myopenid)
        if(openid==myopenid){
         wx.showModal({
           title:'提示',
           content:'确定要删除这条评论',
           success(res){
             console.log(res.confirm)
            if(res.confirm==true){
              const db=wx.cloud.database()
              db.collection('comments').doc(id).remove().then(res=>{
                if(res.stats.removed==1){
                 console.log("删除成功")
                  that.pullDownRefesh()
                }
              })

            }
           }
         })}else{
          console.log(openid===myopenid)
          console.log("不是你的消息")
        }
      },
      pullDownRefesh(){
        const  that =this
        that.updateloadingshow(false)
        that.updateendshow(false)
        new Promise((resolve, reject) => {
          wx.showNavigationBarLoading({
            success: function() {
              that.updateComments()

              resolve(200)
            },
            fail(){
              reject(500)
            }
          })
        }).then(res=>{
          if(res==200){
            wx.showToast({
              title:'刷新成功！',
              icon: 'success',
              mask:true
            })
            wx.hideNavigationBarLoading()
          }else if(res==500){
            wx.showToast({
              title:'刷新失败！',
              icon: 'fail',
              mask:true
            })
            wx.hideNavigationBarLoading()

          }
          wx.stopPullDownRefresh()
        })
        console.log(that.endshow+that.loadingshow)
      }

    }

  }
</script>

<style scoped>
.head{
  width: 100%;
  height: 30px;
  text-align: right;
}
.head img{
  width: 30px;
  height: 30px;

  }
  /*.fix{
    width: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    background-color: #facfb7;
    opacity: 0.5;
  }*/
  .fly img{
    width: 60px;
    height: 60px;
  }
  .fly{
    position: fixed;
    bottom:40px;
    right:30px;
  }

</style>
