<template>
  <div class="wrap">
    <div class="head">
        <div  class="head_left">
          <img :src="childcomment.imageSrc" class="headImage">
        </div>
        <div class="head_right">
          <text  class="userName">{{childcomment.userName}}</text>
        </div>
    </div>
    <div class = "middle_content">
      <text class="content_">{{childcomment.content}}</text>
    </div>
    <div  class="nowtime">
      <text class="publicDate">{{nowdata}}</text>
    </div>
  </div>

</template>

<script>
  export default {
    name: "childcomment",
    props:['childcomment'],
    created(){

    },
    methods:{
      getcomment:{

      }
    },
    computed:{
      nowdata:function(){
        const that= this
        let day=null
        if(typeof (that.childcomment.due)==="string"){
          console.log("是字符串")
          day=  that.$createUtils.formatTime(new Date(that.childcomment.due))
        }else {
          day = this.$createUtils.formatTime(that.childcomment.due)
        }
        return day
      }
    },



  };
</script>

<style scoped>
  .wrap{
    width: 85%;
    height: auto;
    border-bottom: 8px solid #EEE;
    border-radius: 2%;
    box-shadow: 5px 5px 5px #eee;
    margin-left: 10%;
    border-color: #66CCFF;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .head{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #EEE;
    display: flex;
    justify-items: center;
    justify-content: flex-start;

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
  .publicDate{
    font-size: 8px;
  }
  .userName{
    font-size: 10px;
    color:dodgerblue;
    font-weight: bold;
  }
  .content_{
    font-size: 12px;
  }
  .nowtime{
    width: 100%;
    font-size: 12px;
    margin: 8px 0 8px 0px ;
  }
  . middle_content{
    width: 100%;
    font-size: 12px;
    margin: 8px 0 8px 0px;
  }

</style>
