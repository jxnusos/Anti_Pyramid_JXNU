<template>
  <div class="wrap">
  <mytextarea @confirm="confirm" ></mytextarea>
  </div>
</template>
<script>
  import mytextarea from '@/components/mytextarea'
  export default {
    name: "addcomment",
    components:{mytextarea},
    methods:{
      confirm:function(e) {
        console.log(e.content)
          const that = this
          console.log(e)
          console.log("进来了")
        console.log(that.$MyConfig.test_env)
          const db = wx.cloud.database({env:that.$MyConfig.test_env})
          const user = wx.getStorageSync('anti_userInfo')
          db.collection('comments').add({
            data: {
              due: new Date(),
              content: e.content,
              userName: user.nickName,
              imageSrc: user.avatarUrl,
              likers:0,
              childcomment:0
            }
          }).then(res => {
            const likers= 'likers'+res._id
            const childcomment='childcomment'+res._id
           wx.setStorageSync(likers,0)
            wx.setStorageSync(childcomment,0)
            wx.showToast({
              title: '发布成功！',
              icon: 'success',
              mask: true
            })
          }).then(res => {
            setTimeout(() => {
              let url = '../comments/main'
              wx.navigateBack({
                url
              })
            }, 1500)

          })
        }
      }

  };
</script>

<style scoped>

</style>
