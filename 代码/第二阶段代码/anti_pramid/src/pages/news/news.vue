<template>
<div>
  <mynews :news="news"></mynews>
</div>
</template>
<script>
  import mynews from '../../components/news'
  import {mapState,mapMutations}  from 'vuex'
export  default {
  name:'news',
  data(){
  return {
    news:{
      title:'山东警方通报七大新变种传销犯罪',
      source:'中国青年网',
      content:'央广网济南5月24日消息（记者刘颖超）记者今天从山东省公安厅获悉，随着移动互联网、网络购物、跨境电商等网络概念和营销方式的发展，传销犯罪呈现新的形式和特点。警方提醒，近期传销犯罪出现7个新变种，希望群众加强防范。\n' +
        '\n' +
        '变种1：金融传销\n' +
        '\n' +
        '承诺高收益，引诱投资。这种吸收资金的行为名目常见的有“××金融互助社区”、“××金融互助平台”、“××金融互助理财”、“××慈善金融互助平台”、“××金融互助投资”、“××互助社区”、“××财富互助平台”等。这种行为隐蔽性强，多由境外人员远程操控，投资款往往通过个人银行账户网银转账或通过第三方支付平台流转。',
      publicTime:'2019年05月24日'
    }
  }
  },
  components:{
    mynews
  },
  computed:{
    ...mapState('news',{news:'news',newsOne:'newsOne'})
  },
  methods:{
    ...mapMutations('news',{getOneById:'getOneById'})
  },
  onLoad(query){
    console.log("进来了"+query.index)
  /*  this.news=this.getOneById('XQjC86CEPC1o_HDl')*/
  },
  onShow(){
   const news=this.getOneById('XQjC86CEPC1o_HDl')
    console.info(news)
  }

}
</script>
<style scoped>

  </style>
