<template>
    <div class="wrap">
      <div class="head">
        <text >{{content.head}}</text>
      </div>

      <div class="content">
        <text class="content_">{{content.content}}</text>
        <text  class="t"></text>
      </div>
      <div class="message">
        <text>{{content.source}}</text>
        <text>{{content.time}}</text>
      </div>

    </div>
</template>

<script>
  export default {
    name: "contents_item",
    props:['content']
  };
</script>

<style scoped>
.wrap{
  width: 92%;
  box-shadow: 5px 5px 5px #eee;
  height: auto;
  margin-left: 4%;
  border-radius: 2%;
  border-bottom: 8px solid #EEE;
}
  .head{
    width:100%;
    height: 24px;
  }
.head text{
  margin: 5px;
  font-size: 14px;
  line-height: 20px;
}
  .message{
   width: 100%;
    height: 10px;
    text-align: right;
    line-height: 10px;
    margin-bottom: 10px;
  }
  .message text{
    font-weight: 100;
    font-size: 8px;
    margin-top: 5px;
    margin-right: 10px;

  }
  .content {
    width: 100%;
    height: 28px;
  }
  .content_{

    line-height: 14px;
    font-size: 10px;
    font-weight: 100;
    display: -webkit-box;
   -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 5px;
  }


</style>
