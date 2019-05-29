<template>
  <div  class="wrap">
    <form @submit="confirm">
    <textarea  showConfirmBar="false" cursor-spacing=0 name="content"  autofocus="true" placeholder="分享我的信息..." placeholder-style="font-size:14px;font-weight:100;color:#aaa">
    </textarea>
      <button form-type="submit" :disabled="isdisabled">发    表</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "mytextarea",
    data(){
      return {
        isdisabled:false
      }
    },
    methods: {
      confirm: function(event) {
        const that= this
        if (event.mp.detail.value.content == ''||that.isdisabled==true) {

        } else {
          that.isdisabled=true
          console.log(event.mp.detail.value)
          that.$emit('confirm', event.mp.detail.value)
          setTimeout(()=>{that.isdisabled=false},1000)
        }
      }
    }
  }
</script>

<style scoped>
.wrap{
 width: 94%;
  height: auto;
  box-shadow: 5px 5px 5px #eee;
  margin-top: 10px;
  margin-left: 3%;
  background-color: #EEE;
}
  .wrap button{
    margin-top: 10px;
    background-color: #c62f2f;
    color: white;
  }
</style>
