<template>
  <div class="formdiv"  z-index=100>
    <form class="myform" @submit="mysubmit" v-if="focus">
      <input type="text" value="" :adjust-position="adjustPosition" adjust-position="true" @blur.prevent="inputblur"  name="content" v-model="childcomment" :focus="focus"  class="myinput" placeholder-style="color:#EEE" placeholder="说点什么吧...">
      <button form-type="submit"  class="mysubmit">完成</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "myinput",
    props:['focus'],
    data(){
      return{
        childcomment:''
      }
    },
    created(){
      console.log("myinput created")
    },
    onLoad(){
      console.log("myinput onload")
    },
    onShow(){
      console.log("myinput onshow")
    },
    methods:{
      mysubmit:function(res) {
        this.$emit('mysubmit',res.mp.detail.value.content)
      },
      inputblur(){
        this.$emit('inputblur')
      }
    }

  };
</script>

<style scoped>
  .formdiv{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 250px;
  }
  .myinput{
    width: 80%;
    height: 30px;
    font-size: 16px;
    background-color: #FFF;
    border: 1px solid #EEE;
    font-size: 14px;

  }
  .mysubmit{
    width: 18%;
    height: 30px;
    background-color: #EEE;
    color: #FFF;
    position: absolute;
    right: 1%;
    top:0px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;

  }
</style>
