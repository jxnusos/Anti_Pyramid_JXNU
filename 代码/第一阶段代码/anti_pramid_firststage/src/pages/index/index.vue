<template>
 <div class="container">
   <div  class="swiper">
   <swiper
     :indicator-dots="indicatorDots"
     :autoplay="autoplay"
     :interval="interval"
     :duration="duration"
   >
     <block v-for="(item,index) in imgUrls" :key="index">
       <swiper-item>
         <image :src="item" class="slide-image" />
       </swiper-item>
     </block>
   </swiper>
   </div>
   <div class="nav" >
     <div  class="nav-item-head" >
     <text v-for="(item,index) in navs" :key="index"  :class="{'bor':nowindex==index}" @click="showMyContents(index)">{{item.title}}</text>
    </div>
     </div>
   <div class="contents">
    <div content-item v-for="(item ,index) in nowContents"  :key="index">
     <contents_item :content="item"></contents_item>
    </div>
   </div>
 </div>
</template>

<script>
import contents_item from '@/components/contents_item'
export default {
  name: 'index',
  computed:{
    nowContents:function() {

      const that = this
      const  nowindex = that.nowindex
      return that.navs[nowindex].contents
    }
  },
  data(){
    return {
      content:{
        head:'探秘小众香氛之旅，解锁神秘收藏家的真实身份',
        source:'SEPHORA丝芙兰',
        content:'本次课程特意邀请渡一教育CTO，原美团外卖高级开发工程师，核心架构师，有沈腾一样声线的美男子---常立峰（Panda老师）为大家细说TCP协议。',
        time:'今天'
      },
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      nowindex:0,
      navs:[
        {
          title: '最新资讯',
          content:'最新资讯',
          contents:[
            {
              head:'探秘小众香氛之旅，解锁神秘收藏家的真实身份',
              source:'SEPHORA丝芙兰',
              content:'本次课程特意邀请渡一教育CTO，原美团外卖高级开发工程师，核心架构师，有沈腾一样声线的美男子---常立峰（Panda老师）为大家细说TCP协议。',
              time:'今天'

            },
            {
              head:'探秘小众香氛之旅，解锁神秘收藏家的真实身份',
              source:'SEPHORA丝芙兰',
              content:'本次课程特意邀请渡一教育CTO，原美团外卖高级开发工程师，核心架构师，有沈腾一样声线的美男子---常立峰（Panda老师）为大家细说TCP协议。',
              time:'今天'

            },
            {
              head:'探秘小众香氛之旅，解锁神秘收藏家的真实身份',
              source:'SEPHORA丝芙兰',
              content:'本次课程特意邀请渡一教育CTO，原美团外卖高级开发工程师，核心架构师，有沈腾一样声线的美男子---常立峰（Panda老师）为大家细说TCP协议。',
              time:'今天'

            }
          ]
        },
        {
          title: '通知公告',
          content:'通知公告',
          contents:[
            {
              head:'探秘小众香氛之旅，解锁神秘收藏家的真实身份',
              source:'SEPHORA丝芙兰',
              content:'本次课程特意邀请渡一教育CTO，原美团外卖高级开发工程师，核心架构师，有沈腾一样声线的美男子---常立峰（Panda老师）为大家细说TCP协议。',
              time:'今天'

            }

          ]
        },
        {
          title: '学校新闻',
          content:'学校新闻',
          contents:[
          ]
        }
      ]
    }
  },
  components:{
    contents_item
  },
  methods:{
    changeindex:function(index){
      this.nowindex=index
    },
    showMyContents:function(e) {
      console.log(e)
      this.changeindex(e)
    }
  },

  onPullDownRefresh(){
      wx.showNavigationBarLoading({
          success:function(){
            console.log("下拉加载")
          }
      })
    setTimeout(wx.hideNavigationBarLoading,1000)

  },
  onReachBottom(){

  }
}
</script>

<style scoped>
  .bor{
  border-bottom: 2px solid #CCC;
    font-weight: bold;
  }
  .container{
    width: 100%;
    height: 100%;

  }
  .nav-item-head{
    width: 100%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 500;
    border-bottom:1px solid #EEE ;
    display:flex;
    justify-content: space-around;
    justify-items: center;
  }

.swiper{
  width: 100%;
}
  .slide-image{
    width: 100%;
    height: 200px;
  }
</style>
