<template>
    <div class="container">
      <div class="head">
        <div class="body">
        <div  class="head_left">
          <img :src="comments.imageSrc" class="headImage">
        </div>
        <div class="head_right">
          <text  class="userName">{{comments.userName}}</text>
          <text class="publicDate">{{nowdata}}</text>
        </div>
        </div>
        <div class="delete" v-show="deleteshow">
          <img src="/static/tabs/delete.png">
        </div>
      </div>
      <div class="content">
        <text class="content_">{{comments.content}}</text>
      </div>
      <div class="operation">
        <img  :src="Ilike==true?like_choose:like"  class="operation_img" :class="{'puffOut':comments.likers>0}" @click.stop="clickLike" />
        <text >{{comments.likers}}</text>
        <img src="/static/tabs/message.png" class="operation_img"  @click.stop="mycomment"/>

        <text>{{comments.childcomment}}</text>
      </div>

    </div>
</template>

<script>
  import {mapState,mapMutations}  from 'vuex'
  export default {
    name: "comment",
    props:['comments','index'],
    data(){
      return {
        like:"/static/tabs/like.png",
        like_choose:"/static/tabs/like_choose.png",
        Ilike:false,
        deleteshow:false,
        childcomment:'',
      }
    },
    created(){
      console.log('comment created')
      const that = this
      const id = that.comments._id
      that.Ilike= wx.getStorageSync(id)
    },
    onShow(){
      console.log('comment onshow')
      const that = this
      const id = that.comments._id
      that.Ilike= wx.getStorageSync(id)
      console.log("我的状态是"+that.Ilike)
    },
    computed:{
      like:function(){
        const that = this
        const id = that.comments._id
        return wx.getStorageSync(id)
      },
      nowdata:function(){
        const that= this
          let day=null
        if(typeof (that.comments.due)==="string"){
          console.log("是字符串")
              day=  that.$createUtils.formatTime(new Date(that.comments.due))
        }else {
          day = this.$createUtils.formatTime(that.comments.due)
        }
        return day
      }
    },
    methods:{
      mycomment:function(){
         this.$emit('showinput',this.index,this.comments._id)
      },
      clickLike:function() {
        const that = this
        console.log(typeof (that.index))
        console.log("点击了第"+that.index)
        console.log('修改前的likers'+that.comments.likers)
        if(that.Ilike==true) {
          that.Ilike=false
          that.$emit('reducelikers',that.index)
          console.log("减少结束")
        }else{
          that.Ilike=true
          that.$emit('addlikers',that.index)
          console.log("增加结束")
        }
        console.log('修改后的likers'+that.comments.likers)
      }
    }
  };
</script>

<style scoped>

.container{
  width: 92%;
  height: auto;
  border-bottom: 8px solid #EEE;
  border-radius: 2%;
  box-shadow: 5px 5px 5px #eee;
  margin-left: 4%;
}
.body{
  display: flex;
  justify-content: flex-start;
}
  .head{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #EEE;
    display: flex;
    justify-items: center;
    justify-content: space-between;


  }
  .head_left{
     height: 50px;
    width:auto;

  }
  .headImage{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin:10px 10px 0px  5px;

  }
  .head_right{
    height: 50px;
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .delete img{
    align-self: self-end;
    width: 25px;
    height: 25px;
  }
  .publicDate{
    font-size: 8px;
  }
  .userName{
    font-size: 10px;
  }
  .content{
    width: 100%;
    font-size: 12px;
    margin: 8px 0 8px 0px ;
  }
  .operation{
    font-size: 10px;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    justify-items: center;

  }
  .operation text{
    margin-right: 5px;
  }
.operation_img{
    width: 18px;
    height:16px;
    margin-right: 10px;
  }

</style>
