<!--模板-->
<template>
 <div class="container">
<!--大图滑块-->
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

   <!--导航栏-->
   <div class="nav" >
     <div  class="nav-item-head" >
     <text v-for="(item,index) in navs" :key="index"  :class="{'bor':nowindex==index}" @click="showMyContents(index)">{{item.title}}</text>
     </div>
   </div>

   <!--内容列表-->
   <div class="contents">
    <div content-item v-for="(item ,index) in nowContents"  :key="index" @click.stop="linktonews">
     <contents_item :content="item" ></contents_item>
    </div>
   </div>
 </div>
</template>


<!--js脚本-->

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
        head:'山东警方通报七大新变种传销犯罪',
        source:'中国青年网',
        content:'央广网济南5月24日消息（记者刘颖超）记者今天从山东省公安厅获悉，随着移动互联网、网络购物、跨境电商等网络概念和营销方式的发展，传销犯罪呈现新的形式和特点。警方提醒，近期传销犯罪出现7个新变种，希望群众加强防范。\n' +
          '\n' +
          '变种1：金融传销\n' +
          '\n' +
          '承诺高收益，引诱投资。这种吸收资金的行为名目常见的有“××金融互助社区”、“××金融互助平台”、“××金融互助理财”、“××慈善金融互助平台”、“××金融互助投资”、“××互助社区”、“××财富互助平台”等。这种行为隐蔽性强，多由境外人员远程操控，投资款往往通过个人银行账户网银转账或通过第三方支付平台流转。',
        time:'2019年05月24日'
      },
      imgUrls: [
        'https://images.heyzen.club/anti_1.jpg',
        'https://images.heyzen.club/anti_3.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      nowindex:0,
      navs:[
        {
          title: '新闻资讯',
          content:'新闻资讯',
          contents:[
            {
              head:'山东警方通报七大新变种传销犯罪',
              source:'中国青年网',
              content:'央广网济南5月24日消息（记者刘颖超）记者今天从山东省公安厅获悉，随着移动互联网、网络购物、跨境电商等网络概念和营销方式的发展，传销犯罪呈现新的形式和特点。警方提醒，近期传销犯罪出现7个新变种，希望群众加强防范。\n' +
                '\n' +
                '变种1：金融传销\n' +
                '\n' +
                '承诺高收益，引诱投资。这种吸收资金的行为名目常见的有“××金融互助社区”、“××金融互助平台”、“××金融互助理财”、“××慈善金融互助平台”、“××金融互助投资”、“××互助社区”、“××财富互助平台”等。这种行为隐蔽性强，多由境外人员远程操控，投资款往往通过个人银行账户网银转账或通过第三方支付平台流转。',
              time:'2019年05月24日'
            },
            {
              head:'北海警方五城同时开展抓捕 多名大头目被抓',
              source:'中国青年网',
              content:'5月23日凌晨3时许，我市公安机关兵分多路对“5·7”特大传销专案进行收网。据悉，该特大传销团伙涉案人员多达1300多人，涉案金额达7800万元，当天行动共抓获19名犯罪嫌疑人，扣押7辆涉案车辆。\n' +
                '\n' +
                '“5.7”特大传销专案线索由市公安局经侦支队在工作中发现，经过一个月的经营，在市公安局技侦、网安、情报支队等部门的大力支持配合下，查获了这一传销违法犯罪团伙。该传销团伙涉及人员1300多人，涉案金额达7800万元，团伙头目以内蒙古、山西籍人员为首，成员涉及河北、河南等多省市。在我市去年百日会战打击传销的高压态势之下，该传销团伙仍以更加隐蔽的手段和方式发展团队。收网行动',
              time:'2019年05月24日'

            },
            {
              head:'“悦花越有”的数名传销头目 在山东被判刑',
              source:'齐鲁网',
              content:'齐鲁网滨州5月24日讯5月24日，滨州市沾化区人民法院依法对刘玉龙等8名被告人组织、领导传销活动一案公开开庭宣判。\n' +
                '\n' +
                '法院经审理查明，被告人刘玉龙等人通过“悦花越有”系统平台，以可获得各种奖励为诱饵，要求参加者交纳费用以获得二星级以上会员资格，二星级以上会员按照推荐的顺序组成层级，直接或间接以发展人员的数量作为返利依据，以高额回报为诱饵，引诱、吸引会员继续发展他人参加，骗取财物，扰乱经济社会秩序，其行为均已构成组织、领导传销活动罪，依法应予惩处。',
              time:'2019年05月24日'
            }
          ]
        },
        {
          title: '深度好文',
          content:'深度好文',
          contents:[
            {
              head:'趣步APP是披着区块链外衣的传销骗局吗？',
              source:'互联网',
              content:'零投入，赚钱靠走路？这款区块链APP到底是“资金盘”还是“摇钱树”\n' +
                '\n' +
                '　　每经记者 潘婷\n' +
                '\n' +
                '　　“用趣步每天走路4000步”=“月入十几万元”+“饭店、旅游、健身、宾馆甚至买房服务”。零投入，走路就赚钱，这样的好事是真的吗？微博上有人说的“趣步每天4000步，手机变成摇钱树！”，可信度又有几分？《每日经济新闻》记者调查发现，市面上出现的这款名为“趣步”的“区块链平台”APP可没那么简单，想月入十几万元可能需要付出更多“代价”。真相究竟如何，记者为此展开了深入调查。',
              time:'2019年05月17日'

            }

          ]
        },
        {
          title: '案例解读',
          content:'案例解读',
          contents:[
            {
              head:'特大网络传销犯罪团伙“云联惠”一涉案“网逃”',
              source:'央广网',
              content:'“云联惠”特大网络传销犯罪团伙中一名湖南籍涉案男子近日在海口东站乘车时，被海口铁路警方擒获。目前，刘某将移交立案警方做进一步侦查处理。\n' +
                '\n' +
                ' \n' +
                '\n' +
                '　　据介绍，“云联惠”特大网络传销犯罪团伙成立广东云联惠网络科技有限公司，并依托该公司“云联商城”，以“消费全返”等为幌子，采取拉人头、交纳会费、积分返利等方式引诱人员加入，骗取财物，严重扰乱经济社会秩序，涉嫌组织、领导传销活动犯罪。\n' +
                '\n' +
                ' \n' +
                '\n' +
                '　　5月14日18时，海口东车站派出所民警在海口东站进站口开展治安巡逻时，通过身份信息比对系统获网上在逃人员刘某，警方将其控制并带回派出所做进一步核查。经查，今年68岁的刘某系湖南省长沙市人，其在“云联惠”特大网络传销犯罪团伙中发展下线人数17人，涉嫌组织、领导传销犯罪活动。2018年5月9日，湖南省岳阳市公安局对涉案人员刘某进行网上通缉。',
              time:'2018年05月19日'
            }
          ]
        }
      ]
    }
  },
  components:{
    contents_item
  },
  methods:{
    linktonews:function(){
      console.log("进来了")
      const url ='../news/main'
      wx.navigateTo({url})
    },
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

<!--样式-->
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
