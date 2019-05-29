<template>
  <div :class=" myclass.rotateInDownLeft" class="container animated infinite">
    <div class="head" >
      <button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo" class="head-button" v-if="hasbutton">
        {{buttonValue}}
      </button>
        <image :src="userInfo.avatarUrl" class="head-image" ></image>
      <text  class="username" > {{userInfo.nickName}}</text>
    </div>
    <div class="content">
        <div class="content-item">
          <a href = "../../pages/add_comment/main" > <img src="https://images.heyzen.club/heihei.png">我 的 问 答</a>
        </div>
      <div class="content-item">
        <a href = "#"><img src="https://images.heyzen.club/aboutme.png">关 于 我 们</a>
      </div>
      <div class="content-item">
        <a href ="#"><img src="https://images.heyzen.club/que.png">问 题 反 馈</a>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'user',
   data () {
     return {
       myclass:{
         rotateInDownLeft:''
       },
       buttonValue: '微信登陆',
       hasbutton: true,
       userInfo: {},
       head_icon:"/static/images/head.jpg",
       myannimation:null
     }
   },
   methods: {
     bindGetUserInfo:  function(e) {
       const that = this
         let errMsg = e.mp.detail.errMsg.replace('getUserInfo:', '')
         if (errMsg.startsWith('ok')) {
           let user = e.mp.detail.rawData
           let val = JSON.parse(user)
           console.log("用户是" + user)
           that.hasbutton = false
           that.$set(that.userInfo, 'nickName', val.nickName)
           that.$set(that.userInfo, 'gender', val.gender)
           that.$set(that.userInfo, 'avatarUrl', val.avatarUrl)
           that.$set(that.userInfo, 'province', val.province)
           that.$set(that.userInfo, 'city', val.city)
           console.log("登陆的用户信息是"+JSON.stringify(that.userInfo))
           wx.setStorageSync('anti_userInfo', that.userInfo)
           const db = wx.cloud.database()
          db.collection('user').where({
             nickName:val.nickName
           }).get().then(res=>{
             if(res.data.length!=0) {
               console.log(res.data)
               console.log("存在用户信息，不新增数据" + JSON.stringify(res))
             }else{
               db.collection('user').add({
                 data:{
                   ...that.userInfo,
                   description: 'add a new user',
                   due: new Date(),
                   tags: [
                     'cloud',
                     'database'
                   ],
                 },
                 success:function(res) {
                   console.log(res);
                 }
               })
             }
           })
         } else {
           console.log('取消登陆')
         }

     }
   },
   onShow() {

     console.log('获取用户信息')
     var that = this
     const anti_userInfo=wx.getStorageSync('anti_userInfo')
     if (anti_userInfo !== undefined && anti_userInfo !== ''&&anti_userInfo!=null) {
       console.log("存在用户信息")
       let user = anti_userInfo
       console.log(JSON.stringify(user))

         that.$set(that.userInfo, 'nickName', user.nickName)
         that.$set(that.userInfo, 'gender', user.gender)
         that.$set(that.userInfo, 'avatarUrl', user.avatarUrl)
         that.$set(that.userInfo, 'province', user.province)
         that.$set(that.userInfo, 'city', user.city)
         that.$set(that, 'hasbutton', false)
         that.buttonValue = '登陸'
         console.log("设置成功" + JSON.stringify(that.userInfo) + "---" + that.hasbutton)

     } else {
       console.log('没有userInfo')
       wx.setStorageSync('anti_userInfo', null)
     }
      that.$set(that.myclass, 'rotateInDownLeft', "bounceIn")
     setTimeout(() => {
       that.$set(that.myclass, 'rotateInDownLeft', "")
     }, 500)
   }
 }
</script>

<style scoped>

  .container{
       width: 96%;
       height: auto;
    position: fixed;
    left: 2%;
    top:20px;
    box-shadow:2px 2px 3px #aaaaaa ;
     }

  .head{
    width: 100%;
    height:100px;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    justify-content:left;
    align-items: center;
    text-align: center;
  }
  .head-button{
    font-size: 14px;
  }
  .username{
    /*width: 50%;*/
    height: 30px;
    font-size: 16px;
    /*text-align: center;*/
    padding-top: 20px;
    margin-left: 50px;
    font-family: Constantia;
  }
  .head-image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
    border: red solid 1px;
  }
  .content{
    width: 100%;
   /* height: 100px;*/
  }
  .content-item{
    width: 98%;
    height: 50px;
    line-height: 50px;
    border-bottom: 0px solid #e6e6e6;
    display: inline-block;
  }
  .content-item a{
    font-family: Constantia;
    font-size: 14px;
    line-height: 50px;
    height: 50px;
    font-weight: bold;
  }
  .content-item img {
    height: 25px;
    width: 25px;
    margin-right: 30px;
    vertical-align: middle;
    margin-left: 50px;
  }

</style>
